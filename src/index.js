import baseSettings from "./settings.js";

const rootI18nRoot = "dist/i18n/";
const chart = d3.select(".data")
    .append("svg")
    .attr("id", "demo");

let canalData;

const showData = function() {
  barChart(chart, baseSettings, [canalData]);
};

i18n.load([rootI18nRoot], {defaultNS: "demo"}, () => {
  d3.queue()
      .defer(d3.json, "data/canal.json")
      .await((error, canal) => {
        canalData = canal.data;
        showData();
      });
});
