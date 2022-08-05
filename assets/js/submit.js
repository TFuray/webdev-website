window.addEventListener("DOMContentLoaded", function() {

    var form = document.getElementById('my-form');
    var status = this.document.getElementById("status");

    // success and error functions for form submission

    function success(){
        form.reset();
        status.classList.add('success');
        status.innerHTML = 'Thanks!';
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
    }


    //handle the form submission

    form.addEventListener("submit", function (ev){
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}