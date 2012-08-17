var _defaultContentType = "application/json; charset=utf-8";
var _defaultDataType = "json";

function InvokeService(name, url, httpMethod, data, defaultContentType, defaultDataType, onsuccess, onfailure) {
	//SafeLog('InvokeService: ' + name + ' ' + httpMethod);
	try {
		$.ajax({
			type: httpMethod,
			url: url,
			data: data,
			contentType: defaultContentType,
			dataType: defaultDataType,
			success: function (o) {
				if (o.Error > 0) {
					alert(o.Message);
					if (onfailure) {
						onfailure();
					}
				}
				else {
					if (onsuccess) {
						onsuccess(o);
					}
				}
			},
			error: function (xhr, textStatus, errorThrown) {
				SafeLog('ajaxHelpers xhr:');
				SafeLog(xhr);
				SafeLog('ajaxHelpers textStatus:');
				SafeLog(textStatus);
				SafeLog('ajaxHelpers errorThrown:');
				SafeLog(errorThrown);
				//alert(name + ' error ' + m.Status + '|' + m.StatusText + '|' + m.responseText);
				if (onfailure) {
					SafeLog('ajaxHelpers: onfailure');
					onfailure();
				}
			}
		});
	}
	catch (e) {
		alert(name + ' exception ' + e.Description);
		if (onfailure) {
			onfailure();
		}
	}
}

function GetService(name, url, data, onsuccess, onfailure) {
	//SafeLog('CallService: ' + name);
	InvokeService(name, url, "GET", data, _defaultContentType, _defaultDataType, onsuccess, onfailure);
}

function GetServiceWithCustomContentTypeAndDataType(name, url, data, contentType, dataType, onsuccess, onfailure) {
	//SafeLog('CallService: ' + name);
	InvokeService(name, url, "GET", data, contentType, dataType, onsuccess, onfailure);
}

function PostService(name, url, data, onsuccess, onfailure) {
	//SafeLog('PostService: ' + name);
	InvokeService(name, url, "POST", data, _defaultContentType, _defaultDataType, onsuccess, onfailure);
}

function PutService(name, url, data, onsuccess, onfailure) {
	//SafeLog('PutService: ' + name);
	InvokeService(name, url, "PUT", data, _defaultContentType, _defaultDataType, onsuccess, onfailure);
}