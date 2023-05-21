const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let day = weekday[d.getDay()];
let monthName = month[d.getMonth()];
let dayOfMonth = d.getDate();
let year = d.getFullYear();

const todaysDate = day + ", " + dayOfMonth + " " + monthName + " " + year;

document.getElementById("Date").innerHTML = todaysDate;


const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});

