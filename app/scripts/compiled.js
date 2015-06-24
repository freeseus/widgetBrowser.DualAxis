function dateToMS(a){
	return 3===a.length?a=Date.parse(a[0]+"-"+a[1]+"-"+a[2]):2===a.length?a=Date.parse(a[0]+"-"+a[1]):1===a.length?a=Date.parse(a[0]):(console.log("the date was not properly formatted! -- utility.js"),a=0),a
}

function moveToTop(a){
	a.parentNode.appendChild(a)
}

function injectColor(a,b,c){
	setTimeout(function(){
		a.setAttribute(b,c)
	},5)
}

function processData(a,b,c){
	function d(){
		for(var d=[],e=[],f={},h=dateToMS(String(b.settings.startdate).split("-")),i=dateToMS(String(b.settings.enddate).split("-")),j=0;j<b.data.length;j++)b.data.index=j,dateToMS(b.data[j].date.split("-"))>=h&&dateToMS(b.data[j].date.split("-"))<=i&&(f[b.data[j].series]?f[b.data[j].series].push(b.data[j]):f[b.data[j].series]=[b.data[j]],b.data[j].image&&b.preload.append(-1===b.data[j].image.indexOf("http://")?'<img src="images/'+b.data[j].image+'"></img>':'<img src="'+b.data[j].image+'"></img>'));b.dataMap={

};for(var k in f)b.seriesMap[k]&&(e.push(f[k]),b.dataMap[k]=f[k]);for(j=0;j<e.length;j++){
var l=g();l.name=b.seriesMap[e[j][0].series].name,l.yAxis=j+1,l.cursor="pointer",l.point={

},l.point.events={
click:function(){
var a="";
for(var c in b.seriesMap)if(b.seriesMap[b.dataMap[c][0].series].name===this.series.name){
	for(var d=0;d<b.dataMap[b.dataMap[c][0].series].length;d++)if(dateToMS(b.dataMap[b.dataMap[c][0].series][d].date.split("-"))===this.x&&b.dataMap[b.dataMap[c][0].series][d].value===this.y){
		a=b.dataMap[b.dataMap[c][0].series][d],b.settings.eventarticles===!0&&a.article?window.open(a.article,"_blank"):a.article;break
	}
	break
}
},mouseOver:function(){
var b=this.graphic.element.getAttribute("fill"),d=this.graphic.element.getAttribute("stroke");for(moveToTop(this.graphic.element),moveToTop(this.graphic.element.parentNode),this.graphic.element.getAttribute("fill-original")?0:this.graphic.element.setAttribute("fill-original",b),this.graphic.element.getAttribute("stroke-original")?0:this.graphic.element.setAttribute("stroke-original",d),d=this.graphic.element.getAttribute("stroke-original"),injectColor(this.graphic.element,"fill",d),injectColor(this.graphic.element,"stroke","#fff1e0"),m=0;m<a.length;m++)c.find(".highcharts-markers.highcharts-tracker:eq("+m+")").css("opacity",0),c.find("svg path:eq("+m+")").css("opacity",0)
},mouseOut:function(){
for(var b=0;b<a.length;b++)c.find(".highcharts-markers.highcharts-tracker:eq("+b+")").css("opacity",1),c.find("svg path:eq("+b+")").css("opacity",1);var d=this.graphic.element.getAttribute("fill-original"),e=this.graphic.element.getAttribute("stroke-original");injectColor(this.graphic.element,"fill",d),injectColor(this.graphic.element,"stroke",e)
}
},l.data=[];for(var m=0;m<e[j].length;m++)l.data.push([dateToMS(e[j][m].date.split("-")),e[j][m].value]);d.push(l)
}	return d.length>0?d:[]
}
function e(){
for(var c,e=[],g=0;g<a.length;g++){
var h=f(g);h.name=b.series[g].name,h.yAxis=g+1,h.data=[];for(var i=0;i<a[g].observations.length;i++)a[g].observations[i].value&&"."!==a[g].observations[i].value&&h.data.push([dateToMS(a[g].observations[i].date.split("-")),Number(a[g].observations[i].value)]);e.push(h)
}for(c=d(),g=0;g<c.length;g++)e.push(c[g]);	return e
}
function f(z){
var a={
animation:!1,type:org.series[z].type,lineWidth:2,marker:{
enabled:!0,radius:0,lineColor:null,fillColor:null,symbol:"circle",states:{
hover:{
radius:5,fillColor:"#fff1e0",lineColor:null,lineWidth:2,shadow:!1,halo:{
size:15
}
}
}
},states:{
hover:{
enabled:!0,lineWidth:2,halo:{
size:15
}
}
}
};	return a
}
function g(){
var a={
animation:!1,type:"scatter",lineWidth:0,marker:{
enabled:!0,radius:8,fillColor:"#fff1e0",lineColor:null,lineWidth:2,symbol:"circle",states:{
hover:{
radius:8,lineWidth:4
}
}
},shadow:!0,states:{
hover:{
enabled:!0,lineWidth:2,halo:{
size:12,opacity:1
}
}
},showInLegend:!1
};	return a
}
function h(){
c.find(".highcharts-axis:eq(3)").children().attr("stroke-dasharray","1,1"),c.find(".highcharts-axis:eq(3)").children("path:last-child").attr("stroke-dasharray","").css("stroke","#74736c").attr("stroke-opacity",1);try{
var a={

};a.el=c.find(".highcharts-legend-item:eq(1)"),a.y=Number(a.el.attr("transform").split(",")[1].split(")").join("")),a.el.attr("transform","translate("+(c.find("svg").width()-a.el[0].getBBox().width-10)+","+a.y+")")
}catch(b){

}
}c.highcharts({
chart:{
zoomType:"none",backgroundColor:"none",borderWidth:0,plotBackgroundColor:"none",plotShadow:!1,plotBorderWidth:0,spacingRight:4,spacingLeft:5,spacingBottom:25,events:{
redraw:function(){
h()
}
}
},title:{
text:b.settings&&b.settings.title?b.settings.title:null,align:"left",floating:!1,x:0,y:10,margin:45,style:{
color:"#74736c",font:"18px BentonSans, Arial, Helvetica, sans-serif",fontFamily:"BentonSans",fontSize:"18px",fontWeight:"normal"
}
},subtitle:{
text:null,floating:!1,align:"left",x:0,y:25,style:{
color:"#74736c",font:"12px BentonSans, Arial, Helvetica, sans-serif",fontFamily:"BentonSans",fontSize:"12px"
}
},xAxis:{
type:"datetime",dateTimeLabelFormats: {
            month: '%b' + " '" + '%y',
			week: '%b %e',
			day: '%b %e',
			hour: '%l %P',
			minute: '%l:%M %P'
            },lineColor:"#74736c",lineWidth:1,tickColor:"#74736c",minPadding:0.01,maxPadding:250/c.width()/15,tickLength:-10,tickPosition:"inside",labels:{
x:-2,y:25,style:{
color:"#74736c",font:"12px BentonSans, Arial, Helvetica, sans-serif",fontFamily:"BentonSans",fontSize:"12px"
}
}
},yAxis:[
	{
		title:null,
		startOnTick:!0,
		gridLineColor:"rgba(0,0,0,0)",
		min:null,
		labels:{
			align:"left",
			x:0,
			y:-2,
			style:{
				color:"#74736c",
				font:"12px BentonSans, Arial, Helvetica, sans-serif",
				fontFamily:"BentonSans",
				fontSize:"12px"
			}
		}
	},
	{ //LEFT Yaxis
		title:null,
		min: additionalSettings.minYLeftOverride,
		max: additionalSettings.maxYLeftOverride, 
		tickColor:"rgba(0,0,0,0.15)",
		gridLineColor:"rgba(0,0,0,0.15)",
		gridLineDashStyle:"ShortDot",
		labels:{
			align:"left",
			x:0,
			y:-2,
			style:{
				color:"#74736c",
				font:"12px BentonSans, Arial, Helvetica, sans-serif",
				fontFamily:"BentonSans",
				fontSize:"12px"
			}
		}
	},
	{ //RIGHT Yaxis
		title:null,
		min: additionalSettings.minYRightOverride,
		max: additionalSettings.maxYRightOverride,
		startOnTick:!0,
		offset:0,
		tickLength:-12,
		tickWidth:1,
		endOnTick:!1,
		tickColor:"rgba(0,0,0,0.15)",
		gridLineColor:"rgba(0,0,0,0)",
		tickPosition:"inside",
		
		labels:{
			align:"left",
			x:-10,
			y:-2,
			style:{
				color:"#74736c",
				font:"12px BentonSans, Arial, Helvetica, sans-serif",
				fontFamily:"BentonSans",
				fontSize:"12px"
			}
		},opposite:!0
	}
],
plotOptions:{
line:{
shadow:!1,lineWidth:3,series:{
animation:{
enabled:!1
},shadow:!1
},events:{
legendItemClick:function(){
	return!1
}
}
}
},colors:b.colorsArray,tooltip:{
enabled:!0,useHTML:!0,formatter:function(){
var a,d,e,f="";if(c.find(".highcharts-tooltip").removeClass("long"),this.points)f='<div style="font-size:11px; padding-bottom:4px; margin-bottom:4px; border-bottom: 1px solid #e6e2db">'+Highcharts.dateFormat("%B %e, %Y",this.x)+"</div>",$.each(this.points,function(){
f+='<span style="color:'+this.series.color+'">● </span>'+this.series.name+": <b>"+this.y+"</b><br/>"
});else{
for(var g in b.seriesMap)if(b.seriesMap[b.dataMap[g][0].series].name===this.series.name){
for(var h=0;h<b.dataMap[b.dataMap[g][0].series].length;h++)if(dateToMS(b.dataMap[b.dataMap[g][0].series][h].date.split("-"))===this.x&&b.dataMap[b.dataMap[g][0].series][h].value===this.y){
a=b.dataMap[b.dataMap[g][0].series][h];break
}break
}d=a.date.split("-"),d=3===d.length?"%B %e, %Y":2===d.length?"%B, %Y":"%Y",b.settings.eventnames===!0&&(f+='<div style="font-size:12px;">'+a.name+"</div>"),f+='<div style="font-size:11px; padding-bottom:4px; margin-bottom:4px; [BORDERBOTTOM]">'+Highcharts.dateFormat(d,this.x)+"</div>",e=a.image,e?(-1===a.image.indexOf("http://")&&(e="images/"+a.image),f+='<img src="'+e+'"></img>',f=f.split("[BORDERBOTTOM]").join("")):f=f.split("[BORDERBOTTOM]").join("border-bottom: 1px solid #e6e2db"),f+='<span style="white-space:">'+a.text+"</span>",a.text.length>20&&c.find(".highcharts-tooltip").addClass("long")
}	return f
},style:{
color:"#333",font:"12px BentonSans, Arial, Helvetica, sans-serif",fontFamily:"BentonSans",fontSize:"12px"
},backgroundColor:"#fff",borderColor:"#333",borderRadius:4,borderWidth:0,shadow:!0,shared:!0,crosshairs:[{
width:1.5,dashStyle:"solid",color:"rgba(0,0,0,0.15)"
},!1]
},legend:{
enabled:!0,layout:"horizontal",backgroundColor:"rgba(255,241,224,0)",borderColor:"rgba(0,0,0,0)",align:"left",verticalAlign:"top",floating:!0,shadow:!1,borderRadius:0,borderWidth:1,x:0,y:25,padding:0,itemMarginTop:0,itemMarginBottom:0,itemDistance:10,itemStyle:{
lineHeight:"14px",font:"12px BentonSans, Arial, Helvetica, sans-serif",fontFamily:"BentonSans",fontSize:"12px",fontWeight: 'normal',color:"#74736c"
},itemHiddenStyle:{
color:"rgba(0,0,0,0.15)"
},itemHoverStyle:{
color:null
}
},credits:{
			enabled: true,
			text: b.settings.source ? 'Sources: ' + b.settings.source : 'Sources: FRED® Economic Data',
			href: null, //urlData.sourceurl <--- this won't work open in a new window
			position: {
				align: 'left',
				x: 2,
				verticalAlign: 'bottom',
			},
			style:{
				color: '#74736c',
				font: '10px BentonSans, Arial, Helvetica, sans-serif',
				fontStyle: 'normal',
				fontFamily: 'BentonSans',
				fontSize: '10px'
			}
		},series:e()
},function(){
h()
})
}
$(function(){
	function a(){
		console.log("the bertha spreadsheet was not retrieved");
		$('#loading').html('Spreadsheet not found. Is the Bertha spreadsheet key correct?<br><br>URL should look like: <span class="selectable">http://editorial.ft.com/widgets/dualAxis/?#0AksTHVCen_U-dDgxakJGQlJDSXp5TnprN2tQdW9nNFE</span>');
	}
	function b(){
		$.getJSON(h.bertha.fresh+h.key+"/"+h.worksheets.join(",").split(" ").join(""),function(a){


			//console.log(a);


		h.data=a.events,h.settings=a.settings[0],h.series=a.series,h.seriesMap={};
		for(var b=0;b<h.series.length;b++)h.series[b].fredseries&&h.series[b].name&&h.series[b].color&&(i.series.push(h.series[b].fredseries),h.colorsArray.push(h.series[b].color),h.seriesMap[h.series[b].fredseries]=h.series[b]);h.settings.startdate?0:h.settings.startdate="1800",Number(h.settings.startdate)<1800?preadsheet.settings.startdate="1800":0,h.settings.enddate?0:h.settings.enddate="9999",i.url=i.url.split("[STARTDATE]").join(d(String(h.settings.startdate))).split("[ENDDATE]").join(d(String(h.settings.enddate))),i.series.length>=1?c(i.series): a && a.series && a.series.length > 0 && a.series[0].series1 && a.series[0].series2 ? q(a) : alert("No series to graph")
		}).fail(a)
	}

	function q(a){

		//console.log('ben', a);

		i.seriesData = [];
		h.series = [];

		for(var x = 0; x < a.series.length; x++){
			if(x === 0){
				i.seriesData.push({count:a.series.length, observations:[]},{count:a.series.length, observations:[]});

				//console.log(a.series[x]);

				h.colorsArray.push(a.series[x].color1, a.series[x].color2);
				h.series.push({color:a.series[x].color1, fredseries:a.series[x].series1, name:a.series[x].name1, type:a.series[x].type1}, {color:a.series[x].color2, fredseries:a.series[x].series2, name:a.series[x].name2, type:a.series[x].type2});
			
				h.seriesMap[a.series[x].series1] = h.series[0];
				h.seriesMap[a.series[x].series2] = h.series[1];
			}

			i.seriesData[0].observations.push({date:a.series[x].dates1, value:a.series[x].values1});
			i.seriesData[1].observations.push({date:a.series[x].dates2, value:a.series[x].values2});

			//console.log(a.series[x]);
		}

		console.log(i.seriesData);
		console.log(h);

		processData(i.seriesData, h, g);
	}

	function c(a){
		function b(b){
			i.seriesData.push(b),i.seriesData.length===a.length?processData(i.seriesData,h,g):c()

			if(i.seriesData.length===a.length){
				console.log(i.seriesData);
				console.log(h);
				$('#loading').remove();
			}
		}
		function c(){
			$.getJSON(i.url.split("[SERIES]").join(a[i.seriesData.length]),b).fail(c)
		}

		//console.log(a);

		c();
	}

	function d(a){
		if(a.length>0){
		if(a=a.split("-"),3===a.length&&4===a[0].length&&2===a[1].length&&2===a[2].length);else if(2===a.length&&4===a[0].length&&2===a[1].length)a.push("01");else{
		if(1!==a.length||4!==a[0].length)	return alert('Date is malformed.\n\nTry "2012-04-15" or "2012-04" or "2012"'),"";a.push("01","01")
		}a=a.join("-")
		}	return a
	}

	function e(){
		f.addClass("active")
	}

	var f=$("#main"),g=$("#chart"),h={};
		h.keyAll = document.URL.slice(document.URL.indexOf('?#') + 2, document.URL.length);
		h.key = h.keyAll.split('&')[0]; //"0AksTHVCen_U-dHN3RkNSdWVYZjZZaEU1QldIbW45elE",
		
		console.log(h.key);

		h.bertha={fresh:"http://bertha.ig.ft.com/republish/publish/gss/",cached:"http://bertha.ig.ft.com/view/publish/gss/"},
		h.worksheets=["settings","series","events"],
		h.colorsArray=[],
		h.colorsBackup=["#c36256","#75a5c2","#eda45e","#a6a471","#736e7e","#94826b","#936971","#819e9a","#c1b8b4","#eed485"],
		h.preload=$("#preload");

	org = h;

	var i={};
		i.proxy="http://jsonp.herokuapp.com/?url=",
		i.key="147e280bf158656f15b498dcf66aac3f",
		i.series=[],
		i.seriesData=[],
		i.url=i.proxy+encodeURIComponent("http://api.stlouisfed.org/fred/series/observations?series_id=")+"[SERIES]"+encodeURIComponent("&api_key="+i.key+"&file_type=json&")+"observation_start=[STARTDATE]"+encodeURIComponent("&")+"observation_end=[ENDDATE]",b(),e()

	var arr = h.keyAll.split('&');

	for(var j = 0; j < arr.length; j++){
		if(arr[j].indexOf('y0m1i2n3l4e5f6t7') > -1){
			if(arr[j].split('y0m1i2n3l4e5f6t7').join('').substring(1) === '0' || Number(arr[j].split('y0m1i2n3l4e5f6t7').join('').substring(1)) !== 0){
				additionalSettings.minYLeftOverride = Number(arr[j].split('y0m1i2n3l4e5f6t7').join('').substring(1));
			}else{
				additionalSettings.minYLeftOverride = null;
			}
		}else if(arr[j].indexOf('y0m1a2x3l4e5f6t7') > -1){
			if(arr[j].split('y0m1a2x3l4e5f6t7').join('').substring(1) === '0' || Number(arr[j].split('y0m1a2x3l4e5f6t7').join('').substring(1)) !== 0){
				additionalSettings.maxYLeftOverride = Number(arr[j].split('y0m1a2x3l4e5f6t7').join('').substring(1));
			}else{
				additionalSettings.maxYLeftOverride = null;
			}
		}else if(arr[j].indexOf('y0m1i2n3r4i5g6h7t8') > -1){
			if(arr[j].split('y0m1i2n3r4i5g6h7t8').join('').substring(1) === '0' || Number(arr[j].split('y0m1i2n3r4i5g6h7t8').join('').substring(1)) !== 0){
				additionalSettings.minYRightOverride = Number(arr[j].split('y0m1i2n3r4i5g6h7t8').join('').substring(1));
			}else{
				additionalSettings.minYRightOverride = null;
			}
		}else if(arr[j].indexOf('y0m1a2x3r4i5g6h7t8') > -1){
			if(arr[j].split('y0m1a2x3r4i5g6h7t8').join('').substring(1) === '0' || Number(arr[j].split('y0m1a2x3r4i5g6h7t8').join('').substring(1)) !== 0){
				additionalSettings.maxYRightOverride = Number(arr[j].split('y0m1a2x3r4i5g6h7t8').join('').substring(1));
			}else{
				additionalSettings.maxYRightOverride = null;
			}
		}
	}

	console.log(additionalSettings);

	if(additionalSettings.minYLeftOverride === additionalSettings.maxYLeftOverride && additionalSettings.minYLeftOverride === null || additionalSettings.minYRightOverride === additionalSettings.maxYRightOverride && additionalSettings.minYRightOverride === null){
		console.log('values were not set');
	}else{
		if(additionalSettings.minYLeftOverride >= additionalSettings.maxYLeftOverride){
			alert('Min Y left value must be < Max Y left value \n\n (Attempting to build graph without them)');
			additionalSettings.minYLeftOverride = null;
			additionalSettings.maxYLeftOverride = null;
		}else if(additionalSettings.minYRightOverride >= additionalSettings.maxYRightOverride){
			alert('Min Y right value must be < Max Y right value \n\n (Attempting to build graph without them)');
			additionalSettings.minYRightOverride = null;
			additionalSettings.maxYRightOverride = null;
		}
	}

	//console.log(additionalSettings);
});

var org;
var additionalSettings = {minYLeftOverride: null, maxYLeftOverride: null, minYRightOverride: null, maxYRightOverride: null};