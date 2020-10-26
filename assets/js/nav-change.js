const nav = document.querySelector("nav");
const header = document.querySelector("header");

const headerOptions = {
	rootMargin: "-500px 0px 0px 0px"
}

const headerObserver = new IntersectionObserver(function(entries, headerObserver) {
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			nav.classList.add("nav-scrolled");
		} else {
			nav.classList.remove("nav-scrolled");
		}
	});
}, headerOptions);

headerObserver.observe(header);