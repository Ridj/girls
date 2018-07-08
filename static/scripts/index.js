function getJSON(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send(null);
    request.onreadystatechange = function() {
        if (request.readyState !== 4) return;
        if (request.status !== 200) {
            alert(request.status + ': ' + request.statusText);
        } else {
            getPage(request.responseText);
        }
    }
}

let divGirl;

function getPage(json) {
    let json_obj = JSON.parse(json);
    let ul = document.createElement('ul');
        for(let i = 0; i < json_obj.length; i++) {
            let li = document.createElement('li');
            li.innerText = json_obj[i]['girl_name'] + ', ' + json_obj[i]['girl_age'];
            ul.appendChild(li);
        }
    let div = document.getElementById('girls');
        div.innerHTML = '';
        div.appendChild(ul);
}

let girlsVue = new Vue({
   el: '#app',
    methods: {
       updatePage: function() {
           getJSON('api/girls');
       }
    },
   data: {
   }
});

getJSON('api/girls');
