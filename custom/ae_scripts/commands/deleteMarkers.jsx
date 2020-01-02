﻿deleteMarkers();
function deleteMarkers() {

            var activeItem = app.project.activeItem;
            if (activeItem instanceof CompItem) {
                var selectedLayers = activeItem.selectedLayers;
                var numSelectedLayers = selectedLayers.length;
                if (numSelectedLayers >= 1) {
                    for (var i = 0; i < numSelectedLayers; i += 1) {
                        deleteAllMarkersFromLayer(selectedLayers[i]);
                    }
                } else {
                    alert("请选择一个或多个图层.", "BoBO提示你");
                }
        }
}
#include "./lib/function.jsx"