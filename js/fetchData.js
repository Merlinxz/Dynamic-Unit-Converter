// Add this function to your main.js if you need it
async function fetchUnitsData() {
    try {
        const response1 = await fetch('units.json');
        const data1 = await response1.json();

        const response2 = await fetch('units2.json');
        const data2 = await response2.json();

        const combinedData = {...data1, ...data2 };

        console.log(combinedData);
        return combinedData;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}