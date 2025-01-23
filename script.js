/* Scramble on hover effect UNUSED
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

document.querySelector("h1").onmouseover = event => {
    let iterations = 0;
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
            .map((_, index) => {
                if(index < iterations) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 52)]
            })
            .join("");   

        if(iterations >= event.target.dataset.value.length) clearInterval(interval);

        iterations += 1 / 3;
    }, 30);
}*/

/* Cursor effect inspired by HyperPlexed (YouTube) Did some tweaks to make it work for the site */

const cursoreffect = document.getElementById("cursoreffect");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    cursoreffect.animate ({
        left: `${clientX+scrollX}px`,
        top: `${clientY+scrollY}px`,

    }, {duration: 3000, fill: "forwards"} );
}