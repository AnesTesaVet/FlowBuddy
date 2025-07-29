document.getElementById("sim-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const weight = parseFloat(document.getElementById("weight").value);
  const target = parseFloat(document.getElementById("target").value);

  if (isNaN(weight) || isNaN(target)) {
    alert("Por favor introduce valores válidos.");
    return;
  }

  const rate = (target * 0.2 * weight).toFixed(2); // estimación simple
  document.getElementById("result").innerHTML = `
    <h2>Resultado</h2>
    <p>Velocidad estimada: <strong>${rate} ml/h</strong></p>
  `;
});
