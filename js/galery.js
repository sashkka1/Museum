export default randomGalary();



function randomGalary() {
    const pictureGalary = document.querySelector(".gallery-img");
    let arr = ['./assets/img/galery/galery1.jpg', './assets/img/galery/galery2.jpg', './assets/img/galery/galery3.jpg', './assets/img/galery/galery4.jpg', './assets/img/galery/galery5.jpg', './assets/img/galery/galery6.jpg', './assets/img/galery/galery7.jpg', './assets/img/galery/galery8.jpg', './assets/img/galery/galery9.jpg', './assets/img/galery/galery10.jpg', './assets/img/galery/galery11.jpg', './assets/img/galery/galery12.jpg', './assets/img/galery/galery13.jpg', './assets/img/galery/galery14.jpg', './assets/img/galery/galery15.jpg'];
    arr.sort(() => Math.random() - 0.5);
    arr.forEach(function (item) {
        const img = document.createElement('img');
        img.src = item;
        img.alt = "gallery img";
        pictureGalary.appendChild(img);
    });
};