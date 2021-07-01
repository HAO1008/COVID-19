lottie.loadAnimation({
  path:'./lottie/covid19.json',   //json文件路径
  loop:true,
  autoplay:true,
  renderer:'canvas',  //渲染方式，有"html"、"canvas"和"svg"三种
  container:document.getElementById('animation')
});