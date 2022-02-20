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
    cat: 'Men',
    img: 'can not Load',
    desc: 'about cloths'
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
    setCat(state, cat) {
      state.cat = cat
    },
    setImg(state, img) {
      state.img = img
    },
    setDesc(state, desc) {
      state.desc = desc
    }
  },
  actions: {},
  modules: {},


});