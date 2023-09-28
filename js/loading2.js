// =====================

//        LOADING

// =====================



var timeLimit = 100000;

window.addEventListener("load", function() {

	window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdXLIZDKDIx0SrfS67CYeFsLHuLl1_T2HpO27EVmqGBOrmjaQ/viewform?usp=pp_url";

});



var errorTimer = setTimeout(function() {

	document.getElementById("loading").style.display = "none";

	document.getElementById("error-message").style.display = "block";

}, timeLimit);
