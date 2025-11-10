const { faker } = require("@faker-js/faker");

const BRANDS = [
  { id: 1, name: "Carrefour" },
  { id: 2, name: "Ikea" },
  { id: 3, name: "Esselunga" },
  { id: 4, name: "Conad" },
  { id: 5, name: "Iper" },
];
const SUB_BRAND_TYPES = ["Express", "Ipermercati", "Mini"];

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const createSlug = (text) => text.toLowerCase().replace(/\s+/g, '-');

// Genera un singolo deal
const generateDeal = () => ({
  dealId: faker.number.int({ min: 1000000, max: 9999999 }),
  dealName: `${faker.helpers.arrayElement(["Sconti", "Offerta", "Promozione"])} al ${faker.number.int({ min: 10, max: 90 })}%`,
});

// Genera una lista di deals
const generateDeals = (count = randomInt(1, 6)) => 
  Array.from({ length: count }, generateDeal);

// Genera un sub-brand con i suoi deals (opzionale)
const generateSubBrand = (brandName) => ({
  id: faker.database.mongodbObjectId(),
  subBrandName: `${brandName} ${faker.helpers.arrayElement(SUB_BRAND_TYPES)}`,
  dealsList: generateDeals(),
});

// Genera un brand (con o senza subBrands)
const generateBrand = (brandData) => {
  const brand = {
    id: brandData.id,
    brand: brandData.name,
    slug: createSlug(brandData.name),
  };

  // 50% probabilità di avere subBrands
  if (Math.random() > 0.5) {
    brand.subBrands = Array.from({ length: randomInt(2, 4) }, () => generateSubBrand(brandData.name));
  } else {
    // Se non ha subBrands, ha direttamente una dealsList
    brand.dealsList = generateDeals(randomInt(2, 6));
  }

  return brand;
};

// Genera tutti i flyers (lista di brands)
const generateAllFlyers = () => BRANDS.map(generateBrand);

module.exports = {
  getAllFlyers: generateAllFlyers,
  getFlyerById: (id) => {
    const allFlyers = generateAllFlyers();
    return allFlyers.find(flyer => flyer.id === parseInt(id));
  },
};