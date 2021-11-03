$(document).ready(function(){
   
    function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    };
  

    

    var sliider =$('#slide');
sliider.owlCarousel({
    loop:true,
    margin:5,
    rtl:true,
    nav:true,
    dots:false,
    navText: [
        "<span style(background-color: violet)><i class='fa fa-angle-left'></i></span>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
    }
    );
   
});
