$(document).ready(function () {   
     $(".loaderpag").fadeOut();             
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');

    });
    $('#dismiss').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        //$('.collapse.in').toggleClass('in');
        //$('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});
$(function () {
  $('#menu-option').popover({
    container: 'body'
  })
})


    
  