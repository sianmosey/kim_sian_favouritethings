(() => {


    const button = document.querySelectorAll(".button");
    let favparts;


    function buildData(data) {
        let favparts = Object(data);
    }


    function getData() {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => {

                favparts = data;

            })
        .catch(error => console.error(error));
    }
    
    function showData(event) {

        let key = event.target.dataset.list;
        console.log(key);

        buildData();
        console.log(favparts);

        let title = document.querySelector("h2"),
            title2 = document.querySelector("h3"),
            description = document.querySelector("p"),
            image = document.querySelector("img");

        image.src = `images/${favparts[key].photo}`;
        title.textContent = favparts[key].title;
        title2.textContent = favparts[key].title2;
        description.textContent = favparts[key].brief;

    }

    getData();

   button.forEach(button => button.addEventListener("click", showData));

})();

