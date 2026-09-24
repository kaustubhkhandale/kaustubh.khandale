import type { Metadata } from 'next';

const siteName = 'Kaustubh Khandale Portfolio';
const title = 'Kaustubh Khandale - Lead UI/UX Designer & Frontend Developer';
const description =
  'Lead UI/UX designer and frontend developer with 8+ years of experience delivering enterprise web applications, portals, and responsive React and Next.js interfaces.';

export const siteMetadata: Metadata = {
  applicationName: siteName,
  title: { default: title, template: `%s | ${siteName}` },
  description,
  keywords: ['Kaustubh Khandale', 'UI/UX designer', 'frontend developer', 'design systems', 'portfolio'],
  authors: [{ name: 'Kaustubh Khandale' }],
  openGraph: { type: 'website', title, description, siteName },
  twitter: { card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};
