const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
console.log(faqItems)
for (const item of faqItems) {
	const onClick = () => {
		console.log(item)
		item.classList.toggle('active')
	}
	item.addEventListener('click', onClick)
}

