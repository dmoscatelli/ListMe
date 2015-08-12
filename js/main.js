$(document).ready(function(){
	$("input[name='button']").click(function (){ 
		var input = $("input[name='List']").val();
		$("body").append("<div class='listitem'><div class='moveme'><img src='ListMove.png' alt='Move' height='30px'></div><h2>" + input + "</h2><div class='xmark'><img src='xmark.png' alt='Move' height='30px'></div><div class='check'><img src='checkmark.png' alt='Move' height='30px'></div></div>")
		$("input[name='List']").val("");
	})
});

$(document).keypress(function(e){
if(e.which==13) {
		var input = $("input[name='List']").val();
		$("body").append("<div class='listitem'><div class='moveme'><img src='ListMove.png' alt='Move' height='30px'></div><h2>" + input + "</h2><div class='xmark'><img src='xmark.png' alt='Move' height='30px'></div><div class='check'><img src='checkmark.png' alt='Move' height='30px'></div></div>")
		$("input[name='List']").val("");
}
});


$(document).ready(function(){
	$(".check").click(function (){ 
			$(this).parent().find("h2").addClass("second");
			$(this).parent().addClass("checkcolor");
	})
});

$(document).ready(function() {
	$(".xmark").click(function() {
		$(this).parent().remove();
	});
});


$(document).on("click", ".xmark", function() {
		$(this).parent().remove();
});

$(document).on("click", ".check", function() {
		$(this).parent().find("h2").addClass("second");
		$(this).parent().addClass("checkcolor");
})

$(function() {
	$(".listitem").sortable();
}) 


