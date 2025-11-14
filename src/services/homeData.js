const { BRANDS, PROMO } = require("./staticData");
const PREFIX_ENDPOINT = "v2/api/bo";

const getEndpoints = ( host ) => {

  const ENDPOINTS = [];
  const BRAND_ENDPOINT = [`${host}/${PREFIX_ENDPOINT}/brand`];

  ENDPOINTS.push(BRAND_ENDPOINT);

  const PROMO_ENDPOINT = BRANDS.map((item) => {
    return `${host}/${PREFIX_ENDPOINT}/brand/${item.id}/promo`;
  });
  ENDPOINTS.push(PROMO_ENDPOINT);

  const FLYERS_ENDPOINT = PROMO.map((item) => {
    return `${host}/${PREFIX_ENDPOINT}/promo/${item.id}/flyers`;
  });
  ENDPOINTS.push(FLYERS_ENDPOINT);

  return ENDPOINTS;
};

module.exports = {
  ENDPOINTS: (host) => getEndpoints(host),
  PREFIX_ENDPOINT,
};
