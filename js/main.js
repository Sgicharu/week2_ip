const dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
const femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

var century = 19;
var year = 1989;
var month = 12;
var day = 5;
var gender = "m";
var indexOfTheDay = (((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7

