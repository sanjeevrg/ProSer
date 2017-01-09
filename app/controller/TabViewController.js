'use strict';

Ext.define('ProSer.controller.TabViewController', {
  extend: 'ProSer.controller.MainController',
  requires:[
  	'ProSer.view.TabView'
  ],
  config: {
    
    routes: {
      'tabView': '_tabView'
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
    // this.control(
    //   {
    //     'buton[id=logoutBtn]': {
    //       'logoutButtonClick':this._logout
    //     }
    //   });
    },

   _tabView:function() {
   		var me = this;
    console.log('In TabViewController ');
    var view = Ext.create('ProSer.view.TabView');
    Ext.Viewport.setActiveItem(view);
   }


});