function onRowDisplayFunction(){
  var animConfig = {"duration":0.3,"iterationCount":1,"delay":0,"fillMode":kony.anim.FORWARDS	};
  	//scale
	var transformProp1 = kony.ui.makeAffineTransform();
	transformProp1.scale(0.0,0.0); 
	var transformProp2 = kony.ui.makeAffineTransform();
	transformProp2.scale(0.5,0.5);
	var transformProp3 = kony.ui.makeAffineTransform();
	transformProp3.scale(1,1);
	var animDefinitionOne = {0  : {"anchorPoint":{"x":0.5,"y":0.5},"transform":transformProp1},
                           //  50 : {"anchorPoint":{"x":0.5,"y":0.5},"transform":transformProp2},
        					100 : {"anchorPoint":{"x":0.5,"y":0.5},"transform":transformProp3}
      						} ;
  	var animDefinition = kony.ui.createAnimation(animDefinitionOne);
	var finalAnimation = {definition: animDefinition, config: animConfig};
	frmHome.segmentRestaurentList.setAnimations({visible: finalAnimation});
//alert("setting onRowDisplay");
  //frmHome.segmentRestaurentList.onRowDisplay=onRowDispListener;
  kony.print("In row display");
//frmName.segMain.onRowDisplay = onRowDispListener;
}
function onRowDispListener(widget, state, currentRowContext, startRowContext, endRowContext)
{
  //alert
  alert("\nonRowDispListener2");
}
function onRowDispListener2(widget, state, currentRowContext, startRowContext, endRowContext)
{
	kony.print("\nwidget: " + widget);
	kony.print("\nstate: " + state);
	kony.print("\ncurrentRow:  " + currentRowContext + " \nsartRow: " + startRowContext + " \nendRow: " + endRowContext);
	var animConfig = {"duration":0.1,"iterationCount":1,"delay":0,"fillMode":kony.anim.FILL_MODE_BOTH	};
  	//scale
	var transformProp1 = kony.ui.makeAffineTransform();
	transformProp1.scale(0.5,0.5); 
	var transformProp2 = kony.ui.makeAffineTransform();
	transformProp2.scale(0.75,0.75);
	var transformProp3 = kony.ui.makeAffineTransform();
	transformProp3.scale(1,1);
	var animDefinitionOne = {0  : {"anchorPoint":{"x":0.5,"y":0.5},"transform":transformProp1},
                             50 : {"anchorPoint":{"x":0.5,"y":0.5},"transform":transformProp2},
        					100 : {"anchorPoint":{"x":0.5,"y":0.5},"transform":transformProp3}
      						} ;
  	var animDefinition = kony.ui.createAnimation(animDefinitionOne);
	var finalAnimation = {definition: animDefinition, config: animConfig};
  var RI=0;
  var animContext=[];
 // var  firstVisibleRow=(frmHome.Seg1.getFirstVisibleRow())[rowIndex];
 // var lastVisibleRow=(frmHome.Seg1.getLastVisibleRow())[rowIndex];
 // kony.print("first row:-"+firstVisibleRow);
 // kony.print("last row:-"+lastVisibleRow);
 /* for(var i=firstVisibleRow;i>0;i--){
  	animContext.push({sectionIndex:0,rowIndex : i});
  }*/
  var i=startRowContext["rowIndex"];
  var j=endRowContext["rowIndex"];
  kony.print("last row:-"+j);
  i--;
  for(;i>=0;i--){
  	animContext.push({sectionIndex:0,rowIndex : i});
  }
  for(;j<14;j++){
  	animContext.push({sectionIndex:0,rowIndex : j});
  }
	//var contextDef={sectionIndex:0,rowIndex : 1};						
	//var	animContext = [contextDef];	
	switch (state) {
	case kony.segment.ADD:
		//alert("ADD");
        widget.animateRows({context: animContext, animation: finalAnimation});
        break;
	case kony.segment.UPDATE:
      	//alert("UPDATE");
      	 widget.animateRows({context: animContext, animation: finalAnimation});
        break; 
     case kony.segment.REMOVE:
		//alert("REMOVE");
		 widget.animateRows({context: animContext, animation: finalAnimation});
        break;
     case kony.segment.VISIBLE:
     // alert("VISIBLE");
       widget.animateRows({context: animContext, animation: finalAnimation});
        break;
 	default	:break;
  }
}
/*
function getTestOperation(){

	animationType = segForm.lbAnimationType.selectedKey;
	Operation = segForm.lbOperation.selectedKey;
	Mode = segForm.lbMode.selectedKey;
	widToAnimate = segForm.lbWidget.selectedKey;
	
	
	
	
	frmTest.lblInfo.text = " FormType" + frmHome.lbFormType.selectedKeyValue+
	"| segContainertype" + frmHome.lbSegCont.selectedKeyValue+
	"| segRowTemplateType" + frmHome.lbRowTemplate.selectedKeyValue +
	"| widgetType" + frmHome.lbWidgets.selectedKeyValue+
	"| SegmentType" +  frmHome.lbSegmentType.selectedKeyValue+
	"| dataType" + frmHome.lbData.selectedKeyValue + 
	"| animationType" + segForm.lbAnimationType.selectedKeyValue +
	"| Operation" + segForm.lbOperation.selectedKeyValue +
	"| Mode" + segForm.lbMode.selectedKeyValue +
	"| Widget" + segForm.lbWidget.selectedKeyValue;
	
}
function getMode(){
	switch(Mode){
		case "1"    :	animMode=kony.anim.FILL_MODE_FORWARDS;
							break;
		case "2"	:	animMode=kony.anim.FILL_MODE_BACKWARDS
							break;
		case "3"	:	animMode=kony.anim.FILL_MODE_BOTH
						break;
		default		:	animMode=kony.anim.FILL_MODE_BACKWARDS
							break;
	}
	return animMode;
}
function getFinalAnimation(){

	animConfig = 	{
						"duration":4,
						"iterationCount":1,
						"delay":0,
						"fillMode":getMode()
					};
	switch(animationType){
			
			
		
	
		case "2"	:	//rotate
						var transformProp1 = kony.ui.makeAffineTransform();
						transformProp1.rotate(90); 
						var transformProp2 = kony.ui.makeAffineTransform();
						transformProp2.rotate(90);
						var transformProp3 = kony.ui.makeAffineTransform();
						transformProp3.rotate(180);
	                    var animDefinitionOne = 
						{
						0 : 
	   						{
	   							"anchorPoint":{"x":0.5,"y":0.5},
	   							"transform":transformProp1
        					},
       					50 : 
	   						{ 
		 						"anchorPoint":{"x":0.5,"y":0.5},
								"transform":transformProp2  		
       						 },
        				100 : 
	   						{
        						 "anchorPoint":{"x":0.5,"y":0.5},
        						 "transform":transformProp3
							}
      					} 
					
					
					break;
		case "3" :		//scale
						var transformProp1 = kony.ui.makeAffineTransform();
						transformProp1.scale(0.5,0.5); 
						var transformProp2 = kony.ui.makeAffineTransform();
						transformProp2.scale(1,1);
						var transformProp3 = kony.ui.makeAffineTransform();
						transformProp3.scale(2,2);
	                    var animDefinitionOne = 
						{
						0 : 
	   						{
	   							"anchorPoint":{"x":0.5,"y":0.5},
	   							"transform":transformProp1
        					},
       					50 : 
	   						{ 
		 						"anchorPoint":{"x":0.5,"y":0.5},
								"transform":transformProp2  		
       						 },
        				100 : 
	   						{
        						 "anchorPoint":{"x":0.5,"y":0.5},
        						 "transform":transformProp3
							}
      					} 
					
					
					break;	
			case "4"	:	//translate-Scale
							var transformProp1 = kony.ui.makeAffineTransform();
							transformProp1.translate(10,10);
							var transformProp2 = kony.ui.makeAffineTransform();
							transformProp2.translate(20,20);
							transformProp2.scale(0.5,0.5);
	
							var transformProp3 = kony.ui.makeAffineTransform();
							transformProp3.translate(80,80);
							transformProp3.scale(2,2); 
							var animDefinitionOne = 
							{
							0 : 
	   						{
	   						"anchorPoint":{"x":0.5,"y":0.5},
	   						"transform":transformProp1
        					},
       						50 : 
	   						{ 
		 					"anchorPoint":{"x":0.5,"y":0.5},
							"transform":transformProp2  		
        					},
        					100 : 
	   						{
         					"anchorPoint":{"x":0.5,"y":0.5},
         					"transform":transformProp3
        					}
      				} 
					
					
					break;
			case "5"	:	//Scale-Rotate
							var transformProp1 = kony.ui.makeAffineTransform();
							transformProp1.rotate(90);
 
							var transformProp2 = kony.ui.makeAffineTransform();
							transformProp2.rotate(90);
							transformProp2.scale(0.5,0.5);
	
							var transformProp3 = kony.ui.makeAffineTransform();
							transformProp3.rotate(180);
							transformProp3.scale(2,2);
							var animDefinitionOne = 
							{
							0 : 
	   						{
	   						"anchorPoint":{"x":0.5,"y":0.5},
	   						"transform":transformProp1
        					},
       						50 : 
	   						{ 
		 					"anchorPoint":{"x":0.5,"y":0.5},
							"transform":transformProp2  		
        					},
        					100 : 
	   						{
         					"anchorPoint":{"x":0.5,"y":0.5},
         					"transform":transformProp3
        					}
      				} 
					
					
					break;
		case "6"	:	//Translate-Rotate
							var transformProp1 = kony.ui.makeAffineTransform();
							transformProp1.rotate(90);
 
							var transformProp2 = kony.ui.makeAffineTransform();
							transformProp2.rotate(90);
							transformProp2.translate(10,10);
	
							var transformProp3 = kony.ui.makeAffineTransform();
							transformProp3.translate(20,20);
							transformProp3.rotate(180);
							var animDefinitionOne = 
							{
							0 : 
	   						{
	   						"anchorPoint":{"x":0.5,"y":0.5},
	   						"transform":transformProp1
        					},
       						50 : 
	   						{ 
		 					"anchorPoint":{"x":0.5,"y":0.5},
							"transform":transformProp2  		
        					},
        					100 : 
	   						{
         					"anchorPoint":{"x":0.5,"y":0.5},
         					"transform":transformProp3
        					}
      				} 
					
					
					break;
		case "7"	:	//Translate-Rotate-Scale
							var transformProp1 = kony.ui.makeAffineTransform();
							transformProp1.scale(0.5,0.5);
 
							var transformProp2 = kony.ui.makeAffineTransform();
							transformProp2.rotate(90);
							transformProp2.translate(10,10);
	
							var transformProp3 = kony.ui.makeAffineTransform();
							transformProp3.translate(20,20);
							transformProp3.scale(2,2);
							transformProp3.rotate(180);
							var animDefinitionOne = 
							{
							0 : 
	   						{
	   						"anchorPoint":{"x":0.5,"y":0.5},
	   						"transform":transformProp1
        					},
       						50 : 
	   						{ 
		 					"anchorPoint":{"x":0.5,"y":0.5},
							"transform":transformProp2  		
        					},
        					100 : 
	   						{
         					"anchorPoint":{"x":0.5,"y":0.5},
         					"transform":transformProp3
        					}
      				} 
					
					
					break;
		
		case "8"	:	//Opacity Background Color	
					  var animDefinitionOne = 
					{  
      				 0 : 
	   					{
	   						"opacity":0
       					 },
       				50 : 
	   					{ "backgroundColor":"0000ff",
        				 "opacity":0.5
       					 },
        			100 : 
	   					{
         				"backgroundColor":"ff0000",
         				"opacity":1
        				}
      				} 
					break;				

		case "9"	:	//Opacity 
					var animDefinitionOne = 
					{  
      				 0 : 
	   					{
	   						"opacity":0
       					 },
       				50 : 
	   					{ 
        				 "opacity":0.5
       					 },
        			100 : 
	   					{
         				"opacity":1.5
        				}
      				} 
					break;
		case "10"	:	//BackgroundColor
					var animDefinitionOne = 
					{  
      				 0 : 
	   					{
	   						"backgroundColor":"ff00ff"
       					 },
       				50 : 
	   					{ 
        				 "backgroundColor":"ff00ff"
       					 },
        			100 : 
	   					{
         				"backgroundColor":"ff0000"
        				}
      				} 
					break;
		case "1": //translate		
		default :	//translate
				var transformProp1 = kony.ui.makeAffineTransform();
				transformProp1.translate(10,10);
				var transformProp2 = kony.ui.makeAffineTransform();
				transformProp2.translate(20,20);
				var transformProp3 = kony.ui.makeAffineTransform();
				transformProp3.translate(30,30);
				var animDefinitionOne = 
				{
					0 : 
	   					{
	   						"anchorPoint":{"x":1,"y":1},
	   						"transform":transformProp1
        				},
       				50 : 
	   					{ 
							 "anchorPoint":{"x":1,"y":1},	   		
         					 "transform":transformProp2
       					 },
        			100 : 
	   					 {
         					"anchorPoint":{"x":1,"y":1},
         					"transform":transformProp3
        				}
      			} 
				
				
				
				break;
				} // switch case  complete
				
				
				//function onAnimStart(){
//							alert("animation start!");
//						}
//						
//						function onAnimEnd(){
//						  alert("animation end!");
//						}
//						
//						animCallBack = {
//							animationStart: onAnimStart,
//							animationEnd: onAnimEnd
//						}
				animDefinition = kony.ui.createAnimation(animDefinitionOne);
				
				finalAnimation = {definition: animDefinition, config: animConfig} //, callbacks: animCallBack};
				return finalAnimation;
				

}*/