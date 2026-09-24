import type { Metadata } from 'next';

const siteName = 'Alex Vance Portfolio';
const title = 'Alex Vance - Lead Product Designer & Frontend Architect';
const description =
  'Senior product designer and frontend engineer with 8+ years of production craft turning high-friction business complexity into intuitive, scalable, developer-grade software.';

export const siteMetadata: Metadata = {
  applicationName: siteName,
  title: { default: title, template: `%s | ${siteName}` },
  description,
  keywords: ['Alex Vance', 'product designer', 'frontend architect', 'design systems', 'portfolio'],
  authors: [{ name: 'Alex Vance' }],
  openGraph: { type: 'website', title, description, siteName },
  twitter: { card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};
