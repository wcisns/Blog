const BgImageUrl = "url('/img/background.png')"

document
  .querySelector('#web_bg')
  .setAttribute('style', `background-image: ${BgImageUrl};position: fixed;width: 100%;height: 100%;z-index: -1;background-size: cover;`);

document
  .querySelector("#banner")
  .setAttribute('style', 'background-image: none')

document
  .querySelector("#banner .mask")
  .setAttribute('style', 'background-color:rgba(0,0,0,0)')