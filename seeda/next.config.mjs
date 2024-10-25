/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enables React's strict mode
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                pathname: '**',
            },
        ],
    },
};

// Use ES module export syntax
export default nextConfig;
