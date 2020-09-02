function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

var modal = document.getElementsByClassName('w3-modal');
var i=0;
window.onclick = function(event) {
  for(i=0; i<modal.length; i++){
    if (event.target == modal[i]) {
      modal[i].style.display = "none";
    }
  }
}

function openImg(imgName) {
  var i, x;
  x = document.getElementsByClassName("picture");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(imgName).style.display = "block";
}

function removeColor() {
  $('#header-mobile').removeClass('w3-transparent my-blue-violet my-orange-pantone my-winter-sky my-footer my-azure w3-white');
}


var about=$('#about').offset(); 
var product=$('#product').offset();
var application=$('#applications').offset();
var customer=$('#customers').offset();
var contact=$('#contact').offset();


$(window).scroll(function(){

/*The same colored region `(orange div with id="b")` is reached and we are still
inside that region not below it that is not in purple region, for this the if 
condition block is used. This condition will also recolor the link when we
scroll towards top from purple (below) to orange (same colored) region */

if ($(window).scrollTop()>=70 && 
   $(window).scrollTop()<about.top) {
  removeColor();
  $("#header").css({"fontSize":"18px", "fontWeight":"180",}).addClass("w3-white w3-card");
  $("#logo").css("maxHeight","6vh");
  $("#header-mobile").addClass("w3-white w3-card");
  } 
else if($(window).scrollTop()<70) {
  removeColor();
  $("#header").css({"fontSize":"22px", "fontWeight":"350"}).removeClass("w3-card").addClass("w3-transparent");
  $("#logo").css("maxHeight","7vh");
  $("#header-mobile").removeClass("w3-card").addClass("w3-transparent");
}

else if($(window).scrollTop() + $("#header-mobile").height() >= about.top &&
   $(window).scrollTop() + $("#header-mobile").height() < product.top )
{
    removeColor();
    $('#header-mobile').addClass('my-orange-pantone');
}

/*we scroll back from same colored region towards top that is from orange to
lightgreen region*/

else if($(window).scrollTop()<about.top)
{
  removeColor();
  $('#header-mobile').addClass('w3-transparent');
}

/* we scroll below the same colored region that is links are to be recolored 
with their original color when we scroll from orange to purple region*/

else if($(window).scrollTop()+$('#header-mobile').height()>=product.top &&
$(window).scrollTop()+$('#header-mobile').height()<application.top )
{
  removeColor();
  $('#header-mobile').addClass('my-blue-violet');
}

else if($(window).scrollTop()<product.top)
{
  removeColor();
  $('#header-mobile').addClass('my-orange-pantone');
}

else if($(window).scrollTop()+$('#header-mobile').height()>=application.top &&
$(window).scrollTop()+$('#header-mobile').height()<customer.top )
{
  removeColor();
  $('#header-mobile').addClass('my-azure');     
}

else if($(window).scrollTop()<application.top)
{
  removeColor();
  $('#header-mobile').addClass('my-blue-violet');
}

else if($(window).scrollTop()+$('#header-mobile').height()>=customer.top &&
$(window).scrollTop()+$('#header-mobile').height()<contact.top )
{
  removeColor();
  $('#header-mobile').addClass('my-winter-sky');     
}

else if($(window).scrollTop()<customer.top)
{
  removeColor();
  $('#header-mobile').addClass('my-azure');
}

else if($(window).scrollTop()+$('#header-mobile').height()>=contact.top)
{
  removeColor();
  $('#header-mobile').addClass('my-footer');     
}

else if($(window).scrollTop()<contact.top)
{
  removeColor();
  $('#header-mobile').addClass('my-winter-sky');
}

});