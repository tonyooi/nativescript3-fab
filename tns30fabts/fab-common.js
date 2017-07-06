"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("ui/core/view");
var color_1 = require("color");
var FloatingActionButtonBase = (function (_super) {
    __extends(FloatingActionButtonBase, _super);
    function FloatingActionButtonBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FloatingActionButtonBase;
}(view_1.View));
exports.FloatingActionButtonBase = FloatingActionButtonBase;
exports.fabSizeProperty = new view_1.Property({
    name: "fabSize",
    affectsLayout: true,
});
exports.fabSizeProperty.register(FloatingActionButtonBase);
exports.rippleColorProperty = new view_1.Property({
    name: "rippleColor",
    affectsLayout: true,
    equalityComparer: color_1.Color.equals,
    valueConverter: function (v) { return new color_1.Color(v); },
});
exports.rippleColorProperty.register(FloatingActionButtonBase);
exports.elevationProperty = new view_1.Property({
    name: "elevation",
    affectsLayout: true,
});
exports.elevationProperty.register(FloatingActionButtonBase);
exports.imageResourceProperty = new view_1.Property({
    name: "imageResource",
    affectsLayout: true,
});
exports.imageResourceProperty.register(FloatingActionButtonBase);
exports.iconResourceProperty = new view_1.Property({
    name: "iconResource",
    affectsLayout: true,
});
exports.iconResourceProperty.register(FloatingActionButtonBase);
exports.tintProperty = new view_1.Property({
    name: "tint",
    affectsLayout: true,
    equalityComparer: color_1.Color.equals,
    valueConverter: function (v) { return new color_1.Color(v); },
});
exports.tintProperty.register(FloatingActionButtonBase);
