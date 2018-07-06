function myMap() {
    var coordinates = {lat: 59.904097, lng: 29.089236},

        map = new google.maps.Map(document.getElementById('googleMap'), {
            center: coordinates,
            zoom: 17,
            disableDefaultUI: true,
            scrollwheel: true,
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#167eab"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#167eab"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#76f8c4"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#22a8e1"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "stylers": [
                        {
                            "color": "#7dccee"
                        }
                    ]
                }
            ]

        });
    marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: 'img/marker.png',
        animation: google.maps.Animation.DROP

    });

}