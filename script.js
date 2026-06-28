function addEntry() {
    let text = document.getElementById("journalInput").value;

    if (text.trim() === "") {
        alert("Please write something!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = text;

    document.getElementById("entryList").appendChild(li);

    document.getElementById("journalInput").value = "";
}