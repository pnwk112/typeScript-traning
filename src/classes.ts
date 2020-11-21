class Department{
    name: string;

    constructor(n: string){
        this.name = n;
    }

    describe(this: Department){ // metoda descripbe może być wywołana tylko na obiekcie dziedziczącym po Department
        console.log(`Name is equal ${this.name}`)
    }
}

class ITDep extends Department{
    static instance: ITDep;
    get team(){
        return this._team;
    }

    set team(val: Array<string>){
        this._team = val
    }

    private constructor(private _team: Array<string>){
        super('IT');
    }
    callSupport(this: ITDep){
        console.log(`Our ${this.name} stuff in number of ${this.team.length} are on the way.`)
    }

    static getInstance(){
        if(ITDep.instance){
            return this.instance
        }else{
            this.instance = new ITDep(['Mark','Julian'])
            return this.instance
        }
    }

}

const acc = new Department("R&D")
acc.describe()
console.log(`------------`)
// const it = new ITDep(['Mark','Julian']);
// it.callSupport()


// console.log(it)
