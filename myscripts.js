//Hide Menu
$(document).ready(function(){
	$("#openMenu").hide();
	$("svg-menu").click(function(){
		$("article").append(function() {
			return $("#openMenu").show();
		});
	});

});
