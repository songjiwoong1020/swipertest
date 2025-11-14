var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

const port = 3000

app.post('/rest/dsfootball/getEventList', (req, res) => {
  res.json({
    "success": true,
    "data": [
      {
        "pid": 1,
        "eventDate": "2025-10-11",
        "eventName": "풋살경기",
        "regDate": 1760094000000,
        "modDate": 1760094000000,
        "delAt": "N"
      },
      {
        "pid": 2,
        "eventDate": "2025-10-25",
        "eventName": "축구경기",
        "regDate": 1760958000000,
        "modDate": 1760958000000,
        "delAt": "N"
      }
    ],
    "text": null,
    "message": "",
    "code": "SUCC00"
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})