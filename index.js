$(document).ready(function() {





    function goDown(){
        window.scrollBy(0, 750);
    }
    document.querySelector('.down_click').addEventListener('click',goDown);



    window.addEventListener('scroll', () => 
    {
    const nav = document.querySelector('nav');
    const name = document.querySelector('.name');
        if(window.scrollY > 70){
            nav.classList.add('active-nav');
            name.classList.add('name-active');
        }else{
            nav.classList.remove('active-nav'); 
            name.classList.remove('name-active');
        }
    })


    
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop >700) {
    document.getElementById("myUp").style.display="block";
  }else{
    document.getElementById("myUp").style.display="none";
  }
}






});



