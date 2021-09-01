let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 18;
if(early && age > 18) {
   raceNumber += 1000;
}

if(early  && age > 18) {
  console.log(`Your race will begin at 9.30am, your race number is: ${raceNumber}.`);
}
else if(!early && age > 18) {
  console.log(`Your race will begin at 11am. Your race number is: ${raceNumber}.`); 
}
else if(age < 18) {
  console.log(`Your race will begin at 12.30, your race number is: ${raceNumber}. `);
}
else{
  console.log(`Please approach the registration desk. thank you`);
}
