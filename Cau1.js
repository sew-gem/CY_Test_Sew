function isPerfectNumber(num) {
    if (num < 1) return false;
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

function generateRandomNumber() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(`Số ngẫu nhiên: ${randomNum}`);
    
    if (isPerfectNumber(randomNum)) {
        console.log(`${randomNum} là số hoàn hảo.`);
    } else {
        console.log(`${randomNum} không phải là số hoàn hảo.`);
    }
}

setInterval(generateRandomNumber, 2000);