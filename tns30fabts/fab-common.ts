/*******************************************************
** NativeScript Floating Action Button ui/plugin
** Author : Tony Ooi
** File : fab.android.ts
** For {N} version  3.0
*******************************************************/

import { View , Property } from "ui/core/view";
import { Color } from "color";
// import { ImageSource } from "image-source";


export class FloatingActionButtonBase extends View {
	/*************** Properties definition ******************
	** fabSize, fabSizeProperty
	** rippleColor, rippleColorProperty
	** elevation , elevationProperrty
	** imageResource, imageResourceProperty
	** iconResource, iconResourceProperty
	** tint, tintProperty
	********************************************************/
	public fabSize : number;
	public rippleColor : Color;
	public elevation : number;
	public imageResource : string;
	public iconResource : string;
	public tint : Color ;
	public anchorId : string;

}

export const fabSizeProperty = new Property<FloatingActionButtonBase,number>({
	name : "fabSize",
	affectsLayout: true, 
});
fabSizeProperty.register(FloatingActionButtonBase);

export const rippleColorProperty = new Property<FloatingActionButtonBase,Color>({
	name : "rippleColor",
	affectsLayout: true,
	equalityComparer: Color.equals,
	valueConverter: (v) => new Color(v),
})
rippleColorProperty.register(FloatingActionButtonBase);

export const elevationProperty = new Property<FloatingActionButtonBase,number>({
	name : "elevation",
	affectsLayout: true, 
})
elevationProperty.register(FloatingActionButtonBase);

export const imageResourceProperty = new Property<FloatingActionButtonBase,string>({
	name : "imageResource",
	affectsLayout: true, 
})
imageResourceProperty.register(FloatingActionButtonBase);

export const iconResourceProperty = new Property<FloatingActionButtonBase,string>({
	name : "iconResource",
	affectsLayout: true, 
})
iconResourceProperty.register(FloatingActionButtonBase);

export const tintProperty = new Property<FloatingActionButtonBase,Color>({
	name : "tint",
	affectsLayout: true,
	equalityComparer: Color.equals,
	valueConverter: (v) => new Color(v), 
})
tintProperty.register(FloatingActionButtonBase);