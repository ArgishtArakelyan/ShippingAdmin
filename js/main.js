

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


 
  
$(function() {
    $('#datepicker').daterangepicker({
      opens: 'left'
    })
  });


  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {

      type: 'line',

      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' , 'Aug' , 'Sep' , 'Dec'],
          datasets: [{
              label: '',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: '#4c4c4c',
              data: [0, 100, 150, 160, 150, 180, 250, 220 ,180 ,160],
  
          }]
      },

      options: {
        legend: {
            display: false
        },
        scales : {
            xAxes : [ {
                gridLines : {
                    display : false
                }
            } ]
        }
      }
  });