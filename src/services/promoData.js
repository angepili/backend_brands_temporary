const { faker } = require("@faker-js/faker");
const { getRandomBrandIds } = require("./brandsData");
const { PROMO, BRANDS } = require("./staticData");

const getPromo = () => PROMO
    .map((item) => {
      const fromDate = faker.date.soon({ days: 1 });
      const toDate = faker.date.soon({ days: 7, refDate: fromDate });
      return {
          brandId: getRandomBrandIds(),
          id: item.id,
          name: item.name,
          from: fromDate.toISOString().split("T")[0],
          to: toDate.toISOString().split("T")[0],
      };
    });

const getPromoByBrand = ( brandId ) => {
    return getPromo()
        .filter( item => item.brandId.includes( brandId ))
        .map( item => {
            delete item['brandId'];
            return item;
        })
}

module.exports = {
  getPromo: ( brandId ) => getPromoByBrand( brandId )
};
