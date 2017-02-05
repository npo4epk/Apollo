$(document).ready(function() {
       
	//Animate cs   
	$(".main-header-title h2, .main-about-title img, .main-about-title h2, .main-center-title-wrapper h2, .main-center-title img, .main-footer-title h2").animated("zoomInUp");
	$(".main-header-descriprion p, .main-about-title p, .main-center-title p, .main-footer-descriprion p").animated("zoomInUp");
	$(".social-icons").animated("rollIn");
	$(".owl-carousel, #carousel").animated("zoomInUp");
	$(".prev_button, .btn-right").animated("fadeInRight");
	$(".next_button, .btn-left").animated("fadeInLeft");
	$(".input-email").animated("fadeInLeft");
	$(".input-subject").animated("fadeInRight");
 	$(".main-footer-send-message textarea").animated("fadeInRight");
	$(".input-submit").animated("rollIn");

	//Menu 
	$(".menu-collapsed-wrapper").click(function() {
		$(this).toggleClass("menu-expanded");
	});

	//Carousel
	function carousel_1() {
		var owl = $("#owl-example");
		owl.owlCarousel({
			items : 1,
			loop : true,			
			pagination: true,
			dots : true,
			autoPlay: 3000,
			singleItem : true
		});

		$(".next_button").click(function() {
			owl.trigger("owl.next");
		});
		$(".prev_button").click(function() {
			owl.trigger("owl.prev");
		});
		owl.on("resized.owl.carousel", function(event) {
			var $this = $(this);
			$this.find(".owl-height").css("height", $this.find(".owl-item.active").height());
		});
		setTimeout(function() {
			owl.find(".owl-height").css("height", owl.find(".owl-item.active").height());
		}, 5000);
	};
	carousel_1();

	//Carousel
	function carousel_2() {
		
		var carousel = $("#carousel");
	
		carousel.waterwheelCarousel({
			flankingItems: 1,
			separation: 350,
			autoPlay: 2000,
		});

		$('#prev').click(function(e)  {
			carousel.prev();
			e.preventDefault();
		});

		$('#next').click(function(e) {
			carousel.next();
			e.preventDefault(); 
		});


		$('#reload').click(function (e) {
			newOptions = eval("(" + $('#newoptions').val() + ")");
			carousel.reload(newOptions);
			e.preventDefault(); 
		});
		
		
		$(window).resize(function (e) {
			carousel.reload({
				flankingItems: 1,
				separation: 350,
				autoPlay: 2000,
			});
		});	

	};
	carousel_2(); 

	$(function () {
		$.scrollUp({
			scrollName: 'scrollUp', // Element ID
			topDistance: '300', // Distance from top before showing element (px)
			topSpeed: 300, // Speed back to top (ms)
			animation: 'fade', // Fade, slide, none
			animationInSpeed: 200, // Animation in speed (ms)
			animationOutSpeed: 200, // Animation out speed (ms)
			scrollText: '', // Text for element
			activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	  	});
	});


	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Your sent messages");
			$("#form").trigger("reset");
			$("#form").find("input[type='submit']").hide();
		});
		return false;
	});

}); 

