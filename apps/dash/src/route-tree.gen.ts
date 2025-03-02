/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as NoOrganizationImport } from './routes/no-organization'
import { Route as ConfigureImport } from './routes/_configure'
import { Route as BlogsIndexImport } from './routes/blogs/index'
import { Route as UsersUserIdRouteImport } from './routes/users/$user-id/route'
import { Route as BlogsBlogIdRouteImport } from './routes/blogs/$blog-id/route'
import { Route as SubscribeProIndexImport } from './routes/subscribe/pro/index'
import { Route as CheckoutStatusIndexImport } from './routes/checkout/status/index'
import { Route as ConfigureConfigureSettingsImport } from './routes/_configure/configure/_settings'
import { Route as ConfigureConfigureSettingsSettingsIndexImport } from './routes/_configure/configure/_settings/settings/index'
import { Route as ConfigureConfigureSettingsSettingsCustomDomainIndexImport } from './routes/_configure/configure/_settings/settings/custom-domain/index'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const ConfigureConfigureImport = createFileRoute('/_configure/configure')()
const UsersIndexLazyImport = createFileRoute('/users/')()
const ConfigureConfigureIndexLazyImport = createFileRoute(
  '/_configure/configure/',
)()
const ConfigureConfigureSettingsSettingsAppearanceIndexLazyImport =
  createFileRoute('/_configure/configure/_settings/settings/appearance/')()

// Create/Update Routes

const NoOrganizationRoute = NoOrganizationImport.update({
  id: '/no-organization',
  path: '/no-organization',
  getParentRoute: () => rootRoute,
} as any)

const ConfigureRoute = ConfigureImport.update({
  id: '/_configure',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const ConfigureConfigureRoute = ConfigureConfigureImport.update({
  id: '/configure',
  path: '/configure',
  getParentRoute: () => ConfigureRoute,
} as any)

const UsersIndexLazyRoute = UsersIndexLazyImport.update({
  id: '/users/',
  path: '/users/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/users/index.lazy').then((d) => d.Route))

const BlogsIndexRoute = BlogsIndexImport.update({
  id: '/blogs/',
  path: '/blogs/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/blogs/index.lazy').then((d) => d.Route))

const UsersUserIdRouteRoute = UsersUserIdRouteImport.update({
  id: '/users/$user-id',
  path: '/users/$user-id',
  getParentRoute: () => rootRoute,
} as any)

const BlogsBlogIdRouteRoute = BlogsBlogIdRouteImport.update({
  id: '/blogs/$blog-id',
  path: '/blogs/$blog-id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/blogs/$blog-id/route.lazy').then((d) => d.Route),
)

const ConfigureConfigureIndexLazyRoute =
  ConfigureConfigureIndexLazyImport.update({
    id: '/',
    path: '/',
    getParentRoute: () => ConfigureConfigureRoute,
  } as any).lazy(() =>
    import('./routes/_configure/configure/index.lazy').then((d) => d.Route),
  )

const SubscribeProIndexRoute = SubscribeProIndexImport.update({
  id: '/subscribe/pro/',
  path: '/subscribe/pro/',
  getParentRoute: () => rootRoute,
} as any)

const CheckoutStatusIndexRoute = CheckoutStatusIndexImport.update({
  id: '/checkout/status/',
  path: '/checkout/status/',
  getParentRoute: () => rootRoute,
} as any)

const ConfigureConfigureSettingsRoute = ConfigureConfigureSettingsImport.update(
  {
    id: '/_settings',
    getParentRoute: () => ConfigureConfigureRoute,
  } as any,
)

const ConfigureConfigureSettingsSettingsIndexRoute =
  ConfigureConfigureSettingsSettingsIndexImport.update({
    id: '/settings/',
    path: '/settings/',
    getParentRoute: () => ConfigureConfigureSettingsRoute,
  } as any).lazy(() =>
    import('./routes/_configure/configure/_settings/settings/index.lazy').then(
      (d) => d.Route,
    ),
  )

const ConfigureConfigureSettingsSettingsAppearanceIndexLazyRoute =
  ConfigureConfigureSettingsSettingsAppearanceIndexLazyImport.update({
    id: '/settings/appearance/',
    path: '/settings/appearance/',
    getParentRoute: () => ConfigureConfigureSettingsRoute,
  } as any).lazy(() =>
    import(
      './routes/_configure/configure/_settings/settings/appearance/index.lazy'
    ).then((d) => d.Route),
  )

const ConfigureConfigureSettingsSettingsCustomDomainIndexRoute =
  ConfigureConfigureSettingsSettingsCustomDomainIndexImport.update({
    id: '/settings/custom-domain/',
    path: '/settings/custom-domain/',
    getParentRoute: () => ConfigureConfigureSettingsRoute,
  } as any).lazy(() =>
    import(
      './routes/_configure/configure/_settings/settings/custom-domain/index.lazy'
    ).then((d) => d.Route),
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_configure': {
      id: '/_configure'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof ConfigureImport
      parentRoute: typeof rootRoute
    }
    '/no-organization': {
      id: '/no-organization'
      path: '/no-organization'
      fullPath: '/no-organization'
      preLoaderRoute: typeof NoOrganizationImport
      parentRoute: typeof rootRoute
    }
    '/blogs/$blog-id': {
      id: '/blogs/$blog-id'
      path: '/blogs/$blog-id'
      fullPath: '/blogs/$blog-id'
      preLoaderRoute: typeof BlogsBlogIdRouteImport
      parentRoute: typeof rootRoute
    }
    '/users/$user-id': {
      id: '/users/$user-id'
      path: '/users/$user-id'
      fullPath: '/users/$user-id'
      preLoaderRoute: typeof UsersUserIdRouteImport
      parentRoute: typeof rootRoute
    }
    '/blogs/': {
      id: '/blogs/'
      path: '/blogs'
      fullPath: '/blogs'
      preLoaderRoute: typeof BlogsIndexImport
      parentRoute: typeof rootRoute
    }
    '/users/': {
      id: '/users/'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof UsersIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_configure/configure': {
      id: '/_configure/configure'
      path: '/configure'
      fullPath: '/configure'
      preLoaderRoute: typeof ConfigureConfigureImport
      parentRoute: typeof ConfigureImport
    }
    '/_configure/configure/_settings': {
      id: '/_configure/configure/_settings'
      path: '/configure'
      fullPath: '/configure'
      preLoaderRoute: typeof ConfigureConfigureSettingsImport
      parentRoute: typeof ConfigureConfigureRoute
    }
    '/checkout/status/': {
      id: '/checkout/status/'
      path: '/checkout/status'
      fullPath: '/checkout/status'
      preLoaderRoute: typeof CheckoutStatusIndexImport
      parentRoute: typeof rootRoute
    }
    '/subscribe/pro/': {
      id: '/subscribe/pro/'
      path: '/subscribe/pro'
      fullPath: '/subscribe/pro'
      preLoaderRoute: typeof SubscribeProIndexImport
      parentRoute: typeof rootRoute
    }
    '/_configure/configure/': {
      id: '/_configure/configure/'
      path: '/'
      fullPath: '/configure/'
      preLoaderRoute: typeof ConfigureConfigureIndexLazyImport
      parentRoute: typeof ConfigureConfigureImport
    }
    '/_configure/configure/_settings/settings/': {
      id: '/_configure/configure/_settings/settings/'
      path: '/settings'
      fullPath: '/configure/settings'
      preLoaderRoute: typeof ConfigureConfigureSettingsSettingsIndexImport
      parentRoute: typeof ConfigureConfigureSettingsImport
    }
    '/_configure/configure/_settings/settings/custom-domain/': {
      id: '/_configure/configure/_settings/settings/custom-domain/'
      path: '/settings/custom-domain'
      fullPath: '/configure/settings/custom-domain'
      preLoaderRoute: typeof ConfigureConfigureSettingsSettingsCustomDomainIndexImport
      parentRoute: typeof ConfigureConfigureSettingsImport
    }
    '/_configure/configure/_settings/settings/appearance/': {
      id: '/_configure/configure/_settings/settings/appearance/'
      path: '/settings/appearance'
      fullPath: '/configure/settings/appearance'
      preLoaderRoute: typeof ConfigureConfigureSettingsSettingsAppearanceIndexLazyImport
      parentRoute: typeof ConfigureConfigureSettingsImport
    }
  }
}

// Create and export the route tree

interface ConfigureConfigureSettingsRouteChildren {
  ConfigureConfigureSettingsSettingsIndexRoute: typeof ConfigureConfigureSettingsSettingsIndexRoute
  ConfigureConfigureSettingsSettingsCustomDomainIndexRoute: typeof ConfigureConfigureSettingsSettingsCustomDomainIndexRoute
  ConfigureConfigureSettingsSettingsAppearanceIndexLazyRoute: typeof ConfigureConfigureSettingsSettingsAppearanceIndexLazyRoute
}

const ConfigureConfigureSettingsRouteChildren: ConfigureConfigureSettingsRouteChildren =
  {
    ConfigureConfigureSettingsSettingsIndexRoute:
      ConfigureConfigureSettingsSettingsIndexRoute,
    ConfigureConfigureSettingsSettingsCustomDomainIndexRoute:
      ConfigureConfigureSettingsSettingsCustomDomainIndexRoute,
    ConfigureConfigureSettingsSettingsAppearanceIndexLazyRoute:
      ConfigureConfigureSettingsSettingsAppearanceIndexLazyRoute,
  }

const ConfigureConfigureSettingsRouteWithChildren =
  ConfigureConfigureSettingsRoute._addFileChildren(
    ConfigureConfigureSettingsRouteChildren,
  )

interface ConfigureConfigureRouteChildren {
  ConfigureConfigureSettingsRoute: typeof ConfigureConfigureSettingsRouteWithChildren
  ConfigureConfigureIndexLazyRoute: typeof ConfigureConfigureIndexLazyRoute
}

const ConfigureConfigureRouteChildren: ConfigureConfigureRouteChildren = {
  ConfigureConfigureSettingsRoute: ConfigureConfigureSettingsRouteWithChildren,
  ConfigureConfigureIndexLazyRoute: ConfigureConfigureIndexLazyRoute,
}

const ConfigureConfigureRouteWithChildren =
  ConfigureConfigureRoute._addFileChildren(ConfigureConfigureRouteChildren)

interface ConfigureRouteChildren {
  ConfigureConfigureRoute: typeof ConfigureConfigureRouteWithChildren
}

const ConfigureRouteChildren: ConfigureRouteChildren = {
  ConfigureConfigureRoute: ConfigureConfigureRouteWithChildren,
}

const ConfigureRouteWithChildren = ConfigureRoute._addFileChildren(
  ConfigureRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '': typeof ConfigureRouteWithChildren
  '/no-organization': typeof NoOrganizationRoute
  '/blogs/$blog-id': typeof BlogsBlogIdRouteRoute
  '/users/$user-id': typeof UsersUserIdRouteRoute
  '/blogs': typeof BlogsIndexRoute
  '/users': typeof UsersIndexLazyRoute
  '/configure': typeof ConfigureConfigureSettingsRouteWithChildren
  '/checkout/status': typeof CheckoutStatusIndexRoute
  '/subscribe/pro': typeof SubscribeProIndexRoute
  '/configure/': typeof ConfigureConfigureIndexLazyRoute
  '/configure/settings': typeof ConfigureConfigureSettingsSettingsIndexRoute
  '/configure/settings/custom-domain': typeof ConfigureConfigureSettingsSettingsCustomDomainIndexRoute
  '/configure/settings/appearance': typeof ConfigureConfigureSettingsSettingsAppearanceIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '': typeof ConfigureRouteWithChildren
  '/no-organization': typeof NoOrganizationRoute
  '/blogs/$blog-id': typeof BlogsBlogIdRouteRoute
  '/users/$user-id': typeof UsersUserIdRouteRoute
  '/blogs': typeof BlogsIndexRoute
  '/users': typeof UsersIndexLazyRoute
  '/configure': typeof ConfigureConfigureIndexLazyRoute
  '/checkout/status': typeof CheckoutStatusIndexRoute
  '/subscribe/pro': typeof SubscribeProIndexRoute
  '/configure/settings': typeof ConfigureConfigureSettingsSettingsIndexRoute
  '/configure/settings/custom-domain': typeof ConfigureConfigureSettingsSettingsCustomDomainIndexRoute
  '/configure/settings/appearance': typeof ConfigureConfigureSettingsSettingsAppearanceIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/_configure': typeof ConfigureRouteWithChildren
  '/no-organization': typeof NoOrganizationRoute
  '/blogs/$blog-id': typeof BlogsBlogIdRouteRoute
  '/users/$user-id': typeof UsersUserIdRouteRoute
  '/blogs/': typeof BlogsIndexRoute
  '/users/': typeof UsersIndexLazyRoute
  '/_configure/configure': typeof ConfigureConfigureRouteWithChildren
  '/_configure/configure/_settings': typeof ConfigureConfigureSettingsRouteWithChildren
  '/checkout/status/': typeof CheckoutStatusIndexRoute
  '/subscribe/pro/': typeof SubscribeProIndexRoute
  '/_configure/configure/': typeof ConfigureConfigureIndexLazyRoute
  '/_configure/configure/_settings/settings/': typeof ConfigureConfigureSettingsSettingsIndexRoute
  '/_configure/configure/_settings/settings/custom-domain/': typeof ConfigureConfigureSettingsSettingsCustomDomainIndexRoute
  '/_configure/configure/_settings/settings/appearance/': typeof ConfigureConfigureSettingsSettingsAppearanceIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/no-organization'
    | '/blogs/$blog-id'
    | '/users/$user-id'
    | '/blogs'
    | '/users'
    | '/configure'
    | '/checkout/status'
    | '/subscribe/pro'
    | '/configure/'
    | '/configure/settings'
    | '/configure/settings/custom-domain'
    | '/configure/settings/appearance'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/no-organization'
    | '/blogs/$blog-id'
    | '/users/$user-id'
    | '/blogs'
    | '/users'
    | '/configure'
    | '/checkout/status'
    | '/subscribe/pro'
    | '/configure/settings'
    | '/configure/settings/custom-domain'
    | '/configure/settings/appearance'
  id:
    | '__root__'
    | '/'
    | '/_configure'
    | '/no-organization'
    | '/blogs/$blog-id'
    | '/users/$user-id'
    | '/blogs/'
    | '/users/'
    | '/_configure/configure'
    | '/_configure/configure/_settings'
    | '/checkout/status/'
    | '/subscribe/pro/'
    | '/_configure/configure/'
    | '/_configure/configure/_settings/settings/'
    | '/_configure/configure/_settings/settings/custom-domain/'
    | '/_configure/configure/_settings/settings/appearance/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  ConfigureRoute: typeof ConfigureRouteWithChildren
  NoOrganizationRoute: typeof NoOrganizationRoute
  BlogsBlogIdRouteRoute: typeof BlogsBlogIdRouteRoute
  UsersUserIdRouteRoute: typeof UsersUserIdRouteRoute
  BlogsIndexRoute: typeof BlogsIndexRoute
  UsersIndexLazyRoute: typeof UsersIndexLazyRoute
  CheckoutStatusIndexRoute: typeof CheckoutStatusIndexRoute
  SubscribeProIndexRoute: typeof SubscribeProIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  ConfigureRoute: ConfigureRouteWithChildren,
  NoOrganizationRoute: NoOrganizationRoute,
  BlogsBlogIdRouteRoute: BlogsBlogIdRouteRoute,
  UsersUserIdRouteRoute: UsersUserIdRouteRoute,
  BlogsIndexRoute: BlogsIndexRoute,
  UsersIndexLazyRoute: UsersIndexLazyRoute,
  CheckoutStatusIndexRoute: CheckoutStatusIndexRoute,
  SubscribeProIndexRoute: SubscribeProIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_configure",
        "/no-organization",
        "/blogs/$blog-id",
        "/users/$user-id",
        "/blogs/",
        "/users/",
        "/checkout/status/",
        "/subscribe/pro/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/_configure": {
      "filePath": "_configure.tsx",
      "children": [
        "/_configure/configure"
      ]
    },
    "/no-organization": {
      "filePath": "no-organization.tsx"
    },
    "/blogs/$blog-id": {
      "filePath": "blogs/$blog-id/route.tsx"
    },
    "/users/$user-id": {
      "filePath": "users/$user-id/route.tsx"
    },
    "/blogs/": {
      "filePath": "blogs/index.tsx"
    },
    "/users/": {
      "filePath": "users/index.lazy.tsx"
    },
    "/_configure/configure": {
      "filePath": "_configure/configure",
      "parent": "/_configure",
      "children": [
        "/_configure/configure/_settings",
        "/_configure/configure/"
      ]
    },
    "/_configure/configure/_settings": {
      "filePath": "_configure/configure/_settings.tsx",
      "parent": "/_configure/configure",
      "children": [
        "/_configure/configure/_settings/settings/",
        "/_configure/configure/_settings/settings/custom-domain/",
        "/_configure/configure/_settings/settings/appearance/"
      ]
    },
    "/checkout/status/": {
      "filePath": "checkout/status/index.tsx"
    },
    "/subscribe/pro/": {
      "filePath": "subscribe/pro/index.tsx"
    },
    "/_configure/configure/": {
      "filePath": "_configure/configure/index.lazy.tsx",
      "parent": "/_configure/configure"
    },
    "/_configure/configure/_settings/settings/": {
      "filePath": "_configure/configure/_settings/settings/index.tsx",
      "parent": "/_configure/configure/_settings"
    },
    "/_configure/configure/_settings/settings/custom-domain/": {
      "filePath": "_configure/configure/_settings/settings/custom-domain/index.tsx",
      "parent": "/_configure/configure/_settings"
    },
    "/_configure/configure/_settings/settings/appearance/": {
      "filePath": "_configure/configure/_settings/settings/appearance/index.lazy.tsx",
      "parent": "/_configure/configure/_settings"
    }
  }
}
ROUTE_MANIFEST_END */
