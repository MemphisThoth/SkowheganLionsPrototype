module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_source/assets");

  eleventyConfig.addCollection("photos", function (collectionApi) {
    return collectionApi.getFilteredByGlob("_source/_photos/*.md");
  });

  return {
    dir: {
      input: "_source",
      output: "_site",
      data: "_data",
      includes: "_templates"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
