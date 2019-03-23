const { BibLatexParser, CSLExporter } = require("biblatex-csl-converter");

module.exports = function(source) {
  const parser = new BibLatexParser(source, {
    processUnexpected: true,
    processUnknown: true
  });

  const data = parser.parse();

  // TODO: handle errors?

  const exporter = new CSLExporter(data.entries);

  const output = exporter.parse();

  // TODO: handle errors?

  const items = Object.values(output);

  // TODO: entry_key as id?

  return `module.exports = ${JSON.stringify(items)}`;
};
