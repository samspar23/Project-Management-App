var xhr = new XMLHttpRequest();

function login(email, password) {
    var param = window.btoa(email.value + ":" + password.value);
    
    xhr.open('POST', "http://localhost:8081/api/v1/auth/login");
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.setRequestHeader('Authorization', "Basic " + param);
    xhr.send();
    xhr.onreadystatechange = sendRequest;
}


function sendRequest() {
    console.log(xhr.readyState, xhr.status);
    if (xhr.readyState == 4) {
        sessionStorage.setItem('user-detail', xhr.responseText);
        sessionStorage.setItem('access-token', xhr.getResponseHeader('access-token'));
        window.location.href = "./home.html";
    }
    else {
        alert("username or password is incorrect.");
    }
}