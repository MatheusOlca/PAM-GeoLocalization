var app = {

    initialize: function() {

        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    
    },

    onDeviceReady: function() {

        alert('onDeviceReady: function() {...}');
        this.receivedEvent('deviceready');
        navigator.geolocation.getCurrentPosition(
            this.onGeoLocalizationSuccess,
            this.onGeoLocalizationError,
            { timeout: 120000 }
        );

    },

    receivedEvent: function(id){
    },

    onGeoLocalizationSuccess: function(position){

        alert('onGeoLocalizationSuccess: function(pos) {...');
        alert(
            'Latitude: '            + position.coords.latitude          + '\n' +
            'Longitude: '           + position.coords.longitude         + '\n' +
            'Altitude: '            + position.coords.altitude          + '\n' +
            'Accuracy: '            + position.coords.accuracy          + '\n' +
            'Altitude Accurace: '   + position.coords.altitudeAccuracy  + '\n' +
            'Heading: '             + position.coords.heading           + '\n' +
            'Speed: '               + position.coords.speed             + '\n' +
            'Timestamp: '            + position.coords.timestamp        + '\n'
        );

        document.getElementById('lat').value = position.coords.latitude;
        document.getElementById('lng').value = position.coords.longitude;

    },

    onGeoLocalizationError: function(err){

        alert("onGeoLocalizationError: function(err){...");
        alert(err.code + " " + err.message);

    }

};

app.initialize();