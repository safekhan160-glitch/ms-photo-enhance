let upload = document.getElementById("upload");
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let img = new Image();

upload.addEventListener("change", () => {
    let file = upload.files[0];
    img.src = URL.createObjectURL(file);

    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
    };
});

document.getElementById("enhanceBtn").addEventListener("click", () => {
    ctx.filter = "brightness(1.2) contrast(1.3) saturate(1.3) sharpen(1.2)";
    ctx.drawImage(img, 0, 0);
});
