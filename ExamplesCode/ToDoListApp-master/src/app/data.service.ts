export class DataService{
    private data: string[] = ["Apple iPhone 12", "POCO 3", "Samsung Note 20"];

    getData(){
        return this.data;
    }

    addItem(item: string){
        this.data.push(item);
    }
}