// Question 112
let countries = new Map();
countries.set("Pakistan", "Islamabad");
countries.set("France", "Paris");
countries.set("Saudia Arabia", "Riyadh");
countries.set("Canda", "Ottawa");
console.log(countries);
// Question 113
// function logCapitalofCanda(countries:Map<string,string>):void{
//     if(countries.has("Canda")){
//         console.log(`The capital of canda is ${countries.get("Canda")}`);
//     }
//     else{
//         console.log("Canda is not in the map.");
//     }
// }
// logCapitalofCanda(countries);
if (countries.has("Canda")) {
    console.log(`The capital of canda is ${countries.get("Canda")}`);
}
else {
    console.log("Canda is not in the map.");
}
// Question 114
let Student = new Map();
Student.set("Maham", 809);
Student.set("Mahnoor", 803);
Student.set("Sabar", 805);
Student.forEach((id, name) => {
    console.log(`Student name is ${name} and Student id is ${id}`);
    // console.log(`Student ID: ${id}, Name: ${name}`);
});
export {};