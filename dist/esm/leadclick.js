import { p as promiseResolve, b as bootstrapLazy } from './index-21b05f3e.js';

/*
 Stencil Client Patch Browser v2.10.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["leadclick-widget",[[1,"leadclick-widget",{"cta":[1],"instructions":[1],"waurl":[1],"igurl":[1],"fburl":[1],"bgcolor":[1],"fontcolor":[1],"integrations":[2],"showOptions":[32]}]]]], options);
});
