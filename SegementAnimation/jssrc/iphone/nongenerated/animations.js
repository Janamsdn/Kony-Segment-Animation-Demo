function animateLoginWidget1() {
    kony.print("\nin animateLoginWidget1");
    frmLogin.loginContainer.animate(
    kony.ui.createAnimation({
        //  0:{top:"90%","stepConfig":{}},
        100: {
            top: "0%",
            "stepConfig": {}
        }
    }), {
        delay: 0,
        fillMode: kony.anim.FILL_MODE_FORWARDS,
        duration: 0.3
    }, {
        animationEnd: function() {}
    });
}

function removeRestaurents() {
    frmHome.segmentRestaurentList.removeAll();
    //setRestaurents();
}

function setRestaurents() {
    var addRowAnim;
    var resObj, resList = [];
    getRestaurents();
    var len = response["results"].length;
    // alert("length:-"+len);
    for (var i = 0; i < len; i++) {
        resObj = {
            "imgResIcon": {
                "src": response["results"][i]["icon"]
            },
            "lblResName": {
                "text": response["results"][i]["name"]
            },
            "lblResInfo": {
                "text": "Hyderabad"
            },
            "lblLine": {
                "text": " "
            }
        };
        resList.push(resObj);
    }
    addRowAnim = getAddRowAnim();
    kony.print("\n add row animation:-\n" + JSON.stringify(addRowAnim));
    frmHome.segmentRestaurentList.addAll(resList, addRowAnim);
    // frmHome.segmentRestaurentList.addAll(resList);
}

function getAddRowAnim() {
    var transObject1 = kony.ui.makeAffineTransform();
    transObject1.translate(200, 0);
    var transObject2 = kony.ui.makeAffineTransform();
    transObject2.translate(0, 0);
    var transAnimDef = {
        "0": {
            "transform": transObject1,
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        },
        "100": {
            "transform": transObject2,
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        }
    };
    var animObj = kony.ui.createAnimation(transAnimDef);
    var animConf = {
        delay: 0,
        fillMode: kony.anim.FILL_MODE_FORWARDS,
        duration: 1
    };
    var addRowAnimtion = {
        definition: animObj,
        config: animConf,
        callbacks: null
    };
    return addRowAnimtion;
}

function setGestureRecogniserToFrmHome() {
    var segTemp = frmHome.segmentRestaurentList.rowTemplate;
    try {
        segTemp.addGestureRecognizer(constants.GESTURE_TYPE_PAN, {
            fingers: 1,
            continuousEvents: true
        }, panGestureHandlerfroHome); // pan with 2 fingers 
    } catch (err) {
        alert("error while regestering the gestures" + err);
    }
}

function panGestureHandlerfroHome(commonWidget, gestureInfo, context) {
    kony.print("\n\nin gesture handler\n");
    kony.print("\npanGestureHandlerfroHome:-" + JSON.stringify(context));
    if (context === null) return;
    var secIndex = context["sectionIndex"];
    var rowIndex = context["rowIndex"];
    var segInfo = context["widgetInfo"];
    var rowList = [{
        sectionIndex: secIndex,
        rowIndex: rowIndex
    }];
    kony.print("\n secIndex:" + secIndex);
    kony.print("\n rowIndex:" + rowIndex);
    var leftVal1;
    if (gestureInfo.gestureState == 3) {
        kony.print(JSON.stringify(gestureInfo));
        leftVal1 = parseInt(gestureInfo.translationX);
        var transformObject1 = kony.ui.makeAffineTransform();
        var transformObject2 = kony.ui.makeAffineTransform();
        //   var transformObject3 =  kony.ui.makeAffineTransform();
        transformObject1.translate(0, 0);
        transformObject2.translate(leftVal1, 0);
        var animationdef = {
            0: {
                transform: transformObject1
            },
            50: {
                transform: transformObject2
            },
            100: {
                transform: transformObject1
            }
        };
        var animDef = kony.ui.createAnimation(animationdef);
        // animation configuration
        var animationConfig = {
            duration: 1,
            fillMode: kony.anim.FILL_MODE_FORWARDS,
            "iterationCount": 1
        };
        //callback 
        var callback = function() {
                alert("animation complete!");
            };
        //set Animation
        var animation = {
            definition: animDef,
            config: animationConfig,
            callbacks: callback
        };
        lastPos = leftVal1;
        frmHome.segmentRestaurentList.animateRows({
            rows: rowList,
            widgets: ["fcResDetailfcResDetail"],
            animation: animation
        });
        //segInfo.animateRows({rows:rowList, widgets : ["fc2", "fc3"], animation: transAnimtion2});
        //frmPanGestures.lblTransX.text = gestureInfo.translationX;
        //frmPanGestures.lblTransY.text = gestureInfo.translationY;
        //	frmPanGestures.lblTransX.text = gestureInfo.gestureX;
        //	frmPanGestures.lblTransY.text = gestureInfo.gestureY;
    }
}

function deleteSegRow(abc, xyz) {
    var index = frmFavorite.segFavRestaurents.selectedIndex[1];
    kony.print("\n\n" + JSON.stringify(index) + "\n" + "context obj = " + xyz);
    frmFavorite.segFavRestaurents.removeAt(index);
}

function testbuttononclick(widget, context) {
    alert("context = " + context);
}