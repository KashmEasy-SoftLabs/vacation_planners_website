(function () {

	'use strict'


	AOS.init({
		duration: 800,
		easing: 'slide',
		once: true
	});

	var rellax = new Rellax('.rellax');

	var preloader = function () {

		var loader = document.querySelector('.loader');
		var overlay = document.getElementById('overlayer');

		function fadeOut(el) {
			el.style.opacity = 1;
			(function fade() {
				if ((el.style.opacity -= .1) < 0) {
					el.style.display = "none";
				} else {
					requestAnimationFrame(fade);
				}
			})();
		};

		setTimeout(function () {
			fadeOut(loader);
			fadeOut(overlay);
		}, 200);
	};
	preloader();


	var tinyslier = function () {



		var el = document.querySelectorAll('.wide-slider-testimonial');
		if (el.length > 0) {
			var slider = tns({
				container: ".wide-slider-testimonial",
				items: 1,
				slideBy: 1,
				axis: "horizontal",
				swipeAngle: false,
				speed: 700,
				nav: true,
				loop: true,
				edgePadding: 40,
				controls: true,
				controlsPosition: "bottom",
				autoHeight: true,
				autoplay: true,
				mouseDrag: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false,
				controlsContainer: "#prevnext-testimonial",
				responsive: {
					350: {
						items: 1
					},

					500: {
						items: 2
					},
					600: {
						items: 3
					},
					900: {
						items: 5
					}
				},
			});
		}


		var destinationSlider = document.querySelectorAll('.destination-slider');

		if (destinationSlider.length > 0) {
			var desSlider = tns({
				container: ".destination-slider",
				mouseDrag: true,
				items: 1,
				axis: "horizontal",
				swipeAngle: false,
				speed: 700,
				edgePadding: 50,
				nav: true,
				gutter: 30,
				autoplay: true,
				autoplayButtonOutput: false,
				controlsContainer: "#destination-controls",
				responsive: {
					350: {
						items: 1
					},

					500: {
						items: 2
					},
					600: {
						items: 3
					},
					900: {
						items: 5
					}
				},
			})
		}



	}
	tinyslier();


	var lightbox = function () {
		var lightboxVideo = GLightbox({
			selector: '.glightbox3'
		});
	};
	lightbox();

let popupOneBtn = document.querySelector('#popup-1');

setTimeout(() => {
	popupOneBtn.click();
}, 2000);
})();



let serviceContainer = document.querySelector('#services-container');

let serviceData = [
	{
		image : "images/svg/01.svg",
		title : "Transportation",
		description : `Experience seamless journeys with our premium cab rental service. Affordable rates, Customer satisfication ,Book now! .`
	},
	{
		image : "images/svg/02.svg",
		title : "Package Tours",
		description : `Packages offer convenience by bundling flights, accommodation, and sometimes activities for one price. Research options to find the best deal and connect wit us.`
	},
	{
			image : "images/svg/03.svg",
			title : "Best Flights",
			description : `Experience seamless journeys with our premium flight booking service. Affordable
										rates, and comfort that exceeds expectations. Book now!`
	},
	{
		image : "images/svg/04.svg",
		title : "Accommodation",
		description : `Enjoy the comforts of home while you travel. Our accommodation services offer
										quality rooms, great locations, and unbeatable prices.`
	},
	{
		image : "images/svg/05.svg",
		title : "Destination Weddings",
		description : "We provide a full range of services for destination weddings. From planning and coordination to travel and accommodations, we have you covered."	
	},
	{
image : "images/svg/06.svg",
title : "Tour guides",
description : "Tour guides are responsible for helping people to visit unfamiliar areas. They usually make special trips with groups of tourists in order to show them important places of cities."
	},
	{
		image : "images/svg/07.svg",
		title : "Business Meetings",
		description : "We Provide Professional business meeting setup services. we handle every detail for your success and finalize upcoming project deadlines."
	},
	{
		image : "images/svg/08.svg",
		title : "Gala Dinner",
		description : "A gala dinner is a formal, elegant event featuring fine dining, entertainment, speeches, and fundraising activities, often for charity."
	},
	{
		image : "images/svg/09.svg",
		title : "DJ's",
		description : "We provide music mixes, energize crowds, and set the mood at events. They use turntables, mixers, to blend tracks.."
	}
]

serviceData.forEach((service, index) => {
	serviceContainer.innerHTML += `
	<div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="${index * 100}">
							<div class="service-1">
								<span class="icon">
									<img src="${service.image}" alt="${service.title}" class="img-fluid" loading="lazy">
								</span>
								<div>
									<h3>${service.title}</h3>
									<p>${service.description}</p>
								</div>
							</div>
						</div>`
});

