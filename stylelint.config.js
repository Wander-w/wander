module.exports = {
  root: true,
  extends: [
    // 标准规范
    "stylelint-config-standard",
    // 预设排序规则
    "stylelint-config-recess-order",
    // scss
    "stylelint-config-standard-scss",
    // vue
    "stylelint-config-recommended-vue",
    // html And vue template style
    "stylelint-config-html/html",
    "stylelint-config-html/vue",
  ],
  plugins: [
    // 排序插件
    "stylelint-order",
  ],
  rules: {
    "order/order": ["custom-properties", "declarations"],
    "declaration-block-trailing-semicolon": null,
    "at-rule-no-unknown": null,
    "selector-class-pattern": null,
    "custom-property-pattern": null,
    "no-descending-specificity": null,
    "value-no-vendor-prefix": null, // -webkit- 禁止自动修复-webkit-前缀
  },
}
