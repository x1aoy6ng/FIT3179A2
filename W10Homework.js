// week 9 map
var vg_1 = "W9Homework.json";
vegaEmbed("#map", vg_1, { actions: false })
  .then(function(result) {})
  .catch(console.error);

// week 10 bar chart
var vg_2 = "W10Homework.json";
vegaEmbed("#barchart", vg_2, { actions: false })
  .then(function(result) {})
  .catch(console.error);

// gender pie chart
var vg_3 = "GenderDonut.json";
vegaEmbed("#genderdonut", vg_3, { actions: false })
  .then(function(result) {})
  .catch(console.error);

// stratum pie chart
var vg_4 = "StratumDonut.json";
vegaEmbed("#stratumdonut", vg_4, { actions: false })
  .then(function(result) {})
  .catch(console.error);

// duration stacked area chart
var vg_5 = "DurationStackedArea.json";
vegaEmbed("#durationarea", vg_5, { actions: false })
  .then(function(result) {})
  .catch(console.error);

// slope chart
var vg_6 = "SlopeChart.json";
vegaEmbed("#slopechart", vg_6, { actions: false })
  .then(function(result) {})
  .catch(console.error);
