$(document).ready(function(){
    $('#DDS').show();
    $('#DRM').hide();
  
    $('#DOR').hide();
    $('#DPN').hide();
    $('#DOS').hide();
    $('#DOC').hide();
    $('#DORM').hide();
    $('#DS').click(function(){
        $('#DDS').show();
        $('#DRM').hide();
       
        $('#DOR').hide();
        $('#DPN').hide();
        $('#DOS').hide();
        $('#DOC').hide();
        $('#DORM').hide();
   
    });
    
    $('#RM').click(function(){
        $('#DRM').show();
        $('#DDS').hide();
        $('#DOR').hide();
        $('#DPN').hide();
        $('#DOS').hide();
        $('#DOC').hide();
        $('#DORM').hide();
    });

    $("#OJR").click(function(){
        $('#DRM').hide();
        $('#DDS').hide();
        $('#DOR').show();
        $('#DPN').hide();
        $('#DOS').hide();
        $('#DOC').hide();
        $('#DORM').hide();
    });

    $("#PN").click(function(){
        $('#DRM').hide();
        $('#DDS').hide();
        $('#DOR').hide();
        $('#DPN').show();
        $('#DOS').hide();
        $('#DOC').hide();
        $('#DORM').hide();
    });

    $("#SU").click(function(){
        $('#DRM').hide();
        $('#DDS').hide();
        $('#DOR').hide();
        $('#DPN').hide();
        $('#DOS').show();
        $('#DOC').hide();
        $('#DORM').hide();
    });
    
    $("#CA").click(function(){
        $('#DRM').hide();
        $('#DDS').hide();
        $('#DOR').hide();
        $('#DPN').hide();
        $('#DOS').hide();
        $('#DOC').show();
        $('#DORM').hide();
    });
    
    $("#REM").click(function(){
        $('#DRM').hide();
        $('#DDS').hide();
        $('#DOR').hide();
        $('#DPN').hide();
        $('#DOS').hide();
        $('#DOC').hide();
        $('#DORM').show();
    });

    
});