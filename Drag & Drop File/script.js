
const inputArea = document.querySelector(".input-area"),
    dragText = inputArea.querySelector("header"),
    button = inputArea.querySelector("button"),
    input = inputArea.querySelector("input");
let file;

button.onclick = () => {
    input.click();
}

input.addEventListener("change", function () {

    file = this.files[0];
    inputArea.classList.add("active");
    showFile();
});

inputArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    inputArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
});

inputArea.addEventListener("dragleave", () => {
    inputArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
});


inputArea.addEventListener("drop", (event) => {
    event.preventDefault();
    file = event.dataTransfer.files[0];
    showFile();
});

function showFile() {
    let fileType = file.type;
    let validExtensions = [ "image/jpeg","image/jpg", "image/png"];
    if (validExtensions.includes(fileType)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileURL = fileReader.result;
            let imgTag = `<img src="${fileURL}" alt="image">`;
            inputArea.innerHTML = imgTag;
        }
        fileReader.readAsDataURL(file);
    } else {
        alert("This file not an Image change format to uplaod");
        inputArea.classList.remove("active");
        dragText.textContent = "Drag & Drop to Upload File";
    }
}