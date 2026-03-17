import type {Metadata} from 'next';
import LocationsPage from '../../locations/page';

const metadataByLocale: Record<string, Metadata> = {
  en: {
    title: 'Our Locations | Integrated Healthcare',
    description:
      'Visit Integrated Healthcare locations in Miami, Coral Gables, and Hialeah. Find mapped addresses, directions, phone number, and office hours.',
    alternates: {canonical: '/en/locations'},
  },
  es: {
    title: 'Nuestras ubicaciones | Integrated Healthcare',
    description:
      'Visita las sedes de Integrated Healthcare en Miami, Coral Gables y Hialeah. Encuentra direcciones mapeadas, cómo llegar, teléfono y horarios.',
    alternates: {canonical: '/es/locations'},
  },
};

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return metadataByLocale[locale] ?? metadataByLocale.en;
}

export default LocationsPage;
