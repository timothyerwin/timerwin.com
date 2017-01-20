$(document).ready(()=> {
  $.get('/data/jobs.json', (results) => {
    console.log(results);
  });
});
