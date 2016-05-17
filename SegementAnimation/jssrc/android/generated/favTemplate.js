function initializefavTemplate() {
    FlexContainerFavorite = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70dp",
        "id": "FlexContainerFavorite",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "sknFlexContainerWhite"
    }, {}, {});
    FlexContainerFavorite.setDefaultUnit(kony.flex.DP);
    var lblLine = new kony.ui.Label({
        "bottom": "0dp",
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
    var fcResDetails = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "69dp",
        "id": "fcResDetails",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "sknFlexContainerWhite",
        "top": "0dp",
        "width": "100%",
        "zIndex": 10
    }, {}, {});
    fcResDetails.setDefaultUnit(kony.flex.DP);
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
    fcResDetails.add(
    imgResIcon, lblResName, lblResInfo);
    var FlexContainerDeleteBtn = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "69dp",
        "id": "FlexContainerDeleteBtn",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_bc024898cde84b94b16f917d8ab94faf,
        "right": "0dp",
        "skin": "CopyslFbox0d8bdeb6f08034a",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    FlexContainerDeleteBtn.setDefaultUnit(kony.flex.DP);
    var imgDelete = new kony.ui.Image2({
        "id": "imgDelete",
        "isVisible": true,
        "left": "1%",
        "skin": "CopyslImage0600bbe78227141",
        "src": "delete.png",
        "top": "0dp",
        "width": "100%"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    FlexContainerDeleteBtn.add(
    imgDelete);
    var FlexContainerMoreBtn = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "69dp",
        "id": "FlexContainerMoreBtn",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "20%",
        "skin": "CopyslFbox03e3a32a868074b",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    FlexContainerMoreBtn.setDefaultUnit(kony.flex.DP);
    var imgMore = new kony.ui.Image2({
        "id": "imgMore",
        "isVisible": true,
        "right": "0%",
        "skin": "CopyslImage0ede7e1c7d54e43",
        "src": "more.png",
        "top": "0dp",
        "width": "100%"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    FlexContainerMoreBtn.add(
    imgMore);
    FlexContainerFavorite.add(
    lblLine, fcResDetails, FlexContainerDeleteBtn, FlexContainerMoreBtn);
}