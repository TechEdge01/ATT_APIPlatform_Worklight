
/* JavaScript content from js/iam.js in folder common */
var params = {}, invocationData = {}, options = {};

/**
 * Function to send an SMS or MMS message via IAM
 * 
 * @param addresses
 *            Array of phone numbers, codes or email addresses to send the
 *            message to
 * @param message
 *            Text to be sent the message (optional)
 * @param subject
 *            Subject of the message (optional)
 * @param attachements
 *            Array of attachments. Each attachment is an object {
 *            name:"file.name", contentType : "image/jpeg", file: "BASE64
 *            ENCODED FILE DATA"},
 * @param cbData
 *            Success Callback Function after SMS is sent successfully
 * @param busyInd
 *            Busy indicator
 */
function invokeIamSendMessage(addresses, text, subject, attachments,
		accessToken, sendCallback) {
	params = {
		'contentType' : 'application/json',
		'accept' : 'application/json',
		// 'accessToken': window.localStorage.oAuthToken
		'accessToken' : accessToken,
		'messageRequest' : {}
	};

	params.messageRequest.addresses = addresses;
	if (exists(text))
		params.messageRequest.text = text;
	if (exists(subject))
		params.messageRequest.subject = subject;
	// if(exists(attachments)) params.attachments = attachments;

	invocationData = {
		adapter : 'IAM',
		procedure : 'sendMessage',
		parameters : [ params ]
	};
	options = {
		onSuccess : function(data) {
			//busyInd.hide();
			WL.Logger.debug("Success : Response is - " + JSON.stringify(data));
			var iamMsgId = '';

			if (data.invocationResult.messageId !== undefined) {
				iamMsgId = data.invocationResult.messageId;
			}

			sendCallback(data, iamMsgId);
		},
		onFailure : function(error) {
			//busyInd.hide();
			WL.Logger.debug("Failure : Response is - " + error);
			console.log(error);
			sendCallback(error);
		},
		invocationContext : {}
	};

	WL.Client.invokeProcedure(invocationData, options);
}

//function invokeIamGetMessageList(accessToken, getCallback) {
function invokeIamGetMessageList(accessToken, queryParams, getCallback)
{
   var params = {};
   if(queryParams!=null && queryParams !== undefined)
   {
      params = queryParams;
   }
	params.accessToken = accessToken;

	invocationData = {
		adapter : 'IAM',
		procedure : 'getMessageList',
		parameters : [ params ]
	};

	options = {
		onSuccess : function(data) {
			WL.Logger.debug("Success : Response is - " + JSON.stringify(data));
			getCallback(data);
		},
		onFailure : function(error) {
			WL.Logger.debug("Failure : Response is - " + error);
			console.log(error);
			getCallback(error);
		},
		invocationContext : {}
	};

	WL.Client.invokeProcedure(invocationData, options);
}

function invokeIamCreateMessageIndex(accessToken, invokeCallback) {
	params = {
		// 'accessToken': window.localStorage.oAuthToken
		'accessToken' : accessToken
	};

	invocationData = {
		adapter : 'IAM',
		procedure : 'createMessageIndex',
		parameters : [ params ]
	};

	options = {
		onSuccess : function(data) {
			WL.Logger.debug("Success : Response is - " + JSON.stringify(data));
			invokeCallback(data);
		},
		onFailure : function(error) {
			WL.Logger.debug("Failure : Response is - " + error);
			console.log(error);
			invokeCallback(error);
		},
		invocationContext : {}
	};

	WL.Client.invokeProcedure(invocationData, options);
}

function invokeIamGetMessageIndexInfo(accessToken, invokeCallback) {
	params = {
		// 'accessToken': window.localStorage.oAuthToken
		'accessToken' : accessToken
	};

	invocationData = {
		adapter : 'IAM',
		procedure : 'getMessageIndexInfo',
		parameters : [ params ]
	};

	options = {
		onSuccess : function(data) {
			WL.Logger.debug("Success : Response is - " + JSON.stringify(data));
			invokeCallback(data);
		},
		onFailure : function(error) {
			WL.Logger.debug("Failure : Response is - " + error);
			console.log(error);
			invokeCallback(error);
		},
		invocationContext : {}
	};

	WL.Client.invokeProcedure(invocationData, options);
}

function invokeIamGetNotificationConnectionDetails(accessToken, invokeCallback) {
	params = {
		// 'accessToken': window.localStorage.oAuthToken
		'accessToken' : accessToken
	};

	invocationData = {
		adapter : 'IMMN',
		procedure : 'getNotificationConnectionDetails',
		parameters : [ params ]
	};

	options = {
		onSuccess : function(data) {
			WL.Logger.debug("Success : Response is - " + JSON.stringify(data));
			invokeCallback(data);
		},
		onFailure : function(error) {
			WL.Logger.debug("Failure : Response is - " + error);
			console.log(error);
			invokeCallback(error);
		},
		invocationContext : {}
	};

	WL.Client.invokeProcedure(invocationData, options);
}

function invokeIamGetMessage(messageId, accessToken, invokeCallback) {
	params = {
		// 'accessToken': window.localStorage.oAuthToken
		'accessToken' : accessToken
	};

	invocationData = {
		adapter : 'IMMN',
		procedure : 'getMessage',
		parameters : [ params ]
	};

	options = {
		onSuccess : function(data) {
			WL.Logger.debug("Success : Response is - " + JSON.stringify(data));
			invokeCallback(data);
		},
		onFailure : function(error) {
			WL.Logger.debug("Failure : Response is - " + error);
			console.log(error);
			invokeCallback(error);
		},
		invocationContext : {}
	};

	WL.Client.invokeProcedure(invocationData, options);
}

function invokeIamUpdateMessage(messageId, message, accessToken,
		invokeCallback) {
	params = {
		'accessToken' : accessToken,
		'messageId' : messageId,
		'message' : message
	};

	invocationData = {
		adapter : 'IMMN',
		procedure : 'updateMessage',
		parameters : [ params ]
	};

	options = {
		onSuccess : function(data) {
			WL.Logger.debug("Success : Response is - " + JSON.stringify(data));
			invokeCallback(data);
		},
		onFailure : function(error) {
			WL.Logger.debug("Failure : Response is - " + error);
			console.log(error);
			invokeCallback(error);
		},
		invocationContext : {}
	};

	WL.Client.invokeProcedure(invocationData, options);
}

function invokeIamUpdateMessages(messageIds, messages, accessToken,
		invokeCallback) {
	params = {
		'accessToken' : accessToken,
		'messageId' : messageId,
		'message' : message
	};

	invocationData = {
		adapter : 'IMMN',
		procedure : 'updateMessages',
		parameters : [ params ]
	};

	options = {
		onSuccess : function(data) {
			WL.Logger.debug("Success : Response is - " + JSON.stringify(data));
			invokeCallback(data);
		},
		onFailure : function(error) {
			WL.Logger.debug("Failure : Response is - " + error);
			console.log(error);
			invokeCallback(error);
		},
		invocationContext : {}
	};

	WL.Client.invokeProcedure(invocationData, options);
}

function invokeIamDeleteMessage(messageId, accessToken, invokeCallback) {
	params = {
		// 'accessToken': window.localStorage.oAuthToken
		'accessToken' : accessToken,
		'messageId' : messageId
	};

	invocationData = {
		adapter : 'IMMN',
		procedure : 'deleteMessage',
		parameters : [ params ]
	};

	options = {
		onSuccess : function(data) {
			WL.Logger.debug("Success : Response is - " + JSON.stringify(data));
			invokeCallback(data);
		},
		onFailure : function(error) {
			WL.Logger.debug("Failure: Response is - " + error);
			console.log(error);
			invokeCallback(error);
		},
		invocationContext : {}
	};

	WL.Client.invokeProcedure(invocationData, accessToken, options);
}

function invokeIamDeleteMessages(messageIds, invokeCallback) {
	params = {
		// 'accessToken': window.localStorage.oAuthToken
		'accessToken' : accessToken,
		'messageIds' : messageIds
	};

	invocationData = {
		adapter : 'IMMN',
		procedure : 'deleteMessages',
		parameters : [ params ]
	};

	options = {
		onSuccess : function(data) {
			WL.Logger.debug("Success : Response is - " + JSON.stringify(data));
			invokeCallback(data);
		},
		onFailure : function(error) {
			WL.Logger.debug("Failure : Response is - " + error);
			console.log(error);
			invokeCallback(error);
		},
		invocationContext : {}
	};

	WL.Client.invokeProcedure(invocationData, options);
}

function invokeIamGetMessagePart(messageId, partId, accessToken, accessToken,
		invokeCallback) {
	params = {
		// 'accessToken': window.localStorage.oAuthToken
		'accessToken' : accessToken,
		'messageId' : messageId,
		'partId' : partId
	};

	invocationData = {
		adapter : 'IMMN',
		procedure : 'getMessagePart',
		parameters : [ params ]
	};

	options = {
		onSuccess : function(data) {
			WL.Logger.debug("Success : Response is - " + JSON.stringify(data));
			invokeCallback(data);
		},
		onFailure : function(error) {
			WL.Logger.debug("Failure : Response is - " + error);
			console.log(error);
			invokeCallback(error);
		},
		invocationContext : {}
	};

	WL.Client.invokeProcedure(invocationData, options);
}

function invokeIamGetMessageDelta(state, accessToken, invokeCallback) {
	params = {
		'accessToken' : accessToken,
		'state' : state
	};

	invocationData = {
		adapter : 'IAM',
		procedure : 'getMessagesDelta',
		parameters : [ params ]
	};

	options = {
		onSuccess : function(data) {
			WL.Logger.debug("Success : Response is - " + JSON.stringify(data));
			invokeCallback(data);
		},
		onFailure : function(error) {
			WL.Logger.debug("Failure : Response is - " + error);
			console.log(error);
			invokeCallback(error);
		},
		invocationContext : {}
	};

	WL.Client.invokeProcedure(invocationData, options);
}
