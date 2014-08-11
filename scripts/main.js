$(function(){
  // Hide the radio slider on page load
  if($('#no-radios.active')){
    $('#radios').hide();
  }
  // Add Sum method to array constructor for calculation in google.js
  Array.prototype.sum = function(selector) {
    if (typeof selector !== 'function') {
        selector = function(item) {
            return item;
        }
    }
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum += selector(this[i]);
    }
    return sum;
};
  // Function to draw all charts based on click handlers below
  var chartDraw = function(tabSelected){
    var radioSelected = $('ins.slider-level:hidden').data('radio');
    if(tabSelected==="#impression"){
      drawImpressionsVar(radioSelected);
    }
    if(tabSelected==="#user-activity"){
      drawUserActivity(radioSelected);
    }
    if(tabSelected==="#login"){
      drawLogin(radioSelected)
    }
     if(tabSelected==="#registered-users"){
      drawRegisteredUsers(radioSelected)
    }
     if(tabSelected==="#traffic"){
      drawTraffic(radioSelected)
    }
  };
  // Redraw/Draw chart on radio click
  $('#radios').click(function(){
    var tabSelected = $('.tabs.vertical li.active a').attr('href');
    chartDraw(tabSelected);
  });
  // Redraw/Draw chart on tab click
  $('.tab-title').click(function(){
    var tabSelected = $(this).children().attr('href');
    if(tabSelected==='#overview'){
      $('#radios').hide();
    }
    else if(tabSelected==="#impression"){
      $('#radios').hide();
    }
    else {
      $('#radios').show();
    }
    // Set Timeout to deal with buggy tab behavior
     setTimeout(function(){
      chartDraw(tabSelected);
    }, 5);
  });
  // Initialize the radio slider
  $('#radios').radiosToSlider();
  // Initialize Foundation  
  $(document).foundation();
  // DOM Ready end
});
