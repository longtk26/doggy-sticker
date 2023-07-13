/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "doggystickers.vercel.app",
                port: "",
                pathname: "/_next/image/**",
            },
        ],
    },
};

module.exports = nextConfig;
