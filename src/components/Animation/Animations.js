import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);


export const setupHeroAnimation = () => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-div",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            // markers: true,
            pin: true,
        },
    });

    tl.to(".hero-heading", {
        x: "10%",
        duration: .5,
        ease: "linear",
    });

    tl.to(".hero-heading2", {
        x: "-10%",
        duration: .5,
        ease: "linear",
    }, "<");

    tl.to(".hero-video-container", {
        width: '100vw',
        height: '100vh',
        duration: .5,
        ease: "power2.inOut"
    }, "<");
};

export const SplitTextAnimation = (selector = '.split-text', stagger = .2, duration = 1, delay = 0, triggerValue = "center center", endTriggerValue = "bottom top") => {
    if (selector === undefined) return;
    const splitText = new SplitText(selector, {
        type: "lines",
        linesClass: "line",
        mask: "lines"

    });

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: selector,
            start: triggerValue,
            end: endTriggerValue, 

        },
    });

    tl.fromTo(splitText.lines, {
        y: "100%",
    }, {
        y: "0%",
        duration: duration,
        stagger: stagger,
        ease: "power2.out",
        delay: delay,
    });

    return tl;
}
