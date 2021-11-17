import { p as promiseResolve, b as bootstrapLazy } from './index-77febba0.js';

/*
 Stencil Client Patch Esm v2.10.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
  return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
    return bootstrapLazy([['my-component', [[1, 'my-component', { first: [1] }]]]], options);
  });
};

export { defineCustomElements };
