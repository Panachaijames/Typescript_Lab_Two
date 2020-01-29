"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.myTaskArray = [];
    }
    Todo.prototype.addTask = function (task) {
        this.myTaskArray.push(task);
        console.log("Item " + task + " has been added to the array");
        return this.myTaskArray.length;
    };
    Todo.prototype.listAllItems = function () {
        console.log("list of item in the array is: ");
        this.myTaskArray.forEach(function (item) {
            console.log(item);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.myTaskArray.indexOf(task);
        if (index > -1) {
            this.myTaskArray.splice(index, 1);
            console.log("Item " + task + " has been deleted to the array");
        }
        else {
            console.log("Item " + task + " is not in the array.");
        }
        return this.myTaskArray.length;
    };
    return Todo;
}());
var todo1 = new Todo();
todo1.addTask("Part A");
todo1.listAllItems;
todo1.deleteTask("part z");
