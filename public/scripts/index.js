$(function() {


	$('#random').on('click', function(e){
		console.log('its been clicked')

		e.preventDefault();

		$.get('/numbers', function(numbers){
		// $.get('/numbers', {n:10} function(numbers){
			console.log('The data is:', numbers)

			$('#numbers').append(numbers.map(function(n){
				return $('<li>').text(n);
			}))
		})

	})


	$('#submit').click(function(e){
		e.preventDefault();
		
		var entry = $('#entry').val();
		console.log('from index', entry)
		// console.log('click')

		$.post('/entrypoint', {number: entry}, function(data){
			console.log("number")

		})
	})



})






// console.log('This is index')

