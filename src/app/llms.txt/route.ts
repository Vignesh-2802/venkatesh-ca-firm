import { getBaseUrl } from '@/lib/seo';

export async function GET() {
  const baseUrl = getBaseUrl();

  const body = `# Venkatesh Financial Services

> Official website for VenkateshFinancialServices.com.

## Summary
Venkatesh Financial Services provides professional Chartered Accountant and financial advisory services, including statutory audit, internal audit, GST compliance, tax planning, financial planning, and corporate advisory for Indian businesses.

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

## Brand keywords
- Venkatesh CA
- Venkatesh Financial Services
- Venkatesh Ravi CA
- enaktesh financialservice
- Chartered Accountant India

## Contact
- Email: contact@venkateshfinancialservices.com

## Crawl policy
Use canonical URLs, sitemap, and structured metadata for indexing.
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
