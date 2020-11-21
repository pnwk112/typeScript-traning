"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log(`Name is equal ${this.name}`);
    }
}
class ITDep extends Department {
    constructor(_team) {
        super('IT');
        this._team = _team;
    }
    get team() {
        return this._team;
    }
    set team(val) {
        this._team = val;
    }
    callSupport() {
        console.log(`Our ${this.name} stuff in number of ${this.team.length} are on the way.`);
    }
    static getInstance() {
        if (ITDep.instance) {
            return this.instance;
        }
        else {
            this.instance = new ITDep(['Mark', 'Julian']);
            return this.instance;
        }
    }
}
const acc = new Department("R&D");
acc.describe();
console.log(`------------`);
// const it = new ITDep(['Mark','Julian']);
// it.callSupport()
// console.log(it)
