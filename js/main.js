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

        let main = event.target.dataset.list;
        console.log(main);

        buildData();
        console.log(favparts);

        let title = document.querySelector("h2"),
            title2 = document.querySelector("h3"),
            description = document.querySelector("p"),
            image = document.querySelector("img");

        image.src = `images/${favparts[main].photo}`;
        title.textContent = favparts[main].title;
        title2.textContent = favparts[main].title2;
        description.textContent = favparts[main].brief;

    }

    getData();

   button.forEach(button => button.addEventListener("click", showData));

})();


