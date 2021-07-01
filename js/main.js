// lottie 動畫
lottie.loadAnimation({
  path:'./lottie/covid19.json',   //json文件路径
  loop:true,
  autoplay:true,
  renderer:'canvas',  //渲染方式，有"html"、"canvas"和"svg"三种
  container:document.getElementById('animation')
});

// input api 資料
const btn = document.querySelector('#btn')
    const input = document.querySelector('#searchinput')
    

    btn.addEventListener('click',getCountry)
    btn.addEventListener('click',()=>{
      
    })
    input.addEventListener('keydown',(e)=>{
      if(e.keyCode == 13){
        getCountry()
      }else{
        console.log('hahaha');
      }
    })

    function getCountry(){
      let searchInput = document.querySelector('#searchinput').value.trim()
      console.log(searchInput);

      // 串接API
      fetch(`https://corona.lmao.ninja/v2/countries/${searchInput}`)
      .then(response => response.json())
      .then(data => {
        const noFund = document.querySelector('#no-found')
        const showArea = document.querySelector('.show-area')
        console.log(data.country);
        if(data.country){
          showArea.classList.remove('hide')
          noFund.classList.remove('show')
          document.querySelector('#flag').src = data.countryInfo.flag
          document.querySelector('#country').innerHTML = data.country
          document.querySelector('#cases').innerHTML = data.cases
          document.querySelector('#deaths').innerHTML = data.deaths
          document.querySelector('#recovered').innerHTML = data.recovered
          document.querySelector('#tests').innerHTML = data.tests
        }else{
          document.querySelector('#flag').src = ''
          document.querySelector('#country').innerHTML = '┐(´w`)┌'
          noFund.classList.add('show')
          showArea.classList.add('hide')
        }
      })
    }

    // fixed bar 固定標誌
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

    // covie 操作&資料
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
      // 圖表產生
      var countryArr = []
      var averageArr = []

      fetch(`https://corona.lmao.ninja/v2/countries`)
        .then(response => response.json())
        .then(data => {
          for(let i=0 ; i<data.length ; i++){
            // console.log(data[i].country);
            // console.log(data[i].deaths);
            // console.log(data[i].tests);
            var average = data[i].deaths / data[i].tests * 100 
            average = average.toFixed(3)
            if(average > 1.2 && average < 3){
              countryArr.push(data[i].country)
              averageArr.push(average)
              // console.log(countryArr);
              // callChart()
            }
          }
        })
        console.log(countryArr);
        var ctx = document.getElementById('chart').getContext('2d');
        var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: countryArr,
                    datasets: [{
                        label: '#高死亡率國家',
                        data: averageArr,
                        backgroundColor: [
                            'rgba(200, 200, 200, 0.1)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                  legend: {
                    labels: {
                      color: "#fff",
                      font:{
                        size:18
                      }
                    }
                  },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks:{
                              color:'#fff'
                            }
                        },
                        x:{
                          beginAtZero: true,
                            ticks:{
                              color:'#fff'
                            }
                        }
                    }
                }
            });

        const chartBtn = document.querySelector('.chart-btn')
        var chart = document.querySelector('.chart')
        chartBtn.addEventListener('click',function(){
          chart.style.width = '69.99%'
        })