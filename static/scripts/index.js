function updatePage() {
    function GetJSON(url) {
        let request = new XMLHttpRequest();
        request.open('GET', url, false);
        request.send(null);
        return request.responseText;
    }

    let json_obj = JSON.parse(GetJSON('api/girls'));
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

(function() {
    updatePage();
})();
