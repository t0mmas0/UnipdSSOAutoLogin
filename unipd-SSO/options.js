
 // Esegue i comandi nel file custom.js bisogna trovare un modo per inviare i dati salvati da da questo file al altro
//chrome.tabs.executeScript(null, {file: 'custom.js'});


var btn = document.getElementById('submit');
btn.addEventListener('click', commit);


function commit() {
	  var User = document.getElementById("User").value;
	  var Pass = document.getElementById("Pass").value;
	chrome.storage.sync.set({identifier: User}, function(){
			console.log("Username set to"+ User);
		});
	chrome.storage.sync.set({credentials: Pass}, function(){
			console.log("Password set to "+ Pass);
		});
}
