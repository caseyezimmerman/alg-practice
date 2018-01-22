// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

// for (i = 0; i < 600851475143; i++){
// 	if (i % )
// }

function isPrime(value) {
    for(var i = 3; i < value; i++) {
        if(value % i === 0) {
            console.log(false)
            console.log(i)
        }
    }
    // console.log(value > 1);
}

isPrime(20)