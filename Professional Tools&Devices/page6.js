var dataPhoto = [{
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/12564808-1014935531447783.jpg",
    name: "First Aid NO4 KP BUMO Base Mineral Foundetion Refil(0.35 oz.)",
    price: "$28.00",
    productPrice: 28,
    productQuantity: 1,
    category: "100%pure ",
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/11287678-1604868437208715.jpg",
    name: "Glytone qxygenating Foundation Blue Undertones(15 ml.)",
    price: "$33.00",
    productPrice: 33,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/11292030-1004866326719704.jpg",
    name: "Murad iredale Beyo Matte Liquid Foundation(0.9 fl.oz.)",
    strikedoffprice: "MSRP:$45",
    price: "$45.00",
    productPrice: 45,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/12535714-1914869713937009.jpg",
    name: "Herbivore Lauder GENES All-In-One Lactic Acid Treatment(1.7 oz-%175 value)",
    price: "$38.00",
    productPrice: 38,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/11659771-1974866362012160.jpg",
    name: "REN CleanOrg. SKIN PERFECTING 2 BHA Liquid Exfoliant(4fl.oz.)",
    price: "$45.00",
    productPrice: 45,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/12901516-1934868207040156.jpg",
    name: "Kia Deep Cleasing Complex Exfoliant Cleasing (4fl.oz.)(6fl.oz.)",
    price: "$30.00",
    productPrice: 30,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/12902333-3074927237851711.jpg",
    name: "SUSANNE Clean Broad - Spectrum SPF",
    price: "$70.00",
    productPrice: 70,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/12901058-8654900274991564.jpg",
    name: "Rahua Trips Liqid Restore 242(1.6fl.oz.)",
    price: "$32.00",
    productPrice: 32,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/12902029-9364871740819794.jpg",
    name: "Naturopathica DAlla Nu-Derm Toner(6.7fl. oz.)",
    price: "$44.00",
    productPrice: 44,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/10544944-1954885783050567.jpg",
    name: "Sachajuan TNS Essential Serum(1oz.)",
    price: "$31.00",
    productPrice: 31,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/11307178-1684904707610001.jpg",
    name: "iS Clinical Active Serum(1fl. oz.)",
    price: "$40.60",
    productPrice: 40,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/12905951-2144869966339537.jpg",
    name: "NuFACE Mini(2pices)",
    price: "$48",
    productPrice: 48,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/12901956-1634871508329232.jpg",
    name: "Supergoop!@ Unseen Sunscreen SPF40",
    price: "$36.00",
    productPrice: 36,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/10560417-1534868371575033.jpg",
    name: "RevitaLash Advanced Eyelash Conditioner-6 Months ",
    price: "$150.00",
    productPrice: 150,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/11289599-4344892770055931.jpg",
    name: "SkinCeuticals A.G.E Eye Complex(0.5 oz.)",
    price: "$105.00",
    productPrice: 105,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/11574165-2114870996065159.jpg",
    name: "SkinMedica HA5 Rejuvenating Hydrator(1 fl.oz.)",
    price: "$105.40",
    productPrice: 105,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/12915559-1644876995391179.jpg",
    name: "Oribe Condition for Beautiful Color(33.8 fl.oz.)",
    price: "$168",
    productPrice: 168,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/11370304-1834876993606203.jpg",
    name: "EltaMD AM Therapy Facial Moisturizer(1.7 oz.)",
    price: "$39",
    productPrice: 39,
    productQuantity: 1,
}];
localStorage.setItem("FistPage", JSON.stringify(dataPhoto));

var cartLSData = JSON.parse(localStorage.getItem("brand_data")) || [];



var container = document.querySelector("#container");



function display(data) {
    //  dataPhoto.innerHTML = null;
    document.querySelector("#container").innerHTML = "";


    data.forEach(element => {

        var card = document.createElement("div");

        var img2 = document.createElement("img");

        img2.setAttribute("src", element.image_url)

        var title = document.createElement("p");
        title.innerText = element.name;

        var price = document.createElement("h3");
        price.innerText = element.price;

        var button = document.createElement("button");
        button.innerText = "QUICK BUY";
        button.addEventListener("click", function() {
            AddToCart(element);

        });


        card.append(img2, title, price, button);

        document.querySelector("#container").append(card);
        // console.log(element.image_url);
    });
}
display(dataPhoto);



function AddToCart(element) {
    cartLSData.push(element);
    localStorage.setItem("brand_data", JSON.stringify(cartLSData));
    alert("Product added successfully")
}

//Filter the data
function handlePriceSort() {
    var selected = document.querySelector("#sortPrice").value;
    //console.log(selected);
    if (selected == "HTL") {
        dataPhoto.sort(function(a, b) {
            return b.productPrice - a.productPrice;
        });
        //console.log(dataPhoto);
        display(dataPhoto);
    }
    if (selected == "LTH") {
        dataPhoto.sort(function(a, b) {
            return a.productPrice - b.productPrice;
        });
        //console.log(dataPhoto);
        display(dataPhoto);
    }
}

//filterCheckBox
var ab = document.querySelector("form")
var bc = z.vehicle1.value;
console.log(bc)