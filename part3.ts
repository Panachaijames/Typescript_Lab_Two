import {myInterface} from './interface';

class Todo implements myInterface
{
    myTaskArray: string[] =[];

    addTask(task: string): number {
        this.myTaskArray.push(task);
        console.log("Item " + task + " has been added to the array");
    
        return this.myTaskArray.length;
    }
    listAllItems(): void {
        console.log("list of item in the array is: ");
        this.myTaskArray.forEach(function (item) {
            console.log(item);
        });
    }
    deleteTask(task: string): number {
        let index: number = this.myTaskArray.indexOf(task);
        if (index > -1) {
            this.myTaskArray.splice(index, 1);
            console.log("Item " + task + " has been deleted to the array");
        } else {
            console.log("Item " + task + " is not in the array.");
        }
        return this.myTaskArray.length;
    }

}
let todo1 = new Todo();
todo1.addTask("Part A");
todo1.listAllItems;
todo1.deleteTask("Part A");