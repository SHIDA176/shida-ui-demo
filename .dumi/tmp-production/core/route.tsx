// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"404":{"id":"404","path":"*","parentId":"DocLayout"},"dumi-context-layout":{"id":"dumi-context-layout","path":"/","isLayout":true},"DocLayout":{"id":"DocLayout","path":"/","parentId":"dumi-context-layout","isLayout":true},"demo-render":{"id":"demo-render","path":"~demos/:id","parentId":"dumi-context-layout","prerender":false}} as const;
  return {
    routes,
    routeComponents: {
'404': React.lazy(() => import(/* webpackChunkName: "dumi__pages__404" */'@/dumi__pages/404')),
'dumi-context-layout': React.lazy(() => import(/* webpackChunkName: "dumi__theme__ContextWrapper" */'@/dumi__theme/ContextWrapper')),
'DocLayout': React.lazy(() => import(/* webpackChunkName: "dumi__theme__layouts__DocLayout" */'@/dumi__theme/layouts/DocLayout')),
'demo-render': React.lazy(() => import(/* webpackChunkName: "dumi__pages__Demo" */'@/dumi__pages/Demo')),
},
  };
}
