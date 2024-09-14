// main.js
async function initializeApp() {
    const unitsData = await fetchUnitsData();
    if (unitsData) {
        populateUnitTypes(unitsData);
        setupEventListeners(unitsData);
    }
}

initializeApp();