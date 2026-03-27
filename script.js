// ===============================
// 🚀 SMOOTH SCROLL (Explore Button)
// ===============================
function scrollToSection(){
    const section = document.getElementById("about");
    if(section){
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// ===============================
// ✨ SCROLL REVEAL ANIMATION
// ===============================
function reveal(){
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 120;

        if(elementTop < windowHeight - elementVisible){
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });
}

// Run on scroll + load
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// ===============================
// 🌑 NAVBAR SHADOW ON SCROLL
// ===============================
window.addEventListener("scroll", function(){
    const navbar = document.querySelector(".navbar");

    if(navbar){
        if(window.scrollY > 50){
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
        } else {
            navbar.style.boxShadow = "none";
        }
    }
});

// ===============================
// 📩 INSTAGRAM DM DEEP LINK SYSTEM
// ===============================
function orderOnInstagram(product){

    // Copy product details safely
    if(navigator.clipboard){
        navigator.clipboard.writeText(product);
    } else {
        alert("Copy manually: " + product);
    }

    // Show popup message
    showPopup("✅ Product copied!<br>Opening Instagram DM...");

    // Open Instagram DM inbox directly
    window.open("https://www.instagram.com/direct/t/", "_blank");
}

// ===============================
// 💎 CUSTOM POPUP (NO ALERT)
// ===============================
function showPopup(message){

    let popup = document.createElement("div");
    popup.className = "custom-popup";
    popup.innerHTML = message;

    document.body.appendChild(popup);

    // Show animation
    setTimeout(() => {
        popup.classList.add("show");
    }, 10);

    // Remove after 2.5 sec
    setTimeout(() => {
        popup.classList.remove("show");
        setTimeout(() => popup.remove(), 300);
    }, 2500);
}

// ===============================
// 🎬 PAGE TRANSITION (OPTIONAL)
// ===============================
window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
});

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e){
        const href = this.getAttribute("href");

        if(href && !href.startsWith("#")){
            e.preventDefault();

            const transition = document.querySelector(".page-transition");

            if(transition){
                transition.style.transform = "translateY(0)";
            }

            setTimeout(() => {
                window.location.href = href;
            }, 400);
        }
    });
});
function orderOnInstagram(product){

    // Copy product details
    if(navigator.clipboard){
        navigator.clipboard.writeText(product);
    }

    // Show popup
    showPopup("✅ Product copied!<br>Opening Welmora Studio Instagram...");

    // Open YOUR Instagram profile
    window.open("https://www.instagram.com/welmora__studio", "_blank");
}