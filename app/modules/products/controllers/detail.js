class ViewProductController {
  constructor($stateParams, $state, ProductsService, UserService){
    this._$state = $state;
    this._UserService = UserService;
    this._ProductsService = ProductsService;

    this._UserService
      .isLoggedIn()
      .then((response) => {
        this.user = response;

        this._ProductsService.get($stateParams.id)
          .then((response) => {
            this.product = response;
            console.log(response)
          });

      })
      .catch((error) => {
        this._$state.go("login")
      });

  }

  logout() {
      this._UserService.logout();
      this._$state.go("login");
    }

}

export default ViewProductController;
