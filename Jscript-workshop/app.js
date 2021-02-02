console.log("working");

//map numbers with dash

const arrayMap = [0, 2, 5, 4, 6, 8, 10, 12, 3, 4, 4, 3, 4, 4];

function mapNumbers(arr) {
  let resultString = `${arrayMap[0]}`;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] % 2 === 0 && arr[i] % 2 === 0) {
      resultString += `-${arr[i]}`;
    } else {
      resultString += arr[i];
    }
  }
  return resultString;
}

console.log(mapNumbers(arrayMap));

//divine with 3 and 7

function divide(num) {
  const numArray = [];
  const resultArr = [];
  //generating an array of n size
  for (let i = 1; i <= num; i++) {
    numArray.push(i);
  }
  //pushing only the required numbers
  for (let el of numArray) {
    if (el % 3 === 0 && el % 7 === 0) {
      resultArr.push(el);
    }
  }
  return resultArr;
}

divide(100);
console.log(divide(150));

//atm machine

function change(num) {
  const resultArr = [];
  const coins = [50, 20, 10, 5, 1];
  for (let coin of coins)
    if (num % coin === 0) {
      for (let i = 0; i < num / coin; i++) {
        resultArr.push(coin);
      }
      break;
    } else {
      for (let j = 0; j < (num - (num % coin)) / coin; j++) {
        resultArr.push(coin);
      }
      num = num % coin;
    }

  return resultArr;
}

console.log(change(164));

function changeBonus(num) {
  const resultArr = [];
  const coins = [50, 20, 10, 5, 1];
  const coinLimits = [5, 8, 10, 15, 20];
  for (let [i, coin] of coins.entries()) {
    if (num > coin * coinLimits[i]) {
      for (let z = 0; z < coinLimits[i]; z++) {
        resultArr.push(coin);
      }
      num = num - coin * coinLimits[i];
    } else {
      if (num % coin === 0 && num < coin * coinLimits[i]) {
        for (let i = 0; i < num / coin; i++) {
          resultArr.push(coin);
        }
      } else {
        for (let j = 0; j < (num - (num % coin)) / coin; j++) {
          resultArr.push(coin);
        }
      }
      num = num % coin;
    }
  }
  return resultArr;
}

console.log(changeBonus(5000));

function changeBouns02(num) {
  const resultArr = [];
  const coins = [
    [50, 5],
    [20, 10],
    [10, 20],
    [5, 40],
    [1, 100],
  ];
  const changeTotal = coins.reduce((acc, el) => {
    return (acc += el[0] * el[1]);
  }, 0);
  if (num <= changeTotal) {
    for (coin of coins) {
      if (num > coin[0] * coin[1]) {
        for (let z = 0; z < coin[1]; z++) {
          resultArr.push(coin[0]);
        }
        num = num - coin[0] * coin[1];
      } else {
        if (num % coin[0] === 0 && num < coin[0] * coin[1]) {
          for (let i = 0; i < num / coin[0]; i++) {
            resultArr.push(coin[0]);
          }
        } else {
          for (let j = 0; j < (num - (num % coin[0])) / coin[0]; j++) {
            resultArr.push(coin[0]);
          }
        }
        num = num % coin[0];
      }
    }
    return resultArr;
  } else {
    return "Not Enough Change";
  }
}

console.log(changeBouns02(950));
