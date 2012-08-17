var _divTable, _dataItems;

$(function () {

	_divTable = $('#divTable');

	var name = 'Get Data'
			, url = "Services/data.txt"		// in this example we just load the data from a txt file
			, data = "{}";
			
	// In this example, because we are loading the data from a txt file, we have to call $.ajax with a contentType of "text/html"
	// (note: when calling a real web service just use GetService(name, url, data, function(o) ...) and remove the following line.
	var contentType = "text/html", dataType = "json";

	//GetService(name, url, data, function (m) {
	GetServiceWithCustomContentTypeAndDataType(name, url, data, contentType, dataType, function (o) {
		//SafeLog('json data returned by service: ');
		//SafeLog(o);
		
		// since because of "text/html" we got json as a string back, we need to convert it to an object:
		// (note:, when calling a real web service of REST api you will probably get back "application/json", in which case you can remove the following line
		//o = eval('(' + o + ')');
		
		_dataItems = o.Items;
		UpdateTable();
	});
});

function UpdateTable() {
	//SafeLog('UpdateTable');

	var turl = '/jQuery/Templates/Example1Template.htm?' + Math.random();
	
	_divTable.setTemplateURL(turl);
	_divTable.processTemplate(_dataItems);

	var maxMValue = 0, maxYValue = 0, i = 0;

	for (i = 0; i < _dataItems.length; i++) {
		var mgrowth = Number(_dataItems[i].MGrowth);
		if (mgrowth > maxMValue) {
			maxMValue = mgrowth;
		}

		var ygrowth = Number(_dataItems[i].YGrowth);
		if (ygrowth > maxYValue) {
			maxYValue = ygrowth;
		}
	}

	//SafeLog('maxM/maxY: ' + maxMValue + '|' + maxYValue);
	DoMBars(maxMValue);
	DoYBars(maxYValue);
}

function DoMBars(maxValue) {
	var minValue = maxValue * -1;
	var hMbars = $('div[id^=hbarM]');

	$.each(hMbars, function () {
		var value = Number($(this).html()).toFixed(0);

		$(this).hbar({
			width: 100,
			height: 15,
			minValue: minValue,
			maxValue: maxValue,
			value: value + '%',
			numValue: value,
			displayValue: _displayValue,
			centerAligned: _centerAligned
		});
	});
}

function DoYBars(maxValue) {
	var minValue = 0; // maxValue * -1;
	var hYbars = $('div[id^=hbarY]');

	$.each(hYbars, function () {
		var value = Number($(this).html()).toFixed(0);

		$(this).hbar({
			width: 100,
			height: 15,
			minValue: minValue,
			maxValue: maxValue,
			value: value + '%',
			numValue: value,
			displayValue: _displayValue,
			centerAligned: _centerAligned
		});
	});
}