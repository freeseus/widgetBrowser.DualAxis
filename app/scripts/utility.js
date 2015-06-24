function dateToMS(da){ //dateArray
	if(da.length === 3){
		da = Date.parse(da[0] + '-' + da[1] + '-' + da[2]);
	}else if(da.length === 2){
		da = Date.parse(da[0] + '-' + da[1]);
	}else if(da.length === 1){
		da = Date.parse(da[0]);
	}else{
		console.log('the date was not properly formatted! -- utility.js');
		da = 0;
	}

	return da;
}

function moveToTop(el){
	el.parentNode.appendChild(el);
}

function injectColor(el, at, c){
	setTimeout(function(){
		el.setAttribute(at, c);
	}, 5);
}