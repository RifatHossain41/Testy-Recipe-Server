const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 4000;

const chefs = require('./data/chef.json')
const banner = require('./data/banner.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('food recipe is running')
})

app.get('/chefs', (req, res) => {
  res.send(chefs)
})

app.get('/banner', (req, res) => {
  res.send(banner)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})