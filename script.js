$(document).ready(function(){

	$("#yoda").click(function(){
		$("body").removeClass();
		$("body").addClass("yoda");
	})
	$("#chewbacca").click(function(){
		$("body").removeClass();
		$("body").addClass("chewbacca");
	})
	$("#greedo").click(function(){
		$("body").removeClass();
		$("body").addClass("greedo");
	})
	$("#scouttrooper").click(function(){
		$("body").removeClass();
		$("body").addClass("scouttrooper");
	})

	setInterval(function(){
	    $("body").toggleClass("glimmer");
	}, 3000);	

});
