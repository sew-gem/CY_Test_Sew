var mang = new Array(10, 5, 2, 5, 6, 7, 8, 9);

function calculateSum(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    console.log(`Tổng các số trong mảng: ${sum}`);
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findPrimes(arr) {
    const primes = arr.filter(isPrime);
    console.log(`Các số nguyên tố trong mảng: ${primes.join(', ')}`);
}

function findDivisibleByThree(arr) {
    const divisibleByThree = arr.filter(num => num % 3 === 0);
    console.log(`Các số chia hết cho 3 trong mảng: ${divisibleByThree.join(', ')}`);
}

setTimeout(() => {
    calculateSum(mang);
}, 3000);

setTimeout(() => {
    findPrimes(mang);
}, 6000);

setTimeout(() => {
    findDivisibleByThree(mang);
}, 9000);