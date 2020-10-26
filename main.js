(function() {
	console.log("ijskdfa");
	var preload = document.getElementById('loading');
	var loading = 0;
	var id = setInterval(frame, 64);

	function frame() {
		if (loading == 100) {
			clearInterval(id);
			window.location.href = "home.html";
		} else {
			loading += 1;
			if (loading == 90) {
				preload.style.animation = "fadeout 2s ease";
			}
		}
	}
})();