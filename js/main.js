const dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
const femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

var century = 19;
var year = 1989;
var month = 12;
var day = 5;
var gender = "m";
var indexOfTheDay = (((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7

indexOfTheDay = Math.round(indexOfTheDay);
var dayTheUserWasBorn = DAYS_OF_THE_WEEK[indexOfTheDay];
var name = null

if (gender ==='m'){
    MALE_NAMES
} else if (gender === 'f'){
    FEMALE_NAMES
} else if{
    alert("invalid gender");
}

console.log(dayTheUserWasBorn);
console.log(name)