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