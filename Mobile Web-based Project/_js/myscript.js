$(document).on("pagebeforeshow", "#jsonOut", function() {
    console.log("in document ready");
    $.getJSON("JSON.json", function(data) {
        console.log(data);
        //build a table
        $("#sdata").html("<img style=' width: 250px; float: right;' src='"+ data.pic + "'/>");
        $("#sdata").append("<table>");
        //header line 
        
        //add data records
        //create a starting point within json file
        
        $("#sdata").append("<tr>");
        $("#sdata").append("<td style='text-align:right'>Student Name: </td>");
        $("#sdata").append("<td>" + data.name + "</td>");
        
        $("#sdata").append("</tr>");
        $("#sdata").append("<tr>");
        $("#sdata").append("<td style='text-align:right'>Student Login: </td>");
        $("#sdata").append("<td>" + data.login + "</td>");
        $("#sdata").append("</tr>");
        $("#sdata").append("<tr>");
        $("#sdata").append("<td style='text-align:right'>Student Number: </td>");
        $("#sdata").append("<td>" + data.number + "</td>");
        $("#sdata").append("</tr>");
        $("#sdata").append("</table>");
        
        
        
    });
});