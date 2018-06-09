var  nav = document.getElementById('nav');
      
window.addEventListener("scroll", function(e) {
	if (window.pageYOffset >100) {

		nav.style.background = "rgba(103, 80, 121, 0.8)";
		nav.style.boxShadow = "0px 4px 2px grey";
	}
	else{
		nav.style.background = "transparent";
		nav.style.boxShadow = "none";
	}
});