const tl = gsap.timeline();
revelToSpan();
let startTime;

const menuImg = document.querySelector("#menu");


//Loading animaiton
function loadingTextAnimation() {
    // Store the start time before the code execution begins
    startTime = performance.now();

    tl
        .to(".preloader", {
            scale: 3,
            duration: 0.5,
            ease: "ease",
            delay: getDelay(),
        })
        .to(".preloader", {
            opacity: 0,
            scale: 0,
            ease: Expo.easeInOut,
            delay: -0.45,
        })
        .from('#js-loader h1 .js-comeLeft', {
            x: "200%",
            duration: 2,
            opacity: 0,
            ease: Expo.easeInOut,
            stagger: .3,
        })
        .to("#js-loader h1", {
            x: "-50%",
            duration: 2,
            delay: -2.3,
            ease: Expo.easeInOut,
        })
        .to(".js-parent .js-child", {
            y: "-100%",
            duration: 1,
            delay: -1,
            ease: Expo.easeInOut,
        })
        .to("#js-loader h1 span", {
            y: "-110%",
            duration: 1,
            delay: -1,
            ease: Expo.easeInOut,
            stagger: 0.1,
        })
    function getDelay() {
        // Calculate the time elapsed since the start
        let elapsedTime = performance.now() - startTime;

        // Set a minimum delay to ensure the preloader is visible for a reasonable time
        let minDelay = 1000; // 1000 milliseconds or 1 second (Adjust as needed)

        // Calculate the delay based on the time taken for the code to execute
        var calculatedDelay = Math.max(minDelay - elapsedTime, 0);


        console.log(`It took ${startTime}ms to load the page.`);

        return calculatedDelay / 1000; // Convert to seconds
    }
}

function greeenAnimation() {
    tl
        .to("#js-loader", {
            height: 0,
            duration: 2,
            delay: -0.7,
            ease: Expo.easeInOut,
        })
        .to("#js-green", {
            height: "100%",
            ease: Expo.easeInOut,
            duration: 2,
            delay: -2,
        })
        .to("#js-green", {
            bottom: "100%",
            ease: Expo.easeInOut,
            duration: 1.5,
            delay: -1.5,
        })
        .set("#js-loader", {
            display: "none",
            duration: 0,
        }
        );
}

function revelToSpan() {
    document.querySelectorAll(".js-revel")
        .forEach((elem) => {
            // Creating two child of elem
            let parent = document.createElement("span");
            let child = document.createElement("span");

            // Assign them their respective classes
            parent.classList.add("js-parent");
            child.classList.add("js-child");

            // (elemText --> childText) && (child --> parent)
            child.innerHTML = elem.innerHTML;
            parent.appendChild(child);

            // elem replaces it's value with parent span
            elem.innerHTML = "";
            elem.appendChild(parent);
        })
}




//Page animation
function pageAnimation(want = true) {
    tl
        .to(".description-text span", {
            width: "100%",
            ease: "Expo.easeInOut",
            duration: 1.5,
            stagger: 0.15,
            delay: -0.5,
        })
        .to(".description-text h2", {
            opacity: 1,
            duration: 0.1,
        })
        .to(
            ["#stroke1", "#stroke2", "#stroke3", "#stroke4"],
            {
                duration: 1.5,
                ease: "Expo.easeInOut",
                stagger: 0.15,
                left: (index) => {
                    const positions = ["calc(100% - 175px)", "calc(100% - 113px)", "calc(100% - 345px)", "100%"];
                    return positions[index];
                },
                width: (index) => {
                    const widths = [175, 113, 345, 0];
                    return widths[index];
                },
            })
        .to("#cover1", {
            width: "25%",
            ease: "Expo.ease",
            duration: 0.8,
        }, "-=1.5")
        .to("#cover2", {
            width: "67%",
            left: "calc(100% - (67% + 8%))",
            ease: "Expo.ease",
            duration: 0.8,
        }, "-=1.5")


        .set("nav", {
            display: "flex",
            duration: 0,
        }, "-=1.6")
    if (want) {
        tl
            .from("#bar .line", {
                width: 0,
                ease: "easeOut",
                duration: 0.4,
                stagger: 0.1,
                delay: 0.2,
            }, "-=1.6")
    }

    tl
        .to("#menu-img", {
            rotate: 0,
            ease: "easeOut",
            duration: 2,
            opacity: 1,
        }, "-=1.6")
        .to("#name p", {
            top: "0",
            duration: 1,
        }, "-=1.7")

        .to("#new-yr-msg", {
            opacity: 1,
            duration: 0.5,
        }, "-=1.6")

        .to("#new-yr-msg", {
            opacity: 0.9,
            duration: 3,
            ease: "easeIn",
            top: "-79%",
        }, "-=1.6")
}

function hoverAnimation(want = true) {
    //Animaiton for menu hovering
    function menuHover() {
        menuImg.onmouseover = () => {
            if (want) {
                gsap.to("#menu-img", {
                    rotate: 120,
                    opacity: 0,
                    ease: "easeInOut",
                })
                gsap.to("#click-img", {
                    rotate: 120,
                    opacity: 1,
                    ease: "easeInOut",
                })
                gsap.to(".circle", {
                    scale: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "easeInOut",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                })
            }
        };

        menuImg.onmouseleave = () => {
            if (want) {
                gsap.to("#menu-img", {
                    rotate: 0,
                    opacity: 1,
                    ease: "easeInOut",
                })
                gsap.to("#click-img", {
                    rotate: 0,
                    opacity: 0,
                    ease: "easeInOut",
                })
            }
            gsap.to(".circle", {
                scale: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "easeInOut",
            })
        };
    }

    //Animaiton for name hovering
    function nameHover() {
        const name = document.querySelector("#name");

        name.onmouseover = () => {
            gsap.to("#name p", {
                top: "100%",
                duration: 0.1,
                ease: "easeOutElastic"
            })

            gsap.to("#cover2 .shy", {
                opacity: 1,
            })
        }
        name.onmouseleave = () => {
            gsap.to("#name p", {
                top: "0",
                duration: 0.1,
                ease: "easeOutElastic"
            })

            gsap.to("#cover2 .shy", {
                opacity: 0,
            })
        }
    }

    //Animaiton for image hovering
    function imageHover() {
        const flowers = document.querySelectorAll("#cover1 .flower");
        const cover1 = document.querySelector("#cover1");

        cover1.onmouseover = () => {
            flowers.forEach((flower) => {
                flower.style.transition = "all 1s ease-in-out";
                flower.style.opacity = 1;
                flower.style.animation = "rotate 1s linear infinite";
            })
        }
    }

    //calling functions
    menuHover();
    nameHover();
    imageHover();
}




//Click animation
let count = 1;
function menuClick() {
    menuImg.onclick = () => {
        if (count) {
            count--;
            hoverAnimation(false);


            gsap.to(".line1", {
                transform: "translate(0%, 240%) rotate(45deg)",
                ease: "easeInOut",
            });
            gsap.to(".line2", {
                opacity: 0,
                scale: 0,
                ease: "easeInOut",
            });
            gsap.to(".line3", {
                transform: "translate(0%, -240%) rotate(-45deg)",
                ease: "easeInOut",
            });







            tl
                .to("#new-yr-msg", {
                    opacity: 0,
                    duration: 1,
                    ease: "easeOut",
                    top: "40%",
                })

                .to("#cover1 .flower", {
                    opacity: 0,
                    duration: 1,
                }, "-=1.7")

                .to("#name p", {
                    top: "100%",
                    duration: 1,
                }, "-=1.7")

                .to("#menu img", {
                    rotate: 240,
                    ease: "easeOut",
                    duration: 2,
                    opacity: 0,
                }, "-=1.6")

                .to(".description-text span", {
                    width: "100%",
                    left: 0,
                    ease: "Expo.easeInOut",
                    duration: 1.5,
                    stagger: 0.15,
                    delay: -0.5,
                })

                .to("#cover1", {
                    width: 0,
                    ease: "Expo.easeInOut",
                    duration: 1.5,
                }, "-=1.5")

                .to("#cover2", {
                    width: 0,
                    left: "calc(100% - 8%)",
                    ease: "Expo.easeInOut",
                    duration: 1.5,
                }, "-=1.5")

                .to(".description-text h2", {
                    opacity: 0,
                    duration: 0.1,
                })

                .to(
                    ["#stroke1", "#stroke2", "#stroke3", "#stroke4"],
                    {
                        duration: 1.5,
                        ease: "Expo.easeInOut",
                        stagger: 0.15,
                        left: 0,
                        width: 0,
                    })

                .to("#js-green", {
                    bottom: "0",
                    ease: Expo.easeInOut,
                    duration: 1.5,
                    delay: -1.5,
                })
                .to("#js-green", {
                    height: "0",
                    ease: Expo.easeInOut,
                    duration: 2,
                    delay: -1.4,
                })

                .set("#name, #home-page", {
                    display: "none",
                })
            navEntryAnimation();
        } else {
            count++;
            navExitAnimation();
            gsap.set("#name, #home-page", {
                display: "block",
            })
            setTimeout(() => {
                hoverAnimation(count);
            }, 5000);


            // Logic for when count is false (0 or false)
            gsap.to(".line1", {
                transform: "translate(0) rotate(0)",
                ease: "easeInOut",
            });
            gsap.to(".line2", {
                opacity: 1,
                scale: 1,
                ease: "easeInOut",
            });
            gsap.to(".line3", {
                transform: "translate(0) rotate(0)",
                ease: "easeInOut",
            });


            setTimeout(() => {
                pageAnimation(false);
            }, 0);
        }
    };
}



// Navivation Pannel animation
function navEntryAnimation() {
    gsap.set("#nav-page", {
        display: "block"
    })
    gsap.set("#main", {
        overflow: "auto"
    })
    tl
        .to("#elem-div", {
            opacity: 1
        })
        .to("#nav-page", {
            height: "100%",
            ease: Expo.easeInOut,
            duration: 1.5,
            delay: -2.3,
        })
        .to(".elems", {
            y: 0,
            opacity: 1,
            stagger: .1,
            ease: "easeInOut",
            onComplete: navAnimation,
        })
}

function navExitAnimation() {
    tl
        .to(".elems", {
            y: -300,
            opacity: 0,
            stagger: .1,
            ease: "easeInOut",
        })
        .to("#nav-page", {
            height: "0",
            ease: Expo.easeInOut,
            duration: 1.5,
        })
        .to("#js-green", {
            height: "100%",
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1.9,
        })
        .to("#js-green", {
            bottom: "100%",
            ease: Expo.easeInOut,
            duration: 1.5,
            delay: -1.4,
        })
        .to("#elem-div", {
            opacity: 0,
            onComplete: () => {
                gsap.set("#nav-page", {
                    display: "none",
                    duration: 0,
                })
                gsap.set("#main", {
                    overflow: "hidden"
                })
            },
        })
}

function navAnimation() {
    const elems = document.querySelectorAll(".elems");
    const imgDiv = document.querySelector("#img-div");

    let h;
    let w;


    elems.forEach((elem, index) => {
        let img = elem.getAttribute("data-image");
        let imgPosition = elem.getAttribute("data-background-position");

        elem.onmouseenter = (dets) => {
            h = elem.getAttribute("data-height");
            w = elem.getAttribute("data-width");

            imgDiv.style.backgroundPosition = imgPosition;
            imgDiv.style.height = h + "px";
            imgDiv.style.width = w + "px";
            imgDiv.style.backgroundImage = `url(${img})`;
            imgDiv.style.opacity = 1;
        }

        elem.onmouseleave = () => {
            imgDiv.style.opacity = 0;
        }



    });

    let xAx = 0;
    document.onmousemove = (dets) => {
        if (xAx !== dets.x) {
            gsap.to(imgDiv, {
                rotate: 2 * (dets.x - xAx),
                duration: 3,
            });
            xAx = dets.x;
        }

        gsap.to(imgDiv, {
            left: dets.x - w / 2,
            top: dets.y - h / 2,
            duration: 0.5
        });
    };
}





//Calling back functions
loadingTextAnimation();
greeenAnimation();
pageAnimation();
setTimeout(() => {
    hoverAnimation(count);
    menuClick();
}, 5000);