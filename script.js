function performSearch() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    if (query === "") {
        alert("Please enter a search term.");
    } else {
        alert(`Searching for: ${query}`);
        // Implement your search logic here
        // You can direct users to the results page or filter the content.
    }
}
