var appAngularjs = angular.module("app", [
  'ngRoute', // MÓDULO DE CONTROLE DAS URL/ROTAS
  'ngResource' // MÓODULO DE API PARA SOLICITAÇÕES
  ]);



appAngularjs.controller("IndexController", function ($scope,NotificationService, $rootScope) {
    $scope.message = "Waldir Mauricio Jr";

    $scope.showAlert = function () {
        NotificationService.alert("Mensagem", "Título", "Botão Ok", function () {
            $scope.message = "THIAGO EM ANGULAR!"
        })
    };

    function checkConnection() {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';

        alert('Connection type: ' + states[networkState]);
    }

    window.addEventListener("batterystatus", onBatteryStatus, true);

    function onBatteryStatus(status) {
        console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
        alert(status.level)
    }

        
  //checkConnection();

    // if (cordova.platformId == 'android') {
    //     StatusBar.backgroundColorByHexString("#333");
    // }



    $scope.alertDeviceInfo = function() {  
        var deviceInfo = ('Device Platform: ' + device.platform + 'n'      
            + 'Device Version: ' + device.version + 'n' + 'Device Model: '
                   + device.model + 'n' + 'Device UUID: ' + device.uuid + 'n');
         navigator.notification.alert(deviceInfo);
    };


    $scope.beepNotify = function() {  
        navigator.notification.beep(1);
    };

    $scope.vibrateNotify = function() { 
        for(var i = 0; i < 500; i++){
          navigator.notification.vibrate(1000);
        }   
    };

    $scope.alertGeoLocation = function() {

    var onSuccess = function(position) {

        alert('Latitude: ' + position.coords.latitude + 'n'   
         + 'Longitude: ' + position.coords.longitude + 'n'   
            + 'Altitude: ' + position.coords.altitude + 'n'
                   + 'Accuracy: ' + position.coords.accuracy + 'n'
                         + 'Altitude Accuracy: ' + position.coords.altitudeAccuracy       + 
                         'n' + 'Heading: ' + position.coords.heading + 'n'
                                + 'Timestamp: ' + position.timestamp + 'n'); };

          navigator.geolocation.getCurrentPosition(onSuccess);
      };



});


appAngularjs.constant("configAplicativo", {
    idUsuarioLogado: "Teste"
})

//ALERT PARA USUARIO
appAngularjs.factory("NotificationService", function ($rootScope) {
     return {
           alert: function (message, title, buttonText, buttonAction) {
               navigator.notification.alert(message,
                   function () {
                       $rootScope.$apply(function () {
                           buttonAction();
                       })
                   },
                   title,
                   buttonText);
           }
       }
});


// PhoneGap is ready
//
function onDeviceReady() {
    var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
    console.log(db, "Banco");
    //alert("teste")
}
