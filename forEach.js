/////learning how to use the forEach function/////

function showResults(value, index){
	console.log("value:" + value)
	console.log("index:" + index)
}

var letters = ["ab", "cd", "ef"]

letters.forEach(showResults)

function showNumbers(values){
	console.log(values)

}

numbers = [1, 2, 3, 4, 5]

numbers.forEach(showNumbers)