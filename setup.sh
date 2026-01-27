#!/bin/bash

# Venkatesh Ravi - CA Firm Website Setup Script
# This script helps you quickly set up the development environment

set -e

echo "🚀 Venkatesh Ravi - Premium CA Firm Website"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
    echo ""
fi

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local template..."
    cat > .env.local << 'EOF'
# Database (Optional)
DATABASE_URL="postgresql://user:password@localhost:5432/venkatesh_ca"

# Email Configuration
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
SMTP_FROM_EMAIL="noreply@venkateshfirm.com"
SMTP_TO_EMAIL="vigneshravichandran2899@gmail.com"

# Contact Info
CONTACT_EMAIL="contact@venkateshfirm.com"
CONTACT_PHONE="+91-80-XXXX-XXXX"
CONTACT_ADDRESS="Your office address here"

# API
NEXT_PUBLIC_API_URL="http://localhost:3000"
NEXT_PUBLIC_CONTACT_EMAIL="contact@venkateshfirm.com"
EOF
    echo "✅ Created .env.local"
    echo "⚠️  Please update .env.local with your configuration"
    echo ""
fi

# Build check
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🎉 Setup complete! You can now:"
    echo "   npm run dev    - Start development server"
    echo "   npm run build  - Build for production"
    echo "   npm start      - Start production server"
    echo ""
    echo "📖 For setup instructions, see SETUP.md"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
