window.onload = function() {
  const now = new Date();

  document.getElementById("datetime").innerText = now.toLocaleString();

  showTab('breakfast');
};

function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(div => div.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

document.getElementById("submit-btn").addEventListener("click", function() {
  const breakfast = document.querySelector("input[name='breakfast']:checked")?.value;
  const lunch = document.querySelector("input[name='lunch']:checked")?.value;
  const dinner = document.querySelector("input[name='dinner']:checked")?.value;

  const now = new Date();

  const submission = {
    breakfast,
    lunch,
    dinner,
    submittedAt: now.toLocaleString()
  };

  fetch('/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(submission)
  })
  .then(response => response.text())
  .then(data => alert(data))
  .catch(error => alert("Error submitting: " + error));
});