// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const tableBody = document.querySelector('#myTable tbody');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const address = document.getElementById('address').value;
        const pincode = document.getElementById('pincode').value;
        const gender = document.getElementById('gender').value;
        const food = document.getElementById('food').value;
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;
        // Get other field values similarly

        // Create a new table row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${gender}</td>
            <td>${food}</td>
            <td>${state}</td>
            <td>${country}</td>
            <!-- Add other cells (last name, address, pincode, gender, food, , country) here -->
        `;

        // Append the row to the table
        tableBody.appendChild(newRow);

        // Clear form fields
        form.reset();
    });
});
