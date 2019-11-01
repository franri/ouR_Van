document.addEventListener('DOMContentLoaded', function () {

    var elemsTabs = document.querySelectorAll('.tabs');
    var optionsTabs = {swipeable: true};
    var instanceTabs = M.Tabs.init(elemsTabs[1], optionsTabs);
    
     var elemsCar = document.querySelectorAll('.carousel');
     var optionsCar = {duration: 200, swipeable: true, dist: 0, padding: 0, fullWidth: false, indicators: true, numVisible: 5}; 
     var instancesCar = M.Carousel.init(elemsCar[0], optionsCar);
    

});

window.onresize = function(){location.reload();};