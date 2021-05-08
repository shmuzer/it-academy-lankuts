<script type="text/javascript">
        ymaps.ready(init);

        function init () {
            var myMap = new ymaps.Map("map", {
                    center: [37.759210, -122.444764],
                    zoom: 5
                }, {
                    searchControlProvider: 'yandex#search'
                }),
                myPlacemark = new ymaps.Placemark([37.759210, -122.444764], {
                    // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
                    balloonContentHeader: "Балун метки",
                    balloonContentBody: "Содержимое <em>балуна</em> метки",
                    balloonContentFooter: "Подвал",
                    hintContent: "Buzz-Fit Here"
                });

            myMap.geoObjects.add(myPlacemark);
        }
    </script>