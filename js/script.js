   ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [59.938631, 30.323055],
            zoom: 15
        }),

        myPlacemark1 = new ymaps.Placemark([59.938631, 30.323055], {
            balloonContent: 'Маленькая иконка'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [80, 140]],
            iconImageHref: 'img/pin.svg',
            iconImageSize: [70, 90],
            iconImageOffset: [-40, -90],
        });

    myMap.geoObjects.add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3);
}
