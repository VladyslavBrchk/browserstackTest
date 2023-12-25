# browserTest

This repo provides auto tests for Native Demo App by WDIO <br />

## Test Installation
To use these tests you should download this repo and install some dependencies by Powershell

* To install dependencies
```
npm install
```
*  Upload app Android-NativeDemoApp to browserstack using API ([Link](https://www.browserstack.com/docs/app-automate/api-reference/appium/apps#upload-an-app)) and add unique ID to the ```wdio.conf.js```.
* Download the [Appium Inspector](https://github.com/appium/appium-inspector/releases)<br />
In the Appium Inspector at the header choose ```Select Cloud Providers -> Browserstack``` and into ```JSON Representation``` insert the next:
```
{
  "appium:protocol": "https",
  "appium:hostname": "hub.browserstack.com",
  "appium:path": "/wd/hub",
  "appium:maxInstances": 1,
  "appium:app": "Your App ID is here",
  "appium:os_version": "9.0",
  "appium:deviceName": "Google Pixel 3",
  "platformName": "Android",
  "appium:autoAcceptAlerts": "true",
  "appium:browserstack.appium_version": "1.22.0"
}
```
## Test Launch
There are some commands to launch test

* To launch tests on Google Pixel 3
```
npm run wdio
```
* To launch tests on Xiaomi Redmi Note 8
```
npm run wdio:xiaomi
```
* Workflow is set up so that the tests run every time someone pushes the repo