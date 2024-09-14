// updateConversion.js
function updateConversion(unitsData) {
    const value = parseFloat(document.getElementById('inputValue').value);
    const fromUnit = document.getElementById('inputUnit').value;
    const toUnit = document.getElementById('outputUnit').value;
    const unitType = document.getElementById('unitType').value;

    if (!isNaN(value) && unitsData[unitType][fromUnit] && unitsData[unitType][toUnit]) {
        const fromRate = unitsData[unitType][fromUnit];
        const toRate = unitsData[unitType][toUnit];

        const result = value * (toRate / fromRate);
        document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
    } else {
        document.getElementById('result').innerText = 'Invalid input or unit selection.';
    }
}