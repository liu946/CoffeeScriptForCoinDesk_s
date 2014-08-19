http = require 'http'
getcoindeskdata =(foo_dosomething)->
 http.get 'http://api.coindesk.com/v1/bpi/currentprice.json',(res)->
  res.setEncoding 'utf8'
  res.on 'data', (data)->
   foo_dosomething( eval('('+data+')'))
module.exports = getcoindeskdata