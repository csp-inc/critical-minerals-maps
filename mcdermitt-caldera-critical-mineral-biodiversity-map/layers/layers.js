var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_EcologicalConnectivityCSP2023_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ecological Connectivity - CSP (2023)<br />\
    <img src="styles/legend/EcologicalConnectivityCSP2023_2_0.png" /> 6<br />\
    <img src="styles/legend/EcologicalConnectivityCSP2023_2_1.png" /> 111<br />\
    <img src="styles/legend/EcologicalConnectivityCSP2023_2_2.png" /> 165<br />\
    <img src="styles/legend/EcologicalConnectivityCSP2023_2_3.png" /> 229<br />\
    <img src="styles/legend/EcologicalConnectivityCSP2023_2_4.png" /> 271<br />\
    <img src="styles/legend/EcologicalConnectivityCSP2023_2_5.png" /> 302<br />\
    <img src="styles/legend/EcologicalConnectivityCSP2023_2_6.png" /> 329<br />\
    <img src="styles/legend/EcologicalConnectivityCSP2023_2_7.png" /> 354<br />\
    <img src="styles/legend/EcologicalConnectivityCSP2023_2_8.png" /> 379<br />\
    <img src="styles/legend/EcologicalConnectivityCSP2023_2_9.png" /> 403<br />\
    <img src="styles/legend/EcologicalConnectivityCSP2023_2_10.png" /> 427<br />\
    <img src="styles/legend/EcologicalConnectivityCSP2023_2_11.png" /> 452<br />\
    <img src="styles/legend/EcologicalConnectivityCSP2023_2_12.png" /> 478<br />\
    <img src="styles/legend/EcologicalConnectivityCSP2023_2_13.png" /> 506<br />\
    <img src="styles/legend/EcologicalConnectivityCSP2023_2_14.png" /> 535<br />\
    <img src="styles/legend/EcologicalConnectivityCSP2023_2_15.png" /> 563<br />\
    <img src="styles/legend/EcologicalConnectivityCSP2023_2_16.png" /> 592<br />\
    <img src="styles/legend/EcologicalConnectivityCSP2023_2_17.png" /> 627<br />\
    <img src="styles/legend/EcologicalConnectivityCSP2023_2_18.png" /> 677<br />\
    <img src="styles/legend/EcologicalConnectivityCSP2023_2_19.png" /> 1478<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/EcologicalConnectivityCSP2023_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13181918.406825, 5084246.571391, -13084293.744786, 5199479.398053]
        })
    });
var lyr_SagebrushConservationDesignHabitatCategories_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sagebrush Conservation Design - Habitat Categories<br />\
    <img src="styles/legend/SagebrushConservationDesignHabitatCategories_3_0.png" /> Core Sagebrush Areas <br />\
    <img src="styles/legend/SagebrushConservationDesignHabitatCategories_3_1.png" /> Growth Opportunity Areas<br />\
    <img src="styles/legend/SagebrushConservationDesignHabitatCategories_3_2.png" /> Other Rangeland Areas<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SagebrushConservationDesignHabitatCategories_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13181917.513938, 5084001.207331, -13084047.213652, 5199517.242795]
        })
    });
var format_OregonDFWLahontanCutthroatTroutOccupiedStreams_4 = new ol.format.GeoJSON();
var features_OregonDFWLahontanCutthroatTroutOccupiedStreams_4 = format_OregonDFWLahontanCutthroatTroutOccupiedStreams_4.readFeatures(json_OregonDFWLahontanCutthroatTroutOccupiedStreams_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OregonDFWLahontanCutthroatTroutOccupiedStreams_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OregonDFWLahontanCutthroatTroutOccupiedStreams_4.addFeatures(features_OregonDFWLahontanCutthroatTroutOccupiedStreams_4);
var lyr_OregonDFWLahontanCutthroatTroutOccupiedStreams_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OregonDFWLahontanCutthroatTroutOccupiedStreams_4, 
                style: style_OregonDFWLahontanCutthroatTroutOccupiedStreams_4,
                popuplayertitle: 'Oregon DFW Lahontan Cutthroat Trout Occupied Streams',
                interactive: false,
                title: '<img src="styles/legend/OregonDFWLahontanCutthroatTroutOccupiedStreams_4.png" /> Oregon DFW Lahontan Cutthroat Trout Occupied Streams'
            });
var format_NDOWLahontanCutthroatTroutOccupiedStreams_5 = new ol.format.GeoJSON();
var features_NDOWLahontanCutthroatTroutOccupiedStreams_5 = format_NDOWLahontanCutthroatTroutOccupiedStreams_5.readFeatures(json_NDOWLahontanCutthroatTroutOccupiedStreams_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDOWLahontanCutthroatTroutOccupiedStreams_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDOWLahontanCutthroatTroutOccupiedStreams_5.addFeatures(features_NDOWLahontanCutthroatTroutOccupiedStreams_5);
var lyr_NDOWLahontanCutthroatTroutOccupiedStreams_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NDOWLahontanCutthroatTroutOccupiedStreams_5, 
                style: style_NDOWLahontanCutthroatTroutOccupiedStreams_5,
                popuplayertitle: 'NDOW Lahontan Cutthroat Trout Occupied Streams',
                interactive: false,
                title: '<img src="styles/legend/NDOWLahontanCutthroatTroutOccupiedStreams_5.png" /> NDOW Lahontan Cutthroat Trout Occupied Streams'
            });
var format_NDOWMappedPronghornHabitatandCorridors_6 = new ol.format.GeoJSON();
var features_NDOWMappedPronghornHabitatandCorridors_6 = format_NDOWMappedPronghornHabitatandCorridors_6.readFeatures(json_NDOWMappedPronghornHabitatandCorridors_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDOWMappedPronghornHabitatandCorridors_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDOWMappedPronghornHabitatandCorridors_6.addFeatures(features_NDOWMappedPronghornHabitatandCorridors_6);
var lyr_NDOWMappedPronghornHabitatandCorridors_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NDOWMappedPronghornHabitatandCorridors_6, 
                style: style_NDOWMappedPronghornHabitatandCorridors_6,
                popuplayertitle: 'NDOW Mapped Pronghorn Habitat and Corridors',
                interactive: false,
    title: 'NDOW Mapped Pronghorn Habitat and Corridors<br />\
    <img src="styles/legend/NDOWMappedPronghornHabitatandCorridors_6_0.png" /> Home Range<br />\
    <img src="styles/legend/NDOWMappedPronghornHabitatandCorridors_6_1.png" /> Seasonal Migration<br />\
    <img src="styles/legend/NDOWMappedPronghornHabitatandCorridors_6_2.png" /> Seasonal Movement<br />' });
var format_ORDFWPriorityWildlifeConnectivityAreas_7 = new ol.format.GeoJSON();
var features_ORDFWPriorityWildlifeConnectivityAreas_7 = format_ORDFWPriorityWildlifeConnectivityAreas_7.readFeatures(json_ORDFWPriorityWildlifeConnectivityAreas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ORDFWPriorityWildlifeConnectivityAreas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ORDFWPriorityWildlifeConnectivityAreas_7.addFeatures(features_ORDFWPriorityWildlifeConnectivityAreas_7);
var lyr_ORDFWPriorityWildlifeConnectivityAreas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ORDFWPriorityWildlifeConnectivityAreas_7, 
                style: style_ORDFWPriorityWildlifeConnectivityAreas_7,
                popuplayertitle: 'OR DFW Priority Wildlife Connectivity Areas',
                interactive: false,
    title: 'OR DFW Priority Wildlife Connectivity Areas<br />\
    <img src="styles/legend/ORDFWPriorityWildlifeConnectivityAreas_7_0.png" /> Enhance/Maintain<br />\
    <img src="styles/legend/ORDFWPriorityWildlifeConnectivityAreas_7_1.png" /> Protect<br />\
    <img src="styles/legend/ORDFWPriorityWildlifeConnectivityAreas_7_2.png" /> Restore<br />' });
var format_OregonDFWConservationOpportunityAreas_8 = new ol.format.GeoJSON();
var features_OregonDFWConservationOpportunityAreas_8 = format_OregonDFWConservationOpportunityAreas_8.readFeatures(json_OregonDFWConservationOpportunityAreas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OregonDFWConservationOpportunityAreas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OregonDFWConservationOpportunityAreas_8.addFeatures(features_OregonDFWConservationOpportunityAreas_8);
var lyr_OregonDFWConservationOpportunityAreas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OregonDFWConservationOpportunityAreas_8, 
                style: style_OregonDFWConservationOpportunityAreas_8,
                popuplayertitle: 'Oregon DFW Conservation Opportunity Areas',
                interactive: true,
                title: '<img src="styles/legend/OregonDFWConservationOpportunityAreas_8.png" /> Oregon DFW Conservation Opportunity Areas'
            });
var format_TECHINDUSTRIESLTD_9 = new ol.format.GeoJSON();
var features_TECHINDUSTRIESLTD_9 = format_TECHINDUSTRIESLTD_9.readFeatures(json_TECHINDUSTRIESLTD_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TECHINDUSTRIESLTD_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TECHINDUSTRIESLTD_9.addFeatures(features_TECHINDUSTRIESLTD_9);
var lyr_TECHINDUSTRIESLTD_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TECHINDUSTRIESLTD_9, 
                style: style_TECHINDUSTRIESLTD_9,
                popuplayertitle: 'TECH INDUSTRIES LTD',
                interactive: false,
                title: '<img src="styles/legend/TECHINDUSTRIESLTD_9.png" /> TECH INDUSTRIES LTD'
            });
var format_ROCKYMOUNTAINPROSPECTORSLLC_10 = new ol.format.GeoJSON();
var features_ROCKYMOUNTAINPROSPECTORSLLC_10 = format_ROCKYMOUNTAINPROSPECTORSLLC_10.readFeatures(json_ROCKYMOUNTAINPROSPECTORSLLC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROCKYMOUNTAINPROSPECTORSLLC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROCKYMOUNTAINPROSPECTORSLLC_10.addFeatures(features_ROCKYMOUNTAINPROSPECTORSLLC_10);
var lyr_ROCKYMOUNTAINPROSPECTORSLLC_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROCKYMOUNTAINPROSPECTORSLLC_10, 
                style: style_ROCKYMOUNTAINPROSPECTORSLLC_10,
                popuplayertitle: 'ROCKY MOUNTAIN PROSPECTORS LLC',
                interactive: false,
                title: '<img src="styles/legend/ROCKYMOUNTAINPROSPECTORSLLC_10.png" /> ROCKY MOUNTAIN PROSPECTORS LLC'
            });
var format_RICKKEELMCCLINTICKLVGTRUST_11 = new ol.format.GeoJSON();
var features_RICKKEELMCCLINTICKLVGTRUST_11 = format_RICKKEELMCCLINTICKLVGTRUST_11.readFeatures(json_RICKKEELMCCLINTICKLVGTRUST_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RICKKEELMCCLINTICKLVGTRUST_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RICKKEELMCCLINTICKLVGTRUST_11.addFeatures(features_RICKKEELMCCLINTICKLVGTRUST_11);
var lyr_RICKKEELMCCLINTICKLVGTRUST_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RICKKEELMCCLINTICKLVGTRUST_11, 
                style: style_RICKKEELMCCLINTICKLVGTRUST_11,
                popuplayertitle: 'RICK & KEEL MCCLINTICK LVG TRUST',
                interactive: false,
                title: '<img src="styles/legend/RICKKEELMCCLINTICKLVGTRUST_11.png" /> RICK & KEEL MCCLINTICK LVG TRUST'
            });
var format_OREGONENERGYLLC_12 = new ol.format.GeoJSON();
var features_OREGONENERGYLLC_12 = format_OREGONENERGYLLC_12.readFeatures(json_OREGONENERGYLLC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OREGONENERGYLLC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OREGONENERGYLLC_12.addFeatures(features_OREGONENERGYLLC_12);
var lyr_OREGONENERGYLLC_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OREGONENERGYLLC_12, 
                style: style_OREGONENERGYLLC_12,
                popuplayertitle: 'OREGON ENERGY LLC',
                interactive: false,
                title: '<img src="styles/legend/OREGONENERGYLLC_12.png" /> OREGON ENERGY LLC'
            });
var format_NEVADASELECTROYALTYINC_13 = new ol.format.GeoJSON();
var features_NEVADASELECTROYALTYINC_13 = format_NEVADASELECTROYALTYINC_13.readFeatures(json_NEVADASELECTROYALTYINC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NEVADASELECTROYALTYINC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NEVADASELECTROYALTYINC_13.addFeatures(features_NEVADASELECTROYALTYINC_13);
var lyr_NEVADASELECTROYALTYINC_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NEVADASELECTROYALTYINC_13, 
                style: style_NEVADASELECTROYALTYINC_13,
                popuplayertitle: 'NEVADA SELECT ROYALTY INC',
                interactive: false,
                title: '<img src="styles/legend/NEVADASELECTROYALTYINC_13.png" /> NEVADA SELECT ROYALTY INC'
            });
var format_METALSSEARCHLLC_14 = new ol.format.GeoJSON();
var features_METALSSEARCHLLC_14 = format_METALSSEARCHLLC_14.readFeatures(json_METALSSEARCHLLC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_METALSSEARCHLLC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_METALSSEARCHLLC_14.addFeatures(features_METALSSEARCHLLC_14);
var lyr_METALSSEARCHLLC_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_METALSSEARCHLLC_14, 
                style: style_METALSSEARCHLLC_14,
                popuplayertitle: 'METALS SEARCH LLC',
                interactive: false,
                title: '<img src="styles/legend/METALSSEARCHLLC_14.png" /> METALS SEARCH LLC'
            });
var format_LITHIUMVALLEYHOLDINGSCORP_15 = new ol.format.GeoJSON();
var features_LITHIUMVALLEYHOLDINGSCORP_15 = format_LITHIUMVALLEYHOLDINGSCORP_15.readFeatures(json_LITHIUMVALLEYHOLDINGSCORP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LITHIUMVALLEYHOLDINGSCORP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LITHIUMVALLEYHOLDINGSCORP_15.addFeatures(features_LITHIUMVALLEYHOLDINGSCORP_15);
var lyr_LITHIUMVALLEYHOLDINGSCORP_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LITHIUMVALLEYHOLDINGSCORP_15, 
                style: style_LITHIUMVALLEYHOLDINGSCORP_15,
                popuplayertitle: 'LITHIUM VALLEY HOLDINGS CORP',
                interactive: false,
                title: '<img src="styles/legend/LITHIUMVALLEYHOLDINGSCORP_15.png" /> LITHIUM VALLEY HOLDINGS CORP'
            });
var format_LITHIUMNEVADALLC_16 = new ol.format.GeoJSON();
var features_LITHIUMNEVADALLC_16 = format_LITHIUMNEVADALLC_16.readFeatures(json_LITHIUMNEVADALLC_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LITHIUMNEVADALLC_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LITHIUMNEVADALLC_16.addFeatures(features_LITHIUMNEVADALLC_16);
var lyr_LITHIUMNEVADALLC_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LITHIUMNEVADALLC_16, 
                style: style_LITHIUMNEVADALLC_16,
                popuplayertitle: 'LITHIUM NEVADA LLC',
                interactive: false,
                title: '<img src="styles/legend/LITHIUMNEVADALLC_16.png" /> LITHIUM NEVADA LLC'
            });
var format_KVPROJECTLLC_17 = new ol.format.GeoJSON();
var features_KVPROJECTLLC_17 = format_KVPROJECTLLC_17.readFeatures(json_KVPROJECTLLC_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KVPROJECTLLC_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KVPROJECTLLC_17.addFeatures(features_KVPROJECTLLC_17);
var lyr_KVPROJECTLLC_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KVPROJECTLLC_17, 
                style: style_KVPROJECTLLC_17,
                popuplayertitle: 'K V PROJECT LLC',
                interactive: false,
                title: '<img src="styles/legend/KVPROJECTLLC_17.png" /> K V PROJECT LLC'
            });
var format_HITECHMINERALSINCHITECHMINERALSINC_18 = new ol.format.GeoJSON();
var features_HITECHMINERALSINCHITECHMINERALSINC_18 = format_HITECHMINERALSINCHITECHMINERALSINC_18.readFeatures(json_HITECHMINERALSINCHITECHMINERALSINC_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HITECHMINERALSINCHITECHMINERALSINC_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HITECHMINERALSINCHITECHMINERALSINC_18.addFeatures(features_HITECHMINERALSINCHITECHMINERALSINC_18);
var lyr_HITECHMINERALSINCHITECHMINERALSINC_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HITECHMINERALSINCHITECHMINERALSINC_18, 
                style: style_HITECHMINERALSINCHITECHMINERALSINC_18,
                popuplayertitle: 'HITECH MINERALS INC. — HITECH MINERALS INC',
                interactive: false,
                title: '<img src="styles/legend/HITECHMINERALSINCHITECHMINERALSINC_18.png" /> HITECH MINERALS INC. — HITECH MINERALS INC'
            });
var format_GOLDCANYONRESOURCESUSAINC_19 = new ol.format.GeoJSON();
var features_GOLDCANYONRESOURCESUSAINC_19 = format_GOLDCANYONRESOURCESUSAINC_19.readFeatures(json_GOLDCANYONRESOURCESUSAINC_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GOLDCANYONRESOURCESUSAINC_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GOLDCANYONRESOURCESUSAINC_19.addFeatures(features_GOLDCANYONRESOURCESUSAINC_19);
var lyr_GOLDCANYONRESOURCESUSAINC_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GOLDCANYONRESOURCESUSAINC_19, 
                style: style_GOLDCANYONRESOURCESUSAINC_19,
                popuplayertitle: 'GOLD CANYON RESOURCES USA INC',
                interactive: false,
                title: '<img src="styles/legend/GOLDCANYONRESOURCESUSAINC_19.png" /> GOLD CANYON RESOURCES USA INC'
            });
var format_FMSLITHIUMCORPORATION_20 = new ol.format.GeoJSON();
var features_FMSLITHIUMCORPORATION_20 = format_FMSLITHIUMCORPORATION_20.readFeatures(json_FMSLITHIUMCORPORATION_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FMSLITHIUMCORPORATION_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FMSLITHIUMCORPORATION_20.addFeatures(features_FMSLITHIUMCORPORATION_20);
var lyr_FMSLITHIUMCORPORATION_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FMSLITHIUMCORPORATION_20, 
                style: style_FMSLITHIUMCORPORATION_20,
                popuplayertitle: 'FMS LITHIUM CORPORATION',
                interactive: false,
                title: '<img src="styles/legend/FMSLITHIUMCORPORATION_20.png" /> FMS LITHIUM CORPORATION'
            });
var format_CORDEROMINEINC_21 = new ol.format.GeoJSON();
var features_CORDEROMINEINC_21 = format_CORDEROMINEINC_21.readFeatures(json_CORDEROMINEINC_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORDEROMINEINC_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORDEROMINEINC_21.addFeatures(features_CORDEROMINEINC_21);
var lyr_CORDEROMINEINC_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORDEROMINEINC_21, 
                style: style_CORDEROMINEINC_21,
                popuplayertitle: 'CORDERO MINE INC',
                interactive: false,
                title: '<img src="styles/legend/CORDEROMINEINC_21.png" /> CORDERO MINE INC'
            });
var format_AMERICANINNOVATIVEMINERALSLLC_22 = new ol.format.GeoJSON();
var features_AMERICANINNOVATIVEMINERALSLLC_22 = format_AMERICANINNOVATIVEMINERALSLLC_22.readFeatures(json_AMERICANINNOVATIVEMINERALSLLC_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AMERICANINNOVATIVEMINERALSLLC_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMERICANINNOVATIVEMINERALSLLC_22.addFeatures(features_AMERICANINNOVATIVEMINERALSLLC_22);
var lyr_AMERICANINNOVATIVEMINERALSLLC_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AMERICANINNOVATIVEMINERALSLLC_22, 
                style: style_AMERICANINNOVATIVEMINERALSLLC_22,
                popuplayertitle: 'AMERICAN INNOVATIVE MINERALS LLC',
                interactive: false,
                title: '<img src="styles/legend/AMERICANINNOVATIVEMINERALSLLC_22.png" /> AMERICAN INNOVATIVE MINERALS LLC'
            });
var format_AMERICANCOLLOIDCO_23 = new ol.format.GeoJSON();
var features_AMERICANCOLLOIDCO_23 = format_AMERICANCOLLOIDCO_23.readFeatures(json_AMERICANCOLLOIDCO_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AMERICANCOLLOIDCO_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMERICANCOLLOIDCO_23.addFeatures(features_AMERICANCOLLOIDCO_23);
var lyr_AMERICANCOLLOIDCO_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AMERICANCOLLOIDCO_23, 
                style: style_AMERICANCOLLOIDCO_23,
                popuplayertitle: 'AMERICAN COLLOID CO',
                interactive: false,
                title: '<img src="styles/legend/AMERICANCOLLOIDCO_23.png" /> AMERICAN COLLOID CO'
            });
var format_HiTechMcDermittCalderaExplorationProjectBoundary_24 = new ol.format.GeoJSON();
var features_HiTechMcDermittCalderaExplorationProjectBoundary_24 = format_HiTechMcDermittCalderaExplorationProjectBoundary_24.readFeatures(json_HiTechMcDermittCalderaExplorationProjectBoundary_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HiTechMcDermittCalderaExplorationProjectBoundary_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HiTechMcDermittCalderaExplorationProjectBoundary_24.addFeatures(features_HiTechMcDermittCalderaExplorationProjectBoundary_24);
var lyr_HiTechMcDermittCalderaExplorationProjectBoundary_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HiTechMcDermittCalderaExplorationProjectBoundary_24, 
                style: style_HiTechMcDermittCalderaExplorationProjectBoundary_24,
                popuplayertitle: 'HiTech McDermitt Caldera Exploration Project Boundary',
                interactive: false,
                title: '<img src="styles/legend/HiTechMcDermittCalderaExplorationProjectBoundary_24.png" /> HiTech McDermitt Caldera Exploration Project Boundary'
            });
var format_ThackerPassProjectandExplorationBoundariesapproximate_25 = new ol.format.GeoJSON();
var features_ThackerPassProjectandExplorationBoundariesapproximate_25 = format_ThackerPassProjectandExplorationBoundariesapproximate_25.readFeatures(json_ThackerPassProjectandExplorationBoundariesapproximate_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ThackerPassProjectandExplorationBoundariesapproximate_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ThackerPassProjectandExplorationBoundariesapproximate_25.addFeatures(features_ThackerPassProjectandExplorationBoundariesapproximate_25);
var lyr_ThackerPassProjectandExplorationBoundariesapproximate_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ThackerPassProjectandExplorationBoundariesapproximate_25, 
                style: style_ThackerPassProjectandExplorationBoundariesapproximate_25,
                popuplayertitle: 'Thacker Pass Project and Exploration Boundaries (approximate)',
                interactive: false,
                title: '<img src="styles/legend/ThackerPassProjectandExplorationBoundariesapproximate_25.png" /> Thacker Pass Project and Exploration Boundaries (approximate)'
            });
var format_ProjectAreas_26 = new ol.format.GeoJSON();
var features_ProjectAreas_26 = format_ProjectAreas_26.readFeatures(json_ProjectAreas_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectAreas_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectAreas_26.addFeatures(features_ProjectAreas_26);
var lyr_ProjectAreas_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectAreas_26, 
                style: style_ProjectAreas_26,
                popuplayertitle: 'Project Areas',
                interactive: true,
                title: '<img src="styles/legend/ProjectAreas_26.png" /> Project Areas'
            });
var format_ConservedLands_27 = new ol.format.GeoJSON();
var features_ConservedLands_27 = format_ConservedLands_27.readFeatures(json_ConservedLands_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConservedLands_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConservedLands_27.addFeatures(features_ConservedLands_27);
var lyr_ConservedLands_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConservedLands_27, 
                style: style_ConservedLands_27,
                popuplayertitle: 'Conserved Lands',
                interactive: true,
                title: '<img src="styles/legend/ConservedLands_27.png" /> Conserved Lands'
            });
var lyr_SurfaceManagementAgencyBLM_28 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Surface Management Agency (BLM)<br />\
    <img src="styles/legend/SurfaceManagementAgencyBLM_28_0.png" /> US Forest Service<br />\
    <img src="styles/legend/SurfaceManagementAgencyBLM_28_1.png" /> Bureau of Indian Affairs<br />\
    <img src="styles/legend/SurfaceManagementAgencyBLM_28_2.png" /> Bureau of Land Management<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SurfaceManagementAgencyBLM_28.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13181977.517294, 5083927.955237, -13083981.004435, 5199601.509025]
        })
    });
var format_McDermittCalderaBoundary_29 = new ol.format.GeoJSON();
var features_McDermittCalderaBoundary_29 = format_McDermittCalderaBoundary_29.readFeatures(json_McDermittCalderaBoundary_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_McDermittCalderaBoundary_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_McDermittCalderaBoundary_29.addFeatures(features_McDermittCalderaBoundary_29);
var lyr_McDermittCalderaBoundary_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_McDermittCalderaBoundary_29, 
                style: style_McDermittCalderaBoundary_29,
                popuplayertitle: 'McDermitt Caldera Boundary',
                interactive: false,
                title: '<img src="styles/legend/McDermittCalderaBoundary_29.png" /> McDermitt Caldera Boundary'
            });
var group_Boundaries = new ol.layer.Group({
                                layers: [lyr_SurfaceManagementAgencyBLM_28,lyr_McDermittCalderaBoundary_29,],
                                fold: 'open',
                                title: 'Boundaries'});
var group_ODLTBoundaries = new ol.layer.Group({
                                layers: [lyr_ProjectAreas_26,lyr_ConservedLands_27,],
                                fold: 'close',
                                title: 'ODLT Boundaries'});
var group_ExistingLithiumProjects = new ol.layer.Group({
                                layers: [lyr_HiTechMcDermittCalderaExplorationProjectBoundary_24,lyr_ThackerPassProjectandExplorationBoundariesapproximate_25,],
                                fold: 'close',
                                title: 'Existing Lithium Projects'});
var group_MLRSMiningClaimsJune2026 = new ol.layer.Group({
                                layers: [lyr_TECHINDUSTRIESLTD_9,lyr_ROCKYMOUNTAINPROSPECTORSLLC_10,lyr_RICKKEELMCCLINTICKLVGTRUST_11,lyr_OREGONENERGYLLC_12,lyr_NEVADASELECTROYALTYINC_13,lyr_METALSSEARCHLLC_14,lyr_LITHIUMVALLEYHOLDINGSCORP_15,lyr_LITHIUMNEVADALLC_16,lyr_KVPROJECTLLC_17,lyr_HITECHMINERALSINCHITECHMINERALSINC_18,lyr_GOLDCANYONRESOURCESUSAINC_19,lyr_FMSLITHIUMCORPORATION_20,lyr_CORDEROMINEINC_21,lyr_AMERICANINNOVATIVEMINERALSLLC_22,lyr_AMERICANCOLLOIDCO_23,],
                                fold: 'close',
                                title: 'MLRS Mining Claims (June 2026)'});
var group_LocatableNotices = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Locatable Notices'});
var group_WildlifeHabitatConnectivity = new ol.layer.Group({
                                layers: [lyr_EcologicalConnectivityCSP2023_2,lyr_SagebrushConservationDesignHabitatCategories_3,lyr_OregonDFWLahontanCutthroatTroutOccupiedStreams_4,lyr_NDOWLahontanCutthroatTroutOccupiedStreams_5,lyr_NDOWMappedPronghornHabitatandCorridors_6,lyr_ORDFWPriorityWildlifeConnectivityAreas_7,lyr_OregonDFWConservationOpportunityAreas_8,],
                                fold: 'close',
                                title: 'Wildlife Habitat & Connectivity'});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_GoogleSatelliteHybrid_1,],
                                fold: 'open',
                                title: 'Basemaps'});

lyr_OpenStreetMap_0.setVisible(false);lyr_GoogleSatelliteHybrid_1.setVisible(false);lyr_EcologicalConnectivityCSP2023_2.setVisible(false);lyr_SagebrushConservationDesignHabitatCategories_3.setVisible(false);lyr_OregonDFWLahontanCutthroatTroutOccupiedStreams_4.setVisible(false);lyr_NDOWLahontanCutthroatTroutOccupiedStreams_5.setVisible(false);lyr_NDOWMappedPronghornHabitatandCorridors_6.setVisible(false);lyr_ORDFWPriorityWildlifeConnectivityAreas_7.setVisible(false);lyr_OregonDFWConservationOpportunityAreas_8.setVisible(false);lyr_TECHINDUSTRIESLTD_9.setVisible(false);lyr_ROCKYMOUNTAINPROSPECTORSLLC_10.setVisible(false);lyr_RICKKEELMCCLINTICKLVGTRUST_11.setVisible(false);lyr_OREGONENERGYLLC_12.setVisible(false);lyr_NEVADASELECTROYALTYINC_13.setVisible(false);lyr_METALSSEARCHLLC_14.setVisible(false);lyr_LITHIUMVALLEYHOLDINGSCORP_15.setVisible(false);lyr_LITHIUMNEVADALLC_16.setVisible(false);lyr_KVPROJECTLLC_17.setVisible(false);lyr_HITECHMINERALSINCHITECHMINERALSINC_18.setVisible(false);lyr_GOLDCANYONRESOURCESUSAINC_19.setVisible(false);lyr_FMSLITHIUMCORPORATION_20.setVisible(false);lyr_CORDEROMINEINC_21.setVisible(false);lyr_AMERICANINNOVATIVEMINERALSLLC_22.setVisible(false);lyr_AMERICANCOLLOIDCO_23.setVisible(false);lyr_HiTechMcDermittCalderaExplorationProjectBoundary_24.setVisible(false);lyr_ThackerPassProjectandExplorationBoundariesapproximate_25.setVisible(false);lyr_ProjectAreas_26.setVisible(false);lyr_ConservedLands_27.setVisible(false);lyr_SurfaceManagementAgencyBLM_28.setVisible(false);lyr_McDermittCalderaBoundary_29.setVisible(true);
var layersList = [group_Basemaps,group_WildlifeHabitatConnectivity,group_MLRSMiningClaimsJune2026,group_ExistingLithiumProjects,group_ODLTBoundaries,group_Boundaries];
lyr_OregonDFWLahontanCutthroatTroutOccupiedStreams_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fhdFtrID': 'fhdFtrID', 'fhdRefID': 'fhdRefID', 'fhdRevDt': 'fhdRevDt', 'fhdONm': 'fhdONm', 'fhdOEnt': 'fhdOEnt', 'fhdSpNm': 'fhdSpNm', 'fhdRun': 'fhdRun', 'fhdLifeHst': 'fhdLifeHst', 'fhdUseTy': 'fhdUseTy', 'fhdBasis': 'fhdBasis', 'fhdStNm': 'fhdStNm', 'fhdGenus': 'fhdGenus', 'fhdSp': 'fhdSp', 'fhdSubSp': 'fhdSubSp', 'fhdOrig': 'fhdOrig', 'fhdProd': 'fhdProd', 'fhdComment': 'fhdComment', 'fhdESH': 'fhdESH', 'fhdBasisD': 'fhdBasisD', 'fhdNMF': 'fhdNMF', 'fhdBasisDt': 'fhdBasisDt', 'fhdBasisNm': 'fhdBasisNm', 'fhdBasisEnt': 'fhdBasisEnt', 'fhdBasisPrj': 'fhdBasisPrj', 'fhdBasisMethod': 'fhdBasisMethod', 'fhdAccess': 'fhdAccess', 'fhdBarrierFtrID': 'fhdBarrierFtrID', 'fhdEndExtent': 'fhdEndExtent', 'SHAPE_Length': 'SHAPE_Length', });
lyr_NDOWLahontanCutthroatTroutOccupiedStreams_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Permanent_': 'Permanent_', 'FDate': 'FDate', 'Resolution': 'Resolution', 'GNIS_ID': 'GNIS_ID', 'GNIS_Name': 'GNIS_Name', 'LengthKM': 'LengthKM', 'ReachCode': 'ReachCode', 'FlowDir': 'FlowDir', 'WBArea_Per': 'WBArea_Per', 'FType': 'FType', 'FCode': 'FCode', 'MainPath': 'MainPath', 'InNetwork': 'InNetwork', 'Visibility': 'Visibility', 'NHDPlusID': 'NHDPlusID', 'VPUID': 'VPUID', 'Enabled': 'Enabled', 'Pop_Name': 'Pop_Name', 'InterCon_N': 'InterCon_N', 'Shape_Leng': 'Shape_Leng', 'Shape__Length': 'Shape__Length', });
lyr_NDOWMappedPronghornHabitatandCorridors_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'POLY': 'POLY', 'BIOLOGIST': 'BIOLOGIST', 'SPECIES': 'SPECIES', 'TYPE_OF_MO': 'TYPE_OF_MO', 'MOVEMENT_O': 'MOVEMENT_O', 'MOVEMENT_T': 'MOVEMENT_T', 'REASON_FOR': 'REASON_FOR', 'MOVEMENT_P': 'MOVEMENT_P', 'MOVEMENT_S': 'MOVEMENT_S', 'MOVEMENT_D': 'MOVEMENT_D', 'RETURN_SEA': 'RETURN_SEA', 'RETURN_DIR': 'RETURN_DIR', 'PEAK_MOVEM': 'PEAK_MOVEM', 'PEAK_RETUR': 'PEAK_RETUR', 'TOTAL_NUMB': 'TOTAL_NUMB', 'POPULATION': 'POPULATION', 'CURRENT_TR': 'CURRENT_TR', 'HISTORIC_T': 'HISTORIC_T', 'REASONS_FO': 'REASONS_FO', 'CROSSING_E': 'CROSSING_E', 'POTENTIAL_': 'POTENTIAL_', 'NOTES': 'NOTES', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_ORDFWPriorityWildlifeConnectivityAreas_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PWCAType': 'PWCAType', 'PWCAName': 'PWCAName', 'HexName': 'HexName', 'MinX': 'MinX', 'MaxY': 'MaxY', 'ORIG_FID': 'ORIG_FID', 'Shape_Leng': 'Shape_Leng', 'MajorityLM': 'MajorityLM', 'SecondLM': 'SecondLM', 'PrimConsRe': 'PrimConsRe', 'SecConsRec': 'SecConsRec', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_OregonDFWConservationOpportunityAreas_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COA_ID': 'COA_ID', 'COA_name': 'COA_name', 'Centroid_E': 'Centroid_E', 'Size_SqMil': 'Size_SqMil', 'size_acres': 'size_acres', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_TECHINDUSTRIESLTD_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_ROCKYMOUNTAINPROSPECTORSLLC_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_RICKKEELMCCLINTICKLVGTRUST_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_OREGONENERGYLLC_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_NEVADASELECTROYALTYINC_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_METALSSEARCHLLC_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_LITHIUMVALLEYHOLDINGSCORP_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_LITHIUMNEVADALLC_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_KVPROJECTLLC_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_HITECHMINERALSINCHITECHMINERALSINC_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_GOLDCANYONRESOURCESUSAINC_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_FMSLITHIUMCORPORATION_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_CORDEROMINEINC_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_AMERICANINNOVATIVEMINERALSLLC_22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_AMERICANCOLLOIDCO_23.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CSE_NAME': 'CSE_NAME', 'STAGE_ID': 'STAGE_ID', 'BLM_PROD': 'BLM_PROD', 'CSE_TYPE_NR': 'CSE_TYPE_NR', 'serial_number': 'serial_number', 'LEG_CSE_NR': 'LEG_CSE_NR', 'SF_ID': 'SF_ID', 'CSE_DISP': 'CSE_DISP', 'SRC': 'SRC', 'QLTY': 'QLTY', 'CSE_META': 'CSE_META', 'RCRD_ACRS': 'RCRD_ACRS', 'Created': 'Created', 'Modified': 'Modified', 'Shape__Length': 'Shape__Length', 'Shape__Area': 'Shape__Area', 'Shape': 'Shape', 'legacy_lead_file_number': 'legacy_lead_file_number', 'claim_name': 'claim_name', 'date_of_location': 'date_of_location', 'closed_date': 'closed_date', 'next_pmt_due_date': 'next_pmt_due_date', 'legacy_serial_number': 'legacy_serial_number', 'case_disposition': 'case_disposition', 'lead_file_number': 'lead_file_number', 'section': 'section', 'meridian_township_range': 'meridian_township_range', 'subdivision': 'subdivision', 'case_land_remarks': 'case_land_remarks', 'admin_state': 'admin_state', 'field_office': 'field_office', 'geo_state': 'geo_state', 'county': 'county', 'claim_type': 'claim_type', 'customer_id': 'customer_id', 'claimant': 'claimant', 'legacy_alis_customer_id': 'legacy_alis_customer_id', 'survey_type': 'survey_type', });
lyr_HiTechMcDermittCalderaExplorationProjectBoundary_24.set('fieldAliases', {'fid': 'fid', });
lyr_ThackerPassProjectandExplorationBoundariesapproximate_25.set('fieldAliases', {'fid': 'fid', });
lyr_ProjectAreas_26.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Project': 'Project', });
lyr_ConservedLands_27.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Property': 'Property', 'Acres': 'Acres', });
lyr_McDermittCalderaBoundary_29.set('fieldAliases', {'FID': 'FID', });
lyr_OregonDFWLahontanCutthroatTroutOccupiedStreams_4.set('fieldImages', {'OBJECTID': 'Range', 'fhdFtrID': 'Range', 'fhdRefID': 'Range', 'fhdRevDt': 'TextEdit', 'fhdONm': 'TextEdit', 'fhdOEnt': 'TextEdit', 'fhdSpNm': 'TextEdit', 'fhdRun': 'TextEdit', 'fhdLifeHst': 'TextEdit', 'fhdUseTy': 'TextEdit', 'fhdBasis': 'TextEdit', 'fhdStNm': 'TextEdit', 'fhdGenus': 'TextEdit', 'fhdSp': 'TextEdit', 'fhdSubSp': 'TextEdit', 'fhdOrig': 'TextEdit', 'fhdProd': 'TextEdit', 'fhdComment': 'TextEdit', 'fhdESH': 'TextEdit', 'fhdBasisD': 'TextEdit', 'fhdNMF': 'TextEdit', 'fhdBasisDt': 'TextEdit', 'fhdBasisNm': 'TextEdit', 'fhdBasisEnt': 'TextEdit', 'fhdBasisPrj': 'TextEdit', 'fhdBasisMethod': 'TextEdit', 'fhdAccess': 'TextEdit', 'fhdBarrierFtrID': 'TextEdit', 'fhdEndExtent': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_NDOWLahontanCutthroatTroutOccupiedStreams_5.set('fieldImages', {'OBJECTID': 'Range', 'Permanent_': 'TextEdit', 'FDate': 'DateTime', 'Resolution': 'Range', 'GNIS_ID': 'TextEdit', 'GNIS_Name': 'TextEdit', 'LengthKM': 'TextEdit', 'ReachCode': 'TextEdit', 'FlowDir': 'Range', 'WBArea_Per': 'TextEdit', 'FType': 'Range', 'FCode': 'Range', 'MainPath': 'Range', 'InNetwork': 'Range', 'Visibility': 'Range', 'NHDPlusID': 'TextEdit', 'VPUID': 'TextEdit', 'Enabled': 'Range', 'Pop_Name': 'TextEdit', 'InterCon_N': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_NDOWMappedPronghornHabitatandCorridors_6.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'POLY': 'TextEdit', 'BIOLOGIST': 'TextEdit', 'SPECIES': 'TextEdit', 'TYPE_OF_MO': 'TextEdit', 'MOVEMENT_O': 'TextEdit', 'MOVEMENT_T': 'TextEdit', 'REASON_FOR': 'TextEdit', 'MOVEMENT_P': 'TextEdit', 'MOVEMENT_S': 'TextEdit', 'MOVEMENT_D': 'TextEdit', 'RETURN_SEA': 'TextEdit', 'RETURN_DIR': 'TextEdit', 'PEAK_MOVEM': 'TextEdit', 'PEAK_RETUR': 'TextEdit', 'TOTAL_NUMB': 'TextEdit', 'POPULATION': 'TextEdit', 'CURRENT_TR': 'TextEdit', 'HISTORIC_T': 'TextEdit', 'REASONS_FO': 'TextEdit', 'CROSSING_E': 'TextEdit', 'POTENTIAL_': 'TextEdit', 'NOTES': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_ORDFWPriorityWildlifeConnectivityAreas_7.set('fieldImages', {'OBJECTID': 'Range', 'PWCAType': 'TextEdit', 'PWCAName': 'TextEdit', 'HexName': 'TextEdit', 'MinX': 'Range', 'MaxY': 'Range', 'ORIG_FID': 'Range', 'Shape_Leng': 'TextEdit', 'MajorityLM': 'TextEdit', 'SecondLM': 'TextEdit', 'PrimConsRe': 'TextEdit', 'SecConsRec': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_OregonDFWConservationOpportunityAreas_8.set('fieldImages', {'OBJECTID': 'Range', 'COA_ID': 'Range', 'COA_name': 'TextEdit', 'Centroid_E': 'TextEdit', 'Size_SqMil': 'TextEdit', 'size_acres': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_TECHINDUSTRIESLTD_9.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_ROCKYMOUNTAINPROSPECTORSLLC_10.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_RICKKEELMCCLINTICKLVGTRUST_11.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_OREGONENERGYLLC_12.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_NEVADASELECTROYALTYINC_13.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_METALSSEARCHLLC_14.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_LITHIUMVALLEYHOLDINGSCORP_15.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_LITHIUMNEVADALLC_16.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_KVPROJECTLLC_17.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_HITECHMINERALSINCHITECHMINERALSINC_18.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_GOLDCANYONRESOURCESUSAINC_19.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_FMSLITHIUMCORPORATION_20.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_CORDEROMINEINC_21.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_AMERICANINNOVATIVEMINERALSLLC_22.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_AMERICANCOLLOIDCO_23.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'CSE_NAME': 'TextEdit', 'STAGE_ID': 'TextEdit', 'BLM_PROD': 'TextEdit', 'CSE_TYPE_NR': 'TextEdit', 'serial_number': 'TextEdit', 'LEG_CSE_NR': 'TextEdit', 'SF_ID': 'TextEdit', 'CSE_DISP': 'TextEdit', 'SRC': 'TextEdit', 'QLTY': 'TextEdit', 'CSE_META': 'TextEdit', 'RCRD_ACRS': 'TextEdit', 'Created': 'DateTime', 'Modified': 'DateTime', 'Shape__Length': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape': 'TextEdit', 'legacy_lead_file_number': 'TextEdit', 'claim_name': 'TextEdit', 'date_of_location': 'DateTime', 'closed_date': 'TextEdit', 'next_pmt_due_date': 'DateTime', 'legacy_serial_number': 'TextEdit', 'case_disposition': 'TextEdit', 'lead_file_number': 'TextEdit', 'section': 'TextEdit', 'meridian_township_range': 'TextEdit', 'subdivision': 'TextEdit', 'case_land_remarks': 'TextEdit', 'admin_state': 'TextEdit', 'field_office': 'TextEdit', 'geo_state': 'TextEdit', 'county': 'TextEdit', 'claim_type': 'TextEdit', 'customer_id': 'TextEdit', 'claimant': 'TextEdit', 'legacy_alis_customer_id': 'TextEdit', 'survey_type': 'TextEdit', });
lyr_HiTechMcDermittCalderaExplorationProjectBoundary_24.set('fieldImages', {'fid': 'Range', });
lyr_ThackerPassProjectandExplorationBoundariesapproximate_25.set('fieldImages', {'fid': 'TextEdit', });
lyr_ProjectAreas_26.set('fieldImages', {'OBJECTID': 'TextEdit', 'Project': 'TextEdit', });
lyr_ConservedLands_27.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', 'Property': '', 'Acres': '', });
lyr_McDermittCalderaBoundary_29.set('fieldImages', {'FID': 'TextEdit', });
lyr_OregonDFWLahontanCutthroatTroutOccupiedStreams_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'fhdFtrID': 'hidden field', 'fhdRefID': 'hidden field', 'fhdRevDt': 'hidden field', 'fhdONm': 'hidden field', 'fhdOEnt': 'hidden field', 'fhdSpNm': 'hidden field', 'fhdRun': 'hidden field', 'fhdLifeHst': 'hidden field', 'fhdUseTy': 'hidden field', 'fhdBasis': 'hidden field', 'fhdStNm': 'hidden field', 'fhdGenus': 'hidden field', 'fhdSp': 'hidden field', 'fhdSubSp': 'hidden field', 'fhdOrig': 'hidden field', 'fhdProd': 'hidden field', 'fhdComment': 'hidden field', 'fhdESH': 'hidden field', 'fhdBasisD': 'hidden field', 'fhdNMF': 'hidden field', 'fhdBasisDt': 'hidden field', 'fhdBasisNm': 'hidden field', 'fhdBasisEnt': 'hidden field', 'fhdBasisPrj': 'hidden field', 'fhdBasisMethod': 'hidden field', 'fhdAccess': 'hidden field', 'fhdBarrierFtrID': 'hidden field', 'fhdEndExtent': 'hidden field', 'SHAPE_Length': 'hidden field', });
lyr_NDOWLahontanCutthroatTroutOccupiedStreams_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'Permanent_': 'hidden field', 'FDate': 'hidden field', 'Resolution': 'hidden field', 'GNIS_ID': 'hidden field', 'GNIS_Name': 'hidden field', 'LengthKM': 'hidden field', 'ReachCode': 'hidden field', 'FlowDir': 'hidden field', 'WBArea_Per': 'hidden field', 'FType': 'hidden field', 'FCode': 'hidden field', 'MainPath': 'hidden field', 'InNetwork': 'hidden field', 'Visibility': 'hidden field', 'NHDPlusID': 'hidden field', 'VPUID': 'hidden field', 'Enabled': 'hidden field', 'Pop_Name': 'hidden field', 'InterCon_N': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_NDOWMappedPronghornHabitatandCorridors_6.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'POLY': 'hidden field', 'BIOLOGIST': 'hidden field', 'SPECIES': 'hidden field', 'TYPE_OF_MO': 'hidden field', 'MOVEMENT_O': 'hidden field', 'MOVEMENT_T': 'hidden field', 'REASON_FOR': 'hidden field', 'MOVEMENT_P': 'hidden field', 'MOVEMENT_S': 'hidden field', 'MOVEMENT_D': 'hidden field', 'RETURN_SEA': 'hidden field', 'RETURN_DIR': 'hidden field', 'PEAK_MOVEM': 'hidden field', 'PEAK_RETUR': 'hidden field', 'TOTAL_NUMB': 'hidden field', 'POPULATION': 'hidden field', 'CURRENT_TR': 'hidden field', 'HISTORIC_T': 'hidden field', 'REASONS_FO': 'hidden field', 'CROSSING_E': 'hidden field', 'POTENTIAL_': 'hidden field', 'NOTES': 'hidden field', 'BUFF_DIST': 'hidden field', 'ORIG_FID': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_ORDFWPriorityWildlifeConnectivityAreas_7.set('fieldLabels', {'OBJECTID': 'no label', 'PWCAType': 'no label', 'PWCAName': 'no label', 'HexName': 'no label', 'MinX': 'no label', 'MaxY': 'no label', 'ORIG_FID': 'no label', 'Shape_Leng': 'no label', 'MajorityLM': 'no label', 'SecondLM': 'no label', 'PrimConsRe': 'no label', 'SecConsRec': 'no label', 'Shape__Area': 'no label', 'Shape__Length': 'no label', });
lyr_OregonDFWConservationOpportunityAreas_8.set('fieldLabels', {'OBJECTID': 'no label', 'COA_ID': 'no label', 'COA_name': 'no label', 'Centroid_E': 'no label', 'Size_SqMil': 'no label', 'size_acres': 'no label', 'Shape__Area': 'no label', 'Shape__Length': 'no label', });
lyr_TECHINDUSTRIESLTD_9.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_ROCKYMOUNTAINPROSPECTORSLLC_10.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_RICKKEELMCCLINTICKLVGTRUST_11.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_OREGONENERGYLLC_12.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_NEVADASELECTROYALTYINC_13.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_METALSSEARCHLLC_14.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_LITHIUMVALLEYHOLDINGSCORP_15.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_LITHIUMNEVADALLC_16.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_KVPROJECTLLC_17.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_HITECHMINERALSINCHITECHMINERALSINC_18.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_GOLDCANYONRESOURCESUSAINC_19.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_FMSLITHIUMCORPORATION_20.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_CORDEROMINEINC_21.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_AMERICANINNOVATIVEMINERALSLLC_22.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_AMERICANCOLLOIDCO_23.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CSE_NAME': 'hidden field', 'STAGE_ID': 'hidden field', 'BLM_PROD': 'hidden field', 'CSE_TYPE_NR': 'hidden field', 'serial_number': 'hidden field', 'LEG_CSE_NR': 'hidden field', 'SF_ID': 'hidden field', 'CSE_DISP': 'hidden field', 'SRC': 'hidden field', 'QLTY': 'hidden field', 'CSE_META': 'hidden field', 'RCRD_ACRS': 'hidden field', 'Created': 'hidden field', 'Modified': 'hidden field', 'Shape__Length': 'hidden field', 'Shape__Area': 'hidden field', 'Shape': 'hidden field', 'legacy_lead_file_number': 'hidden field', 'claim_name': 'hidden field', 'date_of_location': 'hidden field', 'closed_date': 'hidden field', 'next_pmt_due_date': 'hidden field', 'legacy_serial_number': 'hidden field', 'case_disposition': 'hidden field', 'lead_file_number': 'hidden field', 'section': 'hidden field', 'meridian_township_range': 'hidden field', 'subdivision': 'hidden field', 'case_land_remarks': 'hidden field', 'admin_state': 'hidden field', 'field_office': 'hidden field', 'geo_state': 'hidden field', 'county': 'hidden field', 'claim_type': 'hidden field', 'customer_id': 'hidden field', 'claimant': 'hidden field', 'legacy_alis_customer_id': 'hidden field', 'survey_type': 'hidden field', });
lyr_HiTechMcDermittCalderaExplorationProjectBoundary_24.set('fieldLabels', {'fid': 'no label', });
lyr_ThackerPassProjectandExplorationBoundariesapproximate_25.set('fieldLabels', {'fid': 'no label', });
lyr_ProjectAreas_26.set('fieldLabels', {'OBJECTID': 'no label', 'Project': 'no label', });
lyr_ConservedLands_27.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Property': 'no label', 'Acres': 'no label', });
lyr_McDermittCalderaBoundary_29.set('fieldLabels', {'FID': 'hidden field', });
lyr_McDermittCalderaBoundary_29.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});