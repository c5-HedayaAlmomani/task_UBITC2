function Cart(img, title, description) {
  this.img = img;
  this.title = title;
  this.description = description;
}

const cartArray = [
  new Cart(
    "./p1.jpg",
    "Calculated Weather",
    "Built Wicket longer admire di barton vanity itself do in it ."
  ),
  new Cart(
    "./p2.jpg",
    "Best Flights",
    "Engrossed listening.Park gate sell they west hard for the ."
  ),
  new Cart(
    "./p3.jpg",
    "Local Events",
    "Barton vanity itself do in it .Preferd to men it engrossed listening"
  ),
  new Cart(
    "./p3.jpg",
    "Customization",
    "We deilver outsourced aviation services for military customers"
  ),
];

const contaner = document.getElementById("contaner");
contaner.className = "contaner";
for (let x = 0; x < cartArray.length; x++) {
  const oneCart = document.createElement("div");
  // صناعة ال div بدي انشأ ديف

  contaner.appendChild(oneCart);
  // حطيت ال الديف داخل البادي

  const img = document.createElement("img");
  const title = document.createElement("p");
  const description = document.createElement("p");

  img.src = cartArray[x].img;
  title.textContent = `${cartArray[x].title}`;
  description.textContent = `${cartArray[x].description}`;

  oneCart.appendChild(img);
  oneCart.appendChild(title);
  oneCart.appendChild(description);

  img.className = "img_cart";
  oneCart.className = "one_cart";
}

//!===================================================================

function Destination(img, title, num, day) {
  this.img = img;
  this.title = title;
  this.num = num;
  this.day = day;
}

const destinationArray = [
  new Destination("./d1.jpg", "Rome , itaity", "$ 5,42k", "10 Days Trip"),
  new Destination("./d2.jpg", "London, UK", "$ 4.2k", "12 Days Trip"),
  new Destination("./d3.jpg", "Full Europe", "$15k", "28 Days Trip"),
];

const contaner2 = document.getElementById("contaner2");
contaner2.className = "contaner2";
for (let x = 0; x < destinationArray.length; x++) {
  const oneCart = document.createElement("div");
  // صناعة ال div بدي انشأ ديف

  contaner2.appendChild(oneCart);
  // حطيت ال الديف داخل البادي

  const img = document.createElement("img");
  const title = document.createElement("p");
  const num = document.createElement("p");
  const day = document.createElement("p");

  img.src = destinationArray[x].img;
  title.textContent = `${destinationArray[x].title}`;
  num.textContent = `${destinationArray[x].num}`;
  day.textContent = `${destinationArray[x].day}`;

  oneCart.appendChild(img);
  oneCart.appendChild(title);
  oneCart.appendChild(num);
  oneCart.appendChild(day);

  img.className = "img_cart2";
  oneCart.className = "one_cart2";
}
