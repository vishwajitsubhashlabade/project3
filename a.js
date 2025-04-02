const token = localStorage.getItem('token');
axios.get('http://localhost:5000/api/protected-endpoint', {
  headers: { Authorization: `Bearer ${token}` }
});
