export const SITE_URL = 'https://www.econur.uz';
export const SITE_NAME = 'Eco Nur';

export const business = {
  name: 'Eco Nur',
  phone: '+998951973535',
  phone2: '+998901243535',
  city: 'Toshkent',
  country: 'UZ',
  // Aniq manzil — Google Maps profili bilan AYNAN bir xil bo'lishi shart (NAP izchilligi)
  street: 'Quruvchi mahalla',
  district: 'Yunusobod tumani',
  postalCode: '', // bilsangiz qo'shing: masalan '100000'
  // Geo-koordinata — Maps'da nuqtangizni o'ng tugma bilan bosib nusxalang, keyin shu yerga yozing
  geo: {
    lat: 41.2876351, // Google Maps'dan olingan aniq koordinata
    lng: 69.228153,
  },
  priceFrom: 12000,
  priceTo: 15000,
  priceUnit: '1 kv.m',
};

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    url: SITE_URL,
    telephone: business.phone,
    description:
      'Eco Nur — Toshkentda professional gilam yuvish, mebel tozalash va klining xizmatlari. 7+ yillik tajriba, 24/7 xizmat.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.street,
      addressLocality: business.city,
      // Tuman — region maydonida hududiy signal beradi
      addressRegion: business.district,
      ...(business.postalCode ? { postalCode: business.postalCode } : {}),
      addressCountry: business.country,
    },
    // geo faqat to'ldirilgan bo'lsa qo'shiladi (0,0 noto'g'ri nuqta yubormaslik uchun)
    ...(business.geo.lat && business.geo.lng
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: business.geo.lat,
            longitude: business.geo.lng,
          },
          // Xaritadagi aniq nuqtaga bevosita havola — lokal reyting signali
          hasMap: `https://www.google.com/maps?q=${business.geo.lat},${business.geo.lng}`,
        }
      : {}),
    areaServed: {
      '@type': 'City',
      name: 'Toshkent',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tozalash xizmatlari',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gilam yuvish',
            description: 'Professional gilam yuvish xizmati Toshkentda',
          },
        },
      ],
    },
  };
}

// FAQ schema — Google'da "savol-javob" rich-snippet chiqaradi, CTR oshiradi
export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

// Breadcrumb — qidiruv natijasida sayt yo'lini ko'rsatadi (URL o'rniga chiroyli yo'l)
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: business.name,
      url: SITE_URL,
      telephone: business.phone,
    },
    areaServed: business.city,
    url: `${SITE_URL}${path}`,
  };
}
