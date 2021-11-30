'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-462b6a0b.js');

/*
 Stencil Client Patch Esm v2.10.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["leadclick-widget.cjs",[[1,"leadclick-widget",{"cta":[1],"instructions":[1],"waurl":[1],"igurl":[1],"fburl":[1],"bgcolor":[1],"fontcolor":[1],"integrations":[2],"showOptions":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
