const getTopPhoneNumberAreaCodes = (numbers, x) => {
  var newArray = []
  for( var i = 0;  i < numbers.length; i++){
    var slicedArray = numbers[i].slice(0,3)
    console.log(slicedArray)
    newArray.push(slicedArray)

  }
  return newArray
 
};

console.log(getTopPhoneNumberAreaCodes([
  '555-654-3958',
  '123-534-7927',
  '485-388-3847',
  '555-384-2875',
  '555-381-5739',
  '123-583-2374',
  '749-238-3823',
  '444-375-3839'
], 2));
// Should print [555, 123]