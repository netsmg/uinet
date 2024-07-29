// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxtjs/supabase", "nuxt-vue3-google-signin", "@stefanobartoletti/nuxt-social-share", "@vite-pwa/nuxt", "@nuxtjs/device", "nuxt-security", "nuxt-gtag"],
  site: {
    url: 'https://web-libnet.vercel.app',
  },
  supabase: {
redirect: false
},
  socialShare: {
    baseUrl: 'https://web-libnet.vercel.app'
   },
  gtag: {
    id: 'G-NEE9ZLKHHE'
  },
    runtimeConfig: {
    // Private runtime config (server-side only)
    supabase: {
      url: process.env.SUPABASE_URL,
      key: process.env.SUPABASE_KEY
    },
      googleSignIn: {
        clientId: process.env.GOOGLE_SIGNIN_CLIENT_ID
      },
    public: {
      // Public runtime config (exposed to the client-side)
       baseURL: process.env.NUXT_APP_BASE_URL
    }
  },
     
    ui: {
    global: true,
    icons: "all",
   },
  googleSignIn: {
        clientId: process.env.GOOGLE_SIGNIN_CLIENT_ID
      },
  pwa: {
    // Configuration options
    registerType: 'autoUpdate',
    manifest: {
      name: 'Mohammad Al-amin',
      short_name: 'AwesomeApp',
      description: 'My portfolio app',
      theme_color: '#ffffff',
      icons: [
       {
          src: '/img/blog/post9.jpg',
          sizes: '1024x1024',
          type: 'image/jpeg'
        }
      ]
    }
  },

  security: {
  strict: false,
  headers: {
    crossOriginResourcePolicy: 'same-origin',
    crossOriginOpenerPolicy: 'same-origin',
    crossOriginEmbedderPolicy: 'credentialless',
    contentSecurityPolicy: {
      'base-uri': ["'none'"],
      'font-src': ["'self'", 'https:', 'data:'],
      'form-action': ["'self'"],
      'frame-ancestors': ["'self'"],
      'img-src': ["'self'", 'data:'],
      'object-src': ["'none'"],
      'script-src-attr': ["'none'"],
      'style-src': ["'self'", 'https:', "'unsafe-inline'"],
      'script-src': ["'self'", 'https:', "'unsafe-inline'", "'strict-dynamic'", "'nonce-{{nonce}}'"],
      'upgrade-insecure-requests': true
    },
    originAgentCluster: '?1',
    referrerPolicy: 'no-referrer',
    strictTransportSecurity: {
      maxAge: 15552000,
      includeSubdomains: true,
    },
    xContentTypeOptions: 'nosniff',
    xDNSPrefetchControl: 'off',
    xDownloadOptions: 'noopen',
    xFrameOptions: 'SAMEORIGIN',
    xPermittedCrossDomainPolicies: 'none',
    xXSSProtection: '0',
    permissionsPolicy: {
      camera: [],
      'display-capture': [],
      fullscreen: [],
      geolocation: [],
      microphone: []
    }
  },
  requestSizeLimiter: {
    maxRequestSizeInBytes: 2000000,
    maxUploadFileRequestInBytes: 8000000,
    throwError: true
  },
  rateLimiter: {
    tokensPerInterval: 150,
    interval: 300000,
    headers: false,
    driver: {
      name: 'lruCache'
    },
    throwError: true
  },
  xssValidator: {
    throwError: true
  },
  corsHandler: {
    origin: 'https://web-libnet.vercel.app',
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    preflight: {
      statusCode: 204
    },
  },
  allowedMethodsRestricter: {
    methods: '*',
    throwError: true
  },
  hidePoweredBy: true,
  basicAuth: false,
  enabled: true,
  csrf: false,
  nonce: true,
  removeLoggers: {
    external: [],
    consoleType: ['log', 'debug'],
    include: [/\.[jt]sx?$/, /\.vue\??/],
    exclude: [/node_modules/, /\.git/]
  },
  ssg: {
    meta: true,
    hashScripts: true,
    hashStyles: false,
    nitroHeaders: true,
    exportToPresets: true,
  },
  sri: true
},

   typescript: {
    shim: false,
    tsConfig: {
      compilerOptions: {
        // https://nuxt.com/blog/v3-5#bundler-module-resolution
        moduleResolution: "bundler",
        paths: {
          "@": ["."],
          "@/*": ["./*"],
        },
      },
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
  },
  devtools: { enabled: true },
  ssr: true,
})
