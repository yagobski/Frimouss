/* [ ---- Frimouss Admin Panel - dashboard ---- ] */

	$(document).ready(function() {
		//* shota charts
		frimouss_peity.init();		
		//* charts
		dashboard_B_chart.chartOrders ();
		dashboard_B_chart.chartAmounts ();
		//* sortable/searchable list
		frimouss_flist.init();
		//* calendar
		frimouss_calendar.init();
		//* responsive table
		frimouss_media_table.init();
		//* resize elements on window resize
		var lastWindowHeight = $(window).height();
		var lastWindowWidth = $(window).width();
		$(window).on("debouncedresize",function() {
			if($(window).height()!=lastWindowHeight || $(window).width()!=lastWindowWidth){
				lastWindowHeight = $(window).height();
				lastWindowWidth = $(window).width();
				//* rebuild calendar
				$('#calendar').fullCalendar('render');
			}
		});
		//* small gallery grid
        frimouss_gal_grid.small();
        
        $('.scroller')
            .niceScroll({
        		cursoropacitymax: 0.7,
        		cursorborderradius: 6,
        		cursorwidth: "5px"
        	});
        $('#analytics').daterangepicker(
                             {
                                ranges: {
                                   'Today': ['today', 'today'],
                                   'Yesterday': ['yesterday', 'yesterday'],
                                   'Last 7 Days': [Date.today().add({ days: -6 }), 'today'],
                                   'Last 30 Days': [Date.today().add({ days: -29 }), 'today'],
                                   'This Month': [Date.today().moveToFirstDayOfMonth(), Date.today().moveToLastDayOfMonth()],
                                   'Last Month': [Date.today().moveToFirstDayOfMonth().add({ months: -1 }), Date.today().moveToFirstDayOfMonth().add({ days: -1 })]
                                },
                                opens: 'left',
                                format: 'MM/dd/yyyy',
                                separator: ' to ',
                                startDate: Date.today().add({ days: -29 }),
                                endDate: Date.today(),
                                minDate: '01/01/2012',
                                maxDate: '12/31/2013',
                                locale: {
                                    applyLabel: 'Submit',
                                    fromLabel: 'From',
                                    toLabel: 'To',
                                    customRangeLabel: 'Custom Range',
                                    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
                                    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                                    firstDay: 1
                                },
                                showWeekNumbers: true,
                                buttonClasses: ['']
                             }, 
                             function(start, end) {
                                $('#analytics span').html(start.toString('MMMM d, yyyy') + ' - ' + end.toString('MMMM d, yyyy'));
                             }
                          );
        
                          //Set the initial state of the picker label
                          $('#analytics span').html(Date.today().add({ days: -29 }).toString('MMMM d, yyyy') + ' - ' + Date.today().toString('MMMM d, yyyy'));
        
        
        //generate random number for charts
        randNum = function(){
        	//return Math.floor(Math.random()*101);
        	return (Math.floor( Math.random()* (1+40-20) ) ) + 20;
        }
        
        var chartColours = ['#88bbc8', '#ed7a53', '#9FC569', '#bbdce3', '#9a3b1b', '#5a8022', '#2c7282', '#5a8022'];
        
        //sparklines (making loop with random data for all 7 sparkline)
        i=1;
        for (i=1; i<9; i++) {
         	var data = [[1, 3+randNum()], [2, 5+randNum()], [3, 8+randNum()], [4, 11+randNum()],[5, 14+randNum()],[6, 17+randNum()],[7, 20+randNum()], [8, 15+randNum()], [9, 18+randNum()], [10, 22+randNum()]];
         	placeholder = '.sparkLine' + i;
        	$(placeholder).sparkline(data, { 
        		width: 100,//Width of the chart - Defaults to 'auto' - May be any valid css width - 1.5em, 20px, etc (using a number without a unit specifier won't do what you want) - This option does nothing for bar and tristate chars (see barWidth)
        		height: 30,//Height of the chart - Defaults to 'auto' (line height of the containing tag)
        		lineColor: '#0088CC',//Used by line and discrete charts to specify the colour of the line drawn as a CSS values string
        		fillColor: '#f2f2f2',//Specify the colour used to fill the area under the graph as a CSS value. Set to false to disable fill
        		spotColor: '#467e8c',//The CSS colour of the final value marker. Set to false or an empty string to hide it
        		maxSpotColor: '#9FC569',//The CSS colour of the marker displayed for the maximum value. Set to false or an empty string to hide it
        		minSpotColor: '#ED7A53',//The CSS colour of the marker displayed for the mimum value. Set to false or an empty string to hide it
        		spotRadius: 3,//Radius of all spot markers, In pixels (default: 1.5) - Integer
        		lineWidth: 2,//In pixels (default: 1) - Integer
        	});
        }
        
        // DEMO SPARKLINE BAR
        // ------------------------------------------------------------------------------------------------ * -->		
        		// DEMO SPARKLINE BAR POSITIVE
                // ----------------------------------------- * -->
        		$('.sparkLinePlus').sparkline([5,6,7,5,7,3,7,6,0,3,3,5,6,2,0,4,2,4,7,2,0,4], {
        				type: 'bar',
        				barColor: '#5EB95E',
        				height: '20px'
        		});
        		
        		// DEMO SPARKLINE BAR NEGATIVE
                // ----------------------------------------- * -->
        		$('.sparkLineNegative').sparkline([5,6,-7,5,7,-3,-7,-6,0,-3,3,5,6,2,0,-4,-2,4,7,2,0,-4], {
        				type: 'bar',
        				barColor: '#db6464',
        				height: '20px'
        		});
        		
        		// DEMO SPARKLINE BAR NEGATIVE
                // ----------------------------------------- * -->
        		$('.sparkLineNegativeValues').sparkline([5,6,-7,5,7,-3,-7,-6,0,-3,3,5,6,2,0,-4,-2,4,7,2,0,-4], {
        				type: 'bar',
        				barColor: '#5eb95e',
        				negBarColor: '#db6464',
        				zeroColor: '#0000bf',
        				height: '20px'
        		});
        		
        		// DEMO SPARKLINE BAR NEGATIVE
                // ----------------------------------------- * -->
        		$('.sparkLineStacked').sparkline([ [27,15],[31,18],[27,20],[4,10],[6,8],[25,22],[16,15],[17,2],[29,6],[28,17],[15,18],[21,14],[25,19],[27,13],[31,14],[27,16],[25,24],[10,15],[4,10],[6,8],[4,19],[20,7] ], {
        				type: 'bar',
        				barColor: '#1083c7',
        				stackedBarColor: ['#9FCDE9', '#1083c7'],
        				height: '20px'
        		});
        
		
		//* to top
		$().UItoTop({inDelay:200,outDelay:200,scrollSpeed: 500});
	});
	
	//* small charts
	frimouss_peity = {
		init: function() {
			$.fn.peity.defaults.line = {
				strokeWidth: 1,
				delimeter: ",",
				height: 32,
				max: null,
				min: 0,
				width: 50
			};
			$.fn.peity.defaults.bar = {
				delimeter: ",",
				height: 32,
				max: null,
				min: 0,
				width: 50
			};
			$(".p_bar_up").peity("bar",{
				colour: "#6cc334"
			});
			$(".p_bar_down").peity("bar",{
				colour: "#e11b28"
			});
			$(".p_line_up").peity("line",{
				colour: "#b4dbeb",
				strokeColour: "#3ca0ca"
			});
			$(".p_line_down").peity("line",{
				colour: "#f7bfc3",
				strokeColour: "#e11b28"
			});
		}
	};


// CHARTS SETTINGS
// ------------------------------------------------------------------------------------------------ * -->
dashboard_B_chart = {
        // Dashboard 2 Orders
        chartOrders: function () {
				var elem = $('#ordersChart');
				
				var data = [{
						label: "Orders",
						color: "#0088CC",
						data: [
								[1341014400000, 0],
								[1341018000000, 0],
								[1341021600000, 0],
								[1341025200000, 1],
								[1341028800000, 1],
								[1341032400000, 1],
								[1341036000000, 2],
								[1341039600000, 3],
								[1341043200000, 2],
								[1341046800000, 5],
								[1341050400000, 5],
								[1341054000000, 6],
								[1341057600000, 3],
								[1341059400000, 2], //12:30
								[1341061200000, 1],
								[1341064800000, 2],
								[1341065700000, 2], //14:15
								[1341068400000, 5],
								[1341072000000, 5],
								[1341073500000, 4], //16:25
								[1341073800000, 4], //16:30
								[1341075600000, 3],
								[1341079200000, 4],
								[1341082800000, 5],
								[1341083800000, 6], //19:10
								[1341086400000, 6],
								[1341090000000, 7],
								[1341093600000, 8]
						]
				}];
		
				var options = {
						series: {
								lines: {
										show: true,
										lineWidth: 3,
										fill: true
								},
								points: {
										show: false,
										radius: 3.5,
										lineWidth: 3
								},
								shadowSize: 3,
						},
						legend: {
								show: false,
						},
						xaxis: {
								mode: "time",
								font: {
										weight: "bold",
										size: 11
								},
								color: "#333",
								tickColor: "rgba(237,194,64,0.25)",
								tickLength: 5
						},
						yaxis: {
								color: "#333",
								font: {
										weight: "bold",
										size: 11
								}
						},
						grid: {
								color: "#333",
								tickColor: "rgba(0,0,0,0.03)",
								borderWidth: 0,
								// interactive stuff
								clickable: true,
								hoverable: true
						}
				};
		
				chartOrders_plot = $.plot(elem, data, options);
		
				// Create a tooltip on our chart
				elem.qtip({
						prerender: true,
						content: 'Loading...', // Use a loading message primarily
						position: {
								viewport: $(window), // Keep it visible within the window if possible
								target: 'mouse', // Position it in relation to the mouse
								adjust: {
										x: 7
								} // ...but adjust it a bit so it doesn't overlap it.
						},
						show: false, // We'll show it programatically, so no show event is needed
						style: {
								classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
								tip: false // Remove the default tip.
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
		// Dashboard 2 Amounts
		chartAmounts: function () {
				var elem = $('#amountsChart');
				
				var d3 = [
						[1341014400000, 0.00],
						[1341018000000, 0.00],
						[1341021600000, 0.00],
						[1341025200000, 0.00],
						[1341028800000, 0.00],
						[1341032400000, 0.00],
						[1341036000000, 0.00],
						[1341039600000, 0.00],
						[1341043200000, 158.70],
						[1341046800000, 0.00],
						[1341050400000, 0.00],
						[1341054000000, 245.30],
						[1341057600000, 78.00],
						[1341061200000, 169.20],
						[1341064800000, 357.33],
						[1341068400000, 0.00],
						[1341072000000, 49.50],
						[1341075600000, 576.60],
						[1341079200000, 237.00],
						[1341082800000, 111.80],
						[1341086400000, 0.00],
						[1341090000000, 0.00],
						[1341093600000, 0.00]
		
				];
				
				function dolarFormatter(v, axis) {
						return v.toFixed(axis.tickDecimals) +"$";
				}
		
				$.plot(elem, [d3], {
						legend: {
								show: false
						},
						series: {
								label: "Revenue",
								color: "#F89406",
								lines: {
										show: true,
										fill: true
								}
						},
						xaxis: {
								mode: "time",
								font: {
										weight: "bold",
										size:11
								},
								color: "#333",
								tickColor: "rgba(237,194,64,0.25)",
								tickLength: 5
						},
						yaxis: {
								tickFormatter: dolarFormatter,
								color: "#333",
								font: {
										weight: "bold",
										size:11
								}
						},
						grid: {
								color: "#333",
								tickColor: "rgba(0,0,0,0.03)",
								borderWidth: 0,
								clickable: true,
								hoverable: true
						},
				});
				
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
								content = item.series.label + ' = $' + round(item.datapoint[1]); 
								api.set('content.text', content);
								api.elements.tooltip.stop(1, 1);
								api.show(coords);
						}
				});
		}
};

	//* filterable list
	frimouss_flist = {
		init: function(){
			//*typeahead
			var list_source = [];
			$('.user_list li').each(function(){
				var search_name = $(this).find('.sl_name').text();
				//var search_email = $(this).find('.sl_email').text();
				list_source.push(search_name);
			});
			$('.user-list-search').typeahead({source: list_source, items:5});
			
			var pagingOptions = {};
			var options = {
				valueNames: [ 'sl_name', 'sl_status', 'sl_email' ],
				page: 10,
				plugins: [
					[ 'paging', {
						pagingClass	: "bottomPaging",
						innerWindow	: 1,
						left		: 1,
						right		: 1
					} ]
				]
			};
			var userList = new List('user-list', options);
			
			$('#filter-online').on('click',function() {
				$('ul.filter li').removeClass('active');
				$(this).parent('li').addClass('active');
				userList.filter(function(item) {
					if (item.values().sl_status == "online") {
						return true;
					} else {
						return false;
					}
				});
				return false;
			});
			$('#filter-offline').on('click',function() {
				$('ul.filter li').removeClass('active');
				$(this).parent('li').addClass('active');
				userList.filter(function(item) {
					if (item.values().sl_status == "offline") {
						return true;
					} else {
						return false;
					}
				});
				return false;
			});
			$('#filter-none').on('click',function() {
				$('ul.filter li').removeClass('active');
				$(this).parent('li').addClass('active');
				userList.filter();
				return false;
			});
			
			$('#user-list').on('click','.sort',function(){
					$('.sort').parent('li').removeClass('active');
					if($(this).parent('li').hasClass('active')) {
						$(this).parent('li').removeClass('active');
					} else {
						$(this).parent('li').addClass('active');
					}
				}
			);
		}
	};
	
	//* gallery grid
    frimouss_gal_grid = {
        small: function() {
            //* small gallery grid
            $('#small_grid ul').imagesLoaded(function() {
                // Prepare layout options.
                var options = {
                  autoResize: true, // This will auto-update the layout when the browser window is resized.
                  container: $('#small_grid'), // Optional, used for some extra CSS styling
                  offset: 6, // Optional, the distance between grid items
                  itemWidth: 120, // Optional, the width of a grid item (li)
				  flexibleItemWidth: false
                };
                
                // Get a reference to your grid items.
                var handler = $('#small_grid ul li');
                
                // Call the layout function.
                handler.wookmark(options);
                
                $('#small_grid ul li > a').attr('rel', 'gallery').colorbox({
                    maxWidth	: '80%',
                    maxHeight	: '80%',
                    opacity		: '0.2', 
                    loop		: false,
                    fixed		: true
                });
            });
        }
    };
    
    
	//* calendar
	frimouss_calendar = {
		init: function() {
			var date = new Date();
			var d = date.getDate();
			var m = date.getMonth();
			var y = date.getFullYear();
			var calendar = $('#calendar').fullCalendar({
				header: {
					left: 'title,today',
					center: 'prev,next',
					right: 'month,agendaWeek,agendaDay'
				},
				buttonText: {
					prev: '<i class="fontello-icon-left-2"></i>',
					next: '<i class="fontello-icon-right-2"></i>'
				},
				aspectRatio: 1.5,
				selectable: true,
				selectHelper: true,
				select: function(start, end, allDay) {
					var title = prompt('Event Title:');
					if (title) {
						calendar.fullCalendar('renderEvent',
							{
								title: title,
								start: start,
								end: end,
								allDay: allDay
							},
							true // make the event "stick"
						);
					}
					calendar.fullCalendar('unselect');
				},
				editable: true,
				theme: false,
				events: [
					{
						title: 'All Day Event',
						start: new Date(y, m, 1)
					},
					{
						title: 'Long Event',
						start: new Date(y, m, d-5),
						end: new Date(y, m, d-2)
					},
					{
						id: 999,
						title: 'Repeating Event',
						start: new Date(y, m, d-3, 16, 0),
						allDay: false
					},
					{
						id: 999,
						title: 'Repeating Event',
						start: new Date(y, m, d+4, 16, 0),
						allDay: false
					},
					{
						title: 'Meeting',
						start: new Date(y, m, d, 10, 30),
						allDay: false
					},
					{
						title: 'Lunch',
						start: new Date(y, m, d, 12, 0),
						end: new Date(y, m, d, 14, 0),
						allDay: false,
						color: '#F89406'
					},
					{
						title: 'Birthday Party',
						start: new Date(y, m, d+1, 19, 0),
						end: new Date(y, m, d+1, 22, 30),
						allDay: false,
						color: '#F89406'
					},
					{
						title: 'Click for Google',
						start: new Date(y, m, 28),
						end: new Date(y, m, 29),
						url: 'http://google.com/'
					}
				]
			})
		}
	};
	
    //* responsive tables
    frimouss_media_table = {
        init: function() {
			$('.mediaTable').mediaTable();
        }
    };
