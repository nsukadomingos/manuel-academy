const menu_icon = document.getElementById('menu-icon');
const menu_list = document.getElementById('menu-list');
menu_icon.addEventListener("click", function(){
    if(menu_list.classList.contains('hidden')){
        menu_list.classList.add('h-auto');
        menu_list.classList.remove('hidden');
        menu_icon.innerHTML = '<span class="material-symbols-outlined">close</span>'
    }else {
        menu_list.classList.add('hidden')
        menu_icon.innerHTML = '<span class="material-symbols-outlined">menu</span>'
    }
});