"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fab_common_1 = require("./fab-common");
var ImageSource = require("image-source");
var Fab = (function (_super) {
    __extends(Fab, _super);
    function Fab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fab.prototype.createNativeView = function () {
        var fab = new android.support.design.widget.FloatingActionButton(this._context);
        fab.setUseCompatPadding(true);
        var that = new WeakRef(this);
        var onFloatingActionButtonClickListener = new android.view.View.OnClickListener({
            onClick: function (fab) {
                var instance = that.get();
                if (this.instance) {
                    this.instance._emit("tap");
                }
            }
        });
        fab.setOnClickListener(onFloatingActionButtonClickListener);
        return fab;
    };
    Fab.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        console.log(this.anchorId);
        var fab = this;
        var fabParent = this.parent;
        var anchorView = this.page.getViewById(this.anchorId);
        console.log("anchorview is ", anchorView);
        if (anchorView) {
            anchorView.on("pan", function (args) {
                switch (args.state) {
                    case 1:
                        fab.nativeView.hide();
                        break;
                    case 3:
                        fab.nativeView.show();
                        break;
                }
            });
        }
        else {
            console.log("Anchored view id " + this.anchorId + " could not be found/located");
            fabParent.on("pan", function (args) {
                switch (args.state) {
                    case 1:
                        fab.nativeView.hide();
                        break;
                    case 3:
                        fab.nativeView.show();
                        break;
                }
            });
        }
    };
    Fab.prototype[fab_common_1.fabSizeProperty.setNative] = function (value) {
        this.nativeView.setSize(value);
    };
    Fab.prototype[fab_common_1.rippleColorProperty.setNative] = function (value) {
        this.nativeView.setRippleColor(value.android);
    };
    Fab.prototype[fab_common_1.elevationProperty.setNative] = function (value) {
        this.nativeView.setCompatElevation(value);
    };
    Fab.prototype[fab_common_1.imageResourceProperty.setNative] = function (value) {
        var img = value;
        var drawableImg = ImageSource.fromFileOrResource(img);
        if (drawableImg) {
            this.nativeView.setImageBitmap(drawableImg.android);
        }
        else {
            console.log("Floating action image " + img + " is not found/available");
        }
    };
    Fab.prototype[fab_common_1.iconResourceProperty.setNative] = function (value) {
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
    Fab.prototype[fab_common_1.tintProperty.setNative] = function (value) {
        var tintColor = value.android;
        this.nativeView.setBackgroundTintList(android.content.res.ColorStateList.valueOf(tintColor));
    };
    return Fab;
}(fab_common_1.FloatingActionButtonBase));
exports.Fab = Fab;
