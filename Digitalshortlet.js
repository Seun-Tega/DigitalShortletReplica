$(document).ready(function() {
    const cities = {
      Lagos: ['Ikeja', 'Lekki', 'Victoria Island'],
      Abuja: ['Gwarinpa', 'Maitama', 'Wuse'],
      // Add more states and their cities as needed
    };
  
    $('#stateDropdown .dropdown-item').click(function() {
      const state = $(this).data('state');
      $('#stateDropdown').text($(this).text());
      const cityDropdown = $('#cityDropdown .dropdown-menu');
      cityDropdown.empty();
      if (cities[state]) {
        cities[state].forEach(city => {
          cityDropdown.append(`<li><a class="dropdown-item" href="#" data-city="${city}">${city}</a></li>`);
        });
      } else {
        cityDropdown.append('<li><a class="dropdown-item" href="#">No cities available</a></li>');
      }
    });
  
    $('#cityDropdown').on('click', '.dropdown-item', function() {
      $('#cityDropdown').text($(this).text());
    });
  
    $('#accommodationDropdown .dropdown-item').click(function() {
      $('#accommodationDropdown').text($(this).text());
    });
  });
  