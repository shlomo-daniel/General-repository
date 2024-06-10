class Gallery {
    static vat = 17;
    images = []
    imgElem = document.createElement('img');
    currentImage = 0;

    constructor(elemId, ...imagesArr) {
        const galleryElem = document.getElementById(elemId)
        this.imgElem = document.createElement('img');

        this.images = imagesArr;

        galleryElem.appendChild(this.imgElem);

        this.showImage();
        this.imgElem.addEventListener('click', () => this.nextImage())
    }

    showImage() {
        this.imgElem.src = `./imgs1/${this.images[this.currentImage]}`
    }

    nextImage() {
        this.currentImage++;
        if (this.currentImage >= this.images.length) {
            this.currentImage = 0;
        }
        this.showImage();
    }

    previusImg() {
        this.imgElem.addEventListener('keydown', ev => {
            console.log(ev)
            this.currentImage--;
            this.showImage
        })
    }

}

new Gallery("gallery", "img1.jpg", "img2.jpg", "img3.jpg");
