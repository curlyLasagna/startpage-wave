// true = 12 hour
// false = 24 hour
let clockMode = true;
document.querySelectorAll('a').forEach(links => {
	links.setAttribute("draggable", "true");
})

const clock_12Hour = () => {
	let date = new Date(),
		hours = date.getHours(),
		minutes = date.getMinutes(),
		ampm = hours >= 12 ? 'pm' : 'am';

	hours = hours % 12;
	hours = hours ? hours : 12; 
	minutes = minutes < 10 ? '0'+ minutes : minutes;
	let strTime = hours + ':' + minutes + ' ' + ampm;
	document.getElementById('time').innerHTML = strTime;
	setTimeout(clock_12Hour, 1000);
}

const clock_24Hour = () => {
	let now = new Date();
		hours = now.getHours();
		minutes = now.getMinutes();

	if (minutes < 10) 
		time = hours + ':' + "0" + minutes;
	 else 
		time = hours + ':' + minutes;
	
	if (hours < 10) 
		time = "0" + time;
	
    document.getElementById('time').innerHTML = time;
	setTimeout(clock_24Hour, 1000);
}

const setClock = () => {
	if(clockMode) {
		clockMode = false;
		clock_12Hour();  
	}
	else {
		clockMode = true;
		clock_24Hour();
	}
}

setClock();
// Truncates strings that will overflow past their containers
const truncate = (str)  =>
	str.length > 12 ?
	`${str.substring(0, 12)}...`
	: str;

siteName = document.querySelectorAll('.link');
siteName.forEach(links => {
	links.textContent = truncate(links.textContent, 2)
});