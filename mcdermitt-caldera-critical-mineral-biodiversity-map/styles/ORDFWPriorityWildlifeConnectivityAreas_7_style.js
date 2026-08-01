var size = 0;
var placement = 'point';
function categories_ORDFWPriorityWildlifeConnectivityAreas_7(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'Enhance/Maintain':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(25,78,21,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(25,78,21,0.21568627450980393)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Protect':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(73,9,109,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(73,9,109,0.30980392156862746)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Restore':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(178,223,138,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(178,223,138,0.30980392156862746)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_ORDFWPriorityWildlifeConnectivityAreas_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("PrimConsRe");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_ORDFWPriorityWildlifeConnectivityAreas_7(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
