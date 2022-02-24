Component({
  options: {
    virtualHost: true,
    multipleSlots: true,
  },
  properties: {
    style: {
      type: String,
      value: '',
    },
    init: {
      type: Number,
      value: 0,
    }
  },
  data: {
    count: 0,
  },
  methods: {
    add: function() {
      this.setData({
        count: this.data.count + 1
      });
    },
    minus: function() {
      this.setData({
        count: this.data.count - 1
      });
    }
  },
  observers: {
    'init': function(newVal) {
      this.setData({
        count: newVal
      });
    }
  }
});
