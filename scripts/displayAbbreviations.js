function displayAbbreviations() {
	if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;

	//取得所有缩略词
	var abbreviations = document.getElementsByTagName("abbr");
	if (abbreviations.length < 1) return false;
	var defs = new Array();
	//遍历这些缩略词
	for (var i = 0; i < abbreviations.length; i++) {
		var current_abbr = abbreviations[i];
		if (current_abbr.childNodes.length < 1) continue;
		var defintion = current_abbr.getAttribute("title");
		var key = current_abbr.lastChild.nodeValue;
		defs[key] = defintion;
	}

	//创建定义列表
	var dlist = document.createElement("dl");
	for (key in defs) {
		//创建定义列表标题
		var ditile = document.createElement("dt");
		var ditile_text = document.createTextNode(key);
		ditile.appendChild(ditile_text);
		//创建定义列表描述
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(defs[key]);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(ditile);
		dlist.appendChild(ddesc);
	}
	if (dlist.childNodes.length < 1) return false;
	//创建标题
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviation");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);