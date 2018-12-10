export default {
  x: {
    getId: function(d) {
      return d.year;
    },
    getValue: function(...args) {
      return this.x.getId.apply(this, args);
    },
    getClass: function(...args) {
      return this.x.getId.apply(this, args);
    },
    getTickText: function(val) {
      return val;
    }
  },

  y: {
    getValue: function(d) {
      return d.daysOpen;
    },
    getText: function(...args) {
      return this.y.getValue.apply(this, args);
    }
  },

  z: {
    getId: function(d) {
      return "canal";
    },
    getClass: function(...args) {
      return this.z.getId.apply(this, args);
    },
    getDataPoints: function(d) {
      return d;
    },
    getText: function(d) {
      return i18next.t(d.id);
    }
  },
  showValues: true
};
