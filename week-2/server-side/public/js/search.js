// searchSubmit button variable

var searchSubmit = document.querySelector('[value="click"]');

// searchSubmit eventlistener when clicked send userInput to request.list
searchSubmit.addEventListener('click', function () {

    var userInput = document.querySelector('[type="text"]').value;

    //Lets try to make a HTTP GET
    request({

        url: 'https://www.cannabisreports.com/api/v1.0/strains?=972ea5f706ca0dc6dbe17db99a834085804ee594',
        method: 'GET'

    }, function (error, response, body) {

        if(error) {

            console.log('errorrrrr');


        } else {

            var data = JSON.parse(body);

            console.log(data);
        }

    });
});