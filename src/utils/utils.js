export function binaryValidator(inputValue) {
    // check if input is binary (i.e. contains only 1s and 0s)
    let inputArr = [];
    let inputNumArr = [];

    if(inputValue.length > 1)
    {
        inputArr = inputValue.split('');
    }
    else
    {
        inputArr = [inputValue];
    }

    inputArr.forEach((element) => {
        inputNumArr.push(parseInt(element));
    });

    let isBinary = inputNumArr.every((digit) => {
        return digit < 2;
    });

    return isBinary;
}

export function binaryToDecimal(binaryValue) {
    let binaryArr = binaryValue.split('');
    let decimalValue = 0;
    let powa = binaryArr.length - 1;

    if(binaryValidator(binaryValue))
    {
        binaryArr.forEach((value) => {
            decimalValue += value * Math.pow(2, powa);
        });
    }

    return decimalValue;

}