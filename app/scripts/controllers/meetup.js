'use strict';

// Controller that populates the upcoming events
// from the NewHaven.IO meet-up feed.
//
angular.module('nhvioApp')
  .controller('MeetupCtrl', ["$scope", "$http", "meetupService", function ($scope, $http, meetupService) {
	  $scope.events = [];

    // Array of Meetup.com event feeds
    var feeds = [
      {
        "eventPrefix": "primary meetup",
        "meetupUrl": "http://api.meetup.com/2/events?callback=JSON_CALLBACK&status=upcoming&order=time&limited_events=False&group_urlname=danburyio&desc=false&offset=0&photo-host=public&format=json&page=20&fields=&sig_id=13965389&sig=e5a06bd53550449466557602e1dcadcaf76d5465"
      },
      {
        "cssClass": "secondary meetup hackerspace",
        "eventPrefix": "Hackerspace: ",
        "meetupUrl": "http://api.meetup.com/2/events?status=upcoming&order=time&limited_events=False&group_urlname=Danbury-Hackerspace&desc=false&offset=0&callback=JSON_CALLBACK&photo-host=public&format=json&page=20&fields=&sig_id=13965389&sig=08b18745a5e2cea862196e5f26754eec1b13408b"
      },
      {
        "cssClass": "secondary meetup DACS",
        "eventPrefix": "DACS: ",
        "meetupUrl": "http://api.meetup.com/2/events?status=upcoming&order=time&limited_events=False&group_urlname=DACS-Danbury-CT-Computer-User-Group&desc=false&offset=0&callback=JSON_CALLBACK&photo-host=public&format=json&page=20&fields=&sig_id=13965389&sig=fbb36821d9ac87cc66f1d004f7e373b6507cdc48"
      }
    ];
    $scope.events = meetupService.getEvents(feeds);

  }]);
