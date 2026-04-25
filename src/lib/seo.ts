export const siteName = "Venkatesh Ravi Chartered Accountant";

const fallbackUrl = "https://venkateshfinancialservices.com";

export function getBaseUrl(): string {
  const value =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    fallbackUrl;

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value.replace(/\/$/, "");
  }

  return `https://${value}`.replace(/\/$/, "");
}

export const defaultKeywords = [
  "Venkatesh CA",
  "Venkatesh Ravi CA",
  "Venkatesh Financial Service",
  "enaktesh financialservice",
  "Chartered Accountant India",
  "CA firm India",
  "Tax planning services",
  "GST compliance services",
  "Internal audit services",
  "Statutory audit services",
  "Corporate advisory services",
  "Financial planning services",
];

export const siteDescription =
  "Chartered Accountant services for tax planning, GST compliance, statutory audit, internal audit, corporate advisory, and financial planning across India.";

export const pagePaths = [
  "/",
  "/services/statutory-audit",
  "/services/internal-audit",
  "/services/tax-planning",
  "/services/gst-compliance",
  "/services/financial-planning",
  "/services/corporate-advisory",
  "/privacy",
  "/terms",
];

export type ServiceKey =
  | "statutory-audit"
  | "internal-audit"
  | "tax-planning"
  | "gst-compliance"
  | "financial-planning"
  | "corporate-advisory";

export const serviceSeo: Record<
  ServiceKey,
  { title: string; description: string; keywords: string[] }
> = {
  "statutory-audit": {
    title: "Statutory Audit Services in India",
    description:
      "Independent statutory audit services under Companies Act, 2013 with compliance-focused reporting and practical recommendations.",
    keywords: [
      "Statutory Audit",
      "Companies Act audit",
      "Audit firm India",
      "CA audit services",
    ],
  },
  "internal-audit": {
    title: "Internal Audit and Risk Review Services",
    description:
      "Risk-based internal audit services to strengthen governance, controls, and compliance across finance and operations.",
    keywords: [
      "Internal Audit",
      "Risk based audit",
      "Internal controls review",
      "CA internal audit",
    ],
  },
  "tax-planning": {
    title: "Income Tax Planning and Advisory",
    description:
      "Strategic tax planning services under Income Tax Act, 1961 to reduce tax liability with full legal compliance.",
    keywords: [
      "Tax Planning",
      "Income tax consultant India",
      "Corporate tax planning",
      "TDS compliance",
    ],
  },
  "gst-compliance": {
    title: "GST Compliance and Return Filing",
    description:
      "End-to-end GST registration, return filing, ITC reconciliation, and advisory support for Indian businesses.",
    keywords: [
      "GST compliance",
      "GST return filing",
      "GST consultant India",
      "Input tax credit reconciliation",
    ],
  },
  "financial-planning": {
    title: "Financial Planning and Investment Advisory",
    description:
      "Goal-based financial planning, retirement planning, and tax-efficient investment advisory tailored for individuals and businesses.",
    keywords: [
      "Financial planning",
      "Investment advisory India",
      "Retirement planning",
      "Tax saving investments",
    ],
  },
  "corporate-advisory": {
    title: "Corporate Advisory and Compliance Services",
    description:
      "Company incorporation, restructuring, secretarial compliance, and FEMA advisory for growing businesses.",
    keywords: [
      "Corporate advisory",
      "Company incorporation India",
      "Secretarial compliance",
      "FEMA compliance",
    ],
  },
};
