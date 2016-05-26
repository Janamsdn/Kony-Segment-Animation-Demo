function addWidgetsfrmFavorite() {
    frmFavorite.setDefaultUnit(kony.flex.DP);
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
        "left": "0%",
        "skin": "sknLblFrmTitle",
        "text": "Favorites",
        "top": "0%",
        "width": "100%"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var btnBack = new kony.ui.Button({
        "focusSkin": "sknBtnbackTitle",
        "height": "40%",
        "id": "btnBack",
        "isVisible": true,
        "left": "7dp",
        "onClick": AS_Button_604431158ee04a4aa2b804008a9e706b,
        "skin": "sknBtnbackTitle",
        "top": "32%",
        "width": "70dp",
        "zIndex": 10
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnLogout = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "40%",
        "id": "btnLogout",
        "isVisible": false,
        "right": "7dp",
        "skin": "sknBtnLogout",
        "top": "32%",
        "width": "70dp",
        "zIndex": 10
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    fcTitle.add(
    lblTitle, btnBack, btnLogout);
    var fcFrmContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "91%",
        "id": "fcFrmContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlexContainerLightGrey",
        "top": "9%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcFrmContainer.setDefaultUnit(kony.flex.DP);
    var segFavRestaurents = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "imgDelete": "delete.png",
            "imgMore": "more.png",
            "imgResIcon": "img1.png",
            "lblLine": "",
            "lblResInfo": "Best Pizza",
            "lblResName": "Dominos Pizza"
        }, {
            "imgDelete": "delete.png",
            "imgMore": "more.png",
            "imgResIcon": "img2.png",
            "lblLine": "",
            "lblResInfo": "Best Pizza",
            "lblResName": "Dominos Pizza"
        }, {
            "imgDelete": "delete.png",
            "imgMore": "more.png",
            "imgResIcon": "img3.png",
            "lblLine": "",
            "lblResInfo": "Best Pizza",
            "lblResName": "Dominos Pizza"
        }],
        "groupCells": false,
        "id": "segFavRestaurents",
        "isVisible": true,
        "left": "0%",
        "needPageIndicator": true,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowFocusSkin": "Copyseg063aebd14801542",
        "rowSkin": "seg2Normal",
        "rowTemplate": FlexContainerFavorite,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "3c610500",
        "separatorRequired": false,
        "separatorThickness": 20,
        "showScrollbars": false,
        "top": "0%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainerDeleteBtn": "FlexContainerDeleteBtn",
            "FlexContainerFavorite": "FlexContainerFavorite",
            "FlexContainerMoreBtn": "FlexContainerMoreBtn",
            "fcResDetails": "fcResDetails",
            "imgDelete": "imgDelete",
            "imgMore": "imgMore",
            "imgResIcon": "imgResIcon",
            "lblLine": "lblLine",
            "lblResInfo": "lblResInfo",
            "lblResName": "lblResName"
        },
        "width": "100%"
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    fcFrmContainer.add(
    segFavRestaurents);
    frmFavorite.add(
    fcTitle, fcFrmContainer);
};

function frmFavoriteGlobals() {
    frmFavorite = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmFavorite,
        "enabledForIdleTimeout": false,
        "id": "frmFavorite",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_7e44589989664a03ba9d3fb4f40ae78d,
        "skin": "CopyslForm0ac569e5c635f47",
        "title": "Favorites"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "CopyslTitleBar040a4d808174a4c",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};