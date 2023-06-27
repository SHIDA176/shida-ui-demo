// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!/Users/shishida/Desktop/shida-UI-Demo/src/alert/demo/basic.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!/Users/shishida/Desktop/shida-UI-Demo/src/alert/index.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!/Users/shishida/Desktop/shida-UI-Demo/src/alert/style/index.less?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!/Users/shishida/Desktop/shida-UI-Demo/src/alert/demo/ceshi.tsx?dumi-raw-code';

export default {
  'alert-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_trela" */'/Users/shishida/Desktop/shida-UI-Demo/src/alert/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1},"index.tsx":{"import":"../index","content":rawCode2},"style/index.less":{"import":"../style/index.less","content":rawCode3}},"dependencies":{"react":{"version":"18.2.0"},"prop-types":{"version":"15.8.1"}},"componentName":"alert","identifier":"alert-basic"},
  },
  'alert-ceshi': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_trela" */'/Users/shishida/Desktop/shida-UI-Demo/src/alert/demo/ceshi.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode4},"index.tsx":{"import":"../index","content":rawCode2},"style/index.less":{"import":"../style/index.less","content":rawCode3}},"dependencies":{"react":{"version":"18.2.0"},"prop-types":{"version":"15.8.1"}},"componentName":"alert","identifier":"alert-ceshi"},
  },
};
