'use strict'
let express = require('express'),
  data = require('./data_provider'),
  app = express()

// Apply a sort parameter by ethnicity or popularity
function setOptions(query) {
  let opts = {}
  switch(query.sort) {
    case 'ethnicity':
      opts.sort = (a, b) => a.ethnicity.localeCompare(b.ethnicity)
      break;
    case 'popularity':
      opts.sort = (a, b) => parseInt(b.count, 10) - parseInt(a.count, 10)
      break;
    default:
      opts.sort = (a, b) => a.name.localeCompare(b.name)
      break;
  }

  return opts
}

app.all('*', (req, res, next) => {
  req.options = setOptions(req.query)
  next()
})

app.get('/male', (req, res) => {
  res.json(data.male(req.options))
})

app.get('/female', (req, res) => {
  res.json(data.female(req.options))
})

let server = app.listen(3000, function() {
  let host = server.address().address,
    port = server.address().port

  console.log('Start server listening at http://%s:%s', host, port)
})
