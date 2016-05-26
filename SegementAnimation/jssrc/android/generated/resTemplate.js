function initializeresTemplate() {
    fcResDetailfcResDetail = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70dp",
        "id": "fcResDetailfcResDetail",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1dp",
        "skin": "sknFlexContainerWhite",
        "top": "0dp",
        "width": "100%",
        "zIndex": 10
    }, {}, {});
    fcResDetailfcResDetail.setDefaultUnit(kony.flex.DP);
    var imgResIcon = new kony.ui.Image2({
        "bottom": "8dp",
        "id": "imgResIcon",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "8dp",
        "width": "25%"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblResName = new kony.ui.Label({
        "height": "28dp",
        "id": "lblResName",
        "isVisible": true,
        "left": "24%",
        "skin": "sknLblResName",
        "text": "Dominos Pizza",
        "top": "0dp",
        "width": "79%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
    var lblResInfo = new kony.ui.Label({
        "height": "30dp",
        "id": "lblResInfo",
        "isVisible": true,
        "left": "24%",
        "skin": "sknLblResInfo",
        "text": "Best Pizza",
        "top": "28dp",
        "width": "79%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
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
    var lblLine = new kony.ui.Label({
        "bottom": "1dp",
        "height": "1dp",
        "id": "lblLine",
        "isVisible": true,
        "left": "5%",
        "skin": "sknLblLine",
        "width": "95%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
    fcResDetailfcResDetail.add(
    imgResIcon, lblResName, lblResInfo, lblLine);
}