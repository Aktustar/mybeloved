document.getElementById("toggle-btn").addEventListener("click", function() {
    let img = document.getElementById("image");
    img.src = img.src.includes("image1.jpg") ? "image2.jpg" : "image1.jpg";
});
