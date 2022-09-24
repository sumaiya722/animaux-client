import React from 'react';

const Banner = () => {
    return (
        <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="http://www.animalmedicalcenterav.com/uploads/1/3/0/7/130711658/animalmedicalcenteroftheantelopevalley-112039-full-service-vet-blogbanner1_orig.jpg?fbclid=IwAR2CK1m1uvJyuiNRdnUXm2cCeGRWl5SR09L00d0aGzKKf6Ncjn-_MKBmdNM" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://www.petsafe.net/media/images/Cats-and-Dogs-Playing-Together-1.jpg?fbclid=IwAR0vUl1PhVFgyes-RlqTYN4z_PaeJlTqAF4izirpm224uFZmkP2blGDFTXQ" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="https://www.bproperty.com/blog/wp-content/uploads/2021/06/shutterstock_565969090.jpg?fbclid=IwAR16v-VvMRIT1GPd_MQjyXaQKd85Xd651AE-xp_ggtJiENsMevGoBuXa97s" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src="https://www.pawtracks.com/wp-content/uploads/sites/2/2020/06/gettyimages-494789669-1.jpg?fit=1024%2C1024&p=1&fbclid=IwAR2eLx3bFo-HZzxoaA6c6W-b6OpIq-mrTNCuurwBAlNonUeejdOWyx_53i8" class="w-full h-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;