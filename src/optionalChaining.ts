const fetchedData = {
    id: 'u1',
    name: 'Piotr',
    job: {title: 'CTO', description: 'My own company'}
}

// console.log(fetchedData.job && fetchedData.job.title) // sposób js
// operator && sprawdza najpierw wyrażenie po lewej następnie wykonuje po prawej. Użyteczne gdy nie wiemy czy dane pole jest undefined np. gdy pobieamy z rest 

console.log(fetchedData?.job?.title) //optionalChaining wyrażenie ?. robi to samo co to wyżej tylko in nicer way
console.log('fetchedData?.job?.title') 