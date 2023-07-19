const slugify = require("slugify");
const options = {
  replacement: "-",
  remove: /[*+~.()'"!?:@]/g,
  lower: true,
  strict: true,
  trim: true,
};

function generateSlug(string) {
  return slugify(string, options);
}

module.exports = generateSlug;
