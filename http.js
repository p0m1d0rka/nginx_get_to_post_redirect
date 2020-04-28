function handle_get(r) {
  r.log("r.args")
  r.subrequest('/handle_get',
      { 
        method: 'POST',
        body: JSON.stringify(r.args)},

      function(res) {
          r.return(res.status, res.responseBody);
      });
}

function handle_post(r) {
  r.return(200, `HeadersIn: ${JSON.stringify(r.headersIn)}; Body: ${r.requestBody}`);
}
