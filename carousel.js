const images = [
    'img/img1.webp',
    'img/img2.webp',
    'img/img3.webp',
    'img/img4.webp'
]

var activeImage = 1;
const mainImgWrapper = document.getElementsByClassName('main-img-wrapper')[0];

function setFeatureImg(index){
    const oldImage = document.getElementsByClassName('main-img')[0];
    oldImage?.remove();

    const img = document.createElement('img');
    img.setAttribute('src', images[index]);
    img.setAttribute('class', 'main-img')
    img.setAttribute('alt', 'active sneaker image')
    mainImgWrapper.appendChild(img);
}

// Initialize
setFeatureImg(0);

// set sub images
const subImgWrapper = document.getElementsByClassName('sub-img-wrapper')[0];
for(let i=0; i<images.length; i++){
    const subimg = document.createElement('img');
    subimg.setAttribute('src', images[i]);
    subimg.setAttribute('class', 'sub-img')
    subimg.setAttribute('alt', 'sneaker image '+ i)
    subImgWrapper.appendChild(subimg);

    subimg.addEventListener('click', () => {
        setFeatureImg(i);
        
        // remove onclick styles from all sub images
        const oldSubImages = document.getElementsByClassName('sub-img');
        for(let oldSubImage of oldSubImages){
            oldSubImage.classList.remove('sub-img-active');
        }

        // add onclick styles on clicked sub-img
        subimg.classList.add('sub-img-active');
    })
} 