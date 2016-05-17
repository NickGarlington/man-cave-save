class ProductsController {
  constructor($state, ProductsService, UserService){
    this._$state = $state;
    this._UserService = UserService;
    this._ProductsService = ProductsService;
    this.search = "";

    this._UserService
      .isLoggedIn()
      .then((response) => {
        this.user = response;
        console.log(this.user);
        this._ProductsService.all()
          .then((response) => {
            this.products = response;
            console.log(response)
          });

      })
      .catch((error) => {
        this._$state.go("login")
      });

  }

  deleteProducts(product) {
    let confirmDelete = confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
    console.log(product)
    this._ProductsService.remove(product);
  }}

  logout() {
    this._UserService.logout();
    this._$state.go("login");
  }

}


export default ProductsController;
