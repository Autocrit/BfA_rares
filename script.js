window.onload = function onLoad()
{
	update();
}

function update() {
	loadJSON("items.json", itemsToTable, 'jsonp');
	//itemsToTable(testData);
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
	var tbody = document.getElementById("tbody1");

	// Clear table body
	while(tbody.hasChildNodes()) {
		tbody.removeChild(tbody.lastChild);
	}

	for(var i=0; i<items.length; i++) {
		// Eliminate if zone or primary attribute doesn't match
		if((!document.getElementById("drustvar").checked && items[i].zone == "Drustvar") || 
			(!document.getElementById("nazmir").checked && items[i].zone == "Nazmir") ||
			(!document.getElementById("tiragarde_sound").checked && items[i].zone == "Tiragarde Sound") ||
			(!document.getElementById("zuldazar").checked && items[i].zone == "Zuldazar") ||
            (!document.getElementById("cloth_armour").checked && items[i].type == "Cloth armour") ||
            (!document.getElementById("leather_armour").checked && items[i].type == "Leather armour") ||
            (!document.getElementById("mail_armour").checked && items[i].type == "Mail armour") ||
            (!document.getElementById("plate_armour").checked && items[i].type == "Plate armour") ||
			(!document.getElementById("agility").checked && items[i].primaryAttribute == "Agility") ||
			(!document.getElementById("intellect").checked && items[i].primaryAttribute == "Intellect") ||
			(!document.getElementById("strength").checked && items[i].primaryAttribute == "Strength") ||
            (!document.getElementById("wrist").checked && items[i].slot == "Wrist") ||
            (!document.getElementById("hands").checked && items[i].slot == "Hands") ||
            (!document.getElementById("waist").checked && items[i].slot == "Waist") ||
            (!document.getElementById("legs").checked && items[i].slot == "Legs") ||
            (!document.getElementById("feet").checked && items[i].slot == "Feet") ||
            (!document.getElementById("cloak").checked && items[i].type == "Cloak") ||
            (!document.getElementById("ring").checked && items[i].type == "Ring") ||
            (!document.getElementById("trinket").checked && items[i].type == "Trinket") ||
            (!document.getElementById("dagger").checked && items[i].type == "Dagger") ||
			(!document.getElementById("one_handed_axe").checked && items[i].type == "One-Handed Axe") ||
			(!document.getElementById("one_handed_mace").checked && items[i].type == "One-Handed Mace") ||
			(!document.getElementById("one_handed_sword").checked && items[i].type == "One-Handed Sword") ||
			(!document.getElementById("fist_weapon").checked && items[i].type == "Fist Weapon") ||
			(!document.getElementById("wand").checked && items[i].type == "Wand") ||
			(!document.getElementById("warglaives").checked && items[i].type == "Warglaives") ||
			(!document.getElementById("polearm").checked && items[i].type == "Polearm") ||
			(!document.getElementById("staff").checked && items[i].type == "Staff") ||
			(!document.getElementById("two_handed_axe").checked && items[i].type == "Two-Handed Axe") ||
			(!document.getElementById("two_handed_mace").checked && items[i].type == "Two-Handed Mace") ||
			(!document.getElementById("two_handed_sword").checked && items[i].type == "Two-Handed Sword") ||
			(!document.getElementById("bow").checked && items[i].type == "Bow") ||
			(!document.getElementById("crossbow").checked && items[i].type == "Crossbow") ||
			(!document.getElementById("gun").checked && items[i].type == "Gun") ||
			(!document.getElementById("shield").checked && items[i].type == "Shield") ||
			(!document.getElementById("off_hand_frill").checked && items[i].type == "Off-hand Frill")) {
			{ continue; }
		}
            
        var row = tbody.insertRow();
        var cell = row.insertCell();
        cell.innerHTML = "<a href=\"" + items[i].itemLink + "\">" + items[i].name + "</a>";
        cell = row.insertCell();
        cell.textContent = items[i].slot;
        cell = row.insertCell();
        cell.textContent = items[i].type;
        cell = row.insertCell();
        cell.innerHTML = "<a href=\"" + items[i].sourceLink + "\">" + items[i].source + "</a>";
        cell = row.insertCell();
        cell.textContent = items[i].zone;
        cell = row.insertCell();
        cell.textContent = items[i].tomtomCommand;
        cell = row.insertCell();
        cell.textContent = items[i].primaryAttribute;

        document.getElementById("waypoints").innerHTML += items[i].tomtomCommand + "<br>"
	}
}
