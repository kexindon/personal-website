module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  safelist: {
    // greedy：只要选择器里出现 card-img-top 就整条保留。
    // 宽幅封面图用 [src$="leukemia.jpg"] 属性选择器单独设留白，
    // 而 PurgeCSS 只按 HTML 中出现的类名判断，属性选择器会被误删。
    greedy: [/card-img-top/],
    standard: [
      "collapse",
      "collapsing",
      "show",
      "dropdown-menu",
      "dropdown-item",
      "table",
      "table-dark",
      "table-hover",
      "table-responsive",
      "af-tooltip",
      "af-popover",
      "font-weight-bold",
      "font-weight-medium",
      "font-weight-lighter",
      // medium-zoom injects these at runtime, so they never appear in the static
      // HTML PurgeCSS scans; without them the zoom overlay's z-index rule is purged
      // and page chrome (scroll-progress bar, ToC) bleeds through a zoomed image.
      "medium-zoom-overlay",
      "medium-zoom-image--opened",
    ],
  },
};
