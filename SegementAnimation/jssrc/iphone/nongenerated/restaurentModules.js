var favList = [];
var lastPos = 0;
var lastSwipedRow = null;

function moreOptions() {
    alert("WIP");
}

function removeFromFavList() {
    alert("WIP");
}

function showRestaurentDetails1() {
    var index = frmHome.segmentRestaurentList.selectedRowIndex[1];
    kony.print("selected Row:- " + index);
    // if(favList.indexOf(index)==-1){
    //favList.push(index);
    frmDetails.lblResName.text = response["results"][index]["name"];
    frmDetails.lblRating.text = response["results"][index]["rating"];
    frmDetails.lblAddress.text = response["results"][index]["vicinity"];
    frmDetails.show();
    // }
}

function markAsFavouriteRestaurent() {
    var index = frmHome.segmentRestaurentList.selectedRowIndex[1];
    kony.print("selected Row:- " + index);
    if (favList.indexOf(index) == -1) {
        // kony.application.showLoadingScreen("sknLoading","",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
        favList.push(index);
        // kony.application.dismissLoadingScreen();
    } else return;
}

function setFavoriteRestaurent1() {
    // kony.store.getItem()
    // setGestureRecogniserToFrmfav();
    var resObj = {};
    var favresList = [];
    for (var i = 0; i < favList.length; i++) {
        resObj = {
            "imgResIcon": {
                "src": response["results"][favList[i]]["icon"]
            },
            "lblResName": {
                "text": response["results"][favList[i]]["name"]
            },
            "lblResInfo": {
                "text": "Hyderabad"
            },
            "imgDelete": {
                "src": "delete.png"
            },
            "imgMore": {
                "src": "more.png"
            },
            "lblLine": {
                "text": " "
            }
        };
        favresList.push(resObj);
    }
    frmFavorite.segFavRestaurents.removeAll();
    frmFavorite.segFavRestaurents.addAll(favresList);
    // setDeleteButtonCallBack();
}

function setGestureRecogniserToFrmfav() {
    var segTemp = frmFavorite.segFavRestaurents.rowTemplate;
    try {
        //segTemp.addGestureRecognizer(constants.GESTURE_TYPE_PAN, {fingers: 1, continuousEvents:false}, panGestureHandlerFavFrm); // pan with 2 fingers 
        segTemp.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
            fingers: 1,
            swipedistance: 50,
            swipevelocity: 75
        }, swipeGestureHandler); // swipe with default parameters
        kony.print("\nSwipe Gesture recognizer added successfully\n");
    } catch (err) {
        alert("error while regestering the gestures" + err);
    }
}

function swipeGestureHandler(commonWidget, gestureInfo, context) {
    kony.print("\n swipe performed\n");
    try {
        var direction = "";
        var GesType = "" + gestureInfo.gestureType;
        var tapParams = gestureInfo.gesturesetUpParams.taps;
        var animObj;
        var rowList = [{
            sectionIndex: context["sectionIndex"],
            rowIndex: context["rowIndex"]
        }];
        var hasgesture = false;
        if (GesType == constants.GESTURE_TYPE_SWIPE) //Swipe gesture
        {
            var swipeDirection = "" + gestureInfo.swipeDirection; //Read swipe direction
            //alert(swipeDirection);
            if (swipeDirection == "1") {
                animObj = swipeRowLeftSide();
                hasgesture = true;
            } else if (swipeDirection == "2") {
                animObj = swipeRowRightSide();
                hasgesture = true;
            }
        }
        //var gmailAnimDefObject1 = kony.ui.createAnimation(animConf);
        //	var animConf = getAnimationConfig();
        var animConf = {
            duration: 1,
            fillMode: kony.anim.FILL_MODE_FORWARDS,
            "iterationCount": 1
        };
        var swipeAnimtion1 = {
            definition: animObj,
            config: animConf,
            callbacks: null
        };
        var jsonObj = {
            rows: rowList,
            widgets: ["fcResDetails"],
            animation: swipeAnimtion1
        };
        kony.print("\nJSONObj:- " + JSON.stringify(jsonObj));
        //context.widgetInfo.animateRows(jsonObj);
        if (hasgesture) frmFavorite.segFavRestaurents.animateRows(jsonObj);
    } catch (err) {
        alert("error in gesture call back" + err);
    }
}

function swipeRowLeftSide() {
    var animConf1 = {
        "50": {
            "left": "-70%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        },
        "100": {
            "left": "-40%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        }
    };
    var animObj1 = kony.ui.createAnimation(animConf1);
    return animObj1;
}

function swipeRowRightSide() {
    var animConf1 = {
        "50": {
            "left": "50%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        },
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        }
    };
    var animObj1 = kony.ui.createAnimation(animConf1);
    return animObj1;
}
/*function swipeBackLastRow(lastSelectedRowList){
  var transformObject1 =  kony.ui.makeAffineTransform();
  var transformObject2 =  kony.ui.makeAffineTransform();
  transformObject1.translate(-140,0);
  transformObject2.translate(0,0);
  var animationdef = {
			0: {transform: transformObject1},
      		100: {transform: transformObject2}
		};
  var animDef = kony.ui.createAnimation(animationdef);
	// animation configuration
		var animationConfig =    { 
			duration: 1,
	    	fillMode: kony.anim.FILL_MODE_FORWARDS,
	    	"iterationCount":1
    	};
		//set Animation
		var animation = {
			definition: animDef,
			config: animationConfig,
			callbacks: null
		};
  frmFavorite.segFavRestaurents.animateRows({rows:lastSelectedRowList, widgets : ["fcResDetailfcResDetail"], animation: animation}); 
  	/*var secIndex = context["sectionIndex"];
	var rowIndex = context["rowIndex"];
	var segInfo  = context["widgetInfo"];
  
}

function panGestureHandlerFavFrm(commonWidget, gestureInfo, context) {
  kony.print("\n\nin gesture handler\n");
  kony.print("context:-"+JSON.stringify(context));
	var secIndex = context["sectionIndex"];
	var rowIndex = context["rowIndex"];
	var segInfo  = context["widgetInfo"];
  //if(l==null){
	var rowList = [{sectionIndex: secIndex, rowIndex : rowIndex}];
  	kony.print("\n secIndex:"+secIndex);
  	kony.print("\n rowIndex:"+rowIndex);
	var leftVal1;
  	if(gestureInfo.gestureState ==3){
     	kony.print(JSON.stringify(gestureInfo));
		leftVal1 = parseInt(gestureInfo.translationX);
    	var transformObject1 =  kony.ui.makeAffineTransform();
    	var transformObject2 =  kony.ui.makeAffineTransform();
     	var transformObject3 =  kony.ui.makeAffineTransform();
		if(leftVal1<=-50)
    	{
      		if(lastPos<0 )
       		{ 
              	transformObject1.translate(lastPos,0);
      	 		transformObject2.translate(leftVal1+lastPos,0);
         		transformObject3.translate(-140,0);
       		}
      		else
      		{
              transformObject1.translate(0,0);
        	  transformObject2.translate(leftVal1,0);
        	  transformObject3.translate(-140,0);
               lastSwipedRow=rowList;
      		}
    	}else{
      		transformObject1.translate(0,0);
      		transformObject2.translate(leftVal1,0);
      		transformObject3.translate(0,0);
          	lastSwipedRow=null;
    	}
		//define the animation
		var animationdef = {
			0: {transform: transformObject1},
      		50: {transform: transformObject2},
			100: {transform: transformObject3}
		};
		var animDef = kony.ui.createAnimation(animationdef);
		// animation configuration
		var animationConfig =    { 
			duration: 1,
	    	fillMode: kony.anim.FILL_MODE_FORWARDS,
	    	"iterationCount":1
    	};
		//set Animation
		var animation = {
			definition: animDef,
			config: animationConfig,
			callbacks: null
		};
		lastPos=leftVal1;
		frmFavorite.segFavRestaurents.animateRows({rows:rowList, widgets : ["fcResDetailfcResDetail"], animation: animation});  
      if(lastSwipedRow!==null){
        //animate lastswipedrow
       // swipeBackLastRow(lastSwipedRow);
      }
  	}
    lastSwipedRow=rowList;
	//segInfo.animateRows({rows:rowList, widgets : ["fc2", "fc3"], animation: transAnimtion2});

	//frmPanGestures.lblTransX.text = gestureInfo.translationX;
	//frmPanGestures.lblTransY.text = gestureInfo.translationY;

//	frmPanGestures.lblTransX.text = gestureInfo.gestureX;
//	frmPanGestures.lblTransY.text = gestureInfo.gestureY;
  }  
*/