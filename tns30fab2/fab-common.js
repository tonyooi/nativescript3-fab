/*******************************************************
** NativeScript Floating Action Button ui/plugin
** Author : Tony Ooi
** File : fab-common.js
*******************************************************/

var view = require("ui/core/view");
var color = require("color");

var FloatingActionButton = (function(_super){
	/*************** Properties definition ******************
	** fabSize, fabSizeProperty
	** rippleColor, rippleColorProperty
	** elevation , elevationProperrty
	** imageResource, imageResourceProperty
	** iconResource, iconResourceProperty
	** tint, tintProperty
	********************************************************/

	global.__extends(FloatingActionButton,_super);
	function FloatingActionButton(){
		_super.call(this);

		// this._show = true; // shown at beginning
	}

	/*****************************************************************************
	** scenario 1 : if used for common platform, just uncomment and add 
	** implementation code. consider this function definition.
	** scenario 2 : for specific platform, place function definition in the 
	** platform specific file and use this as function declaration. If use as
	** function declaration then remove line _super.prototype.onLoaded.call(this);
	******************************************************************************/
	// FloatingActionButton.prototype.onLoaded = function(){
	// 	_super.prototype.onLoaded.call(this);
	//  // add implementation code
	// }

	return FloatingActionButton;

})(view.View);

exports.Fab = FloatingActionButton;

exports.fabSizeProperty = new view.Property({
    name: "fabSize",
    affectsLayout: true,
});
exports.fabSizeProperty.register(FloatingActionButton);
exports.rippleColorProperty = new view.Property({
    name: "rippleColor",
    affectsLayout: true,
    equalityComparer: color.Color.equals,
    valueConverter: function (v) { return new color.Color(v); },
});
exports.rippleColorProperty.register(FloatingActionButton);
exports.elevationProperty = new view.Property({
    name: "elevation",
    affectsLayout: true,
});
exports.elevationProperty.register(FloatingActionButton);
exports.imageResourceProperty = new view.Property({
    name: "imageResource",
    affectsLayout: true,
});
exports.imageResourceProperty.register(FloatingActionButton);
exports.iconResourceProperty = new view.Property({
    name: "iconResource",
    affectsLayout: true,
});
exports.iconResourceProperty.register(FloatingActionButton);
exports.tintProperty = new view.Property({
    name: "tint",
    affectsLayout: true,
    equalityComparer: color.Color.equals,
    valueConverter: function (v) { return new color.Color(v); },
});
exports.tintProperty.register(FloatingActionButton);