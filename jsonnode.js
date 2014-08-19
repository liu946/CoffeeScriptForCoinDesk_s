
http=require('http');
function getcoindeskdata(foo_dosomething){
	http.get('http://api.coindesk.com/v1/bpi/currentprice.json',function getdata (res) {
	res.setEncoding('utf8');
  	res.on('data', function (data) {
    					return foo_dosomething( eval('('+data+')'));
  					});
	});
}

// getcoindeskdata(function(data){
// 	console.log(data);
// });
module.exports=getcoindeskdata;