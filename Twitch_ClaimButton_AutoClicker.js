// Instructions for executing code on Twitch stream (Firefox/Chrome/Edge)
// Right click page, click Inspect, click Console tab, paste code and press Enter

// Code to press Claim Bonus button every 30 seconds
var timerID = setInterval(function() {try{document.querySelector('[aria-label="Claim Bonus"]').click();}catch{}}, 30 * 1000);

// Code to clear/stop the Claim Bonus function
clearInterval(timerID);
