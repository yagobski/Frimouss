/* [ ---- Frimouss Admin Panel - tables ---- ] */

	$(document).ready(function() {
		//* datatable must be rendered first
        frimouss_galery_table.init();
        //* actions for tables, datatables
        frimouss_select_row.init();
		frimouss_delete_rows.simple();
		frimouss_delete_rows.dt();
	});

	//* select all rows
	frimouss_select_row = {
		init: function() {
			$('.select_rows').click(function () {
				var tableid = $(this).data('tableid');
                $('#'+tableid).find('input[name=row_sel]').attr('checked', this.checked);
			});
		}
	};
	
	//* delete rows
	frimouss_delete_rows = {
		simple: function() {
			$(".delete_rows_simple").on('click',function (e) {
				e.preventDefault();
				var tableid = $(this).data('tableid');
                if($('input[name=row_sel]:checked', '#'+tableid).length) {
                    $.colorbox({
                        initialHeight: '0',
                        initialWidth: '0',
                        href: "#confirm_dialog",
                        inline: true,
                        opacity: '0.3',
                        onComplete: function(){
                            $('.confirm_yes').click(function(e){
                                e.preventDefault();
                                $('input[name=row_sel]:checked', '#'+tableid).closest('tr').fadeTo(300, 0, function () { 
                                    $(this).remove();
                                    $('.select_rows','#'+tableid).attr('checked',false);
                                });
                                $.colorbox.close();
                            });
                            $('.confirm_no').click(function(e){
                                e.preventDefault();
                                $.colorbox.close(); 
                            });
                        }
                    });
                }
			});
		},
        dt: function() {
			$(".delete_rows_dt").on('click',function (e) {
				e.preventDefault();
				var tableid = $(this).data('tableid'),
                    oTable = $('#'+tableid).dataTable();
                if($('input[name=row_sel]:checked', '#'+tableid).length) {
                    $.colorbox({
                        initialHeight: '0',
                        initialWidth: '0',
                        href: "#confirm_dialog",
                        inline: true,
                        opacity: '0.3',
                        onComplete: function(){
                            $('.confirm_yes').click(function(e){
                                e.preventDefault();
                                $('input[name=row_sel]:checked', oTable.fnGetNodes()).closest('tr').fadeTo(300, 0, function () {
                                    $(this).remove();
									oTable.fnDeleteRow( this );
                                    $('.select_rows','#'+tableid).attr('checked',false);
                                });
                                $.colorbox.close();
                            });
                            $('.confirm_no').click(function(e){
                                e.preventDefault();
                                $.colorbox.close(); 
                            });
                        }
                    });
                }    
			});
		}
	};
	
    //* gallery table view
    frimouss_galery_table = {
        init: function() {
           $('#dt_gal').dataTable({
				"sDom": "<'row'<'span6'<'dt_actions'>l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
               "sPaginationType": "bootstrap",
                "aaSorting": [[ 2, "asc" ]],
				"aoColumns": [
					{ "bSortable": false },
					{ "bSortable": false },
					{ "sType": "string" },
					{ "sType": "formatted-num" },
					{ "sType": "eu_date" },
					{ "bSortable": false }
				]
			});
           $('.dt_actions').html($('.dt_gal_actions').html());
        }
    };
    
    
    /* [ ---- Frimouss Admin Panel - datatables ---- ] */
    
    	$(document).ready(function() {
    		//* basic
    		frimouss_datatbles.dt_a();
    		
    		//* hideable columns
    		frimouss_datatbles.dt_b();
    		
    	});
    	
    	//* calendar
    	frimouss_datatbles = {
    		dt_a: function() {
    			$('#dt_a').dataTable({
                    "sDom": "<'row'<'span6'<'dt_actions'>l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
                    "sPaginationType": "bootstrap_alt",
                    "oLanguage": {
                        "sLengthMenu": "_MENU_ records per page"
                    }
                });
    		},
            
    		dt_b: function() {
    			function fnShowHide( iCol ) {
    				/* Get the DataTables object again - this is not a recreation, just a get of the object */
    				var oTable = $('#dt_d').dataTable();
    				 
    				var bVis = oTable.fnSettings().aoColumns[iCol].bVisible;
    				oTable.fnSetColumnVis( iCol, bVis ? false : true );
    			}
    			
    			var oTable = $('#dt_d').dataTable({
    				"sDom": "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
    				"sPaginationType": "bootstrap"
    			});
    			
    			$('#dt_d_nav').on('click','li input',function(){
    				fnShowHide( $(this).val() );
    			});
    		},
    		
    	};