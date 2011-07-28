jQuery(document).ready(function() {
	   $('#searchForm').submit(function(e) {

	     e.preventDefault();
	     $.ajax({
    	   type: "GET",
    	   async: true,
    	   url: "searchGateway",
    	   data: "searchString=" + $("input:first").val(),
    	   success: function(msg){
    		   
    		   $("#response").html(
    				   
    		           "<b>" + $("count", msg).html() + "</b>"
    		     );
    	   },
	       error: function(fail){
	    	   $("#response").html(
    		           "<b>The 'Location Search' system is currently unavailable. Please try again later</b>"
    		     );
	       }	
    	 });
	   });
 });