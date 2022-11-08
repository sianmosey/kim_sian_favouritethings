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

        let any = event.target.dataset.list;
        console.log(any);

        buildData();
        console.log(favparts);

        let title = document.querySelector("h2"),
            title2 = document.querySelector("h3"),
            description = document.querySelector("p"),
            image = document.querySelector("img");

        image.src = `images/${favparts[any].photo}`;
        title.textContent = favparts[any].title;
        title2.textContent = favparts[any].title2;
        description.textContent = favparts[any].brief;

    }

    getData();

   button.forEach(button => button.addEventListener("click", showData));

})();
