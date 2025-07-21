function createTable() {
    // Prompt user for number of rows and columns
    let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");

    // Convert to integers
    rn = parseInt(rn);
    cn = parseInt(cn);

    // Validate inputs
    if (isNaN(rn) || isNaN(cn)) {
        alert("Please enter valid numeric values.");
        return;
    }
    if (rn <= 0 || cn <= 0) {
        alert("Number of rows and columns must be greater than 0.");
        return;
    }

    // Get the table element
    const table = document.getElementById("myTable");

    // Clear any existing content
    table.innerHTML = "";

    // Generate table rows and columns
    for (let i = 0; i < rn; i++) {
        const row = table.insertRow();
        for (let j = 0; j < cn; j++) {
            const cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
