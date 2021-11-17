'use strict';

const index = require('./index-8530f7c8.js');

/*
 Stencil Client Patch Browser v2.10.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
  const importMeta =
    typeof document === 'undefined'
      ? new (require('u' + 'rl').URL)('file:' + __filename).href
      : (document.currentScript && document.currentScript.src) || new URL('leadclick.cjs.js', document.baseURI).href;
  const opts = {};
  if (importMeta !== '') {
    opts.resourcesUrl = new URL('.', importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([['my-component.cjs', [[1, 'my-component', { first: [1] }]]]], options);
});
