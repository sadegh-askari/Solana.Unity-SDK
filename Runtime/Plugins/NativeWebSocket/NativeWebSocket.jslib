
var LibraryWebSocket = {
	$webSocketState: {
		/*
		 * Map of instances
		 *
		 * Instance structure:
		 * {
		 * 	url: string,
		 * 	ws: WebSocket
		 * }
		 */
		instances: {},

		/* Last instance ID */
		lastId: 0,

		/* Event listeners */
		onOpen: null,
		onMesssage: null,
		onError: null,
		onClose: null,

		/* Debug mode */
		debug: false
	},

	/**
	 * Set onOpen callback
	 *
	 * @param callback Reference to C# static function
	 */
	WebSocketSetOnOpen: function(callback) {
	},

	/**
	 * Set onMessage callback
	 *
	 * @param callback Reference to C# static function
	 */
	WebSocketSetOnMessage: function(callback) {

	},

	/**
	 * Set onError callback
	 *
	 * @param callback Reference to C# static function
	 */
	WebSocketSetOnError: function(callback) {
	},

	/**
	 * Set onClose callback
	 *
	 * @param callback Reference to C# static function
	 */
	WebSocketSetOnClose: function(callback) {

	},

	/**
	 * Allocate new WebSocket instance struct
	 *
	 * @param url Server URL
	 */
	WebSocketAllocate: function(url) {
		return 0;
	},

  /**
   * Add subprotocol to instance
   *
   * @param instanceId Instance ID
   * @param subprotocol Subprotocol name to add to instance
   */
  WebSocketAddSubProtocol: function(instanceId, subprotocol) {

  },

	/**
	 * Remove reference to WebSocket instance
	 *
	 * If socket is not closed function will close it but onClose event will not be emitted because
	 * this function should be invoked by C# WebSocket destructor.
	 *
	 * @param instanceId Instance ID
	 */
	WebSocketFree: function(instanceId) {

		return 0;

	},

	/**
	 * Connect WebSocket to the server
	 *
	 * @param instanceId Instance ID
	 */
	WebSocketConnect: function(instanceId) {

		return 0;
	},

	/**
	 * Close WebSocket connection
	 *
	 * @param instanceId Instance ID
	 * @param code Close status code
	 * @param reasonPtr Pointer to reason string
	 */
	WebSocketClose: function(instanceId, code, reasonPtr) {

		return 0;

	},

	/**
	 * Send message over WebSocket
	 *
	 * @param instanceId Instance ID
	 * @param bufferPtr Pointer to the message buffer
	 * @param length Length of the message in the buffer
	 */
	WebSocketSend: function(instanceId, bufferPtr, length) {

		return 0;
	},

	/**
	 * Send text message over WebSocket
	 *
	 * @param instanceId Instance ID
	 * @param bufferPtr Pointer to the message buffer
	 * @param length Length of the message in the buffer
	 */
	WebSocketSendText: function(instanceId, message) {

		return 0;

	},

	/**
	 * Return WebSocket readyState
	 *
	 * @param instanceId Instance ID
	 */
	WebSocketGetState: function(instanceId) {

			return 3;

	}

};

autoAddDeps(LibraryWebSocket, '$webSocketState');
mergeInto(LibraryManager.library, LibraryWebSocket);
