window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("header").style.fontSize = "18px";
    document.getElementById("logo").style.maxHeight = "6vh";
    document.getElementById("header").style.fontWeight = "180";
    document.getElementById("header").classList.add("w3-white");
    document.getElementById("header").classList.add("w3-card");
    document.getElementById("header-mobile").classList.add("w3-card");
    
  } else {
    document.getElementById("header").style.fontSize = "22px";
    document.getElementById("logo").style.maxHeight = "7vh";
    document.getElementById("header").style.fontWeight = "350";
    document.getElementById("header").classList.remove("w3-white");
    document.getElementById("header").classList.remove("w3-card");
    document.getElementById("header-mobile").classList.remove("w3-card");
  }
}
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
  document.getElementById('header-mobile').classList.remove('w3-transparent','my-blue-violet','my-orange-pantone','my-winter-sky','my-footer','my-azure');
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

if( $(window).scrollTop()+$('#header-mobile').height()>=about.top &&
   $(window).scrollTop()+$('#header-mobile').height()<product.top )
{
    removeColor();
    document.getElementById('header-mobile').classList.add('my-orange-pantone');
}

/*we scroll back from same colored region towards top that is from orange to
lightgreen region*/

else if($(window).scrollTop()<about.top)
{
  removeColor();
  document.getElementById('header-mobile').classList.add('w3-transparent');
}

/* we scroll below the same colored region that is links are to be recolored 
with their original color when we scroll from orange to purple region*/

else if($(window).scrollTop()+$('#header-mobile').height()>=product.top &&
$(window).scrollTop()+$('#header-mobile').height()<application.top )
{
  removeColor();
  document.getElementById('header-mobile').classList.add('my-blue-violet');     
}

else if($(window).scrollTop()<product.top)
{
  removeColor();
  document.getElementById('header-mobile').classList.add('my-orange-pantone');
}

else if($(window).scrollTop()+$('#header-mobile').height()>=application.top &&
$(window).scrollTop()+$('#header-mobile').height()<customer.top )
{
  removeColor();
  document.getElementById('header-mobile').classList.add('my-azure');     
}

else if($(window).scrollTop()<application.top)
{
  removeColor();
  document.getElementById('header-mobile').classList.add('my-blue-violet');
}

else if($(window).scrollTop()+$('#header-mobile').height()>=customer.top &&
$(window).scrollTop()+$('#header-mobile').height()<contact.top )
{
  removeColor();
  document.getElementById('header-mobile').classList.add('my-winter-sky');     
}

else if($(window).scrollTop()<customer.top)
{
  removeColor();
  document.getElementById('header-mobile').classList.add('my-azure');
}

else if($(window).scrollTop()+$('#header-mobile').height()>=contact.top)
{
  removeColor();
  document.getElementById('header-mobile').classList.add('my-footer');     
}

else if($(window).scrollTop()<contact.top)
{
  removeColor();
  document.getElementById('header-mobile').classList.add('my-winter-sky');
}

});