let ItemCreator = (function() {
  function generateSKU(name, category) {
    let first = name.match(/[\w*]/gi).slice(0, 3).join('').toUpperCase();
    let second = category.match(/[\w*]/gi).slice(0, 2).join('').toUpperCase();

    return first + second;
  }

  function isValidName(name) {
    return name.replace(/[\s]/g, '').length >= 5;
  }

  function isValidCategory(category) {
    return !category.match(/[\s]/g) && category.length >= 5;
  }

  function isValidQuantity(quantity) {
    return Number.isInteger(quantity);
  }

  return function(name, category, quantity) {
    if (isValidName(name) &&
        isValidCategory(category) &&
        isValidQuantity(quantity)) {
      this.name = name;
      this.category = category;
      this.quantity = quantity;
      this.skuCode = generateSKU(name, category);

      return this;
    } else {
      return {
        notValid: true,
      };
    }
  };
})();

let ItemManager = {
  items: {},

  create(name, category, quantity) {
    let item = new ItemCreator(name, category, quantity);
    if (item.notValid) return false;
    this.items[item.skuCode] = item;
    return item;
  },

  update(skuCode, updateObject) {
    Object.assign(this.getItem(skuCode), updateObject);
  },

  delete(skuCode) {
    delete this.items[skuCode];
  },

  inStock() {
    return Object.values(this.items).filter(item => item.quantity > 0);
  },

  itemsInCategory(category) {
    return Object.values(this.items).filter(item => item.category === category);
  },

  getItem(skuCode) {
    return this.items[skuCode];
  }
};

let ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },

  createReporter(skuCode) {
    let item = this.items.getItem(skuCode);

    return {
      itemInfo() {
        for (let key in item) {
          console.log(`${key}: ${item[key]}`);
        }
      }
    };
  },

  reportInStock() {
    console.log(this.items.inStock().map(item => item.name).join(','));
  },
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot

ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');

kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10