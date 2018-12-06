const VueResponsive = {};

let ResponsiveMixin = {
  methods: {
    isResponsive() {
      return this.$options.responsive !== undefined;
    }
  },
  created() {
    function showHideNode(dim, hideDim, vue) {
      const {show, hide} = hideDim;
      console.log(vue)
      if (dim < hide) {
        console.log('need hide');
      }
    }

    if (this.isResponsive()) {
      showHideNode(this.$ww(), this.$options.responsive, this);

      window.addEventListener('resize', () => {
        clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(() => {
          showHideNode(this.$ww(), this.$options.responsive, this);
          console.log('Resized finished.', this.$ww());
        }, 250);
      })
    }
  }
};

VueResponsive.install = (Vue) => {
  Vue.prototype.$ww = () => {
    return window.innerWidth
  };
  Vue.mixin(ResponsiveMixin);
};

export default VueResponsive;

