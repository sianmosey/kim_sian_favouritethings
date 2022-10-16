(() => {


    const button = document.querySelectorAll(".button");
    let favpanel;

    // using get data and show data  and build using fetch API

    function buildData(data) {
        let favpanel = Object(data);
    }


    function getData() {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => {

                favpanel = data;

            })

        // for catching the error
        .catch(error => console.error(error));
    }

    //debugger;

    function showData(event) {

        let key = event.target.dataset.list;
        console.log(key);

        buildData();
        console.log(favpanel);

        // classifying json objects

        let fvrtthingTitle = document.querySelector("h2"),
            fvrtthingSubTitle = document.querySelector("h3"),
            fvrtthingDesc = document.querySelector("p"),
            fvrtthingImg = document.querySelector("img");

        // debugger;

        fvrtthingImg.src = `images/${favpanel[key].photo}`;
        fvrtthingTitle.textContent = favpanel[key].title;
        //debugger;
        fvrtthingSubTitle.textContent = favpanel[key].banner;
        fvrtthingDesc.textContent = favpanel[key].brief;

    }

    getData();

    // buttonContainer.addEventListener('click', showData),

    // for button functionality


    button.forEach(button => button.addEventListener("click", showData));

})();