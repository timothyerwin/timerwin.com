'use strict';

$(document).ready(function () {
  $.get('/data/jobs.json', function (results) {
    console.log(results);
  });
});
