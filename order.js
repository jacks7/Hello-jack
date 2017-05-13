// JavaScript Document
function placeOrder(ordernumber){
	
	console.log("Customer order:", ordernumber);

	cookAndDeliverFood( function(){
		console.log("Delivered food order:", ordernumber);
	});

	cookAndDeliverTea( function(){

		console.log("customer Tea:",ordernumber);
	});
	
	}

	function cookAndDeliverFood(callback){
		setTimeout(callback,5000);
	}
	function cookAndDeliverTea(callback){
		setTimeout(callback,10000);
	}

	placeOrder(1);
	placeOrder(2);
	placeOrder(3);
	placeOrder(4);
	placeOrder(6);