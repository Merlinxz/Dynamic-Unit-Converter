// eventListeners.js
function setupEventListeners(unitsData) {
    document.getElementById('unitType').addEventListener('change', function() {
        populateUnits(unitsData, this.value);
    });

    document.getElementById('inputUnit').addEventListener('change', function() {
        updateOutputUnitOptions(unitsData);
        updateConversion(unitsData); // Update conversion result
    });

    document.getElementById('outputUnit').addEventListener('change', function() {
        updateConversion(unitsData);
    });

    document.getElementById('inputValue').addEventListener('input', function() {
        updateConversion(unitsData);
    });
}