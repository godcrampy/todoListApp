//check completed todos
$("ul").on("click", "li",function(){
	$(this).toggleClass("completed");
});
//delete todos
$("ul").on("click","span" ,function(e){
	$(this).parent().fadeOut(250,function(){
		$(this).remove();
	});	
	e.stopPropagation();
})
//add todo
$("input").on("keypress", function(e){
	if (e.which===13) {
		var todoText = $(this).val();
		$(this).val("");
		//create li
		$("ul").append("<li><span><i class='fas fa-times'></i></span>" + todoText +"</li>")
	}
})

$(".fa-plus").click(function(){
	$("input").fadeToggle();
})