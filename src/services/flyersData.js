const { faker } = require("@faker-js/faker");
const { BRANDS, PROMO } = require("./staticData");

// Genera un flyer con dati faker
const generateFlyer = ( name ) => {
  return {
    id: faker.string.uuid(),
    name,
    imageUrl: faker.image.url(),
    pdfUrl: faker.internet.url() + "/flyer.pdf",
    url: faker.internet.url(),
    priority: faker.number.int({ min: 1, max: 5 }),
  };
};

const getFlyers = (promoId) => {
  const data = [];
  const promoItem = PROMO.find( item => item.id == promoId );
    for( let n=0; n < faker.number.int({ min: 2, max: 35 }); n++) {
      data.push( generateFlyer( promoItem.name ) ); 
    }
  return data;
};

module.exports = {
  getFlyers: (promoId) => getFlyers(promoId)
};
