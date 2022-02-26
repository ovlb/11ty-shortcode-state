module.exports = function (config) {
  config.addShortcode("addComponentCss", function ({ css, id }) {
    if (this.ctx.renderedData.includes(id)) {
      return "";
    }

    this.ctx.renderedData.push(id);

    return `
      <p>I’m the first render.</p>
      <style href="/assets/${css}"></style>
    `;
  });

  return {
    templateFormats: ["md", "11ty.js", "njk"],
    dir: {
      input: "_src",
      output: "dist",
      data: "_data",
      includes: "_includes",
    },
  };
};
