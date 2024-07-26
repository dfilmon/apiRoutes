

// Function to store an item in localStorage
async function storeItem() {
    const key = document.getElementById('key').value;
    const value = document.getElementById('value').value;
   
    if (!key || !value) {
        alert('Please enter both key and value.');
        return;
    }
   
    const response = await axios.post('http://localhost:3000/item', {
        key: key,
        value: value
    });
   
    if (response.status === 201) {
        alert('Item stored successfully.');
    } else {
        alert('Error storing item.');
    }
}




// Function to retrieve an item from localStorage
async function retrieveItem() {
    const key = document.getElementById('getKey').value;
   
    if (!key) {
        alert('Please enter a key to retrieve.');
        return;
    }
   
    const response = await axios.get(`http://localhost:3000/item/${key}`);
   
    if (response.status === 200) {
        document.getElementById('result').textContent = `Value: ${JSON.stringify(response.data.value)}`;
    } else if (response.status === 404) {
        document.getElementById('result').textContent = 'Item not found.';
    } else {
        document.getElementById('result').textContent = 'Error retrieving item.';
    }
}
