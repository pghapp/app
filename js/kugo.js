$(function() {
	var yx = 0;
	$(".homeNavli").on("mousemove", function() {
		$(".homeNavli div").css("display", "block");
		$(".homeNavli img").prop("src", "img/上标.png")
	}).on("mouseout", function() {
		$(".homeNavli div").css("display", "none");
		$(".homeNavli img").prop("src", "img/下标.png")
	});
	$(".app").on("mousemove", function() {
		var yx = $(this).css("color");
		$(this).css("color", "#14A9FF");
	}).on("mouseout", function() {
		$(this).css("color", yx);
	});
	$(".appp").on("mousemove", function() {
		var yx = $(this).css("color");
		$(this).children().css("color", "#14A9FF");
	}).on("mouseout", function() {
		$(this).children().css("color", yx);
	});
	$(".aoo").on("mousemove", function() {
		var yx = $(this).css("color");
		$(this).css("color", "#14A9FF");
	}).on("mouseout", function() {
		$(this).css("color", yx);
	});
	$(".left_btn").click(function() {
		$(".popup").css("display", "block")
		$(".ppap").css("display", "block")
		//			$(".lll").css("display","block")
	})
	$(".lll").click(function() {
		$(".popup").css("display", "none")
		$(".ppap").css("display", "none")
	})

	console.log("执行成功");
})