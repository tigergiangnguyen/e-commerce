// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product model belongs to one Category model
Product.belongsTo(Category, {
  // Link between two models
  foreignKey: 'category_id'
});

Category.hasMany(Product, {
  // Link between two models
  foreignKey: 'category_id'
});

Product.belongsToMany(Tag, {
  foreignKey: 'product_id',
  // Junction table used to association the two models
  through: ProductTag,
});

Tag.belongsToMany(Product, {
  foreignKey: 'tag_id',
  // Junction table used to association the two models
  through: ProductTag
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
