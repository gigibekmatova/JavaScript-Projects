const image = document.querySelector('img');

image.addEventListener('click',function () {
  console.log(this.src);
  if(this.src === 'https://th.bing.com/th/id/OIP.p59VNJbMd3adKX5N3Z5YVAHaEy?w=500&h=323&rs=1&pid=ImgDetMain'){
    this.src = 'https://png.pngtree.com/png-vector/20221030/ourmid/pngtree-light-bulb-logo-template-vector-icon-illustration-graphic-vector-image-vector-png-image_39867422.png'
  }else {
    this.src = 'https://th.bing.com/th/id/OIP.p59VNJbMd3adKX5N3Z5YVAHaEy?w=500&h=323&rs=1&pid=ImgDetMain'
  }
})
