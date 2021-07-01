const fiexedBar = document.querySelector('.fixed-bar')
const a = fiexedBar.querySelectorAll('a')
const content = document.querySelectorAll('content')
const close = document.querySelectorAll('.fa-times')

for(let i=0 ; i<a.length ; i++){
    a[i].setAttribute('index',i) //a索引
    // click排他
    a[i].addEventListener('click',function(){
      for(let as of a){
        as.classList.remove('icon-active')
      }
      this.classList.add('icon-active')
      var index = this.getAttribute('index') //利用索引標示content
      // content排他
      for(contents of content){
        contents.classList.remove('circle-active')
      } 
        content[index].classList.add('circle-active')
  })
}

for(closes of close){
  closes.addEventListener('click',function(){
    for(let contents of content){
      contents.classList.remove('circle-active')
    }
    for(let as of a){
        as.classList.remove('icon-active')
      }
  })
}