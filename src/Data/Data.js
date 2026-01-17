const Products = (product) =>
  new URL(`../assets/Product/${product}.png`, import.meta.url).href;

const ProductNames = [
  "African Violet",
  "Snake Plant",
  "Peace Lily",
  "Spider Plant",
  "Aloe Vera",
  "Fiddle Leaf Fig",
  "Boston Fern",
  "Jade Plant",
  "ZZ Plant",
  "Rubber Plant",
  "Pothos",
  "Philodendron",
];

const getRandomProductName = () => {
  return ProductNames[Math.floor(Math.random() * ProductNames.length)];
};

const getRandomPrice = (min = 5, max = 50) => {
  return (Math.random() * (max - min) + min).toFixed(2);
};

const ProductsData = [];
for (let index = 1; index <= 12; index++) {
  ProductsData.push({
    id: index,
    image: Products(`image${index}`),
    name: getRandomProductName(),
    price: `$${getRandomPrice()}`,
  });
}

export default ProductsData;
