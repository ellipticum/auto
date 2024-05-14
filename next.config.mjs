/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: ['./src'],
        prependData: `
            @import '/src/shared/styles/mixins/globals.scss';
            @import '/src/shared/styles/mixins/text.scss';
        `
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.leonardo.ai',
                port: '',
                pathname: '/**',
            },
        ]
    }
}

export default nextConfig
