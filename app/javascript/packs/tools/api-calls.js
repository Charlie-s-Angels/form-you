const login = () => {
  const data = {
    user: {
      email: "test@yopmail.com",
      password: "password"
    }
  };

  console.log('start');
  fetch('http://localhost:3000/api/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjA3MDA1OTEyLCJleHAiOjE2MDcwOTIzMTIsImp0aSI6Ijc3ZmRiYmU4LWY5MGItNGE4NC05N2EyLWRlNGVlNmYyNTFhMSJ9.JOv1XUy2V8wofacLTYFp6wQLnDuGg-quya2g3x9xoNM`
    },
    body: JSON.stringify(data)
  })
  .then((response) => response.json())
  .then((data) => console.log(data));
};

export default login;
