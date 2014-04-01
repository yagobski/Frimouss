/* [ ---- Frimouss Admin Panel - extended form elements ---- ] */

	$(document).ready(function() {
			
	
		//* masked inputs
		frimouss_mask_input.init();
		//* datepicker
		frimouss_datepicker.init();
		//* timepicker
		frimouss_timepicker.init();
		//* words, characters limit for textarea
		frimouss_limiter.init();
		//* autosize for textareas
		frimouss_auto_expand.init();
        //* tag handler for inputs
		frimouss_tag_handler.init();
        //* input spinners
		frimouss_spinners.init();
		//* nice form elements
        frimouss_uniform.init();
		//* jQuery UI sliders
		frimouss_sliders.init();
		
		//* 2col multiselect
		frimouss_multiselect.init();
		//* enhanced select
		frimouss_chosen.init();
		//* WYSIWG editor
        frimouss_wysiwg.init();
        //* multiupload
        frimouss_multiupload.init();
		//* colorpicker
		frimouss_colorpicker.init();
	
	//* show all elements & remove preloader
	setTimeout('$("html").removeClass("js")',1000);
	
	// DATE RANGE PICKER
	
	
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
		
		$('.open_modal_form').click(function(e) {
			$.colorbox({
				href: '#modal_form',
				inline: true,
				opacity: '0.2',
				fixed: true,
				scrolling: false
			});
			e.preventDefault();
		})
		
		//* password strength checker
		frimouss_pass_check.init();
		
	});
	
	//* masked input
	frimouss_mask_input = {
		init: function() {
			$("#mask_date").inputmask("99/99/9999",{placeholder:"dd/mm/yyyy"});
			$("#mask_phone").inputmask("(999) 999-9999");
			$("#mask_ssn").inputmask("999-99-9999");
			$("#mask_product").inputmask("AA-999-A999");
		}
	};
	
	//* bootstrap datepicker
	frimouss_datepicker = {
		init: function() {
			$('#dp1').datepicker();
			$('#dp2').datepicker();
			
			$('#dp_start').datepicker({format: "mm/dd/yyyy"}).on('changeDate', function(ev){
				var dateText = $(this).data('date');
				
				var endDateTextBox = $('#dp_end input');
				if (endDateTextBox.val() != '') {
					var testStartDate = new Date(dateText);
					var testEndDate = new Date(endDateTextBox.val());
					if (testStartDate > testEndDate) {
						endDateTextBox.val(dateText);
					}
				}
				else {
					endDateTextBox.val(dateText);
				};
				$('#dp_end').datepicker('setStartDate', dateText);
				$('#dp_start').datepicker('hide');
			});
			$('#dp_end').datepicker({format: "mm/dd/yyyy"}).on('changeDate', function(ev){
				var dateText = $(this).data('date');
				var startDateTextBox = $('#dp_start input');
				if (startDateTextBox.val() != '') {
					var testStartDate = new Date(startDateTextBox.val());
					var testEndDate = new Date(dateText);
					if (testStartDate > testEndDate) {
						startDateTextBox.val(dateText);
					}
				}
				else {
					startDateTextBox.val(dateText);
				};
				$('#dp_start').datepicker('setEndDate', dateText);
				$('#dp_end').datepicker('hide');
			});
			$('#dp_modal').datepicker();
		}
	};
	
	//* bootstrap timepicker
	frimouss_timepicker = {
		init: function() {
			$('#tp_1').timepicker({
				defaultTime: 'current',
				minuteStep: 10,
				disableFocus: true,
				template: 'modal',
				showMeridian: false
			});
			$('#tp_2').timepicker({
				defaultTime: 'current',
				minuteStep: 1,
				disableFocus: true,
				template: 'dropdown'
			});
			$('#tp_modal').timepicker({
				defaultTime: 'current',
				minuteStep: 1,
				disableFocus: true,
				template: 'dropdown'
			});
		}
	};
	
	//* textarea limiter
	frimouss_limiter = {
		init: function(){
			$("#txtarea_limit_chars").counter({
				goal: 120
			});
			$("#txtarea_limit_words").counter({
				goal: 20,
				type: 'word'
			});
		}
	};
	
	//* textarea autosize
	frimouss_auto_expand = {
		init: function() {
			$('#auto_expand').autosize();
		}
	};
    
    //* tag handler
	frimouss_tag_handler = {
		init: function() {
			$("#array_tag_handler").tagHandler({
				assignedTags: [ 'C', 'Perl', 'PHP' ],
				availableTags: [ 'C', 'C++', 'C#', 'Java', 'Perl', 'PHP', 'Python' ],
				autocomplete: true
			});
			$("#max_tags_tag_handler").tagHandler({
				assignedTags: [ 'Perl' ],
				availableTags: [ 'C', 'C++', 'C#', 'Java', 'Perl', 'PHP', 'Python' ],
				autocomplete: true,
				maxTags:5
			});
		}
	};

	//* spinners
	frimouss_spinners = {
		init: function() {
			$("#sp_basic").spinner();
			$("#sp_dec").spinner({
				decimals: 2,
				stepping: 0.25
			});
			$("#sp_currency").spinner({
				currency: '$',
				max: 20,
				min: 2
			});
			$("#sp_list").spinner();
			$("#sp_users").spinner({
				format: ' <a href="%(url)">%(title)</a>',
				items: [
                    {url: "mailto:laurat@example3.com", title: "Laura Taggart"},
                    {url: "mailto:charlesb@example3.com", title: "Charles Bledsoe"},
                    {url: "mailto:johnd@example1.com", title: "John Doe"},
                    {url: "mailto:kmiller@example1.com", title: "Kate Miller"},
                    {url: "mailto:jamesv@example2.com", title: "James Vandenberg"},
                    {url: "mailto:wnedyp@example1.com", title: "Wendy Proto"},
                    {url: "mailto:ericc@example4.com", title: "Eric Cantrell"},
                    {url: "mailto:yveso@example2.com", title: "Yves Ouellet"}
                ]
			});
		}
	};
    
    //* uniform
    frimouss_uniform = {
		init: function() {
            $(".uni_style").uniform();
        }
    };
	

	//* sliders
	frimouss_sliders = {
		init: function(){
			
			/* ---------- Custom Slider ---------- */
					$(".sliderSimple").slider();
			
					$(".sliderMin").slider({
						range: "min",
						value: 180,
						min: 1,
						max: 700,
						slide: function( event, ui ) {
							$( ".sliderMinLabel" ).html( "$" + ui.value );
						}
					});
			
					$(".sliderMin-1").slider({
						range: "min",
						value: 50,
						min: 1,
						max: 700,
						slide: function( event, ui ) {
							$( ".sliderMin1Label" ).html( "$" + ui.value );
						}
					});
			
					$(".sliderMin-2").slider({
						range: "min",
						value: 100,
						min: 1,
						max: 700,
						slide: function( event, ui ) {
							$( ".sliderMin2Label" ).html( "$" + ui.value );
						}
					});
			
					$(".sliderMin-3").slider({
						range: "min",
						value: 150,
						min: 1,
						max: 700,
						slide: function( event, ui ) {
							$( ".sliderMin3Label" ).html( "$" + ui.value );
						}
					});
			
					$(".sliderMin-4").slider({
						range: "min",
						value: 250,
						min: 1,
						max: 700,
						slide: function( event, ui ) {
							$( ".sliderMin4Label" ).html( "$" + ui.value );
						}
					});
			
					$(".sliderMin-5").slider({
						range: "min",
						value: 350,
						min: 1,
						max: 700,
						slide: function( event, ui ) {
							$( ".sliderLabel" ).html( "$" + ui.value );
						}
					});
					
					$(".sliderMin-6").slider({
						range: "min",
						value: 450,
						min: 1,
						max: 700,
						slide: function( event, ui ) {
							$( ".sliderLabel" ).html( "$" + ui.value );
						}
					});
					
					$(".sliderMin-7").slider({
						range: "min",
						value: 550,
						min: 1,
						max: 700,
						slide: function( event, ui ) {
							$( ".sliderLabel" ).html( "$" + ui.value );
						}
					});
					
					$(".sliderMin-8").slider({
						range: "min",
						value: 650,
						min: 1,
						max: 700,
						slide: function( event, ui ) {
							$( ".sliderLabel" ).html( "$" + ui.value );
						}
					});
					
					
					$(".sliderMax").slider({
						range: "max",
						value: 280,
						min: 1,
						max: 700,
						slide: function( event, ui ) {
							$( ".sliderMaxLabel" ).html( "$" + ui.value );
						}
					});
			
					$( ".sliderRange" ).slider({
						range: true,
						min: 0,
						max: 500,
						values: [ 192, 470 ],
						slide: function( event, ui ) {
							$( ".sliderRangeLabel" ).html( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
						}
					});
			
					$( "#sliderVertical-1" ).slider({
						orientation: "vertical",
						range: "min",
						min: 0,
						max: 100,
						value: 60,
					});
			
					$( "#sliderVertical-2" ).slider({
						orientation: "vertical",
						range: "min",
						min: 0,
						max: 100,
						value: 40,
					});
			
					$( "#sliderVertical-3" ).slider({
						orientation: "vertical",
						range: "min",
						min: 0,
						max: 100,
						value: 30,
					});
			
					$( "#sliderVertical-4" ).slider({
						orientation: "vertical",
						range: "min",
						min: 0,
						max: 100,
						value: 15,
					});
			
					$( "#sliderVertical-5" ).slider({
						orientation: "vertical",
						range: "min",
						min: 0,
						max: 100,
						value: 40,
					});
			
					$( "#sliderVertical-6" ).slider({
						orientation: "vertical",
						range: "min",
						min: 0,
						max: 100,
						value: 80,
					});
					
					$( "#sliderVertical-7" ).slider({
						orientation: "vertical",
						range: "min",
						min: 0,
						max: 100,
						value: 60,
					});
			
					$( "#sliderVertical-8" ).slider({
						orientation: "vertical",
						range: "min",
						min: 0,
						max: 100,
						value: 40,
					});
			
					$( "#sliderVertical-9" ).slider({
						orientation: "vertical",
						range: "min",
						min: 0,
						max: 100,
						value: 30,
					});
			
					$( "#sliderVertical-10" ).slider({
						orientation: "vertical",
						range: "min",
						min: 0,
						max: 100,
						value: 15,
					});
			
					$( "#sliderVertical-11" ).slider({
						orientation: "vertical",
						range: "min",
						min: 0,
						max: 100,
						value: 40,
					});
			
					$( "#sliderVertical-12" ).slider({
						orientation: "vertical",
						range: "min",
						min: 0,
						max: 100,
						value: 80,
					});
				
		}
	};
	
	//* multiselect
	frimouss_multiselect = {
		init: function(){
			
			$('.multiselect').multiSelect({
				selectableHeader	: '<h4>Selectable Items</h4>',
				selectedHeader		: '<h4>Selected Items</h4>'
			});
			$('#ms-optgroup .ms-selectable, #ms-outsideCountries .ms-selectable').find('li.ms-elem-selectable').hide();
			$('.ms-optgroup-label').click(function(){
				if ($(this).hasClass('ms-collapse')){
					$(this).nextAll('li').hide();
					$(this).removeClass('ms-collapse'); 
				} else {
					$(this).nextAll('li:not(.ms-selected)').show();
					$(this).addClass('ms-collapse');
				}
			});
		  
			$('#searchable-form').multiSelect({
				selectableHeader : '<input type="text" id="multi_search" autocomplete="off" placeholder="search" />',
				selectedHeader	 : '<a href="javascript:void(0)" id="sForm_deselect" class="btn">Deselect All</a>'
			});
		
			$('input#multi_search').quicksearch('#ms-searchable-form .ms-selectable li');
			$('#searchable-form').multiSelect();
			
			$('#select_all').on('click', function(){
				$('.multiselect').multiSelect('select_all');
				return false;
			});
			
			$('#deselect_all').on('click', function(){
				$('.multiselect').multiSelect('deselect_all');
				return false;
			});
			
			$('#sForm_deselect').on('click', function(){
				$('#searchable-form').multiSelect('deselect_all');
				return false;
			});

		}
	};
	
	//* enhanced select elements
	frimouss_chosen = {
		init: function(){
			$(".chzn_a").chosen({
				allow_single_deselect: true
			});
			$(".chzn_b").chosen();
		}
	};
    
    //* TinyMce
	frimouss_wysiwg = {
		init: function(){
			// File Browser
            function openKCFinder(field_name, url, type, win) {
                alert("Field_Name: " + field_name + "nURL: " + url + "nType: " + type + "nWin: " + win); // debug/testing
                tinyMCE.activeEditor.windowManager.open({
                    file: '/file-manager/browse.php?opener=tinymce&type=' + type,
                    title: 'KCFinder',
                    width: 700,
                    height: 500,
                    resizable: "yes",
                    inline: true,
                    close_previous: "no",
                    popup_css: false
                }, {
                    window: win,
                    input: field_name
                });
                return false;
            };
            
            $('textarea#wysiwg_bootstrap').wysihtml5();
            $('textarea#wysiwg_full').tinymce({
                // Location of TinyMCE script
                script_url 							: 'lib/tiny_mce/tiny_mce.js',
                // General options
                theme 								: "advanced",
                plugins 							: "autoresize,style,table,advhr,advimage,advlink,emotions,inlinepopups,preview,media,contextmenu,paste,fullscreen,noneditable,xhtmlxtras,template,advlist",
                // Theme options
                theme_advanced_buttons1 			: "undo,redo,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,fontselect,fontsizeselect",
                theme_advanced_buttons2 			: "forecolor,backcolor,|,cut,copy,paste,pastetext,|,bullist,numlist,link,image,media,|,code,preview,fullscreen",
                theme_advanced_buttons3 			: "",
                theme_advanced_toolbar_location 	: "top",
                theme_advanced_toolbar_align 		: "left",
                theme_advanced_statusbar_location 	: "bottom",
                theme_advanced_resizing 			: false,
                font_size_style_values 				: "8pt,10px,12pt,14pt,18pt,24pt,36pt",
                init_instance_callback				: function(){
                    function resizeWidth() {
                        document.getElementById(tinyMCE.activeEditor.id+'_tbl').style.width='100%';
                    }
                    resizeWidth();
                    $(window).resize(function() {
                        resizeWidth();
                    })
                },
                // file browser
                file_browser_callback: function openKCFinder(field_name, url, type, win) {
                    tinyMCE.activeEditor.windowManager.open({
                        file: 'file-manager/browse.php?opener=tinymce&type=' + type + '&dir=image/themeforest_assets',
                        title: 'KCFinder',
                        width: 700,
                        height: 500,
                        resizable: "yes",
                        inline: true,
                        close_previous: "no",
                        popup_css: false
                    }, {
                        window: win,
                        input: field_name
                    });
                    return false;
                }
            });
		}
	};
    
	//* drag&drop multi-upload
    frimouss_multiupload = {
        init: function() {
            $("#multi_upload").pluploadQueue({
                // General settings
                runtimes : 'html5,flash,silverlight',
                url : 'lib/plupload/examples/upload.php',
                max_file_size : '10mb',
                chunk_size : '1mb',
                unique_names : true,
                browse_button : 'pickfiles',
        
                // Specify what files to browse for
                filters : [
                    {title : "Image files", extensions : "jpg,gif,png"},
                    {title : "Zip files", extensions : "zip"}
                ],
        
                // Flash settings
                flash_swf_url : 'lib/plupload/js/plupload.flash.swf',
        
                // Silverlight settings
                silverlight_xap_url : 'lib/plupload/js/plupload.silverlight.xap'
            });
        }
    };
	
	//* colorpicker
	frimouss_colorpicker = {
		init: function(){
			$('#cp1').colorpicker({
				format: 'hex'
			});
			$('#cp2').colorpicker();
			$('#cp3').colorpicker();
			
			$('#cp_modal').colorpicker();
		}
	};
	
	//* password strength checker
	frimouss_pass_check = {
		init: function() {
			$("#pass_check").complexify({
					minimumChars: '6',
					strengthScaleFactor: '0.8'
				}, function (valid, complexity) {
				if (!valid) {
					$('#pass_progress .bar').css({'width':complexity + '%'}).parent().removeClass('progress-success').addClass('progress-danger');
				} else {
					$('#pass_progress .bar').css({'width':complexity + '%'}).parent().removeClass('progress-danger').addClass('progress-success');
				}
			});
		}
	};
	
	