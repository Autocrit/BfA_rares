window.onload = function onLoad()
{
	updateClass();
}

function updateItems() {
	var tbody = document.getElementById("tbody1");

	// Clear table body
	while(tbody.hasChildNodes()) {
		tbody.removeChild(tbody.lastChild);
	}

	// Clear waypoints
	document.getElementById("waypoints").innerHTML = "";

	// Get items from JSON file
	fetch('./items.json')
		.then(res => res.json())
		.then(items => {
			items.forEach(item => {
				if((!document.getElementById("drustvar").checked && item.zone == "Drustvar") || 
					(!document.getElementById("nazmir").checked && item.zone == "Nazmir") ||
					(!document.getElementById("tiragarde_sound").checked && item.zone == "Tiragarde Sound") ||
					(!document.getElementById("zuldazar").checked && item.zone == "Zuldazar") ||
					(!document.getElementById("cloth_armour").checked && item.type == "Cloth armour") ||
					(!document.getElementById("leather_armour").checked && item.type == "Leather armour") ||
					(!document.getElementById("mail_armour").checked && item.type == "Mail armour") ||
					(!document.getElementById("plate_armour").checked && item.type == "Plate armour") ||
					(!document.getElementById("agility").checked && item.primaryAttribute == "Agility") ||
					(!document.getElementById("intellect").checked && item.primaryAttribute == "Intellect") ||
					(!document.getElementById("strength").checked && item.primaryAttribute == "Strength") ||
					(!document.getElementById("wrist").checked && item.slot == "Wrist") ||
					(!document.getElementById("hands").checked && item.slot == "Hands") ||
					(!document.getElementById("waist").checked && item.slot == "Waist") ||
					(!document.getElementById("legs").checked && item.slot == "Legs") ||
					(!document.getElementById("feet").checked && item.slot == "Feet") ||
					(!document.getElementById("cloak").checked && item.type == "Cloak") ||
					(!document.getElementById("ring").checked && item.type == "Ring") ||
					(!document.getElementById("trinket").checked && item.type == "Trinket") ||
					(!document.getElementById("dagger").checked && item.type == "Dagger") ||
					(!document.getElementById("one_handed_axe").checked && item.type == "One-Handed Axe") ||
					(!document.getElementById("one_handed_mace").checked && item.type == "One-Handed Mace") ||
					(!document.getElementById("one_handed_sword").checked && item.type == "One-Handed Sword") ||
					(!document.getElementById("fist_weapon").checked && item.type == "Fist Weapon") ||
					(!document.getElementById("wand").checked && item.type == "Wand") ||
					(!document.getElementById("warglaives").checked && item.type == "Warglaives") ||
					(!document.getElementById("polearm").checked && item.type == "Polearm") ||
					(!document.getElementById("staff").checked && item.type == "Staff") ||
					(!document.getElementById("two_handed_axe").checked && item.type == "Two-Handed Axe") ||
					(!document.getElementById("two_handed_mace").checked && item.type == "Two-Handed Mace") ||
					(!document.getElementById("two_handed_sword").checked && item.type == "Two-Handed Sword") ||
					(!document.getElementById("bow").checked && item.type == "Bow") ||
					(!document.getElementById("crossbow").checked && item.type == "Crossbow") ||
					(!document.getElementById("gun").checked && item.type == "Gun") ||
					(!document.getElementById("shield").checked && item.type == "Shield") ||
					(!document.getElementById("off_hand_frill").checked && item.type == "Off-hand Frill") ||
					(item.exclude)) {
						return;
				}

				var row = tbody.insertRow();
				var cell = row.insertCell();
				cell.innerHTML = "<a href=\"" + item.itemLink + "\">" + item.name + "</a>";
				cell = row.insertCell();
				cell.textContent = item.slot;
				cell = row.insertCell();
				cell.textContent = item.type;
				cell = row.insertCell();
				cell.innerHTML = "<a href=\"" + item.sourceLink + "\">" + item.source + "</a>";
				cell = row.insertCell();
				cell.textContent = item.zone;
				cell = row.insertCell();
				cell.textContent = item.tomtomCommand;
				cell = row.insertCell();
				cell.textContent = item.primaryAttribute;

				document.getElementById("waypoints").innerHTML += item.tomtomCommand + "<br>";
			});
		});
}

function updateClass() {
	var classRadioButtons = document.getElementsByName("class_preset");
	var strClass = "";
	for(var i=0; i<classRadioButtons.length; i++) {
		if(classRadioButtons[i].checked) {
			strClass = classRadioButtons[i].value;
			break;
		}
	}

	document.getElementById("cloth_armour").checked = false;
	document.getElementById("leather_armour").checked = false;
	document.getElementById("mail_armour").checked = false;
	document.getElementById("plate_armour").checked = false;
	document.getElementById("agility").checked = false;
	document.getElementById("intellect").checked = false;
	document.getElementById("strength").checked = false;
	document.getElementById("dagger").checked = false;
	document.getElementById("one_handed_axe").checked = false;
	document.getElementById("one_handed_mace").checked = false;
	document.getElementById("one_handed_sword").checked = false;
	document.getElementById("fist_weapon").checked = false;
	document.getElementById("wand").checked = false;
	document.getElementById("warglaives").checked = false;
	document.getElementById("polearm").checked = false;
	document.getElementById("staff").checked = false;
	document.getElementById("two_handed_axe").checked = false;
	document.getElementById("two_handed_mace").checked = false;
	document.getElementById("two_handed_sword").checked = false;
	document.getElementById("bow").checked = false;
	document.getElementById("crossbow").checked = false;
	document.getElementById("gun").checked = false;
	document.getElementById("shield").checked = false;
	document.getElementById("off_hand_frill").checked = false;

	// Get classes from JSON file
	fetch('./classes.json')
		.then(res => res.json())
		.then(classes => {
			classes.forEach(wowClass => {
				if(wowClass.class == strClass) {
					if(wowClass.cloth)
						document.getElementById("cloth_armour").checked = true;
					if(wowClass.leather)
						document.getElementById("leather_armour").checked = true;
					if(wowClass.mail)
						document.getElementById("mail_armour").checked = true;
					if(wowClass.plate)
						document.getElementById("plate_armour").checked = true;
					if(wowClass.agility)
						document.getElementById("agility").checked = true;
					if(wowClass.intellect)
						document.getElementById("intellect").checked = true;
					if(wowClass.strength)
						document.getElementById("strength").checked = true;
					if(wowClass.dagger)
						document.getElementById("dagger").checked = true;
					if(wowClass.one_handed_axe)
						document.getElementById("one_handed_axe").checked = true;
					if(wowClass.one_handed_mace)
						document.getElementById("one_handed_mace").checked = true;
					if(wowClass.one_handed_sword)
						document.getElementById("one_handed_sword").checked = true;
					if(wowClass.fist_weapon)
						document.getElementById("fist_weapon").checked = true;
					if(wowClass.wand)	
						document.getElementById("wand").checked = true;
					if(wowClass.warglaives)
						document.getElementById("warglaives").checked = true;
					if(wowClass.polearm)
						document.getElementById("polearm").checked = true;
					if(wowClass.staff)
						document.getElementById("staff").checked = true;
					if(wowClass.two_handed_axe)
						document.getElementById("two_handed_axe").checked = true;
					if(wowClass.two_handed_mace)
						document.getElementById("two_handed_mace").checked = true;
					if(wowClass.two_handed_sword)
						document.getElementById("two_handed_sword").checked = true;
					if(wowClass.bow)
						document.getElementById("bow").checked = true;
					if(wowClass.crossbow)
						document.getElementById("crossbow").checked = true;
					if(wowClass.gun)
						document.getElementById("gun").checked = true;
					if(wowClass.shield)
						document.getElementById("shield").checked = true;
					if(wowClass.off_hand_frill)
						document.getElementById("off_hand_frill").checked = true;
				}
			});
		});

	updateItems();
}
