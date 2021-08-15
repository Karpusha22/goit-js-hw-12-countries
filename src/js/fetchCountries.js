
 function fetchCountry(name) {
      return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
           .then(response =>
                response.json()
           )
            .catch(err => {
      console.error("Error: ", err);
    });
           
}
export default { fetchCountry }
 