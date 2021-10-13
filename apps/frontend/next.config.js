/* eslint-disable */
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer()

module.exports = withLess({
  publicRuntimeConfig: {
    REDIRECT_URI: process.env.VERCEL_URL ? process.env.NEXT_PUBLIC_REDIRECT_URI : 'http://localhost:4200/',
  },
  target: 'serverless',
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: {
      'primary-color': '#0F93E1',
      Y1: '#FF710F',
      'font-family': 'Nunito',
    },
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ]
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]
    }
    return config
  }
})
