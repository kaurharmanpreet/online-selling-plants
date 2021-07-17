/*on scroll*/
$(window).scroll(function(){
	if( $(window).scrollTop())
    {
	    $('.header-one').hide();
    }

    else{
      $('.header-one').show();
    }
 });


/*down-slide menu*/

let menubar = document.querySelector('#menu-bar');
let downslide = document.querySelector('.down-slide');


menubar.addEventListener('click', () =>{
  downslide.classList.toggle('active');
});



/*swiper slider*/
var swiper = new Swiper(".home", {

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

    loop:true,

});



  /*count-down*/
  
let countDate = new Date('december 15, 2021 00:00:00').getTime();

function countDown(){

    let now = new Date().getTime();

    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}

setInterval(function(){
    countDown();
},1000)