import { NextRequest, NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

// Fallback in-memory counter when Supabase isn't configured
let inMemoryCount = parseInt(process.env.INITIAL_VISITOR_COUNT || '1000');

export async function GET(request: NextRequest) {
  try {
    // Check if visitor already tracked today
    const visitorCookie = request.cookies.get('visitor_tracked');
    const shouldIncrement = !visitorCookie;

    let currentCount = inMemoryCount;

    if (isSupabaseConfigured && supabase) {
      // Get current count from database
      const { data: countData, error: fetchError } = await supabase
        .from('visitor_count')
        .select('count')
        .eq('id', 1)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        console.error('Fetch visitor count error:', fetchError);
      }

      currentCount = countData?.count || inMemoryCount;

      // Increment if new visitor
      if (shouldIncrement) {
        currentCount += 1;

        const { error: updateError } = await supabase
          .from('visitor_count')
          .upsert({ id: 1, count: currentCount, updated_at: new Date().toISOString() });

        if (updateError) {
          console.error('Update visitor count error:', updateError);
        }
      }
    } else {
      // Use in-memory counter
      if (shouldIncrement) {
        inMemoryCount += 1;
        currentCount = inMemoryCount;
      }
    }

    const response = NextResponse.json({ count: currentCount }, { status: 200 });

    // Set cookie to track visits (expires in 24 hours)
    if (shouldIncrement) {
      response.cookies.set('visitor_tracked', 'true', {
        maxAge: 24 * 60 * 60, // 24 hours
        path: '/',
        httpOnly: true,
        sameSite: 'lax',
      });
    }

    return response;
  } catch (error) {
    console.error('Visitor count error:', error);
    // Return a fallback count on error
    return NextResponse.json({ count: 1000 }, { status: 200 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, value } = body;

    if (!isSupabaseConfigured || !supabase) {
      // Handle in-memory
      if (action === 'get') {
        return NextResponse.json({ count: inMemoryCount }, { status: 200 });
      }
      if (action === 'set' && typeof value === 'number') {
        inMemoryCount = value;
        return NextResponse.json({ count: inMemoryCount }, { status: 200 });
      }
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    if (action === 'get') {
      const { data, error } = await supabase
        .from('visitor_count')
        .select('count')
        .eq('id', 1)
        .single();

      if (error) {
        return NextResponse.json({ count: inMemoryCount }, { status: 200 });
      }

      return NextResponse.json({ count: data?.count || inMemoryCount }, { status: 200 });
    }

    if (action === 'set' && typeof value === 'number') {
      const { error } = await supabase
        .from('visitor_count')
        .upsert({ id: 1, count: value, updated_at: new Date().toISOString() });

      if (error) {
        throw error;
      }

      return NextResponse.json({ count: value }, { status: 200 });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Visitor count error:', error);
    return NextResponse.json(
      { error: 'Failed to update visitor count' },
      { status: 500 }
    );
  }
}
