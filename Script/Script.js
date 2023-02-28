let image=document.getElementById("image");
    let about=document.getElementById("about");
    let div1=document.querySelector("#projects>div>div:first-child");
    let div2=document.querySelector("#projects>div>div:last-child");
    let div3=document.querySelector("#projects>div:last-child>div:first-child");
    let div4=document.querySelector("#projects>div:last-child>div:last-child");
    let home=document.getElementById("home");
    let git=document.getElementById("git");

    window.onload=(e)=>{
        image.style.width="80%";
        image.style.opacity="1";
        about.style.opacity="1";
        about.style.transition="2s";
        home.style.top="0px";
        home.style.opacity="1";
        home.style.transition="2s";
        git.style.opacity="1";
        git.style.transition="2s";
    }
    let slide=document.getElementById("slider");
    let closer=document.getElementById("close");
    let menu=document.getElementById("slidermenu");
    let html=document.querySelector("html");
    let close1=document.querySelector("#slidermenu:nth-child(2)");
    // let close2=document.querySelector("#slidermenu:nth-child(3)");
    // let close3=document.querySelector("#slidermenu:nth-child(4)");
    // let close4=document.querySelector("#slidermenu:nth-child(5)");
    // let close5=document.querySelector("#slidermenu:nth-child(6)");
    // let close6=document.querySelector("#slidermenu:nth-child(7)");

    slide.addEventListener("click",(e)=>{
            menu.style.height="100%";
            menu.style.transition="1s";
            menu.style.opacity="1";
            html.style.overflowY="hidden";
            menu.style.top="0";
    })
    closer.addEventListener("click",(e)=>{
            menu.style.height="0";
            menu.style.transition="1s";
            menu.style.opacity="0";
            html.style.overflowY="scroll";
            menu.style.top="45px";
    })
    close1.addEventListener("click",(e)=>{
        menu.style.height="0";
        menu.style.transition="1s";
        menu.style.opacity="0";
        html.style.overflowY="scroll";
        menu.style.top="45px";
    })

    let feed=document.getElementById("btn");
    feed.addEventListener("click",(e)=>{
        alert("ThankYou for your valuable feedback!");
    })