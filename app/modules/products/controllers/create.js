class CreateProductsController {
  constructor(ProductsService, UserService, $state) {
    this._ProductsService = ProductsService;
    this._UserService = UserService;
    this._$state = $state;

    this._UserService
      .isLoggedIn()
      .then((response) => {
        this.user = response;
        this.newProduct = this._ProductsService.new();
      })
      .catch((error) => {
        this._$state.go("login")
      });

  }

  addProduct() {
    console.log("adding");
    this._ProductsService
      .add(this.user, this.newProduct)
      .then((response) => {
        this._$state.go("home");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  logout() {
      this._UserService.logout();
      this._$state.go("login");
    }  
}

export default CreateProductsController;
