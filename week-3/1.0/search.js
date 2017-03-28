var request = require('request');
var ejs = require('ejs');
var fs = require('fs');

// searchSubmit button variable
var searchSubmit = document.querySelector('[value="click"]');

// searchSubmit eventlistener when clicked send userInput to request.list
searchSubmit.addEventListener('click', function () {

    var userInput = document.querySelector('[type="text"]').value;
    console.log(userInput);

    //Lets try to make a HTTP GET
    request({

        url: 'https://www.cannabisreports.com/api/v1.0/strains/search/' + userInput,
        method: 'GET'

    }, function (error, response, body) {

        if(error) {

            console.log('errorrrrr');


        } else {

            var data = JSON.parse(body);

            console.log(data);

            // window.location.hash = '#strains';

            // var html = new ejs({url: 'strain-search.ejs'}).render(data);

            console.log(ejs.render());

        }

    });
});
