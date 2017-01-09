'use strict';

Ext.define('ProSer.controller.servicerequests.ServiceRequestsListController', {
  // extend: 'Ext.app.Controller',
  extend: 'ProSer.controller.MainController',
  requires:[
  'ProSer.view.servicerequests.ServiceRequestsListView'
],

  config: {
    serviceRequestsStore: null,
    isServiceRequestSelected: false,
    isServiceRequestOpen:false,
    routes: {
      'servicerequestslist': '_serviceRequestsList'
    },
    refs: [
      {
        ref:'closeRequestBtn',
        selector:'#closeRequestBtn'
      }
      
    ],
    control: {
      // loginButton: {
      //   tap: '_onLoginButtonClick'
      // }

    }
  },

  init:function(){
    console.log("init of ServiceRequestsListController");
    this.control({
      'list[id=servicerequests-list]': {
       'serviceRequestSelected': this._serviceRequestSelected
      }
     });
    this.control({
      'button[id=closeRequestBtn]':{
        'closeRequestButtonClick': this._closeRequest
      }
    });
    // this.myrequests-button.setVisible(false);
    // Ext.getCmp('myrequests-button').hide();
  },

  _serviceRequestsList: function() {
    var me = this;
    console.log('In ServiceRequests Controller');
    var view = Ext.create('ProSer.view.servicerequests.ServiceRequestsListView');
    Ext.Viewport.setActiveItem(view);
  },

  disableButtons:function(){
    Ext.getCmp('closeRequestBtn').disable();

    
  },
  enableButtons:function(){
    Ext.getCmp('closeRequestBtn').enable();

    
  },

  _closeRequest:function(){
    console.log('Close request clicked');

  },

  _serviceRequestSelected:function(dataview, index, item, e) {
    var me = this;
    console.log('In ServiceRequests _serviceRequestSelected');
    if(this.isServiceRequestSelected==false || this.isServiceRequestSelected == undefined){
      if(e.data.sr_status === "Open"){
        this.isServiceRequestSelected = true;
        this.enableButtons();  
      }
      
    }else{
      if(e.data.sr_status === "Closed"){
      // this.isServiceRequestSelected = true;
        this.disableButtons();
      }else if(e.data.sr_status === "Open"){
        this.enableButtons();
      }
    }
  }

  
});