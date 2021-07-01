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