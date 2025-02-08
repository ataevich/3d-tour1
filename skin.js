// Garden Gnome Software - Skin
// Pano2VR 5.2.4/15996
// Filename: asd.ggsk
// Generated Вс фев 9 04:17:58 2025

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._loading=document.createElement('div');
		this._loading.ggId="loading";
		this._loading.ggLeft=-38;
		this._loading.ggTop=17;
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.className='ggskin ggskin_container ';
		this._loading.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -38px;';
		hs+='position : absolute;';
		hs+='top : 17px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		this._loading.setAttribute('style',hs);
		this._loading.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		me._loading.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._loadingtext=document.createElement('div');
		this._loadingtext__text=document.createElement('div');
		this._loadingtext.className='ggskin ggskin_textdiv';
		this._loadingtext.ggTextDiv=this._loadingtext__text;
		this._loadingtext.ggId="loadingtext";
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		this._loadingtext.className='ggskin ggskin_text ';
		this._loadingtext.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 51px;';
		hs+='position : absolute;';
		hs+='top : 47px;';
		hs+='visibility : inherit;';
		hs+='width : 53px;';
		hs+='pointer-events:auto;';
		this._loadingtext.setAttribute('style',hs);
		this._loadingtext.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loadingtext__text.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			var hs=(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		this._loadingtext.appendChild(this._loadingtext__text);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingtext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		this._loading.appendChild(this._loadingtext);
		this.divSkin.appendChild(this._loading);
		this._container_1=document.createElement('div');
		this._container_1.ggId="Container 1";
		this._container_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_1.ggVisible=false;
		this._container_1.className='ggskin ggskin_container ';
		this._container_1.ggType='container';
		hs ='';
		hs+='height : 642px;';
		hs+='left : 574px;';
		hs+='position : absolute;';
		hs+='top : 119px;';
		hs+='visibility : hidden;';
		hs+='width : 771px;';
		hs+='pointer-events:none;';
		this._container_1.setAttribute('style',hs);
		this._container_1.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		me._container_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._container_1.onmousedown=function (e) {
			me._container_1.ggVisible = !me._container_1.ggVisible;
			var flag=me._container_1.ggVisible;
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility=((flag)&&(Number(me._container_1.style.opacity)>0||!me._container_1.style.opacity))?'inherit':'hidden';
		}
		this._container_1.ggUpdatePosition=function (useTransition) {
		}
		this._image_2=document.createElement('div');
		this._image_2__img=document.createElement('img');
		this._image_2__img.className='ggskin ggskin_image';
		this._image_2__img.setAttribute('src',basePath + 'images/image_2.png');
		this._image_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_2__img.className='ggskin ggskin_image';
		this._image_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_2__img);
		this._image_2.appendChild(this._image_2__img);
		this._image_2.ggId="Image 2";
		this._image_2.ggLeft=-883;
		this._image_2.ggTop=-368;
		this._image_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_2.ggVisible=true;
		this._image_2.className='ggskin ggskin_image ';
		this._image_2.ggType='image';
		hs ='';
		hs+='height : 867px;';
		hs+='left : -883px;';
		hs+='position : absolute;';
		hs+='top : -368px;';
		hs+='visibility : inherit;';
		hs+='width : 1767px;';
		hs+='pointer-events:auto;';
		this._image_2.setAttribute('style',hs);
		this._image_2.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._button_1=document.createElement('div');
		this._button_1__img=document.createElement('img');
		this._button_1__img.className='ggskin ggskin_button';
		this._button_1__img.setAttribute('src',basePath + 'images/button_1.png');
		this._button_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_1__img.className='ggskin ggskin_button';
		this._button_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_1__img);
		this._button_1.appendChild(this._button_1__img);
		this._button_1.ggId="Button 1";
		this._button_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_1.ggVisible=true;
		this._button_1.className='ggskin ggskin_button ';
		this._button_1.ggType='button';
		hs ='';
		hs+='height : 73px;';
		hs+='left : 1025px;';
		hs+='position : absolute;';
		hs+='top : 674px;';
		hs+='visibility : inherit;';
		hs+='width : 73px;';
		hs+='pointer-events:auto;';
		this._button_1.setAttribute('style',hs);
		this._button_1.style[domTransform + 'Origin']='50% 50%';
		me._button_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_1.onclick=function (e) {
			me.player.openNext("{node2}","");
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
		}
		me._button_1.ggCurrentLogicStateVisible = -1;
		this._button_1.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_1.style[domTransition]='';
				if (me._button_1.ggCurrentLogicStateVisible == 0) {
					me._button_1.style.visibility=(Number(me._button_1.style.opacity)>0||!me._button_1.style.opacity)?'inherit':'hidden';
					me._button_1.ggVisible=true;
				}
				else {
					me._button_1.style.visibility=(Number(me._button_1.style.opacity)>0||!me._button_1.style.opacity)?'inherit':'hidden';
					me._button_1.ggVisible=true;
				}
			}
		}
		this._button_1.ggUpdatePosition=function (useTransition) {
		}
		this._button_1.ggNodeChange=function () {
			me._button_1.ggUpdateConditionNodeChange();
		}
		this._hide_timer1=document.createElement('div');
		this._hide_timer1.ggTimestamp=this.ggCurrentTime;
		this._hide_timer1.ggLastIsActive=true;
		this._hide_timer1.ggTimeout=500;
		this._hide_timer1.ggId="hide_timer1";
		this._hide_timer1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_timer1.ggVisible=true;
		this._hide_timer1.className='ggskin ggskin_timer ';
		this._hide_timer1.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 17px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._hide_timer1.setAttribute('style',hs);
		this._hide_timer1.style[domTransform + 'Origin']='50% 50%';
		me._hide_timer1.ggIsActive=function() {
			return (me._hide_timer1.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._hide_timer1.ggTimestamp) / me._hide_timer1.ggTimeout) % 2 == 0));
		}
		me._hide_timer1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._hide_timer1.ggActivate=function () {
			var flag=me._button_1.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._button_1.style[domTransition]='none';
			} else {
				me._button_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._button_1.ggParameter.sx=1;me._button_1.ggParameter.sy=1;
				me._button_1.style[domTransform]=parameterToTransform(me._button_1.ggParameter);
			} else {
				me._button_1.ggParameter.sx=1;me._button_1.ggParameter.sy=1;
				me._button_1.style[domTransform]=parameterToTransform(me._button_1.ggParameter);
			}
			me._button_1.ggScaleActive=!flag;
		}
		this._hide_timer1.ggDeactivate=function () {
			var flag=me._button_1.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._button_1.style[domTransition]='none';
			} else {
				me._button_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._button_1.ggParameter.sx=1;me._button_1.ggParameter.sy=1;
				me._button_1.style[domTransform]=parameterToTransform(me._button_1.ggParameter);
			} else {
				me._button_1.ggParameter.sx=1.2;me._button_1.ggParameter.sy=1.2;
				me._button_1.style[domTransform]=parameterToTransform(me._button_1.ggParameter);
			}
			me._button_1.ggScaleActive=!flag;
		}
		this._hide_timer1.ggUpdatePosition=function (useTransition) {
		}
		this._button_1.appendChild(this._hide_timer1);
		this._image_2.appendChild(this._button_1);
		this._button_2=document.createElement('div');
		this._button_2__img=document.createElement('img');
		this._button_2__img.className='ggskin ggskin_button';
		this._button_2__img.setAttribute('src',basePath + 'images/button_2.png');
		this._button_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_2__img.className='ggskin ggskin_button';
		this._button_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_2__img);
		this._button_2.appendChild(this._button_2__img);
		this._button_2.ggId="Button 2";
		this._button_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_2.ggVisible=true;
		this._button_2.className='ggskin ggskin_button ';
		this._button_2.ggType='button';
		hs ='';
		hs+='height : 73px;';
		hs+='left : 1009px;';
		hs+='position : absolute;';
		hs+='top : 547px;';
		hs+='visibility : inherit;';
		hs+='width : 73px;';
		hs+='pointer-events:auto;';
		this._button_2.setAttribute('style',hs);
		this._button_2.style[domTransform + 'Origin']='50% 50%';
		me._button_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_2.onclick=function (e) {
			me.player.openNext("{node3}","");
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
		}
		me._button_2.ggCurrentLogicStateVisible = -1;
		this._button_2.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_2.style[domTransition]='';
				if (me._button_2.ggCurrentLogicStateVisible == 0) {
					me._button_2.style.visibility=(Number(me._button_2.style.opacity)>0||!me._button_2.style.opacity)?'inherit':'hidden';
					me._button_2.ggVisible=true;
				}
				else {
					me._button_2.style.visibility=(Number(me._button_2.style.opacity)>0||!me._button_2.style.opacity)?'inherit':'hidden';
					me._button_2.ggVisible=true;
				}
			}
		}
		this._button_2.ggUpdatePosition=function (useTransition) {
		}
		this._button_2.ggNodeChange=function () {
			me._button_2.ggUpdateConditionNodeChange();
		}
		this._hide_timer2=document.createElement('div');
		this._hide_timer2.ggTimestamp=this.ggCurrentTime;
		this._hide_timer2.ggLastIsActive=true;
		this._hide_timer2.ggTimeout=500;
		this._hide_timer2.ggId="hide_timer2";
		this._hide_timer2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_timer2.ggVisible=true;
		this._hide_timer2.className='ggskin ggskin_timer ';
		this._hide_timer2.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 17px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._hide_timer2.setAttribute('style',hs);
		this._hide_timer2.style[domTransform + 'Origin']='50% 50%';
		me._hide_timer2.ggIsActive=function() {
			return (me._hide_timer2.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._hide_timer2.ggTimestamp) / me._hide_timer2.ggTimeout) % 2 == 0));
		}
		me._hide_timer2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._hide_timer2.ggActivate=function () {
			var flag=me._button_2.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._button_2.style[domTransition]='none';
			} else {
				me._button_2.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._button_2.ggParameter.sx=1;me._button_2.ggParameter.sy=1;
				me._button_2.style[domTransform]=parameterToTransform(me._button_2.ggParameter);
			} else {
				me._button_2.ggParameter.sx=1;me._button_2.ggParameter.sy=1;
				me._button_2.style[domTransform]=parameterToTransform(me._button_2.ggParameter);
			}
			me._button_2.ggScaleActive=!flag;
		}
		this._hide_timer2.ggDeactivate=function () {
			var flag=me._button_2.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._button_2.style[domTransition]='none';
			} else {
				me._button_2.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._button_2.ggParameter.sx=1;me._button_2.ggParameter.sy=1;
				me._button_2.style[domTransform]=parameterToTransform(me._button_2.ggParameter);
			} else {
				me._button_2.ggParameter.sx=1.2;me._button_2.ggParameter.sy=1.2;
				me._button_2.style[domTransform]=parameterToTransform(me._button_2.ggParameter);
			}
			me._button_2.ggScaleActive=!flag;
		}
		this._hide_timer2.ggUpdatePosition=function (useTransition) {
		}
		this._button_2.appendChild(this._hide_timer2);
		this._image_2.appendChild(this._button_2);
		this._button_3=document.createElement('div');
		this._button_3__img=document.createElement('img');
		this._button_3__img.className='ggskin ggskin_button';
		this._button_3__img.setAttribute('src',basePath + 'images/button_3.png');
		this._button_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_3__img.className='ggskin ggskin_button';
		this._button_3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_3__img);
		this._button_3.appendChild(this._button_3__img);
		this._button_3.ggId="Button 3";
		this._button_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_3.ggVisible=true;
		this._button_3.className='ggskin ggskin_button ';
		this._button_3.ggType='button';
		hs ='';
		hs+='height : 73px;';
		hs+='left : 790px;';
		hs+='position : absolute;';
		hs+='top : 547px;';
		hs+='visibility : inherit;';
		hs+='width : 73px;';
		hs+='pointer-events:auto;';
		this._button_3.setAttribute('style',hs);
		this._button_3.style[domTransform + 'Origin']='50% 50%';
		me._button_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_3.onclick=function (e) {
			me.player.openNext("{node4}","");
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
		}
		me._button_3.ggCurrentLogicStateVisible = -1;
		this._button_3.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_3.style[domTransition]='';
				if (me._button_3.ggCurrentLogicStateVisible == 0) {
					me._button_3.style.visibility=(Number(me._button_3.style.opacity)>0||!me._button_3.style.opacity)?'inherit':'hidden';
					me._button_3.ggVisible=true;
				}
				else {
					me._button_3.style.visibility=(Number(me._button_3.style.opacity)>0||!me._button_3.style.opacity)?'inherit':'hidden';
					me._button_3.ggVisible=true;
				}
			}
		}
		this._button_3.ggUpdatePosition=function (useTransition) {
		}
		this._button_3.ggNodeChange=function () {
			me._button_3.ggUpdateConditionNodeChange();
		}
		this._hide_timer3=document.createElement('div');
		this._hide_timer3.ggTimestamp=this.ggCurrentTime;
		this._hide_timer3.ggLastIsActive=true;
		this._hide_timer3.ggTimeout=500;
		this._hide_timer3.ggId="hide_timer3";
		this._hide_timer3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_timer3.ggVisible=true;
		this._hide_timer3.className='ggskin ggskin_timer ';
		this._hide_timer3.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 17px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._hide_timer3.setAttribute('style',hs);
		this._hide_timer3.style[domTransform + 'Origin']='50% 50%';
		me._hide_timer3.ggIsActive=function() {
			return (me._hide_timer3.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._hide_timer3.ggTimestamp) / me._hide_timer3.ggTimeout) % 2 == 0));
		}
		me._hide_timer3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._hide_timer3.ggActivate=function () {
			var flag=me._button_3.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._button_3.style[domTransition]='none';
			} else {
				me._button_3.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._button_3.ggParameter.sx=1;me._button_3.ggParameter.sy=1;
				me._button_3.style[domTransform]=parameterToTransform(me._button_3.ggParameter);
			} else {
				me._button_3.ggParameter.sx=1;me._button_3.ggParameter.sy=1;
				me._button_3.style[domTransform]=parameterToTransform(me._button_3.ggParameter);
			}
			me._button_3.ggScaleActive=!flag;
		}
		this._hide_timer3.ggDeactivate=function () {
			var flag=me._button_3.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._button_3.style[domTransition]='none';
			} else {
				me._button_3.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._button_3.ggParameter.sx=1;me._button_3.ggParameter.sy=1;
				me._button_3.style[domTransform]=parameterToTransform(me._button_3.ggParameter);
			} else {
				me._button_3.ggParameter.sx=1.2;me._button_3.ggParameter.sy=1.2;
				me._button_3.style[domTransform]=parameterToTransform(me._button_3.ggParameter);
			}
			me._button_3.ggScaleActive=!flag;
		}
		this._hide_timer3.ggUpdatePosition=function (useTransition) {
		}
		this._button_3.appendChild(this._hide_timer3);
		this._image_2.appendChild(this._button_3);
		this._button_4=document.createElement('div');
		this._button_4__img=document.createElement('img');
		this._button_4__img.className='ggskin ggskin_button';
		this._button_4__img.setAttribute('src',basePath + 'images/button_4.png');
		this._button_4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_4__img.className='ggskin ggskin_button';
		this._button_4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_4__img);
		this._button_4.appendChild(this._button_4__img);
		this._button_4.ggId="Button 4";
		this._button_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_4.ggVisible=true;
		this._button_4.className='ggskin ggskin_button ';
		this._button_4.ggType='button';
		hs ='';
		hs+='height : 73px;';
		hs+='left : 813px;';
		hs+='position : absolute;';
		hs+='top : 688px;';
		hs+='visibility : inherit;';
		hs+='width : 73px;';
		hs+='pointer-events:auto;';
		this._button_4.setAttribute('style',hs);
		this._button_4.style[domTransform + 'Origin']='50% 50%';
		me._button_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_4.onclick=function (e) {
			me.player.openNext("{node8}","");
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
		}
		me._button_4.ggCurrentLogicStateVisible = -1;
		this._button_4.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_4.style[domTransition]='';
				if (me._button_4.ggCurrentLogicStateVisible == 0) {
					me._button_4.style.visibility=(Number(me._button_4.style.opacity)>0||!me._button_4.style.opacity)?'inherit':'hidden';
					me._button_4.ggVisible=true;
				}
				else {
					me._button_4.style.visibility=(Number(me._button_4.style.opacity)>0||!me._button_4.style.opacity)?'inherit':'hidden';
					me._button_4.ggVisible=true;
				}
			}
		}
		this._button_4.ggUpdatePosition=function (useTransition) {
		}
		this._button_4.ggNodeChange=function () {
			me._button_4.ggUpdateConditionNodeChange();
		}
		this._hide_timer4=document.createElement('div');
		this._hide_timer4.ggTimestamp=this.ggCurrentTime;
		this._hide_timer4.ggLastIsActive=true;
		this._hide_timer4.ggTimeout=500;
		this._hide_timer4.ggId="hide_timer4";
		this._hide_timer4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_timer4.ggVisible=true;
		this._hide_timer4.className='ggskin ggskin_timer ';
		this._hide_timer4.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 17px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._hide_timer4.setAttribute('style',hs);
		this._hide_timer4.style[domTransform + 'Origin']='50% 50%';
		me._hide_timer4.ggIsActive=function() {
			return (me._hide_timer4.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._hide_timer4.ggTimestamp) / me._hide_timer4.ggTimeout) % 2 == 0));
		}
		me._hide_timer4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._hide_timer4.ggActivate=function () {
			var flag=me._button_4.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._button_4.style[domTransition]='none';
			} else {
				me._button_4.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._button_4.ggParameter.sx=1;me._button_4.ggParameter.sy=1;
				me._button_4.style[domTransform]=parameterToTransform(me._button_4.ggParameter);
			} else {
				me._button_4.ggParameter.sx=1;me._button_4.ggParameter.sy=1;
				me._button_4.style[domTransform]=parameterToTransform(me._button_4.ggParameter);
			}
			me._button_4.ggScaleActive=!flag;
		}
		this._hide_timer4.ggDeactivate=function () {
			var flag=me._button_4.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._button_4.style[domTransition]='none';
			} else {
				me._button_4.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._button_4.ggParameter.sx=1;me._button_4.ggParameter.sy=1;
				me._button_4.style[domTransform]=parameterToTransform(me._button_4.ggParameter);
			} else {
				me._button_4.ggParameter.sx=1.2;me._button_4.ggParameter.sy=1.2;
				me._button_4.style[domTransform]=parameterToTransform(me._button_4.ggParameter);
			}
			me._button_4.ggScaleActive=!flag;
		}
		this._hide_timer4.ggUpdatePosition=function (useTransition) {
		}
		this._button_4.appendChild(this._hide_timer4);
		this._image_2.appendChild(this._button_4);
		this._button_5=document.createElement('div');
		this._button_5__img=document.createElement('img');
		this._button_5__img.className='ggskin ggskin_button';
		this._button_5__img.setAttribute('src',basePath + 'images/button_5.png');
		this._button_5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_5__img.className='ggskin ggskin_button';
		this._button_5__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_5__img);
		this._button_5.appendChild(this._button_5__img);
		this._button_5.ggId="Button 5";
		this._button_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_5.ggVisible=true;
		this._button_5.className='ggskin ggskin_button ';
		this._button_5.ggType='button';
		hs ='';
		hs+='height : 73px;';
		hs+='left : 548px;';
		hs+='position : absolute;';
		hs+='top : 682px;';
		hs+='visibility : inherit;';
		hs+='width : 73px;';
		hs+='pointer-events:auto;';
		this._button_5.setAttribute('style',hs);
		this._button_5.style[domTransform + 'Origin']='50% 50%';
		me._button_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_5.onclick=function (e) {
			me.player.openNext("{node7}","");
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
		}
		me._button_5.ggCurrentLogicStateVisible = -1;
		this._button_5.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_5.style[domTransition]='';
				if (me._button_5.ggCurrentLogicStateVisible == 0) {
					me._button_5.style.visibility=(Number(me._button_5.style.opacity)>0||!me._button_5.style.opacity)?'inherit':'hidden';
					me._button_5.ggVisible=true;
				}
				else {
					me._button_5.style.visibility=(Number(me._button_5.style.opacity)>0||!me._button_5.style.opacity)?'inherit':'hidden';
					me._button_5.ggVisible=true;
				}
			}
		}
		this._button_5.ggUpdatePosition=function (useTransition) {
		}
		this._button_5.ggNodeChange=function () {
			me._button_5.ggUpdateConditionNodeChange();
		}
		this._hide_timer5=document.createElement('div');
		this._hide_timer5.ggTimestamp=this.ggCurrentTime;
		this._hide_timer5.ggLastIsActive=true;
		this._hide_timer5.ggTimeout=500;
		this._hide_timer5.ggId="hide_timer5";
		this._hide_timer5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_timer5.ggVisible=true;
		this._hide_timer5.className='ggskin ggskin_timer ';
		this._hide_timer5.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 17px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._hide_timer5.setAttribute('style',hs);
		this._hide_timer5.style[domTransform + 'Origin']='50% 50%';
		me._hide_timer5.ggIsActive=function() {
			return (me._hide_timer5.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._hide_timer5.ggTimestamp) / me._hide_timer5.ggTimeout) % 2 == 0));
		}
		me._hide_timer5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._hide_timer5.ggActivate=function () {
			var flag=me._button_5.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._button_5.style[domTransition]='none';
			} else {
				me._button_5.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._button_5.ggParameter.sx=1;me._button_5.ggParameter.sy=1;
				me._button_5.style[domTransform]=parameterToTransform(me._button_5.ggParameter);
			} else {
				me._button_5.ggParameter.sx=1;me._button_5.ggParameter.sy=1;
				me._button_5.style[domTransform]=parameterToTransform(me._button_5.ggParameter);
			}
			me._button_5.ggScaleActive=!flag;
		}
		this._hide_timer5.ggDeactivate=function () {
			var flag=me._button_5.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._button_5.style[domTransition]='none';
			} else {
				me._button_5.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._button_5.ggParameter.sx=1;me._button_5.ggParameter.sy=1;
				me._button_5.style[domTransform]=parameterToTransform(me._button_5.ggParameter);
			} else {
				me._button_5.ggParameter.sx=1.2;me._button_5.ggParameter.sy=1.2;
				me._button_5.style[domTransform]=parameterToTransform(me._button_5.ggParameter);
			}
			me._button_5.ggScaleActive=!flag;
		}
		this._hide_timer5.ggUpdatePosition=function (useTransition) {
		}
		this._button_5.appendChild(this._hide_timer5);
		this._image_2.appendChild(this._button_5);
		this._button_6=document.createElement('div');
		this._button_6__img=document.createElement('img');
		this._button_6__img.className='ggskin ggskin_button';
		this._button_6__img.setAttribute('src',basePath + 'images/button_6.png');
		this._button_6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_6__img.className='ggskin ggskin_button';
		this._button_6__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_6__img);
		this._button_6.appendChild(this._button_6__img);
		this._button_6.ggId="Button 6";
		this._button_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_6.ggVisible=true;
		this._button_6.className='ggskin ggskin_button ';
		this._button_6.ggType='button';
		hs ='';
		hs+='height : 73px;';
		hs+='left : 588px;';
		hs+='position : absolute;';
		hs+='top : 516px;';
		hs+='visibility : inherit;';
		hs+='width : 73px;';
		hs+='pointer-events:auto;';
		this._button_6.setAttribute('style',hs);
		this._button_6.style[domTransform + 'Origin']='50% 50%';
		me._button_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_6.onclick=function (e) {
			me.player.openNext("{node5}","");
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
		}
		me._button_6.ggCurrentLogicStateVisible = -1;
		this._button_6.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_6.style[domTransition]='';
				if (me._button_6.ggCurrentLogicStateVisible == 0) {
					me._button_6.style.visibility=(Number(me._button_6.style.opacity)>0||!me._button_6.style.opacity)?'inherit':'hidden';
					me._button_6.ggVisible=true;
				}
				else {
					me._button_6.style.visibility=(Number(me._button_6.style.opacity)>0||!me._button_6.style.opacity)?'inherit':'hidden';
					me._button_6.ggVisible=true;
				}
			}
		}
		this._button_6.ggUpdatePosition=function (useTransition) {
		}
		this._button_6.ggNodeChange=function () {
			me._button_6.ggUpdateConditionNodeChange();
		}
		this._hide_timer6=document.createElement('div');
		this._hide_timer6.ggTimestamp=this.ggCurrentTime;
		this._hide_timer6.ggLastIsActive=true;
		this._hide_timer6.ggTimeout=500;
		this._hide_timer6.ggId="hide_timer6";
		this._hide_timer6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_timer6.ggVisible=true;
		this._hide_timer6.className='ggskin ggskin_timer ';
		this._hide_timer6.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 17px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._hide_timer6.setAttribute('style',hs);
		this._hide_timer6.style[domTransform + 'Origin']='50% 50%';
		me._hide_timer6.ggIsActive=function() {
			return (me._hide_timer6.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._hide_timer6.ggTimestamp) / me._hide_timer6.ggTimeout) % 2 == 0));
		}
		me._hide_timer6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._hide_timer6.ggActivate=function () {
			var flag=me._button_6.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._button_6.style[domTransition]='none';
			} else {
				me._button_6.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._button_6.ggParameter.sx=1;me._button_6.ggParameter.sy=1;
				me._button_6.style[domTransform]=parameterToTransform(me._button_6.ggParameter);
			} else {
				me._button_6.ggParameter.sx=1;me._button_6.ggParameter.sy=1;
				me._button_6.style[domTransform]=parameterToTransform(me._button_6.ggParameter);
			}
			me._button_6.ggScaleActive=!flag;
		}
		this._hide_timer6.ggDeactivate=function () {
			var flag=me._button_6.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._button_6.style[domTransition]='none';
			} else {
				me._button_6.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._button_6.ggParameter.sx=1;me._button_6.ggParameter.sy=1;
				me._button_6.style[domTransform]=parameterToTransform(me._button_6.ggParameter);
			} else {
				me._button_6.ggParameter.sx=1.2;me._button_6.ggParameter.sy=1.2;
				me._button_6.style[domTransform]=parameterToTransform(me._button_6.ggParameter);
			}
			me._button_6.ggScaleActive=!flag;
		}
		this._hide_timer6.ggUpdatePosition=function (useTransition) {
		}
		this._button_6.appendChild(this._hide_timer6);
		this._image_2.appendChild(this._button_6);
		this._button_7=document.createElement('div');
		this._button_7__img=document.createElement('img');
		this._button_7__img.className='ggskin ggskin_button';
		this._button_7__img.setAttribute('src',basePath + 'images/button_7.png');
		this._button_7__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_7__img.className='ggskin ggskin_button';
		this._button_7__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_7__img);
		this._button_7.appendChild(this._button_7__img);
		this._button_7.ggId="Button 7";
		this._button_7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_7.ggVisible=true;
		this._button_7.className='ggskin ggskin_button ';
		this._button_7.ggType='button';
		hs ='';
		hs+='height : 73px;';
		hs+='left : 502px;';
		hs+='position : absolute;';
		hs+='top : 201px;';
		hs+='visibility : inherit;';
		hs+='width : 73px;';
		hs+='pointer-events:auto;';
		this._button_7.setAttribute('style',hs);
		this._button_7.style[domTransform + 'Origin']='50% 50%';
		me._button_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_7.onclick=function (e) {
			me.player.openNext("{node6}","");
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
		}
		me._button_7.ggCurrentLogicStateVisible = -1;
		this._button_7.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_7.style[domTransition]='';
				if (me._button_7.ggCurrentLogicStateVisible == 0) {
					me._button_7.style.visibility=(Number(me._button_7.style.opacity)>0||!me._button_7.style.opacity)?'inherit':'hidden';
					me._button_7.ggVisible=true;
				}
				else {
					me._button_7.style.visibility=(Number(me._button_7.style.opacity)>0||!me._button_7.style.opacity)?'inherit':'hidden';
					me._button_7.ggVisible=true;
				}
			}
		}
		this._button_7.ggUpdatePosition=function (useTransition) {
		}
		this._button_7.ggNodeChange=function () {
			me._button_7.ggUpdateConditionNodeChange();
		}
		this._hide_timer7=document.createElement('div');
		this._hide_timer7.ggTimestamp=this.ggCurrentTime;
		this._hide_timer7.ggLastIsActive=true;
		this._hide_timer7.ggTimeout=500;
		this._hide_timer7.ggId="hide_timer7";
		this._hide_timer7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_timer7.ggVisible=true;
		this._hide_timer7.className='ggskin ggskin_timer ';
		this._hide_timer7.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 17px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._hide_timer7.setAttribute('style',hs);
		this._hide_timer7.style[domTransform + 'Origin']='50% 50%';
		me._hide_timer7.ggIsActive=function() {
			return (me._hide_timer7.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._hide_timer7.ggTimestamp) / me._hide_timer7.ggTimeout) % 2 == 0));
		}
		me._hide_timer7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._hide_timer7.ggActivate=function () {
			var flag=me._button_7.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._button_7.style[domTransition]='none';
			} else {
				me._button_7.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._button_7.ggParameter.sx=1;me._button_7.ggParameter.sy=1;
				me._button_7.style[domTransform]=parameterToTransform(me._button_7.ggParameter);
			} else {
				me._button_7.ggParameter.sx=1;me._button_7.ggParameter.sy=1;
				me._button_7.style[domTransform]=parameterToTransform(me._button_7.ggParameter);
			}
			me._button_7.ggScaleActive=!flag;
		}
		this._hide_timer7.ggDeactivate=function () {
			var flag=me._button_7.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._button_7.style[domTransition]='none';
			} else {
				me._button_7.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._button_7.ggParameter.sx=1;me._button_7.ggParameter.sy=1;
				me._button_7.style[domTransform]=parameterToTransform(me._button_7.ggParameter);
			} else {
				me._button_7.ggParameter.sx=1.2;me._button_7.ggParameter.sy=1.2;
				me._button_7.style[domTransform]=parameterToTransform(me._button_7.ggParameter);
			}
			me._button_7.ggScaleActive=!flag;
		}
		this._hide_timer7.ggUpdatePosition=function (useTransition) {
		}
		this._button_7.appendChild(this._hide_timer7);
		this._image_2.appendChild(this._button_7);
		this._button_8=document.createElement('div');
		this._button_8__img=document.createElement('img');
		this._button_8__img.className='ggskin ggskin_button';
		this._button_8__img.setAttribute('src',basePath + 'images/button_8.png');
		this._button_8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_8__img.className='ggskin ggskin_button';
		this._button_8__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_8__img);
		this._button_8.appendChild(this._button_8__img);
		this._button_8.ggId="Button 8";
		this._button_8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_8.ggVisible=true;
		this._button_8.className='ggskin ggskin_button ';
		this._button_8.ggType='button';
		hs ='';
		hs+='height : 73px;';
		hs+='left : 859px;';
		hs+='position : absolute;';
		hs+='top : 417px;';
		hs+='visibility : inherit;';
		hs+='width : 73px;';
		hs+='pointer-events:auto;';
		this._button_8.setAttribute('style',hs);
		this._button_8.style[domTransform + 'Origin']='50% 50%';
		me._button_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_8.onclick=function (e) {
			me.player.openNext("{node9}","");
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
		}
		me._button_8.ggCurrentLogicStateVisible = -1;
		this._button_8.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_8.style[domTransition]='';
				if (me._button_8.ggCurrentLogicStateVisible == 0) {
					me._button_8.style.visibility=(Number(me._button_8.style.opacity)>0||!me._button_8.style.opacity)?'inherit':'hidden';
					me._button_8.ggVisible=true;
				}
				else {
					me._button_8.style.visibility=(Number(me._button_8.style.opacity)>0||!me._button_8.style.opacity)?'inherit':'hidden';
					me._button_8.ggVisible=true;
				}
			}
		}
		this._button_8.ggUpdatePosition=function (useTransition) {
		}
		this._button_8.ggNodeChange=function () {
			me._button_8.ggUpdateConditionNodeChange();
		}
		this._hide_timer8=document.createElement('div');
		this._hide_timer8.ggTimestamp=this.ggCurrentTime;
		this._hide_timer8.ggLastIsActive=true;
		this._hide_timer8.ggTimeout=500;
		this._hide_timer8.ggId="hide_timer8";
		this._hide_timer8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_timer8.ggVisible=true;
		this._hide_timer8.className='ggskin ggskin_timer ';
		this._hide_timer8.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 17px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._hide_timer8.setAttribute('style',hs);
		this._hide_timer8.style[domTransform + 'Origin']='50% 50%';
		me._hide_timer8.ggIsActive=function() {
			return (me._hide_timer8.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._hide_timer8.ggTimestamp) / me._hide_timer8.ggTimeout) % 2 == 0));
		}
		me._hide_timer8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._hide_timer8.ggActivate=function () {
			var flag=me._button_8.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._button_8.style[domTransition]='none';
			} else {
				me._button_8.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._button_8.ggParameter.sx=1;me._button_8.ggParameter.sy=1;
				me._button_8.style[domTransform]=parameterToTransform(me._button_8.ggParameter);
			} else {
				me._button_8.ggParameter.sx=1;me._button_8.ggParameter.sy=1;
				me._button_8.style[domTransform]=parameterToTransform(me._button_8.ggParameter);
			}
			me._button_8.ggScaleActive=!flag;
		}
		this._hide_timer8.ggDeactivate=function () {
			var flag=me._button_8.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._button_8.style[domTransition]='none';
			} else {
				me._button_8.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._button_8.ggParameter.sx=1;me._button_8.ggParameter.sy=1;
				me._button_8.style[domTransform]=parameterToTransform(me._button_8.ggParameter);
			} else {
				me._button_8.ggParameter.sx=1.2;me._button_8.ggParameter.sy=1.2;
				me._button_8.style[domTransform]=parameterToTransform(me._button_8.ggParameter);
			}
			me._button_8.ggScaleActive=!flag;
		}
		this._hide_timer8.ggUpdatePosition=function (useTransition) {
		}
		this._button_8.appendChild(this._hide_timer8);
		this._image_2.appendChild(this._button_8);
		this._button_9=document.createElement('div');
		this._button_9__img=document.createElement('img');
		this._button_9__img.className='ggskin ggskin_button';
		this._button_9__img.setAttribute('src',basePath + 'images/button_9.png');
		this._button_9__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_9__img.className='ggskin ggskin_button';
		this._button_9__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_9__img);
		this._button_9.appendChild(this._button_9__img);
		this._button_9.ggId="Button 9";
		this._button_9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_9.ggVisible=true;
		this._button_9.className='ggskin ggskin_button ';
		this._button_9.ggType='button';
		hs ='';
		hs+='height : 73px;';
		hs+='left : 943px;';
		hs+='position : absolute;';
		hs+='top : 207px;';
		hs+='visibility : inherit;';
		hs+='width : 73px;';
		hs+='pointer-events:auto;';
		this._button_9.setAttribute('style',hs);
		this._button_9.style[domTransform + 'Origin']='50% 50%';
		me._button_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_9.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_9.onclick=function (e) {
			me.player.openNext("{node10}","");
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
		}
		me._button_9.ggCurrentLogicStateVisible = -1;
		this._button_9.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_9.style[domTransition]='';
				if (me._button_9.ggCurrentLogicStateVisible == 0) {
					me._button_9.style.visibility=(Number(me._button_9.style.opacity)>0||!me._button_9.style.opacity)?'inherit':'hidden';
					me._button_9.ggVisible=true;
				}
				else {
					me._button_9.style.visibility=(Number(me._button_9.style.opacity)>0||!me._button_9.style.opacity)?'inherit':'hidden';
					me._button_9.ggVisible=true;
				}
			}
		}
		this._button_9.ggUpdatePosition=function (useTransition) {
		}
		this._button_9.ggNodeChange=function () {
			me._button_9.ggUpdateConditionNodeChange();
		}
		this._hide_timer9=document.createElement('div');
		this._hide_timer9.ggTimestamp=this.ggCurrentTime;
		this._hide_timer9.ggLastIsActive=true;
		this._hide_timer9.ggTimeout=500;
		this._hide_timer9.ggId="hide_timer9";
		this._hide_timer9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_timer9.ggVisible=true;
		this._hide_timer9.className='ggskin ggskin_timer ';
		this._hide_timer9.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 17px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._hide_timer9.setAttribute('style',hs);
		this._hide_timer9.style[domTransform + 'Origin']='50% 50%';
		me._hide_timer9.ggIsActive=function() {
			return (me._hide_timer9.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._hide_timer9.ggTimestamp) / me._hide_timer9.ggTimeout) % 2 == 0));
		}
		me._hide_timer9.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._hide_timer9.ggActivate=function () {
			var flag=me._button_9.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._button_9.style[domTransition]='none';
			} else {
				me._button_9.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._button_9.ggParameter.sx=1;me._button_9.ggParameter.sy=1;
				me._button_9.style[domTransform]=parameterToTransform(me._button_9.ggParameter);
			} else {
				me._button_9.ggParameter.sx=1;me._button_9.ggParameter.sy=1;
				me._button_9.style[domTransform]=parameterToTransform(me._button_9.ggParameter);
			}
			me._button_9.ggScaleActive=!flag;
		}
		this._hide_timer9.ggDeactivate=function () {
			var flag=me._button_9.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._button_9.style[domTransition]='none';
			} else {
				me._button_9.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._button_9.ggParameter.sx=1;me._button_9.ggParameter.sy=1;
				me._button_9.style[domTransform]=parameterToTransform(me._button_9.ggParameter);
			} else {
				me._button_9.ggParameter.sx=1.2;me._button_9.ggParameter.sy=1.2;
				me._button_9.style[domTransform]=parameterToTransform(me._button_9.ggParameter);
			}
			me._button_9.ggScaleActive=!flag;
		}
		this._hide_timer9.ggUpdatePosition=function (useTransition) {
		}
		this._button_9.appendChild(this._hide_timer9);
		this._image_2.appendChild(this._button_9);
		this._container_1.appendChild(this._image_2);
		this.divSkin.appendChild(this._container_1);
		this._image_1=document.createElement('div');
		this._image_1__img=document.createElement('img');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
		this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_1__img);
		this._image_1.appendChild(this._image_1__img);
		this._image_1.ggId="Image 1";
		this._image_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_1.ggVisible=true;
		this._image_1.className='ggskin ggskin_image ';
		this._image_1.ggType='image';
		hs ='';
		hs+='height : 75px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		this._image_1.setAttribute('style',hs);
		this._image_1.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		me._image_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_1.onclick=function (e) {
			me._container_1.ggVisible = !me._container_1.ggVisible;
			var flag=me._container_1.ggVisible;
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility=((flag)&&(Number(me._container_1.style.opacity)>0||!me._container_1.style.opacity))?'inherit':'hidden';
		}
		this._image_1.onmouseover=function (e) {
			me.elementMouseOver['image_1']=true;
		}
		this._image_1.onmouseout=function (e) {
			if (me.player.transitionsDisabled) {
				me._image_1.style[domTransition]='none';
			} else {
				me._image_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_1.ggParameter.sx=1;me._image_1.ggParameter.sy=1;
			me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
			me.elementMouseOver['image_1']=false;
		}
		this._image_1.ontouchend=function (e) {
			me.elementMouseOver['image_1']=false;
		}
		this._image_1.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._image_1);
		this._image_3=document.createElement('div');
		this._image_3__img=document.createElement('img');
		this._image_3__img.className='ggskin ggskin_image';
		this._image_3__img.setAttribute('src',basePath + 'images/image_3.png');
		this._image_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_3__img.className='ggskin ggskin_image';
		this._image_3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_3__img);
		this._image_3.appendChild(this._image_3__img);
		this._image_3.ggId="Image 3";
		this._image_3.ggLeft=-100;
		this._image_3.ggTop=-95;
		this._image_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_3.ggVisible=true;
		this._image_3.className='ggskin ggskin_image ';
		this._image_3.ggType='image';
		hs ='';
		hs+='height : 75px;';
		hs+='left : -100px;';
		hs+='position : absolute;';
		hs+='top : -95px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		this._image_3.setAttribute('style',hs);
		this._image_3.style[domTransform + 'Origin']='50% 50%';
		me._image_3.ggIsActive=function() {
			return false;
		}
		me._image_3.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_3.onclick=function (e) {
			me.player.toggleFullscreen();
		}
		this._image_3.onmouseover=function (e) {
			me.elementMouseOver['image_3']=true;
		}
		this._image_3.onmouseout=function (e) {
			if (me.player.transitionsDisabled) {
				me._image_3.style[domTransition]='none';
			} else {
				me._image_3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_3.ggParameter.sx=1;me._image_3.ggParameter.sy=1;
			me._image_3.style[domTransform]=parameterToTransform(me._image_3.ggParameter);
			me.elementMouseOver['image_3']=false;
		}
		this._image_3.ontouchend=function (e) {
			me.elementMouseOver['image_3']=false;
		}
		this._image_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._image_3);
		this._image_4=document.createElement('div');
		this._image_4__img=document.createElement('img');
		this._image_4__img.className='ggskin ggskin_image';
		this._image_4__img.setAttribute('src',basePath + 'images/image_4.png');
		this._image_4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_4__img.className='ggskin ggskin_image';
		this._image_4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_4__img);
		this._image_4.appendChild(this._image_4__img);
		this._image_4.ggId="Image 4";
		this._image_4.ggTop=-95;
		this._image_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_4.ggVisible=true;
		this._image_4.className='ggskin ggskin_image ';
		this._image_4.ggType='image';
		hs ='';
		hs+='height : 75px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : -95px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		this._image_4.setAttribute('style',hs);
		this._image_4.style[domTransform + 'Origin']='50% 50%';
		me._image_4.ggIsActive=function() {
			return false;
		}
		me._image_4.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_4.onclick=function (e) {
			me.player.playPauseSound("","20");
		}
		this._image_4.onmouseover=function (e) {
			me.elementMouseOver['image_4']=true;
		}
		this._image_4.onmouseout=function (e) {
			if (me.player.transitionsDisabled) {
				me._image_4.style[domTransition]='none';
			} else {
				me._image_4.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_4.ggParameter.sx=1;me._image_4.ggParameter.sy=1;
			me._image_4.style[domTransform]=parameterToTransform(me._image_4.ggParameter);
			me.elementMouseOver['image_4']=false;
		}
		this._image_4.ontouchend=function (e) {
			me.elementMouseOver['image_4']=false;
		}
		this._image_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._image_4);
		this._image_5=document.createElement('div');
		this._image_5__img=document.createElement('img');
		this._image_5__img.className='ggskin ggskin_image';
		this._image_5__img.setAttribute('src',basePath + 'images/image_5.png');
		this._image_5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_5__img.className='ggskin ggskin_image';
		this._image_5__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_5__img);
		this._image_5.appendChild(this._image_5__img);
		this._image_5.ggId="Image 5";
		this._image_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_5.ggVisible=true;
		this._image_5.className='ggskin ggskin_image ';
		this._image_5.ggType='image';
		hs ='';
		hs+='height : 75px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 130px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		this._image_5.setAttribute('style',hs);
		this._image_5.style[domTransform + 'Origin']='50% 50%';
		me._image_5.ggIsActive=function() {
			return false;
		}
		me._image_5.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_5.onclick=function (e) {
			me.player.toggleFullscreen();
		}
		this._image_5.onmouseover=function (e) {
			me.elementMouseOver['image_5']=true;
		}
		this._image_5.onmouseout=function (e) {
			if (me.player.transitionsDisabled) {
				me._image_5.style[domTransition]='none';
			} else {
				me._image_5.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_5.ggParameter.sx=1;me._image_5.ggParameter.sy=1;
			me._image_5.style[domTransform]=parameterToTransform(me._image_5.ggParameter);
			me.elementMouseOver['image_5']=false;
		}
		this._image_5.ontouchend=function (e) {
			me.elementMouseOver['image_5']=false;
		}
		this._image_5.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._image_5);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
			me._loading.ggVisible=true;
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
		me._button_1.ggNodeChange();
		me._button_2.ggNodeChange();
		me._button_3.ggNodeChange();
		me._button_4.ggNodeChange();
		me._button_5.ggNodeChange();
		me._button_6.ggNodeChange();
		me._button_7.ggNodeChange();
		me._button_8.ggNodeChange();
		me._button_9.ggNodeChange();
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		me._loadingtext.ggUpdateText();
		if (me._hide_timer1.ggLastIsActive!=me._hide_timer1.ggIsActive()) {
			me._hide_timer1.ggLastIsActive=me._hide_timer1.ggIsActive();
			if (me._hide_timer1.ggLastIsActive) {
				var flag=me._button_1.ggScaleActive;
				if (me.player.transitionsDisabled) {
					me._button_1.style[domTransition]='none';
				} else {
					me._button_1.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					me._button_1.ggParameter.sx=1;me._button_1.ggParameter.sy=1;
					me._button_1.style[domTransform]=parameterToTransform(me._button_1.ggParameter);
				} else {
					me._button_1.ggParameter.sx=1;me._button_1.ggParameter.sy=1;
					me._button_1.style[domTransform]=parameterToTransform(me._button_1.ggParameter);
				}
				me._button_1.ggScaleActive=!flag;
			} else {
				var flag=me._button_1.ggScaleActive;
				if (me.player.transitionsDisabled) {
					me._button_1.style[domTransition]='none';
				} else {
					me._button_1.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					me._button_1.ggParameter.sx=1;me._button_1.ggParameter.sy=1;
					me._button_1.style[domTransform]=parameterToTransform(me._button_1.ggParameter);
				} else {
					me._button_1.ggParameter.sx=1.2;me._button_1.ggParameter.sy=1.2;
					me._button_1.style[domTransform]=parameterToTransform(me._button_1.ggParameter);
				}
				me._button_1.ggScaleActive=!flag;
			}
		}
		if (me._hide_timer2.ggLastIsActive!=me._hide_timer2.ggIsActive()) {
			me._hide_timer2.ggLastIsActive=me._hide_timer2.ggIsActive();
			if (me._hide_timer2.ggLastIsActive) {
				var flag=me._button_2.ggScaleActive;
				if (me.player.transitionsDisabled) {
					me._button_2.style[domTransition]='none';
				} else {
					me._button_2.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					me._button_2.ggParameter.sx=1;me._button_2.ggParameter.sy=1;
					me._button_2.style[domTransform]=parameterToTransform(me._button_2.ggParameter);
				} else {
					me._button_2.ggParameter.sx=1;me._button_2.ggParameter.sy=1;
					me._button_2.style[domTransform]=parameterToTransform(me._button_2.ggParameter);
				}
				me._button_2.ggScaleActive=!flag;
			} else {
				var flag=me._button_2.ggScaleActive;
				if (me.player.transitionsDisabled) {
					me._button_2.style[domTransition]='none';
				} else {
					me._button_2.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					me._button_2.ggParameter.sx=1;me._button_2.ggParameter.sy=1;
					me._button_2.style[domTransform]=parameterToTransform(me._button_2.ggParameter);
				} else {
					me._button_2.ggParameter.sx=1.2;me._button_2.ggParameter.sy=1.2;
					me._button_2.style[domTransform]=parameterToTransform(me._button_2.ggParameter);
				}
				me._button_2.ggScaleActive=!flag;
			}
		}
		if (me._hide_timer3.ggLastIsActive!=me._hide_timer3.ggIsActive()) {
			me._hide_timer3.ggLastIsActive=me._hide_timer3.ggIsActive();
			if (me._hide_timer3.ggLastIsActive) {
				var flag=me._button_3.ggScaleActive;
				if (me.player.transitionsDisabled) {
					me._button_3.style[domTransition]='none';
				} else {
					me._button_3.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					me._button_3.ggParameter.sx=1;me._button_3.ggParameter.sy=1;
					me._button_3.style[domTransform]=parameterToTransform(me._button_3.ggParameter);
				} else {
					me._button_3.ggParameter.sx=1;me._button_3.ggParameter.sy=1;
					me._button_3.style[domTransform]=parameterToTransform(me._button_3.ggParameter);
				}
				me._button_3.ggScaleActive=!flag;
			} else {
				var flag=me._button_3.ggScaleActive;
				if (me.player.transitionsDisabled) {
					me._button_3.style[domTransition]='none';
				} else {
					me._button_3.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					me._button_3.ggParameter.sx=1;me._button_3.ggParameter.sy=1;
					me._button_3.style[domTransform]=parameterToTransform(me._button_3.ggParameter);
				} else {
					me._button_3.ggParameter.sx=1.2;me._button_3.ggParameter.sy=1.2;
					me._button_3.style[domTransform]=parameterToTransform(me._button_3.ggParameter);
				}
				me._button_3.ggScaleActive=!flag;
			}
		}
		if (me._hide_timer4.ggLastIsActive!=me._hide_timer4.ggIsActive()) {
			me._hide_timer4.ggLastIsActive=me._hide_timer4.ggIsActive();
			if (me._hide_timer4.ggLastIsActive) {
				var flag=me._button_4.ggScaleActive;
				if (me.player.transitionsDisabled) {
					me._button_4.style[domTransition]='none';
				} else {
					me._button_4.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					me._button_4.ggParameter.sx=1;me._button_4.ggParameter.sy=1;
					me._button_4.style[domTransform]=parameterToTransform(me._button_4.ggParameter);
				} else {
					me._button_4.ggParameter.sx=1;me._button_4.ggParameter.sy=1;
					me._button_4.style[domTransform]=parameterToTransform(me._button_4.ggParameter);
				}
				me._button_4.ggScaleActive=!flag;
			} else {
				var flag=me._button_4.ggScaleActive;
				if (me.player.transitionsDisabled) {
					me._button_4.style[domTransition]='none';
				} else {
					me._button_4.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					me._button_4.ggParameter.sx=1;me._button_4.ggParameter.sy=1;
					me._button_4.style[domTransform]=parameterToTransform(me._button_4.ggParameter);
				} else {
					me._button_4.ggParameter.sx=1.2;me._button_4.ggParameter.sy=1.2;
					me._button_4.style[domTransform]=parameterToTransform(me._button_4.ggParameter);
				}
				me._button_4.ggScaleActive=!flag;
			}
		}
		if (me._hide_timer5.ggLastIsActive!=me._hide_timer5.ggIsActive()) {
			me._hide_timer5.ggLastIsActive=me._hide_timer5.ggIsActive();
			if (me._hide_timer5.ggLastIsActive) {
				var flag=me._button_5.ggScaleActive;
				if (me.player.transitionsDisabled) {
					me._button_5.style[domTransition]='none';
				} else {
					me._button_5.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					me._button_5.ggParameter.sx=1;me._button_5.ggParameter.sy=1;
					me._button_5.style[domTransform]=parameterToTransform(me._button_5.ggParameter);
				} else {
					me._button_5.ggParameter.sx=1;me._button_5.ggParameter.sy=1;
					me._button_5.style[domTransform]=parameterToTransform(me._button_5.ggParameter);
				}
				me._button_5.ggScaleActive=!flag;
			} else {
				var flag=me._button_5.ggScaleActive;
				if (me.player.transitionsDisabled) {
					me._button_5.style[domTransition]='none';
				} else {
					me._button_5.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					me._button_5.ggParameter.sx=1;me._button_5.ggParameter.sy=1;
					me._button_5.style[domTransform]=parameterToTransform(me._button_5.ggParameter);
				} else {
					me._button_5.ggParameter.sx=1.2;me._button_5.ggParameter.sy=1.2;
					me._button_5.style[domTransform]=parameterToTransform(me._button_5.ggParameter);
				}
				me._button_5.ggScaleActive=!flag;
			}
		}
		if (me._hide_timer6.ggLastIsActive!=me._hide_timer6.ggIsActive()) {
			me._hide_timer6.ggLastIsActive=me._hide_timer6.ggIsActive();
			if (me._hide_timer6.ggLastIsActive) {
				var flag=me._button_6.ggScaleActive;
				if (me.player.transitionsDisabled) {
					me._button_6.style[domTransition]='none';
				} else {
					me._button_6.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					me._button_6.ggParameter.sx=1;me._button_6.ggParameter.sy=1;
					me._button_6.style[domTransform]=parameterToTransform(me._button_6.ggParameter);
				} else {
					me._button_6.ggParameter.sx=1;me._button_6.ggParameter.sy=1;
					me._button_6.style[domTransform]=parameterToTransform(me._button_6.ggParameter);
				}
				me._button_6.ggScaleActive=!flag;
			} else {
				var flag=me._button_6.ggScaleActive;
				if (me.player.transitionsDisabled) {
					me._button_6.style[domTransition]='none';
				} else {
					me._button_6.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					me._button_6.ggParameter.sx=1;me._button_6.ggParameter.sy=1;
					me._button_6.style[domTransform]=parameterToTransform(me._button_6.ggParameter);
				} else {
					me._button_6.ggParameter.sx=1.2;me._button_6.ggParameter.sy=1.2;
					me._button_6.style[domTransform]=parameterToTransform(me._button_6.ggParameter);
				}
				me._button_6.ggScaleActive=!flag;
			}
		}
		if (me._hide_timer7.ggLastIsActive!=me._hide_timer7.ggIsActive()) {
			me._hide_timer7.ggLastIsActive=me._hide_timer7.ggIsActive();
			if (me._hide_timer7.ggLastIsActive) {
				var flag=me._button_7.ggScaleActive;
				if (me.player.transitionsDisabled) {
					me._button_7.style[domTransition]='none';
				} else {
					me._button_7.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					me._button_7.ggParameter.sx=1;me._button_7.ggParameter.sy=1;
					me._button_7.style[domTransform]=parameterToTransform(me._button_7.ggParameter);
				} else {
					me._button_7.ggParameter.sx=1;me._button_7.ggParameter.sy=1;
					me._button_7.style[domTransform]=parameterToTransform(me._button_7.ggParameter);
				}
				me._button_7.ggScaleActive=!flag;
			} else {
				var flag=me._button_7.ggScaleActive;
				if (me.player.transitionsDisabled) {
					me._button_7.style[domTransition]='none';
				} else {
					me._button_7.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					me._button_7.ggParameter.sx=1;me._button_7.ggParameter.sy=1;
					me._button_7.style[domTransform]=parameterToTransform(me._button_7.ggParameter);
				} else {
					me._button_7.ggParameter.sx=1.2;me._button_7.ggParameter.sy=1.2;
					me._button_7.style[domTransform]=parameterToTransform(me._button_7.ggParameter);
				}
				me._button_7.ggScaleActive=!flag;
			}
		}
		if (me._hide_timer8.ggLastIsActive!=me._hide_timer8.ggIsActive()) {
			me._hide_timer8.ggLastIsActive=me._hide_timer8.ggIsActive();
			if (me._hide_timer8.ggLastIsActive) {
				var flag=me._button_8.ggScaleActive;
				if (me.player.transitionsDisabled) {
					me._button_8.style[domTransition]='none';
				} else {
					me._button_8.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					me._button_8.ggParameter.sx=1;me._button_8.ggParameter.sy=1;
					me._button_8.style[domTransform]=parameterToTransform(me._button_8.ggParameter);
				} else {
					me._button_8.ggParameter.sx=1;me._button_8.ggParameter.sy=1;
					me._button_8.style[domTransform]=parameterToTransform(me._button_8.ggParameter);
				}
				me._button_8.ggScaleActive=!flag;
			} else {
				var flag=me._button_8.ggScaleActive;
				if (me.player.transitionsDisabled) {
					me._button_8.style[domTransition]='none';
				} else {
					me._button_8.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					me._button_8.ggParameter.sx=1;me._button_8.ggParameter.sy=1;
					me._button_8.style[domTransform]=parameterToTransform(me._button_8.ggParameter);
				} else {
					me._button_8.ggParameter.sx=1.2;me._button_8.ggParameter.sy=1.2;
					me._button_8.style[domTransform]=parameterToTransform(me._button_8.ggParameter);
				}
				me._button_8.ggScaleActive=!flag;
			}
		}
		if (me._hide_timer9.ggLastIsActive!=me._hide_timer9.ggIsActive()) {
			me._hide_timer9.ggLastIsActive=me._hide_timer9.ggIsActive();
			if (me._hide_timer9.ggLastIsActive) {
				var flag=me._button_9.ggScaleActive;
				if (me.player.transitionsDisabled) {
					me._button_9.style[domTransition]='none';
				} else {
					me._button_9.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					me._button_9.ggParameter.sx=1;me._button_9.ggParameter.sy=1;
					me._button_9.style[domTransform]=parameterToTransform(me._button_9.ggParameter);
				} else {
					me._button_9.ggParameter.sx=1;me._button_9.ggParameter.sy=1;
					me._button_9.style[domTransform]=parameterToTransform(me._button_9.ggParameter);
				}
				me._button_9.ggScaleActive=!flag;
			} else {
				var flag=me._button_9.ggScaleActive;
				if (me.player.transitionsDisabled) {
					me._button_9.style[domTransition]='none';
				} else {
					me._button_9.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					me._button_9.ggParameter.sx=1;me._button_9.ggParameter.sy=1;
					me._button_9.style[domTransform]=parameterToTransform(me._button_9.ggParameter);
				} else {
					me._button_9.ggParameter.sx=1.2;me._button_9.ggParameter.sy=1.2;
					me._button_9.style[domTransform]=parameterToTransform(me._button_9.ggParameter);
				}
				me._button_9.ggScaleActive=!flag;
			}
		}
		if (me.elementMouseOver['image_1']) {
			if (me.player.transitionsDisabled) {
				me._image_1.style[domTransition]='none';
			} else {
				me._image_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_1.ggParameter.sx=1.2;me._image_1.ggParameter.sy=1.2;
			me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
		}
		if (me.elementMouseOver['image_3']) {
			if (me.player.transitionsDisabled) {
				me._image_3.style[domTransition]='none';
			} else {
				me._image_3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_3.ggParameter.sx=1.2;me._image_3.ggParameter.sy=1.2;
			me._image_3.style[domTransform]=parameterToTransform(me._image_3.ggParameter);
		}
		if (me.elementMouseOver['image_4']) {
			if (me.player.transitionsDisabled) {
				me._image_4.style[domTransition]='none';
			} else {
				me._image_4.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_4.ggParameter.sx=1.2;me._image_4.ggParameter.sy=1.2;
			me._image_4.style[domTransform]=parameterToTransform(me._image_4.ggParameter);
		}
		if (me.elementMouseOver['image_5']) {
			if (me.player.transitionsDisabled) {
				me._image_5.style[domTransition]='none';
			} else {
				me._image_5.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_5.ggParameter.sx=1.2;me._image_5.ggParameter.sy=1.2;
			me._image_5.style[domTransform]=parameterToTransform(me._image_5.ggParameter);
		}
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='Point01') {
			this.__div=document.createElement('div');
			this.__div.ggId="Point01";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 100px;';
			hs+='position : absolute;';
			hs+='top : 140px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node4}",me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this.__1234=document.createElement('div');
			this.__1234__img=document.createElement('img');
			this.__1234__img.className='ggskin ggskin_button';
			this.__1234__img.setAttribute('src',basePath + 'images/_1234.png');
			this.__1234__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this.__1234__img.className='ggskin ggskin_button';
			this.__1234__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this.__1234__img);
			this.__1234.appendChild(this.__1234__img);
			this.__1234.ggId="1234";
			this.__1234.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__1234.ggVisible=true;
			this.__1234.className='ggskin ggskin_button ';
			this.__1234.ggType='button';
			hs ='';
			hs+='height : 92px;';
			hs+='left : 618px;';
			hs+='position : absolute;';
			hs+='top : 389px;';
			hs+='visibility : inherit;';
			hs+='width : 93px;';
			hs+='pointer-events:auto;';
			this.__1234.setAttribute('style',hs);
			this.__1234.style[domTransform + 'Origin']='50% 50%';
			me.__1234.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me.__1234.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this.__1234.onclick=function (e) {
				me.player.openNext("{node4}",me.hotspot.target);
			}
			this.__1234.onmouseover=function (e) {
				me.elementMouseOver['_1234']=true;
			}
			this.__1234.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me.__1234.style[domTransition]='none';
				} else {
					me.__1234.style[domTransition]='all 500ms ease-out 0ms';
				}
				me.__1234.ggParameter.sx=1;me.__1234.ggParameter.sy=1;
				me.__1234.style[domTransform]=parameterToTransform(me.__1234.ggParameter);
				me.elementMouseOver['_1234']=false;
			}
			this.__1234.ontouchend=function (e) {
				me.elementMouseOver['_1234']=false;
			}
			this.__1234.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this.__1234);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_1234']) {
					if (me.player.transitionsDisabled) {
						me.__1234.style[domTransition]='none';
					} else {
						me.__1234.style[domTransition]='all 500ms ease-out 0ms';
					}
					me.__1234.ggParameter.sx=1.2;me.__1234.ggParameter.sy=1.2;
					me.__1234.style[domTransform]=parameterToTransform(me.__1234.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='Point04') {
			this.__div=document.createElement('div');
			this.__div.ggId="Point04";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 100px;';
			hs+='position : absolute;';
			hs+='top : 140px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node1}",me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this.__12345=document.createElement('div');
			this.__12345__img=document.createElement('img');
			this.__12345__img.className='ggskin ggskin_button';
			this.__12345__img.setAttribute('src',basePath + 'images/_12345.png');
			this.__12345__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this.__12345__img.className='ggskin ggskin_button';
			this.__12345__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this.__12345__img);
			this.__12345.appendChild(this.__12345__img);
			this.__12345.ggId="12345";
			this.__12345.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__12345.ggVisible=true;
			this.__12345.className='ggskin ggskin_button ';
			this.__12345.ggType='button';
			hs ='';
			hs+='height : 92px;';
			hs+='left : 751px;';
			hs+='position : absolute;';
			hs+='top : 371px;';
			hs+='visibility : inherit;';
			hs+='width : 93px;';
			hs+='pointer-events:auto;';
			this.__12345.setAttribute('style',hs);
			this.__12345.style[domTransform + 'Origin']='50% 50%';
			me.__12345.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me.__12345.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this.__12345.onclick=function (e) {
				me.player.openNext("{node1}",me.hotspot.target);
			}
			this.__12345.onmouseover=function (e) {
				me.elementMouseOver['_12345']=true;
			}
			this.__12345.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me.__12345.style[domTransition]='none';
				} else {
					me.__12345.style[domTransition]='all 500ms ease-out 0ms';
				}
				me.__12345.ggParameter.sx=1;me.__12345.ggParameter.sy=1;
				me.__12345.style[domTransform]=parameterToTransform(me.__12345.ggParameter);
				me.elementMouseOver['_12345']=false;
			}
			this.__12345.ontouchend=function (e) {
				me.elementMouseOver['_12345']=false;
			}
			this.__12345.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this.__12345);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_12345']) {
					if (me.player.transitionsDisabled) {
						me.__12345.style[domTransition]='none';
					} else {
						me.__12345.style[domTransition]='all 500ms ease-out 0ms';
					}
					me.__12345.ggParameter.sx=1.2;me.__12345.ggParameter.sy=1.2;
					me.__12345.style[domTransform]=parameterToTransform(me.__12345.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='gostinaya') {
			this.__div=document.createElement('div');
			this.__div.ggId="gostinaya";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 100px;';
			hs+='position : absolute;';
			hs+='top : 140px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node4}",me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._gostinaya1=document.createElement('div');
			this._gostinaya1__img=document.createElement('img');
			this._gostinaya1__img.className='ggskin ggskin_button';
			this._gostinaya1__img.setAttribute('src',basePath + 'images/gostinaya1.png');
			this._gostinaya1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._gostinaya1__img.className='ggskin ggskin_button';
			this._gostinaya1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._gostinaya1__img);
			this._gostinaya1.appendChild(this._gostinaya1__img);
			this._gostinaya1.ggId="gostinaya1";
			this._gostinaya1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._gostinaya1.ggVisible=true;
			this._gostinaya1.className='ggskin ggskin_button ';
			this._gostinaya1.ggType='button';
			hs ='';
			hs+='height : 60px;';
			hs+='left : -29px;';
			hs+='position : absolute;';
			hs+='top : -31px;';
			hs+='visibility : inherit;';
			hs+='width : 60px;';
			hs+='pointer-events:auto;';
			this._gostinaya1.setAttribute('style',hs);
			this._gostinaya1.style[domTransform + 'Origin']='50% 50%';
			me._gostinaya1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._gostinaya1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._gostinaya1.onclick=function (e) {
				me.player.openNext("{node4}",me.hotspot.target);
			}
			this._gostinaya1.onmouseover=function (e) {
				me.elementMouseOver['gostinaya1']=true;
			}
			this._gostinaya1.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._gostinaya1.style[domTransition]='none';
				} else {
					me._gostinaya1.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._gostinaya1.ggParameter.sx=1;me._gostinaya1.ggParameter.sy=1;
				me._gostinaya1.style[domTransform]=parameterToTransform(me._gostinaya1.ggParameter);
				me.elementMouseOver['gostinaya1']=false;
			}
			this._gostinaya1.ontouchend=function (e) {
				me.elementMouseOver['gostinaya1']=false;
			}
			this._gostinaya1.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._gostinaya1);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['gostinaya1']) {
					if (me.player.transitionsDisabled) {
						me._gostinaya1.style[domTransition]='none';
					} else {
						me._gostinaya1.style[domTransition]='all 500ms ease-out 0ms';
					}
					me._gostinaya1.ggParameter.sx=1.2;me._gostinaya1.ggParameter.sy=1.2;
					me._gostinaya1.style[domTransform]=parameterToTransform(me._gostinaya1.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='koridor3') {
			this.__div=document.createElement('div');
			this.__div.ggId="koridor3";
			this.__div.ggLeft=-860;
			this.__div.ggTop=-400;
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : -860px;';
			hs+='position : absolute;';
			hs+='top : -400px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node3}",me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this._koridor03=document.createElement('div');
			this._koridor03__img=document.createElement('img');
			this._koridor03__img.className='ggskin ggskin_button';
			this._koridor03__img.setAttribute('src',basePath + 'images/koridor03.png');
			this._koridor03__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._koridor03__img.className='ggskin ggskin_button';
			this._koridor03__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._koridor03__img);
			this._koridor03.appendChild(this._koridor03__img);
			this._koridor03.ggId="koridor03";
			this._koridor03.ggLeft=-48;
			this._koridor03.ggTop=-41;
			this._koridor03.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:0.6 };
			this._koridor03.ggVisible=true;
			this._koridor03.className='ggskin ggskin_button ';
			this._koridor03.ggType='button';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 92px;';
			hs+='left : -48px;';
			hs+='position : absolute;';
			hs+='top : -41px;';
			hs+='visibility : inherit;';
			hs+='width : 93px;';
			hs+='pointer-events:auto;';
			this._koridor03.setAttribute('style',hs);
			this._koridor03.style[domTransform + 'Origin']='50% 50%';
			this._koridor03.style[domTransform]=parameterToTransform(this._koridor03.ggParameter);
			me._koridor03.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._koridor03.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._koridor03.onclick=function (e) {
				me.player.openNext("{node3}",me.hotspot.target);
			}
			this._koridor03.onmouseover=function (e) {
				me.elementMouseOver['koridor03']=true;
			}
			this._koridor03.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._koridor03.style[domTransition]='none';
				} else {
					me._koridor03.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._koridor03.ggParameter.sx=1;me._koridor03.ggParameter.sy=0.6;
				me._koridor03.style[domTransform]=parameterToTransform(me._koridor03.ggParameter);
				me.elementMouseOver['koridor03']=false;
			}
			this._koridor03.ontouchend=function (e) {
				me.elementMouseOver['koridor03']=false;
			}
			this._koridor03.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this.__div.appendChild(this._koridor03);
			this.ggUse3d=true;
			this.gg3dDistance=500;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['koridor03']) {
					if (me.player.transitionsDisabled) {
						me._koridor03.style[domTransition]='none';
					} else {
						me._koridor03.style[domTransition]='all 500ms ease-out 0ms';
					}
					me._koridor03.ggParameter.sx=1.2;me._koridor03.ggParameter.sy=0.72;
					me._koridor03.style[domTransform]=parameterToTransform(me._koridor03.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='koridor2') {
			this.__div=document.createElement('div');
			this.__div.ggId="koridor2";
			this.__div.ggLeft=-860;
			this.__div.ggTop=-400;
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : -860px;';
			hs+='position : absolute;';
			hs+='top : -400px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node2}",me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this._koridor02=document.createElement('div');
			this._koridor02__img=document.createElement('img');
			this._koridor02__img.className='ggskin ggskin_button';
			this._koridor02__img.setAttribute('src',basePath + 'images/koridor02.png');
			this._koridor02__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._koridor02__img.className='ggskin ggskin_button';
			this._koridor02__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._koridor02__img);
			this._koridor02.appendChild(this._koridor02__img);
			this._koridor02.ggId="koridor02";
			this._koridor02.ggLeft=-48;
			this._koridor02.ggTop=-41;
			this._koridor02.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:0.6 };
			this._koridor02.ggVisible=true;
			this._koridor02.className='ggskin ggskin_button ';
			this._koridor02.ggType='button';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 92px;';
			hs+='left : -48px;';
			hs+='position : absolute;';
			hs+='top : -41px;';
			hs+='visibility : inherit;';
			hs+='width : 93px;';
			hs+='pointer-events:auto;';
			this._koridor02.setAttribute('style',hs);
			this._koridor02.style[domTransform + 'Origin']='50% 50%';
			this._koridor02.style[domTransform]=parameterToTransform(this._koridor02.ggParameter);
			me._koridor02.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._koridor02.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._koridor02.onclick=function (e) {
				me.player.openNext("{node2}",me.hotspot.target);
			}
			this._koridor02.onmouseover=function (e) {
				me.elementMouseOver['koridor02']=true;
			}
			this._koridor02.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._koridor02.style[domTransition]='none';
				} else {
					me._koridor02.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._koridor02.ggParameter.sx=1;me._koridor02.ggParameter.sy=0.6;
				me._koridor02.style[domTransform]=parameterToTransform(me._koridor02.ggParameter);
				me.elementMouseOver['koridor02']=false;
			}
			this._koridor02.ontouchend=function (e) {
				me.elementMouseOver['koridor02']=false;
			}
			this._koridor02.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this.__div.appendChild(this._koridor02);
			this.ggUse3d=true;
			this.gg3dDistance=500;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['koridor02']) {
					if (me.player.transitionsDisabled) {
						me._koridor02.style[domTransition]='none';
					} else {
						me._koridor02.style[domTransition]='all 500ms ease-out 0ms';
					}
					me._koridor02.ggParameter.sx=1.2;me._koridor02.ggParameter.sy=0.72;
					me._koridor02.style[domTransform]=parameterToTransform(me._koridor02.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='koridor4') {
			this.__div=document.createElement('div');
			this.__div.ggId="koridor4";
			this.__div.ggLeft=-860;
			this.__div.ggTop=-400;
			this.__div.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : -860px;';
			hs+='position : absolute;';
			hs+='top : -400px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			this.__div.style[domTransform]=parameterToTransform(this.__div.ggParameter);
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node4}",me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this._koridor04=document.createElement('div');
			this._koridor04__img=document.createElement('img');
			this._koridor04__img.className='ggskin ggskin_button';
			this._koridor04__img.setAttribute('src',basePath + 'images/koridor04.png');
			this._koridor04__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._koridor04__img.className='ggskin ggskin_button';
			this._koridor04__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._koridor04__img);
			this._koridor04.appendChild(this._koridor04__img);
			this._koridor04.ggId="koridor04";
			this._koridor04.ggLeft=-48;
			this._koridor04.ggTop=-41;
			this._koridor04.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:0.6 };
			this._koridor04.ggVisible=true;
			this._koridor04.className='ggskin ggskin_button ';
			this._koridor04.ggType='button';
			hs ='';
			hs+='height : 92px;';
			hs+='left : -48px;';
			hs+='position : absolute;';
			hs+='top : -41px;';
			hs+='visibility : inherit;';
			hs+='width : 93px;';
			hs+='pointer-events:auto;';
			this._koridor04.setAttribute('style',hs);
			this._koridor04.style[domTransform + 'Origin']='50% 50%';
			this._koridor04.style[domTransform]=parameterToTransform(this._koridor04.ggParameter);
			me._koridor04.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._koridor04.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._koridor04.onclick=function (e) {
				me.player.openNext("{node4}",me.hotspot.target);
			}
			this._koridor04.onmouseover=function (e) {
				me.elementMouseOver['koridor04']=true;
			}
			this._koridor04.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._koridor04.style[domTransition]='none';
				} else {
					me._koridor04.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._koridor04.ggParameter.sx=1;me._koridor04.ggParameter.sy=0.6;
				me._koridor04.style[domTransform]=parameterToTransform(me._koridor04.ggParameter);
				me.elementMouseOver['koridor04']=false;
			}
			this._koridor04.ontouchend=function (e) {
				me.elementMouseOver['koridor04']=false;
			}
			this._koridor04.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this.__div.appendChild(this._koridor04);
			this.ggUse3d=true;
			this.gg3dDistance=500;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['koridor04']) {
					if (me.player.transitionsDisabled) {
						me._koridor04.style[domTransition]='none';
					} else {
						me._koridor04.style[domTransition]='all 500ms ease-out 0ms';
					}
					me._koridor04.ggParameter.sx=1.2;me._koridor04.ggParameter.sy=0.72;
					me._koridor04.style[domTransform]=parameterToTransform(me._koridor04.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='bathroom1') {
			this.__div=document.createElement('div');
			this.__div.ggId="bathroom1";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 100px;';
			hs+='position : absolute;';
			hs+='top : 140px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node8}",me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._bathroom01=document.createElement('div');
			this._bathroom01__img=document.createElement('img');
			this._bathroom01__img.className='ggskin ggskin_button';
			this._bathroom01__img.setAttribute('src',basePath + 'images/bathroom01.png');
			this._bathroom01__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._bathroom01__img.className='ggskin ggskin_button';
			this._bathroom01__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._bathroom01__img);
			this._bathroom01.appendChild(this._bathroom01__img);
			this._bathroom01.ggId="bathroom01";
			this._bathroom01.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._bathroom01.ggVisible=true;
			this._bathroom01.className='ggskin ggskin_button ';
			this._bathroom01.ggType='button';
			hs ='';
			hs+='height : 60px;';
			hs+='left : -29px;';
			hs+='position : absolute;';
			hs+='top : -31px;';
			hs+='visibility : inherit;';
			hs+='width : 60px;';
			hs+='pointer-events:auto;';
			this._bathroom01.setAttribute('style',hs);
			this._bathroom01.style[domTransform + 'Origin']='50% 50%';
			me._bathroom01.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._bathroom01.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._bathroom01.onclick=function (e) {
				me.player.openNext("{node8}",me.hotspot.target);
			}
			this._bathroom01.onmouseover=function (e) {
				me.elementMouseOver['bathroom01']=true;
			}
			this._bathroom01.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._bathroom01.style[domTransition]='none';
				} else {
					me._bathroom01.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._bathroom01.ggParameter.sx=1;me._bathroom01.ggParameter.sy=1;
				me._bathroom01.style[domTransform]=parameterToTransform(me._bathroom01.ggParameter);
				me.elementMouseOver['bathroom01']=false;
			}
			this._bathroom01.ontouchend=function (e) {
				me.elementMouseOver['bathroom01']=false;
			}
			this._bathroom01.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._bathroom01);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['bathroom01']) {
					if (me.player.transitionsDisabled) {
						me._bathroom01.style[domTransition]='none';
					} else {
						me._bathroom01.style[domTransition]='all 500ms ease-out 0ms';
					}
					me._bathroom01.ggParameter.sx=1.2;me._bathroom01.ggParameter.sy=1.2;
					me._bathroom01.style[domTransform]=parameterToTransform(me._bathroom01.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='karidor4 st') {
			this.__div=document.createElement('div');
			this.__div.ggId="karidor4 st";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 100px;';
			hs+='position : absolute;';
			hs+='top : 140px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node4}",me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._karidor04_st=document.createElement('div');
			this._karidor04_st__img=document.createElement('img');
			this._karidor04_st__img.className='ggskin ggskin_button';
			this._karidor04_st__img.setAttribute('src',basePath + 'images/karidor04_st.png');
			this._karidor04_st__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._karidor04_st__img.className='ggskin ggskin_button';
			this._karidor04_st__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._karidor04_st__img);
			this._karidor04_st.appendChild(this._karidor04_st__img);
			this._karidor04_st.ggId="karidor04 st";
			this._karidor04_st.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._karidor04_st.ggVisible=true;
			this._karidor04_st.className='ggskin ggskin_button ';
			this._karidor04_st.ggType='button';
			hs ='';
			hs+='height : 60px;';
			hs+='left : -29px;';
			hs+='position : absolute;';
			hs+='top : -31px;';
			hs+='visibility : inherit;';
			hs+='width : 60px;';
			hs+='pointer-events:auto;';
			this._karidor04_st.setAttribute('style',hs);
			this._karidor04_st.style[domTransform + 'Origin']='50% 50%';
			me._karidor04_st.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._karidor04_st.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._karidor04_st.onclick=function (e) {
				me.player.openNext("{node4}",me.hotspot.target);
			}
			this._karidor04_st.onmouseover=function (e) {
				me.elementMouseOver['karidor04_st']=true;
			}
			this._karidor04_st.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._karidor04_st.style[domTransition]='none';
				} else {
					me._karidor04_st.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._karidor04_st.ggParameter.sx=1;me._karidor04_st.ggParameter.sy=1;
				me._karidor04_st.style[domTransform]=parameterToTransform(me._karidor04_st.ggParameter);
				me.elementMouseOver['karidor04_st']=false;
			}
			this._karidor04_st.ontouchend=function (e) {
				me.elementMouseOver['karidor04_st']=false;
			}
			this._karidor04_st.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._karidor04_st);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['karidor04_st']) {
					if (me.player.transitionsDisabled) {
						me._karidor04_st.style[domTransition]='none';
					} else {
						me._karidor04_st.style[domTransition]='all 500ms ease-out 0ms';
					}
					me._karidor04_st.ggParameter.sx=1.2;me._karidor04_st.ggParameter.sy=1.2;
					me._karidor04_st.style[domTransform]=parameterToTransform(me._karidor04_st.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='spalnya1 st') {
			this.__div=document.createElement('div');
			this.__div.ggId="spalnya1 st";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 100px;';
			hs+='position : absolute;';
			hs+='top : 140px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node5}",me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._spalnya01_st=document.createElement('div');
			this._spalnya01_st__img=document.createElement('img');
			this._spalnya01_st__img.className='ggskin ggskin_button';
			this._spalnya01_st__img.setAttribute('src',basePath + 'images/spalnya01_st.png');
			this._spalnya01_st__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._spalnya01_st__img.className='ggskin ggskin_button';
			this._spalnya01_st__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._spalnya01_st__img);
			this._spalnya01_st.appendChild(this._spalnya01_st__img);
			this._spalnya01_st.ggId="spalnya01 st";
			this._spalnya01_st.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._spalnya01_st.ggVisible=true;
			this._spalnya01_st.className='ggskin ggskin_button ';
			this._spalnya01_st.ggType='button';
			hs ='';
			hs+='height : 60px;';
			hs+='left : -29px;';
			hs+='position : absolute;';
			hs+='top : -31px;';
			hs+='visibility : inherit;';
			hs+='width : 60px;';
			hs+='pointer-events:auto;';
			this._spalnya01_st.setAttribute('style',hs);
			this._spalnya01_st.style[domTransform + 'Origin']='50% 50%';
			me._spalnya01_st.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._spalnya01_st.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._spalnya01_st.onclick=function (e) {
				me.player.openNext("{node5}",me.hotspot.target);
			}
			this._spalnya01_st.onmouseover=function (e) {
				me.elementMouseOver['spalnya01_st']=true;
			}
			this._spalnya01_st.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._spalnya01_st.style[domTransition]='none';
				} else {
					me._spalnya01_st.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._spalnya01_st.ggParameter.sx=1;me._spalnya01_st.ggParameter.sy=1;
				me._spalnya01_st.style[domTransform]=parameterToTransform(me._spalnya01_st.ggParameter);
				me.elementMouseOver['spalnya01_st']=false;
			}
			this._spalnya01_st.ontouchend=function (e) {
				me.elementMouseOver['spalnya01_st']=false;
			}
			this._spalnya01_st.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._spalnya01_st);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['spalnya01_st']) {
					if (me.player.transitionsDisabled) {
						me._spalnya01_st.style[domTransition]='none';
					} else {
						me._spalnya01_st.style[domTransition]='all 500ms ease-out 0ms';
					}
					me._spalnya01_st.ggParameter.sx=1.2;me._spalnya01_st.ggParameter.sy=1.2;
					me._spalnya01_st.style[domTransform]=parameterToTransform(me._spalnya01_st.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='bathroom2') {
			this.__div=document.createElement('div');
			this.__div.ggId="bathroom2";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 100px;';
			hs+='position : absolute;';
			hs+='top : 140px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node7}",me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._bathroom02=document.createElement('div');
			this._bathroom02__img=document.createElement('img');
			this._bathroom02__img.className='ggskin ggskin_button';
			this._bathroom02__img.setAttribute('src',basePath + 'images/bathroom02.png');
			this._bathroom02__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._bathroom02__img.className='ggskin ggskin_button';
			this._bathroom02__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._bathroom02__img);
			this._bathroom02.appendChild(this._bathroom02__img);
			this._bathroom02.ggId="bathroom02";
			this._bathroom02.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._bathroom02.ggVisible=true;
			this._bathroom02.className='ggskin ggskin_button ';
			this._bathroom02.ggType='button';
			hs ='';
			hs+='height : 60px;';
			hs+='left : -29px;';
			hs+='position : absolute;';
			hs+='top : -31px;';
			hs+='visibility : inherit;';
			hs+='width : 60px;';
			hs+='pointer-events:auto;';
			this._bathroom02.setAttribute('style',hs);
			this._bathroom02.style[domTransform + 'Origin']='50% 50%';
			me._bathroom02.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._bathroom02.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._bathroom02.onclick=function (e) {
				me.player.openNext("{node7}",me.hotspot.target);
			}
			this._bathroom02.onmouseover=function (e) {
				me.elementMouseOver['bathroom02']=true;
			}
			this._bathroom02.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._bathroom02.style[domTransition]='none';
				} else {
					me._bathroom02.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._bathroom02.ggParameter.sx=1;me._bathroom02.ggParameter.sy=1;
				me._bathroom02.style[domTransform]=parameterToTransform(me._bathroom02.ggParameter);
				me.elementMouseOver['bathroom02']=false;
			}
			this._bathroom02.ontouchend=function (e) {
				me.elementMouseOver['bathroom02']=false;
			}
			this._bathroom02.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._bathroom02);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['bathroom02']) {
					if (me.player.transitionsDisabled) {
						me._bathroom02.style[domTransition]='none';
					} else {
						me._bathroom02.style[domTransition]='all 500ms ease-out 0ms';
					}
					me._bathroom02.ggParameter.sx=1.2;me._bathroom02.ggParameter.sy=1.2;
					me._bathroom02.style[domTransform]=parameterToTransform(me._bathroom02.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='spalnya2') {
			this.__div=document.createElement('div');
			this.__div.ggId="spalnya2";
			this.__div.ggLeft=-860;
			this.__div.ggTop=-400;
			this.__div.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : -860px;';
			hs+='position : absolute;';
			hs+='top : -400px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			this.__div.style[domTransform]=parameterToTransform(this.__div.ggParameter);
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node6}",me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this._spalnya02=document.createElement('div');
			this._spalnya02__img=document.createElement('img');
			this._spalnya02__img.className='ggskin ggskin_button';
			this._spalnya02__img.setAttribute('src',basePath + 'images/spalnya02.png');
			this._spalnya02__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._spalnya02__img.className='ggskin ggskin_button';
			this._spalnya02__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._spalnya02__img);
			this._spalnya02.appendChild(this._spalnya02__img);
			this._spalnya02.ggId="spalnya02";
			this._spalnya02.ggLeft=-48;
			this._spalnya02.ggTop=-41;
			this._spalnya02.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:0.6 };
			this._spalnya02.ggVisible=true;
			this._spalnya02.className='ggskin ggskin_button ';
			this._spalnya02.ggType='button';
			hs ='';
			hs+='height : 92px;';
			hs+='left : -48px;';
			hs+='position : absolute;';
			hs+='top : -41px;';
			hs+='visibility : inherit;';
			hs+='width : 93px;';
			hs+='pointer-events:auto;';
			this._spalnya02.setAttribute('style',hs);
			this._spalnya02.style[domTransform + 'Origin']='50% 50%';
			this._spalnya02.style[domTransform]=parameterToTransform(this._spalnya02.ggParameter);
			me._spalnya02.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._spalnya02.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._spalnya02.onclick=function (e) {
				me.player.openNext("{node6}",me.hotspot.target);
			}
			this._spalnya02.onmouseover=function (e) {
				me.elementMouseOver['spalnya02']=true;
			}
			this._spalnya02.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._spalnya02.style[domTransition]='none';
				} else {
					me._spalnya02.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._spalnya02.ggParameter.sx=1;me._spalnya02.ggParameter.sy=0.6;
				me._spalnya02.style[domTransform]=parameterToTransform(me._spalnya02.ggParameter);
				me.elementMouseOver['spalnya02']=false;
			}
			this._spalnya02.ontouchend=function (e) {
				me.elementMouseOver['spalnya02']=false;
			}
			this._spalnya02.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this.__div.appendChild(this._spalnya02);
			this.ggUse3d=true;
			this.gg3dDistance=500;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['spalnya02']) {
					if (me.player.transitionsDisabled) {
						me._spalnya02.style[domTransition]='none';
					} else {
						me._spalnya02.style[domTransition]='all 500ms ease-out 0ms';
					}
					me._spalnya02.ggParameter.sx=1.2;me._spalnya02.ggParameter.sy=0.72;
					me._spalnya02.style[domTransform]=parameterToTransform(me._spalnya02.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='spalnya1') {
			this.__div=document.createElement('div');
			this.__div.ggId="spalnya1";
			this.__div.ggLeft=-860;
			this.__div.ggTop=-400;
			this.__div.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : -860px;';
			hs+='position : absolute;';
			hs+='top : -400px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			this.__div.style[domTransform]=parameterToTransform(this.__div.ggParameter);
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node5}",me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this._spalnya01=document.createElement('div');
			this._spalnya01__img=document.createElement('img');
			this._spalnya01__img.className='ggskin ggskin_button';
			this._spalnya01__img.setAttribute('src',basePath + 'images/spalnya01.png');
			this._spalnya01__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._spalnya01__img.className='ggskin ggskin_button';
			this._spalnya01__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._spalnya01__img);
			this._spalnya01.appendChild(this._spalnya01__img);
			this._spalnya01.ggId="spalnya01";
			this._spalnya01.ggLeft=-48;
			this._spalnya01.ggTop=-41;
			this._spalnya01.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:0.6 };
			this._spalnya01.ggVisible=true;
			this._spalnya01.className='ggskin ggskin_button ';
			this._spalnya01.ggType='button';
			hs ='';
			hs+='height : 92px;';
			hs+='left : -48px;';
			hs+='position : absolute;';
			hs+='top : -41px;';
			hs+='visibility : inherit;';
			hs+='width : 93px;';
			hs+='pointer-events:auto;';
			this._spalnya01.setAttribute('style',hs);
			this._spalnya01.style[domTransform + 'Origin']='50% 50%';
			this._spalnya01.style[domTransform]=parameterToTransform(this._spalnya01.ggParameter);
			me._spalnya01.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._spalnya01.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._spalnya01.onclick=function (e) {
				me.player.openNext("{node5}",me.hotspot.target);
			}
			this._spalnya01.onmouseover=function (e) {
				me.elementMouseOver['spalnya01']=true;
			}
			this._spalnya01.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._spalnya01.style[domTransition]='none';
				} else {
					me._spalnya01.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._spalnya01.ggParameter.sx=1;me._spalnya01.ggParameter.sy=0.6;
				me._spalnya01.style[domTransform]=parameterToTransform(me._spalnya01.ggParameter);
				me.elementMouseOver['spalnya01']=false;
			}
			this._spalnya01.ontouchend=function (e) {
				me.elementMouseOver['spalnya01']=false;
			}
			this._spalnya01.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this.__div.appendChild(this._spalnya01);
			this.ggUse3d=true;
			this.gg3dDistance=500;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['spalnya01']) {
					if (me.player.transitionsDisabled) {
						me._spalnya01.style[domTransition]='none';
					} else {
						me._spalnya01.style[domTransition]='all 500ms ease-out 0ms';
					}
					me._spalnya01.ggParameter.sx=1.2;me._spalnya01.ggParameter.sy=0.72;
					me._spalnya01.style[domTransform]=parameterToTransform(me._spalnya01.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='spalny3 st') {
			this.__div=document.createElement('div');
			this.__div.ggId="spalny3 st";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 100px;';
			hs+='position : absolute;';
			hs+='top : 140px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node9}",me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._spalny03_st=document.createElement('div');
			this._spalny03_st__img=document.createElement('img');
			this._spalny03_st__img.className='ggskin ggskin_button';
			this._spalny03_st__img.setAttribute('src',basePath + 'images/spalny03_st.png');
			this._spalny03_st__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._spalny03_st__img.className='ggskin ggskin_button';
			this._spalny03_st__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._spalny03_st__img);
			this._spalny03_st.appendChild(this._spalny03_st__img);
			this._spalny03_st.ggId="spalny03 st";
			this._spalny03_st.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._spalny03_st.ggVisible=true;
			this._spalny03_st.className='ggskin ggskin_button ';
			this._spalny03_st.ggType='button';
			hs ='';
			hs+='height : 60px;';
			hs+='left : -29px;';
			hs+='position : absolute;';
			hs+='top : -31px;';
			hs+='visibility : inherit;';
			hs+='width : 60px;';
			hs+='pointer-events:auto;';
			this._spalny03_st.setAttribute('style',hs);
			this._spalny03_st.style[domTransform + 'Origin']='50% 50%';
			me._spalny03_st.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._spalny03_st.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._spalny03_st.onclick=function (e) {
				me.player.openNext("{node9}",me.hotspot.target);
			}
			this._spalny03_st.onmouseover=function (e) {
				me.elementMouseOver['spalny03_st']=true;
			}
			this._spalny03_st.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._spalny03_st.style[domTransition]='none';
				} else {
					me._spalny03_st.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._spalny03_st.ggParameter.sx=1;me._spalny03_st.ggParameter.sy=1;
				me._spalny03_st.style[domTransform]=parameterToTransform(me._spalny03_st.ggParameter);
				me.elementMouseOver['spalny03_st']=false;
			}
			this._spalny03_st.ontouchend=function (e) {
				me.elementMouseOver['spalny03_st']=false;
			}
			this._spalny03_st.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._spalny03_st);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['spalny03_st']) {
					if (me.player.transitionsDisabled) {
						me._spalny03_st.style[domTransition]='none';
					} else {
						me._spalny03_st.style[domTransition]='all 500ms ease-out 0ms';
					}
					me._spalny03_st.ggParameter.sx=1.2;me._spalny03_st.ggParameter.sy=1.2;
					me._spalny03_st.style[domTransform]=parameterToTransform(me._spalny03_st.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='spalnya3') {
			this.__div=document.createElement('div');
			this.__div.ggId="spalnya3";
			this.__div.ggLeft=-860;
			this.__div.ggTop=-400;
			this.__div.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : -860px;';
			hs+='position : absolute;';
			hs+='top : -400px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			this.__div.style[domTransform]=parameterToTransform(this.__div.ggParameter);
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node9}",me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this._spalnya03=document.createElement('div');
			this._spalnya03__img=document.createElement('img');
			this._spalnya03__img.className='ggskin ggskin_button';
			this._spalnya03__img.setAttribute('src',basePath + 'images/spalnya03.png');
			this._spalnya03__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._spalnya03__img.className='ggskin ggskin_button';
			this._spalnya03__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._spalnya03__img);
			this._spalnya03.appendChild(this._spalnya03__img);
			this._spalnya03.ggId="spalnya03";
			this._spalnya03.ggLeft=-48;
			this._spalnya03.ggTop=-41;
			this._spalnya03.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:0.6 };
			this._spalnya03.ggVisible=true;
			this._spalnya03.className='ggskin ggskin_button ';
			this._spalnya03.ggType='button';
			hs ='';
			hs+='height : 92px;';
			hs+='left : -48px;';
			hs+='position : absolute;';
			hs+='top : -41px;';
			hs+='visibility : inherit;';
			hs+='width : 93px;';
			hs+='pointer-events:auto;';
			this._spalnya03.setAttribute('style',hs);
			this._spalnya03.style[domTransform + 'Origin']='50% 50%';
			this._spalnya03.style[domTransform]=parameterToTransform(this._spalnya03.ggParameter);
			me._spalnya03.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._spalnya03.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._spalnya03.onclick=function (e) {
				me.player.openNext("{node9}",me.hotspot.target);
			}
			this._spalnya03.onmouseover=function (e) {
				me.elementMouseOver['spalnya03']=true;
			}
			this._spalnya03.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._spalnya03.style[domTransition]='none';
				} else {
					me._spalnya03.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._spalnya03.ggParameter.sx=1;me._spalnya03.ggParameter.sy=0.6;
				me._spalnya03.style[domTransform]=parameterToTransform(me._spalnya03.ggParameter);
				me.elementMouseOver['spalnya03']=false;
			}
			this._spalnya03.ontouchend=function (e) {
				me.elementMouseOver['spalnya03']=false;
			}
			this._spalnya03.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this.__div.appendChild(this._spalnya03);
			this.ggUse3d=true;
			this.gg3dDistance=500;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['spalnya03']) {
					if (me.player.transitionsDisabled) {
						me._spalnya03.style[domTransition]='none';
					} else {
						me._spalnya03.style[domTransition]='all 500ms ease-out 0ms';
					}
					me._spalnya03.ggParameter.sx=1.2;me._spalnya03.ggParameter.sy=0.72;
					me._spalnya03.style[domTransform]=parameterToTransform(me._spalnya03.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="spalnya4";
			this.__div.ggLeft=-860;
			this.__div.ggTop=-400;
			this.__div.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : -860px;';
			hs+='position : absolute;';
			hs+='top : -400px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			this.__div.style[domTransform]=parameterToTransform(this.__div.ggParameter);
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext("{node10}",me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this._spalnya04=document.createElement('div');
			this._spalnya04__img=document.createElement('img');
			this._spalnya04__img.className='ggskin ggskin_button';
			this._spalnya04__img.setAttribute('src',basePath + 'images/spalnya04.png');
			this._spalnya04__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._spalnya04__img.className='ggskin ggskin_button';
			this._spalnya04__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._spalnya04__img);
			this._spalnya04.appendChild(this._spalnya04__img);
			this._spalnya04.ggId="spalnya04";
			this._spalnya04.ggLeft=-48;
			this._spalnya04.ggTop=-41;
			this._spalnya04.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:0.6 };
			this._spalnya04.ggVisible=true;
			this._spalnya04.className='ggskin ggskin_button ';
			this._spalnya04.ggType='button';
			hs ='';
			hs+='height : 92px;';
			hs+='left : -48px;';
			hs+='position : absolute;';
			hs+='top : -41px;';
			hs+='visibility : inherit;';
			hs+='width : 93px;';
			hs+='pointer-events:auto;';
			this._spalnya04.setAttribute('style',hs);
			this._spalnya04.style[domTransform + 'Origin']='50% 50%';
			this._spalnya04.style[domTransform]=parameterToTransform(this._spalnya04.ggParameter);
			me._spalnya04.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._spalnya04.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._spalnya04.onclick=function (e) {
				me.player.openNext("{node10}",me.hotspot.target);
			}
			this._spalnya04.onmouseover=function (e) {
				me.elementMouseOver['spalnya04']=true;
			}
			this._spalnya04.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._spalnya04.style[domTransition]='none';
				} else {
					me._spalnya04.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._spalnya04.ggParameter.sx=1;me._spalnya04.ggParameter.sy=0.6;
				me._spalnya04.style[domTransform]=parameterToTransform(me._spalnya04.ggParameter);
				me.elementMouseOver['spalnya04']=false;
			}
			this._spalnya04.ontouchend=function (e) {
				me.elementMouseOver['spalnya04']=false;
			}
			this._spalnya04.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this.__div.appendChild(this._spalnya04);
			this.ggUse3d=true;
			this.gg3dDistance=500;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['spalnya04']) {
					if (me.player.transitionsDisabled) {
						me._spalnya04.style[domTransition]='none';
					} else {
						me._spalnya04.style[domTransition]='all 500ms ease-out 0ms';
					}
					me._spalnya04.ggParameter.sx=1.2;me._spalnya04.ggParameter.sy=0.72;
					me._spalnya04.style[domTransform]=parameterToTransform(me._spalnya04.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};