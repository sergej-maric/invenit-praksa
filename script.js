function openCloseMenu(){
    let menu = document.getElementById('menu');

    if(!!menu && menu.style.display === "none")
    {
        menu.style.display = 'block';
    }
    else{
        menu.style.display = 'none';
    }

    
    console.log(menu);
}

