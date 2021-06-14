$(document).ready(
    function(){
        console.log("Document is ready!   ")
        $("body").append("This is added once document is ready for manipulation");
        $("#tag1").click(function(e){alert("called tag1"+e.target.value);});
        $("#tag2").click(function(e){alert("called tag2"+e.target.value);});
        $("#tag3").click(function(e){alert("called tag3"+e.target.value);});
        $("#tag4").click(function(e){alert("called tag4"+e.target.value);});
        $("#tag5").click(function(e){alert("called tag5"+e.target.value);});
    }
)