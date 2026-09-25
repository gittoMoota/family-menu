// Show current date and time
window.onload = function() {
  const now = new Date();
  document.getElementById("datetime").innerText = now.toLocaleString();
  loadResults();
};

// Load results from server
function loadResults() {
  fetch('/submissions')
    .then(response => response.json())
    .then(data => {
      const counts = {
        breakfast: {},
        lunch: {},
        dinner: {}
      };

      // Count votes
      data.forEach(sub => {
        if (sub.breakfast) {
          counts.breakfast[sub.breakfast] = (counts.breakfast[sub.breakfast] || 0) + 1;
        }
        if (sub.lunch) {
          counts.lunch[sub.lunch] = (counts.lunch[sub.lunch] || 0) + 1;
        }
        if (sub.dinner) {
          counts.dinner[sub.dinner] = (counts.dinner[sub.dinner] || 0) + 1;
        }
      });

      // Render table
      const tbody = document.querySelector("#results-table tbody");
      tbody.innerHTML = "";

      Object.keys(counts).forEach(mealType => {
        Object.keys(counts[mealType]).forEach(option => {
          const row = document.createElement("tr");
          row.innerHTML = `<td>${mealType}</td><td>${option}</td><td>${counts[mealType][option]}</td>`;
          tbody.appendChild(row);
        });
      });
    })
    .catch(error => console.error("Error loading results:", error));
}
