//fetch("https://spreadsheets.google.com/feeds/list/15BNyxAmWzCBtgEIRHl7o0pHE6SdWg_UgOkOkzBEUzxQ/od6/public/values?alt=json").then(function (response) {
//            return response.json()
//        }).then(function (data) {
//            data.forEach(buildCategory)
//            getAnimals();
//        })



function getProducts() {
        fetch("https://spreadsheets.google.com/feeds/list/15BNyxAmWzCBtgEIRHl7o0pHE6SdWg_UgOkOkzBEUzxQ/od6/public/values?alt=json")
            .then(function (response) {
                return response.json()
            }).then(function (data) {
                data.forEach(showAnimals)
            })
    }
