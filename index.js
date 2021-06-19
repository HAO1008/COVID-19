fetch('https://corona.lmao.ninja/v2/countries/taiwan')
  .then((response)=>{
    return response.json()
  })
  .then((data)=>{
    console.log(data);
    document.querySelector('#flag').src = data.countryInfo.flag
    document.querySelector('#country').innerHTML = data.country
    document.querySelector('#cases').innerHTML = data.cases
    document.querySelector('#critical').innerHTML = data.critical
    document.querySelector('#deaths').innerHTML = data.deaths
    document.querySelector('#recovered').innerHTML = data.recovered
    document.querySelector('#tests').innerHTML = data.tests
    document.querySelector('#active').innerHTML = data.active
  })