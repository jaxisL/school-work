"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94993],{29383:function(e,t,i){i.d(t,{Z:function(){return d}});var s=i(19013),r=i(24262),n=i(69119),o=i(13882);function a(e,t){var i=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return i<0?-1:i>0?1:i}function d(e,t){(0,o.Z)(2,arguments);var i=(0,s.Z)(e),d=(0,s.Z)(t),l=a(i,d),h=Math.abs(function(e,t){(0,o.Z)(2,arguments);var i=(0,n.Z)(e),s=(0,n.Z)(t);return Math.round((i.getTime()-(0,r.Z)(i)-(s.getTime()-(0,r.Z)(s)))/864e5)}(i,d));i.setDate(i.getDate()-l*h);var u=Number(a(i,d)===-l),c=l*(h-u);return 0===c?0:c}},49735:function(e,t,i){i.d(t,{v:function(){return N},Z:function(){return X}});var s,r,n=i(85893),o=i(67294),a=i(46413);class d{constructor(e){this.id=e,this.previousTimeInView=0,this.isInView=!1,this.isInFocus=!0,this.isHidden=!1,this.inViewSince=Date.now(),this.inDOMSince=this.inViewSince}setHidden(e){this.isHidden=e}canRefresh(e,t){return this.isInView&&this.isInFocus&&this.totalTimeInView()>=e&&this.totalTimeInDOM()>=t}refreshed(){this.previousTimeInView=0,this.inViewSince=Date.now(),this.inDOMSince=this.inViewSince}cameIntoView(){this.isInView=!0,this.inViewSince=Date.now()}removedFromView(){this.isInView=!1,this.updateTimeInView()}pageLostFocus(){this.isInFocus=!1,this.isInView&&this.updateTimeInView()}pageRegainedFocus(){this.isInFocus=!0,this.isInView&&(this.inViewSince=Date.now())}updateTimeInView(){let e=Date.now()-this.inViewSince;this.previousTimeInView+=e,this.inViewSince=Date.now()}totalTimeInDOM(){return Date.now()-this.inDOMSince}totalTimeInView(){return this.isInView?this.previousTimeInView+Date.now()-this.inViewSince:this.previousTimeInView}}var l=class{constructor(e,t,i){this.viewportThreshold=e,this.minimumTimeInViewInMs=t,this.minimumTimeinDOMInMs=i,this.handleVisibilityChange=()=>{let e=document[this.hiddenKey],t=a.Z.isFullscreen()||a.Z.isFakeFullscreen();e||t?this.pageLostFocus():this.pageRegainedFocus()},this.handleFullscreenChange=()=>{let e=a.Z.isFullscreen()||a.Z.isFakeFullscreen();e?this.pageLostFocus():this.pageRegainedFocus()},this.adUnits=[],this.setVisibilityKeys(),this.observer=this.createObserver(),this.installEventListeners(),this.pageFocusChangeCallBacks=[],this.ioCallbackPending=[],this.ioCallbackPendingPromise=null,this.ioCallbackPendingResolve=null}addElement(e){if(this.adUnits.find(t=>t.id===e))return;let t=this.getElementById(e);t&&(this.ioCallbackPending.push(e),this.adUnits.push(new d(e)),this.observer.observe(t.parentElement))}removeElement(e,t){this.adUnits=this.adUnits.filter(t=>t.id!==e),t&&this.observer.unobserve(t.parentElement),this.removeWaitingForCallbackElement(e)}addPageFocusChangeCallback(e){this.pageFocusChangeCallBacks.push(e)}stop(){this.adUnits=[],this.pageFocusChangeCallBacks=[],this.observer.disconnect(),this.removeEventListeners()}unitsReadyForRefresh(){return this.adUnits.filter(e=>e.canRefresh(this.minimumTimeInViewInMs,this.minimumTimeinDOMInMs))}waitForObservedUnitsCallbacks(){return this.ioCallbackPendingPromise||(this.ioCallbackPendingPromise=new Promise(e=>{this.ioCallbackPendingResolve=e,0===this.ioCallbackPending.length&&e()})),this.ioCallbackPendingPromise}isUnitHidden(e){let t=this.adUnits.find(t=>t.id===e);return!t||t.isHidden}canUnitRefresh(e){let t=this.adUnits.find(t=>t.id===e);return!t||t.canRefresh(this.minimumTimeInViewInMs,this.minimumTimeinDOMInMs)}refreshedUnits(e){e.map(e=>this.getObservedUnit(e)).map(e=>e.refreshed())}intersectionCallback(e){e.forEach(e=>{let t=e.target.firstElementChild.id,i=this.getObservedUnit(t);e.intersectionRatio>=this.viewportThreshold?i.cameIntoView():i.removedFromView(),i.setHidden(this.isEntryHidden(e)),this.removeWaitingForCallbackElement(t)})}isEntryHidden(e){let{boundingClientRect:t}=e;return this.isBoundingRectHidden(t)}isBoundingRectHidden(e){return 0===e.height&&0===e.width}getElementById(e){let t=document.getElementById(e);return t||(console.error(`[AdObserver] could not find element with id ${e}`),null)}getObservedUnit(e){let t=this.adUnits.find(t=>t.id===e);if(!t)throw Error("[AdObserver] observed unit not found");return t}pageLostFocus(){this.adUnits.map(e=>e.pageLostFocus()),this.invokeCallBacks(!1)}pageRegainedFocus(){this.adUnits.map(e=>e.pageRegainedFocus()),this.invokeCallBacks(!0)}invokeCallBacks(e){this.pageFocusChangeCallBacks.forEach(t=>t(e))}createObserver(){return new IntersectionObserver((e,t)=>{this.intersectionCallback(e)},{threshold:[this.viewportThreshold]})}installEventListeners(){document.addEventListener(this.visibilityChangeKey,this.handleVisibilityChange,!1),this.installFullscreenListener()}removeEventListeners(){document.removeEventListener(this.visibilityChangeKey,this.handleVisibilityChange),this.removeFullscreenListeners()}installFullscreenListener(){a.Z.addFullscreenListener(this.handleFullscreenChange),a.Z.addFakeFullscreenListener(this.handleFullscreenChange)}removeFullscreenListeners(){a.Z.removeFullscreenListener(this.handleFullscreenChange),a.Z.removeFakeFullscreenListener(this.handleFullscreenChange)}setVisibilityKeys(){void 0!==document.hidden?(this.hiddenKey="hidden",this.visibilityChangeKey="visibilitychange"):void 0!==document.msHidden?(this.hiddenKey="msHidden",this.visibilityChangeKey="msvisibilitychange"):void 0!==document.webkitHidden&&(this.hiddenKey="webkitHidden",this.visibilityChangeKey="webkitvisibilitychange")}removeWaitingForCallbackElement(e){this.ioCallbackPending=this.ioCallbackPending.filter(t=>t!==e),0===this.ioCallbackPending.length&&this.ioCallbackPendingResolve&&(this.ioCallbackPendingResolve(),this.ioCallbackPendingResolve=null)}},h=i(69626),u=i(46313),c=i(34769);let g=new class{constructor(){this.loadingPromise=null,this.loadListeners=[],this.isLoaded=!1}adsLoaded(){return this.isLoaded}loadCrazyAds(e){if(!this.loadingPromise){if(e.shouldDisableAds())this.loadingPromise=Promise.resolve();else{let e=u.Z.Instance.data.advertizing.bundle;this.loadingPromise=(0,c.Z)(e,!0)}this.loadingPromise.then(()=>{this.finishedLoading()})}return this.loadingPromise}addOnLoadListener(e){this.loadListeners.push(e),this.isLoaded&&this.invokeListener(e)}removeLoadListener(e){this.loadListeners=this.loadListeners.filter(t=>e===t)}finishedLoading(){this.isLoaded=!0,this.loadListeners.forEach(e=>{this.invokeListener(e)})}invokeListener(e){try{e()}catch(e){console.error("[AdsLoader] error calling listener",e.message)}}};var m=i(84973),f=i(7057),p=i(58104),v=i(55933),w=i(3708),b=class{constructor(e){this.onRefresh=e,this.timeBetweenRefreshesInMs=51e3,this.refreshTimeRemainingInMs=this.timeBetweenRefreshesInMs,this.gameplayStarted=!1,this.timeLastRefreshed=0}isLowEndHelper(){return!1}isSmartHelper(){return!1}isDefaultHelper(){return!1}initRefreshHelper(){}resetRefreshHelper(){}refresh(){let e=this.onRefresh();(e||this.refreshTimeRemainingInMs<=0)&&(this.refreshTimeRemainingInMs=this.timeBetweenRefreshesInMs,this.timeLastRefreshed=Date.now()),this.startRefreshTimer()}requestAdsFinished(){this.timeLastRefreshed=Date.now()}startRefreshTimer(){if(this.refreshTimeRemainingInMs<=0){this.refresh();return}this.refreshTimerStartedAt=Date.now(),this.refreshTimer=window.setTimeout(()=>{this.refreshTimeRemainingInMs=0,this.refresh()},this.refreshTimeRemainingInMs)}stopRefreshTimer(){if(this.refreshTimer){clearTimeout(this.refreshTimer);let e=Date.now()-this.refreshTimerStartedAt;this.refreshTimeRemainingInMs=this.refreshTimeRemainingInMs-e}}resetRefreshTimer(e){let t=this.timeBetweenRefreshesInMs;void 0!==e&&(t=Math.max(e,0)),this.refreshTimer&&clearTimeout(this.refreshTimer),this.refreshTimerStartedAt=Date.now(),this.refreshTimeRemainingInMs=t}},C=i(89950),I=class extends b{constructor(e,t){super(e),this.smartRefresh=t,this.refreshTimeRemainingInMs=t.minWaitInMs||3e4}isSmartHelper(){return!0}refresh=()=>{let e=this.onRefresh();(e||this.refreshTimeRemainingInMs<=0)&&(this.gameplayStarted?this.refreshTimeRemainingInMs=this.smartRefresh.maxWaitInMs||18e4:this.refreshTimeRemainingInMs=this.smartRefresh.minWaitInMs||3e4,this.timeLastRefreshed=Date.now()),this.startRefreshTimer()};initRefreshHelper=()=>{super.initRefreshHelper(),window.addEventListener("message",this.handleMessage)};resetRefreshHelper=()=>{super.resetRefreshHelper(),window.removeEventListener("message",this.handleMessage)};requestAdsFinished(){super.requestAdsFinished(),this.startRefreshTimer()}handleMessage=e=>{if(e.data&&e.data.type===C.V)switch(e.data.event){case"adFinished":case"gameplayStart":{if(this.gameplayStarted)return;this.gameplayStarted=!0;let e=this.smartRefresh.maxWaitInMs||18e4;this.resetRefreshTimer(e),this.startRefreshTimer();break}case"rewardedAd":case"midgameAd":case"gameplayStop":{if(!this.gameplayStarted)return;this.gameplayStarted=!1;let e=Date.now()-this.timeLastRefreshed,t=(this.smartRefresh.minWaitInMs||3e4)-e;this.resetRefreshTimer(t),this.startRefreshTimer()}}}},F=i(4235),y=class extends b{initRefreshHelper(){super.initRefreshHelper(),this.timeInitCalled=Date.now(),window.addEventListener("message",this.handleMessage),F.$()?.contentWindow?.postMessage("check-loading-state","*")}resetRefreshHelper(){super.resetRefreshHelper(),window.removeEventListener("message",this.handleMessage)}handleMessage=e=>{if(e.data&&e.data.type===C.V&&(e.data?.event==="gameFinishedLoading"||e.data?.event==="gameLoadingStateResponse"&&e.data.success)){let e=Date.now(),t=e-this.timeInitCalled;t>45e3?this.refresh():(this.refreshTimeRemainingInMs=Math.max(0,this.timeBetweenRefreshesInMs-t),this.startRefreshTimer())}}},T=class extends b{isDefaultHelper(){return!0}requestAdsFinished(){super.requestAdsFinished(),this.startRefreshTimer()}},k=i(29383),R=i(13882),A={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},U=i(78966),L=i(95570),S=i(22120),M=i(74040),D=i(13301),E=i(83514);let x=[{width:1910,height:970},{width:1360,height:660},{width:1370,height:650},{width:1370,height:620},{width:1530,height:750},{width:1360,height:650},{width:1910,height:940},{width:1370,height:660},{width:1360,height:630},{width:1080,height:710},{width:1920,height:970},{width:1360,height:620},{width:1910,height:960},{width:1370,height:670},{width:1530,height:710},{width:1910,height:930},{width:1370,height:630},{width:1920,height:940},{width:390,height:660}];var O=i(92975),H=i(57632),P=i(10029);let V=null;var B=i(58752),Z=i(33209),_=i(93988),q=i(29377);function W(){throw Error("[AdContext] No Advertising Context")}let N=o.createContext({addAdUnit:e=>W(),removeAdUnit:(e,t)=>W(),adblock:!1});(s=r||(r={})).ANDROID="android",s.IOS="ios",s.WINDOWS="windows",s.MAC="macos",s.LINUX="linux",s.CHROMIUM="chromiumos",s.UBUNTU="ubuntu",s.UNKNOWN="unknown",s.OTHER="other";let z={GB:.2,US:.2},$=["army","battle-royale","battleship","bloody","bomberman","cannon","first-person-shooter","gta","gun","horde-survival","hunting","jump-scare","killing","mmo","police","scary","shooting","sniper","soldier","surgery","survive","tank","third-person-shooter","war"],K=null;class j extends o.Component{static isFirstRequest=!0;countryCode=null;deviceInfo=null;disabledCountries=["RU","VE","BY"];bidderAttemptsWithoutBid={};biddersToDisable={};constructor(e){super(e),this.adUnits=[],this.timeInViewInMs=1e4,this.viewPortThreshold=.5,this.observer=null,this.loadingState="loadingAds",this.lowendRefreshControl=.05>Math.random()}componentDidMount(){let{pageUrlHelper:e,smartRefresh:t}=this.props;this.props.services.experimentService.getExperimentValueAsBoolean(_.hX).then(e=>{this.geoedgeExperiment=e||!1});let i=42e3;if(t.enabled){let e=t.minWaitInMs||3e4;i=e-2e3}this.timeInDomInMs=i,this.loadingState="loadingAds",this.observer=new l(this.viewPortThreshold,this.timeInViewInMs,this.timeInDomInMs),this.firstPageRequest=!0,this.userType=(0,B.OQ)()?"returning":"new",this.cmp().addInstallListener(this.onCMPInstalled);let s=e.shouldDisableAds()||this.props.disabled||!this.props.deviceType.isDesktop;s||(g.loadCrazyAds(e).then(()=>{j.isFirstRequest||window.CrazygamesAds.reset()}),this.props.services.adUnitService.getAdUnitsConfig().then(e=>{this.adConfig=e,this.toWaitingConfig()}),g.addOnLoadListener(this.onAdsLoaded)),this.resetBiddersToDisableInterval=window.setInterval(()=>{this.resetBiddersToDisable()},9e5)}componentWillUnmount(){this.loadingState="loadingAds",this.observer&&(this.stopObserving(),this.observer=null),this.cmp().removeConsentListener(this.onCMPConsented),this.cmp().removeInstallListener(this.onCMPInstalled);let{pageUrlHelper:e}=this.props;e.shouldDisableAds()||g.removeLoadListener(this.onAdsLoaded),this.getRefreshHelper()?.resetRefreshHelper();let t=window;t.CrazygamesAds&&t.CrazygamesAds.nextPage&&t.CrazygamesAds.nextPage(),window.clearInterval(this.resetBiddersToDisableInterval)}render(){return(0,n.jsx)(N.Provider,{value:{addAdUnit:this.addAdUnit,removeAdUnit:this.removeAdUnit,adblock:!1},children:this.props.children})}getCountryCode=()=>this.countryCode;onCMPInstalled=()=>{this.toCMPLoading()};onCMPConsented=()=>{this.toWaitForConsent()};onAdsLoaded=()=>{"loadingAds"===this.loadingState&&(this.loadingState="waitingAdconfig",this.initAds(),this.toWaitingConfig())};initAds(){window.CrazygamesAds.initAds(),this.props.services.crazyAnalyticsService.adsFinishedLoading(),this.props.services.analyticsService.checkAdblock()}toWaitingConfig(){"waitingAdconfig"===this.loadingState&&this.adConfig&&(this.loadingState="waitingCountry",this.toWaitingCountry())}async toWaitingCountry(){if("waitingCountry"===this.loadingState&&!this.countryCode){let{services:e}=this.props,{userInfoService:t}=e,i=await t.getUserInfo();this.countryCode=i.countryCode,this.deviceInfo=i.device,!this.inDisabledCountry(i.countryCode)&&(this.initRefreshHelper(),"waitingCountry"===this.loadingState&&(this.shouldWaitUntilConsented()&&this.cmp().addConsentListener(this.onCMPConsented),this.loadingState="loadingCMP",this.toCMPLoading()))}}inDisabledCountry(e){return!e||this.disabledCountries.some(t=>t===e)}toCMPLoading(){"loadingCMP"===this.loadingState&&(!(0,w.Z)(this.getCountryCode(),this.props.pageUrlHelper)||this.cmp().isInstalled())&&(this.loadingState="waitConsent",this.toWaitForConsent())}toWaitForConsent(){"waitConsent"===this.loadingState&&(this.shouldWaitUntilConsented()?this.cmp().userHasConsented()&&(this.loadingState="requestingAds",this.addUnitsToObserver(),this.toRequestAds()):(this.loadingState="requestingAds",this.addUnitsToObserver(),this.toRequestAds()))}async toRequestAds(){"requestingAds"===this.loadingState&&(await this.requestAds(),"requestingAds"===this.loadingState&&(this.addObserverCallbacks(),this.loadingState="finished"))}addAdUnit=e=>{!this.adUnits.find(t=>t.id===e.id)&&(this.adUnits.push(e),this.observer&&this.adConfig&&this.addUnitToObserver(e))};removeAdUnit=(e,t)=>{this.adUnits=this.adUnits.filter(t=>t.id!==e.id),this.observer&&this.adConfig&&this.removeUnitFromObserver(e,t)};async requestAds(){let e=this.adUnitsRequestConfig();if(0!==e.length&&(await this.observer.waitForObservedUnitsCallbacks(),"requestingAds"===this.loadingState))return this.requestAndRenderAds()}requestAndRenderAds=()=>{let e;if(!this.observer)return!1;e=this.firstPageRequest?this.adUnits.filter(e=>!this.observer.isUnitHidden(e.id)):this.adUnits.filter(e=>this.observer.canUnitRefresh(e.id));let t=e.map(e=>e.id),i=this.adUnitsRequestConfig();if(0===i.length||0===t.length)return!0;let s={units:i,codes:t},r=window.CrazygamesAds;if(void 0===r)return!1;let n=this.requestAdsOptions();return r.requestOnly(s,n).then(async e=>{if("loadingAds"===this.loadingState)return;let i=this.renderAds(t);if(e)for(let i of t){let t=this.getBiddersToConsiderForAdUnit(i,s,n);this.updateBidderAttemptsWithoutBid(i,e,t),delete this.biddersToDisable[i]}await i}).catch(e=>console.error(e)),this.firstPageRequest&&(this.firstPageRequest=!1,j.isFirstRequest=!1,this.getRefreshHelper()?.requestAdsFinished()),!0};requestAdsOptions(){let{dollarRate:e,priceFloor:t,...i}=this.adConfig.advertising,s=this.getTimeout(),r=this.adConfig.bidders.map(e=>this.mapApiConfigToBidderConfig(e)),n=this.isLoggedIn(),o=(()=>{let e=this.getPriceFloor()||t;return n&&(this.floorExperimentFactor=this.props.services.experimentService.getExperimentValueSync(_.So),this.floorExperimentFactor&&e)?e*Number(this.floorExperimentFactor):e})(),a=this.getUserDetails(),d=window.location.origin+window.location.pathname;return{...i,priceFloor:()=>o,bidders:r,dollarRate:e,timeout:s,trafficSource:this.trafficSource(),user:a,pageUrl:d,ortb2Site:this.ortb2SiteConfig(d),clientInfo:{country:this.getCountryCode(),domain:(0,Z.Ld)((0,Z.Jx)(this.props.pageUrlHelper.routeData.hostname)),browser:this.deviceInfo?.browser.name?.toLowerCase().replace(/\s/g,""),device:(0,D.l7)(this.props.deviceType)}}}ortb2SiteConfig(e){let t=(this.props.advertisingGame.tagsSlug||[]).filter(e=>-1===$.indexOf(e)),i={title:this.props.advertisingGame.gameName,url:window.location.href,context:2,userrating:`${this.props.advertisingGame.numLikes}`,sourcerelationship:1,keywords:t.join(",")};return{page:e,content:i}}async renderAds(e){try{let t=this.renderAdsOptions();await window.CrazygamesAds.render(e,t)}catch(e){console.error(e)}}renderAdsOptions(){let{dollarRate:e}=this.adConfig.advertising,t=this.getTimeout(),i=this.adConfig.bidders.find(e=>"google"===e.id),s=i?{googleBidder:{...this.mapApiConfigToBidderConfig(i),enabled:!0}}:{};return{dollarRate:e,dfp:this.dfpKeys(),banner:{callback:e=>{let{minPrice:t}=e;!function(e,t,i){if(i){if(null===V){let i=window.setTimeout(()=>{e.bannerAdConversion(V?.totalValue||0),function(e){if("undefined"==typeof gtag||!V||!V.totalValue)return;let t=V.totalValue;(0,P.requestIdleCallback)(()=>{gtag("event","conversion",{server_container_url:e?"https://server-side-tagging-je7se3osxa-uc.a.run.app":void 0,send_to:"AW-312835820/UBOSCNjR06wDEOz9lZUB",value:t,currency:"EUR"})},{timeout:2e3}),(0,f.YD)()&&(0,P.requestIdleCallback)(()=>{gtag("event","purchase",{server_container_url:e?"https://server-side-tagging-je7se3osxa-uc.a.run.app":void 0,allow_custom_scripts:!0,currency:"EUR",value:t,quantity:1,transaction_id:(0,H.Z)(),send_to:"DC-13034049/rev0/crazy0+items_sold"})},{timeout:2e3})}(t),V=null},1e3);V={timeoutId:i,totalValue:0}}V.totalValue=V.totalValue+i}}(this.props.services.crazyAnalyticsService,(0,q.N)((0,Z.Jx)(this.props.pageUrlHelper.routeData.hostname)),t)}},requestTimeout:t,...s}}trafficSource(){let e=(0,f.p9)();return e?"purchased":"organic"}getPriceFloor(){let e=this.getCountryCode();return e&&z[e]||null}getTimeout(){return j.isFirstRequest?2400:2e3}mapApiConfigToBidderConfig(e){let t={bidder:e.id,...e.config};return"adsense"===e.id?{...t,enabled:!1}:{enabled:!0,...t}}pageFocusChangeCallback=e=>{this.getRefreshHelper()?.stopRefreshTimer(),e&&"finished"===this.loadingState&&this.getRefreshHelper()?.refresh()};adUnitsRequestConfig(){let{units:e}=this.adConfig,t=this.adUnits.map(t=>{let i=e.find(e=>e.id===t.code);if(!i)return console.error(`[Advertising] Unexpected code ${t.code}`),null;let s=this.getBiddersToDisable(t.id),r=i.config.request.bidders,n=r.map(e=>s.includes(e.bidder)?{...e,enabled:!1}:e);return{adUnit:{mediaTypes:i.definition.mediaTypes,code:t.id},slotId:i.definition.slotId,...i.config.request,bidders:n}});return t.filter(e=>!!e)}addUnitsToObserver(){this.adUnits.forEach(e=>{this.addUnitToObserver(e)})}addObserverCallbacks(){this.observer.addPageFocusChangeCallback(this.pageFocusChangeCallback)}addUnitToObserver(e){let t=this.getUnitDefinition(e.code);if(!t){console.error("Missing definition",e.code);return}this.observer.addElement(e.id)}removeUnitFromObserver(e,t){let i=this.getUnitDefinition(e.code);if(!i){console.error("Missing definition",e.code);return}i.definition.refresh&&this.observer.removeElement(e.id,t)}stopObserving(){this.observer.stop(),this.observer=null,this.getRefreshHelper()?.stopRefreshTimer()}dfpKeys(){let e,t;let{pageUrlHelper:i,advertisingGame:s}=this.props,{gameSlug:r,tagsSlug:n,categoryEnSlug:o}=s,a=i.routeData.hostname,d=(0,f.FM)(),l=(0,f.dj)();if(l){let i=Date.now(),s=l.date,r=function(e,t,i){(0,R.Z)(2,arguments);var s,r=(0,k.Z)(e,t)/7;return((s=null==i?void 0:i.roundingMethod)?A[s]:A.trunc)(r)}(i,s)+1;e=`${l.adGroup}_week${r}`;let n=(0,U.Z)(s)+1,o=n<10?`0${n}`:`${n}`,a=`${(0,L.Z)(s)}`.slice(-2);t=`${l.adGroup}_${o}_${a}`}let h=this.mapOsToDfpOs(this.deviceInfo?.os.name),u=this.isLoggedIn();return{domain:a,advertising_campaign:d,pwa:`${(0,v.rQ)()}`,category_slug:o,game_slug:r,tags_slug:n.length>0?n:void 0,ad_group:e,ad_group_month:t,logged_in:`${u}`,user_type:this.userType,os:h,...function(){let e=window.innerWidth,t=window.innerHeight,i=x.some(i=>i.width===e&&i.height===t);if(i)return{browser_size:`${e}x${t}`}}(),[_.hX]:`${this.geoedgeExperiment}`,gamepage_exp3_v2:void 0===this.props.gamepage_exp_24?void 0:`${this.props.gamepage_exp_24}`,...u&&!!this.floorExperimentFactor&&{[_.So]:`${this.floorExperimentFactor}`}}}isLoggedIn(){return!!this.props.userContext.user}mapOsToDfpOs(e){if(!e)return r.UNKNOWN;let t=e.toLowerCase().replace(/\s/g,"");switch(t){case"android":return r.ANDROID;case"ios":return r.IOS;case"windows":return r.WINDOWS;case"macos":return r.MAC;case"linux":return r.LINUX;case"chromiumos":return r.CHROMIUM;case"ubuntu":return r.UBUNTU;default:return r.OTHER}}shouldWaitUntilConsented(){return(0,p.I)(this.getCountryCode())}getUnitDefinition(e){let t=this.adConfig.units.find(t=>t.id===e);return t}getRefreshHelper(){return this.refreshHelper||this.initRefreshHelper(),this.refreshHelper}initRefreshHelper(){if(!this.deviceInfo)return;let{smartRefresh:e}=this.props,t=this.requestAndRenderAds;e&&e.enabled?this.refreshHelper=new I(t,e):this.props.device.isLowEndDevice&&!this.lowendRefreshControl?this.refreshHelper=new y(t):this.refreshHelper=new T(t),this.refreshHelper.initRefreshHelper()}getUserEmail(){if(this.email)return this.email;let{userContext:e}=this.props,{user:t,loadingUser:i}=e;if(i)return;let s=t?.email?.trim().toLowerCase().replace(/\+[^@]*@/g,"@");return this.email=s,this.email}getUserDetails(){var e;let t=this.getUserEmail();return{email:t,amazon:{applicable:(e=this.deviceInfo,null===K&&(K=!!e&&["Firefox","Safari","Mobile Safari"].some(t=>(0,D.jU)(e?.browser,t))),K)},uid2:{applicable:!0}}}cmp(){return(0,h.a)()}getBiddersToDisable(e){let t=this.bidderAttemptsWithoutBid[e];if(!this.biddersToDisable[e]){if(t){let i=Object.keys(t),s=i.filter(e=>t[e]>=5);this.biddersToDisable[e]=s}else this.biddersToDisable[e]=[]}return this.biddersToDisable[e]}resetBiddersToDisable(){this.bidderAttemptsWithoutBid={},this.biddersToDisable={}}getBiddersToConsiderForAdUnit(e,t,i){let s={};(i.bidders||[]).forEach(e=>{s[e.bidder]={...e}});let r=t.units.find(t=>t.adUnit.code===e)?.bidders||[];return r.forEach(e=>{s[e.bidder]={...s[e.bidder],...e}}),Object.values(s).filter(e=>e.enabled&&"google"!==e.bidder).map(e=>e.bidder)}updateBidderAttemptsWithoutBid(e,t,i){this.bidderAttemptsWithoutBid[e]=this.bidderAttemptsWithoutBid[e]||{};let s=(t[e]?.bids??[]).map(e=>e.bidder);i.forEach(t=>{s.includes(t)?this.bidderAttemptsWithoutBid[e][t]=0:this.bidderAttemptsWithoutBid[e][t]=(this.bidderAttemptsWithoutBid[e][t]||0)+1})}}var X=(0,O.Z)((0,m.Z)(function(e){let t=t=>{let{pageUrlHelper:i}=o.useContext(E.t);return(0,n.jsx)(e,{pageUrlHelper:i,...t})};return t}((0,S.Z)(function(e){let t=t=>{let i=o.useContext(M.S);return(0,n.jsx)(e,{userContext:i,...t})};return t}(j)))))},32184:function(e,t,i){i.d(t,{f:function(){return c}});var s=i(85893),r=i(50319),n=i(73359),o=i(67294),a=i(74040),d=i(17670),l=i(69311),h=i(37899),u=i(23500);let c=o.createContext({loading:!1,addScore:()=>{}}),g=e=>{let{gameId:t,children:i}=e,{user:g,loadingUser:m}=o.useContext(a.S),[f]=(0,r.D)(d.HL),[p,v]=(0,o.useState)(),[w,b]=(0,o.useState)(),{services:C}=o.useContext(h.Z),I=C?.userInfoService,[F,{loading:y,data:T,error:k,stopPolling:R,startPolling:A}]=(0,n.t)(d.wS,{variables:{gameId:t,before:0,after:0},fetchPolicy:"network-only",notifyOnNetworkStatusChange:!0,onCompleted:e=>{if(!g||!e.ranking[0])return;let t={score:e.ranking[0].score,position:e.ranking[0].position};if(t.score===p?.score&&t.position===p?.position)return;let i=!!w&&w.score>t.score;i||v(t)}});o.useEffect(()=>{if(!g){v(void 0),R();return}F(),(0,l.nb)()||A(l.SZ)},[F,A,R,g]),o.useEffect(()=>{if(!g||!w||!T&&!k)return;let e=async()=>{if(k||T&&0===T.ranking.length||w.score>T.ranking[0].score){let e=await f({variables:{input:{encryptedScore:w.encryptedScore,gameId:t}}}),i=e.data?.addScore;i&&v({score:i.score,position:i.position})}};e(),b(void 0)},[t,w,g,T,k,f]);let U=async(e,i)=>{if(t!==l.FZ){console.error("This game doesn't support user score.");return}if((0,l.nb)()){console.error("Game challenge is over.");return}if(!g){(!w||w.score<e)&&b({score:e,encryptedScore:i});return}if(p&&e<=p.score)return;let s=await f({variables:{input:{encryptedScore:i,gameId:t}}}),r=s.data?.addScore;r&&(I&&p&&r.score>p.score&&(0,u.Z)(I),v({score:r.score,position:r.position}))};return(0,s.jsx)(c.Provider,{value:{userScore:p,loading:y||m,addScore:U},children:i})};t.Z=g},23500:function(e,t,i){var s=i(32350),r=i(46413),n=i(44038);async function o(e){if(r.Z.isFullscreen())return;let t=await e.getUserInfo(),o=(0,n.T)(t?.device,!!window.__NEXT_DATA__.props.forceIpad,!!window.__NEXT_DATA__.props.forceAndroidTablet);if(o.isLowEndDevice)return;let a=await i.e(39883).then(i.bind(i,39883)),d=a.create(void 0,{resize:!0,useWorker:!0});d({particleCount:100,angle:60,spread:65,origin:{x:0},colors:s.eI,zIndex:1305}),d({particleCount:100,angle:120,spread:65,origin:{x:1},colors:s.eI,zIndex:1305})}t.Z=o},4235:function(e,t,i){i.d(t,{$:function(){return r},x:function(){return s}});let s="game-iframe";function r(){let e=document.getElementById(s);return e}},89041:function(e,t,i){var s=i(73359),r=i(37887),n=i(67294),o=i(89950),a=i(74040),d=i(63922),l=i(23180),h=i(46313),u=i(32184),c=i(46413);let g=e=>{let{gameId:t}=e,{user:i}=n.useContext(a.S),g=n.useContext(u.f),{openedDrawer:m}=n.useContext(l.rf),{drawerOpeningPending:f}=n.useContext(l.Xm),{openDrawer:p}=n.useContext(l.s9),[v,w]=(0,s.t)(d.bI),[b,C]=(0,s.t)(d.fo),[I,F]=(0,n.useState)(!1),[y,T]=(0,n.useState)(null),{data:k}=(0,r.a)(d.Qt,{skip:!i});(0,n.useEffect)(()=>{if(!f&&I&&y&&(i||m||(F(!1),T(null),y.postMessage({type:"showAuthPromptResponse",data:{error:{code:"userCancelled",message:"User cancelled the auth prompt"}}},"*")),i&&k&&!m)){F(!1),T(null);let e={type:"showAuthPromptResponse",data:{user:{id:k.me.id,username:`${k.me.username}`,profilePictureUrl:`${h.Z.Instance.data.images}${k.me.profile.avatar}`}}};y.postMessage(e,"*")}},[m,I,i,y,k,f]);let R=(0,n.useCallback)(async e=>{let s={type:"requestUserTokenResponse",data:{}};if(!i){s.data={error:{code:"userNotAuthenticated",message:"The user is not authenticated"}},e.postMessage(s,"*");return}if(w.loading)return;let r=await v({variables:{gameId:t},fetchPolicy:"network-only"}),n=r.data?.userToken;r.error||!n?(console.error("User token retrieve error",r.error),s.data={error:{code:"unexpectedError",message:"Failed to retrieve user token"}}):s.data={token:n.token,expiresIn:n.expiresIn},e.postMessage(s,"*")},[i,w.loading,v,t]),A=(0,n.useCallback)(async e=>{let s={type:"requestXsollaUserTokenResponse",data:{}};if(!i){s.data={error:{code:"userNotAuthenticated",message:"The user is not authenticated"}},e.postMessage(s,"*");return}if(C.loading)return;let r=await b({variables:{gameId:t},fetchPolicy:"network-only"}),n=r.data?.xsollaUserToken;if(r.error||!n){console.error("Xsolla user token retrieve error",r.error);let e=r.error?.graphQLErrors?.[0]?.extensions?.code,t=r.error?.graphQLErrors?.[0]?.message;e?s.data={error:{code:e,message:t||""}}:s.data={error:{code:"unexpectedError",message:"Failed to retrieve Xsolla user token"}}}else s.data={token:n.token,expiresIn:n.expiresIn};e.postMessage(s,"*")},[t,b,i,C.loading]);return(0,n.useEffect)(()=>{let e=e=>{let t=()=>{setTimeout(()=>{p("signIn"),F(!0),T(e.source),c.Z.removeFakeFullscreenListener(t)},100)};c.Z.isFakeFullscreen()?c.Z.addFakeFullscreenListener(t):(p("signIn"),F(!0),T(e.source))},t=e=>{let{score:t,encryptedScore:i}=e.data;g.addScore(t,i)},i=i=>{if(i.data&&i.data.type===o.V)switch(i.data.event){case"requestUserToken":R(i.source);break;case"requestXsollaUserToken":A(i.source);break;case"showAuthPrompt":e(i);break;case"addScore":t(i);break;default:return}};return window.addEventListener("message",i),function(){window.removeEventListener("message",i)}},[t,i,v,p,g,A,R]),null};t.Z=g},17670:function(e,t,i){i.d(t,{E8:function(){return o},HL:function(){return n},Mg:function(){return d},wS:function(){return a}});var s=i(12774),r=i(14646);let n=r.Dr,o=s.Qi,a=s.SD,d=s.mj},92975:function(e,t,i){var s=i(85893),r=i(67294),n=i(42257);t.Z=function(e){let t=t=>{let i=r.useContext(n.Z);return(0,s.jsx)(e,{deviceType:i,...t})};return t}},69311:function(e,t,i){i.d(t,{FZ:function(){return o},I7:function(){return r},SZ:function(){return d},_c:function(){return s},nb:function(){return n},w8:function(){return a}});let s="forceGCResults",r=new Date(Date.UTC(2023,11,14,7)).getTime();function n(e){if(e&&e[s])return!0;let t=new Date().getTime();return t>=r}let o="16562",a="crazy-roll-3d",d=3e5},46413:function(e,t){let i=new class{fakeFullscreenListeners=[];eventKeys=["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"];isInFakeFullscreen=!1;removeFullscreenListener(e){this.eventKeys.forEach(t=>{document.removeEventListener(t,e)})}addFullscreenListener(e){this.eventKeys.forEach(t=>{document.addEventListener(t,e)})}addFakeFullscreenListener(e){this.fakeFullscreenListeners.push(e)}removeFakeFullscreenListener(e){this.fakeFullscreenListeners=this.fakeFullscreenListeners.filter(t=>t!==e)}isFullscreen(){let e=window.document;return!!(e.fullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||e.msFullscreenElement)}isFakeFullscreen(){return this.isInFakeFullscreen}enteredFakeFullscreen(){this.isInFakeFullscreen||(this.isInFakeFullscreen=!0,this.fakeFullscreenListeners.forEach(e=>e()))}exitFakeFullscreen(){this.isInFakeFullscreen&&(this.isInFakeFullscreen=!1,this.fakeFullscreenListeners.forEach(e=>e()))}forceLockOrientation=async e=>{if(e&&"BOTH"!==e&&"screen"in window&&window.screen&&window.screen.orientation&&window.screen.orientation.lock)try{await window.screen.orientation.lock("PORTRAIT"===e?"portrait":"landscape")}catch(e){}};exitNativeFullscreen(){let e=window.document,t=e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen;return!!t&&(window.document.fullscreenElement&&t.call(e),!0)}};t.Z=i}}]);