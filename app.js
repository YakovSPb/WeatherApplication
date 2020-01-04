window.addEventListener('load', ()=> {
	let long
	let	lat
	let temperatureDescription = document.querySelector(".temperature-description")
	let temperatureDegree = document.querySelector('.temperature-degree')
	let locationTimezone = document.querySelector('.location-timezone')
	let temperatureSection = document.querySelector('.temperature-section')
	const temperatureSpan = document.querySelector('.temperature-section span')
	
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(position => {
			long = position.coords.longitude
			lat = position.coords.latitude
			const proxy = 'https://cors-anywhere.herokuapp.com/'
			const api = `${proxy}https://api.darksky.net/forecast/2c8607ffa5d4ed77a4c86c16be3cdaf7/${lat},${long}`
			fetch(api)
			.then(response =>{
				return response.json()
			})
			.then(data =>{
				console.log(data)
				const { temperature, summary, icon } = data.currently
				// Set DOM ELements from the API
				temperatureDegree.textContent = temperature
				temperatureDescription.textContent = summary
				locationTimezone.textContent = data.timezone
					//FORMULA FOR CELSIUS
					let celsius = (temperature - 32) *(5 /9)
					//Set Icon
					setIcons(icon, document.querySelector(".icon"))

						temperatureSpan.textContent = "C"
						temperatureDegree.textContent = Math.floor(celsius)
					// Change temperature to Celsius/Farenheit
						temperatureSection.addEventListener('click', () => {
							if(temperatureSpan.textContent === "F"){
								temperatureSpan.textContent = "C"
								temperatureDegree.textContent = Math.floor(celsius)
							} else{
								temperatureSpan.textContent = "F"
								temperatureDegree.textContent = temperature
							}
						})
			})
		})
	} else{
		h1.textContent = "hey, navigation is not turn on"
	}

function setIcons(icon, iconID){
	const skycons = new Skycons({color: "white"})
	const currentIcon = icon.replace(/-/g, "_").toUpperCase()
	skycons.play()
	return skycons.set(iconID, Skycons[currentIcon])
}
})