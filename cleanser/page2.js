var dataPhoto = [{
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/11291496-1824871578503201.jpg",
    name: "IsClining Clear Ferulic(1 fl.oz.)",
    price: "$45.00",
    productPrice: 45,
    productQuantity: 1,
    category: "100%pure ",
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/11535233-1444892768930832.jpg",
    name: "SkinCeuticals Broad-Spectrum SPF 46(1.70z.)",
    price: "$36.00",
    productPrice: 36,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289657-9384876690289403.jpg",
    name: "SkinMedica TNS Advanced+Serum(1 oz.)",
    strikedoffprice: "MSRP:$295",
    price: "$40.00",
    productPrice: 40,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/12902722-7844915030891827.jpg",
    name: "Revision Skincare GENES All-In-One Lactic Acid Treatment(1.7 oz-%175 value)",
    price: "$38.00",
    productPrice: 38,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/12901507-7664871870005221.jpg",
    name: "Emeinenc Org. SKIN PERFECTING 2 BHA Liquid Exfoliant(4fl.oz.)",
    price: "$42.00",
    productPrice: 42,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/11207443-2214866130380732.jpg",
    name: "DHC Deep Cleasing Complex Exfoliant Cleasing (4fl.oz.)(6fl.oz.)",
    price: "$15.00",
    productPrice: 15,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp/productimg/1600/1600/11429066-1744528379596254.jpg",
    name: "La Roche Clean Broad - Spectrum SPF",
    price: "$11.00",
    productPrice: 11,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/12540234-4844871322019269.jpg",
    name: "EltaMD Trips Liqid Restore 242(1.6fl.oz.)",
    price: "$30.00",
    productPrice: 30,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/10362640-3204871824559250.jpg",
    name: "Dermalogica Nu-Derm Toner(6.7fl. oz.)",
    price: "$62.00",
    productPrice: 62,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/11289682-1284871019539829.jpg",
    name: "SkinMedica TNS Essential Serum(1oz.)",
    price: "$238.85",
    productPrice: 238,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/11287454-3694871985844557.jpg",
    name: "iS Clinical Active Serum(1fl. oz.)",
    price: "$142",
    productPrice: 142,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/11288881-1144871571568377.jpg",
    name: "NuFACE Mini(2pices)",
    price: "$209",
    productPrice: 209,
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