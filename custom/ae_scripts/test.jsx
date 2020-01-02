
	// define variables
	var thisRender, newPath, i, j;
	var renderQ = app.project.renderQueue;
	//alert("there are " + renderQ.numItems + " render queue items");
	
	// loop through each renderQueue item, checking if any are queued
	for (i = 1; i <= renderQ.numItems; ++i) {
		// check if the render item is queued
		if (renderQ.item(i).numOutputModules !== null) {
			alert("Yes")
		}else{
			alert("No")
	    }
	}



		
	// {
	// 	// define variables
	// 	var thisRender, newPath, i, j;
	// 	var renderQ = app.project.renderQueue;
	// 	//alert("there are " + renderQ.numItems + " render queue items");
		
	// 	// loop through each renderQueue item, checking if any are queued
	// 	for (i = 1; i <= renderQ.numItems; ++i) {
			
	// 		// check if the render item is queued
	// 		if (renderQ.item(i).status == RQItemStatus.QUEUED) {
			
	// 			// shortcut variable for render item	
	// 			thisRender = renderQ.item(i);
				
	// 			//alert(thisRender.comp.name + " is queued");	
	// 			//alert("it has " + thisRender.outputModules.length + " output modules");
				
	// 			// loop through any output modules
	// 			for (j = 1; j <= thisRender.outputModules.length; ++j) {
				
	// 				//alert("current path is " + thisRender.outputModule(j).file.path);
	// 				newPath = thisRender.outputModule(j).file.path + "/" + thisRender.comp.name;
	// 				//alert("path for new folder is " + newPath);
					
	// 				// create a new folder
	// 				Folder(newPath).create();
					
	// 				newPath += "/" + thisRender.outputModule(j).file.name;
	// 				//alert("new path for this render is " + newPath);
					
	// 				// set the new file path
	// 				thisRender.outputModule(j).file = new File(newPath);
					
	// 			}	
	// 		}
	// 	}
	// }