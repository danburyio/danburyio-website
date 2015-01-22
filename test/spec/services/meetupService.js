'use strict';

describe('Service: MeetupService', function () {

  // load the service's module
  beforeEach(module('nhvioApp'));

  // instantiate service
  var meetupService;


  beforeEach(inject(function (_meetupService_) {
    meetupService = _meetupService_;
  }));

  afterEach(inject(function($httpBackend) {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));

  it('should create a MeetupService', function () {
    expect(!!meetupService).toBe(true);
  });

  it('should have one meetup', inject(function($httpBackend) {
    $httpBackend.expectJSONP('http://api.meetup.com/2/events?callback=JSON_CALLBACK&mockup')
        .respond({results:[
                    {name:"Example Meetup", time:1421366400000}
                  ]});

    var feeds = [
      {
        "eventPrefix": "",
        "meetupUrl": "http://api.meetup.com/2/events?callback=JSON_CALLBACK&mockup"
      }
    ];

    meetupService.getEvents(feeds).then(function(events) {
      expect(events.length).toBe(1);
      expect(events[0].name).toBe("Example Meetup");

    })

    $httpBackend.flush();

  }));

  it('should have a prefix in the title', inject(function($httpBackend) {
    $httpBackend.expectJSONP('http://api.meetup.com/2/events?callback=JSON_CALLBACK&mockup')
        .respond({results:[
          {name:"Example Meetup", time:1421366400000}
        ]});

    var feeds = [
      {
        "eventPrefix": "Example Prefix:",
        "meetupUrl": "http://api.meetup.com/2/events?callback=JSON_CALLBACK&mockup"
      }
    ];

    meetupService.getEvents(feeds).then(function(events) {
      expect(events.length).toBe(1);
      expect(events[0].name).toBe("Example Prefix: Example Meetup");

    })

    $httpBackend.flush();

  }));

  it('should have an extra CSS class', inject(function($httpBackend) {
    $httpBackend.expectJSONP('http://api.meetup.com/2/events?callback=JSON_CALLBACK&mockup')
        .respond({results:[
          {name:"Example Meetup", time:1421366400000}
        ]});

    var feeds = [
      {
        cssClass: "primary meetup",
        "eventPrefix": "",
        "meetupUrl": "http://api.meetup.com/2/events?callback=JSON_CALLBACK&mockup"
      }
    ];

    meetupService.getEvents(feeds).then(function(events) {
      expect(events.length).toBe(1);
      expect(events[0].cssClass).toBe("primary meetup");

    })

    $httpBackend.flush();

  }));


});
