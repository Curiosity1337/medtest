function initMap() {
    var coordinates = {lat: 59.904097, lng: 29.089236},

        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 10,
            disableDefaultUI: true,
            scrollwheel: true
        });
    marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        animation: google.maps.Animation.BOUNCE
    });
}