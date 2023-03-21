

export const getLogin = () => {
  return fetch("localhost:3000/login", {
    method: "POST", 
    headers: {'Content-Type':'application/json'}, 
    body: JSON.stringify({
        email: "nymsuren@gmail.com", 
        password: "1234567",
    })
  }).then(res => res.json())
  .then(console.log);
};