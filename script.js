Array.prototype.removeItem = function(array,val) {
    array.forEach((arrayItem,index) => {
        if (arrayItem == val) {
            array.splice(index, 1);
        }

    });
    return array;
}

let userInput = prompt("Який із 1-7 елементів масиву ви хочете видалити?");
userInput =  Number(userInput);


let DummyArray = [1, 2, 3, 4, 5, 6];


console.log(DummyArray.removeItem(DummyArray, userInput));