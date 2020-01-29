var myTaskArray = [];
function addTask(task) {
    myTaskArray.push(task);
    console.log("Item " + task + " has been added to the array");
    return myTaskArray.length;
}
function listAllItems() {
    //for(let i=0;i<myTaskArray.length;i++)
    //{}
    console.log("list of item in the array is: ");
    myTaskArray.forEach(function (item) {
        console.log(item);
    });
}
function deleteTask(task) {
    var index = myTaskArray.indexOf(task);
    if (index > -1) {
        myTaskArray.splice(index, 1);
        console.log("Item " + task + " has been deleted to the array");
    }
    else {
        console.log("Item " + task + " is not in the array.");
    }
    return myTaskArray.length;
}
addTask("Complete Part A");
var itemInArray = addTask("Complete Part B");
console.log("Number of Items in Array is " + itemInArray);
listAllItems();
var count = deleteTask("Complete Part A");
console.log("num in array: " + count);
