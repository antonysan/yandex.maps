# Подключение карты и кастомного маркера
### Содержание HTML 
``` HTML
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Быстрый старт. Размещение интерактивной карты на странице</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

</head>

<body>
    <div id="map" style="width: 1200px; height: 400px"></div>
    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript">
    </script>
    <script src="js/script.js" type="text/javascript">
    </script>
</body>

</html>

```
---
### Содержание script.js
``` Javascript
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

``` 
---
`center:`  — Координаты для центрирования карты.<br>
`zoom: 15` — Уровень приближения к центру карты.<br>

``` Javascript 

    var myMap = new ymaps.Map('map', {
            center: [59.938631, 30.323055],
            zoom: 15
        }),

```

### В качестве иконки метки можно установить собственное изображение. Для этого необходимо задать следующие опции: ###

`iconLayout` — значение 'default#image' или 'default#imageWithContent' для меток соответственно без текста и с текстом поверх картинки;<br>
`iconImageHref` — URL графического файла значка;<br>
`iconImageSize` — размер значка в пикселах;<br>
`iconImageOffset` — сдвиг значка в пикселах относительно точки привязки (задаётся, если "ножка" значка не находится в левом верхнем углу изображения;<br>
`iconContentOffset` — для меток с текстом сдвиг текста относительно точки привязки метки.<br>

``` Javascript 

        myPlacemark1 = new ymaps.Placemark([59.938631, 30.323055], {
            balloonContent: 'Маленькая иконка'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [80, 140]],
            iconImageHref: 'img/pin.svg',
            iconImageSize: [70, 90],
            iconImageOffset: [-40, -90],
        });


```
Оригинальная ссылка на
[Ссылка на оригинальную статью](https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/geoobjects-docpage/#icon-style)
