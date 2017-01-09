
'use strict';

Ext.define('ProSer.controller.SettingsController', {
  extend: 'ProSer.controller.MainController',
  requires:[
  	'ProSer.view.Settings'
  ],
  config: {
    
    routes: {
      'settingsView': '_settingsView'
    },
    refs: [
      {
        ref:'logoutBtn',
        selector:'#logoutBtn'
      }
    ],
    control: {
      // loginButton: {
      //   tap: '_onLoginButtonClick'
      // }

    }
  },

  init:function(){
    console.log("init of SettingsController");
    this.control(
      {
        'buton[id=logoutBtn]': {
          'logoutButtonClick':this._logout
        }
      });
    },

   _serviceProvidersList: function() {
    var me = this;
    console.log('In SettingsController ');
    var view = Ext.create('ProSer.view.Settings');
    Ext.Viewport.setActiveItem(view);
  },

  _logout:function() {
  	var me = this;
      Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
      this.redirectTo('users/login');
  }
  	

});