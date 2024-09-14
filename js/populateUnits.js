// populateUnits.js
function populateUnitTypes(unitsData) {
    const unitTypeSelect = document.getElementById('unitType');
    unitTypeSelect.innerHTML = '';

    Object.keys(unitsData).forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
        unitTypeSelect.appendChild(option);
    });

    // Populate the units for the default selected unit type
    populateUnits(unitsData, unitTypeSelect.value);
}

function populateUnits(unitsData, unitType) {
    const inputUnitSelect = document.getElementById('inputUnit');
    const outputUnitSelect = document.getElementById('outputUnit');

    const unitKeys = Object.keys(unitsData[unitType]);
    inputUnitSelect.innerHTML = '';
    outputUnitSelect.innerHTML = '';

    unitKeys.forEach(unit => {
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');

        option1.value = unit;
        option1.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
        option2.value = unit;
        option2.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);

        inputUnitSelect.appendChild(option1);
        outputUnitSelect.appendChild(option2);
    });

    updateOutputUnitOptions(unitsData); // Initially set the "To" options
}

function updateOutputUnitOptions(unitsData) {
    const selectedInputUnit = document.getElementById('inputUnit').value;
    const outputUnitSelect = document.getElementById('outputUnit');
    const unitType = document.getElementById('unitType').value;

    const unitKeys = Object.keys(unitsData[unitType]);
    outputUnitSelect.innerHTML = '';

    unitKeys.forEach(unit => {
        if (unit !== selectedInputUnit) {
            const option = document.createElement('option');
            option.value = unit;
            option.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
            outputUnitSelect.appendChild(option);
        }
    });

    updateConversion(unitsData); // Update conversion result when options change
}