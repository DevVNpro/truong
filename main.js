function searchfunc(){
    let menusearch = document.querySelector('#menu__search')
    let menuitems =Array.from(document.querySelectorAll('.menu__item'));
    menusearch.value=menusearch.value.toLowercase();
    menuitems.forEach(function(el){
        let text= el.innerText;
        if(text.indexOf(menusearch.value)>-1)
        el.stle.display="";
        else el.style.display="none";
    })

}