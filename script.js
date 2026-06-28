function loadEntries() {
    let entries = JSON.parse(localStorage.getItem("journalEntries")) || [];

    let entryList = document.getElementById("entryList");
    entryList.innerHTML = "";

    entries.forEach((entry, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <strong>${entry.date}</strong><br>
            ${entry.text}
            <br><br>
            <button onclick="deleteEntry(${index})">Delete</button>
        `;

        entryList.appendChild(li);
    });
}

function addEntry() {
    let text = document.getElementById("journalInput").value;

    if (text.trim() === "") {
        alert("Please write something!");
        return;
    }

    let entries = JSON.parse(localStorage.getItem("journalEntries")) || [];

    let currentDate = new Date().toLocaleString();

    entries.push({
        text: text,
        date: currentDate
    });

    localStorage.setItem("journalEntries", JSON.stringify(entries));

    document.getElementById("journalInput").value = "";

    loadEntries();
}

function deleteEntry(index) {
    let entries = JSON.parse(localStorage.getItem("journalEntries")) || [];

    entries.splice(index, 1);

    localStorage.setItem("journalEntries", JSON.stringify(entries));

    loadEntries();
}

loadEntries();