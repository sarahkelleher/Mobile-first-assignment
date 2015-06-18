//Hide Menu
$("#recipeMenu").hide();
$("hamburger").click(function(){
	$("#recipeMenu").show();
	$(this).remove();
});
// //Add button functionality
// $("hamburger").click(function(){
// 	$("#openMenu").show();
// 	$("#openMenu").remove();
// 	// $(this).remove();
// });

// jQuery(function($){
//     	$( '#hamburger').click(function(){
//     		$('#openMenu').addClass('expand')
//     		$('#hamburger').addClass('btn-none')
//     	})
    	
//     	 $( '.close-btn' ).click(function(){
//     		$('#openMenu').removeClass('expand')
//     		$('#hamburger').removeClass('btn-none')
//     	})
//   	})
//  </script>