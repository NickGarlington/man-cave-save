class ProductsService {
  constructor($q, $firebaseArray, UserService) {
    this._UserService = UserService;
    this._$q = $q;

    this.ref = new Firebase("https://nag-mancave.firebaseio.com/");
    this.products = $firebaseArray(this.ref.child('products'));

    // this.products = [{
    //   id: 1,
    //   name: "Batman Headboard",
    //   image: "assets/images/bed.jpg",
    //   description: "LED lightup batman headboard"
    // }, {
    //   id: 2,
    //   name: "Batman Ceiling Fan",
    //   image: "assets/images/download (3).jpg",
    //   description: "Ceiling fan with batwings as blades"
    // }, {
    //   id: 3,
    //   name: "Batman Lounge Chair",
    //   image: "assets/images/download (2).jpg",
    //   description: "Black and orange batman chair for lounging or gaming"
    // }, {
    //   id: 4,
    //   name: "Batman Wall Symbol",
    //   image: "assets/images/mancave.jpg",
    //   description: "6' Bat symbol for wall"
    // }, {
    //   id: 5,
    //   name: "Batman Wall Hanging",
    //   image: "assets/images/images (2).jpg",
    //   description: "Batman outline for wall"
    //
    // }];
  }

  all() {
    return this.products.$loaded();
  }

  get(id) {
    return new this._$q((resolve, reject) => {

      this.products.$loaded()
        .then((response) => {
          resolve(response.$getRecord(id))
        })
        .catch((error) => {
          reject(error);
        });

    });

  }

  new() {
    return {
      title: "",
      description: "",
      image: "",
      price: ""
    };
  }

  add(user, product) {
    product.user_id = user.uid;
    product.contact_email = user.password.email;
    return this.products.$add(product);
  }

  remove(product) {
    this.products.$remove(product);
  }

}

export default ProductsService;
