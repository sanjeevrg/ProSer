
'use strict';

Ext.define('ProSer.controller.MainController', {
  extend: 'Ext.app.Controller',

  config: {
    refs: {
      mainMenu: '#main-menu'
    },
    control: {
      mainMenu: {
        show: 'onMenuVisible',
        hide: 'onMenuHidden'
      }
    }
  },
  // Transitions
  slideLeftTransition: {
    type: 'slide',
    direction: 'left'
  },
  slideRightTransition: {
    type: 'slide',
    direction: 'right'
  },

  getActionFromHistory: function() {
    var me = this;
    var history = this.getApplication().getHistory();
    var actions = (history.getActions() || []).slice();
    var location = String(window.location.hash).substr(1);
    actions.pop();
    return _.find(actions, function(item) {
      return item.getUrl() === location;
    });
  },

  getPreviousPage: function() {
    var me = this;
    var history = this.getApplication().getHistory();
    var actions = history.getActions();
    if(actions.length > 1)
      return actions[actions.length - 2].getUrl();
  },

  onMenuVisible: function() {
    Ext.Viewport.getActiveItem().setMasked(true);
  },

  onMenuHidden: function() {
    Ext.Viewport.getActiveItem().setMasked(false);
  }
});