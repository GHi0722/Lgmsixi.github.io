(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.元件25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjWM0IAA5nIGtAAIAAZng");
	this.shape.setTransform(21.5,82);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件25, new cjs.Rectangle(0,0,43,164), null);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("EAH0AjKQnKAAmhixQmUirk3k3Qk4k3iqmUQixmiAAnKQAAnICxmiQCqmUE4k4QE4k3GTirQGhixHKAAQGJAAFzCFItoNoQkKAXjpCCQjoCBigDWQiZDLg9D1Qg7DsAjDyQAjDyB7DSQB+DaDMCZQDMCYDzA9QDsA6DzgiQDygjDTh7QDZh/CZjLID6AAIAARhQkVC6lABhQk9BglNAAIgDAAg");
	this.shape.setTransform(226.5,67.4,0.245,0.245);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("EghPAD6IH1nzMA6qAAAIAAHzg");
	this.shape_1.setTransform(186.8,18.4,0.245,0.245);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202020").s().p("Eg4qAH0IAAvnMBxWAAAIAAPng");
	this.shape_2.setTransform(150.1,110.2,0.245,0.245);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#202020").s().p("A3bH0IAAvnMAu3AAAIAAPng");
	this.shape_3.setTransform(171.4,61.2,0.245,0.245);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0071BC").s().p("EgwfAH0IPovnMBRXAAAIAAPng");
	this.shape_4.setTransform(132.2,36.7,0.245,0.245);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0071BC").s().p("EgwzAENQlujni7mGICSiTMBwnAAAIAAPnMhdvAAAIgCAAQmwAAlvjng");
	this.shape_5.setTransform(118.1,85.7,0.245,0.245);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#202020").s().p("EAD6AnEQn8AAnQjFQnBi9lalaQlalai+nBQjEnRAAn8QAAn8DEnQQC+nBFalZQFalbHBi+QHQjEH8AAQFvgBFgBqQFhBrEyDLIpKJJIsYAAQkwAAkXB2QkNByjQDPQjPDQhyENQh2EXAAEwQAAExB2EXQByENDPDPQDQDQENByQEXB2EwAAIfQAAQliHYoQEJQoPEHpNAAIgCAAg");
	this.shape_6.setTransform(55.1,61.2,0.245,0.245);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件22, new cjs.Rectangle(0,0,269.4,122.5), null);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("A3bH0IAAvnMAu3AAAIAAPng");
	this.shape.setTransform(36.7,61.2,0.245,0.245);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("EAH0AlHMAAAg0HI0MUMIrDrCIfP/QIPoAAMAAABKNg");
	this.shape_1.setTransform(36.7,58.2,0.245,0.245);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件21, new cjs.Rectangle(0,0,73.5,116.4), null);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("A3bH0IAAvnMAu3AAAIAAPng");
	this.shape.setTransform(263.3,67.3,0.245,0.245);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("EAH0AlHMAAAg0HI0MUMIrDrCIfP/QIPoAAMAAABKNg");
	this.shape_1.setTransform(263.3,64.3,0.245,0.245);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202020").s().p("EAH0AjKQnKAAmhixQmUirk3k3Qk4k3iqmUQixmiAAnKQAAnICxmiQCqmUE4k4QE4k3GTirQGhixHKAAQGJAAFzCFItoNoQkKAXjpCCQjoCBigDWQiZDLg9D1Qg7DsAjDyQAjDyB7DSQB+DaDMCZQDMCYDzA9QDsA6DzgiQDygjDTh7QDZh/CZjLID6AAIAARhQkVC6lABhQk9BglNAAIgDAAg");
	this.shape_2.setTransform(226.5,67.4,0.245,0.245);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#202020").s().p("EghPAD6IH1nzMA6qAAAIAAHzg");
	this.shape_3.setTransform(186.8,18.4,0.245,0.245);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#202020").s().p("Eg4qAH0IAAvnMBxWAAAIAAPng");
	this.shape_4.setTransform(150.1,110.2,0.245,0.245);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#202020").s().p("A3bH0IAAvnMAu3AAAIAAPng");
	this.shape_5.setTransform(171.4,61.2,0.245,0.245);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0071BC").s().p("EgwfAH0IPovnMBRXAAAIAAPng");
	this.shape_6.setTransform(132.2,36.7,0.245,0.245);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0071BC").s().p("EgwzAENQlujni7mGICSiTMBwnAAAIAAPnMhdvAAAIgCAAQmwAAlvjng");
	this.shape_7.setTransform(118.1,85.7,0.245,0.245);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#202020").s().p("EAD6AnEQn8AAnQjFQnBi9lalaQlalai+nBQjEnRAAn8QAAn8DEnQQC+nBFalZQFalbHBi+QHQjEH8AAQFvgBFgBqQFhBrEyDLIpKJJIsYAAQkwAAkXB2QkNByjQDPQjPDQhyENQh2EXAAEwQAAExB2EXQByENDPDPQDQDQENByQEXB2EwAAIfQAAQliHYoQEJQoPEHpNAAIgCAAg");
	this.shape_8.setTransform(55.1,61.2,0.245,0.245);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件20, new cjs.Rectangle(0,0,300,122.5), null);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("EAH0AjKQnKAAmhixQmUirk3k3Qk4k3iqmUQixmiAAnKQAAnICxmiQCqmUE4k4QE4k3GTirQGhixHKAAQGJAAFzCFItoNoQkKAXjpCCQjoCBigDWQiZDLg9D1Qg7DsAjDyQAjDyB7DSQB+DaDMCZQDMCYDzA9QDsA6DzgiQDygjDTh7QDZh/CZjLID6AAIAARhQkVC6lABhQk9BglNAAIgDAAg");
	this.shape.setTransform(42.8,55.1,0.245,0.245);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件19, new cjs.Rectangle(0,0,85.7,110.2), null);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("EAD6AnEQn8AAnQjFQnBi9lalaQlalai+nBQjEnRAAn8QAAn8DEnQQC+nBFalZQFalbHBi+QHQjEH8AAQFvgBFgBqQFhBrEyDLIpKJJIsYAAQkwAAkXB2QkNByjQDPQjPDQhyENQh2EXAAEwQAAExB2EXQByENDPDPQDQDQENByQEXB2EwAAIfQAAQliHYoQEJQoPEHpNAAIgCAAg");
	this.shape.setTransform(55.1,61.2,0.245,0.245);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件18, new cjs.Rectangle(0,0,110.2,122.5), null);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0071BC").s().p("EgwzAENQlujni7mGICSiTMBwnAAAIAAPnMhdvAAAIgCAAQmwAAlvjng");
	this.shape.setTransform(90.1,12.3,0.245,0.245);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件17, new cjs.Rectangle(0,0,180.1,24.5), null);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0071BC").s().p("EgwfAH0IPovnMBRXAAAIAAPng");
	this.shape.setTransform(76,12.2,0.245,0.245);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件16, new cjs.Rectangle(0,0,152,24.5), null);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("A3bH0IAAvnMAu3AAAIAAPng");
	this.shape.setTransform(36.7,12.3,0.245,0.245);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件15, new cjs.Rectangle(0,0,73.5,24.5), null);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("Eg4qAH0IAAvnMBxWAAAIAAPng");
	this.shape.setTransform(88.8,12.2,0.245,0.245);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14, new cjs.Rectangle(0,0,177.7,24.5), null);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("EghPAD6IH1nzMA6qAAAIAAHzg");
	this.shape.setTransform(52.1,6.1,0.245,0.245);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13, new cjs.Rectangle(0,0,104.2,12.3), null);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("EAH0AlHMAAAg0HI0MUMIrDrCIfP/QIPoAAMAAABKNg");
	this.shape.setTransform(36.7,58.2,0.245,0.245);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件12, new cjs.Rectangle(0,0,73.5,116.4), null);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("A3bH0IAAvnMAu3AAAIAAPng");
	this.shape.setTransform(36.7,12.2,0.245,0.245);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件11, new cjs.Rectangle(0,0,73.5,24.5), null);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("EghPAD6IH1nzMA6qAAAIAAHzg");
	this.shape.setTransform(163.7,22.2,0.253,0.889);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("Eg4qAH0IAAvnMBxWAAAIAAPng");
	this.shape_1.setTransform(125.8,355.6,0.253,0.889);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202020").s().p("A3bH0IAAvnMAu3AAAIAAPng");
	this.shape_2.setTransform(147.8,177.8,0.253,0.889);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0071BC").s().p("EgwfAH0IPovnMBRXAAAIAAPng");
	this.shape_3.setTransform(107.3,88.9,0.253,0.889);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0071BC").s().p("EgwzAENQlujni7mGICSiTMBwnAAAIAAPnMhdvAAAIgCAAQmwAAlvjng");
	this.shape_4.setTransform(92.9,266.7,0.253,0.889);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件10, new cjs.Rectangle(0,0,217.5,400), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApwHrIAAvVIThAAIAAPVg");
	this.shape.setTransform(62.5,49.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(0,0,125,98.2), null);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnhFoIAArPIPDAAIAALPg");
	this.shape.setTransform(48.2,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,96.5,72), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("EAH0AjKQnKAAmhixQmUirk3k3Qk4k3iqmUQixmiAAnKQAAnICxmiQCqmUE4k4QE4k3GTirQGhixHKAAQGJAAFzCFItoNoQkKAXjpCCQjoCBigDWQiZDLg9D1Qg7DsAjDyQAjDyB7DSQB+DaDMCZQDMCYDzA9QDsA6DzgiQDygjDTh7QDZh/CZjLID6AAIAARhQkVC6lABhQk9BglNAAIgDAAg");
	this.shape.setTransform(55.3,55.3,0.245,0.245,0,0,0,51.1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,85.7,110.2), null);


(lib.元件26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件21();
	this.instance.parent = this;
	this.instance.setTransform(36.7,110.3,1,1,0,0,0,36.7,58.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgiIAWtMAAAgtaMBERAAAMAAAAtag");
	this.shape.setTransform(292,145.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件26, new cjs.Rectangle(0,0,510.5,290.7), null);


// stage content:
(lib.classicon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 4
	this.instance = new lib.元件26();
	this.instance.parent = this;
	this.instance.setTransform(606.8,238,1,1,0,0,0,255.2,145.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({_off:false},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:-0.3,x:616.3,y:240},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:-0.7,x:625.8,y:241.9},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:-1,x:635.3,y:243.8},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:-1.4,x:644.9,y:245.7},0).wait(1).to({scaleX:1.22,scaleY:1.22,rotation:-1.7,x:654.5,y:247.6},0).wait(1).to({scaleX:1.26,scaleY:1.26,rotation:-2.1,x:664,y:249.4},0).wait(1).to({scaleX:1.31,scaleY:1.31,rotation:-2.4,x:673.5,y:251.2},0).wait(1).to({scaleX:1.35,scaleY:1.35,rotation:-2.7,x:683.2,y:253},0).wait(1).to({scaleX:1.39,scaleY:1.39,rotation:-3.1,x:692.7,y:254.6},0).wait(1).to({scaleX:1.44,scaleY:1.44,rotation:-3.4,x:702.3,y:256.3},0).wait(1).to({scaleX:1.48,scaleY:1.48,rotation:-3.8,x:711.9,y:257.9},0).wait(1).to({scaleX:1.52,scaleY:1.52,rotation:-4.1,x:721.5,y:259.4},0).wait(1).to({scaleX:1.57,scaleY:1.57,rotation:-4.4,x:731.2,y:260.8},0).wait(1).to({scaleX:1.61,scaleY:1.61,rotation:-4.8,x:740.8,y:262.2},0).wait(1).to({scaleX:1.65,scaleY:1.65,rotation:-5.1,x:750.4,y:263.4},0).wait(1).to({scaleX:1.7,scaleY:1.7,rotation:-5.5,x:760.1,y:264.5},0).wait(1).to({scaleX:1.74,scaleY:1.74,rotation:-5.8,x:769.8,y:265.3},0).wait(1).to({scaleX:1.78,scaleY:1.78,rotation:-6.2,x:779.6,y:265.9},0).wait(1).to({scaleX:1.83,scaleY:1.83,rotation:-6.5,x:789.3,y:266},0).wait(1).to({scaleX:1.87,scaleY:1.87,rotation:-6.8,x:798.9,y:265.1},0).wait(1).to({scaleX:1.92,scaleY:1.92,rotation:-7.2,x:807.4,y:260.8},0).wait(1).to({scaleX:1.96,scaleY:1.96,rotation:-7.5,x:803.9,y:252.5},0).wait(1).to({scaleX:2,scaleY:2,rotation:-7.9,x:796.5,y:246.1},0).wait(1).to({scaleX:2.05,scaleY:2.05,rotation:-8.2,x:788.4,y:240.6},0).wait(1).to({scaleX:2.09,scaleY:2.09,rotation:-8.5,x:780.1,y:235.6},0).wait(1).to({scaleX:2.13,scaleY:2.13,rotation:-8.9,x:771.7,y:230.8},0).wait(1).to({scaleX:2.18,scaleY:2.18,rotation:-9.2,x:763.1,y:226.2},0).wait(1).to({scaleX:2.22,scaleY:2.22,rotation:-9.6,x:754.4,y:221.7},0).wait(1).to({scaleX:2.26,scaleY:2.26,rotation:-9.9,x:745.7,y:217.4},0).wait(1).to({scaleX:2.31,scaleY:2.31,rotation:-10.3,x:736.9,y:213.1},0).wait(1).to({scaleX:2.35,scaleY:2.35,rotation:-10.6,x:728.1,y:208.9},0).wait(1).to({scaleX:2.39,scaleY:2.39,rotation:-10.9,x:719.3,y:204.8},0).wait(1).to({scaleX:2.44,scaleY:2.44,rotation:-11.3,x:710.5,y:200.7},0).wait(1).to({scaleX:2.48,scaleY:2.48,rotation:-11.6,x:701.6,y:196.7},0).wait(1).to({scaleX:2.53,scaleY:2.53,rotation:-12,x:692.8,y:192.8},0).wait(1).to({scaleX:2.57,scaleY:2.57,rotation:-12.3,x:683.9,y:188.8},0).wait(1).to({scaleX:2.61,scaleY:2.61,rotation:-12.7,x:674.9,y:184.9},0).wait(1).to({scaleX:2.66,scaleY:2.66,rotation:-13,x:666,y:181},0).wait(1).to({scaleX:2.7,scaleY:2.7,rotation:-13.3,x:657.1,y:177.2},0).wait(1).to({scaleX:2.74,scaleY:2.74,rotation:-13.7,x:648.1,y:173.4},0).wait(1).to({scaleX:2.79,scaleY:2.79,rotation:-14,x:639.2,y:169.6},0).wait(1).to({scaleX:2.83,scaleY:2.83,rotation:-14.4,x:630.2,y:165.8},0).wait(1).to({scaleX:2.87,scaleY:2.87,rotation:-14.7,x:621.2,y:162.1},0).wait(1).to({scaleX:2.92,scaleY:2.92,rotation:-15,x:612.2,y:158.4},0).wait(1).to({scaleX:2.96,scaleY:2.96,rotation:-15.4,x:603.2,y:154.7},0).wait(1).to({scaleX:3,scaleY:3,rotation:-15.7,x:594.2,y:151},0).wait(1).to({scaleX:3.05,scaleY:3.05,rotation:-16.1,x:585.2,y:147.3},0).wait(1).to({scaleX:3.09,scaleY:3.09,rotation:-16.4,x:576.2,y:143.7},0).wait(1).to({scaleX:3.13,scaleY:3.13,rotation:-16.8,x:567.1,y:140},0).wait(1).to({scaleX:3.18,scaleY:3.18,rotation:-17.1,x:558.1,y:136.4},0).wait(1).to({scaleX:3.22,scaleY:3.22,rotation:-17.4,x:549.1,y:132.8},0).wait(1).to({scaleX:3.27,scaleY:3.27,rotation:-17.8,x:540,y:129.2},0).wait(1).to({scaleX:3.31,scaleY:3.31,rotation:-18.1,x:531,y:125.6},0).wait(1).to({scaleX:3.35,scaleY:3.35,rotation:-18.5,x:521.9,y:122},0).wait(1).to({scaleX:3.4,scaleY:3.4,rotation:-18.8,x:512.8,y:118.4},0).wait(1).to({scaleX:3.44,scaleY:3.44,rotation:-19.1,x:503.8,y:114.8},0).wait(1).to({scaleX:3.48,scaleY:3.48,rotation:-19.5,x:494.8,y:111.3},0).wait(1).to({scaleX:3.53,scaleY:3.53,rotation:-19.8,x:485.7,y:107.8},0).wait(1).to({scaleX:3.57,scaleY:3.57,rotation:-20.2,x:476.6,y:104.2},0).wait(1).to({scaleX:3.61,scaleY:3.61,rotation:-20.5,x:467.5,y:100.7},0).wait(1).to({scaleX:3.66,scaleY:3.66,rotation:-20.9,x:458.5,y:97.2},0).wait(1).to({scaleX:3.7,scaleY:3.7,rotation:-21.2,x:449.4,y:93.7},0).wait(1).to({scaleX:3.74,scaleY:3.74,rotation:-21.5,x:440.3,y:90.1},0).wait(1).to({scaleX:3.79,scaleY:3.79,rotation:-21.9,x:431.2,y:86.7},0).wait(1).to({scaleX:3.83,scaleY:3.83,rotation:-22.2,x:422.1,y:83.2},0).wait(1).to({scaleX:3.88,scaleY:3.88,rotation:-22.6,x:413,y:79.7},0).wait(1).to({scaleX:3.92,scaleY:3.92,rotation:-22.9,x:404,y:76.2},0).wait(1).to({scaleX:3.96,scaleY:3.96,rotation:-23.3,x:394.8,y:72.8},0).wait(1).to({scaleX:4.01,scaleY:4.01,rotation:-23.6,x:385.8,y:69.3},0).wait(1).to({scaleX:4.05,scaleY:4.05,rotation:-23.9,x:376.7,y:65.9},0).wait(1).to({scaleX:4.09,scaleY:4.09,rotation:-24.3,x:367.5,y:62.4},0).wait(1).to({scaleX:4.14,scaleY:4.14,rotation:-24.6,x:358.4,y:58.9},0).wait(1).to({scaleX:4.18,scaleY:4.18,rotation:-25,x:349.4,y:55.5},0).wait(1).to({scaleX:4.22,scaleY:4.22,rotation:-25.3,x:340.2,y:52.1},0).wait(1).to({scaleX:4.27,scaleY:4.27,rotation:-25.6,x:331.1,y:48.7},0).wait(1));

	// 图层 16
	this.instance_1 = new lib.元件25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(504.4,208.1,13.465,1,0,0,0,0,82);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90).to({_off:false},0).wait(1).to({regX:21.5,x:790.6},0).wait(1).to({x:787.2},0).wait(1).to({x:783.9},0).wait(1).to({x:780.5},0).wait(1).to({x:777.2},0).wait(1).to({x:773.9},0).wait(1).to({x:770.5},0).wait(1).to({x:767.2},0).wait(1).to({x:763.8},0).wait(1).to({x:760.5},0).wait(1).to({x:757.2},0).wait(1).to({x:753.8},0).wait(1).to({x:750.5},0).wait(1).to({x:747.2},0).wait(1).to({x:743.8},0).wait(1).to({x:740.5},0).wait(1).to({x:737.1},0).wait(1).to({x:733.8},0).wait(1).to({x:737.3,y:208.3},0).wait(1).to({x:740.8,y:208.6},0).wait(1).to({x:744.2,y:208.8},0).wait(1).to({x:747.7,y:209.1},0).wait(1).to({x:751.2,y:209.3},0).wait(1).to({x:754.7,y:209.6},0).wait(1).to({x:758.2,y:209.9},0).wait(1).to({x:761.6,y:210.1},0).wait(1).to({x:765.1,y:210.4},0).wait(1).to({x:768.6,y:210.6},0).wait(1).to({x:772.1,y:210.9},0).wait(1).to({x:775.6,y:211.2},0).wait(1).to({x:767.8,y:210.7},0).wait(1).to({x:760.1,y:210.3},0).wait(1).to({x:752.4,y:209.8},0).wait(1).to({x:744.6,y:209.4},0).wait(1).to({x:736.9,y:208.9},0).wait(1).to({x:729.1,y:208.5},0).wait(1).to({x:721.4,y:208.1},0).wait(1).to({x:714.7},0).wait(1).to({x:708},0).wait(1).to({x:701.3},0).wait(1).to({x:694.7},0).wait(1).to({x:688},0).wait(1).to({x:681.3},0).wait(1).to({x:674.6},0).wait(1).to({x:667.9},0).wait(1).to({x:661.2},0).wait(1).to({x:647.7},0).wait(1).to({x:634.2},0).wait(1).to({x:620.7},0).wait(1).to({x:607.2},0).wait(1).to({x:593.8},0).wait(1).to({x:580.3},0).wait(1).to({x:566.8},0).wait(1).to({x:553.3},0).wait(1).to({x:539.8},0).wait(1).to({x:526.3},0).wait(1).to({x:512.8},0).wait(1).to({x:499.3},0).wait(1).to({x:485.9},0).wait(1).to({x:472.4},0).wait(1).to({x:458.9},0).wait(1).to({x:445.4},0).wait(1).to({x:431.9},0).to({_off:true},1).wait(12));

	// main
	this.instance_2 = new lib.元件20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,200,1,1,0,0,0,150,61.2);
	this.instance_2._off = true;

	this.instance_3 = new lib.元件22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(259.7,200,1,1,0,0,0,134.7,61.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).wait(4).to({_off:true},1).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90).to({_off:false},0).wait(59).to({_off:true},1).wait(16));

	// c4
	this.instance_4 = new lib.元件1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(363,206,0.995,0.998,49.6,0,0,53.6,54);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).wait(1).to({regX:42.8,regY:55.1,scaleX:1.08,scaleY:1.09,rotation:48,x:367.4,y:197.4},0).wait(1).to({scaleX:1.17,scaleY:1.18,rotation:46.3,x:379.8,y:196.8},0).wait(1).to({scaleX:1.26,scaleY:1.26,rotation:44.7,x:391.7,y:196.4},0).wait(1).to({scaleX:1.35,scaleY:1.35,rotation:43,x:407,y:196},0).wait(1).to({scaleX:1.44,scaleY:1.44,rotation:41.4,x:425.1,y:195.8},0).wait(1).to({scaleX:1.52,scaleY:1.53,rotation:39.7,x:442.7,y:195.7},0).wait(1).to({scaleX:1.61,scaleY:1.61,rotation:38.1,x:459.9,y:195.5},0).wait(1).to({scaleX:1.7,scaleY:1.7,rotation:36.4,x:476.5},0).wait(1).to({scaleX:1.79,scaleY:1.79,rotation:34.8,x:492.6,y:195.4},0).wait(1).to({scaleX:1.88,scaleY:1.88,rotation:33.1,x:508.3,y:195.3},0).wait(1).to({scaleX:1.96,scaleY:1.97,rotation:31.4,x:523.4,y:195.4},0).wait(1).to({scaleX:2.05,scaleY:2.05,rotation:29.8,x:538.2},0).wait(1).to({scaleX:2.14,scaleY:2.14,rotation:28.1,x:552.3,y:195.5},0).wait(1).to({scaleX:2.23,scaleY:2.23,rotation:26.5,x:566.1,y:195.7},0).wait(1).to({scaleX:2.31,scaleY:2.32,rotation:24.8,x:579.4,y:195.9},0).wait(1).to({scaleX:2.4,scaleY:2.4,rotation:23.2,x:592.1,y:196.1},0).wait(1).to({scaleX:2.49,scaleY:2.49,rotation:21.5,x:604.5,y:196.4},0).wait(1).to({scaleX:2.58,scaleY:2.58,rotation:19.9,x:616.4,y:196.7},0).wait(1).to({scaleX:2.67,scaleY:2.67,rotation:18.2,x:627.8,y:197},0).wait(1).to({scaleX:2.75,scaleY:2.76,rotation:16.6,x:638.7,y:197.4},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:14.9,x:649.2,y:197.8},0).wait(1).to({scaleX:2.93,scaleY:2.93,rotation:13.2,x:659.2,y:198.3},0).wait(1).to({scaleX:3.02,scaleY:3.02,rotation:11.6,x:668.8,y:198.8},0).wait(1).to({scaleX:3.11,scaleY:3.11,rotation:9.9,x:678,y:199.4},0).wait(1).to({scaleX:3.19,scaleY:3.19,rotation:8.3,x:686.6,y:199.9},0).wait(1).to({scaleX:3.28,scaleY:3.28,rotation:6.6,x:694.8,y:200.7},0).wait(1).to({scaleX:3.37,scaleY:3.37,rotation:5,x:702.6,y:201.3},0).wait(1).to({scaleX:3.46,scaleY:3.46,rotation:3.3,x:709.9,y:202},0).wait(1).to({scaleX:3.54,scaleY:3.55,rotation:1.7,x:716.9,y:202.8},0).wait(1).to({scaleX:3.63,scaleY:3.63,rotation:0,x:723.4,y:203.6},0).to({_off:true},1).wait(106));

	// 图层 12
	this.instance_5 = new lib.元件3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(402,189.2,1.274,1.081,0,0,0,48.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:48.2,regY:36,scaleX:1.24,scaleY:1.07,x:402.2,y:227.5},0).wait(1).to({scaleX:1.21,scaleY:1.06,x:402.1,y:227.1},0).wait(1).to({scaleX:1.17,scaleY:1.05,y:226.7},0).wait(1).to({scaleX:1.14,scaleY:1.03,x:402.2,y:226.2},0).wait(1).to({scaleX:1.11,scaleY:1.02,x:402.1,y:225.8},0).wait(1).to({scaleX:1.07,scaleY:1.01,y:225.4},0).wait(1).to({scaleX:1.04,scaleY:1,y:225},0).wait(1).to({scaleX:1.01,scaleY:0.99,x:402.2,y:224.6},0).wait(1).to({scaleX:0.97,scaleY:0.98,x:402.1,y:224.2},0).wait(1).to({scaleX:0.94,scaleY:0.97,y:223.8},0).wait(1).to({scaleX:0.91,scaleY:0.96,x:402.2,y:223.3},0).wait(1).to({scaleX:0.87,scaleY:0.94,x:402.1,y:222.9},0).wait(1).to({scaleX:0.84,scaleY:0.93,y:222.5},0).wait(1).to({scaleX:0.81,scaleY:0.92,y:222.1},0).wait(1).to({scaleX:0.77,scaleY:0.91,y:221.7},0).wait(1).to({scaleX:0.74,scaleY:0.9,y:221.3},0).wait(1).to({scaleX:0.7,scaleY:0.89,y:220.9},0).wait(1).to({scaleX:0.67,scaleY:0.87,y:220.4},0).wait(1).to({scaleX:0.64},0).wait(1).to({scaleX:0.6},0).wait(1).to({scaleX:0.57},0).wait(1).to({scaleX:0.54},0).wait(1).to({scaleX:0.5},0).wait(1).to({scaleX:0.47},0).wait(1).to({scaleX:0.44},0).wait(1).to({scaleX:0.4},0).wait(1).to({scaleX:0.37},0).wait(1).to({scaleX:0.34},0).wait(1).to({scaleX:0.3},0).wait(1).to({scaleX:0.27},0).wait(1).to({scaleX:0.24},0).wait(1).to({scaleX:0.2},0).wait(1).to({scaleX:0.17},0).wait(1).to({scaleX:0.13},0).wait(1).to({scaleX:0.1},0).wait(1).to({scaleX:0.07},0).wait(1).to({scaleX:0.03},0).to({_off:true},1).wait(128));

	// 图层 13
	this.instance_6 = new lib.元件4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(365.9,153.6,0.821,1,0,0,0,62.5,49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({x:369.2},0).wait(1).to({x:372.6},0).wait(1).to({x:376},0).wait(1).to({x:379.4},0).wait(1).to({x:382.7},0).wait(1).to({x:386.1},0).wait(1).to({x:389.5},0).wait(1).to({x:392.9},0).wait(1).to({x:396.2},0).wait(1).to({x:399.6},0).wait(1).to({x:403},0).wait(1).to({x:406.4},0).wait(1).to({x:409.7},0).wait(1).to({x:413.1},0).wait(1).to({x:416.5},0).wait(1).to({x:419.9},0).wait(1).to({x:423.2},0).wait(1).to({x:426.6},0).wait(1).to({x:430},0).wait(1).to({x:433.4},0).wait(1).to({x:436.7},0).wait(1).to({x:440.1},0).wait(1).to({x:443.5},0).wait(1).to({x:446.9},0).wait(1).to({x:450.2},0).wait(1).to({x:453.6},0).wait(1).to({x:457},0).wait(1).to({x:460.4},0).wait(1).to({x:463.7},0).wait(1).to({x:467.1},0).wait(1).to({x:470.5},0).wait(1).to({x:473.9},0).wait(1).to({x:477.2},0).wait(1).to({x:480.6},0).wait(1).to({x:484},0).wait(1).to({x:487.4},0).wait(1).to({x:490.7},0).to({_off:true},1).wait(128));

	// 图层 4
	this.instance_7 = new lib.元件1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(362.3,206.2,0.986,1,180,0,0,54,54.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:42.8,regY:55.1,rotation:175.5,x:373.3,y:205.1},0).wait(1).to({scaleX:0.99,rotation:171,y:204.2},0).wait(1).to({rotation:166.5,x:373.1,y:203.4},0).wait(1).to({scaleX:0.99,rotation:162,x:372.9,y:202.6},0).wait(1).to({rotation:157.5,x:372.6,y:201.7},0).wait(1).to({rotation:153,x:372.3,y:201},0).wait(1).to({scaleX:0.99,rotation:148.5,x:371.9,y:200.2},0).wait(1).to({rotation:144,x:371.4,y:199.5},0).wait(1).to({rotation:139.5,x:370.9,y:198.8},0).wait(1).to({scaleX:0.99,rotation:135.1,x:370.3,y:198.2},0).wait(1).to({rotation:130.6,x:369.7,y:197.6},0).wait(1).to({rotation:126.1,x:369,y:197},0).wait(1).to({scaleX:0.99,rotation:121.6,x:368.3,y:196.6},0).wait(1).to({rotation:117.1,x:367.6,y:196.1},0).wait(1).to({rotation:112.6,x:366.8,y:195.8},0).wait(1).to({scaleX:0.99,rotation:108.1,x:366,y:195.5},0).wait(1).to({rotation:103.6,x:365.2,y:195.3},0).wait(1).to({rotation:99.1,x:364.4,y:195.1},0).wait(1).to({scaleX:0.99,rotation:94.6,x:363.5,y:195},0).wait(1).to({rotation:90.1,x:362.6},0).wait(1).to({rotation:85.6,x:361.8},0).wait(1).to({scaleX:0.99,rotation:81.1,x:360.9,y:195.1},0).wait(1).to({rotation:76.6,x:360.1,y:195.3},0).wait(1).to({rotation:72.1,x:359.2,y:195.6},0).wait(1).to({scaleX:1,rotation:67.6,x:358.5,y:195.8},0).wait(1).to({rotation:63.1,x:357.7,y:196.3},0).wait(1).to({rotation:58.6,x:356.9,y:196.7},0).wait(1).to({scaleX:1,rotation:54.1,x:356.2,y:197.1},0).wait(1).to({rotation:49.7,x:355.6,y:197.7},0).to({_off:true},1).wait(136));

	// 图层 30
	this.instance_8 = new lib.元件10();
	this.instance_8.parent = this;
	this.instance_8.setTransform(759.4,200,0.151,1,0,0,0,217.8,200);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(37).to({_off:false},0).wait(1).to({regX:108.7,scaleX:0.53,x:702.4},0).wait(1).to({scaleX:0.92,x:661.8},0).wait(1).to({scaleX:1.3,x:621.4},0).wait(1).to({scaleX:1.68,x:580.9},0).wait(1).to({scaleX:2.06,x:540.4},0).wait(1).to({scaleX:2.44,x:499.9},0).wait(1).to({scaleX:2.82,x:459.4},0).wait(1).to({scaleX:3.2,x:418.9},0).wait(1).to({scaleX:3.59,x:378.5},0).wait(1).to({scaleX:3.97,x:338},0).wait(1).to({scaleX:4.35,x:297.5},0).wait(1).to({scaleX:4.73,x:257},0).wait(1).to({scaleX:5.11,x:216.5},0).wait(1).to({scaleX:5.49,x:176},0).wait(1).to({scaleX:5.88,x:135.5},0).wait(1).to({scaleX:6.26,x:95},0).wait(1).to({scaleX:6.64,x:54.6},0).wait(1).to({scaleX:6.49,x:32},0).wait(1).to({scaleX:6.35,x:9.5},0).wait(1).to({scaleX:6.2,x:-13.1},0).wait(1).to({scaleX:6.06,x:-35.6},0).wait(1).to({scaleX:5.91,x:-58.2},0).wait(1).to({scaleX:5.76,x:-80.8},0).wait(1).to({scaleX:5.62,x:-103.3},0).wait(1).to({scaleX:5.47,x:-125.8},0).wait(1).to({scaleX:5.32,x:-148.4},0).wait(1).to({scaleX:5.18,x:-170.9},0).wait(1).to({scaleX:5.03,x:-193.5},0).wait(1).to({scaleX:4.89,x:-216.1},0).wait(1).to({scaleX:4.74,x:-238.6},0).wait(1).to({scaleX:4.59,x:-261.2},0).wait(1).to({scaleX:4.45,x:-283.7},0).wait(1).to({scaleX:4.3,x:-306.2},0).wait(1).to({scaleX:4.16,x:-328.9},0).wait(1).to({scaleX:4.01,x:-351.4},0).wait(1).to({scaleX:3.86,x:-373.9},0).wait(1).to({scaleX:3.72,x:-396.5},0).wait(1).to({scaleX:3.57,x:-419},0).wait(1).to({scaleX:3.43,x:-441.6},0).wait(1).to({scaleX:3.28,x:-464.1},0).wait(1).to({scaleX:3.13,x:-486.7},0).to({_off:true},1).wait(87));

	// 图层 2
	this.instance_9 = new lib.元件11();
	this.instance_9.parent = this;
	this.instance_9.setTransform(388.3,206.2,1,1,0,0,0,36.7,12.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(57).to({_off:false},0).wait(1).to({regY:12.2,y:206.1},0).wait(27).to({_off:true},1).wait(80));

	// 图层 3
	this.instance_10 = new lib.元件12();
	this.instance_10.parent = this;
	this.instance_10.setTransform(388.3,203,1,1,0,0,0,36.7,58.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(57).to({_off:false},0).wait(1).to({regY:58.2,y:203.1},0).wait(27).to({_off:true},1).wait(80));

	// C2
	this.instance_11 = new lib.元件19();
	this.instance_11.parent = this;
	this.instance_11.setTransform(269.6,118.2,0.999,0.999,29.9,0,0,53.4,51.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(57).to({_off:false},0).wait(1).to({regX:42.8,regY:55.1,scaleX:1,scaleY:1,rotation:28.9,x:261.9,y:119.2},0).wait(1).to({rotation:27.9,x:265.2,y:122.5},0).wait(1).to({rotation:26.8,x:268.4,y:125.8},0).wait(1).to({rotation:25.7,x:271.7,y:129.1},0).wait(1).to({rotation:24.6,x:275,y:132.4},0).wait(1).to({rotation:23.6,x:278.2,y:135.7},0).wait(1).to({rotation:22.5,x:281.5,y:139},0).wait(1).to({rotation:21.4,x:284.7,y:142.4},0).wait(1).to({rotation:20.4,x:288.1,y:145.7},0).wait(1).to({rotation:19.3,x:291.3,y:149},0).wait(1).to({rotation:18.2,x:294.6,y:152.3},0).wait(1).to({rotation:17.1,x:297.9,y:155.6},0).wait(1).to({rotation:16.1,x:301.2,y:158.9},0).wait(1).to({rotation:15,x:304.5,y:162.2},0).wait(1).to({rotation:13.9,x:307.8,y:165.5},0).wait(1).to({rotation:12.9,x:311.1,y:168.8},0).wait(1).to({rotation:11.8,x:314.4,y:172.2},0).wait(1).to({rotation:10.7,x:317.7,y:175.5},0).wait(1).to({rotation:9.6,x:321,y:178.7},0).wait(1).to({rotation:8.6,x:324.3,y:182.1},0).wait(1).to({rotation:7.5,x:327.6,y:185.4},0).wait(1).to({rotation:6.4,x:331,y:188.7},0).wait(1).to({rotation:5.4,x:334.3,y:192},0).wait(1).to({rotation:4.3,x:337.7,y:195.3},0).wait(1).to({rotation:3.2,x:341,y:198.6},0).wait(1).to({rotation:2.1,x:344.3,y:201.9},0).wait(1).to({rotation:1.1,x:347.6,y:205.2},0).wait(1).to({rotation:0,x:351,y:208.5},0).to({_off:true},1).wait(80));

	// 图层 6
	this.instance_12 = new lib.元件14();
	this.instance_12.parent = this;
	this.instance_12.setTransform(275.1,249,1,1,0,0,0,88.8,12.3);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(57).to({_off:false},0).wait(1).to({regY:12.2,y:248.9},0).wait(27).to({_off:true},1).wait(80));

	// 图层 7
	this.instance_13 = new lib.元件15();
	this.instance_13.parent = this;
	this.instance_13.setTransform(296.4,200,1,1,0,0,0,36.7,12.3);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(57).to({_off:false},0).wait(28).to({_off:true},1).wait(80));

	// 图层 8
	this.instance_14 = new lib.元件16();
	this.instance_14.parent = this;
	this.instance_14.setTransform(257.2,175.5,1,1,0,0,0,76,12.2);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(57).to({_off:false},0).wait(28).to({_off:true},1).wait(80));

	// 图层 9
	this.instance_15 = new lib.元件17();
	this.instance_15.parent = this;
	this.instance_15.setTransform(243.1,224.5,1,1,0,0,0,90,12.3);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(57).to({_off:false},0).wait(1).to({regX:90.1,x:243.2},0).wait(27).to({_off:true},1).wait(80));

	// 图层 5
	this.instance_16 = new lib.元件13();
	this.instance_16.parent = this;
	this.instance_16.setTransform(311.8,157.1,1,1,0,0,0,52.1,6.1);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(57).to({_off:false},0).wait(28).to({_off:true},1).wait(80));

	// 图层 10
	this.instance_17 = new lib.元件18();
	this.instance_17.parent = this;
	this.instance_17.setTransform(180.1,200,1,1,0,0,0,55.1,61.2);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(57).to({_off:false},0).wait(28).to({_off:true},1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(589.6,304.5,149.1,162.3);
// library properties:
lib.properties = {
	id: 'C5B9C6100A89E44889F6F2BA907A696A',
	width: 550,
	height: 400,
	fps: 50,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C5B9C6100A89E44889F6F2BA907A696A'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;