function Hamburger_menu_show(){
    let body= document.getElementById('body');
    let left= document.getElementById('menu_left');
    let right=document.getElementById('menu_right');
    let fa_times=document.getElementById('fatimes');
    let fa_large=document.getElementById('falarge');
    left.style.left='0%';
    right.style.display='flex';
    body.style.overflow='hidden';
    fa_large.style.display='none';
    fa_times.style.display='block';
}
function Hamburger_menu_close(){
    let body= document.getElementById('body');
    let left= document.getElementById('menu_left');
    let right=document.getElementById('menu_right');
    let fa_times=document.getElementById('fatimes');
    let fa_large=document.getElementById('falarge');
    left.style.left='-100%';
    right.style.display='none';
    body.style.overflow='visible';
    fa_large.style.display='block';
    fa_times.style.display='none';
}

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } 
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}

function Container(){
    Lastest_news(1);
}
function init(){
    setInterval(Container,10000);
}
addEventListener('load',init);

let index3=0;
Lastest_news(index3)
function Lastest_news(s){
    let slide= document.getElementsByClassName('lastest_news_flex');
    index3+=s;
    if(index3>=slide.length){
        index3=0
    }
    if(index3<0){
        index3=slide.length-1;
    }
    for(let i=0; i<slide.length; i++){
        slide[i].style.display='none';
    }
    slide[index3].style.display='flex';
}

function Showmore(){
    let arrow=document.querySelector('.show_more')
    arrow.style.display='block'
}
function Show_more(){
    let arrow=document.querySelector('.show_more')
    arrow.style.display='none'
}
function Showmore2(){
    let arrow=document.querySelector('.showmore2')
    arrow.style.display='block'
}
function Show_more2(){
    let arrow=document.querySelector('.showmore2')
    arrow.style.display='none'
}
function Showmore3(){
    let arrow=document.querySelector('.showmore3')
    arrow.style.display='block'
}
function Show_more3(){
    let arrow=document.querySelector('.showmore3')
    arrow.style.display='none'
}
function Showmore4(){
    let arrow=document.querySelector('.showmore4')
    arrow.style.display='block'
}
function Show_more4(){
    let arrow=document.querySelector('.showmore4')
    arrow.style.display='none'
}

