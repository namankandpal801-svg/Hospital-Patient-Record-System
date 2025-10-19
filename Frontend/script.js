// Simple login script
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent page refresh

    let userId = document.getElementById("userId").value.trim();
    let password = document.getElementById("password").value.trim();
    let role = document.getElementById("role").value;

    let errorMsg = document.getElementById("error-msg");

    // Simple validation
    if (userId === "" || password === "" || role === "") {
        errorMsg.textContent = "Please fill in all fields!";
        return;
    }

    // Simulate login validation (for demo)
    if (password === "12345") { // demo password

        // Save role in localStorage
        localStorage.setItem("role", role);

        // Redirect everyone to the same dashboard.html
        window.location.href = "dashboard.html";
    } else {
        errorMsg.textContent = "Invalid ID or Password!";
    }
});





//second..........
// Logout button click
const logoutBtn = document.getElementById("logout");
if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
        alert("You have been logged out!");
        window.location.href = "index.html";
    });
}




//third...............
// For now, just simple buttons for demo
const deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach(button => {
    button.addEventListener("click", () => {
        const row = button.parentElement.parentElement;
        row.remove();
        alert("Patient record deleted (frontend only)");
    });
});

const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("This will open the detailed patient page (patient_details.html)");
    });
});



//fourth

// Handle "Add Patient" form submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("patientForm");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // stop page reload

            const name = document.getElementById("pname").value;
            const age = document.getElementById("age").value;
            const gender = document.getElementById("gender").value;
            const contact = document.getElementById("contact").value;
            const address = document.getElementById("address").value;
            const disease = document.getElementById("disease").value;

            if (!name || !age || !gender || !contact || !address || !disease) {
                alert("Please fill all fields!");
                return;
            }

            alert("✅ Patient added successfully (frontend only)");
            form.reset(); // clear form
        });
    }
});




//fifth*******************

// ===== Appointments Page JS =====
const appointmentForm = document.getElementById("appointmentForm");
const appointmentTable = document.getElementById("appointmentTable");

if (appointmentForm) {
    appointmentForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const patient = document.getElementById("ap-patient").value;
        const doctor = document.getElementById("ap-doctor").value;
        const date = document.getElementById("ap-date").value;
        const time = document.getElementById("ap-time").value;

        if (!patient || !doctor || !date || !time) {
            alert("Please fill all fields!");
            return;
        }

        // Add new row to the table (frontend only)
        const newRow = document.createElement("tr");
        const newId = Math.floor(Math.random() * 1000) + 200; // Random ID for demo
        newRow.innerHTML = `
            <td>${newId}</td>
            <td>${patient}</td>
            <td>${doctor}</td>
            <td>${date}</td>
            <td>${time}</td>
            <td>
                <button class="view-btn">View</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;
        appointmentTable.appendChild(newRow);

        alert("✅ Appointment added (frontend only)");
        appointmentForm.reset();

        // Add delete button functionality to new row
        newRow.querySelector(".delete-btn").addEventListener("click", () => {
            newRow.remove();
            alert("Appointment deleted (frontend only)");
        });
    });
}

// Delete existing appointments
document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const row = e.target.parentElement.parentElement;
        row.remove();
        alert("Appointment deleted (frontend only)");
    });
});

// View button
document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("This will open appointment details (frontend only)");
    });
});
