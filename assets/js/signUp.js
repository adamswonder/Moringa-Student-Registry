// Loads geolocation on browser instance
window.onload = () => {
    // check if the browser is supported and watch the location using tracker
    if (navigator.geolocation) {
        var trackId = navigator.geolocation.watchPosition((data) => {
            let lati = data.coords.latitude
            let longi = data.coords.longitude

            const geoMoringa = [-1.3034532, 36.7927116]
            if (lati == geoMoringa[0]) {
                window.location.href = '/lg-page/signin.html';
            } else {
                window.alert("Please access the site within the space perimeter!!")
            }
        });
    } else {
        // Stop tracking
        navigator.geolocation.clearWatch(trackId);
    }

}

// post data to database upon creation 
let userCred = document.getElementById('fData');

userCred.addEventListener('submit', (e) => {
    e.preventDefault()
    // get data from user
    let fname = document.getElementById('firstName').value;
    let email = document.getElementById('uemail').value;
    let password = document.getElementById('passwd').value;
    let active = false

    // testing if it works
    fetch(`https://moringa-student-registry-3d3a8-default-rtdb.firebaseio.com/users.json`, {
        method: 'POST',
        header: 'application/json',
        body: JSON.stringify({ fname, email, password, active })
    }).then(respsonse => respsonse.json()).then(data => {
        window.location.href = '/lg-page/signin.html'
        console.log(data)
    }).catch(err => console.log(err))
})

// using localstorage for data creation
document.querySelector('#fData').addEventListener('submit', function (event) {
    event.preventDefault()
    // Get input from user
    let fname = document.querySelector('#firstName').value
    let email = document.querySelector('#uemail').value
    let password = document.querySelector('#passwd').value
    let active = false


    // Create object to store full user data
    signupObj = {
        "fname": fname,
        "email": email,
        "password": password,
        "active": active
    }

    // save data from localstorage
    localStorage.setItem('userCrd', JSON.stringify(signupObj))
    console.log("Signup cred saved")
    // Get data from localStorage
    let userdt = localStorage.getItem('userCrd')
    console.log(userdt)
})