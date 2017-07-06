// import { FloatingActionButtonBase } from "./fab-common";
import { FloatingActionButtonBase , fabSizeProperty, rippleColorProperty, elevationProperty, imageResourceProperty, iconResourceProperty, tintProperty} from "./fab-common";
// import { fabSizeProperty, rippleColorProperty, elevationProperty, imageResourceProperty, iconResourceProperty, tintProperty } from "./fab-common";
import * as view from "ui/core/view";
import { Color } from "color";
import * as ImageSource from "image-source";
import { PanGestureEventData } from "ui/gestures";

declare var android:any;

export class Fab extends FloatingActionButtonBase {

	public createNativeView(){
		const fab = new android.support.design.widget.FloatingActionButton(this._context);
		fab.setUseCompatPadding(true);

		let that = new WeakRef(this);
		let onFloatingActionButtonClickListener = new android.view.View.OnClickListener({
			onClick : function(fab){
				let instance = that.get();
				if( this.instance){
					this.instance._emit("tap");
				}
			}
		});

		fab.setOnClickListener(onFloatingActionButtonClickListener);

		return fab;
	} // end createNativeView()

	public onLoaded() {
		super.onLoaded();

		console.log(this.anchorId);
		var fab = this; // set here or else not resolvable, undefined and this refers to FAB instnce 
		var fabParent  = this.parent;
		var anchorView = this.page.getViewById(this.anchorId);
		// var anchorView = view.getViewById(this.parent,this.anchorId);
		console.log("anchorview is ", anchorView);
		if ( anchorView ) {
			// console.log(args.state);
			anchorView.on("pan", (args:PanGestureEventData) => {
				switch( args.state ) {
					// cancelled = 0 , began = 1 , changed = 2 , ended = 3
					case 1 : fab.nativeView.hide();
							 break ;
					// end = 3
					case 3 : fab.nativeView.show();
							 break ;
				}
			});			
		} else {
			console.log("Anchored view id "+this.anchorId+" could not be found/located");
			// Use parent as fallback
			fabParent.on("pan", (args:PanGestureEventData) => {
				// console.log(args.state);
				switch( args.state ) {
					// cancelled = 0 , began = 1 , changed = 2 , ended = 3
					case 1 : fab.nativeView.hide();
							 break ;
					// end = 3
					case 3 : fab.nativeView.show();
							 break ;
				}
			});
		}
	} // end onLoaded()

	//set native properties
	[ fabSizeProperty.setNative ] (value:number) {
		this.nativeView.setSize(value);
	}

	[ rippleColorProperty.setNative ] (value:Color) {
		this.nativeView.setRippleColor(value.android);
	}

	[ elevationProperty.setNative ] (value:number) {
		this.nativeView.setCompatElevation(value);
	}

	[ imageResourceProperty.setNative ] (value:string) {
		let img = value;
		let drawableImg = ImageSource.fromFileOrResource(img);
		if( drawableImg ) {
			this.nativeView.setImageBitmap(drawableImg.android);
		} else {
			console.log("Floating action image "+img+" is not found/available");
		}
	}

	[ iconResourceProperty.setNative ] (value:string) {
		let icon = value;
		let drawableIcon = null ;
		let drawableId = android.content.res.Resources.getSystem().getIdentifier(icon,"drawable","android");
		drawableIcon = android.content.res.Resources.getSystem().getDrawable(drawableId);
		if( drawableIcon ) {
			this.nativeView.setImageDrawable(drawableIcon);
		} else {
			console.log("Floating Action Button icon "+icon+" is not found/available");
		}
	}

	[ tintProperty.setNative ] (value:Color) {
		let tintColor = value.android;
		this.nativeView.setBackgroundTintList(android.content.res.ColorStateList.valueOf(tintColor));
	}
}