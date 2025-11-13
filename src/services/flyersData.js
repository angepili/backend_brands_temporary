const { faker } = require("@faker-js/faker");
const { BRANDS } = require("./brandsData");

const PROMO_LIST = [
  "Sconti al 50%",
  "Offerte del mese",
  "SALDI 2025",
  "Blackfriday 2025",
  "Fiera del bianco",
];

const BRAND_ID = BRANDS.map( item => item.id );

const getRandomBrandIds = (minCount = 1, maxCount = BRAND_ID.length) => {
  const count = faker.number.int({ min: minCount, max: maxCount });
  return faker.helpers.arrayElements(BRAND_ID, count);
};

const PROMO = () => {
  const data = [];
  PROMO_LIST.map( item => {
    for( let n=0; n < faker.number.int({ min: 2, max: 35 }); n++) {
      data.push({
        idBrand: getRandomBrandIds(),
        name: item
      })
    }
  })
  return data;
}



// Genera un flyer con dati faker
const generateFlyer = (item) => {
  const fromDate = faker.date.soon({ days: 1 });
  const toDate = faker.date.soon({ days: 7, refDate: fromDate });

  return {
    id: faker.string.uuid(),
    name: item.name,
    imageUrl: faker.image.url(),
    pdfUrl: faker.internet.url() + "/flyer.pdf",
    url: faker.internet.url(),
    from: fromDate.toISOString().split("T")[0],
    to: toDate.toISOString().split("T")[0],
    priority: faker.number.int({ min: 1, max: 5 }),
  };
};

const randomPromo = faker.helpers.arrayElement(PROMO_LIST);
const getFlyers = (storeId) => {
  // Filtra le promo che contengono lo storeId
  const filteredPromos = PROMO()
                            .filter((item) => item.idBrand.includes(storeId))
                            .filter( item => item.name == randomPromo )
  if (filteredPromos.length === 0) return [];

  // Genera i flyers per le promo filtrate
  return filteredPromos.map(generateFlyer);
};

module.exports = {
  getFlyers: (storeId) => getFlyers(storeId),
};
