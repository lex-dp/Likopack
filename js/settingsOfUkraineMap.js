jQuery(document).ready(function() {

	jQuery('#ua').vectorMap(

	{

		map: 'ukraine_ru',
		backgroundColor: '',
		borderColor: '#FF9900',
		borderOpacity: 0.60,
		borderWidth: 2,
		color: '#1076C8',
		hoverColor: '#0A4C82',
		selectedColor: '#FF9900'
	}

	);
	
	
	$(".map").find("svg").css({
		width: "100%",
		height: "100%"
	});
	

	
		
	function mapBgOnHover(listNameId, mapId) {
		$(listNameId).hover(function(){		
			$(".map").find(mapId).css("fill", "red");
		},
		function(){
			$(".map").find(mapId).css("fill", "");
		});			
	}
	
	mapBgOnHover("#dnepr", "#jqvmap1_3");
	mapBgOnHover("#kiev", "#jqvmap1_9");
	mapBgOnHover("#vin", "#jqvmap1_1");
	mapBgOnHover("#vol", "#jqvmap1_2");
	mapBgOnHover("#gito", "#jqvmap1_5");
	mapBgOnHover("#zaka", "#jqvmap1_6");
	mapBgOnHover("#zap", "#jqvmap1_7");
	mapBgOnHover("#ivano-frank", "#jqvmap1_8");
	mapBgOnHover("#kir", "#jqvmap1_10");
	mapBgOnHover("#lvov", "#jqvmap1_12");
	mapBgOnHover("#niko", "#jqvmap1_13");
	mapBgOnHover("#odessa", "#jqvmap1_14");
	mapBgOnHover("#polt", "#jqvmap1_15");
	mapBgOnHover("#roven", "#jqvmap1_16");
	mapBgOnHover("#sum", "#jqvmap1_17");
	mapBgOnHover("#tern", "#jqvmap1_18");
	mapBgOnHover("#harkiv", "#jqvmap1_19");
	mapBgOnHover("#herson", "#jqvmap1_20");
	mapBgOnHover("#hmel", "#jqvmap1_21");
	mapBgOnHover("#cherkas", "#jqvmap1_22");
	mapBgOnHover("#chernig", "#jqvmap1_23");
	mapBgOnHover("#chernov", "#jqvmap1_24");
	
	
	
});
