document.getElementById('calculator').addEventListener('submit', function(e) {
  e.preventDefault();

  const species = document.getElementById('species').value;
  const weight = parseFloat(document.getElementById('weight').value);
  const activity = document.getElementById('activity').value;

  if (isNaN(weight)) return alert("Enter a valid weight!");

  let base = species === 'dog' ? 130 : 100;
  let activityFactor = activity === 'low' ? 1.2 : activity === 'high' ? 1.8 : 1.5;

  const rer = base * Math.pow(weight, 0.75);
  const totalCalories = Math.round(rer * activityFactor);

  document.getElementById('result').innerText = 
    `Your ${species} needs about ${totalCalories} calories/day.`;
});
