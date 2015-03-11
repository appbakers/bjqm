var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/conditions', function(req, res) {
  // Simulating some loading time...
  setTimeout(function() {
    res.type('application/json');
    res.send(200, [{
      id: "generic",
      conditions: [{
        id: "1",
        uiclass: "ul-field-contain",
        uitagName: "select",
        uiname: "1234",
        uioptions: [{
          uiname: "name1",
          uivalue: "value1"
        }, {
          uiname: "name2",
          uivalue: "value2"
        }, {
          uiname: "name3",
          uivalue: "value3"
        }, {
          uiname: "name4",
          uivalue: "value4"
        }]
      }]
    }]);
  }, 1000);
});

app.get('/generics', function(req, res) {
  // Simulating some loading time...
  setTimeout(function() {
    res.type('application/json');
    res.send(200, [{
      id: "1234",
      name: "GMIC - Silicon Valley's Largest Mobile Conference",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec turpis mollis lectus bibendum scelerisque non nec felis.",
      submitted: "2013-05-26T18:35Z",
      location: "747 Howard St , San Francisco",
      date: "October 21, 2013 at 8:00 AM"
    }, {
      id: "1235",
      name: "Sacramento Music Festival - 2013",
      message: "Organized by Sacramento Traditional Jazz Society",
      submitted: "2013-05-26T18:35Z",
      location: "Old Town Sacramento, K & Front Street, Sacramento, CA",
      date: ""
    }, {
      id: "1236",
      name: "Sunset Celebration Weekend 2013 - June 1 & 2, 10am-5pm",
      message: "Organized by Sunset Magazine",
      submitted: "2013-05-26T18:35Z",
      location: "Sunset Magazine Headquarters and Gardens, 80 Willow Rd, Menlo Park, CA",
      date: "June 1, 2013 at 10:00 AM"
    }]);
  }, 1000);
});

app.listen(3000, function() {
  console.log("Server listening onport 3000");
});
