CoffeeScriptForCoinDesk_s
=========================

(FOR STUDY) Learn coffee-script and use it to get the data on CoinDesk. 

*有几点想说明一下，以后要注意的*

- 使用coffee -c 命令编译coffee为js时会加上().call(this)，这会导致export引出工具不好用。可以使用module.export= 直接设置引出接口。
- eval会有不能直接解释的记得'('+ data +')' 
- nodejs 使用并行处理，直接返回值可能会出现问题。利用传入的回调函数传回返回值，习惯函数式编程思想。