

// $(document).ready(function() {
//     $('body').css('padding-bottom', $('footer').height() + 32);
// });

// $(window).resize(function(){
//     $('body').css('padding-bottom', $('footer').height() + 32);
// });

// $(document).on("click","",function() {
 
// }); 

$('.drop-t-open').on('click', function(e) {
    $('.drop-t-open').not(this).removeClass('open');
    $(this).toggleClass('open');
    e.stopPropagation(); 
});

$('.dropdown-wrap').on('click', function(e) {
     e.stopPropagation(); 
});
 
$('html').click(function() {
    $('.drop-t-open').removeClass('open');
});



$(document).on("click",".on-off-button",function() {
    $(this).toggleClass('active');
}); 



$(document).on("click",".metismenu >li",function() {
    $(this).toggleClass('active');

    if ($(this).hasClass("active")) {
        $(this).find('.collapse').slideDown();
	}else{
		$(this).find('.collapse').slideUp();
    }
}); 
