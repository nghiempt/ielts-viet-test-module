/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn-icons-png.flaticon.com',
                port: '',
                pathname: '/128/**',
            },
            {
                protocol: "https",
                hostname: "ktdcgroup.vn",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
            {
                protocol: "https",
                hostname: "upload.wikimedia.org",
            },
            {
                protocol: "https",
                hostname: "scontent.fsgn8-4.fna.fbcdn.net",
            },
        ],
    },
};

export default nextConfig;
