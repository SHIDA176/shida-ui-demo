// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/shishida/Desktop/shida-UI-Demo/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')})],
    "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ '/Users/shishida/Desktop/shida-UI-Demo/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/shishida/Desktop/shida-UI-Demo/node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/layout.js')})],
    "routes": [
      {
        "path": "/src/alert",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'alert__index.md' */'/Users/shishida/Desktop/shida-UI-Demo/src/alert/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/alert/index.md",
          "updatedTime": 1687850206570,
          "componentName": "alert",
          "title": "Alert 警告组件",
          "nav": {
            "title": "组件",
            "path": "/src"
          },
          "group": {
            "title": "组件列表",
            "order": 1,
            "__fallback": true,
            "path": "/src/alert"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Alert 警告提示",
              "heading": "alert-警告提示"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Alert 警告组件 - SHIDA UI"
      },
      {
        "path": "/getting-started",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__getting-started.md' */'/Users/shishida/Desktop/shida-UI-Demo/docs/getting-started.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started.md",
          "updatedTime": 1687849709902,
          "nav": {
            "title": "快速上手",
            "order": 1,
            "path": "/getting-started"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "快速上手",
              "heading": "快速上手"
            },
            {
              "depth": 2,
              "value": "安装",
              "heading": "安装"
            }
          ],
          "title": "快速上手"
        },
        "title": "快速上手 - SHIDA UI"
      },
      {
        "path": "/help",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__help.md' */'/Users/shishida/Desktop/shida-UI-Demo/docs/help.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/help.md",
          "updatedTime": 1687849714682,
          "nav": {
            "title": "帮助",
            "path": "/help"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "帮助",
              "heading": "帮助"
            }
          ],
          "title": "帮助"
        },
        "title": "帮助 - SHIDA UI"
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__index.md' */'/Users/shishida/Desktop/shida-UI-Demo/docs/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1687849585027,
          "title": "SHIDA UI",
          "hero": {
            "title": "Shida UI",
            "desc": "<div class=\"markdown\"><p>文档站点基于 dumi 生成</p></div>",
            "actions": [
              {
                "text": "快速上手",
                "link": "/getting-started"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "特性 1",
              "desc": "<div class=\"markdown\"><p>desc</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "特性 2",
              "desc": "<div class=\"markdown\"><p>desc2</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "特性 3",
              "desc": "<div class=\"markdown\"><p>desc3</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2023<br />Powered by <a href=\"https://d.umijs.org/\" target=\"_blank\">dumi<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": []
        },
        "title": "SHIDA UI - SHIDA UI"
      },
      {
        "path": "/src",
        "meta": {},
        "exact": true,
        "redirect": "/src/alert"
      }
    ],
    "title": "SHIDA UI",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
