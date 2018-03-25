const express = require('express');
const app = express();

// body-parser exposes post body parameters in req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var appPort = 5000;
var server = app.listen(appPort, function () {
    console.log("Serving analytics-demo on port %d", appPort);
});

app.get('/', (req, res) => {
  res.sendFile('public/index.html', {"root": __dirname})
})

app.post('/buttonPressed', (req, res) => {
  console.info(req.body);
  res.json({ message: `You pressed button ${req.body.button}.`});
})
