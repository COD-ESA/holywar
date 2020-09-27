var link = document.getElementsByClassName("a-link");

for ( let i = 0; i <= link.length; i++){
	let hr_width = link[i].clientWidth/3;
	link[i].children[0].style.width = hr_width + 'px';
	let hr_left = link[i].clientWidth/4 + 8;
	link[i].children[0].style.left = hr_left + 'px';
}