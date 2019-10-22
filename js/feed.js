document.addEventListener('DOMContentLoaded', function () {

    var elemsTabs = document.querySelectorAll('.tabs');
    var optionsSwipeable = {swipeable: true};
    var instanceSwipTabs = M.Tabs.init(elemsTabs[1], optionsSwipeable);

    var elemsCar = document.querySelectorAll('.carousel');
    var optionsCar = {duration: 200}; 
    var instancesCar = M.Carousel.init(elemsCar[2], optionsCar);
    console.log(elemsCar);

});