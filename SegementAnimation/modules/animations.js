function animateLoginWidget1(){
  kony.print("\nin animateLoginWidget1");
  frmLogin.loginContainer.animate(
			  kony.ui.createAnimation({
              //  0:{top:"90%","stepConfig":{}},
                100:{top:"0%","stepConfig":{}}
              }),
			  {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.3},
			  {animationEnd: function() {}}
  );
}

function removeRestaurents(){
frmHome.segmentRestaurentList.removeAll();
  //setRestaurents();
}
function setRestaurents(){
  var addRowAnim;
  var resObj,resList=[];
  getRestaurents();
  var len=response["results"].length;
 // alert("length:-"+len);
  for(var i=0;i<len;i++){
    resObj={
      "imgResIcon":{"src":response["results"][i]["icon"]},
      "lblResName":{"text":response["results"][i]["name"]},
      "lblResInfo":{"text":"Hyderabad"},
      "lblLine":{"text":" "}
    };
    resList.push(resObj);
  }
  addRowAnim=getAddRowAnim();
  kony.print("\n add row animation:-\n"+JSON.stringify(addRowAnim));
  frmHome.segmentRestaurentList.addAll(resList,addRowAnim);
  // frmHome.segmentRestaurentList.addAll(resList);
}

function getAddRowAnim(){
  var transformProp1 = kony.ui.makeAffineTransform();
 transformProp1.scale(0.0,0.0); 
 var transformProp2 = kony.ui.makeAffineTransform();
 transformProp2.scale(0.5,0.5);
 var transformProp3 = kony.ui.makeAffineTransform();
 transformProp3.scale(1,1);
 var animDefinitionOne = {0  : {"anchorPoint":{"x":0.5,"y":0.5},"transform":transformProp1},
                           // 50 : {"anchorPoint":{"x":0.5,"y":0.5},"transform":transformProp2},
             100 : {"anchorPoint":{"x":0.5,"y":0.5},"transform":transformProp3}
            } ;
  var animObj=kony.ui.createAnimation(animDefinitionOne);
  var animConf={delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.7};
  var addRowAnimtion = { definition : animObj, config : animConf, callbacks : null };
 return addRowAnimtion;
}
function setGestureRecogniserToFrmHome(){
  var segTemp=frmHome.segmentRestaurentList.rowTemplate;
  try {
        segTemp.addGestureRecognizer(constants.GESTURE_TYPE_PAN, {fingers: 1, continuousEvents:true}, panGestureHandlerfroHome); // pan with 2 fingers 
    } catch (err) {
        alert("error while regestering the gestures" + err);
    }
}
function panGestureHandlerfroHome(commonWidget, gestureInfo, context) {
  kony.print("\n\nin gesture handler\n");
  kony.print("\npanGestureHandlerfroHome:-"+JSON.stringify(context));
  if(context===null) return;
	var secIndex = context["sectionIndex"];
	var rowIndex = context["rowIndex"];
	var segInfo  = context["widgetInfo"];
	var rowList = [{sectionIndex: secIndex, rowIndex : rowIndex}];
  kony.print("\n secIndex:"+secIndex);
  kony.print("\n rowIndex:"+rowIndex);
	var leftVal1;
  if(gestureInfo.gestureState ==3){
     kony.print(JSON.stringify(gestureInfo));
	leftVal1 = parseInt(gestureInfo.translationX);
    var transformObject1 =  kony.ui.makeAffineTransform();
    var transformObject2 =  kony.ui.makeAffineTransform();
  //   var transformObject3 =  kony.ui.makeAffineTransform();
     transformObject1.translate(0,0);
     transformObject2.translate(leftVal1,0);
	
	var animationdef = {
		0: {transform: transformObject1},
      50: {transform: transformObject2},
		100: {transform: transformObject1}
	};
	
	var animDef = kony.ui.createAnimation(animationdef);
	
	// animation configuration
	var animationConfig =    { 
		duration: 1,
	    fillMode: kony.anim.FILL_MODE_FORWARDS,
	    "iterationCount":1
    };
    
    //callback 
	var callback = function(){
		alert("animation complete!");
	};
	
	//set Animation
	
	var animation = {
		definition: animDef,
		config: animationConfig,
		callbacks: callback
	};

	lastPos=leftVal1;
	frmHome.segmentRestaurentList.animateRows({rows:rowList, widgets : ["fcResDetailfcResDetail"], animation: animation});  
	
	//segInfo.animateRows({rows:rowList, widgets : ["fc2", "fc3"], animation: transAnimtion2});

	//frmPanGestures.lblTransX.text = gestureInfo.translationX;
	//frmPanGestures.lblTransY.text = gestureInfo.translationY;

//	frmPanGestures.lblTransX.text = gestureInfo.gestureX;
//	frmPanGestures.lblTransY.text = gestureInfo.gestureY;
  }  
}
function deleteSegRow(abc,xyz){
  
  var index=frmFavorite.segFavRestaurents.selectedIndex[1];
  kony.print("\n\n"+JSON.stringify(index)+"\n" + "context obj = " +xyz);
  frmFavorite.segFavRestaurents.removeAt(index);
}

function testbuttononclick(widget, context){
  alert("context = " + context);
}
