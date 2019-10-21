document.addEventListener('DOMContentLoaded', function () {

    var elems = document.querySelectorAll('.tabs');
    console.log(elems);
    var options = {swipeable: true, responsiveThreshold : 1920};
    var instance = M.Tabs.init(elems[1], options);


});