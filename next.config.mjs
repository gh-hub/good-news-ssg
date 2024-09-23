/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['he'], // Hebrew locale
    defaultLocale: 'he', // Set Hebrew as the default language
    localeDetection: false, // Disable automatic locale detection
  },
  reactStrictMode: true,
  images: {
    domains: ['goodnews2day.net','res.cloudinary.com']
  },
};

export default nextConfig;
