// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ==========================================
// Canvas Image Sequence Setup (HIGH QUALITY)
// ==========================================
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

// Use devicePixelRatio for crisp, sharp rendering on all screens
function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    context.scale(dpr, dpr);
    render();
}
window.addEventListener("resize", () => {
    // Reset scale before re-applying
    context.setTransform(1, 0, 0, 1, 0, 0);
    resizeCanvas();
});

// Use ALL 192 high-quality frames from the MP4 extraction
const frameCount = 192;
const currentFrame = index => (
    `skateframes/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`
);

const images = [];
const skateboard = { frame: 0 };
let loadedImages = 0;

const loadingBar = document.getElementById('loading-bar');
const loadingText = document.getElementById('loading-text');
const preloader = document.getElementById('preloader');

// Preload all images
for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.onload = () => {
        loadedImages++;
        let progress = Math.floor((loadedImages / frameCount) * 100);
        loadingBar.style.width = `${progress}%`;
        loadingText.innerText = `${progress}%`;
        
        if (loadedImages === frameCount) {
            // All images loaded — reveal site
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                    resizeCanvas();
                    initAnimations();
                }, 1000);
            }, 300);
        }
    };
    img.src = currentFrame(i);
    images.push(img);
}

function render() {
    if (!images[skateboard.frame] || !images[skateboard.frame].complete) return;
    
    const img = images[skateboard.frame];
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const canvasRatio = screenW / screenH;
    const imgRatio = img.width / img.height;
    
    let drawWidth, drawHeight, offsetX, offsetY;
    
    // "object-fit: cover" logic
    if (canvasRatio > imgRatio) {
        drawWidth = screenW;
        drawHeight = screenW / imgRatio;
        offsetX = 0;
        offsetY = (screenH - drawHeight) / 2;
    } else {
        drawWidth = screenH * imgRatio;
        drawHeight = screenH;
        offsetX = (screenW - drawWidth) / 2;
        offsetY = 0;
    }
    
    // Use resetTransform to avoid stacking scale transforms
    const dpr = window.devicePixelRatio || 1;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.clearRect(0, 0, screenW, screenH);
    
    // Disable image smoothing for sharper pixels
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';
    
    context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

function initAnimations() {
    render();
    
    // GSAP Canvas Scroll Scrub — scrub:0.15 for near-instant response
    gsap.to(skateboard, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            trigger: "main",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.15
        },
        onUpdate: render
    });


// ==========================================
// UI Frame Animations (ScrollTrigger)
// ==========================================

// FRAME 1 - Hero Intro
gsap.to(".frame1-content", {
    opacity: 0,
    y: -50,
    scrollTrigger: {
        trigger: "#frame1",
        start: "top top",
        end: "bottom 80%",
        scrub: true
    }
});

// FRAME 2 - Hover Technology
gsap.fromTo(".frame2-content", 
    { opacity: 0, x: 100 },
    { 
        opacity: 1, 
        x: 0, 
        scrollTrigger: {
            trigger: "#frame2",
            start: "top 60%",
            end: "center center",
            scrub: true
        }
    }
);
gsap.to(".frame2-content", {
    opacity: 0,
    x: -50,
    scrollTrigger: {
        trigger: "#frame2",
        start: "center top",
        end: "bottom top",
        scrub: true
    }
});

// FRAME 3 - Smart LED Wheels
const cards = gsap.utils.toArray(".glass-card");
gsap.fromTo(cards, 
    { opacity: 0, y: 50 },
    {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#frame3",
            start: "top 70%",
            end: "center center",
            scrub: 1
        }
    }
);
gsap.to(".frame3-content", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#frame3",
        start: "bottom 80%",
        end: "bottom top",
        scrub: true
    }
});

// FRAME 4 - AI Balance Mode
gsap.fromTo(".frame4-content",
    { scale: 0.8, opacity: 0 },
    {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
            trigger: "#frame4",
            start: "top 70%",
            end: "center center",
            scrub: true
        }
    }
);
gsap.to(".frame4-content", {
    scale: 1.2,
    opacity: 0,
    scrollTrigger: {
        trigger: "#frame4",
        start: "center top",
        end: "bottom top",
        scrub: true
    }
});
gsap.fromTo(".hud-circle", 
    { opacity: 0, scale: 0.5 },
    { 
        opacity: 1, scale: 1, 
        scrollTrigger: {
            trigger: "#frame4",
            start: "top 60%",
            end: "center center",
            scrub: true
        }
    }
);
gsap.to(".hud-circle", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#frame4",
        start: "bottom 80%",
        end: "bottom top",
        scrub: true
    }
});


// FRAME 5 - Speed Experience
gsap.fromTo(".frame5-content",
    { scale: 0.5, opacity: 0, filter: "blur(20px)" },
    {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        scrollTrigger: {
            trigger: "#frame5",
            start: "top 70%",
            end: "center center",
            scrub: 1
        }
    }
);
gsap.to(".frame5-content", {
    scale: 2,
    opacity: 0,
    filter: "blur(10px)",
    scrollTrigger: {
        trigger: "#frame5",
        start: "center top",
        end: "bottom top",
        scrub: 1
    }
});

// FRAME 6 - Rider Experience
gsap.fromTo(".frame6-content > div:first-child",
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, scrollTrigger: { trigger: "#frame6", start: "top 70%", end: "center center", scrub: true } }
);
gsap.fromTo(".frame6-content > div:last-child",
    { x: 100, opacity: 0 },
    { x: 0, opacity: 1, scrollTrigger: { trigger: "#frame6", start: "top 70%", end: "center center", scrub: true } }
);
gsap.to(".frame6-content", {
    opacity: 0,
    y: -50,
    scrollTrigger: {
        trigger: "#frame6",
        start: "bottom 90%",
        end: "bottom top",
        scrub: true
    }
});

// FRAME 7 - Final CTA
gsap.fromTo(".frame7-content",
    { opacity: 0, y: 100 },
    {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: "#frame7",
            start: "top 80%",
            end: "center center",
            scrub: true
        }
    }
);

} // end of initAnimations()
