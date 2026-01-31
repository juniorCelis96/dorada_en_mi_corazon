/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.module\.styl$/,
      use: [
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]___[hash:base64:5]'
            }
          }
        },
        {
          loader: 'stylus-loader',
          options: {
            stylusOptions: {
              compress: false
            }
          }
        }
      ]
    })
    return config
  }
}

module.exports = nextConfig
