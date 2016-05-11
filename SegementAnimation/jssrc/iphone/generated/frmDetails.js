function addWidgetsfrmDetails() {
    frmDetails.setDefaultUnit(kony.flex.DP);
    var fcTitle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "9%",
        "id": "fcTitle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0px",
        "skin": "sknFCtitleGrey",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcTitle.setDefaultUnit(kony.flex.DP);
    var lblTitle = new kony.ui.Label({
        "height": "100%",
        "id": "lblTitle",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblFrmTitle",
        "text": "Details",
        "top": "0%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnBack = new kony.ui.Button({
        "focusSkin": "sknBtnbackTitle",
        "height": "40%",
        "id": "btnBack",
        "isVisible": true,
        "left": "7dp",
        "onClick": AS_Button_0db48114e4724fdfa4ee4aa816e9b983,
        "skin": "sknBtnbackTitle",
        "top": "32%",
        "width": "70dp",
        "zIndex": 10
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var btnLogout = new kony.ui.Button({
        "focusSkin": "sknBtnLogout",
        "height": "40%",
        "id": "btnLogout",
        "isVisible": true,
        "onClick": AS_Button_80b8d034a55549c5ae72f76855cbf8ff,
        "right": "7dp",
        "skin": "sknBtnLogout",
        "top": "32%",
        "width": "70dp",
        "zIndex": 10
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    fcTitle.add(
    lblTitle, btnBack, btnLogout);
    var fcFrmDetailsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "91%",
        "id": "fcFrmDetailsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "9%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcFrmDetailsContainer.setDefaultUnit(kony.flex.DP);
    var imgRestaurent = new kony.ui.Image2({
        "height": "45%",
        "id": "imgRestaurent",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "details_image.png",
        "top": "0%",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblResName = new kony.ui.Label({
        "id": "lblResName",
        "isVisible": true,
        "left": "15dp",
        "skin": "sknLblResNameWhite",
        "text": "Label",
        "top": "27dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblResAdd = new kony.ui.Label({
        "id": "lblResAdd",
        "isVisible": true,
        "left": "15dp",
        "skin": "sknLblTitle2",
        "text": "Madhapur",
        "top": "56dp",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblRating = new kony.ui.Label({
        "height": "4%",
        "id": "lblRating",
        "isVisible": true,
        "left": "15dp",
        "skin": "sknLblRating",
        "text": "4.6",
        "top": "115dp",
        "width": "8%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var fcResDetails = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70%",
        "id": "fcResDetails",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "sknFCTrans",
        "top": "30%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcResDetails.setDefaultUnit(kony.flex.DP);
    var fcBtnrate = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "13%",
        "id": "fcBtnrate",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0086419b4203c47",
        "top": "2.68%",
        "width": "49.50%",
        "zIndex": 1
    }, {}, {});
    fcBtnrate.setDefaultUnit(kony.flex.DP);
    var btnRate = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossBlue0a02b99fcfa324b",
        "height": "65%",
        "id": "btnRate",
        "isVisible": true,
        "skin": "CopyslButtonGlossBlue0a02b99fcfa324b",
        "width": "62%",
        "zIndex": 10
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    fcBtnrate.add(
    btnRate);
    var fcBtnFavorite = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "13%",
        "id": "fcBtnFavorite",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "50.50%",
        "skin": "CopyslFbox00a1947e3dabe44",
        "top": "2.69%",
        "width": "49.50%",
        "zIndex": 1
    }, {}, {});
    fcBtnFavorite.setDefaultUnit(kony.flex.DP);
    var btnFavorite = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossBlue09fd058fdc5de43",
        "height": "65%",
        "id": "btnFavorite",
        "isVisible": true,
        "onClick": AS_Button_7b8cc19147914893a980985460699502,
        "skin": "CopyslButtonGlossBlue09fd058fdc5de43",
        "width": "62%",
        "zIndex": 10
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    fcBtnFavorite.add(
    btnFavorite);
    var FlexContainer01dc4e76c44b04f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "86%",
        "id": "FlexContainer01dc4e76c44b04f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlexContainerLightGrey",
        "top": "16%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer01dc4e76c44b04f.setDefaultUnit(kony.flex.DP);
    var fcResDetailsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "65%",
        "id": "fcResDetailsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "sknFlexContainerWhite",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcResDetailsContainer.setDefaultUnit(kony.flex.DP);
    var fcCuisins = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "fcCuisins",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%"
    }, {}, {});
    fcCuisins.setDefaultUnit(kony.flex.DP);
    var lblCusines = new kony.ui.Label({
        "height": "50%",
        "id": "lblCusines",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblResInfo",
        "text": "Cuisines",
        "top": "0%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblCuisinesDetails = new kony.ui.Label({
        "height": "50%",
        "id": "lblCuisinesDetails",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblResName",
        "text": "Cafe,Continental",
        "top": "50%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Label07788dc95418f42 = new kony.ui.Label({
        "bottom": "0%",
        "height": "1dp",
        "id": "Label07788dc95418f42",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblLine",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    fcCuisins.add(
    lblCusines, lblCuisinesDetails, Label07788dc95418f42);
    var fcCost = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "fcCost",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "slFbox",
        "top": "25%",
        "width": "97%"
    }, {}, {});
    fcCost.setDefaultUnit(kony.flex.DP);
    var CopylblCusines0e87c021cdaac4c = new kony.ui.Label({
        "height": "50%",
        "id": "CopylblCusines0e87c021cdaac4c",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblResInfo",
        "text": "Cost",
        "top": "0%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopylblCuisinesDetails0b742884ef22f43 = new kony.ui.Label({
        "height": "50%",
        "id": "CopylblCuisinesDetails0b742884ef22f43",
        "isVisible": true,
        "left": "-0.01%",
        "skin": "sknLblResName",
        "text": "Rs. 1250 for 2 people",
        "top": "50.00%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyLabel06c60a4883e2f45 = new kony.ui.Label({
        "bottom": "0%",
        "height": "1px",
        "id": "CopyLabel06c60a4883e2f45",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblLine",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    fcCost.add(
    CopylblCusines0e87c021cdaac4c, CopylblCuisinesDetails0b742884ef22f43, CopyLabel06c60a4883e2f45);
    var fcAddress = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "49%",
        "id": "fcAddress",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "slFbox",
        "top": "51%",
        "width": "97%"
    }, {}, {});
    fcAddress.setDefaultUnit(kony.flex.DP);
    var CopylblCusines0386b0e110fbf40 = new kony.ui.Label({
        "height": "25%",
        "id": "CopylblCusines0386b0e110fbf40",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblResInfo",
        "text": "Address",
        "top": "0%",
        "width": "50%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblAddress = new kony.ui.Label({
        "height": "75%",
        "id": "lblAddress",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblResName",
        "text": "1st Floor,Building No.36,Pheonix,Madhapur,Hitech City,Hyderabad",
        "top": "25%",
        "width": "84.21%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnMap = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "30%",
        "id": "btnMap",
        "isVisible": true,
        "right": "3.2699999999999996%",
        "skin": "CopyslButtonGlossBlue09fd8a64d87a54a",
        "top": "3dp",
        "width": "50dp",
        "zIndex": 10
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    fcAddress.add(
    CopylblCusines0386b0e110fbf40, lblAddress, btnMap);
    var CopyLabel0322dbd3661fd43 = new kony.ui.Label({
        "bottom": "0%",
        "height": "1dp",
        "id": "CopyLabel0322dbd3661fd43",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblLine",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    fcResDetailsContainer.add(
    fcCuisins, fcCost, fcAddress, CopyLabel0322dbd3661fd43);
    FlexContainer01dc4e76c44b04f.add(
    fcResDetailsContainer);
    fcResDetails.add(
    fcBtnrate, fcBtnFavorite, FlexContainer01dc4e76c44b04f);
    fcFrmDetailsContainer.add(
    imgRestaurent, lblResName, lblResAdd, lblRating, fcResDetails);
    frmDetails.add(
    fcTitle, fcFrmDetailsContainer);
};

function frmDetailsGlobals() {
    frmDetails = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDetails,
        "enabledForIdleTimeout": false,
        "id": "frmDetails",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0ac569e5c635f47",
        "title": "Details"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "CopyslTitleBar040a4d808174a4c"
    });
};