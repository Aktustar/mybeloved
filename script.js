document.getElementById("toggle-btn").addEventListener("click", function() {
    let img = document.getElementById("image");
    img.src = img.src.includes("images/image1.jpg") ? "images/image2.jpg" : "images/image1.jpg";
});
