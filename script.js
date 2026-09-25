// Shows current date and time
window.onload = function() {
  const now = new Date();
  document.getElementById("datetime").innerText = now.toLocaleString();
  showTab('breakfast'); // default tab when page loads
};

// Tab switching
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(div => div.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

// Submission handling
document.getElementById("submit-btn").addEventListener("click", function() {
  const name = document.getElementById("name").value;
  const breakfast = document.querySelector("input[name='breakfast']:checked")?.value;
  const lunch = document.querySelector("input[name='lunch']:checked")?.value;
  const dinner = document.querySelector("input[name='dinner']:checked")?.value;
  const delivery = document.querySelector("input[name='delivery']:checked")?.value;
  const customLocation = document.querySelector("input[name='custom-location']").value;
  const customTime = document.querySelector("input[name='custom-time']").value;

  const now = new Date();

  const submission = {
    name,
    breakfast,
    lunch,
    dinner,
    delivery,
    customLocation,
    customTime,
    submittedAt: now.toLocaleString()
  };

  console.log("Submission:", submission);
  alert("Thank you " + name + "! Your choices have been recorded.");
});
