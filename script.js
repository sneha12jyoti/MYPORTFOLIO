
document.querySelectorAll(".reveal")
.forEach(function(elem){
    let spanParent = document.createElement("span");
    let spanChild = document.createElement("span");

    spanParent.classList.add("parent");
    spanChild.classList.add("child");

    spanChild.textContent = elem.textContent;

    spanParent.appendChild(spanChild);
    elem.innerHTML = "";
    elem.appendChild(spanParent);
});

if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

var tl = gsap.timeline();

tl.to(".child", {
    y: "0%",
    duration: 1.2,
    stagger: 0.15,
    ease: "power3.out"
})
.to("#loader", {
    y: "-100%",
    duration: 1.1,
    ease: "expo.inOut"
})
.to("#fs", {
    height: 0,
    duration: 2,
    ease: "expo.inOut"
}, "-=0.4")
.to("#elem", {
    height: "100%",
    duration: 2,
    delay: -2,
    ease: "expo.inOut"
})
.to("#white", {
    height: "100%",
    duration: 2,
    delay: -1.6,
    ease: "expo.inOut"
})
.to("#green", {
    top: "0%",
    duration: 1.25,
    ease: "expo.inOut"
}, "-=0.9")
.from(".green-kicker, .green-title, .green-copy, .green-chip, .green-btn, .green-profile, .green-photo, .hero-stat", {
    y: 35,
    opacity: 0,
    duration: 0.7,
    stagger: 0.08,
    ease: "power3.out"
});

if (typeof ScrollTrigger !== "undefined") {
    gsap.from(".projects-kicker, #projects h3, .projects-sub", {
        y: 30,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#projects",
            start: "top 76%"
        }
    });

    gsap.from(".project-card", {
        y: 55,
        opacity: 0,
        duration: 0.85,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".project-grid",
            start: "top 78%"
        }
    });

    gsap.to(".project-media", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
            trigger: "#projects",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    gsap.from(".skills-kicker, #skills h3", {
        y: 30,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#skills",
            start: "top 78%"
        }
    });

    gsap.from(".skill-card", {
        y: 42,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 82%"
        }
    });

    gsap.to(".skills-grid", {
        y: -14,
        ease: "none",
        scrollTrigger: {
            trigger: "#skills",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
        }
    });

    gsap.to(".skill-bar-fill", {
        width: function(_, target) {
            return target.dataset.level || "0%";
        },
        duration: 1.1,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 82%"
        }
    });

    gsap.from(".education-kicker, #education h3, .education-card", {
        y: 22,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#education",
            start: "top 84%"
        }
    });

    gsap.from(".education-card", {
        scale: 0.98,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#education",
            start: "top 84%"
        }
    });

    gsap.from(".achievements-kicker, #achievements h3, .achievements-list li", {
        y: 20,
        opacity: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#achievements",
            start: "top 84%"
        }
    });

    gsap.from(".internship-inner h3, .internship-inner p, .internship-actions .cta-btn", {
        y: 18,
        opacity: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#internship-ready",
            start: "top 84%"
        }
    });

    gsap.from(".contact-kicker, #contact h3, .contact-list li, .contact-form", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#contact",
            start: "top 82%"
        }
    });
}
