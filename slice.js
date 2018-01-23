/////using the slice method

var numbers = [
	"123-456-789",
	"321-456-789",
	"456-456-789",
	"654-456-789",
	"789-456-789",
	"987-456-789",
	"000-456-789",
]

function sliceNumbers(){
	var newArray = []
	for (var i = 0; i < numbers.length; i++){
		var newNumbers = numbers[i].slice(0,3)
		newArray.push(newNumbers)
	}
	return newArray
}
var newFunction = sliceNumbers()
console.log(newFunction) /////this console logs the return value from sliceNumbers



