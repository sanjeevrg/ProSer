'use strict';

Ext.define('ProSer.controller.serviceproviders.ServiceProvidersListController', {
  // extend: 'Ext.app.Controller',
  extend: 'ProSer.controller.MainController',
  requires:[
  'ProSer.view.serviceproviders.ServiceProvidersListView'
],

  config: {
    serviceProvidersStore: null,
    isServiceProviderSelected: false,
    routes: {
      'serviceproviderslist': '_serviceProvidersList'
    },
    refs: [
      {
        ref:'requestServiceBtn',
        selector:'#requestServiceBtn'
      }
    ],
    control: {
      // loginButton: {
      //   tap: '_onLoginButtonClick'
      // }

    }
  },

  init:function(){
    console.log("init of MessageStoreSummaryController");
    this.control({
      'list[id=serviceproviders-list]': {
       'serviceProviderSelected': this._serviceProviderSelected
      }
     });
    this.control(
      {
        'buton[id=requestServiceBtn]': {
          'requestServiceButtonClick':this._requestService
        }
      });
    },

  _serviceProvidersList: function() {
    var me = this;
    console.log('In ServiceProviders Controller');
    var view = Ext.create('ProSer.view.serviceproviders.ServiceProvidersListView');
    Ext.Viewport.setActiveItem(view);
  },

  _requestService:function(){
    var me = this;
    Ext.Msg.alert("Validate", "Your service provider will contact you soon");
  },

  disableButtons:function(){
    Ext.getCmp('requestServiceBtn').disable();
    
  },
  enableButtons:function(){
    Ext.getCmp('requestServiceBtn').enable();
    
  },

  _serviceProviderSelected:function() {
    var me = this;
    console.log('In ServiceProviders List Controller');
    if(this.isServiceProviderSelected==false || this.isServiceProviderSelected == undefined){
      this.isServiceProviderSelected = true;
      this.enableButtons();
    }
  }

  
});