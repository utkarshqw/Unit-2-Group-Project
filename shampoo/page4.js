var dataPhoto = [{
    image_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12597163-5554871574934407.jpg",
    name: "Olapex NO4 PurePressed Base Mineral Foundetion Refil(0.35 oz.)",
    price: "$28.00",
    productPrice: 28,
    productQuantity: 1,
    category: "100%pure ",
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/12901140-9424904191542093.jpg",
    name: "Miriam qxygenating Foundation Blue Undertones(15 ml.)",
    price: "$66.00",
    productPrice: 66,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/12902444-1644943564580687.jpg",
    name: "dpHUE iredale Beyo Matte Liquid Foundation(0.9 fl.oz.)",
    strikedoffprice: "MSRP:$50",
    price: "$26.00",
    productPrice: 26,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/12658441-1014951908068217.jpg",
    name: "Estee Lauder GENES All-In-One Lactic Acid Treatment(1.7 oz-%175 value)",
    price: "$56.00",
    productPrice: 56,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/12658440-1014951907562582.jpg",
    name: "Olaplex  Org. SKIN PERFECTING 2 BHA Liquid Exfoliant(4fl.oz.)",
    price: "$84.00",
    productPrice: 84,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/12915557-2954917112863726.jpg",
    name: "DHC Deep Cleasing Complex Exfoliant Cleasing (4fl.oz.)(6fl.oz.)",
    price: "$49.00",
    productPrice: 49,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/12902037-4044866432108096.jpg",
    name: "R+Co Clean Broad - Spectrum SPF",
    price: "$32.00",
    productPrice: 32,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/12901148-1234871548435983.jpg",
    name: "Living Trips Liqid Restore 242(1.6fl.oz.)",
    price: "$41.00",
    productPrice: 41,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/12901179-1534866391928052.jpg",
    name: "R+Co DAlla Nu-Derm Toner(6.7fl. oz.)",
    price: "$32.00",
    productPrice: 32,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/10544944-1954885783050567.jpg",
    name: "SkinMedica TNS Essential Serum(1oz.)",
    price: "$61.85",
    productPrice: 61,
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