
const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=Shimla&days=3`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '864b89ed4fmshe58e34945be9400p164451jsn9dff5654cb32',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

  
  const temp=document.querySelector('#temp');
  const text=document.querySelector('#text');
  const feels=document.querySelector('#feels');
  const humidity=document.querySelector('#humadity');
  const image=document.querySelector('#img');

  function getWeather(city){
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;
    fetch(url,options).then(function(res){
        return res.json();
     }).then(function(res2){
        
         temp.innerHTML=`${res2.current.temp_c}°C`;
         text.innerHTML=`${res2.current.condition.text}`;
         feels.innerHTML=`Feels like: ${res2.current.feelslike_c}°C`;
         humidity.innerHTML=`Humadity: ${res2.current.humidity}%`;
         image.setAttribute('src',"https://"+res2.current.condition.icon);
         console.log(res2);
     }).catch(function(err){
         console.log(err);
         
     })
    }
 const input=document.querySelector('#input');
 const button=document.querySelector('#btn');
 
 button.addEventListener('click',function(e){
    const cityName=input.value;
    getWeather(cityName);
 })