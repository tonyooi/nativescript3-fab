# nativescript3-fab
Floating Action Button plugin for {N} ver 3.0

_Delaration_
```
<Page loaded="pageLoaded" 
	xmlns="http://schemas.nativescript.org/tns.xsd"
	xmlns:FAB="./tns30fabts">
```

_Usage_

```
<GridLayout rows="*,60" columns="*,60" row="1">
	    <ListView items="{{ listItems }}" row="0" col="0" id="mylistview" style="font-size:23;" rowspan="2" colspan="2">
	    </ListView>
	    <!-- <FAB:fab rippleColor="white" tap="FABClicked" horizontal-align="left" vertical-align="bottom" width="70" size="1" iconResource="ic_menu_add" /> -->
	    <FAB:fab rippleColor="white" tap="FABClicked" row="1" col="1" size="1" imageResource="res://icon" tint="cyan" anchorId="mylistview" row="1" class="fab-button" />
	</GridLayout>
```

## Files in fab2 are for NativeScript JS

## Files in fabts are for NativeScript TypeScript
