// pop up image
document.querySelectorAll('#portfolio .portfolio .gallery .cell img').forEach((image)=>{
    image.onclick=()=>{
        document.querySelector("#portfolio .portfolio .pop-up").style.display = 'block';
        document.querySelector("#portfolio .portfolio .pop-up img").src = image.getAttribute('src');
    }
})
document.querySelector("#portfolio .portfolio .pop-up span").addEventListener("click",()=>{
    document.querySelector("#portfolio .portfolio .pop-up").style.display = 'none';
})

// gallery switcher 
let items = document.querySelectorAll('#portfolio .portfolio .portfolio-text .portfolio-nav .nav-item');
let galleries = document.querySelectorAll('.gallery');
    // move active class from the other nav items and add it to the current pressed item.
items.forEach(item =>{
    item.addEventListener("click",()=>{
        items.forEach(itm => itm.classList.remove("active"));
        item.classList.add("active");
    })
})
    // display the wanted gallery and hide the other.
function display_gal(gal){
    if(gal === "gallery-img"){
        galleries.forEach(gallery => gallery.style.display = "none");
        document.querySelector("." + gal).style.display = "grid";
    }else if(gal === "gallery-video"){
        galleries.forEach(gallery => gallery.style.display = "none");
        document.querySelector("." + gal).style.display = "grid";
    }else if(gal === "gallery-logos"){
        galleries.forEach(gallery => gallery.style.display = "none");
        document.querySelector("." + gal).style.display = "grid";
    }else if(gal === "gallery-collection"){
        galleries.forEach(gallery => gallery.style.display = "none");
        document.querySelector("." + gal).style.display = "grid";
    }
}
    // Go to familly :)
function go_collection(familly){
    itemsArr = [items]
    if(familly === "go-image"){
        display_gal("gallery-img");
        items.forEach(itm => itm.classList.remove("active"));
        items[0].classList.add("active")
    }else if(familly === "go-video"){
        display_gal("gallery-video");
        items.forEach(itm => itm.classList.remove("active"));
        items[1].classList.add("active")
    }else if(familly === "go-design"){
        display_gal("gallery-logos");
        items.forEach(itm => itm.classList.remove("active"));
        items[2].classList.add("active")

    }
}
    // open nav bar when click menu button.
document.querySelector("#hero .container .sidebar .burger").addEventListener("click",()=>{
    document.querySelector("#hero .container .navbar").classList.toggle("open-nav")
    window.addEventListener("scroll",()=>{
        document.querySelector("#hero .container .navbar").classList.remove("open-nav")
    })
})