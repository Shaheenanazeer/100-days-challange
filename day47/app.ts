// Question 141:** Discuss the significance of the await reserved word in asynchronous JavaScript.

async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

async function processData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

processData();