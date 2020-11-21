class DataStorage<T>{
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item)
    }

    removeItem(item: T){
        this.data.splice(this.data.indexOf(item),1)
    }

    getData(){
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();

const numberStorage = new DataStorage<number>()