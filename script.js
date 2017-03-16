
    $(document).on('click','.navbar-collapse.in',function(e) {

    if( $(e.target).is('a') && ( $(e.target).attr('class') != 'dropdown-toggle' ) ) {
        $(this).collapse('hide');
    }

});

//** navabar active status**//
$(function() {
    initial();
    status();
});

var listItem = $("ul.navbar-nav li");

function initial() {
    listItem.on("click", function() {
        listItem.removeClass("active");
        $(this).addClass("active");
    });
}
 
//buggy
function status() {
   var Home = $("#Home").offset().top;
    var About  = $("#About").offset().top;
    var work = $("#work").offset().top;
    var contact = $("#contact").offset().top;
 var position = $(window).scrollTop();
    
   switch (position) {
        case position >= Home && position < About: 
            listItem.removeClass("active");
            header.addClass("active");
        case position >= About && position < work:
            listItem.removeClass("active");
            about.addClass("active");
        case position >= work && position < contact: 
            listItem.removeClass("active");
            portfolio.addClass("active");
        case position >= contact: 
            listItem.removeClass("active");
            contact.addClass("active");
    }

}