/*
 * Functions
 */

/* Takes a picture and make it the background for the block */
var funcBackgroundImageBlocks = function (blockName, imgName, bagPositionHoriz, bagPositionVertical, blockNameBackground, bagSize) {
    $(blockName).each(function(indx, element){
        var blockThumbnail = $(element).find(imgName);
        if(blockThumbnail.length){    
            $(blockThumbnail).css("display", "none");
            if($(element).find(blockNameBackground).length){
                var blockNameBack = $(element).find(blockNameBackground);    
                $(blockNameBack).css({'background-image': 'url('+$(blockThumbnail).attr('src')+')'});
                $(blockNameBack).css({'background-position': bagPositionHoriz+' '+bagPositionVertical});
                $(blockNameBack).css({'background-repeat':'no-repeat'});
                $(blockNameBack).css({'background-size':  bagSize+' '});                     
            }else {
                $(element).css({'background-image': 'url('+$(blockThumbnail).attr('src')+')'});
                $(element).css({'background-position': bagPositionHoriz+' '+bagPositionVertical});
                $(element).css({'background-repeat':'no-repeat'});
                $(element).css({'background-size': bagSize+' '});          
            }             
        }
    });   
};

/* Finding the min height among the elements */
var funcMinHeightElement = function(blockName) {
    var blockItems =  $(blockName);
    var blockItemsHeight = [];
    $(blockItems).each(function(indx, blockItem){
        blockItemsHeight.push($(blockItem).outerHeight(true));
        console.log($(blockItem).outerHeight(true));
    });  
    $(blockItems).each(function(indx, blockItem){
        $(blockItem).height(Math.min.apply(null, blockItemsHeight));
    });   
};

/* Finding the maximum height among the elements */
var funcMaxHeightElement = function(blockName) {
    var blockItems =  $(blockName);
    var blockItemsHeight = [];
    $(blockItems).each(function(indx, blockItem){
        blockItemsHeight.push($(blockItem).outerHeight(true));
    });  
    $(blockItems).each(function(indx, blockItem){
        $(blockItem).height(Math.max.apply(null, blockItemsHeight));
    });   
};