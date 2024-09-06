var imgElement = document.createElement("img");
imgElement.src = "new_image.jpg"; // Image source changed
imgElement.alt = "New Image"; // Alt text changed
if (imgElement.complete) {
    console.log("Image dimensions: ".concat(imgElement.naturalWidth, "x").concat(imgElement.naturalHeight));
}
else {
    imgElement.addEventListener("load", function () {
        console.log("Image dimensions: ".concat(imgElement.naturalWidth, "x").concat(imgElement.naturalHeight));
    });
}
