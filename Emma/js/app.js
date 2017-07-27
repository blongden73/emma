$.getJSON("json/fileList.json", function(json) {
	console.log(json);
	var images = json;
	var source   = $("#images-template").html();
	var template = Handlebars.compile(source);
	var data = images;

	$(".carousel").append(template(data));

	var image = document.getElementsByClassName('image');
	var rightArrow = document.querySelector('.right');
	var leftArrow = document.querySelector('.left');

	var total = image.length - 1;
	var clicks = 0;

	var counter = document.querySelector('.counter');

	console.log(total);

	function counterInit(){
		counter.innerHTML = counting();
	}

	function counting(){
		var counterText = (clicks + 1 ) + '/' + (total + 1);
		return counterText;
	}

	function carousel(){
		image[0].classList.add('fadeIn');


		rightArrow.addEventListener('click', function(){
			if(clicks < total){
				var current = document.querySelector('.image.fadeIn');
				var next = document.querySelector('.image.fadeIn + .image');

				current.classList.remove('fadeIn');
				next.classList.add('fadeIn');
				clicks ++;

				counter.innerHTML = counting();
			}else {
				console.log('end');
			}
		});

		leftArrow.addEventListener('click', function(){
			console.log(clicks, 'hello');
			if(clicks > 0){
				clicks --;
				counter.innerHTML = counting();
				var current = document.querySelector('.image.fadeIn');
				var prev = image[clicks];

				current.classList.remove('fadeIn');
				prev.classList.add('fadeIn');
			}else {
				console.log('end');
			}
		});
	}

	function init(){
		console.log('runnjkjdhfk');
		counterInit()
		carousel();
	}

	init();

});
