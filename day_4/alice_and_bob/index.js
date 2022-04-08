// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

function cullList(arr, num) {
    if ((Math.sign(num)===-1) || !Number.isInteger(num)) {
        throw "Bad number argument!";
    }

    try {
        const resultObject = {};
        const resultArray = [];
        for (let element of arr) {
            if (typeof element !== "number") {
                return "Bad array!";
            }

            resultObject[element] = resultObject[element]+1 || 1;
            
            if (resultObject[element]<=num) {
                resultArray.push(element);
            }
        }
        return resultArray;
    }
    catch (error) {
        return "Bad argument!";
    }
}


module.exports = cullList;