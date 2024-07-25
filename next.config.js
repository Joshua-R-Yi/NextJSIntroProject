/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/pokemon_finder',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
