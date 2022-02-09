// Add your code here
const submitData = (name, email) => {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(res => {
        if(res.ok){
            return res.json();
          }
          else{
            throw new Error(`${res.status}: ${res.statusText}`);
        }
    })
    .then(data => {
        console.log(data);
        document.body.append(data.id);
    })
    .catch(err => {
        document.body.append(err);
    });
}