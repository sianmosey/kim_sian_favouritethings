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

        let fvrtthingTitle = document.querySelector("h2"),
            fvrtthingSubTitle = document.querySelector("h3"),
            fvrtthingDesc = document.querySelector("p"),
            fvrtthingImg = document.querySelector("img");

        fvrtthingImg.src = `images/${favpanel[key].photo}`;
        fvrtthingTitle.textContent = favpanel[key].title;
        //debugger;
        fvrtthingSubTitle.textContent = favpanel[key].title2;
        fvrtthingDesc.textContent = favpanel[key].brief;

    }

    getData();

   button.forEach(button => button.addEventListener("click", showData));

})();
