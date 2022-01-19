
	var id;
	var pass;
	/*
	Prelevo l'informazione relativa al nome utente da dove precedentemente salvata
	*/
	chrome.storage.sync.get("identifier", function (result) {
		id = result.identifier;  
		//console.log("Il valore Username caricato dalla memoria globale e: " + id);
		
	});
	/*
	Prelevo l'informazione relativa alla password da dove precedentemente salvata
	*/
	chrome.storage.sync.get("credentials", function (result) {
		pass = result.credentials;
		//console.log("Il valore Password caricato dalla memoria globale e: " + pass);
		
	});


setTimeout(() => {  
document.getElementById("j_username_js").value = id;
document.getElementById("password").value = pass;
document.getElementById("radio2").checked = true;
//document.getElementById("login_button_js").click();
 }, 2000);


