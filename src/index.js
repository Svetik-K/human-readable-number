const zeroToNineteen = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const tens = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

module.exports = function toReadable (number) {
  let strNum = String(number);

  if(+strNum < 20) {
    return zeroToNineteen[+strNum];
  }
  else if(+strNum < 100) {
    if(strNum.endsWith('0')){
      return tens[+strNum[0] - 1];
    }else {
      return `${tens[+strNum[0] - 1]} ${zeroToNineteen[+strNum[1]]}`;
    }     
  }
  else if(+strNum < 1000){
    if(strNum.endsWith('00')) {
      return `${zeroToNineteen[+strNum[0]]} hundred`;
    }
    else if(strNum.endsWith('0')) {
      return `${zeroToNineteen[+strNum[0]]} hundred ${tens[+strNum[1] - 1]}`;
    }
    else if(+strNum[1] === 1) {
      return `${zeroToNineteen[+strNum[0]]} hundred ${zeroToNineteen[+strNum[2] + 10]}`;
    } 
    else if(+strNum[1] === 0) {
      return `${zeroToNineteen[+strNum[0]]} hundred ${zeroToNineteen[+strNum[2]]}`;
    } 
    else {
      return `${zeroToNineteen[+strNum[0]]} hundred ${tens[+strNum[1] - 1]} ${zeroToNineteen[+strNum[2]]}`;
    }  
  }     
} 


