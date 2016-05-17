import angular from 'angular';

import config from './config';
import createController from './controllers/create';
import detailController from './controllers/detail';
import productsController from './controllers/products';
import service from './service';

let products = angular.module('tiy.products', []);

products.config(config);
products.controller('ProductsController', productsController);
products.controller('CreateProductsController', createController);
products.controller('ViewProductController', detailController);
products.service('ProductsService', service);

export default products;
