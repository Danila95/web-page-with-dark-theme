const btn = document.getElementById("theme-button");
const link = document.getElementById("theme-link");


let lightTheme = "styles/light.css";
let darkTheme = "styles/dark.css";

let currTheme = link.getAttribute("href");
let theme = localStorage.getItem('theme');


const ChangeTheme = () => {
	if ( currTheme == lightTheme ) {
		currTheme = darkTheme;
		theme = "dark";
		localStorage.setItem('theme', theme);
	} else {    
		currTheme = lightTheme;
		theme = "light";
		localStorage.setItem('theme', theme);
	}
}


btn.addEventListener("click", () => { ApplyTheme() } );

const ApplyTheme = () => {
	ChangeTheme();
	link.setAttribute("href", currTheme);
}

// проверка на пользовательские настройки
if ( theme != null ) {
	if (theme == 'light') {
		currTheme = lightTheme;
		link.setAttribute("href", lightTheme);
	} else {
		currTheme = darkTheme;
		link.setAttribute("href", darkTheme);
	}		
}