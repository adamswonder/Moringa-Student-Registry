// create a container to store the checkbox status
let userCred = document.getElementById('status');
userCred.addEventListener('chcker', (e) => {
    e.preventDefault()
    let active = document.getElementById('checkbox').checked;

    // testing if it works
    fetch(`https://moringa-student-registry-3d3a8-default-rtdb.firebaseio.com/users.json`, {
        method: 'PUT',
        header: 'application/json',
        body: JSON.stringify({ active })
    }).then(respsonse => respsonse.json()).then(data => {
        // console.log(data)
        document.getElementById('check-box-output').innerHTML = "Verified" + active;    
    }).catch(err=> console.log(err))
})