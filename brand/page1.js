var dataPhoto = [{
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/11289609-8744892770898772.jpg",
    name: "skinCeutical C E Ferulic(1 fl.oz.)",
    price: "$169.00",
    productPrice: 169,
    productQuantity: 1,
    category: "100%pure ",
}, {
    image_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370303-1074944341868735.jpg",
    name: "EltaMD UV Clear Broad-Spectrum SPF 46(1.70z.)",
    price: "$39.00",
    productPrice: 39,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/12596429-3594871019700125.jpg",
    name: "SkinMedica TNS Advanced+Serum(1 oz.)",
    strikedoffprice: "MSRP:$295",
    price: "$250.75",
    productPrice: 250,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/11588281-8764882139037003.jpg",
    name: "Sunday Riley GOOD GENES All-In-One Lactic Acid Treatment(1.7 oz-%175 value)",
    price: "$122",
    productPrice: 122,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/11174178-1044909106371632.jpg",
    name: "Paula's Choice SKIN PERFECTING 2 BHA Liquid Exfoliant(4fl.oz.)",
    price: "$32",
    productPrice: 32,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/11291496-1824871578503201.jpg",
    name: "IS Cliical Cleasing Complex Exfoliant Cleasing (4fl.oz.)(6fl.oz.)",
    price: "$45",
    productPrice: 45,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/11370312-1044938634157826.jpg",
    name: "EltaMDUV Clean Broad - Spectrum SPF",
    price: "$41.00",
    productPrice: 41,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/11290635-1804892767902966.jpg",
    name: "SkinCeuticals Trips Liqid Restore 242(1.6fl.oz.)",
    price: "$136.00",
    productPrice: 136,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/11291541-5024871574576726.jpg",
    name: "Obagi Medicine Nu-Derm Toner(6.7fl. oz.)",
    price: "$43.00",
    productPrice: 43,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/11289682-1284871019539829.jpg",
    name: "SkinMedica TNS Essential Serum(1oz.)",
    price: "$238.85",
    productPrice: 238,
    productQuantity: 1,
}, {
    image_url: "https://static.thcdn.com/images/small/webp//productimg/original/11291956-2074871578544985.jpg",
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