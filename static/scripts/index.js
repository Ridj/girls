function getJSON(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send(null);
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) return request.responseText;
    }
}


function genGirlsUL(json) {
    let json_obj = JSON.parse(json);
    let ul = document.createElement('ul');
        for(let i = 0; i < json_obj.length; i++) {
            let li = document.createElement('li');
            li.innerText = json_obj[i]['girl_name'] + ', ' + json_obj[i]['girl_age'];
            ul.appendChild(li);
        }
    return ul;
}

function updateGirlsDOM(ul) {
    document.getElementById('girls').innerHTML = ul;
}



let girlsVue = new Vue({
   el: '#app',
    methods: {
       updatePage: function() {
           updateGirlsDOM(genGirlsUL(getJSON('api/girls')));
       }
    },
   data: {
   }
});

getJSON('api/girls');
