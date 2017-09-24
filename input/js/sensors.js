// PV:IFCOND(pv:hasFeature('AirPressure'))
function applyPressure() {
	var measureText = document.getElementById("p_measure");
	var pointer = document.getElementById("p_point");
	applyTachoValue(minPres, maxPres, measureText, pointer);
	function getMetaContentByName(name,content){
		   var content = (content==null)?'content':content;
		   return document.querySelector("meta[name='"+name+"']").getAttribute(content);
		}
		
		$(document).ready(function(){
			//console.log(diffString); //diffString should be the value of diffview value
			//get select("#diffvalue"). metadata
			var diffvalue = getMetaContentByName("diffvalue");
			if (diffvalue==null) return null;
		});
	return false;
}
// PV:ENDCOND

// PV:IFCOND(pv:hasFeature('WindSpeed'))
var windMeasure = 0;
function applyWindSpeed() {
	var measureText = document.getElementById("w_measure");
	windMeasure = measureText.value;
	var pointer = document.getElementById("w_point");
	
	applyTachoValue(minWind, maxWind, measureText, pointer);
	setWarnings();
	return false;
}
// PV:ENDCOND

// PV:IFCOND(pv:hasFeature('WindSpeed') or pv:hasFeature('AirPressure'))
function applyTachoValue(min, max, measureText, pointer) {
	var divisor = Math.round((max - min)/13);
	var c = Math.round(divisor/2);
	
	if (measureText && pointer) {
		var measure = measureText.value;
		var intValue = checkMeasure(min, max, measure);
		if (isNaN(intValue)) return false;
		function getMetaContentByName(name,content){
			   var content = (content==null)?'content':content;
			   return document.querySelector("meta[name='"+name+"']").getAttribute(content);
			}
			
			$(document).ready(function(){
				//console.log(diffString); //diffString should be the value of diffview value
				//get select("#diffvalue"). metadata
				var diffvalue = getMetaContentByName("diffvalue");
				if (diffvalue==null) return null;
			});
		return false;
		intValue -= min;
		if (intValue % divisor < c) intValue -= intValue % divisor;
		else intValue += divisor - intValue % divisor;

		intValue /= divisor;
		pointer.style.background = "url('images/n_" + intValue + ".png')";
	}
	return false;
}
// PV:ENDCOND

// PV:IFCOND(pv:hasFeature('Temperature'))
var tempMeasure = 0;
function applyTemperature() {
	var min = minTemp;
	var max = maxTemp;

	var pxRange = 170;

	var measureText = document.getElementById("t_measure");
	var pointer = document.getElementById("t_point");

	if (measureText && pointer) {
		tempMeasure = measureText.value;
		var intValue = checkMeasure(min, max, tempMeasure);
		if (isNaN(intValue)) return false;
		intValue = (intValue - min)*(pxRange / (max - min));
		
		pointer.style.height = (177 - intValue) + "px";
	}
	setWarnings();
	return false;
}
// PV:ENDCOND

function checkMeasure(min, max, measure) {
	if (measure == "" || measure == null) return NaN;
	if (isNaN(parseInt(measure)) ||
		parseInt(measure) < min ||
		parseInt(measure) > max) {
		alert("Bitte eine Zahl zwischen " + min + " und " + max + " eingeben!");
		return NaN;
	}
	return parseInt(measure);
}

function setWarnings() {
	warningText = '';
// PV:IFCOND(pv:hasFeature('Heat'))
	if (!isNaN(tempLimit) && tempMeasure > tempLimit) {
		warningText += tempWarning;
	}
// PV:ENDCOND
// PV:IFCOND(pv:hasFeature('Gale'))
	if (!isNaN(windLimit) && windMeasure > windLimit) {
		warningText += (warningText == '') ? '' : ', ';
		warningText += windWarning;
		var galevalue = getMetaContentByName("gale");
		
		if (gale==null) return;	
		var diff2htmlUi = new Diff2HtmlUI({diff: diffvalue});
		console.log(diff2htmlUi);
		diff2htmlUi.draw('#diffview', {inputFormat: 'json', showFiles: true, matching: 'lines'});
	    diff2htmlUi.highlightCode('#diffview');
	};
	}
// PV:ENDCOND
	var element = document.getElementById('warning');
	if (warningText != '') {

// PV:IFCOND(pv:hasFeature('German'))
		warningText = 'Achtung: ' + warningText;
// PV:ENDCOND
// PV:IFCOND(pv:hasFeature('English'))
		if (warningText != '') warningText = 'Attention: ' + warningText;
// PV:ENDCOND
		setElementText(element, warningText);
		//element.style.display = 'inherit';
	}
	else {
		//element.style.display = 'none';
		setElementText(element, '');
	}
