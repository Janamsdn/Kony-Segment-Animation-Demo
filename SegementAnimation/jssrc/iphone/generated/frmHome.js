function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
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
        "zIndex": 10
    }, {}, {});
    fcTitle.setDefaultUnit(kony.flex.DP);
    var lblTitle = new kony.ui.Label({
        "height": "100%",
        "id": "lblTitle",
        "isVisible": true,
        "left": "0.00%",
        "skin": "sknLblFrmTitle",
        "text": "Home",
        "top": "0.20%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnFavorites = new kony.ui.Button({
        "focusSkin": "sknBtnFavorites",
        "height": "40%",
        "id": "btnFavorites",
        "isVisible": true,
        "left": "7dp",
        "onClick": AS_Button_b6b561388e5942b285974b7aaf09ab9f,
        "skin": "sknBtnFavorites",
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
        "onClick": AS_Button_ccf20d6307034e66891dbd30f65a3d7e,
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
    lblTitle, btnFavorites, btnLogout);
    var segmentRestaurentList = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgResIcon": "imagedrag.png",
            "lblLine": "",
            "lblResInfo": "Best Pizza",
            "lblResName": "Dominos Pizza"
        }],
        "groupCells": false,
        "height": "91%",
        "id": "segmentRestaurentList",
        "isVisible": true,
        "left": "0%",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_df46bfdce97f4382bcd85438f80ebb5b,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowFocusSkin": "Copyseg0c53932df05f845",
        "rowSkin": "Copyseg087c0d01f53aa47",
        "rowTemplate": fcResDetailfcResDetail,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "c8c7cc64",
        "separatorRequired": false,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "9%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "fcResDetailfcResDetail": "fcResDetailfcResDetail",
            "imgResIcon": "imgResIcon",
            "lblLine": "lblLine",
            "lblResInfo": "lblResInfo",
            "lblResName": "lblResName"
        },
        "width": "100%"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": false
    });
    var FlexContainer0ccecc465000a43 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer0ccecc465000a43",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "90%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0ccecc465000a43.setDefaultUnit(kony.flex.DP);
    var Button077b6130fce3d46 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button077b6130fce3d46",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_dbf5be30e7b5481ca6c50234170f4002,
        "skin": "slButtonGlossBlue",
        "text": "Add",
        "top": "0dp",
        "width": "50%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var Button0243bef6030b74d = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button0243bef6030b74d",
        "isVisible": true,
        "left": "50%",
        "onClick": AS_Button_1d68940a89594958a42bacc12f78bb08,
        "skin": "slButtonGlossBlue",
        "text": "Remove",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    FlexContainer0ccecc465000a43.add(
    Button077b6130fce3d46, Button0243bef6030b74d);
    frmHome.add(
    fcTitle, segmentRestaurentList, FlexContainer0ccecc465000a43);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_d5e1ebbbfcca4bb5a2d80b58975865d4,
        "preShow": AS_Form_9668d973e74e4b14b3ed226faa287aa5,
        "skin": "CopyslForm0ac569e5c635f47",
        "title": "Home"
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