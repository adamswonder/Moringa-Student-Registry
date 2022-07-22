let userCreds = document.getElementById('signIn');

userCreds.addEventListener('submit', (e) => {
    e.preventDefault()
    // get data from user
    let mail1 = document.getElementById('mail1').value;
    let pass1 = document.getElementById('pass1').value;


    // testing if it works
    fetch(`https://moringa-student-registry-3d3a8-default-rtdb.firebaseio.com/users.json`, {
        method: 'GET',
        header: 'application/json',
        // body: JSON.stringify({ mail1, pass1 })
    }).then(respsonse => respsonse.json()).then(data => {
        window.location.href = '/Landing-page/landing.html'
        console.log(data)
    }).catch(err => console.log(err))
})
