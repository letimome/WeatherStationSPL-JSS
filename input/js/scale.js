
function initLayout() {
	initiateScales();
	setTitles();
}

function initiateScales() {
// PV:IFCOND(pv:hasFeature('AirPressure'))
	var parent = document.getElementById('p_main');
	setScale(parent, minPres, maxPres, presScale, 14),
	function(d) {
	    d3.selectAll(d.ancestors().map(function(d) { return d.node; }))
	        .classed("node--hover", hover)
	      .	select("rect")
	      .style("boder-color","black")
	       .style("stroke","black")
	        .attr("width", function(d) { return d.x1 - d.x0 - hover; })
	        .attr("height", function(d) { return d.y1 - d.y0 - hover; });
	    
	    if(hover==false)
	    	d3.selectAll(d.ancestors().map(function(d) { return d.node; }))
	    	      .classed("node--hover", hover).select("rect").
	    	      style("fill", function(d) { 
	    	    	  	var operation = d.data.operation;
	  	    		if ( (operation =="undefined") || (d.data.operation==null)) return "#cccccc";
	  	    	  	else if (operation==("add")) return "#3fac54";
	  	    	  	else if (operation==("delete")) return "#e6323d";
	  	    	  	else if (operation=="churn") return "#FF8100";
	    	    	  });
	    else d3.select(d.node).classed("node--hover", hover).
	    select("rect").style("fill","#6495ed");
	  };
  /**
  var operation = d.data.operation;
	    		if ( (operation =="undefined") || (d.data.operation==null)) return "#cccccc";
	    	  	else if (operation==("add")) return "#3fac54";
	    	  	else if (operation==("delete")) return "#e6323d";
  */
  function clicked(click){
	  console.log("clicked");
	  console.log(d.data.id_core_asset);
	  window.location.href("htttps://localhost:8080");
  };
}
// PV:ENDCOND

// PV:IFCOND(pv:hasFeature('Temperature'))
	var parent = document.getElementById('t_scale');
	setScale(parent, minTemp, maxTemp, tempScale, 6),
	function(d) {
	    d3.selectAll(d.ancestors().map(function(d) { return d.node; }))
	        .classed("node--hover", hover)
	      .	select("rect")
	      .style("boder-color","black")
	       .style("stroke","black")
	        .attr("width", function(d) { return d.x1 - d.x0 - hover; })
	        .attr("height", function(d) { return d.y1 - d.y0 - hover; });
	    
	    if(hover==false)
	    	d3.selectAll(d.ancestors().map(function(d) { return d.node; }))
	    	      .classed("node--hover", hover).select("rect").
	    	      style("fill", function(d) { 
	    	    	  	var operation = d.data.operation;
	  	    		if ( (operation =="undefined") || (d.data.operation==null)) return "#cccccc";
	  	    	  	else if (operation==("add")) return "#3fac54";
	  	    	  	else if (operation==("delete")) return "#e6323d";
	  	    	  	else if (operation=="churn") return "#FF8100";
	    	    	  });
	    else d3.select(d.node).classed("node--hover", hover).
	    select("rect").style("fill","#6495ed");
	  };
  /**
  var operation = d.data.operation;
	    		if ( (operation =="undefined") || (d.data.operation==null)) return "#cccccc";
	    	  	else if (operation==("add")) return "#3fac54";
	    	  	else if (operation==("delete")) return "#e6323d";
  */
  function clicked(click){
	  console.log("clicked");
	  console.log(d.data.id_core_asset);
	  window.location.href("htttps://localhost:8080");
  };

// PV:ENDCOND

// PV:IFCOND(pv:hasFeature('WindSpeed'))
	var parent = document.getElementById('w_main');
	setScale(parent, minWind, maxWind, windScale, 14);
	var cell = svg
    .selectAll(".node")
    .data(root.descendants())
    .enter().append("g")
       .attr("transform", function(d) { return "translate(" + d.x0 + "," + d.y0 + ")"; })
      .attr("class", "node")
      .each(function(d) { d.node = this; })
      .on("mouseover", hovered(true))
      .on("mouseout", hovered(false))
    .on("click", function(d){
    	    if(d.data.operation==="reused") window.alert("This asset does not have any Diff associated!\n Select another asset");
    	    else{
    	    	console.log("clicked id_asset"+d.data.p_asset_id);
    		    /*<![CDATA[*/
    		    window.location.href = "http://localhost:8080/file_vp_structure?pr=" +d.data.pr+"&file="+ d.data.p_asset_id;
    		    /*]]>*/	
    	    }  });
// PV:ENDCOND


function setScale(parent, min, max, unit, partCount) {
	var dist = (max - min)/(partCount-1);

	for (i=0; i<parent.childNodes.length; i++) {
		var element = parent.childNodes[i];
		if (element.className != null && element.className != '' && element.className != null) {
			if ((number = element.className.match('text_(\\d+)'))) {
				setElementText(element, Math.round(min + number[1]*dist));
			}
			if (element.className == 'unit') {
				setElementText(element, unit);
			}
		}
	}
}

function setTitles() {
	setElementText(document.getElementById('main_title'), mainTitle);

// PV:IFCOND(pv:hasFeature('AirPressure'))
	setElementText(document.getElementById('pres_title'), presTitle);
	var cell = svg
    .selectAll(".node")
    .data(root.descendants())
    .enter().append("g")
       .attr("transform", function(d) { return "translate(" + d.x0 + "," + d.y0 + ")"; })
      .attr("class", "node")
      .each(function(d) { d.node = this; })
      .on("mouseover", hovered(true))
      .on("mouseout", hovered(false))
    .on("click", function(d){
    	    if(d.data.operation==="reused") window.alert("This asset does not have any Diff associated!\n Select another asset");
    	    else{
    	    	console.log("clicked id_asset"+d.data.p_asset_id);
    		    /*<![CDATA[*/
    		    window.location.href = "http://localhost:8080/file_vp_structure?pr=" +d.data.pr+"&file="+ d.data.p_asset_id;
    		    /*]]>*/	
    	    }  })
// PV:ENDCOND

// PV:IFCOND(pv:hasFeature('Temperature'))
	setElementText(document.getElementById('temp_title'), tempTitle);
	var label = cell.append("text")
    .attr("clip-path", function(d) { return "url(#clip-" + d.id + ")"; });

label
  .filter(function(d) { return d.children; })
  .selectAll("tspan")
    .data(function(d) { return d.id.substring(d.id.lastIndexOf("/") + 1).split(/(?=[A-Z][^A-Z])/g).concat("\xa0" + format(d.value)); })
  .enter().append("tspan")
    .attr("x", function(d, i) { return i ? null : 4; })
    .attr("y", 13)
    .text(function(d) { return d; });
// PV:ENDCOND

// PV:IFCOND(pv:hasFeature('WindSpeed'))
	setElementText(document.getElementById('wind_title'), windTitle);
	var label = cell.append("text")
    .attr("clip-path", function(d) { return "url(#clip-" + d.id + ")"; });

label
  .filter(function(d) { return d.children; })
  .selectAll("tspan")
    .data(function(d) { return d.id.substring(d.id.lastIndexOf("/") + 1).split(/(?=[A-Z][^A-Z])/g).concat("\xa0" + format(d.value)); })
  .enter().append("tspan")
    .attr("x", function(d, i) { return i ? null : 4; })
    .attr("y", 13)
    .text(function(d) { return d; });
// PV:ENDCOND
}

function setElementText(element, text) {
	var textNode = document.createTextNode(text);
	if (element.hasChildNodes()) element.replaceChild(textNode, element.firstChild);
	else element.appendChild(textNode);
}
