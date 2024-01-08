export default {
  methods: {
    isMobile(vuetify) {
      return vuetify.breakpoint.xsOnly;
    },
    isTabletOrDown(vuetify) {
      return vuetify.breakpoint.smAndDown;
    },
    isLargeScreen(vuetify) {
      return vuetify.breakpoint.mdAndUp;
    },
  },
};
