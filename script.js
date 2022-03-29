//Scroll to top button
var myButton = document.getElementById("topBtn");
window.onscroll = function(){
    scrollFunction()
};
function scrollFunction(){
    if(document.body.scrollTop > 20||document.documentElement.scrollTop > 20)
    {
        myButton.style.display = "block";
    }   
    else {
        myButton.style.display = "none";
    }
}
function toTop(){
    document.documentElement.scrollTop = 0;
}

//day and night toggle
//On toggler clicked

const toggleswitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'dark'){
        toggleswitch.checked = true;
    }

} 

function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleswitch.addEventListener('change', switchTheme, false);



