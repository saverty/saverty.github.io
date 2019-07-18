if (self.CavalryLogger) { CavalryLogger.start_js(["MT4X1"]); }

__d("RealtimeRequestStreamWebClientTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:RealtimeRequestStreamWebClientLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:RealtimeRequestStreamWebClientLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:RealtimeRequestStreamWebClientLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setClientSessionID=function(a){this.$1.client_session_id=a;return this};c.setClientTimeMs=function(a){this.$1.client_time_ms=a;return this};c.setMessage=function(a){this.$1.message=a;return this};c.setSeverity=function(a){this.$1.severity=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setUserFbid=function(a){this.$1.user_fbid=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={client_session_id:!0,client_time_ms:!0,message:!0,severity:!0,time:!0,user_fbid:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("XHPTemplate",["DataStore","DOM","HTML","XHPTemplateProcessor"],(function(a,b,c,d,e,f){__p&&__p();var g=b("XHPTemplateProcessor").processor;a=function(){"use strict";__p&&__p();function a(a){g instanceof Function&&(a=g(a)),this._model=a}var c=a.prototype;c.render=function(){b("HTML").isHTML(this._model)&&(this._model=b("DOM").setContent(document.createDocumentFragment(),this._model)[0]);return this._model.cloneNode(!0)};c.build=function(){return new h(this.render())};a.getNode=function(b,c){return a.getNodes(b)[c]};a.getNodes=function(a){__p&&__p();var c=b("DataStore").get(a,"XHPTemplate:nodes");if(!c){c={};var d=b("DOM").scry(a,"[data-jsid]");d.push(a);var e=d.length;while(e--){var f=d[e];c[f.getAttribute("data-jsid")]=f;f.removeAttribute("data-jsid")}b("DataStore").set(a,"XHPTemplate:nodes",c)}return c};return a}();var h=function(){"use strict";__p&&__p();function a(a){this._root=a,this._populateNodes()}var c=a.prototype;c._populateNodes=function(){this._nodes={};this._leaves={};var a=this._root.getElementsByTagName("*");for(var b=0,c=a.length;b<c;b++){var d=a[b],e=d.getAttribute("data-jsid");e&&(d.removeAttribute("data-jsid"),this._nodes[e]=d,this._leaves[e]=!d.childNodes.length)}};c.getRoot=function(){return this._root};c.getNode=function(a){return this._nodes[a]};c.setNodeProperty=function(a,b,c){this.getNode(a)[b]=c;return this};c.setNodeContent=function(a,c){if(!this._leaves[a])throw new Error("Can't setContent on non-leaf node: "+a);b("DOM").setContent(this.getNode(a),c);return this};return a}();e.exports=a}),null);
__d("BladeRunnerConfig",["RTISubscriptionManagerConfig","nullthrows"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(){}var c=a.prototype;c.patchRequestHeaders=function(a){var c={},d=b("RTISubscriptionManagerConfig").bladerunner_www_sandbox;if(d!=null){var e=b("nullthrows")(a.method);e.startsWith("FBLQ:")||(c["javascript-sandbox"]=d)}for(var f in a)c[f]=a[f];return c};return a}();c=new a();e.exports=c}),null);
__d("BladeRunnerLogger",["BanzaiODS","CurrentUser","FBLogger","RealtimeRequestStreamWebClientTypedLogger","gkx"],(function(a,b,c,d,e,f){__p&&__p();var g="bladerunner_js_client",h={info:"info",warning:"warning",exception:"exception"};a=function(){"use strict";__p&&__p();function a(){this.$1=this.$4(),this.setFBLoggerLevel(1)}var c=a.prototype;c.info=function(a){this.$3>=2&&b("FBLogger")(g).info(a),this.$5(h.info,a)};c.warn=function(a){this.$3>=1&&b("FBLogger")(g).warn(a),this.$5(h.warning,a)};c.exception=function(a,c){c===void 0&&(c="");c=c+" "+a.toString();this.$3>=0&&b("FBLogger")(g).warn(c);this.$5(h.exception,c)};c.trimForLogging=function(a){var b=1024;return typeof a==="string"&&a.length>b?"[trimmed]:"+a.substring(0,b)+"...":a};c.bumpCounter=function(a,c){c===void 0&&(c=1),b("BanzaiODS").bumpEntityKey(2966,"BladeRunnerClient",a,c)};c.setClientSessionId=function(a){this.$2=a};c.setFBLoggerLevel=function(a){this.$3=a};c.$5=function(a,c){if(this.$1){a=new(b("RealtimeRequestStreamWebClientTypedLogger"))().setClientTimeMs(Date.now()).setSeverity(a).setMessage(this.trimForLogging(c)).setClientSessionID(this.$2).setUserFbid(b("CurrentUser").getID());a.log()}};c.$4=function(){return b("gkx")("676834")};return a}();c=new a();e.exports=c}),null);
__d("BladeRunnerTypesInternal",["Base64","BladeRunnerLogger","BladeRunnerTypes"],(function(a,b,c,d,e,f){__p&&__p();var g=function(){"use strict";__p&&__p();function a(){}var b=a.prototype;b.getHeaders=function(){if(this.headers!=null)return this.headers;throw new Error("Expected headers")};a.readObject=function(b){var c=new a();c.streamId=n(b.streamId);c.requestType=n(b.requestType);c.payload=q(b.payload);c.headers=t(b.headers);c.extraHeader=q(b.extraHeader);c.requestTarget=q(b.requestTarget);return c};return a}(),h=function(){"use strict";__p&&__p();function a(){}a.readObject=function(b){var c=new a();c.streamId=n(b.streamId);c.dataId=o(b.dataId);c.data=q(b.data);c.shouldAck=v(b.shouldAck);return c};var c=a.prototype;c.decodeData=function(){if(this.data==null)throw new Error("Expected data");return b("Base64").decode(this.data)};c.setData=function(a){this.data=b("Base64").encode(a)};return a}(),i=function(){"use strict";__p&&__p();function a(){}a.readObject=function(b){var c=new a();c.streamId=n(b.streamId);c.dataId=n(b.dataId);c.success=u(b.success);c.message=q(b.message);c.code=o(b.code);return c};return a}();i.ACK_CODE_LANDED_AND_ACCEPTED=20;i.ACK_CODE_LANDED_BUT_NOT_ACCEPTED=21;i.ACK_CODE_FAILED_TO_LAND=50;var j=function(){"use strict";function a(){}a.readObject=function(b){var c=new a();c.streamId=o(b.streamId);c.message=q(b.message);return c};return a}(),k=function(){"use strict";__p&&__p();function a(){}a.readObject=function(b){var c=new a();c.streamId=n(b.streamId);c.status=n(b.status);c.message=q(b.message);c.code=o(b.code);c.shouldRetry=v(b.shouldRetry);c.retryDelayMs=o(b.retryDelayMs);return c};return a}(),l=function(){"use strict";__p&&__p();function a(){}a.readObject=function(b){var c=new a();c.streamId=n(b.streamId);c.newBody=q(b.newBody);c.newExtraHeader=q(b.newExtraHeader);c.patchExtraHeader=q(b.patchExtraHeader);c.killBody=v(b.killBody);c.temporary=v(b.temporary);return c};return a}(),m=function(){"use strict";__p&&__p();function a(){}var c=a.prototype;c.getRequest=function(){if(this.type==b("BladeRunnerTypes").StreamFrameType.REQUEST&&this.request!=null)return this.request;throw new Error("Expected request")};c.getData=function(){if(this.type==b("BladeRunnerTypes").StreamFrameType.DATA&&this.data!=null)return this.data;throw new Error("Expected data")};c.getDataAck=function(){if(this.type==b("BladeRunnerTypes").StreamFrameType.DATA_ACK&&this.dataAck!=null)return this.dataAck;throw new Error("Expected dataAck")};c.getStatusUpdate=function(){if(this.type==b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE&&this.statusUpdate!=null)return this.statusUpdate;throw new Error("Expected status update")};c.getLog=function(){if(this.type==b("BladeRunnerTypes").StreamFrameType.LOG&&this.log!=null)return this.log;throw new Error("Expected log")};c.getRewriteRequest=function(){if(this.type==b("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST&&this.rewriteRequest!=null)return this.rewriteRequest;throw new Error("Expected rewrite request")};c.getStreamId=function(){__p&&__p();if(this.type==b("BladeRunnerTypes").StreamFrameType.REQUEST&&this.request!=null)return this.request.streamId;if(this.type==b("BladeRunnerTypes").StreamFrameType.DATA&&this.data!=null)return this.data.streamId;if(this.type==b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE&&this.statusUpdate!=null)return this.statusUpdate.streamId;if(this.type==b("BladeRunnerTypes").StreamFrameType.LOG&&this.log!=null)return this.log.streamId;if(this.type==b("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST&&this.rewriteRequest!=null)return this.rewriteRequest.streamId;if(this.type==b("BladeRunnerTypes").StreamFrameType.DATA_ACK&&this.dataAck!=null)return this.dataAck.streamId;throw new Error("Frame with unexpected type")};a.readObject=function(c){__p&&__p();var d=new a();d.type=n(c.type);switch(d.type){case b("BladeRunnerTypes").StreamFrameType.REQUEST:d.request=g.readObject(r(c.request));break;case b("BladeRunnerTypes").StreamFrameType.DATA:d.data=h.readObject(r(c.data));break;case b("BladeRunnerTypes").StreamFrameType.DATA_ACK:d.dataAck=i.readObject(r(c.dataAck));break;case b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:d.statusUpdate=k.readObject(r(c.statusUpdate));break;case b("BladeRunnerTypes").StreamFrameType.LOG:d.log=j.readObject(r(c.log));break;case b("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST:d.rewriteRequest=l.readObject(r(c.rewriteRequest));break;default:b("BladeRunnerLogger").warn("Frame with unexpected type: "+d.type);return null}return d};a.newRequestFrame=function(c){var d=new a();d.type=b("BladeRunnerTypes").StreamFrameType.REQUEST;d.request=c;return d};a.newDataFrame=function(c){var d=new a();d.type=b("BladeRunnerTypes").StreamFrameType.DATA;d.data=c;return d};a.newDataAckFrame=function(c){var d=new a();d.type=b("BladeRunnerTypes").StreamFrameType.DATA_ACK;d.dataAck=c;return d};a.newStatusUpdateFrame=function(c){var d=new a();d.type=b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE;d.statusUpdate=c;return d};a.newLogFrame=function(c){var d=new a();d.type=b("BladeRunnerTypes").StreamFrameType.LOG;d.log=c;return d};a.newRewriteRequestFrame=function(c){var d=new a();d.type=b("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST;d.rewriteRequest=c;return d};return a}();a=function(){"use strict";__p&&__p();function a(a,b){this.batchId=a,this.frames=b}var b=a.prototype;b.getFrames=function(){if(this.frames!=null)return this.frames;throw new Error("Expected frames")};b.write=function(){return JSON.stringify(this)};a.read=function(b){__p&&__p();b=JSON.parse(b);var c=b.batchId||0,d=[];for(var b=b.frames,e=Array.isArray(b),f=0,b=e?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=b.length)break;g=b[f++]}else{f=b.next();if(f.done)break;g=f.value}g=g;g=m.readObject(g);g!=null&&d.push(g)}return new a(c,d)};return a}();function n(a){if(typeof a==="number")return a;throw new Error("Expected number")}function o(a){return a==null?null:n(a)}function p(a){if(typeof a==="string")return a;throw new Error("Expected string")}function q(a){return a==null?null:p(a)}function r(a){if(typeof a==="object"&&a!=null)return a;throw new Error("Expected object")}function s(a){if(typeof a==="object"&&a!=null){var b=a,c={};Object.keys(b).forEach(function(a){var d=b[a];typeof d==="string"&&d!=null&&(c[a]=d)});return c}throw new Error("Expected string map")}function t(a){return a==null?null:s(a)}function u(a){if(typeof a==="boolean"&&a!=null)return a;throw new Error("Expected boolean")}function v(a){return a==null?null:u(a)}e.exports={GatewayStreamBatch:a,GatewayStreamData:h,GatewayStreamDataAck:i,GatewayStreamFrame:m,GatewayStreamLog:j,GatewayStreamRequest:g,GatewayStreamRewriteRequest:l,GatewayStreamStatusUpdate:k}}),null);
__d("BladeRunnerEventHandler",["BladeRunnerLogger","BladeRunnerTypes","BladeRunnerTypesInternal","gkx","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g=1e3;a=function(){"use strict";__p&&__p();function a(a,b,c){this.$2=a,this.$1=b,this.$3=c}var c=a.prototype;c.onProxyResponse=function(a){__p&&__p();this.$4(a);var c=[];for(var d=a.getFrames(),e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;this.$2.witnessFrame(g)&&c.push(g)}c.length>0&&this.$5(new(b("BladeRunnerTypesInternal").GatewayStreamBatch)(a.batchId,c))};c.onDisconnect=function(){this.$2.resetErrors();var a=new(b("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();a.streamId=this.$2.getRequest().streamId;a.status=b("BladeRunnerTypes").StreamStatus.CLOSED;a.shouldRetry=!0;a.retryDelayMs=0;a=new(b("BladeRunnerTypesInternal").GatewayStreamBatch)(null,[b("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(a)]);this.onProxyResponse(a)};c.$4=function(a){__p&&__p();var c=this;a=a.getFrames().filter(function(a){return a.type==b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE});for(var a=a,d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;f=f.getStatusUpdate();if(f.status==b("BladeRunnerTypes").StreamStatus.CLOSED||f.status==b("BladeRunnerTypes").StreamStatus.REJECTED){this.$2.onError();var h=f.shouldRetry!=null&&f.shouldRetry,i=f.message!=null?f.message:"null";if(h&&this.$2.getErrorCount()<=this.$2.getRetriesAllowed()){f.status=b("BladeRunnerTypes").StreamStatus.PAUSED;var j=g;f.retryDelayMs!=null&&(j=f.retryDelayMs);b("BladeRunnerLogger").info("Can retry: stream "+f.streamId+" closed with status "+f.status+", message "+i+". Error count: "+this.$2.getErrorCount()+", retryDelay "+j+"ms. Already retrying: "+this.$2.getRetryRequestScheduled().toString());this.$2.getRetryRequestScheduled()?b("BladeRunnerLogger").bumpCounter("stream_closed_already_retrying"):(b("BladeRunnerLogger").bumpCounter("stream_closed_will_retry"),this.$2.setRetryRequestScheduled(!0),j>0?b("setTimeoutAcrossTransitions")(function(){return c.$6()},j):this.$6())}else b("BladeRunnerLogger").info("Will not retry: stream "+f.streamId+" closed with status "+f.status+", message "+i+". Error count: "+this.$2.getErrorCount()+", shouldRetry "+h.toString()+". Already retrying: "+this.$2.getRetryRequestScheduled().toString()),h?b("BladeRunnerLogger").bumpCounter("stream_closed_retry_exceeded"):b("BladeRunnerLogger").bumpCounter("stream_closed_no_retry"),this.$3.removeStream(f.streamId)}}};c.$6=function(){this.$2.setRetryRequestScheduled(!1),this.$2.isAlive()&&this.$3.sendRetryStreamRequest(this.$2)};c.$5=function(a){__p&&__p();b("BladeRunnerLogger").bumpCounter("send_to_handler");var c=[];this.$1.onBatch(a);for(var a=a.getFrames(),d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;try{switch(f.type){case b("BladeRunnerTypes").StreamFrameType.DATA:this.$1.onData(f.getData().decodeData());c.push(f.getData());break;case b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:this.$1.onStatusUpdate(f.getStatusUpdate().status);break;case b("BladeRunnerTypes").StreamFrameType.LOG:f=f.getLog().message;f!=null&&(this.$1.onLog(f),b("gkx")("972601"));break;case b("BladeRunnerTypes").StreamFrameType.DATA_ACK:break;default:throw new Error("Frame with unexpected type")}}catch(a){b("BladeRunnerLogger").bumpCounter("send_to_handler_error"),b("BladeRunnerLogger").exception(a,"Failed sending frame to stream handler")}}this.$7(c)};c.$7=function(a){__p&&__p();var c=[];for(var a=a,d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;if(f.shouldAck===!0&&f.dataId!=null){var g=new(b("BladeRunnerTypesInternal").GatewayStreamDataAck)();g.streamId=f.streamId;g.dataId=f.dataId;g.success=!0;c.push(g)}}this.$3.sendDataAcks(c)};return a}();e.exports=a}),null);
__d("BladeRunnerSocket",["Promise","BladeRunnerEventHandler","BladeRunnerLogger","BladeRunnerTypes","BladeRunnerTypesInternal","FBMqttChannel","uuid"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="Connected",h="Disconnected",i=511*1024,j="/br_sr",k="/sr_res",l=null;a=function(){__p&&__p();function a(a){this.$1=[],this.$2=0,this.$3=0,this.$4=null,this.$5=0,this.$6=new Map(),this.$7=a!=null?a:b("FBMqttChannel"),this.$8=new Map(),b("BladeRunnerLogger").setClientSessionId(b("uuid")()),this.$9()}a.get=function(){l==null&&(l=new a(b("FBMqttChannel")));return l};var c=a.prototype;c.sendNewStreamRequest=function(c,d){d=new(b("BladeRunnerEventHandler"))(c,d,this);var e=c.getRequest();this.$6.set(e.streamId,d);this.getStreamCount()<=a.maxStreamCount?this.$10(e):(b("BladeRunnerLogger").bumpCounter("socket_request_throttled_max_streams"),b("BladeRunnerLogger").warn("Maximum stream count reached, will not send request: "+JSON.stringify(c.getRequest().getHeaders())),this.$11(d,e.streamId))};c.sendRetryStreamRequest=function(a){this.$10(a.getRequest())};c.sendCancel=function(a){b("BladeRunnerLogger").bumpCounter("socket_send_cancel");var c=new(b("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();c.streamId=a;c.status=b("BladeRunnerTypes").StreamStatus.CLOSED;this.$12(c);this.removeStream(a)};c.sendAmendment=function(a,c){b("BladeRunnerLogger").bumpCounter("socket_send_amendment");var d=new(b("BladeRunnerTypesInternal").GatewayStreamData)();d.streamId=a;d.setData(c);this.$13(d)};c.sendAmendmentWithAck=function(a,c){__p&&__p();var d=this;b("BladeRunnerLogger").bumpCounter("socket_send_amendment");var e=this.$14(),f=new(b("BladeRunnerTypesInternal").GatewayStreamData)();f.streamId=a;f.setData(c);f.shouldAck=!0;f.dataId=e;a=new(b("Promise"))(function(a,b){d.$8.set(e,{resolve:a,reject:b})});this.$13(f);return a};c.$13=function(a){this.$1.push(b("BladeRunnerTypesInternal").GatewayStreamFrame.newDataFrame(a)),this.$15()};c.sendDataAcks=function(a){b("BladeRunnerLogger").bumpCounter("socket_send_data_ack",a.length),this.$16(a)};c.removeStream=function(a){this.$6["delete"](a)};c.getStreamCount=function(){return this.$6.size};c.getNextStreamId=function(){this.$5++;return this.$5};c.onMQTTStateChanged=function(a){this.$15();if(a!=h&&a!=g||this.$4==a)return;this.$4=a;b("BladeRunnerLogger").info("MQTTStateChanged: "+a);a==h?(b("BladeRunnerLogger").bumpCounter("mqtt_state_disconnected"),this.$17()):a==g&&b("BladeRunnerLogger").bumpCounter("mqtt_state_connected")};c.$10=function(a){b("BladeRunnerLogger").bumpCounter("socket_send_request"),this.$1.push(b("BladeRunnerTypesInternal").GatewayStreamFrame.newRequestFrame(a)),this.$15()};c.$12=function(a){this.$1.push(b("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(a)),this.$15()};c.$16=function(a){__p&&__p();for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;this.$1.push(b("BladeRunnerTypesInternal").GatewayStreamFrame.newDataAckFrame(e))}this.$15()};c.$18=function(){this.$2++;return this.$2};c.$14=function(){this.$3++;return this.$3};c.$15=function(){if(this.$7.getConnectionState()===g&&this.$1.length>0){try{this.$19(this.$1)}finally{this.$1=[]}return!0}return!1};c.$19=function(a){__p&&__p();var c=this,d=new(b("BladeRunnerTypesInternal").GatewayStreamBatch)(this.$18(),a),e=d.write();if(e.length>i){var f=Math.floor(a.length/2);if(f===0){var g=new Error("Publish is too long: "+e.length);this.$20(d,g,"Publish is too long");throw g}this.$19(a.slice(0,f));this.$19(a.slice(f,a.length))}else try{b("BladeRunnerLogger").info("send message to "+j+" "+e),this.$7.publish(j,e)["catch"](function(a){c.$20(d,a,"Failed publishing to MQTT")}),b("BladeRunnerLogger").bumpCounter("mqtt_publish_success")}catch(a){this.$20(d,a,"Failed publishing to MQTT");throw a}};c.$9=function(){__p&&__p();var a=this;b("BladeRunnerLogger").info("Starting socket with endpoint "+this.$7.getEndpoint()+" useragent "+navigator.userAgent);this.$21();this.onMQTTStateChanged(this.$7.getConnectionState());this.$7.subscribeChannelEvents({onMQTTStateChanged:function(b){a.onMQTTStateChanged(b)},onJSError:function(a){var c=a!=null&&typeof a.isRecoverable==="boolean"?a.isRecoverable:!1;c?b("BladeRunnerLogger").bumpCounter("mqtt_channel_recoverable_error"):(b("BladeRunnerLogger").warn("JS error in MQTTChannel: "+(typeof a=="object"&&a!=null?a.toString():"unknown error")+", "+JSON.stringify(a)),b("BladeRunnerLogger").bumpCounter("mqtt_channel_error"))}});this.$7.subscribe(j,function(a){throw new Error("Unexpected response: "+j+" "+a.toString())});this.$7.subscribe(k,function(b){a.$22(b)})};c.$22=function(a){a=b("BladeRunnerTypesInternal").GatewayStreamBatch.read(a);this.processBatch(a)};c.$20=function(a,c,d){__p&&__p();for(var a=a.getFrames(),e=Array.isArray(a),f=0,a=e?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=a.length)break;g=a[f++]}else{f=a.next();if(f.done)break;g=f.value}g=g;if(g.type===b("BladeRunnerTypes").StreamFrameType.REQUEST){var h=g.getRequest(),i=this.$6.get(h.streamId);i!=null&&this.$23(i,h.streamId,b("BladeRunnerTypes").StreamStatus.CLOSED,!0,null)}else if(g.type===b("BladeRunnerTypes").StreamFrameType.DATA){i=g.getData();h=i.dataId;if(i.shouldAck!=null&&i.shouldAck&&h!=null){g=new(b("BladeRunnerTypesInternal").GatewayStreamDataAck)();g.streamId=i.streamId;g.dataId=h;g.success=!1;g.code=b("BladeRunnerTypesInternal").GatewayStreamDataAck.ACK_CODE_FAILED_TO_LAND;g.message=d;this.$24(g)}}}b("BladeRunnerLogger").exception(c,"Failed publishing to MQTT");b("BladeRunnerLogger").bumpCounter("mqtt_publish_error")};c.$24=function(a){var c=this.$8.get(a.dataId);c!=null&&(this.$8["delete"](a.dataId),a.success?c.resolve(!0):a.code===b("BladeRunnerTypesInternal").GatewayStreamDataAck.ACK_CODE_LANDED_BUT_NOT_ACCEPTED?c.resolve(!1):c.reject(a.message))};c.processBatch=function(a){__p&&__p();try{b("BladeRunnerLogger").bumpCounter("socket_process_batch");var c=JSON.stringify(a);b("BladeRunnerLogger").info("Received batch "+c.substring(0,256)+(c.length>256?"...":""));c=null;for(var d=a.getFrames(),e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;var h=g.getStreamId();c==null&&(c=h);if(h!=null&&c!=h)throw new Error("Received batch with frames for multiple streams");g.type==b("BladeRunnerTypes").StreamFrameType.DATA_ACK&&this.$24(g.getDataAck())}if(c!=null){h=this.$6.get(c);h!=null?h.onProxyResponse(a):b("BladeRunnerLogger").info("Received batch with frames for unknown stream id: "+c)}else b("BladeRunnerLogger").info("Received batch with no frames")}catch(a){b("BladeRunnerLogger").exception(a,"Failed processing batch from MQTT");b("BladeRunnerLogger").bumpCounter("socket_process_batch_error");throw a}};c.$17=function(){this.$6.forEach(function(a,b,c){a.onDisconnect()})};c.$11=function(a,c){this.$23(a,c,b("BladeRunnerTypes").StreamStatus.REJECTED,!1,0)};c.$23=function(a,c,d,e,f){var g=new(b("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();g.streamId=c;g.status=d;g.shouldRetry=e;g.retryDelayMs=f;c=new(b("BladeRunnerTypesInternal").GatewayStreamBatch)(null,[b("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(g)]);a.onProxyResponse(c)};c.$21=function(){"WebSocket"in window||(b("BladeRunnerLogger").warn("Browser does not support websocket"),b("BladeRunnerLogger").bumpCounter("websocket_not_supported"))};return a}();a.maxStreamCount=2e3;e.exports=a}),null);
__d("BladeRunnerStream",["regeneratorRuntime"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=a}var c=a.prototype;c.getStreamHandler=function(){return this.$1};c.cancel=function(){};c.amendWithAck=function(a){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:return a.abrupt("return",!1);case 1:case"end":return a.stop()}},null,this)};c.amendFireAndForget=function(a){};c.isAlive=function(){return!1};c.getStatus=function(){return null};c.getStreamId=function(){return 0};return a}();e.exports=a}),null);
__d("BladeRunnerStreamState",["BladeRunnerTypes","BladeRunnerTypesInternal"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=a,this.$2=null,this.$3=0,this.$4=!1,this.$5=0,this.$6=!1}var c=a.prototype;c.getRequest=function(){return this.$1};c.isAlive=function(){return!(this.$2==b("BladeRunnerTypes").StreamStatus.CLOSED||this.$2==b("BladeRunnerTypes").StreamStatus.REJECTED)};c.getLastStatus=function(){return this.$2};c.setLastStatus=function(a){this.$2=a};c.onError=function(){this.$3+=1};c.getErrorCount=function(){return this.$3};c.resetErrors=function(){this.$3=0};c.getRetryRequestScheduled=function(){return this.$6};c.setRetryRequestScheduled=function(a){this.$6=a};c.witnessFrame=function(a){__p&&__p();switch(a.type){case b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:var c=a.getStatusUpdate(),d=!0;switch(c.status){case b("BladeRunnerTypes").StreamStatus.ACCEPTED:d=!this.$4;this.$4||(this.$4=!0);break;case b("BladeRunnerTypes").StreamStatus.STARTED:d=this.getLastStatus()!=b("BladeRunnerTypes").StreamStatus.STARTED;break;case b("BladeRunnerTypes").StreamStatus.PAUSED:d=this.getLastStatus()==b("BladeRunnerTypes").StreamStatus.STARTED;break;case b("BladeRunnerTypes").StreamStatus.CLOSED:case b("BladeRunnerTypes").StreamStatus.REJECTED:default:d=!0}this.setLastStatus(c.status);return d;case b("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST:this.$7(a.getRewriteRequest());return!1;default:return!0}};c.setRetriesAllowed=function(a){this.$5=a};c.getRetriesAllowed=function(){return this.$5};c.$7=function(a){if(a.patchExtraHeader!=null)return;a.temporary!=null||a.temporary==!0||(a.newBody!=null&&(this.$1.payload=a.newBody),a.newExtraHeader!=null&&(this.$1.extraHeader=a.newExtraHeader,this.$1.headers=JSON.parse(a.newExtraHeader)),a.killBody!=null&&a.killBody==!0&&(this.$1.payload=null))};return a}();e.exports=a}),null);
__d("BladeRunnerSocketStream",["regeneratorRuntime","BladeRunnerStream","BladeRunnerStreamState","BladeRunnerTypes","BladeRunnerTypesInternal"],(function(a,b,c,d,e,f){__p&&__p();var g=4;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e){c=a.call(this,c)||this;c.$BladeRunnerSocketStream1=e;c.$BladeRunnerSocketStream2=new(b("BladeRunnerStreamState"))(d);c.$BladeRunnerSocketStream2.setRetriesAllowed(g);return c}var d=c.prototype;d.send=function(){this.$BladeRunnerSocketStream1.sendNewStreamRequest(this.$BladeRunnerSocketStream2,this.getStreamHandler())};d.amendWithAck=function(a){__p&&__p();return b("regeneratorRuntime").async(function(b){while(1)switch(b.prev=b.next){case 0:if(!this.isAlive()){b.next=2;break}return b.abrupt("return",this.$BladeRunnerSocketStream1.sendAmendmentWithAck(this.$BladeRunnerSocketStream2.getRequest().streamId,a));case 2:return b.abrupt("return",!1);case 3:case"end":return b.stop()}},null,this)};d.amendFireAndForget=function(a){this.isAlive()&&this.$BladeRunnerSocketStream1.sendAmendment(this.$BladeRunnerSocketStream2.getRequest().streamId,a)};d.cancel=function(){this.isAlive()&&(this.$BladeRunnerSocketStream1.sendCancel(this.$BladeRunnerSocketStream2.getRequest().streamId),this.$BladeRunnerSocketStream2.setLastStatus(b("BladeRunnerTypes").StreamStatus.CLOSED))};d.isAlive=function(){return this.$BladeRunnerSocketStream2.isAlive()};d.getStatus=function(){return this.$BladeRunnerSocketStream2.getLastStatus()};d.getStreamId=function(){return this.$BladeRunnerSocketStream2.getRequest().streamId};return c}(b("BladeRunnerStream"));e.exports=a}),null);
__d("BladeRunnerClient",["Base64","BladeRunnerConfig","BladeRunnerLogger","BladeRunnerSocket","BladeRunnerSocketStream","BladeRunnerTypes","BladeRunnerTypesInternal"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=a!=null?a:b("BladeRunnerSocket").get()}var c=a.prototype;c.requestStream=function(a,c,d){var e=new(b("BladeRunnerTypesInternal").GatewayStreamRequest)();e.streamId=this.$1.getNextStreamId();e.requestType=b("BladeRunnerTypes").StreamRequestType.BLADE_RUNNER;e.headers=b("BladeRunnerConfig").patchRequestHeaders(a);e.extraHeader=JSON.stringify(e.headers);e.payload=c!=null?b("Base64").encode(c):null;a=new(b("BladeRunnerSocketStream"))(d,e,this.$1);a.send();return a};c.logInfo=function(a){b("BladeRunnerLogger").info(a)};c.bumpCounter=function(a){b("BladeRunnerLogger").bumpCounter(a)};return a}();e.exports=a}),null);
__d("MqttLongPollingHookCollection",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1=new Set()}var b=a.prototype;b.addHook=function(a){this.$1.add(a)};b.removeHook=function(a){this.$1["delete"](a)};b.onPollRequestSent=function(){this.$1.forEach(function(a){a.onPollRequestSent()})};b.onPollRequestSuccess=function(){this.$1.forEach(function(a){a.onPollRequestSuccess()})};b.onPollResponse=function(a){this.$1.forEach(function(b){b.onPollResponse(a)})};b.onPollFinish=function(){this.$1.forEach(function(a){a.onPollFinish()})};b.onPollRequestFailed=function(a){this.$1.forEach(function(b){b.onPollRequestFailed(a)})};return a}();e.exports=a}),null);
__d("MqttFetchClient",["Promise","MqttEnv","MqttProtocolCodec","MqttUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("MqttEnv").Env,h=b("MqttProtocolCodec").WireMessage,i=b("MqttProtocolCodec").decodeByteMessages,j=b("MqttProtocolCodec").MESSAGE_TYPE,k="fetch_pull",l="fetch_";a=function(){__p&&__p();function a(){this.$1="",this.$2=g.getLoggerInstance(),this.$3=0,this.$4="",this.$6=function(){},this.$7=function(a){},this.$8=function(){},this.$9=function(a){},this.$10=0,this.$11="Ready"}a.isSupported=function(){return typeof fetch==="function"};var c=a.prototype;c.run=function(a,c,d,e,f,g,h,i){this.$1=b("MqttUtils").endpointWithSessionId(a,c),this.$3=c,this.$4=d,this.$5=e,this.$6=f,this.$7=g,this.$8=h,this.$9=i,this.$12()};c.isTopicSupported=function(a){return!0};c.publish=function(a,c){return b("Promise").reject("not supported")};c.abort=function(){};c.$13=function(a){a=a.message;this.$2.debugTrace("FetchClient","Fetch request failed with error:"+a);this.$9(a);this.$14(!1,a);this.$2.bumpCounter(l+"error");this.$11="Error"};c.$15=function(a){__p&&__p();this.$2.debugTrace("FetchClient","Fetch response data received");a=i(new Uint8Array(a));a=a.messages;var b=a.filter(function(a){return a.messageType===j.PINGREQ});a=a.filter(function(a){return a.messageType===j.PUBLISH}).map(function(a){if(a instanceof h.Publish){a=a;return{topic:a.topic,payload:a.payloadMessage.payloadString}}else return{}});for(var c=a,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{e=c.next();if(e.done)break;f=e.value}f=f;this.$2.bumpCounter(l+"response_"+f.topic)}a&&a.length>0&&this.$7(a);b&&b.length>0&&this.$16()};c.$16=function(){this.$2.debugTrace("FetchClient","Got server ping request"),this.$2.bumpCounter(l+"ping")};c.$17=function(a){this.$2.debugTrace("FetchClient","Fetch request ended"),this.$2.bumpCounter(l+"done"),this.$8(),this.$11="Done"};c.$18=function(a,c,d){__p&&__p();var e=this;d!==null&&d!==void 0&&this.$15(d);if(c){this.$17(null);return}b("MqttUtils").promiseDone(a.read(),function(c){var b=c.done;c=c.value;return e.$18(a,b,c)},function(a){return e.$17(a)})};c.$19=function(a){__p&&__p();if(!a.ok){this.$13(new Error("Http error "+a.status));return}a=a.body;if(!a){this.$13(new Error("Empty body"));return}a=a.getReader();this.$6();this.$2.bumpCounter(l+"success");this.$14(!0,null);this.$11="RecevingData";this.$2.debugTrace("FetchClient","Fetch request success");this.$18(a,!1,null)};c.$14=function(a,b){this.$2.eventLogPull({pullEventName:k,sessionID:this.$3,status:a,duration:Date.now()-this.$10,hostname:this.$1,errorMessage:b})};c.$12=function(){__p&&__p();var a=this;if(this.$11!="Ready")return;this.$2.debugTrace("FetchClient","Sending fetch request");this.$2.bumpCounter(l+"request");this.$10=Date.now();var c=b("MqttUtils").endpointWithExtraParameter(this.$1,"chunked","true");b("MqttUtils").promiseDone(fetch(c,{method:"POST",mode:"cors",cache:"no-cache",credentials:"include",referrer:"no-referrer",body:this.$4,keepalive:!1}),function(b){return a.$19(b)},function(b){return a.$13(b)})};return a}();e.exports=a}),null);
__d("MqttLongPollingClient",["Promise","MqttEnv","MqttProtocolCodec","XHRRequest","getCrossOriginTransport"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("MqttEnv").Env,h=b("MqttProtocolCodec").WireMessage,i=b("MqttProtocolCodec").decodeByteMessages,j=120*1e3,k="simple_pull";a=function(){__p&&__p();function a(){this.$3="",this.$4=0,this.$2=g.getLoggerInstance(),this.$1="Ready",this.$5="",this.$7=function(){},this.$8=function(a){},this.$9=function(){},this.$10=function(a){},this.$11=0,this.$12=null,this.$13=new Set(["/t_ms","/messenger_sync_get_diffs","/messenger_sync_create_queue","/webrtc","/rtc_multi"])}var c=a.prototype;c.run=function(a,b,c,d,e,f,g,h){this.$3=a,this.$4=b,this.$5=c,this.$6=d,this.$7=e,this.$8=f,this.$9=g,this.$10=h,this.$14(this.$5)};c.isTopicSupported=function(a){return this.$13.has(a)};c.publish=function(a,c){return b("Promise").reject("not supported")};c.abort=function(){this.$12!=null&&this.$12.abort("Disconnected")};c.$15=function(a,b){if(this.$1===a)return;this.$1=a;a=="Error"&&b!=null&&this.$10(b)};c.$16=function(a){__p&&__p();if(this.$1!="RequestSend")return;if(!a){this.$17("EmptyResponse",null);return}this.$7();this.$18(!0,null);this.$15("ResponseReceived");a=i(new Uint8Array(a));a=a.messages.filter(function(a){return a instanceof h.Publish}).map(function(a){if(a instanceof h.Publish){a=a;return{topic:a.topic,payload:a.payloadMessage.payloadString}}else return{}});this.$8(a);this.$9()};c.$17=function(a,b){b=b!=null?b.message:"null";this.$2.debugTrace("LongPollingClient Error","Poll failed with error:"+a+", errorMsg:"+b);this.$18(!1,b);this.$15("Error",a)};c.$18=function(a,b){this.$2.eventLogPull({pullEventName:k,sessionID:this.$4,status:a,duration:Date.now()-this.$11,hostname:this.$3,errorMessage:b})};c.$14=function(a){__p&&__p();var c=this;if(this.$1!="Ready"||this.$12)return;try{this.$11=Date.now(),this.$12=new(b("XHRRequest"))(this.$3).setResponseType("arraybuffer").setRawData(a).setTransportBuilder(b("getCrossOriginTransport").withCredentials).setResponseHandler(function(a){return c.$16(a)}).setNetworkFailureHandler(function(a){c.$17("Network",a)}).setErrorHandler(function(a){c.$17("Error",a)}).setAbortHandler(function(a){c.$17("Abort",null)}).setTimeoutHandler(function(){c.$17("Timeout",null)}).setTimeout(j).send(),this.$15("RequestSend")}catch(a){this.$17("Error",a)}};return a}();e.exports=a}),null);
__d("MqttLongPollingRunner",["MqttEnv","MqttFetchClient","MqttLongPollingClient","MqttLongPollingHookCollection","MqttTypes","MqttUtils","exponentialBackoff"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("MqttEnv").Env,h=b("MqttEnv").MqttGkNames,i=b("MqttTypes").MqttChannelError,j=4,k=1e3,l=3e3,m="mqtt_should_longpoll",n="last_lp",o="yes",p="no";a=function(){__p&&__p();function a(a,c,d,e,f,h,j,k){__p&&__p();var l=this;this.$21=function(){__p&&__p();try{if(!l.$26())return;var a=l.$27();l.$14=a;var c=l.$9(),d=l.$10();c=c.filter(function(b){return a.isTopicSupported(b)});d=d.filter(function(b){return a.isTopicSupported(b.topic)});if(c.length==0&&d.length==0){l.$5.debugTrace("LongPollingRunner","Poll skipped, nothing to do");g.setTimeout(function(){l.$21()},1e3);return}var e=b("MqttUtils").generateSessionId();a.run(l.$6,e,l.$7.gen(e,c,d),l.$7,function(){return l.$28()},function(a){return l.$29(a)},function(){return l.$30()},function(a){return l.$31(a)});l.$18.onPollRequestSent();e=c.join(",");c=d.map(function(a){return a.topic}).join(",");l.$5.debugTrace("LongPollingRunner","Making a poll request to "+l.$6+". SubscribedTopics:"+e+". Publishes:"+c)}catch(a){a&&l.$5.logErrorWarn(a,"lp_js_error"),l.$11(new i(!1,"js error lp",a)),l.$31("lp_js_error")}};this.$6=a;this.$7=c;this.$1=!1;this.$2=0;this.$3=d;this.$4=b("MqttUtils").hasWSSupport();this.$5=g.getLoggerInstance();this.$8=e;this.$9=f;this.$10=h;this.$11=j;this.$12=k;this.$13=!1;this.$14=null;this.$15="LPInactive";this.$16=0;this.$18=new(b("MqttLongPollingHookCollection"))();this.$17=new(b("exponentialBackoff"))(this.$21,this);this.$19=0;this.$20=p}var c=a.prototype;c.addHook=function(a){this.$18.addHook(a)};c.start=function(){var a=this;this.$20=g.configRead(n,p);this.$5.debugTrace("LongPollingRunner","Runner loaded, last status "+this.$20);this.$19=Date.now();this.$21();g.setTimeout(function(){a.$21()},k+100);g.setTimeout(function(){a.$21()},l+100)};c.onConnectAttempt=function(){};c.onConnectFailure=function(){this.$2++,this.$21()};c.onConnected=function(){};c.onConnectSuccess=function(){this.$1=!0,g.configWrite(n,null)};c.onConnectionLost=function(){};c.onSubscribe=function(a){};c.onUnsubscribe=function(a){};c.onPublish=function(a){};c.onMessage=function(a){};c.onWSFatal=function(){this.$3=!0,this.$21()};c.getStatus=function(){return this.$15};c.$22=function(a){a!=this.$15&&(this.$5.debugTrace("LongPollingRunner","status changed to "+a+" from "+this.$15),this.$15=a,this.$12(this.$15))};c.$23=function(){this.$16=0};c.$24=function(){this.$16++,this.$16>=j&&this.$22("LPError")};c.$25=function(){__p&&__p();var a=g.genGk(h.mqtt_ws_forced_polling_only),b=g.genGk(h.mqtt_ws_polling_enabled),c=g.genGk(h.mqtt_fast_lp);this.$5.debugTrace("LongPollingRunner","_shouldPoll? forcedPoll:"+String(a)+" enabled:"+String(b)+" fastPoll:"+String(c)+" hasWSSupport:"+String(this.$4)+" hasSuccess:"+String(this.$1)+" failureCount:"+this.$2+" wsFatal:"+String(this.$3));if(a)return!0;if(!this.$4){this.$5.bumpCounter(m+".na");return b}if(this.$3){this.$5.bumpCounter(m+".fatal");return b}if(this.$1)return!1;if(this.$2>=4){this.$5.bumpCounter(m+".failure");return b}if(c){a=Date.now()-this.$19;if(this.$20===o){if(a>k){this.$5.bumpCounter(m+".fastdelay");return b}}else if(a>l){this.$5.bumpCounter(m+".regulardelay");return b}}return!1};c.$26=function(){if(this.$14!=null)return!1;var a=this.$25();!this.$13&&a&&(this.$5.bumpCounter("polling_kickin"),this.$13=!0,this.$22("LPActive"),this.$23());this.$13&&!a&&(this.$5.bumpCounter("polling_stopped"),this.$13=!1,this.$22("LPInactive"),this.$23());return a};c.$27=function(){if(g.genGk(h.mqtt_lp_use_fetch)&&b("MqttFetchClient").isSupported()){this.$5.debugTrace("LongPollingRunner","Creating polling client using Fetch API");return new(b("MqttFetchClient"))()}else{this.$5.debugTrace("LongPollingRunner","Creating regular Polling client");return new(b("MqttLongPollingClient"))()}};c.$28=function(){this.$5.debugTrace("LongPollingRunner","Poll success"),this.$18.onPollRequestSuccess(),this.$17.reset(),this.$22("LPActive"),this.$23(),g.configWrite(n,o)};c.$29=function(a){__p&&__p();var b=a.map(function(a){return a.topic}).join(",");this.$5.debugTrace("LongPollingRunner","Poll response received, message received:"+b);for(var b=a,a=Array.isArray(b),c=0,b=a?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var d;if(a){if(c>=b.length)break;d=b[c++]}else{c=b.next();if(c.done)break;d=c.value}d=d;this.$18.onPollResponse(d.topic);this.$8(d.topic,d.payload)}};c.$30=function(){this.$5.debugTrace("LongPollingRunner","Poll finish"),this.$18.onPollFinish(),this.$14=null,this.$21()};c.$31=function(a){this.$18.onPollRequestFailed(a),this.$14=null,this.$17(),this.$24()};return a}();e.exports=a}),null);