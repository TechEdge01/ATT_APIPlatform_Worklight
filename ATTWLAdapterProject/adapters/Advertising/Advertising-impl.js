var baseEndPoint='rest/1/';

/**
 * The Get Ads method obtains an advertisement to display in an application
 * @param options
 * Options:
 * accessToken
 * contentType
 * Udid
 * queryParameters:
 *    Category (Required)
 *    Gender
 *    ZipCode
 *    AreaCode
 *    City
 *    Country
 *    Longitude
 *    Latitude
 *    MaxHeight
 *    MaxWidth
 *    MinHeight
 *    MinWidth
 *    Type
 *    Timeout
 *    AgeGroup
 *    Over18
 *    Keywords
 *    IsSizeRequired
 *    Premium
 */
function getAds(options)
{
	var clientRequest = WL.Server.getClientRequest();
	var userAgent = clientRequest.getHeader("User-Agent");
	
	if(options.accessToken.indexOf("Bearer ") == -1)
	{
		options.accessToken = 'Bearer ' + options.accessToken;
	}
	
	var input = {
		method :'get',
		path : baseEndPoint+'ads',
		parameters : options.queryParameters,
		headers: {
			'Authorization': options.accessToken,
			"Udid": WL.Server.configuration["apiKey"],
			"User-Agent" : userAgent
		}
	};
	
	if(options.accept!==undefined)
	{
		input.headers.Accept=options.accept;
	}
	logInfo('********* Get Advertising ***********');
	logInfo('Input : '+com.worklight.server.integration.api.JSObjectConverter.toFormattedString(input));
	
	var result=WL.Server.invokeHttp(input);
	
	logInfo('Ads Response : '+com.worklight.server.integration.api.JSObjectConverter.toFormattedString(result));
	return result;
}

function logInfo(value) {
	WL.Logger.debug(value);
}