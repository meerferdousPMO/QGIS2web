var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_camp_boundary_1 = new ol.format.GeoJSON();
var features_camp_boundary_1 = format_camp_boundary_1.readFeatures(json_camp_boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_camp_boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_camp_boundary_1.addFeatures(features_camp_boundary_1);
var lyr_camp_boundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_camp_boundary_1, 
                style: style_camp_boundary_1,
                interactive: true,
    title: 'camp_boundary<br />\
    <img src="styles/legend/camp_boundary_1_0.png" /> Camp 10<br />\
    <img src="styles/legend/camp_boundary_1_1.png" /> Camp 11<br />\
    <img src="styles/legend/camp_boundary_1_2.png" /> Camp 12<br />\
    <img src="styles/legend/camp_boundary_1_3.png" /> Camp 13<br />\
    <img src="styles/legend/camp_boundary_1_4.png" /> Camp 17<br />\
    <img src="styles/legend/camp_boundary_1_5.png" /> Camp 18<br />\
    <img src="styles/legend/camp_boundary_1_6.png" /> Camp 19<br />\
    <img src="styles/legend/camp_boundary_1_7.png" /> Camp 1E<br />\
    <img src="styles/legend/camp_boundary_1_8.png" /> Camp 1W<br />\
    <img src="styles/legend/camp_boundary_1_9.png" /> Camp 20<br />\
    <img src="styles/legend/camp_boundary_1_10.png" /> Camp 20 Extension<br />\
    <img src="styles/legend/camp_boundary_1_11.png" /> Camp 2E<br />\
    <img src="styles/legend/camp_boundary_1_12.png" /> Camp 2W<br />\
    <img src="styles/legend/camp_boundary_1_13.png" /> Camp 3<br />\
    <img src="styles/legend/camp_boundary_1_14.png" /> Camp 4<br />\
    <img src="styles/legend/camp_boundary_1_15.png" /> Camp 4 Extension<br />\
    <img src="styles/legend/camp_boundary_1_16.png" /> Camp 5<br />\
    <img src="styles/legend/camp_boundary_1_17.png" /> Camp 6<br />\
    <img src="styles/legend/camp_boundary_1_18.png" /> Camp 7<br />\
    <img src="styles/legend/camp_boundary_1_19.png" /> Camp 8E<br />\
    <img src="styles/legend/camp_boundary_1_20.png" /> Camp 8W<br />\
    <img src="styles/legend/camp_boundary_1_21.png" /> Camp 9<br />\
    <img src="styles/legend/camp_boundary_1_22.png" /> Kutupalong RC<br />\
    <img src="styles/legend/camp_boundary_1_23.png" /> <br />'
        });
var format_Camp18latrineBathroom_2 = new ol.format.GeoJSON();
var features_Camp18latrineBathroom_2 = format_Camp18latrineBathroom_2.readFeatures(json_Camp18latrineBathroom_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camp18latrineBathroom_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camp18latrineBathroom_2.addFeatures(features_Camp18latrineBathroom_2);
var lyr_Camp18latrineBathroom_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Camp18latrineBathroom_2, 
                style: style_Camp18latrineBathroom_2,
                interactive: true,
                title: '<img src="styles/legend/Camp18latrineBathroom_2.png" /> Camp18 latrine& Bathroom'
            });
var format_health_facility_3 = new ol.format.GeoJSON();
var features_health_facility_3 = format_health_facility_3.readFeatures(json_health_facility_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_health_facility_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_health_facility_3.addFeatures(features_health_facility_3);
var lyr_health_facility_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_health_facility_3, 
                style: style_health_facility_3,
                interactive: true,
                title: '<img src="styles/legend/health_facility_3.png" /> health_facility'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_camp_boundary_1.setVisible(true);lyr_Camp18latrineBathroom_2.setVisible(true);lyr_health_facility_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_camp_boundary_1,lyr_Camp18latrineBathroom_2,lyr_health_facility_3];
lyr_camp_boundary_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'District': 'District', 'Upazila': 'Upazila', 'Settlement': 'Settlement', 'Union': 'Union', 'Name_Alias': 'Name_Alias', 'SSID': 'SSID', 'SMSD__Cnam': 'SMSD__Cnam', 'NPM_Name': 'NPM_Name', 'Area_Acres': 'Area_Acres', 'PeriMe_Met': 'PeriMe_Met', 'Camp_Name': 'Camp_Name', 'Area_SqM': 'Area_SqM', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Camp18latrineBathroom_2.set('fieldAliases', {'Block': 'Block', 'Name of st': 'Name of st', 'No of latr': 'No of latr', 'No of bath': 'No of bath', 'GPS latitu': 'GPS latitu', 'GPS longit': 'GPS longit', 'Functional': 'Functional', 'Condition': 'Condition', 'ORGANISATI': 'ORGANISATI', 'Facility I': 'Facility I', 'Sector ID': 'Sector ID', 'Male (M)': 'Male (M)', 'Female (F)': 'Female (F)', 'M/F block': 'M/F block', 'Common (M&': 'Common (M&', 'Elderly/ D': 'Elderly/ D', 'Function_1': 'Function_1', 'Super stru': 'Super stru', 'Privacy of': 'Privacy of', 'lockable f': 'lockable f', 'Female / m': 'Female / m', 'Female lat': 'Female lat', 'Cyclone ti': 'Cyclone ti', 'Hand washi': 'Hand washi', 'Function_2': 'Function_2', 'Latrine ac': 'Latrine ac', 'Function_3': 'Function_3', 'Function_4': 'Function_4', 'Visibility': 'Visibility', 'Community': 'Community', 'Action to': 'Action to', 'Remarks': 'Remarks', });
lyr_health_facility_3.set('fieldAliases', {'id': 'id', });
lyr_camp_boundary_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'District': 'TextEdit', 'Upazila': 'TextEdit', 'Settlement': 'TextEdit', 'Union': 'TextEdit', 'Name_Alias': 'TextEdit', 'SSID': 'TextEdit', 'SMSD__Cnam': 'TextEdit', 'NPM_Name': 'TextEdit', 'Area_Acres': 'TextEdit', 'PeriMe_Met': 'TextEdit', 'Camp_Name': 'TextEdit', 'Area_SqM': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Camp18latrineBathroom_2.set('fieldImages', {'Block': '', 'Name of st': '', 'No of latr': '', 'No of bath': '', 'GPS latitu': '', 'GPS longit': '', 'Functional': '', 'Condition': '', 'ORGANISATI': '', 'Facility I': '', 'Sector ID': '', 'Male (M)': '', 'Female (F)': '', 'M/F block': '', 'Common (M&': '', 'Elderly/ D': '', 'Function_1': '', 'Super stru': '', 'Privacy of': '', 'lockable f': '', 'Female / m': '', 'Female lat': '', 'Cyclone ti': '', 'Hand washi': '', 'Function_2': '', 'Latrine ac': '', 'Function_3': '', 'Function_4': '', 'Visibility': '', 'Community': '', 'Action to': '', 'Remarks': '', });
lyr_health_facility_3.set('fieldImages', {'id': 'TextEdit', });
lyr_camp_boundary_1.set('fieldLabels', {'OBJECTID': 'no label', 'District': 'no label', 'Upazila': 'no label', 'Settlement': 'no label', 'Union': 'no label', 'Name_Alias': 'no label', 'SSID': 'no label', 'SMSD__Cnam': 'no label', 'NPM_Name': 'no label', 'Area_Acres': 'no label', 'PeriMe_Met': 'no label', 'Camp_Name': 'no label', 'Area_SqM': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Camp18latrineBathroom_2.set('fieldLabels', {'Block': 'no label', 'Name of st': 'no label', 'No of latr': 'no label', 'No of bath': 'no label', 'GPS latitu': 'no label', 'GPS longit': 'no label', 'Functional': 'no label', 'Condition': 'no label', 'ORGANISATI': 'no label', 'Facility I': 'no label', 'Sector ID': 'no label', 'Male (M)': 'no label', 'Female (F)': 'no label', 'M/F block': 'no label', 'Common (M&': 'no label', 'Elderly/ D': 'no label', 'Function_1': 'no label', 'Super stru': 'no label', 'Privacy of': 'no label', 'lockable f': 'no label', 'Female / m': 'no label', 'Female lat': 'no label', 'Cyclone ti': 'no label', 'Hand washi': 'no label', 'Function_2': 'no label', 'Latrine ac': 'no label', 'Function_3': 'no label', 'Function_4': 'no label', 'Visibility': 'no label', 'Community': 'no label', 'Action to': 'no label', 'Remarks': 'no label', });
lyr_health_facility_3.set('fieldLabels', {'id': 'header label', });
lyr_health_facility_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});