//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "SegAnimation",
    appName: "SegmentAnimation",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.56.1",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "SegAnimation",
    isMFApp: false,
    eventTypes: [],
    url: "http://10.10.25.244:8086/SegAnimation/MWServlet",
    secureurl: "http://10.10.25.244:8086/SegAnimation/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeCopyFBox071e8af1ebb8340();
    initializefavTemplate();
    initializeFBox064a1b8498c1348();
    initializeresTemplate();
    frmDetailsGlobals();
    frmFavoriteGlobals();
    frmHomeGlobals();
    frmLoginGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6800
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        postappinit: AS_AppEvents_8a84016745d44ecba1d25abf940da40d,
        showstartupform: function() {
            frmLogin.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();