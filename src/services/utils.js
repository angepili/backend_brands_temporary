const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const createSlug = (text) => text.toLowerCase().replace(/\s+/g, "-");

modules.export = {
    randomInt,
    createSlug
}