import {MyLogService} from "./my-log.service"
export class DataService{
    private data: string[] = ["Apple iPhone 12", "POCO 3", "Samsung Note 20"];

    constructor(private logger: MyLogService){}
    getData(){
        this.logger.logMessage("Операция получения данных");
        return this.data;
    }

    addItem(item: string){
        this.data.push(item);
        this.logger.logMessage("Операция добавления данных");
    }
}