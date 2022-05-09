  var url = 'https://randomuser.me/api?results=5';
  
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => { 
      let output = '';
      data.results.forEach(element => {
       output += `
       <div class="user_profile">  
        <img src="${element.picture.large}" alt="${element.name.first} ${element.name.last}">
        <div class="user_profile_name"><b>Name:</b>${element.name.first} ${element.name.last}</div>
        <div class="user_profile_location"><b>Location:</b>${element.location.street.name} ${element.location.street.number}</div>
        <div class="user_profile_city"><b>City:</b>${element.location.city}</div>
        <div class="user_profile_country"><b>Country:</b>${element.location.country}</div>
       </div>`;
     document.getElementById('users').innerHTML = output;
      })

    })

    .catch(function(error) {
      console.log(error);
    });