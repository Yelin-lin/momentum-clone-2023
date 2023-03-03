const imagesList = ["0.jpg","1.jpg","2.jpg", "3.jpg"];

const chosenImage = imagesList[Math.floor(Math.random() * imagesList.length)]

const bgImage = document.createElement("img");

bgImage.className = "bgImageName";

const bgDate = new Date();
const bgHours = bgDate.getHours();

if(bgHours < 12){
    bgImage.src = `img/morning/${chosenImage}`;
} else if(bgHours == 12){
    bgImage.src = `img/at noon/${chosenImage}`;
} else if(bgHours > 12){
    bgImage.src = `img/afternoon/${chosenImage}`;
}

document.body.appendChild(bgImage);