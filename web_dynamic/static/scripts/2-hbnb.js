$('document').ready(function () {
//This allows the script to be executed only when DOM
//only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
    const url = 'http://localhost:5001/api/v1/status/';
    $.get(url, function (response) {
      if (response.status === 'OK') {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    });

    let amenity = {};
    $('input[type="checkbox"]').change(function () {
      if ($(this).is(':checked')) {
        amenity[$(this).attr('data-id')] = $(this).attr('data-name');
      } else {
        delete amenity[$(this).attr('data-id')];
      }
      $('.amenities h4').text(Object.values(amenity).join(', '));
    });
  });
