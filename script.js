function update() {
	console.log("Update called")
	loadJSON("items.json", itemsToTable, 'jsonp');
}

// loadJSON method to open the JSON file.
function loadJSON(path, success, error) {
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				success(JSON.parse(xhr.responseText));
			}
			else {
				error(xhr);
			}
		}
	};

	xhr.open('GET', path, true);
	xhr.send();
}

function itemsToTable(items) {
	var table = document.getElementById("table1");

	for(var i = 0; i < items.length; i++) {
		var row = table.insertRow();
		var cell = row.insertCell();
		
		cell.textContent = items[i].name;
		cell = row.insertCell();
		cell.textContent = items[i].slot;
		cell = row.insertCell();
		cell.textContent = items[i].type;
		cell = row.insertCell();
		cell.textContent = items[i].source;
		cell = row.insertCell();
		cell.textContent = items[i].zone;
		cell = row.insertCell();
		cell.textContent = items[i].itemLink;
		cell = row.insertCell();
		cell.textContent = items[i].sourceLink;
		cell = row.insertCell();
		cell.textContent = items[i].tomtomCommand;
		cell = row.insertCell();
		cell.textContent = items[i].primaryAttribute;
	}
}
