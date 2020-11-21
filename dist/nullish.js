"use strict";
const nullish = null;
// const nullish = ''; // pusty string nie jest traktowany jako nullish 
const nullishTest = nullish !== null && nullish !== void 0 ? nullish : 'Default'; // jeśli nullish jest undefined albo null to ustawiana jest wartość po prawej stronie
