import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Our Locations | Integrated Healthcare',
  description:
    'Visit Integrated Healthcare locations in Miami, Coral Gables, and Hialeah. Find mapped addresses, directions, phone number, and office hours.',
  alternates: {
    canonical: '/locations',
  },
  openGraph: {
    title: 'Our Locations | Integrated Healthcare',
    description:
      'Visit Integrated Healthcare locations in Miami, Coral Gables, and Hialeah. Find mapped addresses, directions, phone number, and office hours.',
    url: '/locations',
    type: 'website',
  },
};

export default function LocationsLayout({children}: {children: React.ReactNode}) {
  return children;
}
