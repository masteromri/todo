function todoAdd(){
    let text = document.getElementById("todoInput").value;
    let newText = document.createTextNode(text);
    let div = document.createElement("div");
    div.appendChild(newText);
    div.classList = "box has-text-centered animated slideInDown";
    let listContainer = document.querySelector(".list");
    listContainer.appendChild(div);
    let removeIcon = document.createElement("i");
    removeIcon.classList = "fas fa-check-circle fa-2x";
    let removeButton = document.createElement("button");
    removeButton.appendChild(removeIcon);
    div.appendChild(removeButton);
    var els = document.getElementsByTagName('button');

    for (var i = 0; i < els.length; i++) {
        els[i].addEventListener('click', function () {
            div.classList = "box has-text-centered animated bounceOut";
            this.parentNode.remove();
        });
    }

}






