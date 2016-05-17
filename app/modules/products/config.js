function config($stateProvider) {
  $stateProvider
    .state("home", {
      url: "/",
      controller: "ProductsController as productsCtrl",
      template: require("./views/products.html")
    })

    .state("create", {
      url: "/products/new",
      controller: "CreateProductsController as createCtrl",
      template: require("./views/create.html")
    })

    .state("view", {
      url: "/products/:id",
      controller: "ViewProductController as viewCtrl",
      template: require("./views/detail.html")
    });
}

export default config;
