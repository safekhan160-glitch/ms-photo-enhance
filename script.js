async function enhancePhoto() {
    let file = document.getElementById("upload").files[0];
    if (!file) {
        alert("Please upload a photo first!");
        return;
    }

    let formData = new FormData();
    formData.append("file", file);

    let upload = await fetch("https://api.imgbb.com/1/upload?key=demo", {
        method: "POST",
        body: formData
    });

    let uploaded = await upload.json();
    let url = uploaded.data.url;

    let res = await fetch(`/api/enhance?image=${url}`);
    let data = await res.json();

    document.getElementById("preview").src = data.enhanced_image_url;
}
