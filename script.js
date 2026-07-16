const whatsappNumber = "233269914730";

function orderProduct(productName, productPrice) {
  const message = `
Hello Snack Hub,

I would like to order:

Product: ${productName}
Price: GH₵${productPrice}

Is it currently available?
  `.trim();

  const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappLink, "_blank");
}

function openGeneralWhatsApp() {
  const message =
    "Hello Snack Hub, I would like to make an enquiry about your available snacks.";

  const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappLink, "_blank");
}

function filterProducts(category, selectedButton) {
  const products = document.querySelectorAll(".product-card");
  const categoryButtons = document.querySelectorAll(".category");

  categoryButtons.forEach((button) => {
    button.classList.remove("active");
  });

  selectedButton.classList.add("active");

  products.forEach((product) => {
    const productCategory = product.dataset.category;

    if (category === "all" || productCategory === category) {
      product.classList.remove("hidden");
    } else {
      product.classList.add("hidden");
    }
  });
}