document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch data from the iOS shortcut
    function fetchData() {
      // Make a POST request to a specific endpoint on your server
      fetch('/data-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          // You can include any additional data you need to send to the server
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Assuming the response from the server is JSON
      })
      .then(data => {
        // Display the received data on the webpage
        document.getElementById('dataDisplay').innerText = 'Data from iOS Shortcut: ' + JSON.stringify(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    }
  
    // Call fetchData when the page loads
    fetchData();
  });
  