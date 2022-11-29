const fgImage = document.querySelector("#profile-fg");
const bgImage = document.querySelector("#profile-bg");

fgImage.addEventListener("mousemove", (e) => {
    const imageWidth = fgImage.offsetWidth;
    const imageHeight = fgImage.offselHeight;
    const centerX = fgImage.offsetLeft + imageWidth/2;
    const centerY = fgImage.offsetTop + imageHeight/2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const rotateX = 25*mouseY/(imageHeight/2);
    const rotateY = 25*mouseX/(imageWidth/2);

    bgImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    console.log("Should be rotating!!!!")
});
