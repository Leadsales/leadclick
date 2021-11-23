'use strict';

const index = require('./index-462b6a0b.js');

/*
 Stencil Client Patch Browser v2.10.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('leadclick.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["leadclick-widget.cjs",[[1,"leadclick-widget",{"cta":[1],"instructions":[1],"waurl":[1],"igurl":[1],"fburl":[1],"bgcolor":[1],"fontcolor":[1],"integrations":[2],"showOptions":[32]}]]]], options);
});
