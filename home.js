function carbon(event) {
  event.preventDefault(); 
  let electricity = parseFloat(document.getElementById('electricity').value) || 0;
  let fuel = parseFloat(document.getElementById('fuel').value) || 0;
  let flights = parseFloat(document.getElementById('flights').value) || 0;
  let meat = parseFloat(document.getElementById('meat').value) || 0;
  const electricityFactor = 0.7;  
  const fuelFactor = 2.3;         
  const flightsFactor = 100;      
  const meatFactor = 52;
  let totalFootprint = (electricity * electricityFactor * 12) + 
                       (fuel * fuelFactor * 12) + 
                       (flights * flightsFactor) + 
                       (meat * meatFactor * 52);
  alert("Your total carbon footprint is: " + totalFootprint.toFixed(2) + " kg CO2 per year.");
  document.getElementById('display').innerText = "Your total carbon footprint is: " + totalFootprint.toFixed(2) + " kg CO2 per year.";
}