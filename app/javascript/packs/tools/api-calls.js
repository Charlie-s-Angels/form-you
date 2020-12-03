const login = ({ email, password }) => {
  const data = {
    user: { email, password }
  };

  console.log('start');
  fetch('http://localhost:3000/api/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    },
    body: JSON.stringify(data)
  })
  .then((response) => response.json())
  .then((data) => console.log(data));
};

export default login;
