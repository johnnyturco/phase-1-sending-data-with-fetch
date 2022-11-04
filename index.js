function submitData(userName, userEmail){
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail
    })
  })
  .then(response => response.json)
  .then(data => {
    document.body.innerHTML = data["id"]
    // const body = document.querySelector("body");
    // const newDiv = document.createElement("div");
    // newDiv.textContent = data["id"];
    // body.prepend(newDiv);
  })
};