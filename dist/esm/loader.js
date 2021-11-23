import { p as promiseResolve, b as bootstrapLazy } from './index-21b05f3e.js';

/*
 Stencil Client Patch Esm v2.10.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["leadclick-widget",[[1,"leadclick-widget",{"cta":[1],"instructions":[1],"waurl":[1],"igurl":[1],"fburl":[1],"bgcolor":[1],"fontcolor":[1],"integrations":[2],"showOptions":[32]}]]]], options);
  });
};

export { defineCustomElements };
