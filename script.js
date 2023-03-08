function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('dark')
    
    const img = document.querySelector("#profile img")
    if(html.classList.contains('dark')){
        img.setAttribute('src', './imagens/Profiledark.png')
    } else{
        img.setAttribute('src', './imagens/Profile.png')
   } 
    
}