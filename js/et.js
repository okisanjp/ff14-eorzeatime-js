function main(){
	var realTime = new Date();
	document.getElementById("realTime").innerHTML =  realTime.toLocaleString();
	
	var etOneYear = 86400 * 32 * 12
	var etOneMonth = 86400 * 32
	var etOneDay = 86400
	var etOneHour = 3600
	var etOneMinute = 60
	
	var etRate = 1440 / 70
	var unixTime = Math.floor(realTime.getTime() / 1000);
	var eorzeaTime = unixTime * etRate
	var eorzeaTimeYear = Math.floor(eorzeaTime / etOneYear) + 1
	var eorzeaTimeMonth = Math.floor(eorzeaTime / etOneMonth % 12) + 1
	var eorzeaTimeDay = Math.floor(eorzeaTime / etOneDay % 32) + 1
	var eorzeaTimeHour = Math.floor(eorzeaTime / etOneHour % 24)
	var eorzeaTimeMinute = Math.floor(eorzeaTime / etOneMinute % 60)
	
	var eorzeaTimeNow = ('0000' + eorzeaTimeYear).slice(-4) + '/' + ('00' + eorzeaTimeMonth).slice(-2) + '/' + ('00' + eorzeaTimeDay).slice(-2) + ' ' + ('00' + eorzeaTimeHour).slice(-2) + ':' + ('00' + eorzeaTimeMinute).slice(-2)
	document.getElementById("eorzeaTime").innerHTML =  eorzeaTimeNow;
}
setInterval('main()',1000);
