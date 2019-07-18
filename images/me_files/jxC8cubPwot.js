if (self.CavalryLogger) { CavalryLogger.start_js(["KbXYm"]); }

__d("UFICreatorInfo.react",["fbt","HelpLink.react","Image.react","React","URI","suiMargin"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a,c=this.getCreatorLink();switch(this.props.labelType){case"commented":a=g._("Comment\u00e9 par {creator}",[g._param("creator",c)]);break;case"edited_comment":a=g._("Modifi\u00e9 par {creator}",[g._param("creator",c)]);break;case"sent_message":a=g._("Envoy\u00e9 par {creator}",[g._param("creator",c)]);break;case"page_admin_note":a=g._("Article cr\u00e9\u00e9 par {creator}",[g._param("creator",c)]);break;default:return b("React").createElement("span",null)}return b("React").createElement("span",null,a,b("React").createElement(b("HelpLink.react"),{tooltip:this.getHelpText()}))};d.getCreatorLink=function(){switch(this.props.creatorType){case"application":case"gray_account":case"indirect_admin":return b("React").createElement("a",{className:"uiLinkSubtle","data-hover":"tooltip","data-tooltip-content":this.getTooltipText()},this.props.creatorName);case"business_admin":return b("React").createElement("a",{className:"uiLinkSubtle",href:this.props.profileURI},this.props.creatorName);case"direct_admin":return this.getProfileLinkWithHovercard();case"former_admin":return b("React").createElement("span",{className:"uiLinkSubtle"},b("React").createElement(b("Image.react"),{src:"/images/privacy/cant-see.png",width:9,height:9,className:"_3-8_"}),this.getProfileLinkWithHovercard());default:return b("React").createElement("span",{className:"uiLinkSubtle"},this.props.creatorName)}};d.getTooltipText=function(){switch(this.props.creatorType){case"application":return this.getApplicationText();case"gray_account":return this.getGrayAccountText();case"indirect_admin":return this.getIndirectAdminText()}return null};d.getProfileLinkWithHovercard=function(){if(!this.props.profileURI)return b("React").createElement("span",null,this.props.creatorName);var a=new(b("URI"))("/ajax/hovercard/user.php").setQueryData({id:this.props.creatorID}).addQueryData({type:"page_admin",extragetparams:JSON.stringify({directed_target_id:this.props.pageID})});return b("React").createElement("a",{className:"uiLinkSubtle","data-hovercard":a,href:this.props.profileURI},this.props.creatorName)};d.getApplicationText=function(){switch(this.props.labelType){case"commented":return g._("Ceci a \u00e9t\u00e9 comment\u00e9 par quelqu\u2019un qui utilise {application}.",[g._param("application",this.props.creatorName)]);case"edited_comment":return g._("Ceci a \u00e9t\u00e9 modifi\u00e9 par quelqu\u2019un qui utilise {application}.",[g._param("application",this.props.creatorName)]);case"sent_message":return g._("Ceci a \u00e9t\u00e9 envoy\u00e9 par quelqu\u2019un depuis {application}.",[g._param("application",this.props.creatorName)]);case"page_admin_note":return g._("Article cr\u00e9\u00e9 par quelqu\u2019un utilisant {application}.",[g._param("application",this.props.creatorName)])}return null};d.getIndirectAdminText=function(){switch(this.props.labelType){case"commented":return g._("Ceci a \u00e9t\u00e9 comment\u00e9 par quelqu\u2019un de {page}.",[g._param("page",this.props.creatorName)]);case"edited_comment":return g._("Ceci a \u00e9t\u00e9 modifi\u00e9 par quelqu\u2019un de {page}.",[g._param("page",this.props.creatorName)]);case"sent_message":return g._("Ceci a \u00e9t\u00e9 envoy\u00e9 par quelqu\u2019un depuis {page}.",[g._param("page",this.props.creatorName)]);case"page_admin_note":return g._("Article cr\u00e9\u00e9 par quelqu\u2019un de {page}.",[g._param("page",this.props.creatorName)])}return null};d.getGrayAccountText=function(){switch(this.props.labelType){case"commented":return g._("Ceci a \u00e9t\u00e9 comment\u00e9 par quelqu\u2019un qui n\u2019a pas de compte personnel Facebook.");case"edited_comment":return g._("Ceci a \u00e9t\u00e9 modifi\u00e9 par quelqu\u2019un qui n\u2019a pas de compte personnel Facebook.");case"sent_message":return g._("Ceci a \u00e9t\u00e9 envoy\u00e9 par quelqu\u2019un qui ne poss\u00e8de pas de compte Facebook.");case"page_admin_note":return g._("Article cr\u00e9\u00e9 par quelqu\u2019un qui n\u2019a pas de compte Facebook personnel.")}return null};d.getHelpText=function(){switch(this.props.labelType){case"commented":return g._("Seuls les gestionnaires de cette Page peuvent voir qui a publi\u00e9 un commentaire");case"edited_comment":return g._("Seuls les gestionnaires de cette Page peuvent voir qui a modifi\u00e9 un commentaire");case"sent_message":return g._("Seuls ceux qui administrent cette Page peuvent voir qui a envoy\u00e9 un message");case"page_admin_note":return g._("Seules les personnes qui administrent cette Page peuvent voir la personne qui a cr\u00e9\u00e9 une note")}return null};return c}(b("React").Component);c.propTypes={creatorID:a.string.isRequired,creatorType:a.string.isRequired,creatorName:a.string.isRequired,labelType:a.string.isRequired,pageID:a.string.isRequired,profileURI:a.string};e.exports=c}),null);
__d("Keyframes.react",["FBLogger","Keyframes","React","createCancelableFunction","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){var c=a.width;a=a.height;c={width:c||0,height:a||0};return b("React").createElement("div",{style:c})}function h(a){var c=a.width;a=a.height;return b("React").createElement(g,{width:c,height:a})}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={error:!1,renderer:null},c.$6=function(a){c.setState({renderer:a,error:!1}),c.props.onLoad&&c.props.onLoad(a)},c.$7=function(a){c.setState({renderer:null,error:!0})},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.seekToProgress=function(a){this.state.renderer&&this.state.renderer.seekToProgress(a)};d.componentDidMount=function(){this.$4(this.props.source)};d.componentWillUnmount=function(){this.state.renderer&&this.state.renderer.pause(),this.$2&&this.$2.cancel(),this.$3&&this.$3.cancel()};d.componentDidUpdate=function(a,b){if(this.props.source!==a.source||this.props.projectName!==a.projectName||this.props.assetName!=null&&a.assetName!=null&&this.props.assetName!==a.assetName||a.assetID!=null&&this.props.assetID!=null&&this.props.assetID!==a.assetID)this.$4(this.props.source);else{var c=this.state.renderer;c!==b.renderer?this.$5(b.renderer,c):c&&((a.width!==this.props.width||a.height!==this.props.height)&&(c.resetDimensions(),this.props.width&&c.setWidth(this.props.width),this.props.height&&c.setHeight(this.props.height)),a.muted!==this.props.muted&&(this.props.muted?c.mute():c.unMute()),a.repeatCount!==this.props.repeatCount&&c.repeatCount(this.props.repeatCount),a.onError!==this.props.onError&&c.onError(this.props.onError),a.onRepeatEnd!==this.props.onRepeatEnd&&c.onRepeatEnd(this.props.onRepeatEnd),a.onProgress!==this.props.onProgress&&c.onProgress(this.props.onProgress),a.initialProgress!==this.props.initialProgress&&c.seekToProgress(this.props.initialProgress),a.playing!==this.props.playing&&(this.props.playing?c.play():(c.pause(),this.props.resetOnPause&&c.repeatCount(this.props.repeatCount).seekToProgress(this.props.initialProgress))),c.redrawIfNeeded())}};d.$5=function(a,b){if(!this.$1)return;b&&(b.onError(this.props.onError).onRepeatEnd(this.props.onRepeatEnd).onProgress(this.props.onProgress).repeatCount(this.props.repeatCount),this.props.width&&b.setWidth(this.props.width),this.props.height&&b.setHeight(this.props.height),this.props.initialProgress&&b.seekToProgress(this.props.initialProgress),this.props.muted?b.mute():b.unMute(),this.props.playing?b.play():b.pause(),b.redrawIfNeeded());a&&b?this.$1.replaceChild(b.getElement(),a.getElement()):(a&&this.$1.removeChild(a.getElement()),b&&this.$1.appendChild(b.getElement()))};d.$8=function(a){return a instanceof ArrayBuffer?b("Keyframes").requestRendererFromBytes(a,this.$9()):b("Keyframes").requestRenderer(a,this.$9())};d.$4=function(a){this.$2&&this.$2.cancel(),this.$3&&this.$3.cancel(),!a?this.$7():(this.$2=b("createCancelableFunction")(this.$6),this.$3=b("createCancelableFunction")(this.$7),b("promiseDone")(this.$8(a),this.$2,this.$3))};d.$9=function(){return this.props.assetID?{projectName:this.props.projectName,assetID:this.props.assetID}:{projectName:this.props.projectName,assetName:this.props.assetName||"__FIXME__missing_react_asset_name"}};d.render=function(){var a=this,c=this.props,d=c.className,e=c.height,f=c.style;c=c.width;c=this.state.renderer?null:this.state.error?this.props.errorPlaceholder||b("React").createElement(h,{width:c,height:e}):this.props.placeholder||b("React").createElement(g,{width:c,height:e});e=this.props.mutator&&this.state.renderer&&b("React").cloneElement(this.props.mutator,{__renderer:this.state.renderer});return b("React").createElement("div",{className:d,ref:function(b){return a.$1=b},style:babelHelpers["extends"]({display:"inline-block",lineHeight:0,fontSize:0},f)},c,e)};return c}(b("React").Component);a.defaultProps={initialProgress:0,resetOnPause:!1,playing:!0,repeatCount:Infinity};e.exports=a}),null);
__d("UFIReactionsAnimatedKeyframesIcon.react",["Keyframes.react","React","UFIReactionsKeyframesAssets","UFIReactionTypes"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.supportsReaction=function(a){return!!b("UFIReactionsKeyframesAssets").reactions[a]};var d=c.prototype;d.render=function(){var a=this.props,c=a.animate,d=a.className,e=a.maxSize;a=a.reactionID;var f=b("UFIReactionsKeyframesAssets").initialProgress[a]||0,g=b("UFIReactionsKeyframesAssets").reactions[a];return g?b("React").createElement(b("Keyframes.react"),{projectName:"feedback_reactions",assetName:b("UFIReactionTypes").reactions[a].name,className:d,source:g,width:e,height:e,playing:c,initialProgress:f,resetOnPause:!0}):b("React").createElement("div",{style:{width:e,height:e}})};return c}(b("React").PureComponent);e.exports=a}),null);
__d("UFIReactionsDialogLayerImpl.react",["cx","csx","invariant","BrowserSupport","CSS","DataStore","DOM","DOMQuery","Focus","Layer","Locale","Parent","React","ReactDOM","ReactTransitionEvents","RTLKeys","Style","SubscriptionsHandler","TabbableElements","Vector","ViewportBounds","cancelAnimationFrame","clearTimeout","ge","getElementPosition","getOverlayZIndex","memoize","renderSubtreeIntoContainer_DO_NOT_USE","requestAnimationFrameAcrossTransitions","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();a=b("React").PropTypes;var j="_1oxh",k="_2r6k",l="_2r6j",m=b("BrowserSupport").hasCSSAnimations(),n="_22uo",o="_6fqy",p=200,q={},r=function(c){"use strict";__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.updatePosition=function(){__p&&__p();var a=this.getInsertParent(),c=this.getCausalElement(),d=b("Vector").getElementPosition(c),e=b("Vector").getElementPosition(a);d=d.sub(e);e=b("Vector").getElementDimensions(a).x;b("Locale").isRTL()&&(d.x=e-d.x);e=b("Vector").getViewportDimensions().x;var f=b("Vector").getElementDimensions(this.getContentRoot()).x;d.x=Math.min(d.x,e-f);b("Locale").isRTL()?q.right=d.x+"px":q.left=d.x+"px";q.top=d.y+"px";q.zIndex=this._getZIndex(c,a);e=this.getRoot();e!=null||i(0,4781);b("Style").apply(e,q);return!0};d._getZIndex=function(a,c){__p&&__p();a=b("getOverlayZIndex")(a,c);var d=b("Parent").byClass(c,"fbPhotoSnowliftContainer"),e=d&&b("DOMQuery").scry(d,".stageWrapper")[0];e&&(a=Math.max(a,b("getOverlayZIndex")(e,d)));e=b("ge")("pagelet_sidebar");if(e){d=b("DOMQuery").scry(e,".fbChatSidebar")[0];e=b("DOMQuery").scry(c,"._13pa")[0];d&&e==null&&(a=Math.max(a,parseInt(b("Style").get(d,"z-index"),10)+1))}return a};d.getContentRoot=function(){return this.contentRoot};d._buildWrapper=function(a,c){b("CSS").addClass(c,"_49v-");this.contentRoot=c;a=document.createElement("div");b("CSS").addClass(a,"_1oxj");a.appendChild(c);return a};return a}(b("Layer"));c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){__p&&__p();var e;e=a.call(this,c,d)||this;e.onTransitionHide=function(){b("ReactTransitionEvents").removeEndEventListener(e.layer.getContentRoot(),e.onTransitionHide),e.finishHide()};e.onTransitionShow=function(){var a=e.layer.getContentRoot();a!=null||i(0,4782);b("ReactTransitionEvents").removeEndEventListener(a,e.onTransitionShow);var c=b("requestAnimationFrameAcrossTransitions")(function(){b("CSS").removeClass(a,l)});e.handler.addSubscriptions({remove:function(){b("cancelAnimationFrame")(c)}})};e.onKeyDown=function(a){__p&&__p();var c=a.keyCode;if(e.props.isScreenReader)return;if(c===b("RTLKeys").ESC||c===b("RTLKeys").RETURN||c===b("RTLKeys").TAB){e.props.onLayerBlur&&e.props.onLayerBlur(a);var d=b("ReactDOM").findDOMNode(e.refs.root),f=b("TabbableElements").find(e.getContextualLayerParent()),g=null,h=[];c=c===b("RTLKeys").TAB&&a.shiftKey;for(var i=0;i<f.length;i++)if(f[i].tabIndex>-1){if(d.compareDocumentPosition(f[i])&4){g=f[i];break}c&&h.push(f[i])}h.length&&(g=h[h.length-1]);g&&(b("Focus").set(g),a.preventDefault(),a.stopPropagation())}};e.getGlobalContainer=b("memoize")(function(){return b("ge")("globalContainer")});e.onParentLayerHide=e.finishHide.bind(babelHelpers.assertThisInitialized(e));return e}var d=c.prototype;d.componentDidMount=function(){var a=b("ReactDOM").findDOMNode(this.refs.root);this.layer=new r({causalElement:a,insertParent:a},document.createElement("div"));b("DOM").appendContent(a,this.layer.getRoot());this.handler=new(b("SubscriptionsHandler"))();this.props.onLayerBlur&&this.handler.addSubscriptions(this.layer.subscribe("blur",this.props.onLayerBlur));this.handler.addSubscriptions(this.layer.subscribe("beforeshow",this.beforeShow.bind(this)),this.layer.subscribe("aftershow",this.afterShow.bind(this)),this.layer.subscribe("starthide",this.startHide.bind(this)));this.isInDocument()&&this.renderLayer()};d.componentDidUpdate=function(a){this.renderLayer()};d.componentWillUnmount=function(){__p&&__p();if(this.layer){var a=this.layer.getContentRoot();b("ReactDOM").unmountComponentAtNode(this.layer.getContentRoot());b("ReactTransitionEvents").removeEndEventListener(a,this.onTransitionHide);b("ReactTransitionEvents").removeEndEventListener(a,this.onTransitionShow);this.handler.release();this.handler=null;this.layer.destroy();this.layer=null}};d.isInDocument=function(){var a=b("ReactDOM").findDOMNode(this.refs.root);return a&&document.body.contains(a)};d.afterShow=function(){__p&&__p();var a=this;b("CSS").removeClass(this.refs.root,"accessible_elem");var c=this.layer.getContentRoot();c!=null||i(0,4783);var d=b("getElementPosition")(c).y,e=b("ViewportBounds").getTop();b("CSS").conditionClass(c,j,d&&d<e);if(m){b("ReactTransitionEvents").addEndEventListener(c,this.onTransitionShow);b("CSS").addClass(c,n);b("CSS").addClass(c,o);b("CSS").addClass(c,l);var f=b("setTimeoutAcrossTransitions")(function(){a.props.setAnimatingDock(!1),b("CSS").removeClass(c,o)},p);this.handler.addSubscriptions({remove:function(){b("clearTimeout")(f)}})}if(this.props.focusOnShow!==!1){d=b("TabbableElements").find(c)[0];d&&d.focus()}};d.beforeShow=function(){m&&this.props.setAnimatingDock(!0);var a=this.getContextualLayerParent();this.props.isScreenReader?this.layer.setInsertParent(this.layer.getCausalElement()):a!==this.layer.getInsertParent()&&(this.layer.setInsertParent(a),this.setParentLayerSubscription(a))};d.setParentLayerSubscription=function(a){__p&&__p();if(a!==this.getGlobalContainer()){this.parentLayerSubscription&&this.parentLayerSubscription.unsubscribe();this.parentLayer=null;return}a=a;var c=null;while(a!==null){c=b("DataStore").get(a,"layer");if(c)break;a=a.parentNode}if(c&&c!==this.parentLayer){this.parentLayerSubscription&&this.parentLayerSubscription.unsubscribe();a=c.subscribe("hide",this.onParentLayerHide);this.handler.addSubscriptions(a);this.parentLayerSubscription=a;this.parentLayer=c}};d.startHide=function(){if(m&&this.isInDocument()){var a=this.layer.getContentRoot();a!=null||i(0,4784);b("ReactTransitionEvents").addEndEventListener(a,this.onTransitionHide);b("CSS").addClass(a,k)}else this.finishHide();return!1};d.finishHide=function(){b("CSS").addClass(this.refs.root,"accessible_elem");var a=this.layer.getContentRoot();a!=null||i(0,4785);m&&(b("CSS").removeClass(a,j),b("CSS").removeClass(a,k),b("CSS").removeClass(a,n));this.layer.setInsertParent(this.layer.getCausalElement());this.layer.finishHide()};d.getContextualLayerParent=function(){var a=b("ReactDOM").findDOMNode(this.refs.root);if(a instanceof Element){a=b("Parent").byClass(a,"uiContextualLayerParent");if(a instanceof HTMLElement)return a}return document.body};d.renderLayer=function(){var a=this;b("renderSubtreeIntoContainer_DO_NOT_USE")(this,b("React").createElement("div",babelHelpers["extends"]({},this.props,{className:"_1oxk",onKeyDown:this.onKeyDown}),this.props.children,b("React").createElement("div",{className:"_41nt"+(this.props.isDarkBackground?" _3_jc":"")+(this.props.semiTransparentBackground?" _6la8":"")+(this.props.noBackground?" hidden_elem":""),style:{height:this.props.height}})),this.layer.getContentRoot(),function(){a.layer&&a.layer.conditionShow(a.props.shown),a.props.onLayerRender&&a.props.onLayerRender()})};d.render=function(){return b("React").createElement("div",{className:"_2r6l accessible_elem",ref:"root"})};return c}(b("React").Component);c.propTypes={shown:a.bool,isScreenReader:a.bool,onLayerRender:a.func};e.exports=c}),null);
__d("UFIReactionsMenuImpl.react",["cx","fbt","Event","React","ReactDOM","RTLKeys","SubscriptionsHandler","UFIReactionIconImpl.react","UFIReactionsDialogLayerImpl.react","UFIReactionTypes","addFocusEvents","gkx","joinClasses","shallowCompare"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=8,j=96,k=48,l=44,m=39,n=b("UFIReactionTypes").reactions,o=h._("R\u00e9actions"),p=b("addFocusEvents")("span");a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){__p&&__p();var e;e=a.call(this)||this;e.$2=function(){e.subscriptionsHandler!=null&&(e.subscriptionsHandler.release(),e.subscriptionsHandler=null)};e.focusSelected=function(){var a=b("ReactDOM").findDOMNode(e.refs[e.state.selectedIndex]);a&&a.focus()};e.onLayerRender=function(){e.state.hasKeyboardFocus&&e.focusSelected()};e.onKeyDown=function(a){switch(a.keyCode){case b("RTLKeys").RETURN:a.preventDefault();var c=e.state.supportedReactions[e.state.selectedIndex];e.props.initialReaction===c&&(c=b("UFIReactionTypes").NONE);c!==null&&c!==void 0&&e.props.onReactionClick&&e.props.onReactionClick(c,a);break;case b("RTLKeys").getLeft():case b("RTLKeys").getRight():a.preventDefault();e.setState({selectedIndex:Math.max(0,Math.min(e.state.selectedIndex+(a.keyCode===b("RTLKeys").getLeft()?-1:1),e.state.supportedReactions.length-1))},e.focusSelected);break}};e.setAnimatingDock=function(a){e.setState({isAnimatingDock:a})};d=c.supportedReactions.filter(function(a){return n[a]});var f=c.allowKeyboardFocus?Math.max(0,d.indexOf(c.initialReaction)):-1;e.state={hasKeyboardFocus:c.allowKeyboardFocus,isAnimatingDock:!1,prevPropsShown:c.shown,shouldRenderMenu:c.shown,selectedIndex:f,supportedReactions:d};e.hasAnimatedIcons=b("gkx")("991383");e.animatedIconsUsePackage=b("gkx")("991384");return e}c.getDerivedStateFromProps=function(a,b){if(!b.shouldRenderMenu&&a.shown)return{shouldRenderMenu:!0,prevPropsShown:a.shown,supportedReactions:a.supportedReactions.filter(function(a){return n[a]})};return!a.shown&&b.prevPropsShown?{hasKeyboardFocus:a.allowKeyboardFocus,selectedIndex:-1,prevPropsShown:a.shown,supportedReactions:a.supportedReactions.filter(function(a){return n[a]})}:{supportedReactions:a.supportedReactions.filter(function(a){return n[a]}),prevPropsShown:a.shown}};var d=c.prototype;d.componentDidMount=function(){this.props.allowKeyboardFocus&&this.focusSelected(),this.props.isLongPressing&&this.$1()};d.componentWillUnmount=function(){this.$2()};d.componentDidUpdate=function(a,b){this.props.allowKeyboardFocus&&!a.allowKeyboardFocus&&this.focusSelected(),this.props.isLongPressing&&!a.isLongPressing?this.$1():!this.props.isLongPressing&&a.isLongPressing&&this.$2()};d.$1=function(){__p&&__p();var a=this,c;this.$2();this.subscriptionsHandler=new(b("SubscriptionsHandler"))();this.subscriptionsHandler.addSubscriptions(b("Event").listen(document.documentElement,"touchmove",function(b){b.preventDefault();var d=b.touches[0];d=document.elementFromPoint(d.clientX,d.clientY);!d.getAttribute("data-reaction")&&d.parentElement&&(d=d.parentElement);d=parseInt(d.getAttribute("data-reaction"),10)||null;d!==c&&(c&&a.onReactionMouseLeave(c,b),d&&a.onReactionMouseEnter(d,b),c=d)}),b("Event").listen(document.documentElement,"mousemove",function(d){if(b("gkx")("893099")){var e=document.elementFromPoint(d.clientX,d.clientY);if(e!=null){!e.getAttribute("data-reaction")&&e.parentElement&&(e=e.parentElement);e=parseInt(e.getAttribute("data-reaction"),10)||null;e!==c&&(c&&a.onReactionMouseLeave(c,d),e&&a.onReactionMouseEnter(e,d),c=e)}}}),b("Event").listen(document.documentElement,"touchcancel",this.$2),b("Event").listen(document.documentElement,"touchend",function(b){a.$2(),c&&a.onReactionClick(c,b)}),b("Event").listen(document.documentElement,"mouseup",function(d){b("gkx")("893099")&&(a.$2(),c&&a.props.shown&&a.onReactionClick(c,d))}))};d.shouldComponentUpdate=function(a,c){return b("shallowCompare")(this,a,c)};d.onDragStart=function(a){a.preventDefault()};d.onKeyboardFocus=function(a,b){this.setState({hasKeyboardFocus:!0,selectedIndex:a}),this.props.onFocus&&this.props.onFocus(b)};d.onReactionClick=function(a,b,c,d){c===void 0;d===void 0;b.preventDefault();if(!this.state.isAnimatingDock){var e;this.props.onReactionClick&&(e=this.props).onReactionClick.apply(e,arguments)}};d.onReactionMouseEnter=function(a,b){this.setState({selectedIndex:this.props.supportedReactions.indexOf(a)}),this.props.onReactionMouseEnter&&this.props.onReactionMouseEnter(a)};d.onReactionMouseLeave=function(a,b){this.setState({selectedIndex:-1}),this.props.onReactionMouseLeave&&this.props.onReactionMouseLeave(a)};d.render=function(){__p&&__p();var a=this,c=this.state.supportedReactions.length;(c*k-j)/(c-1);var d=this.state.selectedIndex;c=this.state.supportedReactions.map(function(c,e){var f=n[c].display_name,g=a.onReactionClick.bind(a,c),h=Math.max(0,a.state.supportedReactions.indexOf(a.props.initialReaction))===e,i=a.props.icon,j=a.hasAnimatedIcons&&i&&i.supportsReaction&&i.supportsReaction(c);if(j){var k=a.props.allowAnimationPlayback&&a.props.shown;i=b("React").createElement(i,{animate:k,className:"_1ef0",selectedIndex:a.state.selectedIndex,maxSize:m,reactionID:c,usePackage:a.animatedIconsUsePackage})}else i=b("React").createElement(b("UFIReactionIconImpl.react"),{className:"_8382",reaction:c,size:"48"});return b("React").createElement(p,{"aria-pressed":a.props.initialReaction===c,"aria-label":f,className:"_iuw"+(d===e?" _iuy":""),"data-testid":"reaction_"+(a.state.isAnimatingDock?"animating_":"")+c,href:"#",key:"reaction_"+c,onClick:g,onDragStart:a.onDragStart,onKeyboardFocus:a.onKeyboardFocus.bind(a,e),onMouseUp:a.props.onReactionMouseUp,onMouseDown:a.props.onReactionMouseDown,onMouseEnter:a.onReactionMouseEnter.bind(a,c),onMouseLeave:a.onReactionMouseLeave.bind(a,c),onTouchStart:a.onDragStart,onTouchEnd:g,ref:e,role:"button",tabIndex:h&&(!a.props.shown||d===-1||d===e)?0:-1},b("React").createElement("div",{className:"_39m"+(j?" _1ef2":""),"data-reaction":c},b("React").createElement("div",{className:"_39n"},i,b("React").createElement("div",{className:"_d6l"},b("React").createElement("div",{className:"_4sm1"},f)))))});if(!this.state.shouldRenderMenu)return null;c=b("React").createElement("div",{className:b("joinClasses")("_iu-"+(this.state.hasKeyboardFocus?" _5wkt":"")+" _628b",this.props.className),"data-testid":"UFIReactionsMenu"+(this.state.isAnimatingDock?"_animating":""),onKeyDown:this.onKeyDown,"aria-label":o,ref:"root",role:"toolbar"},c);return this.props.shouldRenderInline===!0?c:b("React").createElement(b("UFIReactionsDialogLayerImpl.react"),{height:l+i,focusOnShow:this.props.focusOnShow,setAnimatingDock:this.setAnimatingDock,isDarkBackground:this.props.isDarkBackground,isScreenReader:this.props.isScreenReader,onLayerBlur:this.props.onBlur,onLayerRender:this.onLayerRender,onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave,noBackground:this.props.noBackground,semiTransparentBackground:this.props.semiTransparentBackground,shown:this.props.shown},c)};return c}(b("React").Component);e.exports=a}),null);
__d("UFIReactionsMenuWithAnimatedIcons.react",["cx","requireDeferred","React","UFIReactionsAnimatedKeyframesIcon.react","UFIReactionsMenuImpl.react","createCancelableFunction","joinClasses","promiseDone"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("requireDeferred")("KeyframesEnvironment");a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={allowAnimationPlayback:!1},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){var a=this;!this.state.allowAnimationPlayback&&h.getModuleIfRequired()!=null&&(this.$1=b("createCancelableFunction")(function(){a.setState({allowAnimationPlayback:!0})}),h.onReady(function(c){b("promiseDone")(c.whenRenderLoopHasBeenStableOnce(),a.$1)}))};d.componentWillUnmount=function(){this.$1&&(this.$1.cancel(),this.$1=null)};d.render=function(){var a=b("joinClasses")("_1ef3",this.props.className);return b("React").createElement(b("UFIReactionsMenuImpl.react"),babelHelpers["extends"]({allowAnimationPlayback:this.state.allowAnimationPlayback},this.props,{className:a,icon:b("UFIReactionsAnimatedKeyframesIcon.react")}),this.props.children)};return c}(b("React").PureComponent);e.exports=a}),null);
__d("StickyRHC",["csx","Arbiter","DirectionalDockingElement","DockingElement","DOMDimensions","DOMQuery","Event","FullScreen","Run","SubscriptionsHandler","ViewportBounds","$","ge","getElementPosition","getViewportDimensions","removeFromArray","setImmediate","throttle"],(function(a,b,c,d,e,f,g){__p&&__p();var h=35,i=[],j;function k(a,c){__p&&__p();if(!c||!c.dom_id){i.forEach(l);return}a=b("$")(c.dom_id);for(var c=0;c<i.length;c++)if(b("DOMQuery").contains(i[c].getRoot(),a)){l(i[c]);return}}function l(a){var c=a.getRoot(),d=a.updateOffset.bind(a);a=b("DOMQuery").scry(c,"img.img");a.forEach(function(a){if(a.complete||a.getAttribute("height")||a.naturalHeight===void 0&&a.naturalHeight!==0)return;var c=function(){d(),e.remove(),f.remove(),g.remove()},e=b("Event").listen(a,"load",c),f=b("Event").listen(a,"error",c),g=b("Event").listen(a,"abort",c)});d()}function m(){if(b("FullScreen").isFullScreen())return;i.forEach(function(a){a.updateOffset()})}function n(a){var c=b("DOMQuery").scry(a,"._4-u2"),d=b("DOMQuery").scry(a,"._4-u3"),e=b("DOMQuery").scry(a,".uiHeader");a=b("DOMQuery").scry(a,".ego_unit");return[].concat(c,d,e,a).filter(function(a){return r(a)!==0})}function o(a){return b("getElementPosition")(a).y}function p(a,b){return a-b}function q(){return r(b("ge")("pageFooter"))}function r(a){return a?b("DOMDimensions").getElementDimensions(a).height:0}var s=a(m);function a(a){return function(c){return b("Arbiter").subscribe(c,a)}}c=function(){"use strict";__p&&__p();function a(a,c,d,e){__p&&__p();var f=this;d===void 0&&(d=!0);this.$1=a;this.$2=c?new(b("DirectionalDockingElement"))(a):new(b("DockingElement"))(a);this.$3=d;this.$2.subscribe("changedheight",this.updateOffset.bind(this));this.updateOffset();l(this);i.length||(j=new(b("SubscriptionsHandler"))(),j.addSubscriptions(s("header_loaded"),s("responsive_rhc_loaded"),s("ad_home_pagelet_loaded"),b("Arbiter").subscribe("netego_loaded",k),b("FullScreen").subscribe("changed",m),b("Event").listen(window,"resize",b("throttle")(m))));b("Run").onLeave(function(){return f.destroy()});i.push(this)}a.getInstances=function(){return i};var c=a.prototype;c.getRoot=function(){return this.$1};c.subscribe=function(a,b){return this.$2.subscribe(a,b)};c.destroy=function(){this.$2=null,b("removeFromArray")(i,this),!i.length&&j&&(j.release(),j=null)};c.unfixAndScrollBy=function(a){this.$2&&this.$2.unfixAndScrollBy(a)};c.updateOffset=function(){var a=this;b("setImmediate")(function(){a.$2&&a.$2.setOffset(a.calculateRHCOffset())})};c.calculateRHCOffset=function(){__p&&__p();var a=this.getRoot(),b=r(a),c=t(),d=u();if(b<d)return c;if(this.$3){var e=n(a).map(o).sort(p);a=b+o(a);for(var e=e,f=Array.isArray(e),g=0,e=f?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(f){if(g>=e.length)break;h=e[g++]}else{g=e.next();if(g.done)break;h=g.value}h=h;h=a-h;if(h<d)return c-(b-h)}}return c-(b-d)};return a}();function t(){return b("ViewportBounds").getTop()}function u(){var a=t(),c=b("getViewportDimensions")().height,d=q();return c-a-h-d}e.exports=c}),null);
__d("removeEmojiFromEditorState",["keyCommandBackspaceEmoji","keyCommandDeleteEmoji"],(function(a,b,c,d,e,f){"use strict";function a(a,c){switch(a){case"backspace":return b("keyCommandBackspaceEmoji")(c)||c;case"delete":return b("keyCommandDeleteEmoji")(c)||c;default:return c}}e.exports=a}),null);
__d("UFI2ReactionsMenu",["requireCond","cr:682215"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:682215")}),null);
__d("UFI2ActorPresenceProvider.react",["Arbiter","AvailableListConstants","PresenceStatus","React","SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={isActive:!1},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){var a=this,c=this.props.actorID;this.$1=new(b("SubscriptionsHandler"))();this.$1.addSubscriptions(b("Arbiter").subscribe(b("AvailableListConstants").ON_AVAILABILITY_CHANGED,function(){a.setState({isActive:b("PresenceStatus").get(c)===b("AvailableListConstants").ACTIVE})}))};d.componentWillUnmount=function(){this.$1&&this.$1.release()};d.render=function(){return this.props.children(this.state.isActive)};return c}(b("React").PureComponent);e.exports=a}),null);
__d("UFI2ViewOptionsSelectorImpl.react",["cx","PopoverMenu.react","React","ReactXUIMenu","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.onChange,d=a.alignh,e=a.menuClassName,f=a.selectorOptions,g=a.selectedOption,h=a.children;a=a.menuRef;e=b("React").createElement(b("ReactXUIMenu").SelectableMenu,{className:b("joinClasses")(e,"_21ii"),"data-testid":"UFI2ViewOptionsSelector/menuRoot",onItemClick:function(a,b){c(b.item.getValue())}},f.map(function(a){return b("React").createElement(b("ReactXUIMenu").SelectableItem,{key:a.value,label:a.name,selected:g===a,value:a.value},b("React").createElement("div",{className:"_1ojq","data-testid":"UFI2ViewOptionsSelector/menuOption"},b("React").createElement("div",{className:"_1ojr"},a.name),b("React").createElement("div",{className:"_1ojv"},a.description)))}));return b("React").createElement(b("PopoverMenu.react"),{alignh:d,alignv:"baseline",className:"_21iq",menu:e,ref:a},h)};return c}(b("React").PureComponent);a.defaultProps={alignh:"right"};e.exports=a}),null);
__d("KeyframesEnvironment",["Promise","KeyframesLoop","Run","debounceCore","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=24;var g=1e3/a,h=325;function i(a){a===void 0&&(a=h);return new(b("Promise"))(function(c){var d=b("debounceCore")(function(a){a.cancel(),c()},a),e=new(b("KeyframesLoop"))(function(a){a>g&&d(e)});d(e)})}var j=new(b("Promise"))(function(a){b("Run").onAfterLoad(function(){a()})});function k(a){return j.then(function(){return i(a)})}var l=k(),m=!1;b("promiseDone")(l,function(){m=!0});c={waitForRenderLoopToStabilize:function(a){return i(a)},waitForRenderLoopToStabilizeOncePageIsLoaded:function(a){return k(a)},whenRenderLoopHasBeenStableOnce:function(){return l},hasRenderLoopBeenStableOnce:function(){return m}};e.exports=c}),null);
__d("crc32",[],(function(a,b,c,d,e,f){function b(a){var b=-1;for(var c=0,d=a.length;c<d;c++)b=b>>>8^g[(b^a.charCodeAt(c))&255];return~b}var g=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];a.Int32Array!==void 0&&(g=new Int32Array(g));e.exports=b}),null);