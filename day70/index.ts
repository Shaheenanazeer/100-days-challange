
const imgElement: HTMLImageElement = document.createElement("img");
imgElement.src = "new_image.jpg"; // Image source changed
imgElement.alt = "New Image"; // Alt text changed

if (imgElement.complete) {
    console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
} else {
    imgElement.addEventListener("load", () => {
        console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
    });

}



