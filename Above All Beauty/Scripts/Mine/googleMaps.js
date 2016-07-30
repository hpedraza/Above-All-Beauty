function initialize() {

    var mapUpcoming = {
        center: new google.maps.LatLng(26.1978497, -98.2774268),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('mapUpcoming'), mapUpcoming);

    var conventionCenterMarker = new google.maps.Marker({
        position: myCenter
    });

    conventionCenterMarker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);