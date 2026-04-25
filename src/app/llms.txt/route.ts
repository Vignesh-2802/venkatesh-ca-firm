import { getBaseUrl } from '@/lib/seo';

export async function GET() {
  const baseUrl = getBaseUrl();

  const body = `# Venkatesh Ravi Chartered Accountant

> Official website for CA services in India.

## Summary
Venkatesh Ravi provides chartered accountant services including statutory audit, internal audit, GST compliance, tax planning, financial planning, and corporate advisory.

## Canonical site
${baseUrl}/

## Core pages
- ${baseUrl}/
- ${baseUrl}/services/statutory-audit
- ${baseUrl}/services/internal-audit
- ${baseUrl}/services/tax-planning
- ${baseUrl}/services/gst-compliance
- ${baseUrl}/services/financial-planning
- ${baseUrl}/services/corporate-advisory

## Contact
- Email: contact@venkateshfirm.com

## Crawl policy
Use canonical URLs and the sitemap for indexing.
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
