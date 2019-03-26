const { Cite } = require('@citation-js/core')
require('@citation-js/plugin-bibtex')

module.exports = function(source) {
  const cite = new Cite(source, {
    forceType: '@bibtex/text',
    generateGraph: false,
  });

  return `module.exports = ${JSON.stringify(cite.get())}`;
};
