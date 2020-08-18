function menu() {
	const sections = document.querySelectorAll("section");
	const navLink = document.querySelectorAll("nav a");

	sections.forEach((section) => {
		section.addEventListener("mouseenter", function () {
			const id = this.getAttribute("id");
			const navActive = document.querySelector("a[href= '#" + id + "']");
			navLink.forEach((nav) => nav.classList.remove("active"));
			navActive.classList.add("active");
		});
	});
}

menu();
