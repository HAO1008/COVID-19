const intImg = document.querySelector('.int-sm-img')
const img = intImg.querySelectorAll('img')
const covid19 = document.querySelector('.covid19')
// 取得文字
const int = document.querySelector('.introduction')
const intH1 = int.querySelector('h1')
const intP = int.querySelector('p')

const intObj = [
  {
    h1:'新冠肺炎 COVID-19',
    p:'2019年12月起中國湖北武漢市發現不明原因肺炎群聚，疫情初期個案多與武漢華南海鮮城活動史有關，中國官方於2020年1月9日公布其病原體為新型冠狀病毒。此疫情隨後迅速在中國其他省市與世界各地擴散，並證實可有效人傳人。'
  },
  {
    h1:'後疫情時代的台灣！',
    p:'COVID-19新冠肺炎雖然不是人類歷史上造成最多死亡的傳染病，卻可能在不遠的未來徹底改變人們的生活習慣，乃至於全球化的進程。 從微觀的生活層面來看，舉凡人們的社交方式、飲食習慣、娛樂型態，甚至工作模式，都會因這次疫情產生長久的改變。 '
  },
  {
    h1:'疫情對教育的衝擊',
    p:'我們以為疫情的衝擊快結束了，但這是錯的，這些衝擊將延續數十年。」英國國家學術院近期對於COVID-19對英國社會帶來的長期影響，發表了一份長達173頁的調查。報告裡特別談到，疫情下的兒童和青少年上課方式的轉變，對學習狀況和心理狀態有多大的衝擊。'
  }
]
for(let i=0 ; i<img.length ; i++){
    img[i].setAttribute('index',i)
    img[i].addEventListener('click',function(){
      const src = this.src
      // console.log(src);
      for(let imgs of img){
        imgs.classList.remove('img-avtive')
      }
        var imgIndex = this.getAttribute('index')
        this.classList.add('img-avtive')
        covid19.style.background = `url(${src}) center/cover rgba(44, 44, 44, 0.75)`
        // 文字
        intH1.innerText = intObj[imgIndex].h1
        intP.innerText = intObj[imgIndex].p
    })
  }
