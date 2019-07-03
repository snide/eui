const sass = require('node-sass');
const path = require('path');

module.exports = (css, settings) => {
  const cssWithPlaceholders = css
    .replace(
      /%%styled-jsx-placeholder-(\d+)%%(\w*\s*[),;!{])/g,
      (_, id, p1) => `styled-jsx-placeholder-${id}-${p1}`
    )
    .replace(
      /%%styled-jsx-placeholder-(\d+)%%/g,
      (_, id) => `/*%%styled-jsx-placeholder-${id}%%*/`
    );

  // Prepend option data to cssWithPlaceholders
  const optionData = (settings.sassOptions && settings.sassOptions.data) || '';
  const data = `${optionData}\n${cssWithPlaceholders}`;

  const includePath = path.dirname(settings.babel.filename);

  const sassOpts = settings.sassOptions || {};
  const { includePaths = [], ...sassOptions } = sassOpts;

  const preprocessed = sass
    .renderSync({
      ...sassOptions,
      data,
      includePaths: [...includePaths, includePath],
    })
    .css.toString();

  return preprocessed
    .replace(
      /styled-jsx-placeholder-(\d+)-(\w*\s*[),;!{])/g,
      (_, id, p1) => `%%styled-jsx-placeholder-${id}%%${p1}`
    )
    .replace(
      /\/\*%%styled-jsx-placeholder-(\d+)%%\*\//g,
      (_, id) => `%%styled-jsx-placeholder-${id}%%`
    );
};
