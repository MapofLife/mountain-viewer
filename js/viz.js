{"version":"0.1.0",
"title":"european_countries_e",
"description":null,
"url":"http://examples.cartodb.com/tables/15608",
"map_provider":"leaflet",
"bounds":[[-55.37911044801048,-181.40625],[78.49055166160312,324.84375]],
"center":"[30.751277776257812, 71.71875]",
"zoom":2,"updated_at":"2013-02-20T17:54:44+01:00",
"layers":
[{
	"options":
		{"visible":true,"type":"Tiled","urlTemplate":"https://dnv9my2eseobd.cloudfront.net/v3/cartodb.map-eeoepub0/{z}/{x}/{y}.png",
		"name":"Streets (Mapbox)",
		"className":"mapbox_streets",
		"attribution":"Mapbox <a href='http://mapbox.com/about/maps' target='_blank'>Terms &amp; Feedback</a>"},"kind":"tiled","infowindow":null,"id":14275,"order":0},{"options":{"type":"CartoDB","active":true,"query":"","opacity":0.99,"auto_bound":false,"interactivity":"cartodb_id","debug":false,"tiler_domain":"cartodb.com","tiler_port":"443","tiler_protocol":"https","sql_domain":"cartodb.com","sql_port":"443","sql_protocol":"https","extra_params":{"cache_policy":"persist","cache_buster":1356104951723},"cdn_url":"","visible":true,"style_version":"2.1.1","table_name":"european_countries_e","user_name":"examples","query_wrapper":null},"kind":"carto","infowindow":{"fields":[{"name":"area","title":true,"position":2},{"name":"gmi_cntry","title":true,"position":3},{"name":"iso_2_code","title":true,"position":4},{"name":"iso_3_code","title":true,"position":5},{"name":"name","title":true,"position":6},{"name":"name_1","title":true,"position":7},{"name":"name_12","title":true,"position":8},{"name":"pop2005","title":true,"position":9},{"name":"region","title":true,"position":10}],"template_name":"table/views/infowindow_light","template":"<div class=\"cartodb-popup\">\n  <a href=\"#close\" class=\"cartodb-popup-close-button close\">x</a>\n  <div class=\"cartodb-popup-content-wrapper\">\n    <div class=\"cartodb-popup-content\">\n      {{#content.fields}}\n        {{#title}}<h4>{{title}}</h4>{{/title}}\n        {{#value}}\n          <p {{#type}}class=\"{{ type }}\"{{/type}}>{{{ value }}}</p>\n        {{/value}}\n        {{^value}}\n          <p class=\"empty\">null</p>\n        {{/value}}\n      {{/content.fields}}\n    </div>\n  </div>\n  <div class=\"cartodb-popup-tip-container\"></div>\n</div>\n"},"id":14276,"order":1}],"overlays":[{"type":"zoom","template":"<a class=\"zoom_in\">+</a><a class=\"zoom_out\">-</a>"},{"type":"loader","template":"<div class=\"loader\"></div>"}]}