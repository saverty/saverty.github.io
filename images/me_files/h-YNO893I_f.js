if (self.CavalryLogger) { CavalryLogger.start_js(["nzoTD"]); }

__d("MessengerStoriesRingPresenceMontageQueryContainer.react",["MessengerProfilePresenceReact.re","MessengerStoriesRingPresence.react","React","RelayFBEnvironment","RelayModern","MessengerStoriesRingPresenceMontageQueryContainerQuery.graphql","MessengerStoriesRingPresenceMontageQueryContainer_messageThread.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("MessengerProfilePresenceReact.re").make,i=b("RelayModern").QueryRenderer;c=b("RelayModern").createFragmentContainer;b("RelayModern").graphql;function a(a){var c,d=a.className,e=a.size,f=a.storiesRingEligible,j=a.thread,k=a.viewer;a=a.messageThread;c=a==null?void 0:(c=a.montage_thread)==null?void 0:(c=c.thread_key)==null?void 0:c.thread_fbid;var l=!!(a==null?void 0:(a=a.montage_thread)==null?void 0:a.unread_count);return b("React").createElement(i,{environment:b("RelayFBEnvironment"),query:g||(g=function(){return b("MessengerStoriesRingPresenceMontageQueryContainerQuery.graphql")}),variables:{messengerThreadID:c},render:function(a){a=a.props;return a?b("React").createElement(b("MessengerStoriesRingPresence.react"),{className:d,montageThread:a.montage_thread,size:e,storiesRingEligible:f,thread:j,hasUnreadStories:l,viewer:k}):b("React").createElement(h,{className:d,size:e,storiesRingEligible:f,thread:j,viewer:k})}})}e.exports=c(a,{messageThread:function(){return b("MessengerStoriesRingPresenceMontageQueryContainer_messageThread.graphql")}})}),null);