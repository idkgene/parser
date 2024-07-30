export function checkFeatureSupport($: cheerio.Root) {
  return {
    allowArbitrary: $('#arbitrary-values').length > 0,
    allowStates: $('#hover-focus-and-other-states').length > 0,
    allowBreakpoints: $('#breakpoints-and-media-queries').length > 0,
  };
}
