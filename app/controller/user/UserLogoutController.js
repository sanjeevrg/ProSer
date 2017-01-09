

'use strict';

Ext.define('ProSer.controller.user.UserLogoutController', {
  extend: 'Ext.app.Controller',

  config: {
    routes: {
      'users/logout': '_logout'
    }
  },

  _logout: function() {
    var me = this;
    Ext.Ajax.request({
      url: Customer.util.Constants.SERVER_URL + '/users/logout',
      method: 'GET',
      scope: this,
      success: this._onLogoutSuccess,
      failure: this._onLogoutFailure
    });
  },

  _onLogoutSuccess: function() {
    Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    this.redirectTo('users/login');
  },

  _onLogoutFailure: function() {
    Ext.Msg.alert('Logout Failed');
    Ext.Viewport.toggleMenu('left');
  }
});