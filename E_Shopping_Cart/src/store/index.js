import {
  createStore
} from "vuex";

export default createStore({
  state: {
    arrayOfItemInCart: [],
    selectedItem: [],
    cartitems: '0',
    user: 'Login',
    userDetails: [],
    about: 'Register',
    id: 1,
    name: 'Cloths',
    cost: '$100',
    category: 'Men',
    image: 'can not Load',
    description: 'about cloths',
    quantity: 0,

  },
  mutations: {
    setCartItems(state, cartitems) {
      state.cartitems = cartitems
    },
    addItemToCart(state, array) {
      state.arrayOfItemInCart.push(array)
    },
    selectedItem(state, item) {
      state.selectedItem.push(item)
    },
    setUser(state, user) {
      state.user = user
    },
    setAbout(state, about) {
      state.about = about
    },
    setId(state, id) {
      state.id = id
    },
    setName(state, name) {
      state.name = name
    },
    setCost(state, cost) {
      state.cost = cost
    },
    setCategory(state, category) {
      state.category = category
    },
    setImage(state, image) {
      state.image = image
    },
    setDescription(state, description) {
      state.description = description
    },
    setQuantity(state, quantity) {
      state.quantity = quantity
    },
  },
  actions: {},
  modules: {},


});