!function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null};if(!document.getElementById("fit-vids-style")){var i=document.createElement("div"),a=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0],o="&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";i.className="fit-vids-style",i.id="fit-vids-style",i.style.display="none",i.innerHTML=o,a.parentNode.insertBefore(i,a)}return t&&e.extend(n,t),this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];n.customSelector&&t.push(n.customSelector);var i=e(this).find(t.join(","));i=i.not("object object"),i.each(function(){var t=e(this);if(!("embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){var n="object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),i=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),a=n/i;if(!t.attr("id")){var o="fitvid"+Math.floor(999999*Math.random());t.attr("id",o)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*a+"%"),t.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),function(e){e.flexslider=function(t,n){var i=e(t),a=e.extend({},e.flexslider.defaults,n),o=a.namespace,s="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,r=s?"touchend":"click",l="vertical"===a.direction,c=a.reverse,d=0<a.itemWidth,u="fade"===a.animation,p=""!==a.asNavFor,m={};e.data(t,"flexslider",i),m={init:function(){i.animating=!1,i.currentSlide=a.startAt,i.animatingTo=i.currentSlide,i.atEnd=0===i.currentSlide||i.currentSlide===i.last,i.containerSelector=a.selector.substr(0,a.selector.search(" ")),i.slides=e(a.selector,i),i.container=e(i.containerSelector,i),i.count=i.slides.length,i.syncExists=0<e(a.sync).length,"slide"===a.animation&&(a.animation="swing"),i.prop=l?"top":"marginLeft",i.args={},i.manualPause=!1;var t=i,n;if((n=!a.video)&&(n=!u)&&(n=a.useCSS))e:{n=document.createElement("div");var o=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],r;for(r in o)if(void 0!==n.style[o[r]]){i.pfx=o[r].replace("Perspective","").toLowerCase(),i.prop="-"+i.pfx+"-transform",n=!0;break e}n=!1}t.transitions=n,""!==a.controlsContainer&&(i.controlsContainer=0<e(a.controlsContainer).length&&e(a.controlsContainer)),""!==a.manualControls&&(i.manualControls=0<e(a.manualControls).length&&e(a.manualControls)),a.randomize&&(i.slides.sort(function(){return Math.round(Math.random())-.5}),i.container.empty().append(i.slides)),i.doMath(),p&&m.asNav.setup(),i.setup("init"),a.controlNav&&m.controlNav.setup(),a.directionNav&&m.directionNav.setup(),a.keyboard&&(1===e(i.containerSelector).length||a.multipleKeyboard)&&e(document).bind("keyup",function(e){e=e.keyCode,i.animating||39!==e&&37!==e||(e=39===e?i.getTarget("next"):37===e?i.getTarget("prev"):!1,i.flexAnimate(e,a.pauseOnAction))}),a.mousewheel&&i.bind("mousewheel",function(e,t){e.preventDefault();var n=i.getTarget(0>t?"next":"prev");i.flexAnimate(n,a.pauseOnAction)}),a.pausePlay&&m.pausePlay.setup(),a.slideshow&&(a.pauseOnHover&&i.hover(function(){!i.manualPlay&&!i.manualPause&&i.pause()},function(){!i.manualPause&&!i.manualPlay&&i.play()}),0<a.initDelay?setTimeout(i.play,a.initDelay):i.play()),s&&a.touch&&m.touch(),(!u||u&&a.smoothHeight)&&e(window).bind("resize focus",m.resize),setTimeout(function(){a.start(i)},200)},asNav:{setup:function(){i.asNav=!0,i.animatingTo=Math.floor(i.currentSlide/i.move),i.currentItem=i.currentSlide,i.slides.removeClass(o+"active-slide").eq(i.currentItem).addClass(o+"active-slide"),i.slides.click(function(t){t.preventDefault();var t=e(this),n=t.index();!e(a.asNavFor).data("flexslider").animating&&!t.hasClass("active")&&(i.direction=i.currentItem<n?"next":"prev",i.flexAnimate(n,a.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){i.manualControls?m.controlNav.setupManual():m.controlNav.setupPaging()},setupPaging:function(){var t=1,n;if(i.controlNavScaffold=e('<ol class="'+o+"control-nav "+o+("thumbnails"===a.controlNav?"control-thumbs":"control-paging")+'"></ol>'),1<i.pagingCount)for(var l=0;l<i.pagingCount;l++)n="thumbnails"===a.controlNav?'<img src="'+i.slides.eq(l).attr("data-thumb")+'"/>':"<a>"+t+"</a>",i.controlNavScaffold.append("<li>"+n+"</li>"),t++;i.controlsContainer?e(i.controlsContainer).append(i.controlNavScaffold):i.append(i.controlNavScaffold),m.controlNav.set(),m.controlNav.active(),i.controlNavScaffold.delegate("a, img",r,function(t){t.preventDefault();var t=e(this),n=i.controlNav.index(t);t.hasClass(o+"active")||(i.direction=n>i.currentSlide?"next":"prev",i.flexAnimate(n,a.pauseOnAction))}),s&&i.controlNavScaffold.delegate("a","click touchstart",function(e){e.preventDefault()})},setupManual:function(){i.controlNav=i.manualControls,m.controlNav.active(),i.controlNav.live(r,function(t){t.preventDefault();var t=e(this),n=i.controlNav.index(t);t.hasClass(o+"active")||(i.direction=n>i.currentSlide?"next":"prev",i.flexAnimate(n,a.pauseOnAction))}),s&&i.controlNav.live("click touchstart",function(e){e.preventDefault()})},set:function(){i.controlNav=e("."+o+"control-nav li "+("thumbnails"===a.controlNav?"img":"a"),i.controlsContainer?i.controlsContainer:i)},active:function(){i.controlNav.removeClass(o+"active").eq(i.animatingTo).addClass(o+"active")},update:function(t,n){1<i.pagingCount&&"add"===t?i.controlNavScaffold.append(e("<li><a>"+i.count+"</a></li>")):1===i.pagingCount?i.controlNavScaffold.find("li").remove():i.controlNav.eq(n).closest("li").remove(),m.controlNav.set(),1<i.pagingCount&&i.pagingCount!==i.controlNav.length?i.update(n,t):m.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+o+'direction-nav"><li><a class="'+o+'prev" href="#">'+a.prevText+'</a></li><li><a class="'+o+'next" href="#">'+a.nextText+"</a></li></ul>");i.controlsContainer?(e(i.controlsContainer).append(t),i.directionNav=e("."+o+"direction-nav li a",i.controlsContainer)):(i.append(t),i.directionNav=e("."+o+"direction-nav li a",i)),m.directionNav.update(),i.directionNav.bind(r,function(t){t.preventDefault(),t=i.getTarget(e(this).hasClass(o+"next")?"next":"prev"),i.flexAnimate(t,a.pauseOnAction)}),s&&i.directionNav.bind("click touchstart",function(e){e.preventDefault()})},update:function(){var e=o+"disabled";1===i.pagingCount?i.directionNav.addClass(e):a.animationLoop?i.directionNav.removeClass(e):0===i.animatingTo?i.directionNav.removeClass(e).filter("."+o+"prev").addClass(e):i.animatingTo===i.last?i.directionNav.removeClass(e).filter("."+o+"next").addClass(e):i.directionNav.removeClass(e)}},pausePlay:{setup:function(){var t=e('<div class="'+o+'pauseplay"><a></a></div>');i.controlsContainer?(i.controlsContainer.append(t),i.pausePlay=e("."+o+"pauseplay a",i.controlsContainer)):(i.append(t),i.pausePlay=e("."+o+"pauseplay a",i)),m.pausePlay.update(a.slideshow?o+"pause":o+"play"),i.pausePlay.bind(r,function(t){t.preventDefault(),e(this).hasClass(o+"pause")?(i.manualPause=!0,i.manualPlay=!1,i.pause()):(i.manualPause=!1,i.manualPlay=!0,i.play())}),s&&i.pausePlay.bind("click touchstart",function(e){e.preventDefault()})},update:function(e){"play"===e?i.pausePlay.removeClass(o+"pause").addClass(o+"play").text(a.playText):i.pausePlay.removeClass(o+"play").addClass(o+"pause").text(a.pauseText)}},touch:function(){function e(e){m=l?o-e.touches[0].pageY:o-e.touches[0].pageX,f=l?Math.abs(m)<Math.abs(e.touches[0].pageX-s):Math.abs(m)<Math.abs(e.touches[0].pageY-s),(!f||500<Number(new Date)-v)&&(e.preventDefault(),!u&&i.transitions&&(a.animationLoop||(m/=0===i.currentSlide&&0>m||i.currentSlide===i.last&&m>0?Math.abs(m)/p+2:1),i.setProps(r+m,"setTouch")))}function n(){if(t.removeEventListener("touchmove",e,!1),i.animatingTo===i.currentSlide&&!f&&null!==m){var l=c?-m:m,d=i.getTarget(l>0?"next":"prev");i.canAdvance(d)&&(550>Number(new Date)-v&&50<Math.abs(l)||Math.abs(l)>p/2)?i.flexAnimate(d,a.pauseOnAction):u||i.flexAnimate(i.currentSlide,a.pauseOnAction,!0)}t.removeEventListener("touchend",n,!1),r=m=s=o=null}var o,s,r,p,m,v,f=!1;t.addEventListener("touchstart",function(u){i.animating?u.preventDefault():1===u.touches.length&&(i.pause(),p=l?i.h:i.w,v=Number(new Date),r=d&&c&&i.animatingTo===i.last?0:d&&c?i.limit-(i.itemW+a.itemMargin)*i.move*i.animatingTo:d&&i.currentSlide===i.last?i.limit:d?(i.itemW+a.itemMargin)*i.move*i.currentSlide:c?(i.last-i.currentSlide+i.cloneOffset)*p:(i.currentSlide+i.cloneOffset)*p,o=l?u.touches[0].pageY:u.touches[0].pageX,s=l?u.touches[0].pageX:u.touches[0].pageY,t.addEventListener("touchmove",e,!1),t.addEventListener("touchend",n,!1))},!1)},resize:function(){!i.animating&&i.is(":visible")&&(d||i.doMath(),u?m.smoothHeight():d?(i.slides.width(i.computedW),i.update(i.pagingCount),i.setProps()):l?(i.viewport.height(i.h),i.setProps(i.h,"setTotal")):(a.smoothHeight&&m.smoothHeight(),i.newSlides.width(i.computedW),i.setProps(i.computedW,"setTotal")))},smoothHeight:function(e){if(!l||u){var t=u?i:i.viewport;e?t.animate({height:i.slides.eq(i.animatingTo).height()},e):t.height(i.slides.eq(i.animatingTo).height())}},sync:function(t){var n=e(a.sync).data("flexslider"),o=i.animatingTo;switch(t){case"animate":n.flexAnimate(o,a.pauseOnAction,!1,!0);break;case"play":!n.playing&&!n.asNav&&n.play();break;case"pause":n.pause()}}},i.flexAnimate=function(t,n,r,v,f){if(p&&1===i.pagingCount&&(i.direction=i.currentItem<t?"next":"prev"),!i.animating&&(i.canAdvance(t,f)||r)&&i.is(":visible")){if(p&&v){if(r=e(a.asNavFor).data("flexslider"),i.atEnd=0===t||t===i.count-1,r.flexAnimate(t,!0,!1,!0,f),i.direction=i.currentItem<t?"next":"prev",r.direction=i.direction,Math.ceil((t+1)/i.visible)-1===i.currentSlide||0===t)return i.currentItem=t,i.slides.removeClass(o+"active-slide").eq(t).addClass(o+"active-slide"),!1;i.currentItem=t,i.slides.removeClass(o+"active-slide").eq(t).addClass(o+"active-slide"),t=Math.floor(t/i.visible)}if(i.animating=!0,i.animatingTo=t,a.before(i),n&&i.pause(),i.syncExists&&!f&&m.sync("animate"),a.controlNav&&m.controlNav.active(),d||i.slides.removeClass(o+"active-slide").eq(t).addClass(o+"active-slide"),i.atEnd=0===t||t===i.last,a.directionNav&&m.directionNav.update(),t===i.last&&(a.end(i),a.animationLoop||i.pause()),u)s?(i.slides.eq(i.currentSlide).css({opacity:0,zIndex:1}),i.slides.eq(t).css({opacity:1,zIndex:2}),i.slides.unbind("webkitTransitionEnd transitionend"),i.slides.eq(i.currentSlide).bind("webkitTransitionEnd transitionend",function(){a.after(i)}),i.animating=!1,i.currentSlide=i.animatingTo):(i.slides.eq(i.currentSlide).fadeOut(a.animationSpeed,a.easing),i.slides.eq(t).fadeIn(a.animationSpeed,a.easing,i.wrapup));else{var h=l?i.slides.filter(":first").height():i.computedW;d?(t=a.itemWidth>i.w?2*a.itemMargin:a.itemMargin,t=(i.itemW+t)*i.move*i.animatingTo,t=t>i.limit&&1!==i.visible?i.limit:t):t=0===i.currentSlide&&t===i.count-1&&a.animationLoop&&"next"!==i.direction?c?(i.count+i.cloneOffset)*h:0:i.currentSlide===i.last&&0===t&&a.animationLoop&&"prev"!==i.direction?c?0:(i.count+1)*h:c?(i.count-1-t+i.cloneOffset)*h:(t+i.cloneOffset)*h,i.setProps(t,"",a.animationSpeed),i.transitions?(a.animationLoop&&i.atEnd||(i.animating=!1,i.currentSlide=i.animatingTo),i.container.unbind("webkitTransitionEnd transitionend"),i.container.bind("webkitTransitionEnd transitionend",function(){i.wrapup(h)})):i.container.animate(i.args,a.animationSpeed,a.easing,function(){i.wrapup(h)})}a.smoothHeight&&m.smoothHeight(a.animationSpeed)}},i.wrapup=function(e){!u&&!d&&(0===i.currentSlide&&i.animatingTo===i.last&&a.animationLoop?i.setProps(e,"jumpEnd"):i.currentSlide===i.last&&0===i.animatingTo&&a.animationLoop&&i.setProps(e,"jumpStart")),i.animating=!1,i.currentSlide=i.animatingTo,a.after(i)},i.animateSlides=function(){i.animating||i.flexAnimate(i.getTarget("next"))},i.pause=function(){clearInterval(i.animatedSlides),i.playing=!1,a.pausePlay&&m.pausePlay.update("play"),i.syncExists&&m.sync("pause")},i.play=function(){i.animatedSlides=setInterval(i.animateSlides,a.slideshowSpeed),i.playing=!0,a.pausePlay&&m.pausePlay.update("pause"),i.syncExists&&m.sync("play")},i.canAdvance=function(e,t){var n=p?i.pagingCount-1:i.last;return t?!0:p&&i.currentItem===i.count-1&&0===e&&"prev"===i.direction?!0:p&&0===i.currentItem&&e===i.pagingCount-1&&"next"!==i.direction?!1:e!==i.currentSlide||p?a.animationLoop?!0:i.atEnd&&0===i.currentSlide&&e===n&&"next"!==i.direction?!1:i.atEnd&&i.currentSlide===n&&0===e&&"next"===i.direction?!1:!0:!1},i.getTarget=function(e){return i.direction=e,"next"===e?i.currentSlide===i.last?0:i.currentSlide+1:0===i.currentSlide?i.last:i.currentSlide-1},i.setProps=function(e,t,n){var o,s=e?e:(i.itemW+a.itemMargin)*i.move*i.animatingTo;o=-1*function(){if(d)return"setTouch"===t?e:c&&i.animatingTo===i.last?0:c?i.limit-(i.itemW+a.itemMargin)*i.move*i.animatingTo:i.animatingTo===i.last?i.limit:s;switch(t){case"setTotal":return c?(i.count-1-i.currentSlide+i.cloneOffset)*e:(i.currentSlide+i.cloneOffset)*e;case"setTouch":return e;case"jumpEnd":return c?e:i.count*e;case"jumpStart":return c?i.count*e:e;default:return e}}()+"px",i.transitions&&(o=l?"translate3d(0,"+o+",0)":"translate3d("+o+",0,0)",n=void 0!==n?n/1e3+"s":"0s",i.container.css("-"+i.pfx+"-transition-duration",n)),i.args[i.prop]=o,(i.transitions||void 0===n)&&i.container.css(i.args)},i.setup=function(t){if(u)i.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===t&&(s?i.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+a.animationSpeed/1e3+"s ease",zIndex:1}).eq(i.currentSlide).css({opacity:1,zIndex:2}):i.slides.eq(i.currentSlide).fadeIn(a.animationSpeed,a.easing)),a.smoothHeight&&m.smoothHeight();else{var n,r;"init"===t&&(i.viewport=e('<div class="'+o+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(i).append(i.container),i.cloneCount=0,i.cloneOffset=0,c&&(r=e.makeArray(i.slides).reverse(),i.slides=e(r),i.container.empty().append(i.slides))),a.animationLoop&&!d&&(i.cloneCount=2,i.cloneOffset=1,"init"!==t&&i.container.find(".clone").remove(),i.container.append(i.slides.first().clone().addClass("clone")).prepend(i.slides.last().clone().addClass("clone"))),i.newSlides=e(a.selector,i),n=c?i.count-1-i.currentSlide+i.cloneOffset:i.currentSlide+i.cloneOffset,l&&!d?(i.container.height(200*(i.count+i.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){i.newSlides.css({display:"block"}),i.doMath(),i.viewport.height(i.h),i.setProps(n*i.h,"init")},"init"===t?100:0)):(i.container.width(200*(i.count+i.cloneCount)+"%"),i.setProps(n*i.computedW,"init"),setTimeout(function(){i.doMath(),i.newSlides.css({width:i.computedW,"float":"left",display:"block"}),a.smoothHeight&&m.smoothHeight()},"init"===t?100:0))}d||i.slides.removeClass(o+"active-slide").eq(i.currentSlide).addClass(o+"active-slide")},i.doMath=function(){var e=i.slides.first(),t=a.itemMargin,n=a.minItems,o=a.maxItems;i.w=i.width(),i.h=e.height(),i.boxPadding=e.outerWidth()-e.width(),d?(i.itemT=a.itemWidth+t,i.minW=n?n*i.itemT:i.w,i.maxW=o?o*i.itemT:i.w,i.itemW=i.minW>i.w?(i.w-t*n)/n:i.maxW<i.w?(i.w-t*o)/o:a.itemWidth>i.w?i.w:a.itemWidth,i.visible=Math.floor(i.w/(i.itemW+t)),i.move=0<a.move&&a.move<i.visible?a.move:i.visible,i.pagingCount=Math.ceil((i.count-i.visible)/i.move+1),i.last=i.pagingCount-1,i.limit=1===i.pagingCount?0:a.itemWidth>i.w?(i.itemW+2*t)*i.count-i.w-t:(i.itemW+t)*i.count-i.w-t):(i.itemW=i.w,i.pagingCount=i.count,i.last=i.count-1),i.computedW=i.itemW-i.boxPadding},i.update=function(e,t){i.doMath(),d||(e<i.currentSlide?i.currentSlide+=1:e<=i.currentSlide&&0!==e&&(i.currentSlide-=1),i.animatingTo=i.currentSlide),a.controlNav&&!i.manualControls&&("add"===t&&!d||i.pagingCount>i.controlNav.length?m.controlNav.update("add"):("remove"===t&&!d||i.pagingCount<i.controlNav.length)&&(d&&i.currentSlide>i.last&&(i.currentSlide-=1,i.animatingTo-=1),m.controlNav.update("remove",i.last))),a.directionNav&&m.directionNav.update()},i.addSlide=function(t,n){var o=e(t);i.count+=1,i.last=i.count-1,l&&c?void 0!==n?i.slides.eq(i.count-n).after(o):i.container.prepend(o):void 0!==n?i.slides.eq(n).before(o):i.container.append(o),i.update(n,"add"),i.slides=e(a.selector+":not(.clone)",i),i.setup(),a.added(i)},i.removeSlide=function(t){var n=isNaN(t)?i.slides.index(e(t)):t;i.count-=1,i.last=i.count-1,isNaN(t)?e(t,i.slides).remove():l&&c?i.slides.eq(i.last).remove():i.slides.eq(t).remove(),i.doMath(),i.update(n,"remove"),i.slides=e(a.selector+":not(.clone)",i),i.setup(),a.removed(i)},m.init()},e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}},e.fn.flexslider=function(t){if(void 0===t&&(t={}),"object"==typeof t)return this.each(function(){var n=e(this),i=n.find(t.selector?t.selector:".slides > li");1===i.length?(i.fadeIn(400),t.start&&t.start(n)):void 0==n.data("flexslider")&&new e.flexslider(this,t)});var n=e(this).data("flexslider");switch(t){case"play":n.play();break;case"pause":n.pause();break;case"next":n.flexAnimate(n.getTarget("next"),!0);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),!0);break;default:"number"==typeof t&&n.flexAnimate(t,!0)}}}(jQuery),$(window).load(function(){$("html").removeClass("no-js"),$(".flexslider").flexslider({slideshow:!0})});