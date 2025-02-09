function switchimage() { let img = document.getElementById("image");
                        img.src = img.src.includes("images/image1.jpg") ? "images/image2.jpg" : "images/image1.jpg"; }
document.getElementById("toggle-btn").addEventListener("click",switchimage);    

function togglebackground() { document.body.classList.toggle("dark-mode"); }
