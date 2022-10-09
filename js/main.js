var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function validate() {
    var genders = document.getElementsByName("gender");
    if( document.myForm.year.value == "" || document.myForm.year.value.length !=4 || document.myForm.year.value >2100 || document.myForm.year.value <=1900) {
       alert( "Please provide a valid year of birth! eg 2019" );
       document.myForm.year.focus() ;
       return false;
    }

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