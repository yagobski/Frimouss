/* [ ---- Frimouss Admin Panel - charts ---- ] */

	$(document).ready(function() {
        //* pie chart
		frimouss_charts.fl_a();
		//* multiple axes
		frimouss_charts.fl_b();
		//* bars
		frimouss_charts.fl_c();
		//* combined
		frimouss_charts.fl_d();
		//* pyramid
		frimouss_charts.fl_e();
		//* Chart pie
		frimouss_charts.fl_h();
		frimouss_charts.fl_j();
		//* Chart Knob
		frimouss_charts.fl_k();
		
	});
	
	
	//generate random number for charts
	randNum = function () {
	        //return Math.floor(Math.random()*101);
	        return(Math.floor(Math.random() * (1 + 40 - 20))) + 20;
	}
	
	var coloursChart = ["#ed7a53", "#61ba61", "#3ca0ca", "#db6464", "#ff9933", "#009999"]
	//* charts
    frimouss_charts = {
        fl_a : function() {
			// Setup the placeholder reference
            var elem = $('#fl_a');
           var sin = [],
                                   cos = [];
                           for(var i = 0; i < 14; i += 0.5) {
                                   sin.push([i, Math.sin(i)]);
                                   cos.push([i, Math.cos(i)]);
                           }
                           var options = {
                                   legend: {
                                           position: "se"
                                   },
                                   grid: {
                                           show: true,
                                           aboveData: true,
                                           color: "#333",
                                           labelMargin: 5,
                                           axisMargin: 0,
                                           borderWidth: 0,
                                           borderColor: null,
                                           minBorderMargin: 5,
                                           clickable: true,
                                           hoverable: true,
                                           autoHighlight: true
                                   },
                                   series: {
                                           grow: {
                                                   active: false
                                           },
                                           lines: {
                                                   show: true,
                                                   fill: false,
                                                   lineWidth: 1.5,
                                                   steps: false
                                           },
                                           points: {
                                                   show: true,
                                                   radius: 3,
                                                   symbol: "circle",
                                                   fill: true,
                                                   fillColor: "#fff"
                                           }
                                   },
                                   yaxis: {
                                           font: {
                                                   weight: "bold"
                                           },
                                           color: "#333",
                                           tickColor: "rgba(0,0,0,0.05)",
                                   },
                                   xaxis: {
                                           font: {
                                                   weight: "bold"
                                           },
                                           color: "#333",
                                           tickColor: "rgba(0,0,0,0.05)",
                                   },
           
                                   colors: coloursChart,
                                   shadowSize: 1
                           };
           
                           var plot = $.plot(elem, [{
                                   label: "Sin",
                                   data: sin,
                                   lines: {}
                           }, {
                                   label: "Cos",
                                   data: cos,
                                   lines: {}
                           }], options);
           
                           // Create a tooltip on our chart
                           elem.qtip({
                                   prerender: true,
                                   content: 'Loading...',
                                   position: {
                                           viewport: $(window),
                                           target: 'mouse',
                                           adjust: {
                                                   x: 7
                                           }
                                   },
                                   show: false,
                                   style: {
                                           classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
                                           tip: false
                                   }
                           });
           
                           // Bind the plot hover
                           elem.bind("plothover", function (event, coords, item) {
                                   var self = $(this),
                                           api = $(this).qtip(),
                                           previousPoint, content,
                                           round = function (x) {
                                                   return Math.round(x * 1000) / 1000;
                                           };
                                   if(!item) {
                                           api.cache.point = false;
                                           return api.hide(event);
                                   }
                                   previousPoint = api.cache.point;
                                   if(previousPoint !== item.dataIndex) {
                                           api.cache.point = item.dataIndex;
                                           content = item.series.label + ' = ' + round(item.datapoint[1]);
                                           api.set('content.text', content);
                                           api.elements.tooltip.stop(1, 1);
                                           api.show(coords);
                                   }
                           });
           
        },
		fl_b : function() {
			// Setup the placeholder reference
            var elem = $('#fl_b');
			
			 var d1 = [
			                        [1, 3 + randNum()],
			                        [2, 6 + randNum()],
			                        [3, 9 + randNum()],
			                        [4, 12 + randNum()],
			                        [5, 15 + randNum()],
			                        [6, 18 + randNum()],
			                        [7, 21 + randNum()],
			                        [8, 15 + randNum()],
			                        [9, 18 + randNum()],
			                        [10, 21 + randNum()],
			                        [11, 24 + randNum()],
			                        [12, 27 + randNum()],
			                        [13, 30 + randNum()],
			                        [14, 33 + randNum()],
			                        [15, 24 + randNum()],
			                        [16, 27 + randNum()],
			                        [17, 30 + randNum()],
			                        [18, 33 + randNum()],
			                        [19, 36 + randNum()],
			                        [20, 39 + randNum()],
			                        [21, 42 + randNum()],
			                        [22, 45 + randNum()],
			                        [23, 36 + randNum()],
			                        [24, 39 + randNum()],
			                        [25, 42 + randNum()],
			                        [26, 45 + randNum()],
			                        [27, 38 + randNum()],
			                        [28, 51 + randNum()],
			                        [29, 55 + randNum()],
			                        [30, 50 + randNum()]
			                ];
			                var d2 = [
			                        [1, randNum() - 5],
			                        [2, randNum() - 4],
			                        [3, randNum() - 4],
			                        [4, randNum()],
			                        [5, 4 + randNum()],
			                        [6, 4 + randNum()],
			                        [7, 5 + randNum()],
			                        [8, 5 + randNum()],
			                        [9, 6 + randNum()],
			                        [10, 5 + randNum()],
			                        [11, 5 + randNum()],
			                        [12, 2 + randNum()],
			                        [13, 3 + randNum()],
			                        [14, 4 + randNum()],
			                        [15, 4 + randNum()],
			                        [16, 4 + randNum()],
			                        [17, 5 + randNum()],
			                        [18, 5 + randNum()],
			                        [19, 2 + randNum()],
			                        [20, 2 + randNum()],
			                        [21, 3 + randNum()],
			                        [22, 3 + randNum()],
			                        [23, 3 + randNum()],
			                        [24, 2 + randNum()],
			                        [25, 7 + randNum()],
			                        [26, 4 + randNum()],
			                        [27, 5 + randNum()],
			                        [28, 2 + randNum()],
			                        [29, 2 + randNum()],
			                        [30, 3 + randNum()]
			                ];
			                var options = {
			                        legend: {
			                                position: "se"
			                        },
			                        grid: {
			                                show: true,
			                                aboveData: true,
			                                color: "#000",
			                                labelMargin: 5,
			                                axisMargin: 0,
			                                borderColor: "rgba(255,255,255,0.05)",
			                                borderWidth: 0,
			                                minBorderMargin: 5,
			                                clickable: true,
			                                hoverable: true,
			                                autoHighlight: true,
			                                mouseActiveRadius: 20,
			                        },
			                        series: {
			                                lines: {
			                                        show: true,
			                                        lineWidth: 2,
			                                        fill: true
			                                },
			                                points: {
			                                        show: false
			                                },
			                                grow: {
			                                        active: true,
			                                        stepMode: "maximum",
			                                        stepDirection: "up"
			                                },
			                        },
			                        yaxis: {
			                                min: 0,
			                                font: {
			                                        weight: "bold"
			                                },
			                                color: "#333",
			                                tickColor: "rgba(0,0,0,0.05)",
			                        },
			                        xaxis: {
			                                ticks: 11,
			                                tickDecimals: 0,
			                                font: {
			                                        weight: "bold"
			                                },
			                                color: "#333",
			                                tickColor: "rgba(0,0,0,0.05)",
			                        },
			                        colors: ["#70b5dd", "#1083c7", "#1c638d"],
			                        shadowSize: 3
			                };
			
			                $.plot(elem, [{
			                        label: "Visits",
			                        data: d1,
			                        lines: {
			                                fill: true
			                        }
			                }, {
			                        label: "Unique Visits",
			                        data: d2,
			                        lines: {
			                                fillColor: "rgba(255,255,255,0.7)"
			                        }
			                }], options);
			
			                // Create a tooltip on our chart
			                elem.qtip({
			                        prerender: true,
			                        content: 'Loading...',
			                        position: {
			                                viewport: $(window),
			                                target: 'mouse',
			                                adjust: {
			                                        x: 7
			                                }
			                        },
			                        show: false,
			                        style: {
			                                classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
			                                tip: false
			                        }
			                });
			
			                // Bind the plot hover
			                elem.bind("plothover", function (event, coords, item) {
			                        var self = $(this),
			                                api = $(this).qtip(),
			                                previousPoint, content,
			                                round = function (x) {
			                                        return Math.round(x * 1000) / 1000;
			                                };
			                        if(!item) {
			                                api.cache.point = false;
			                                return api.hide(event);
			                        }
			                        previousPoint = api.cache.point;
			                        if(previousPoint !== item.dataIndex) {
			                                api.cache.point = item.dataIndex;
			                                content = item.series.label + ' = ' + round(item.datapoint[1]);
			                                api.set('content.text', content);
			                                api.elements.tooltip.stop(1, 1);
			                                api.show(coords);
			                        }
			                });
			
			        },
		
		fl_c : function() {
			var elem = $('#fl_c');
            
           // we use an inline data source in the example, usually data would
                           // be fetched from a server
                           var data = [],
                                   totalPoints = 300;
           
                           function getRandomData() {
                                   if(data.length > 0) data = data.slice(1);
           
                                   // do a random walk
                                   while(data.length < totalPoints) {
                                           var prev = data.length > 0 ? data[data.length - 1] : 50;
                                           var y = prev + Math.random() * 10 - 5;
                                           if(y < 0) y = 0;
                                           if(y > 100) y = 100;
                                           data.push(y);
                                   }
           
                                   // zip the generated y values with the x values
                                   var res = [];
                                   for(var i = 0; i < data.length; ++i)
                                   res.push([i, data[i]])
                                   return res;
                           }
           
                           // Update interval
                           var updateInterval = 200;
           
                           // setup plot
                           var options = {
                                   series: {
                                           grow: {
                                                   active: false
                                           }, //disable auto grow
                                           shadowSize: 0, // drawing is faster without shadows
                                           lines: {
                                                   show: true,
                                                   fill: true,
                                                   lineWidth: 2,
                                                   steps: false
                                           }
                                   },
                                   grid: {
                                           show: true,
                                           aboveData: false,
                                           color: "#333",
                                           labelMargin: 5,
                                           axisMargin: 0,
                                           borderWidth: 0,
                                           borderColor: null,
                                           minBorderMargin: 5,
                                           clickable: true,
                                           hoverable: true,
                                           autoHighlight: false,
                                           mouseActiveRadius: 20
                                   },
                                   colors: ["#61ba61"],
                                   yaxis: {
                                           min: 0,
                                           max: 100,
           								font: {
                                                   weight: "bold"
                                           },
                                           tickColor: "rgba(255,255,255,0.0)"
                                   },
                                   xaxis: {
                                           show: true,
           								font: {
                                                   weight: "bold"
                                           },
                                           tickColor: "rgba(255,255,255,0.0)"
                                   }
                           };
                           var plot = $.plot(elem, [getRandomData()], options);
           
                           // Create a tooltip on our chart
                           elem.qtip({
                                   prerender: true,
                                   content: 'Loading...',
                                   position: {
                                           viewport: $(window),
                                           target: 'mouse',
                                           adjust: {
                                                   x: 7
                                           }
                                   },
                                   show: false,
                                   style: {
                                           classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
                                           tip: false
                                   }
                           });
           
                           // Bind the plot hover
                           elem.bind("plothover", function (event, coords, item) {
                                   var self = $(this),
                                           api = $(this).qtip(),
                                           previousPoint, content,
                                           round = function (x) {
                                                   return Math.round(x * 1000) / 1000;
                                           };
                                   if(!item) {
                                           api.cache.point = false;
                                           return api.hide(event);
                                   }
                                   previousPoint = api.cache.point;
                                   if(previousPoint !== item.dataIndex) {
                                           api.cache.point = item.dataIndex;
                                           content = item.series.label + ' = ' + round(item.datapoint[1]);
                                           api.set('content.text', content);
                                           api.elements.tooltip.stop(1, 1);
                                           api.show(coords);
                                   }
                           });
           
                           function update() {
                                   plot.setData([getRandomData()]);
                                   // since the axes don't change, we don't need to call plot.setupGrid()
                                   plot.draw();
           
                                   setTimeout(update, updateInterval);
                           }
           
                           update();
           
                   },
               // DEMO CHART BAR FULL
        		// ----------------------------------------- * -->
        		fl_h: function () {
        				var elem = $('#statChartFlotBarFull');
        				
        				//some data
        						var d1 = [];
        					    for (var i = 0; i <= 10; i += 1)
        					        d1.push([i, parseInt(Math.random() * 30)]);
        					 
        					    var d2 = [];
        					    for (var i = 0; i <= 10; i += 1)
        					        d2.push([i, parseInt(Math.random() * 30)]);
        					 
        					    var d3 = [];
        					    for (var i = 0; i <= 10; i += 1)
        					        d3.push([i, parseInt(Math.random() * 30)]);
        					 
        					    var ds = new Array();
        					 
        					     ds.push({
        					     	label: "Data One",
        					        data:d1,
        					        bars: {order: 1}
        					    });
        					    ds.push({
        					    	label: "Data Two",
        					        data:d2,
        					        bars: {order: 2}
        					    });
        					    ds.push({
        					    	label: "Data Three",
        					        data:d3,
        					        bars: {order: 3}
        					    });
        				
        						var options = {
        								bars: {
        									show:true,
        									barWidth: 0.2,
        									fill:1
        								},
        								grid: {
        									show: true,
        								    aboveData: false,
        								    color: "#3f3f3f" ,
        								    labelMargin: 5,
        								    axisMargin: 0, 
        								    borderWidth: 0,
        								    borderColor:null,
        								    minBorderMargin: 5 ,
        								    clickable: true, 
        								    hoverable: true,
        								    autoHighlight: false,
        								    mouseActiveRadius: 20
        								},
        						        series: {
        						        	grow: {active:false}
        						        },
        						        legend: { position: "ne" },
        						        colors: coloursChart
        								}; 
        								       		
        						$.plot(elem, ds, options);
        				
        				// Create a tooltip on our chart
        				                elem.qtip({
        				                        prerender: true,
        				                        content: 'Loading...',
        				                        position: {
        				                                viewport: $(window),
        				                                target: 'mouse',
        				                                adjust: {
        				                                        x: 7
        				                                }
        				                        },
        				                        show: false,
        				                        style: {
        				                                classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
        				                                tip: false
        				                        }
        				                });
        				
        				                // Bind the plot hover
        				                elem.bind("plothover", function (event, coords, item) {
        				                        var self = $(this),
        				                                api = $(this).qtip(),
        				                                previousPoint, content,
        				                                round = function (x) {
        				                                        return Math.round(x * 1000) / 1000;
        				                                };
        				                        if(!item) {
        				                                api.cache.point = false;
        				                                return api.hide(event);
        				                        }
        				                        previousPoint = api.cache.point;
        				                        if(previousPoint !== item.dataIndex) {
        				                                api.cache.point = item.dataIndex;
        				                                content = item.series.label + ' = ' + round(item.datapoint[1]);
        				                                api.set('content.text', content);
        				                                api.elements.tooltip.stop(1, 1);
        				                                api.show(coords);
        				                        }
        				                });
        		},
        		// DEMO CHART PIE
        		// ----------------------------------------- * -->
        		fl_j: function () {
        				var elem = $('#statChartFlotDonut');
        				
        				$(function () {
        					   var data = [
        						    { label: "%78.75 New Visitor",  data: 78.75, color: "#3ca0ca"},
        						    { label: "%21.25 Returning Visitor",  data: 21.25, color: "#ed7a53"}
        						];
        						
        						$.plot($(elem), data, 
        						{
        							series: {
        								pie: { 
        									show: true,
        									highlight: {
        										opacity: 0.1
        									},
        									stroke: {
        										color: '#fff',
        										width: 3
        									},
        									startAngle: 2,
        									label: {
        										radius:1
        									}
        								},
        								grow: {	active: false},
        							},
        							legend: { 
        					        	position: "ne", 
        					        	labelBoxBorderColor: null
        					    	},
        							grid: {
        					            hoverable: true,
        					            clickable: true
        					        },
        					        
        					        
        						});
        						
        					});
        					
        					elem.qtip({
        					       prerender: true,
        					       content: 'Loading...', // Use a loading message primarily
        					       position: {
        					           viewport: $(window), // Keep it visible within the window if possible
        					           target: 'mouse', // Position it in relation to the mouse
        					           adjust: { x: 7 } // ...but adjust it a bit so it doesn't overlap it.
        					       },
        					       show: false, // We'll show it programatically, so no show event is needed
        					       style: {
        					           classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
        					           tip: false // Remove the default tip.
        					       }
        					   });
        					
        					   // Bind the plot hover
        					   elem.on('plothover', function(event, coords, item) {
        					       // Grab the API reference
        					       var self = $(this),
        					           api = $(this).qtip(),
        					           previousPoint, content,
        					
        					       // Setup a visually pleasing rounding function
        					       round = function(x) { return Math.round(x * 1000) / 1000; };
        					
        					       // If we weren't passed the item object, hide the tooltip and remove cached point data
        					       if(!item) {
        					           api.cache.point = false;
        					           return api.hide(event);
        					       }
        							
        					       // Proceed only if the data point has changed
        					       previousPoint = api.cache.point;
        					       if(previousPoint !== item.seriesIndex)
        					       {
        					           // Update the cached point data
        					           api.cache.point = item.seriesIndex;
        								
        					           // Setup new content
        					           content = item.series.label;
        					
        					           // Update the tooltip content
        					           api.set('content.text', content);
        					
        					           // Make sure we don't get problems with animations
        					           api.elements.tooltip.stop(1, 1);
        					
        					           // Show the tooltip, passing the coordinates
        					           api.show(coords);
        					       }
        					   });
        	},
		
        fl_d : function() {
			
            // Setup the placeholder reference
            var elem = $('#fl_d');

			var d1 = [
				[new Date('05/23/2012').getTime(),350],
				[new Date('05/24/2012').getTime(),422],
				[new Date('05/25/2012').getTime(),550],
				[new Date('05/26/2012').getTime(),608],
				[new Date('05/27/2012').getTime(),681],
				[new Date('05/28/2012').getTime(),591],
				[new Date('05/29/2012').getTime(),510]
			];
			
			var d2 = [
				[new Date('05/23/2012').getTime(),1200],
				[new Date('05/24/2012').getTime(),1400],
				[new Date('05/25/2012').getTime(),1500],
				[new Date('05/26/2012').getTime(),1200],
				[new Date('05/27/2012').getTime(),1340],
				[new Date('05/28/2012').getTime(),1421],
				[new Date('05/29/2012').getTime(),1510]
			];

			for (var i = 0; i < d1.length; ++i) {d1[i][0] += 60 * 120 * 1000};
			for (var i = 0; i < d2.length; ++i) {d2[i][0] += 60 * 120 * 1000};

			var options = {
				series: {
					curvedLines: { active: true }
				},
				yaxes: [
					{min: 0},
                    {position: "right"}
				],
				xaxis: {
					mode: "time",
					minTickSize: [1, "day"],
					autoscaleMargin: 0.10
					
				},
				grid: { hoverable: true },
				legend: { position: 'nw' },
				colors: [ "#8cc7e0", "#3ca0ca" ]
			};

			// Setup the flot chart using our data
            fl_d_plot = $.plot(elem,
				[
					{ 	data: d1,
						label: "Unique visitors",
						bars: {
							show: true,
							barWidth: 60 * 360 * 1000,
							align: "center",
							fill: 1
						}
					},
					{   data: d2,
                        label: "Sale",
                        curvedLines: {
                            active: true,
                            show: true,
                            lineWidth: 3
                        },
						yaxis: 2,
						points: { show: true },
						stack: null
					}
				], options);
			
            // Create a tooltip on our chart
            elem.qtip({
                prerender: true,
                content: 'Loading...', // Use a loading message primarily
                position: {
                    viewport: $(window), // Keep it visible within the window if possible
                    target: 'mouse', // Position it in relation to the mouse
                    adjust: { x: 7 } // ...but adjust it a bit so it doesn't overlap it.
                },
                show: false, // We'll show it programatically, so no show event is needed
                style: {
                    classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
                    tip: false // Remove the default tip.
                }
            });
         
            // Bind the plot hover
            elem.on('plothover', function(event, coords, item) {
                // Grab the API reference
                var self = $(this),
                    api = $(this).qtip(),
                    previousPoint, content,
         
                // Setup a visually pleasing rounding function
                round = function(x) { return Math.round(x * 1000) / 1000; };
         
                // If we weren't passed the item object, hide the tooltip and remove cached point data
                if(!item) {
                    api.cache.point = false;
                    return api.hide(event);
                }
				
                // Proceed only if the data point has changed
                previousPoint = api.cache.point;
                if(previousPoint !== item.seriesIndex)
                {
                    // Update the cached point data
                    api.cache.point = item.seriesIndex;
					
                    // Setup new content
                    content = item.series.label +': '+ round(item.datapoint[1]);
         
                    // Update the tooltip content
                    api.set('content.text', content);
         
                    // Make sure we don't get problems with animations
                    api.elements.tooltip.stop(1, 1);
         
                    // Show the tooltip, passing the coordinates
                    api.show(coords);
                }
            });
        },
        
        fl_k : function() {
        			
                  		  $('.knobST').val(0).trigger('change').delay(2000);
                          $(".knobST").knob({
                                  'min': 0,
                                  'max': 100,
                                  'readOnly': true,
                                  'dynamicDraw': true,
                                  'tickColorizeValues': true,
                                  'skin': 'tron'
                          })
                  
                          var tmr = self.setInterval(function () {
                                  myDelay()
                          }, 65);
                          var m = 0;
                  
                          function myDelay() {
                                  m += 1;
                                  $('.knobST').val(m).trigger('change');
                                  if(m == 65) {
                                          window.clearInterval(tmr);
                                  }
                          };
                  
                 
        },             
        
        fl_e : function() {
			
            // Setup the placeholder reference
            var elem = $('#fl_e');
           
            var pseries = [ {
                label: 'Men',
                data: [ ['0-4',1302329], ['5-9',2328460], ['10-14',1090872], ['15-19',1158983], ['20-24',1339972], ['25-29',1667557], ['30-34',2072016], ['35-39',2117802], ['40-44',1945472], ['45-49',1746832], ['50-54',1521581], ['55-59',1282107], ['60-64',1173175], ['65-69',990405], ['70-74',800274], ['75-79',732383], ['80-84',477597], ['85-89',241915], ['90-94',69987], ['95-99',15332], ['100+',2060] ]
            },
            {
                label: 'Women',
                data: [ ['0-4',1224757], ['5-9',1129454], ['10-14',1030163], ['15-19',1084773], ['20-24',1220879], ['25-29',1527463], ['30-34',1960767], ['35-39',2043411], ['40-44',1904849], ['45-49',1747880], ['50-54',1551797], ['55-59',1330712], ['60-64',1262386], ['65-69',1107169], ['70-74',980444], ['75-79',994168], ['80-84',764408], ['85-89',475115], ['90-94',171929], ['95-99', 40284], ['100+',5498] ],
                pyramid: {
                    direction: 'L'
                }
            } ];

			var options = {
				series: {
                    pyramid: {
                        show: true
                    }
                },
                xaxis: {
                    tickFormatter: function(v) {
                        return v/1000 + " K";
                    }
                },
                grid: {
                    hoverable: true
                },
				colors: [ "#8cc7e0", "#3ca0ca" ]
			};

            fl_e_plot = $.plot(elem, pseries, options);

            // Create a tooltip on our chart
            elem.qtip({
                prerender: true,
                content: 'Loading...', // Use a loading message primarily
                position: {
                    viewport: $(window), // Keep it visible within the window if possible
                    target: 'mouse', // Position it in relation to the mouse
                    adjust: { x: 7, y: 7 } // ...but adjust it a bit so it doesn't overlap it.
                },
                show: false, // We'll show it programatically, so no show event is needed
                style: {
                    classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
                    tip: false // Remove the default tip.
                }
            });
            
            // comma thousand separator
            // https://gist.github.com/852326#gistcomment-22591
            function dirtyCommas(num) {
                return String(num).replace(/^\d+(?=.|$)/, function(intg) { return intg.replace(/(?=(?:\d{3})+$)(?!^)/g, ","); });
            }
         
            // Bind the plot hover
            elem.on('plothover', function(event, pos, item) {
                // Grab the API reference
                var self = $(this),
                    api = $(this).qtip(),
                    previousPoint, content,
         
                // Setup a visually pleasing rounding function
                round = function(x) { return Math.round(x * 1000) / 1000; };
         
                // If we weren't passed the item object, hide the tooltip and remove cached point data
                if(!item) {
                    api.cache.point = false;
                    return api.hide(event);
                }
				
                // Proceed only if the data point has changed
                previousPoint = api.cache.point;
                if(previousPoint !== item.seriesIndex)
                {
                    // Update the cached point data
                    api.cache.point = item.seriesIndex;
					
                    var data = item.series.data[item.dataIndex];
                    var group = item.series.yaxis.ticks[data[0]].label;

                    // Setup new content
                    content = item.series.label +' with age in '+ group +' = '+ dirtyCommas(data[1]);
         
                    // Update the tooltip content
                    api.set('content.text', content);
         
                    // Make sure we don't get problems with animations
                    api.elements.tooltip.stop(1, 1);
         
                    // Show the tooltip, passing the coordinates
                    api.show(pos);
                }
            });
        
        }
    };