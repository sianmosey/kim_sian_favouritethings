(() => {


    const button = document.querySelectorAll(".button");
    let favpanel;


    function buildData(data) {
        let favpanel = Object(data);
    }


    function getData() {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => {

                favpanel = data;

            })
        .catch(error => console.error(error));
    }
    
    function showData(event) {

        let key = event.target.dataset.list;
        console.log(key);

        buildData();
        console.log(favpanel);

        let title = document.querySelector("h2"),
            title2 = document.querySelector("h3"),
            description = document.querySelector("p"),
            image = document.querySelector("img");

        image.src = `images/${favpanel[key].photo}`;
        title.textContent = favpanel[key].title;
        title2.textContent = favpanel[key].title2;
        description.textContent = favpanel[key].brief;

    }

    getData();

   button.forEach(button => button.addEventListener("click", showData));

})();
