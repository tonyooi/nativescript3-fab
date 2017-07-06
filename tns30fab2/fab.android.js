/*******************************************************
** NativeScript Floating Action Button ui/plugin
** Author : Tony Ooi
** File : fab.android.js
*******************************************************/

var common = require("./fab-common");
var Color = require("color").Color;
var ImageSource = require("image-source");
var Gestures = require("ui/gestures");
var view = require("ui/core/view");

require("utils/module-merge").merge(common, module.exports);

var FloatingActionButton = (function(_super){
	global.__extends(FloatingActionButton,_super);
	function FloatingActionButton(){
		_super.apply(this,arguments);
	}

	FloatingActionButton.prototype.createNativeView = function(){
		var fab = new android.support.design.widget.FloatingActionButton(this._context);
		fab.setUseCompatPadding(true);

		var that = new WeakRef(this);
		var onFloatingActionButtonClickListener = new android.view.View.OnClickListener({
			onClick : function(fab){
				var instance = that.get();
				if(this.instance){
					this.instance._emit("tap");
				}
			}
		});

		fab.setOnClickListener(onFloatingActionButtonClickListener);
		return fab;
	};

	FloatingActionButton.prototype.onLoaded = function(){
		_super.prototype.onLoaded.call(this);
		console.log(this._parent);
		console.log(this.anchorId);
		var fab = this; // set here or else not resolvable, undefined
		var fabParent  = this.parent;
		var anchorView = view.getViewById(this.parent,this.anchorId);
		console.log("anchorview is ", anchorView)
		if ( anchorView ) {
			// console.log(args.state);
			anchorView.on(Gestures.GestureTypes.pan, function(args){
				switch( args.state ) {
					// cancelled = 0 , began = 1 , changed = 2 , ended = 3
					case 1 : fab.nativeView.hide();
							 // fab.animate({ scale : { x : 0 , y: 0 } , duration : 280}) ; // in use case where fab = this
							 break ;
					// end = 3
					case 3 : fab.nativeView.show();
							 // fab.animate({ scale : { x : 1 , y: 1 } , duration : 280}) ; // in use case where fab = this
							 break ;
				}
			})			
		} else {
			console.log("Anchored view id "+this.anchorId+" could not be found/located");
			// Use parent as fallback
			fabParent.on(Gestures.GestureTypes.pan, function(args){
				// console.log(args.state);
				switch( args.state ) {
					// cancelled = 0 , began = 1 , changed = 2 , ended = 3
					case 1 : fab.nativeView.hide();
							 // fab.animate({ scale : { x : 0 , y: 0 } , duration : 280}) ; // in use case where fab = this
							 break ;
					// end = 3
					case 3 : fab.nativeView.show();
							 // fab.animate({ scale : { x : 1 , y: 1 } , duration : 280}) ; // in use case where fab = this
							 break ;
				}
			})
		}
	};

    FloatingActionButton.prototype[common.fabSizeProperty.setNative] = function (value) {
        this.nativeView.setSize(value);
    };
    FloatingActionButton.prototype[common.rippleColorProperty.setNative] = function (value) {
        this.nativeView.setRippleColor(value.android);
    };
    FloatingActionButton.prototype[common.elevationProperty.setNative] = function (value) {
        this.nativeView.setCompatElevation(value);
    };
    FloatingActionButton.prototype[common.imageResourceProperty.setNative] = function (value) {
        var img = value;
        var drawableImg = ImageSource.fromFileOrResource(img);
        if (drawableImg) {
            this.nativeView.setImageBitmap(drawableImg.android);
        }
        else {
            console.log("Floating action image " + img + " is not found/available");
        }
    };
    FloatingActionButton.prototype[common.iconResourceProperty.setNative] = function (value) {
        var icon = value;
        var drawableIcon = null;
        var drawableId = android.content.res.Resources.getSystem().getIdentifier(icon, "drawable", "android");
        drawableIcon = android.content.res.Resources.getSystem().getDrawable(drawableId);
        if (drawableIcon) {
            this.nativeView.setImageDrawable(drawableIcon);
        }
        else {
            console.log("Floating Action Button icon " + icon + " is not found/available");
        }
    };
    FloatingActionButton.prototype[common.tintProperty.setNative] = function (value) {
        var tintColor = value.android;
        this.nativeView.setBackgroundTintList(android.content.res.ColorStateList.valueOf(tintColor));
    };

	return FloatingActionButton;
})(common.Fab);

exports.Fab = FloatingActionButton;
