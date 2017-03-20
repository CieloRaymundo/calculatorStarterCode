// All the code you will need to create for this project will be completed below
// Your functions must be called the following:
    // multiply, divide, subtract, add, power, square_root, logBase10, generateRandomNumber


function divide(x,y)
{
	//Write your code below this line
	if (y=== 0){
    
	return "0";
	}
	
	var divided = x / y;
	return divided;
	
}

function multiply(x,y){
	var multiplied = x * y;
	return multiplied;
}

function subtract(x,y){
     var subtracted = x - y ;
     return subtracted;
}

function add(x,y){
    var added = x + y;
    return added;
}

function power(x,y)
{
    var powered = Math.pow(x, y);
    return powered;
	
}

function square_root(x)
{
    if (x<0){
        alert("Undefined");
     }
	var sqrt = Math.sqrt(x);
	return sqrt;
}

function logBase10(x)
{
	var log = Math.log10(x);
	return log
}

function generateRandomNumber(x)
{
	var random = Math.random(x)
	return random;
}
