#Starter for ionic flashlight project
_Author: Ira Herman_

_This work is licensed under a 
Creative Commons Attribution-ShareAlike 4.0 International License_

## Start Here:
* ```ionic add platform ios```
* ```cordova plugin add https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin.git```
* ```cordova plugin add org.apache.cordova.vibration```
* Add flashlight to ```$scope.toggleFlashlight = function (){}```
	* Make sure $cordovaFlashlight and $cordovaVibration are injected in the controller.

* Test by connecting your iPhone and running ```ionic run ios --device```