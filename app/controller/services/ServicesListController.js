'use strict';

Ext.define('ProSer.controller.services.ServicesListController', {
  // extend: 'Ext.app.Controller',
  extend: 'ProSer.controller.MainController',
requires:[
  'ProSer.view.services.ServicesListView'
],
refs:
    [
      {
        ref:'servicesListView',
        selector:'#services-list'
      }
    ],
    views: [
      'services.ServicesListView'
    ],

  config: {
    servicesStore: null,
    routes: {
      'services': '_servicesList',
    //   'services/:serviceName': {
    //     action: '_servicesList'
    // },
    
    control: {
      navigate: {
        tap: '_onNavigateClick'
      }
    }
  }
},
init:function(){
    console.log("init of MessageStoreSummaryController");
    this.control({
      'list[id=services-list]': {
       'serviceItemSelected': this._serviceSelected
      }
     });
     },

  _serviceSelected:function(dataview, index, item, e){
      console.log("services selector");
      var me = this;
      Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
      this.redirectTo('serviceproviderslist');
     },


  _servicesList: function() {
    var me = this;
    console.log('In Services List controller');
    var view ;//= this.getServicesListView();
    if (!view) {
      var me = this;
      view = Ext.create('ProSer.view.services.ServicesListView');
    }

    Ext.Viewport.setActiveItem(view);

    if (!this.getServicesStore()) {
        this.setServicesStore(Ext.create('ProSer.store.services.ServicesListStore'));
         this.getServicesStore().on('load', me._onDataFetchSuccess, me);
      }
      me.getServicesStore().load();
      
    // var url = '/data/serviceslist.json';

    // Ext.Ajax.request({
    //   url: url,
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   jsonData: paramMap,
    //   success: function(conn, response, options, eOpts) {
    //     me._onDataFetchSuccess(Ext.decode(conn.responseText));
    //   },
    //   failure: function(conn, response, options, eOpts) {
    //     console.log(response);
    //     me.getItemListView().down('#no-data').setHidden(false);
    //     me.getItemListView().down('#grid').setHidden(true);
    //     if (response.status == 401) {
    //       me.redirectTo('users/login');
    //     }
    //   }
    // });

  },

  _onDataFetchSuccess:function(records, operation, success){
    console.log("_onDataFetchSuccess" );
    var messageRecords = [];
        Ext.each(operation, function(obj){
          messageRecords.push({
            serviceName: obj.raw.serviceName,
            serviceDescription: obj.raw.serviceDesc
          });
        });
    this.getServicesStore().setData(messageRecords);
    console.log("_onDataFetchSuccess" );
    // this.getServicesListView().reconfigure(this.getServicesStore());
      this.getServicesListView().store = this.getServicesStore();

    // this.getServicesListView().store = this.getMessageStore();
  },

  _onNavigateClick:function(serviceName) {
    var me = this;
    // Ext.Msg.alert('Login success');
    Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    // this.redirectTo('serviceproviderslist');
  }

  
});