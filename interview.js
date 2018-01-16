// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers.

// For example, [2, 4, 6, 8] should return 12, since we pick 4 and 8. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

var numArray = [2,4,6,8]
var x = ''
var y = ''

for (i = 0; i < numArray.length; i+= 2){
	if (numArray[i] > numArray[i + 2]){
		x = (numArray[i])
	}else{
		x = (numArray[i + 2])
	}
	break
}
console.log(x)
for(j = 1; j < numArray.length; i+= 2){
	if (numArray[j] > numArray[j + 2]){
		y = (numArray[j])
	}else{
		y = (numArray[j + 2])

	}
	break
}
console.log(y)
console.log(x+y)

