axios.get('http://localhost:5000/api/endpoint')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('There was an error!', error);
  });
