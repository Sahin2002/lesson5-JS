// array and object 
// array
const scores=[22,33]
const [firstScore,secondScore]=scores
console.log(firstScore);
console.log(secondScore)
// Object
const student={
    name:'Sahin',
    age:21,
    isEnrooled:true
}
const {name,age}=student
console.log(name);
console.log(age);
// typeof operator
console.log(typeof scores);
// artimetic 
console.log(firstScore > secondScore);
console.log(firstScore < secondScore);
console.log(firstScore === secondScore && age >= firstScore && age<= secondScore);
console.log(firstScore >= secondScore || firstScore <= secondScore || age === firstScore );
console.log(!student.isEnrooled);