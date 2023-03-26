const objectA = {
    age:23,
    tall: 'fat'    
}

console.log(objectA)

const copyObjectOfA = objectA;

console.log(copyObjectOfA)

copyObjectOfA.age = 25

console.log(copyObjectOfA)

copyObjectOfA.c = 'hello'

console.log(copyObjectOfA)