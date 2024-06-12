/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // Disable ESLint during the build process
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'arino-nextjs.vercel.app'
            }
            , {
                protocol: 'https',
                hostname: 'www.chainalysis.com'
            }
            , {
                protocol: 'https',
                hostname: 's3-ap-south-1.amazonaws.com'
            }
            , {
                protocol: 'https',
                hostname: 'www.pexels.com'
            }
            , {
                protocol: 'https',
                hostname: 'images.pexels.com'
            }

        ]
    },
};

export default nextConfig;
