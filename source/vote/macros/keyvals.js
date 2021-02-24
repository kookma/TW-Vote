/*\
keyvals.js
type: application/javascript
module-type: filteroperator

Filter operator for returning the key_°_values of a data tiddler
Note the _°_ is a separator used here for sorting purpose

\*/
(function(){
"use strict";

/*
Export our filter function
*/
exports.keyvals = function(source,operator,options) {
	var results = [];
	var sep="_°_";

	source(function(tiddler,title) {
		var data = options.wiki.getTiddlerDataCached(title);
		if(data) {
			for (var [key, value] of Object.entries(data)) {
				results.push(key+sep+value);
			}
		}

	});

	return results;
};

})();
