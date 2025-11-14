const { faker } = require("@faker-js/faker");
const { BRANDS } = require("./staticData");

const getRandomBrandIds = (minCount = 1  ) => {
  const BRAND_ID = BRANDS.map( item => item.id );
  const count = faker.number.int({ min: minCount, max: BRAND_ID.length });
  return faker.helpers.arrayElements(BRAND_ID, count);
};


/* const SUB_BRAND = [
  { id: '3ee115ba-b0e5-43d4-b6fd-2a67c18d6302', name: "Express" },
  { id: '4115153e-83fb-4089-827d-83d4ce3fd8a0', name: "Ipermercati" },
  { id: 'b102b18a-3bed-4bb0-b12c-5de043ec4680', name: "Mini" },
  { id: '2df34e4c-05ef-4298-8d9c-84bc139a518c', name: "Standard" },
]; */

const createSlug = (text) => text.toLowerCase().replace(/\s+/g, "-");

/* // Genera un singolo deal
const generateDeal = () => ({
  dealId: faker.number.int({ min: 1000000, max: 9999999 }),
  dealName: `${faker.helpers.arrayElement(["Sconti", "Offerta", "Promozione"])} al ${faker.number.int({ min: 10, max: 90 })}%`,
});

// Genera una lista di deals
const generateDeals = (count = randomInt(1, 6)) => 
  Array.from({ length: count }, generateDeal);

*/

// Genera un sub-brand con i suoi deals (opzionale)
/* const generateSubBrand = (brandName) => (item) => ({
  id: item.id,
  name: `${brandName} ${item.name}`,
}); */

// Genera un brand (con o senza subBrands)
const generateBrand = ( item ) => {
  return {
    id: item.id,
    name: item.name,
    slug: createSlug(item.name),
  };
};
 
// Genera tutti i flyers (lista di brands)
const getBrands = () => BRANDS.map( generateBrand );

/* const getSubBrands = ( id ) => {

  console.log( id );
  
  const brand = BRANDS.find(b => b.id === id);
  if (!brand) return [];
  
  // Genera i sub-brand con il nome del brand
  return SUB_BRAND.map( generateSubBrand(brand.name) );
}; */

/* const wrapResponse = ( data ) => {
  return {
    items: data,
    offset: 0,
    totalCount: data.length,
    pageSize: 10,
  };
}; */

module.exports = {
  getBrands: () => getBrands(),
  getRandomBrandIds: () => getRandomBrandIds(),
  // getSubBrands: (brandId) => getSubBrands( brandId ),
  BRANDS,
};
