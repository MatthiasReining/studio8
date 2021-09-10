window.addEventListener("scroll", function () {
  document.body.classList[window.scrollY > 20 ? "add" : "remove"]("scrolled");
});

var slideIndex = 1;
var currentSlideIndex = slideIndex;

window.addEventListener("load", function (event) {
  showSlides(slideIndex);
});

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var slides = document.querySelectorAll(".start-page");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (var i = 1; i <= slides.length; i++) {
    var img = document.querySelector(".s" + i);

    img.classList.add("hide");
    //if current slide, let show present for a smooth slide
    if (i != currentSlideIndex) img.classList.remove("show");
  }

  //next slide
  var img = document.querySelector(".s" + slideIndex);
  currentSlideIndex = slideIndex;
  img.classList.remove("hide");
  img.classList.add("show");
}
function initMap() {
  const myLatLng = {    
    lat: 50.18583,
    lng: 10.46130
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    mapId: "aa821d18db9991c4",
    center: myLatLng,
    fullscreenControl: true,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}
