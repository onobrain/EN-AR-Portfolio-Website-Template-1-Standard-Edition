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
// Change language.
const lang = document.getElementById("s-lang");
let styles  = document.querySelectorAll(".style");
styles.forEach((style)=>{
    lang.addEventListener("change",()=>{
        style.toggleAttribute("disabled")
        if(lang.value === "arabic"){
            document.getElementsByTagName("html")[0].setAttribute("lang","ar")
            // translate content 
                //Translate hero
            document.querySelectorAll('#hero .container .navbar .nav a')[0].innerHTML = "الرئيسية"
            document.querySelectorAll('#hero .container .navbar .nav a')[1].innerHTML = "حولي"
            document.querySelectorAll('#hero .container .navbar .nav a')[2].innerHTML = "المعرض"
            document.querySelectorAll('#hero .container .navbar .nav a')[3].innerHTML = "متابعة"
            document.querySelector("#hero .container .hero-title h4").innerHTML = "مرحبا أنا"
            document.querySelector("#hero .container .hero-title h1").innerHTML = "اسمك هنا"
            document.querySelector("#hero .container .hero-title p").innerHTML = "أعمل ك (عملك)"
                //Translate about;
            document.querySelector('#about .about .container .about-text .title').innerHTML = "من أنا؟"
            document.querySelector('#about .about .container .about-text p').innerHTML = `
                "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور
                أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد
                أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس
                أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت
                نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا
                كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم."
                `
                //Translate Portfolio;
            document.querySelectorAll('#portfolio .portfolio .portfolio-text .portfolio-nav li a')[0].innerHTML = "صور"
            document.querySelectorAll('#portfolio .portfolio .portfolio-text .portfolio-nav li a')[1].innerHTML = "فيديوهات"
            document.querySelectorAll('#portfolio .portfolio .portfolio-text .portfolio-nav li a')[2].innerHTML = "تصاميم"
            document.querySelectorAll('#portfolio .portfolio .portfolio-text .portfolio-nav li a')[3].innerHTML = "مجموعات"
            document.querySelector('#portfolio .portfolio .gallery-collection .gal1 p').innerHTML = `لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوسترد`
            document.querySelector('#portfolio .portfolio .gallery-collection .gal2 p').innerHTML = `لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوسترد`
            document.querySelector('#portfolio .portfolio .gallery-collection .gal3 p').innerHTML = `لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوسترد`
            document.querySelector('#portfolio .portfolio .gallery-collection .gal4 p').innerHTML = `لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوسترد`
            document.querySelector('#portfolio .portfolio .gallery-collection .gal5 p').innerHTML = `لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوسترد`
            document.querySelector('#portfolio .portfolio .gallery-collection .gal6 p').innerHTML = `لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوسترد`
            document.querySelector('#portfolio .portfolio .gallery-collection .gal7 p').innerHTML = `لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوسترد`
            document.querySelector('#portfolio .portfolio .gallery-collection .gal8 p').innerHTML = `لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوسترد`
            document.querySelector('#portfolio .portfolio .gallery-collection .gal9 p').innerHTML = `لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوسترد`
            document.querySelector('#portfolio .portfolio .gallery-collection .gal10 p').innerHTML = `لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوسترد`
            document.querySelector("#portfolio .portfolio .view-more").innerHTML = "شاهد المزيد"
                //Translate Footer;
            document.querySelector('#footer .footer .title').innerHTML = "هذا كل شيء";
            document.querySelector('#footer .footer p').innerHTML = "ابق على تواصل";
        }else{
            document.getElementsByTagName("html")[0].setAttribute("lang","en")
                        // translate content 
                //Translate hero
                document.querySelectorAll('#hero .container .navbar .nav a')[0].innerHTML = "home"
                document.querySelectorAll('#hero .container .navbar .nav a')[1].innerHTML = "About"
                document.querySelectorAll('#hero .container .navbar .nav a')[2].innerHTML = "portfolio"
                document.querySelectorAll('#hero .container .navbar .nav a')[3].innerHTML = "follow"
                document.querySelector("#hero .container .hero-title h4").innerHTML = "hi I'm"
                document.querySelector("#hero .container .hero-title h1").innerHTML = "your name"
                document.querySelector("#hero .container .hero-title p").innerHTML = "I'm a Your job"
                    //Translate about;
                document.querySelector('#about .about .container .about-text .title').innerHTML = "Who I am"
                document.querySelector('#about .about .container .about-text p').innerHTML = `
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iste nesciunt eligendi delectus consectetur corrupti cumque, deserunt non voluptas laboriosam facilis ratione, illum qui placeat, unde earum. Autem, aliquid eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sequi neque, voluptas sapiente molestias atque, autem ea eveniet, saepe reprehenderit consectetur. Maiores quidem odit saepe , maxime magni omnis, dicta nam architecto distinctio repudiandae quia aspernatur sunt modi sit odio perferendis.

                    `
                    //Translate Portfolio;
                document.querySelectorAll('#portfolio .portfolio .portfolio-text .portfolio-nav li a')[0].innerHTML = "Images"
                document.querySelectorAll('#portfolio .portfolio .portfolio-text .portfolio-nav li a')[1].innerHTML = "Videos"
                document.querySelectorAll('#portfolio .portfolio .portfolio-text .portfolio-nav li a')[2].innerHTML = "Designs"
                document.querySelectorAll('#portfolio .portfolio .portfolio-text .portfolio-nav li a')[3].innerHTML = "Collections"
                document.querySelector('#portfolio .portfolio .gallery-collection .gal1 p').innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam autem vel accusamus a pariatur temporibus dolorum ipsum saepe reprehenderit! `
                document.querySelector('#portfolio .portfolio .gallery-collection .gal2 p').innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam autem vel accusamus a pariatur temporibus dolorum ipsum saepe reprehenderit! `
                document.querySelector('#portfolio .portfolio .gallery-collection .gal3 p').innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam autem vel accusamus a pariatur temporibus dolorum ipsum saepe reprehenderit! `
                document.querySelector('#portfolio .portfolio .gallery-collection .gal4 p').innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam autem vel accusamus a pariatur temporibus dolorum ipsum saepe reprehenderit! `
                document.querySelector('#portfolio .portfolio .gallery-collection .gal5 p').innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam autem vel accusamus a pariatur temporibus dolorum ipsum saepe reprehenderit! `
                document.querySelector('#portfolio .portfolio .gallery-collection .gal6 p').innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam autem vel accusamus a pariatur temporibus dolorum ipsum saepe reprehenderit! `
                document.querySelector('#portfolio .portfolio .gallery-collection .gal7 p').innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam autem vel accusamus a pariatur temporibus dolorum ipsum saepe reprehenderit! `
                document.querySelector('#portfolio .portfolio .gallery-collection .gal8 p').innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam autem vel accusamus a pariatur temporibus dolorum ipsum saepe reprehenderit! `
                document.querySelector('#portfolio .portfolio .gallery-collection .gal9 p').innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam autem vel accusamus a pariatur temporibus dolorum ipsum saepe reprehenderit! `
                document.querySelector('#portfolio .portfolio .gallery-collection .gal10 p').innerHTML= `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam autem vel accusamus a pariatur temporibus dolorum ipsum saepe reprehenderit! `
                document.querySelector("#portfolio .portfolio .view-more").innerHTML = "View More"
                    //Translate Footer;
                document.querySelector('#footer .footer .title').innerHTML = "That's all";
                document.querySelector('#footer .footer p').innerHTML = "Get in Touch";
    
        }
    })
})