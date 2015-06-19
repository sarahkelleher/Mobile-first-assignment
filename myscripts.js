// //Hide Menu
	// $("#openMenu").hide();
	$( ".menu-btn").click(function(){
		$(" .responsive-menu").addClass("expand")
		$(" .menu-btn").addClass("btn-none")
	})

	$( ".close-btn").click(function() {
		$("#openMenu").removeClass("expand")
		$(".menu-btn").removeClass("btn-none")
	})


