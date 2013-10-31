/*
 *  Module Usage:
 *  1.Define global util methods
 *  2.Define util moodul, e.g. tutorialManger.
 *  3.Define global params if any
 *  
*/

var tutorialManager = (function($){

    var gestureDes = {
        "CIRCLE":"Circling with ",
        "SWIPE":"Swipe ",
        "KEYTAB":"Keytab detected",
    }

    var displayGesture = function(key,submsg){
        $(".tips span").css("color","rgb(194, 223, 156)").html(gestureDes[key] + submsg);
    }
    var displayTips = function(key){
        if(sceneExport)
            $(".tips span").css("color","white").html(sceneExport.getCurrentScene().getTips());
    }    
    return {
        displayGesture:displayGesture,
        displayTips:displayTips
    }
})(jQuery);

var globalUtil = (function(){
    var preLoad = function(url){
        if(!ifModelStarted(url)){
            startModel($("#preloadDiv iframe:first"),url);
        }
    }

    var ifModelStarted = function(url){
        return (url.indexOf("autostart=0") === -1) ? true : false;
    }

    var startModel = function($theIFrame,url){
        if(!url){
            url = $theIFrame.attr("src");
        }
        var preLoadUrl = url.replace("autostart=0","autostart=1");
        if($theIFrame.attr("src") !== preLoadUrl){
            $theIFrame.attr("src",preLoadUrl);
        }
    }


    return{
        preLoad:preLoad,
        ifModelStarted:ifModelStarted,
        startModel:startModel
    }
})();


