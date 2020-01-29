export interface myInterface
{
    myTaskArray: Array<string>,
    addTask(task: string): number,
    listAllItems(): void,
    deleteTask(task: string): number;

}
