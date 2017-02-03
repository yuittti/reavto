(function($){
	'use strict';

	var winScrollPos = $('body').scrollTop();

	
		
	

	var DropDown = function(el, config)	{
		var self = this;
		el.dropDown = self;
		self.config = config;

		self.link = el.querySelector('.dropDown-link');
		self.content = el.querySelector('.dropDown-content');
		self.closeAll = function(e){
			//e.preventDefault();
			if ($(e.target).closest('.dropDown')[0] != el) {
				el.classList.remove('-open');
			}
		};
		self.link.addEventListener('click', function(e) {
			e.preventDefault();
			if (el.classList.contains('-open')) {
				el.classList.remove('-open');
			} else {
				el.classList.add('-open');
			}
		});
		document.addEventListener('click', self.closeAll);
		document.addEventListener('touchstart', self.closeAll);
	};

	var dropDowns = document.querySelectorAll('.dropDown');
	for (var i = 0; i < dropDowns.length; i++) {
		new DropDown(dropDowns[i]);
	}


	$(document).ready(function(){
		$('#fullpage').fullpage({
			menu: '#navigationBar',
			afterLoad: function(anchorLink, index) {

				if(anchorLink !== 'frame1'){
					$('.navigationBar').removeClass('-hidden');
				}
				else {
					$('.navigationBar').addClass('-hidden');
				}
				console.log($(this).find('._to_animate'));
				//$(this).find('._to_animate').addClass('animated fadeInLeft');
			}
		});

		// $.fn.fullpage.setAllowScrolling(true);

		$(function() {
			window.mobileDetection = {
				Android: function () {
					return navigator.userAgent.match(/Android/i);
				},
				BlackBerry: function () {
					return navigator.userAgent.match(/BlackBerry/i);
				},
				iOS: function () {
					return navigator.userAgent.match(/iPhone|iPad|iPod/i);
				},
				Opera: function () {
					return navigator.userAgent.match(/Opera Mini/i);
				},
				Windows: function () {
					return navigator.userAgent.match(/IEMobile/i);
				},
				any: function () {
					return this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows();
				}
			};

			if ((window.mobileDetection.any())) {
				$.fn.fullpage.setResponsive(true);
				$.fn.fullpage.destroy('all');

			}
		});



		$(window).load(function() {

			//$('.twentytwenty-container').eq(0).twentytwenty().addClass('-loaded');
			$('.twentytwenty-container').twentytwenty();

		});

		$('ul.tabs-caption').on('click', 'li > a', function(ev) {
			ev.preventDefault();

			if ($(this).hasClass('-active')) {
				return false;
			}

			$(this)
				.closest('li').addClass('active').siblings().removeClass('active')
				.closest('div.tabs').find('div.tabs-content').removeClass('active').eq($(this).closest('li').index()).addClass('active');

		});


		$('.advantages-btns').on('click', '.advantages-btn', function(ev) {
			ev.preventDefault();

			var ind = $(this).index();
			var self = $(this);

			if ($(this).hasClass('-active')) {
				return false;
			}

			$('.advantages-btns').removeClass().addClass('advantages-btns').addClass('rotate-' + ind);

			$(this)
				.siblings().removeClass('-active')
				.closest('.advantages-list').find('.advantages-tab').removeClass('-active').eq($(this).index()).addClass('-active');

			setTimeout(function(){
				self.addClass('-active');
			}, 150);

			console.log(ind);
		});
	});

	

	initGMap(document.getElementById('map'));
	

    // $('#uPhone').mask('+380 (11) 111-11-11', {
    //     'translation': {
    //         0: {pattern: /0/},
    //         1: {pattern: /[0-9]/}
    //     }
    // });
    // $('#uPhone').on('focus', function(){
    //     if (!$(this).val().length) {
    //         $(this).val('+380 ');
    //     }
    // });




	// $cityBtn.on('click', function(ev){
	// 	ev.preventDefault();
	// 	$cityList.fadeToggle();
	// });

	// $cityList.on('click', 'a', function(ev) {
	// 	ev.preventDefault();
	// 	var newCity = $(this).text();
	// 	initCities(newCity);
	// 	$cityList.fadeOut(50);
	// 	console.log($(this).text());
	// });

	// $linkMore.on('click', function(ev) {
	// 	ev.preventDefault();
	// 	console.log($(this).closest('.about-content').find('.about-txt'));

	// 	$(this).closest('.about-content').find('.about-txt').eq(0).addClass('-opened');
	// });

	// $('.logo-btm').on('click', function(ev){
	// 	ev.preventDefault();
	// 	// $(document, body).stop().animate()
	// 	$('html, body').animate({
	//         scrollTop: 0
	//     }, 500);
	// });


	// $('#sendFeedback').on('click', function(ev) {
	// 	ev.preventDefault();
	// 	winScrollPos = $('body').scrollTop();
	// 	$('body').addClass('modal-opened');
	// 	$('#formModal').addClass('-active');
	// });

	// $('.white-page, .close-btn').on('click', function(ev) {
	// 	ev.preventDefault();
	// 	$(this).closest('.modal').removeClass('-active').removeClass('-success').removeClass('-error');
	// 	$(this).closest('.modal').find('form')[0].reset();
	// 	$('body').removeClass('modal-opened');
	// 	$('body').scrollTop(winScrollPos);
	// });

	$(document).on('click', function(ev) {
		// if (ev.target != $cityList[0]
	 //            && !$cityList[0].contains(ev.target)
	 //            && ev.target != $cityBtn[0]
	 //            && !$cityBtn[0].contains(ev.target)) {
  //           $cityList.fadeOut();
  //       }
	});

	// $('#feedbackForm').on('submit', function(ev){
	// 	ev.preventDefault();
	// 	var formData = $("#feedbackForm").serialize();
	// 	console.log(formData);
 //        $.ajax({
 //            type: "post",
 //            url: "send.php",
 //            data: formData,
 //            // dataType: "text",
 //            success: function(data){
 //            	$("#feedbackForm")[0].reset();
 //                if (data == true){
 //                	$('#formModal').removeClass('-error');
 //                    $('#formModal').addClass('-success');
 //                } else {
 //                	$('#formModal').removeClass('-success');
	// 				$('#formModal').addClass('-error');
 //                }
 //            },
 //            error: function(xhr, str){
 //                $("#feedbackForm")[0].reset();
 //                $('#formModal').removeClass('-success');
 //                $('#formModal').addClass('-error');
 //            }
 //        });
	// });


	function initGMap(elem){
		var map = new google.maps.Map(elem, {
			zoom: 15,
			center: {lat:50.4307693, lng:30.3579311},
			scrollwheel: false,
			mapTypeId: google.maps.MapTypeId.TERRAIN
		});

		var data = "г. Киев, большая окружная, 4б";
	    var infowindow = new google.maps.InfoWindow({
	      content: data
	    });
		
		var marker = new google.maps.Marker({
			map: map,
			position: {lat:50.4307693, lng:30.3579311},
			title: 'RE:AVTO'
		});

		marker.addListener('click', function(){
			infowindow.open(map,marker);
		});
	};

	

})(jQuery);