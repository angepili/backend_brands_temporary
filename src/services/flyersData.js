const { faker } = require("@faker-js/faker");

const PROMO = [
  {
    idBrand: [
      "3ee115ba-b0e5-43d4-b6fd-2a67c18d6302",
      "cba91deb-99a9-4db2-b4fd-668da68d0594",
      "d47ff2af-8274-46db-bbd7-81a594597240",
      "17cf78c9-ab44-4cb1-8eb2-dd4ad9805fc9",
    ],
    name: "Sconti al 50%",
  },
  {
    idBrand: ["3ee115ba-b0e5-43d4-b6fd-2a67c18d6302"],
    name: "Offerte del mese",
  },
  {
    idBrand: [
      "3ee115ba-b0e5-43d4-b6fd-2a67c18d6302",
      "cba91deb-99a9-4db2-b4fd-668da68d0594",
      "d47ff2af-8274-46db-bbd7-81a594597240",
      "17cf78c9-ab44-4cb1-8eb2-dd4ad9805fc9",
    ],
    name: "Promozione in omaggio",
  },
  {
    idBrand: ["7e9b06d3-545a-4008-9504-31c2fa3281f9"],
    name: "Blackfriday 2025",
  },
  {
    idBrand: ["7e9b06d3-545a-4008-9504-31c2fa3281f9"],
    name: "Fiera del bianco",
  },
];

// Genera un flyer con dati faker
const generateFlyer = (item) => {
  const fromDate = faker.date.soon({ days: 1 });
  const toDate = faker.date.soon({ days: 7, refDate: fromDate });
  
  return {
    id: faker.string.uuid(),
    name: item.name,
    imageUrl: faker.image.url(),
    pdfUrl: faker.internet.url() + '/flyer.pdf',
    url: faker.internet.url(),
    from: fromDate.toISOString().split('T')[0],
    to: toDate.toISOString().split('T')[0],
    priority: faker.number.int({ min: 1, max: 5 }),
  };
};

const getFlyers = (storeId) => {
  // Filtra le promo che contengono lo storeId
  const filteredPromos = PROMO.filter((item) => item.idBrand.includes(storeId));
  if (filteredPromos.length === 0) return [];

  // Genera i flyers per le promo filtrate
  return filteredPromos.map(generateFlyer);
};

const wrapResponse = (data) => {
  return {
    items: data,
    offset: 0,
    totalCount: data.length,
    pageSize: 10,
  };
};

module.exports = {
  getFlyers: (storeId) => wrapResponse(getFlyers(storeId)),
};
