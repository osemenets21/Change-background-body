const someColor = document.querySelector(".kolir");

someColor.addEventListener("click", function () {
  document.querySelector(".wrapper").style.display = "block";
  document.querySelector(".wrapper_img").style.display = "none";
  document.body.style.backgroundImage = 'none';
});


const blockColor = document.querySelector('.block_color');

function changeBgColor(event) {
    document.body.style.backgroundColor = event.target.classList[1];
}

blockColor.addEventListener('click', function(event){
    if(event.target.closest('.square-color')){
        changeBgColor(event);
    }
})


const someImg = document.querySelector(".zobrazennia");

someImg.addEventListener("click", function () {
  document.querySelector(".wrapper").style.display = "none";
  document.querySelector(".wrapper_img").style.display = "block";
  document.body.style.backgroundColor = 'transparent';
});

const blockImg = document.querySelector('.block_img');


function changeBgImg(event) {
    let url = event.target.getAttribute('src');
    url = `url("${url}")`  
    document.body.style.backgroundImage = url;
}

blockImg.addEventListener('click', function(event){
    if(event.target.closest('.square-img')){
        changeBgImg(event);
    }
})