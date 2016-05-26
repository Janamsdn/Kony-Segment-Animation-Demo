function addWidgetsfrmLogin() {
    frmLogin.setDefaultUnit(kony.flex.DP);
    var loginContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "loginContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%"
    }, {}, {});
    loginContainer.setDefaultUnit(kony.flex.DP);
    var imgLogo = new kony.ui.Image2({
        "id": "imgLogo",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "logo.png",
        "top": "10%",
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
    var lblTitle1 = new kony.ui.Label({
        "id": "lblTitle1",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblTittle1",
        "text": "Welcome to",
        "top": "23%",
        "width": "100%",
        "zIndex": 1
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
    var lblTitle2 = new kony.ui.Label({
        "id": "lblTitle2",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblTitle2",
        "text": "Sample Application Design",
        "top": "28%",
        "width": "100%",
        "zIndex": 1
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
    var fcUserId = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "fcUserId",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "4%",
        "right": "4%",
        "skin": "sknFCgrey",
        "top": "40%",
        "zIndex": 1
    }, {}, {});
    fcUserId.setDefaultUnit(kony.flex.DP);
    var lblSeparator = new kony.ui.Label({
        "height": "60%",
        "id": "lblSeparator",
        "isVisible": true,
        "left": "16%",
        "skin": "sknLblSeparator",
        "top": "20%",
        "width": "1px"
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
    var imgIcon = new kony.ui.Image2({
        "height": "50%",
        "id": "imgIcon",
        "isVisible": true,
        "left": "3%",
        "skin": "slImage",
        "src": "user_icon.png",
        "top": "25%",
        "width": "12%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var txtBoxUserId = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "skntxtBoxTransparent",
        "height": "100%",
        "id": "txtBoxUserId",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "18%",
        "placeholder": "user id",
        "secureTextEntry": false,
        "skin": "skntxtBoxTransparent",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0%",
        "width": "82%",
        "zIndex": 1
    }, {
        "containerHeight": null,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    fcUserId.add(
    lblSeparator, imgIcon, txtBoxUserId);
    var fcUserPswd = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "fcUserPswd",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "4%",
        "right": "4%",
        "skin": "sknFCgrey",
        "top": "53%",
        "zIndex": 1
    }, {}, {});
    fcUserPswd.setDefaultUnit(kony.flex.DP);
    var CopylblSeparator0ba52bbe93a644a = new kony.ui.Label({
        "height": "60%",
        "id": "CopylblSeparator0ba52bbe93a644a",
        "isVisible": true,
        "left": "16%",
        "skin": "sknLblSeparator",
        "top": "20%",
        "width": "1px"
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
    var imgicon1 = new kony.ui.Image2({
        "height": "50%",
        "id": "imgicon1",
        "isVisible": true,
        "left": "3%",
        "skin": "slImage",
        "src": "login_pass_icon.png",
        "top": "25%",
        "width": "12%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var txtBoxUserPswd = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "skntxtBoxTransparent",
        "height": "100%",
        "id": "txtBoxUserPswd",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "18%",
        "placeholder": "password",
        "secureTextEntry": true,
        "skin": "skntxtBoxTransparent",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0%",
        "width": "82%",
        "zIndex": 1
    }, {
        "containerHeight": null,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    fcUserPswd.add(
    CopylblSeparator0ba52bbe93a644a, imgicon1, txtBoxUserPswd);
    var btnLogin = new kony.ui.Button({
        "focusSkin": "sknBtnLogin",
        "height": "8%",
        "id": "btnLogin",
        "isVisible": true,
        "left": "6%",
        "onClick": AS_Button_ba8009aaff6d48da9c9a68d09def217f,
        "right": "6%",
        "skin": "sknBtnLogin",
        "text": "LOGIN",
        "top": "80%",
        "zIndex": 1
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
    var CheckBoxGroup0b0f5d1875e364d = new kony.ui.CheckBoxGroup({
        "height": "120dp",
        "id": "CheckBoxGroup0b0f5d1875e364d",
        "isVisible": true,
        "left": "6%",
        "masterData": [
            ["cbg1", "Remember Me"]
        ],
        "selectedKeyValues": [
            ["cbg1", "Remember Me"]
        ],
        "selectedKeys": ["cbg1"],
        "skin": "CopyslCheckBoxGroup02255eba9b57f4c",
        "top": "68%",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [4, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "tickedImage": "check_btn_f.png",
        "untickedImage": "check_btn_f.png"
    });
    loginContainer.add(
    imgLogo, lblTitle1, lblTitle2, fcUserId, fcUserPswd, btnLogin, CheckBoxGroup0b0f5d1875e364d);
    frmLogin.add(
    loginContainer);
};

function frmLoginGlobals() {
    frmLogin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLogin,
        "enabledForIdleTimeout": false,
        "id": "frmLogin",
        "init": AS_Form_cc6d3719edab4037807254f5a17c49d2,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_24f504db645f4df0a3e742c828e241b5,
        "skin": "sknFrmBGGrey"
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
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};