export function cypherEffect() {
	const letters = "abcdefghijklmnopqrstuvwxyz/";

	const elements = document.querySelectorAll("[tag=cypher]");

	elements.forEach((element) => {
		element.addEventListener("mouseover", (event) => {
			let length = event.target.innerText.length;
			let iterations = 0;
			const interval = setInterval(() => {
				if (iterations <= length) {
					event.target.innerText = event.target.innerText
						.split("")
						.map((letter, index) => {
							if (index < iterations) {
								return event.target.dataset.value[index];
							}
							return letters[Math.floor(Math.random() * 27)];
						})
						.join("");
				}
				iterations += 1 / 3;
			}, 30);
		});
	});
}

export function dragScrolling() {
	const scrollContainer = document.querySelectorAll("[tag=scroll]");
	let isDragging = false;
	let startX, scrollLeft;

	scrollContainer.forEach((container) => {
		container.addEventListener("mousedown", (e) => {
			isDragging = true;
			startX = e.pageX - container.offsetLeft;
			scrollLeft = container.scrollLeft;
		});

		container.addEventListener("mouseleave", () => {
			isDragging = false;
		});

		container.addEventListener("mouseup", () => {
			isDragging = false;
		});

		container.addEventListener("mousemove", (e) => {
			if (!isDragging) return;
			e.preventDefault();
			const x = e.pageX - container.offsetLeft;
			const walk = (x - startX) * 2;
			container.scrollLeft = scrollLeft - walk;
		});
	});
}

export function observer() {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (entry.target.dataset.value === "skill") {
					const elements = document.querySelectorAll("[data-value=skill]");
					elements.forEach((element) => {
						element.classList.add("show-on-scroll");
					});
				}
				if (entry.target.dataset.value === "quote") {
					const elements = document.querySelectorAll("[data-value=quote]");
					elements.forEach((element) => {
						element.classList.add("show-on-scroll");
					});
				}
				if (entry.target.dataset.value === "cert") {
					const elements = document.querySelectorAll("[data-value=cert]");
					elements.forEach((element) => {
						element.classList.add("show-on-scroll");
					});
				}
			}
		});
	});

	const hiddenElements = document.querySelectorAll(".hidden-before-scroll");
	if (hiddenElements) {
		hiddenElements.forEach((el) => observer.observe(el));
	}
}
