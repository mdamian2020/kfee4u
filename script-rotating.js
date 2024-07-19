const imageContainer = 
	document.querySelector('.image-container');
const prevBtn = 
	document.getElementById('prev');
const nextBtn = 
	document.getElementById('next');
const overlay = 
	document.getElementById('overlay');
const popupImg = 
	document.getElementById('popup-img');
const images = 
	document.querySelectorAll('.image-container span img');
const imageDescription = document.getElementById('image-description');

let x = 0;
prevBtn.addEventListener('click', () => {
	x = x + 45;
	rotate();
	updateDescription();
});

/*nextBtn.addEventListener('click', () => {
	x = x - 45;
	rotate();
	updateDescription();
});*/



images.forEach(image => {
	image.addEventListener('click', () => {
		const src = image.getAttribute('src');
		popupImg.setAttribute('src', src);
		overlay.classList.add('active');
	});
});

overlay.addEventListener('click', () => {
	overlay.classList.remove('active');
});

function rotate() {
	imageContainer.style.transform = 
		`perspective(1000px) rotateY(${x}deg)`;
}
function updateDescription() {
	//Get all images
	const images = imageContainer.querySelectorAll('.image-container span img');
	//Calculate active image index
	//const activeImageIndex=Math.round(x/45) % images.length;
	const activeImageIndex=Math.floor(x/45) % images.length;
	if(activeImageIndex >=0) {
		//Get the active image based on index
		const activeImage = images[activeImageIndex];
		const description = activeImage.getAttribute('data-description');
		imageDescription.textContent = description;
	}

}



// Call updateDescription() initially to display the description of the first image
updateDescription();

