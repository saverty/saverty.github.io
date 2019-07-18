if (self.CavalryLogger) { CavalryLogger.start_js(["BYcr\/"]); }

__d("SimpleFBAmbientPulseNUX.react",["ContextualLayerUpdateOnScroll","FBAmbientPulseNUX.react","React","SimpleNUXMessage"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=null,d.state={nuxShown:d.props.simpleNuxMessage!=null?!b("SimpleNUXMessage").hasUserSeenMessage(d.props.simpleNuxMessage):!1,dialogShown:!1},d.$3=function(){return d.$1},d.$4=function(){d.setState(function(a){return{dialogShown:!a.dialogShown}}),d.props.onSelect&&d.props.onSelect()},d.$5=function(){var a=d.props.simpleNuxMessage;a!=null&&d.props.shouldMarkAsReadWhenDismissed&&b("SimpleNUXMessage").markMessageSeenByUser(a);d.setState({dialogShown:!1});d.props.shouldMarkAsReadWhenDismissed&&d.setState({nuxShown:!1});d.props.onDismiss&&d.props.onDismiss()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this;return b("React").createElement("div",{className:this.props.className},b("React").createElement("div",{ref:function(b){return a.$1=b}},this.props.children),b("React").createElement("div",null,this.$2()))};d.$2=function(){var a=this;return!this.state.nuxShown?null:b("React").createElement(b("FBAmbientPulseNUX.react"),{contextRef:this.$3,behaviors:{ContextualLayerUpdateOnScroll:b("ContextualLayerUpdateOnScroll")},shown:this.state.nuxShown,dialogShown:this.state.dialogShown,onSelect:this.$4,onDismiss:this.$5,onAcknowledge:this.$5,position:this.props.position,alignment:this.props.alignment,offsetX:this.props.offsetX,offsetY:this.props.offsetY,onMouseOver:this.props.showOnHover?function(){return a.setState({dialogShown:!0})}:void 0,onMouseLeave:this.props.showOnHover?function(){return a.setState({dialogShown:!1})}:void 0},this.props.nuxContent)};return c}(b("React").Component);a.defaultProps={nuxContent:null,shouldMarkAsReadWhenDismissed:!0};e.exports=a}),null);
__d("FDSNextButton.react",["ix","fbt","FDSButton.react","Locale","React","SUIGlyphIcon.react","asset","makeFDSStandardComponent"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("Locale").isRTL;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a,c;this.props.use==="default"||this.props.use==="flat"?(a=g("495713"),c=g("534948"),i()&&(a=g("716865"),c=g("716868"))):(a=g("486245"),c=g("588121"),i()&&(a=g("716884"),c=g("716870")));return b("React").createElement(b("FDSButton.react"),babelHelpers["extends"]({},this.props,{iconAfter:b("React").createElement(b("SUIGlyphIcon.react"),{srcDefault:a,srcDisabled:c}),label:h._("Suivant")}))};return c}(b("React").PureComponent);a.defaultProps=b("FDSButton.react").defaultProps;e.exports=b("makeFDSStandardComponent")("FDSNextButton",a)}),null);
__d("FDSPreviousButton.react",["ix","fbt","FDSButton.react","Locale","React","SUIGlyphIcon.react","asset","makeFDSStandardComponent"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("Locale").isRTL;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a,c;this.props.use==="default"||this.props.use==="flat"?(a=g("716865"),c=g("716868"),i()&&(a=g("495713"),c=g("534948"))):(a=g("716884"),c=g("716870"),i()&&(a=g("486245"),c=g("588121")));return b("React").createElement(b("FDSButton.react"),babelHelpers["extends"]({},this.props,{icon:b("React").createElement(b("SUIGlyphIcon.react"),{srcDefault:a,srcDisabled:c}),label:h._("Pr\u00e9c\u00e9dent")}))};return c}(b("React").PureComponent);a.defaultProps=b("FDSButton.react").defaultProps;e.exports=b("makeFDSStandardComponent")("FDSPreviousButton",a)}),null);
__d("TasksUIEventsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:TasksUIEventsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:TasksUIEventsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:TasksUIEventsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setEventGroup=function(a){this.$1.event_group=a;return this};c.setEventInfo=function(a){this.$1.event_info=a;return this};c.setEventLocation=function(a){this.$1.event_location=a;return this};c.setEventName=function(a){this.$1.event_name=a;return this};c.setEventTrace=function(a){this.$1.event_trace=a;return this};c.setSearchType=function(a){this.$1.search_type=a;return this};c.setShortenedURI=function(a){this.$1.shortened_uri=a;return this};c.setTaskID=function(a){this.$1.task_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={event_group:!0,event_info:!0,event_location:!0,event_name:!0,event_trace:!0,search_type:!0,shortened_uri:!0,task_id:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("MarkdownItDeveloperSherlockTokenPlugin",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="[[developer-sherlock-token-";function h(){return RegExp("\\[\\[(developer-sherlock-token-(\\d+))\\]\\]","g")}function i(a,b,c){var d=a.push("developer_sherlock_token_open","developer_sherlock",1);d.meta={id:c};j(a,b);a.push("developer_sherlock_token_close","developer_sherlock",-1)}function j(a,b){a=a.push("text","",0);a.content=b}function k(a){var b=a.src.slice(a.pos);if(!b.includes(g))return!1;var c=h(),d=c.exec(b),e=0;while(d!=null)d.index>e&&j(a,b.substring(e,d.index)),i(a,d[1],Number(d[2])),e=c.lastIndex,d=c.exec(b);b.length>e&&j(a,b.substring(e,b.length));a.pos+=b.length;return!0}function l(a){__p&&__p();var b=a.src.slice(a.pos);b=b.startsWith("`")&&b.lastIndexOf("`")>0;if(b)return k(a);b=a.src.slice(a.pos);if(!b.startsWith(g))return!1;b=h().exec(b);if(!b)return!1;i(a,b[1],Number(b[2]));a.pos+=b[0].length;return!0}function a(a){a.inline.ruler.before("backticks","developer_sherlock_token",l)}e.exports=a}),null);
__d("MarkdownItMentionsPlugin",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new RegExp(/@\[(\d+):((\\\]|[^\]])+)\]/),h=new RegExp(/@\[(\d+):(\d+):((\\\]|[^\]])+)\]/);function i(a){__p&&__p();var b=a.src.slice(a.pos);if(!b.startsWith("@["))return!1;var c=b.replace(h,"@[$1:$3]"),d=0;b.length>c.length&&(d=b.length-c.length);b=g.exec(c);if(!b)return!1;a.pos+=b[0].length+d;c=a.push("mention_open","mention",0);c.attrs=[["id",b[1]]];c.nesting=1;d=a.push("text","",0);d.content=b[2].replace(/\\:/g,":").replace(/\\]/g,"]").replace(/\n/g,"");c=a.push("mention_close","mention",0);c.nesting=-1;return!0}function a(a){a.inline.ruler.after("emphasis","mentions",i)}e.exports=a}),null);
__d("MarkdownItTableHelper",["invariant","CharacterMetadata","ContentBlock","UnicodeUtils","generateRandomKey","immutable"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){__p&&__p();var c=[],d=[],e,f;a.forEach(function(b){__p&&__p();switch(b.type){case"thead_open":e=c;break;case"tbody_open":e=d;break;case"tr_open":e!=null||g(0,2326);e.push([]);f=e[e.length-1];break;case"th_open":case"td_open":f!=null||g(0,2327);f.push({content:""});break;case"inline":f!=null||g(0,2327);a=f[f.length-1];a!=null||g(0,2328);a.content=b.content;break}});var h="",i=b("immutable").Repeat(b("CharacterMetadata").create(),h.length).toList();return new(b("ContentBlock"))({key:b("generateRandomKey")(),depth:0,text:h,type:"block-table",characterList:i,data:b("immutable").Map({thead:c,tbody:d})})}function c(a){__p&&__p();a=a.getData().toJS();var c=a.thead,d=a.tbody;c!=null||g(0,2329);d!=null||g(0,2330);var e=[];c.forEach(function(a){a.forEach(function(a,c){e[c]=b("UnicodeUtils").strlen(a.content)})});d.forEach(function(a,c){a.forEach(function(a,c){a=b("UnicodeUtils").strlen(a.content);a>e[c]&&(e[c]=a)})});var f="";c.forEach(function(a){a.forEach(function(a,c){var d=b("UnicodeUtils").strlen(a.content);c=e[c];f+="| ";d<c&&(f+=" ".repeat((c-d)/2));f+=a.content+" ";d<c&&(f+=" ".repeat((c-d+1)/2))}),f+="|\n"});e.forEach(function(a){f+="| "+"-".repeat(a)+" "});f+="|\n";d.forEach(function(a,c){a.forEach(function(a,c){var d=b("UnicodeUtils").strlen(a.content);c=e[c];f+="| "+a.content+" ";d<c&&(f+=" ".repeat(c-d))}),f+="|",c<d.length-1&&(f+="\n")});return f}d={convertContentBlockTableToMarkdown:c,convertMarkdownTableTokensToContentBlock:a};e.exports=d}),null);
__d("stateFromMarkdown",["CharacterMetadata","ContentBlock","ContentState","DraftEntity","MarkdownIt","MarkdownItTableHelper","generateRandomKey","immutable","memoize","MarkdownItMentionsPlugin","MarkdownItDeveloperSherlockTokenPlugin"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("MarkdownItTableHelper").convertMarkdownTableTokensToContentBlock,h=b("memoize")(function(){return k(!0,!1)}),i=b("memoize")(function(){return k(!1,!1)}),j=b("memoize")(function(){return k(!0,!0)});function k(a,c){var d=["normalize","block","inline"];a&&d.push("linkify");var e=["blockquote","code","fence","heading","hr","html_block","lheading","list","paragraph"];c&&e.push("table");return new(b("MarkdownIt"))().configure({options:{breaks:!0,linkify:a,typographer:!1,quotes:"\u201c\u201d\u2018\u2019",maxNesting:20},components:{core:{rules:d},block:{rules:e},inline:{rules:["autolink","backticks","emphasis","strikethrough","entity","escape","image","link","newline","text"],rules2:["balance_pairs","emphasis","strikethrough","text_collapse"]}}}).use(b("MarkdownItMentionsPlugin"))}var l={code:"CODE",em:"ITALIC",s:"STRIKETHROUGH",strong:"BOLD"},m={__:"UNDERLINE"};function n(a){var b=l[a.tag];return!b?null:m[a.markup]||b}function o(a){return a.reduce(function(a,b){var c=b[0];b=b[1];a[c]=b;return a},{})}var p={mention:function(a,c){if(c){c=c.createEntity("MENTION","IMMUTABLE",o(a.attrs));return c.getLastCreatedEntityKey()}return b("DraftEntity").create("MENTION","IMMUTABLE",o(a.attrs))},developer_sherlock:function(a,c){if(c){c=c.createEntity("DEVELOPER_SHERLOCK","IMMUTABLE",a.meta);return c.getLastCreatedEntityKey()}return b("DraftEntity").create("DEVELOPER_SHERLOCK","IMMUTABLE",a.meta)},a:function(a,c){a=o(a.attrs);a.url=a.href;delete a.href;if(c){c=c.createEntity("LINK","MUTABLE",a);return c.getLastCreatedEntityKey()}return b("DraftEntity").create("LINK","MUTABLE",a)},img:function(a,c){if(c){c=c.createEntity("IMAGE","MUTABLE",o(a.attrs));return c.getLastCreatedEntityKey()}return b("DraftEntity").create("IMAGE","MUTABLE",o(a.attrs))}},q={p:"unstyled",ol:"ordered-list-item",ul:"unordered-list-item",h1:"header-one",h2:"header-two",h3:"header-three",h4:"header-four",h5:"header-five",h6:"header-six",blockquote:"blockquote",code:"code-block"};function r(a,c,d,e,f){d=e?e.tag:d.tag;return new(b("ContentBlock"))({key:b("generateRandomKey")(),depth:e?f-1:f,text:a,type:q[d]||"unstyled",characterList:c})}function s(a,c,d,e){__p&&__p();var f=b("immutable").List(),g=b("CharacterMetadata").create();if(!a.children||!a.children.length){var h=a.content.trim();return[r(h,b("immutable").Repeat(g,h.length).toList(),a,c,d)]}var i="",j=[];a.children.forEach(function(h,k,l){__p&&__p();var m=n(h);h.nesting===1?(m&&(g=b("CharacterMetadata").applyStyle(g,m)),p[h.tag]&&(g=b("CharacterMetadata").applyEntity(g,p[h.tag](h)))):h.nesting===-1?(m&&(g=b("CharacterMetadata").removeStyle(g,m)),p[h.tag]&&(g=g.set("entity",null))):h.content.length&&(i+=h.content,f=f.concat(b("immutable").Repeat(m?b("CharacterMetadata").applyStyle(g,m):g,h.content.length)));h.tag==="br"&&(j.push(r(i,f,a,c,d)),i="",f=b("immutable").List());if(h.tag==="img"){m=p[h.tag](h);h=b("CharacterMetadata").applyEntity(g,m);e?i=e.getEntity(m).getData().src:i=b("DraftEntity").get(m).getData().src;f=f.concat(b("immutable").Repeat(h,i.length))}k===l.length-1&&j.push(r(i,f,a,c,d))});return j}function t(a,b,c){var d=[];for(var e=0;e<b-1;e++)d.push({type:"softbreak",tag:"br",attrs:[],map:[a+e+1,a+e+2],nesting:0,level:c,children:null,content:"",markup:"",info:"",meta:null,block:!1,hidden:!1});return[{type:"paragraph_open",tag:"p",attrs:[],map:[a,a+b],nesting:1,level:c,children:null,content:"",markup:"",info:"",meta:null,block:!0,hidden:!1},{type:"inline",tag:"",attrs:[],map:[a,a+b],nesting:0,level:c+1,children:d,content:"",markup:"",info:"",meta:null,block:!1,hidden:!1},{type:"paragraph_close",tag:"p",attrs:[],map:null,nesting:-1,level:c,children:null,content:"",markup:"",info:"",meta:null,block:!0,hidden:!1}]}function u(a,b){__p&&__p();var c=b.parse(a,{}),d=[],e=[],f=[];c.forEach(function(a,b){__p&&__p();d.push(a);switch(a.type){case"paragraph_open":case"heading_open":case"blockquote_open":case"ordered_list_open":case"bullet_list_open":case"list_item_open":case"table_open":e[a.level]=a;a.map&&(f=a.map);break;case"paragraph_close":case"heading_close":case"blockquote_close":case"ordered_list_close":case"bullet_list_close":case"table_close":case"fence":b=c[b+1];if(!b||!b.map)break;a.type==="fence"&&(f=a.map);var g=f[1];b=b.map[0]-g;if(b<=0)break;d=d.concat(t(g,b,a.level));break}});return d}function v(a,c){__p&&__p();a=u(a,c);var d=[],e=b("immutable").Stack(),f=!1,h=[];a.forEach(function(a){__p&&__p();if(a.type==="table_open"){f=!0;return}if(f){if(a.type==="table_close"){f=!1;d=d.concat([g(h)]);return}h.push(a);return}var b=e.isEmpty()?null:e.peek();if(a.nesting===0||a.type==="inline"&&b){d=d.concat(s(a,b,e.size));return}if(b&&b.tag==="blockquote"&&a.tag==="p")return;if(a.nesting===1&&a.block&&!a.hidden&&a.tag!=="li"){e=e.push(a);return}if(b&&a.nesting===-1&&a.tag===b.tag&&a.level===b.level){e=e.pop();return}});return d.length?b("ContentState").createFromBlockArray(d):b("ContentState").createFromText("")}function a(a){return v(a,h())}function c(a){return v(a,i())}function d(a){return v(a,j())}function f(a){var c=h().use(b("MarkdownItDeveloperSherlockTokenPlugin"));return v(a,c)}function w(a){var c=new(b("MarkdownIt"))("zero").use(b("MarkdownItDeveloperSherlockTokenPlugin"));return v(a,c)}e.exports={stateFromMarkdownWithLinkify:a,stateFromMarkdownWithoutLinkify:c,stateFromMarkdownWithLinkifyAndTable:d,stateFromMarkdownWithLinkifyAndDeveloperSherlock:f,stateFromTextWithDeveloperSherlock:w}}),null);
__d("groupConsecutive",[],(function(a,b,c,d,e,f){__p&&__p();function a(a,b){__p&&__p();var c={},d=[];for(var a=a,e=Array.isArray(a),f=0,a=e?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=a.length)break;g=a[f++]}else{f=a.next();if(f.done)break;g=f.value}g=g;var h=b(g);h===c?d[d.length-1].push(g):d.push([g]);c=h}return d}e.exports=a}),null);
__d("Bullet.react",["React"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("React").createElement("span",babelHelpers["extends"]({},a,{"aria-hidden":!0}),"\u2022")}e.exports=a}),null);
__d("parseLooseTime",["TimeOfDay"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[/^(1[0-9]|2[0-3]|0?[0-9]):?([0-5])?([0-9])?$/,/^(1[0-9]??|2[0-3]??|0?[0-9]):?([0-5])?([0-9])?$/];function a(a){__p&&__p();var c=[],d=new Set();function e(a){var b=a.toISOString();d.has(b)||(c.push(a),d.add(b))}g.forEach(function(c){__p&&__p();c=a.match(c);if(!c)return;var d=parseInt(c[1],10),f=parseInt(c[2]||"",10)||0;c=parseInt(c[3]||"",10)||0;f=f*10+c;if(f<0||f>59)return;if(d>=1&&d<=11){c=b("TimeOfDay").create(d,f);var g=b("TimeOfDay").create(d+12,f);d<=8?(e(g),e(c)):(e(c),e(g))}else d===12?(e(b("TimeOfDay").create(12,f)),e(b("TimeOfDay").create(0,f))):d<=23&&e(b("TimeOfDay").create(d,f))});return c}e.exports=a}),null);