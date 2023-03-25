// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental: {
//       appDir: true,
//     },
//   }
  
  // // next.config.js
  // module.exports = {
  //   nextConfig: {
  //     experimental: {
  //       appDir: true,
  //     }
  //   },
    
  //   images: {
  //     domains: ['links.papareact.com', 'fakestoreapi.com']
  //   }
  // }
  
// next.config.js
module.exports = {
  reactStrictMode: true,
  
  experimental: {
          appDir: true,
        },
  images: {
    domains: ['links.papareact.com', 'fakestoreapi.com', 'api.escuelajs.co/api/v1/products', 'api.lorem.space', 't3.ftcdn.net'],
  },
}


