/**
 * The Get Device Capabilities method requests Device Capabilities details from
 * the network for a particular mobile terminal.
 * 
 * @param options
 *            It is a json that contains the access token and accept.
 * @returns json/xml list of items
 */
function getDeviceCapabilities(options)
{
	var accept="";
	if(options.accept != undefined && options.accept !=""){
		accept=options.accept;
	}else{
		accept="application/json";
	}

	if(options.accessToken.indexOf("Bearer ") == -1)
	{
		options.accessToken = 'Bearer ' + options.accessToken;
	}	
	
	var input = {
		method : "get",
		path : "rest/2/Devices/Info",
		headers : {
			"Authorization" : options.accessToken,
			"Accept" : accept,
			"X-Arg" : "ClientSdk=att.worklight.4.2"
		}
	};
	
	logInfo('********* DEVICE CAPABILITIES ADAPTER LOGS *********');
	logInfo('Input: '+com.worklight.common.js.util.JSObjectConverter.toFormattedString(input));
	
	var result = WL.Server.invokeHttp(input);
	
	logInfo('Response : '+com.worklight.common.js.util.JSObjectConverter.toFormattedString(result));
	
	return(result);
}

function logInfo(value)
{
	WL.Logger.info(value);
}
