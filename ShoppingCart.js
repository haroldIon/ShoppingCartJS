


function ShoppingCart(scenario){

	var pricing = {};
	
	var itemCodeKV = {"1gb_free":"1GB Data-pack","1gb":"1GB Data-pack", "ult_small":"Unlimited 1GB", "ult_medium":"Unlimited 2GB", "ult_large":"Unlimited 5GB"};
	
	var itemCodeCounterKV = {"1gb_free":0, "1gb":0, "ult_small":0, "ult_medium":0, "ult_large":0};
	
	var promo_boolKV = {"promo_code":false};
	
	this.scenario = scenario;
	
	var loaded_cart = [];
	
	var total = 0.0;
	var total_ult_small = 0;
	var total_ult_medium = 0;
	var total_ult_large = 0;
	var total_1gb = 0;
	var ult_large_discount = 0;
	var heart_amayasim_discount = 1;
	
	//adds items to cart
	this.add = function(item,promo="") {
	if( pricing.hasOwnProperty( item ) ) {
		loaded_cart.push(item)
	}
	
	if(promo == "I<3AMAYSIM")
	{
		promo_boolKV["promo_code"] = true;	
	}
	
	};
	
	//tallies items on cart
	this.items = function() {
	
	for (var key in itemCodeCounterKV) {
		if(itemCodeCounterKV[key]!=0){
			console.log(itemCodeCounterKV[key] +"x "+ itemCodeKV[key]);
		}
	}
	if (promo_boolKV["promo_code"] == true)
	{
		console.log("I<3AMAYSIM promo applied");
	}
	}
	
	//cart total
	this.total = function(){
	
	//sort each product code
	for (var x = 0; x < loaded_cart.length; x++){
	if( loaded_cart[x] == "ult_small")
		itemCodeCounterKV[loaded_cart[x]]++;
	if( loaded_cart[x] == "ult_medium")
		itemCodeCounterKV[loaded_cart[x]]++;
	if( loaded_cart[x] == "ult_large")
		itemCodeCounterKV[loaded_cart[x]]++;
	if( loaded_cart[x] == "1gb")
		itemCodeCounterKV[loaded_cart[x]]++;
	}
	
	total_ult_small = total_ult_small + parseFloat(pricing["ult_small"])*parseInt(itemCodeCounterKV["ult_small"]);
	
	//ult_small promo
	if(parseInt(itemCodeCounterKV["ult_small"])%3 == 0)
	{
		total_ult_small = total_ult_small * 2/3;
	}
	
	total_ult_medium = total_ult_medium + parseFloat(pricing["ult_medium"])*parseInt(itemCodeCounterKV["ult_medium"]);

	//ult_medium promo
	for(var y = 0; y < itemCodeCounterKV["ult_medium"]; y ++){
		itemCodeCounterKV["1gb_free"]++;
	}

	//
	
	if(parseInt(itemCodeCounterKV["ult_large"]) >  3)
	{
		ult_large_discount = 5;
	} else {
		ult_large_discount = 0;
	}
	
	total_ult_large = total_ult_large + (parseFloat(pricing["ult_large"])-ult_large_discount)*parseInt(itemCodeCounterKV["ult_large"]);
	
	total_1gb = total_1gb + parseFloat(pricing["1gb"])*parseInt(itemCodeCounterKV["1gb"]);
	
	if(promo_boolKV["promo_code"] == true)
	{
		heart_amayasim_discount = 0.9;
	} else {
		heart_amayasim_discount = 1;
	}
	
	total = (total_ult_small + total_ult_medium + total_ult_large + total_1gb)*heart_amayasim_discount;
	
	console.log("$"+total.toFixed(2))
	}
	
	
	//changes pricingRules
	ShoppingCart.new = function(pricingRules) {
		pricing = pricingRules;
	};
	
	
	this.showScenario = function(){
	console.log("This is scenario " + this.scenario);
	}
}

var pricingRules = {"1gb":9.90, "ult_small":24.90, "ult_medium":29.90, "ult_large":44.90};

var pricingRules1 = {"1gb":10, "ult_small":25, "ult_medium":30, "ult_large":45};


//scenario 1
var cart = new ShoppingCart("1");
ShoppingCart.new(pricingRules)
cart.showScenario();
cart.add("ult_small");
cart.add("ult_small");
cart.add("ult_small");
cart.add("ult_large");
cart.total();
cart.items();


/*
//scenario 2
var cart = new ShoppingCart("2");
ShoppingCart.new(pricingRules)
cart.showScenario();
cart.add("ult_small");
cart.add("ult_small");;
cart.add("ult_large");
cart.add("ult_large");
cart.add("ult_large");
cart.add("ult_large");
cart.total();
cart.items();
*/

/*
//scenario 3
var cart = new ShoppingCart("3");
ShoppingCart.new(pricingRules)
cart.showScenario();
cart.add("ult_small");
cart.add("ult_medium");;
cart.add("ult_medium");
cart.total();
cart.items();
*/

/*
//scenario 4
var cart = new ShoppingCart("4");
ShoppingCart.new(pricingRules)
cart.showScenario();
cart.add("ult_small");
cart.add("1gb","I<3AMAYSIM");
cart.total();
cart.items();
*/


