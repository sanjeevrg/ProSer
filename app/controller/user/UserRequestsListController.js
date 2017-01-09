'use strict';

Ext.define('ProSer.controller.user.UserRequestsListController', {
  // extend: 'Ext.app.Controller',
  extend: 'ProSer.controller.MainController',
  requires:[
  'ProSer.view.user.UserRequestsListView'
],

  config: {
    userRequestsStore: null,
    isUserRequestSelected: false,
    isUserRequestOpen:false,
    routes: {
      'userrequestslist': '_userRequestsList'
    },
    refs: [
      {
        ref:'closeUserRequestBtn',
        selector:'#closeUserRequestBtn'
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
      'list[id=userrequests-list]': {
       'userRequestSelected': this._userRequestSelected
      }
     });
    this.control({
      'button[id=closeUserRequestBtn]':{
        'closeUserRequestButtonClick': this._closeRequest
      }
    });
    // this.myrequests-button.setVisible(false);
    // Ext.getCmp('myrequests-button').hide();
  },

  _userRequestsList: function() {
    var me = this;
    console.log('In UserRequests Controller');
    var view = Ext.create('ProSer.view.user.UserRequestsListView');
    Ext.Viewport.setActiveItem(view);
  },

  disableButtons:function(){
    Ext.getCmp('closeUserRequestBtn').disable();

    
  },
  enableButtons:function(){
    Ext.getCmp('closeUserRequestBtn').enable();

    
  },

  _closeRequest:function(){
    console.log('Close request clicked');
    var me = this;
    Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);  
    // this.redirectTo('servicerequestslist');
    
    this.redirectTo('closeRequest');
    

  },

  _userRequestSelected:function(dataview, index, item, e) {
    var me = this;
    console.log('In UserRequests _serviceRequestSelected');
    if(this.isUserRequestSelected==false || this.isUserRequestSelected == undefined){
      if(e.data.requestStatus === "Open"){
        this.isUserRequestSelected = true;
        this.enableButtons();  
      }
      
    }else{
      if(e.data.requestStatus === "Closed"){
      // this.isServiceRequestSelected = true;
        this.disableButtons();
      }else if(e.data.requestStatus === "Open"){
        this.enableButtons();
      }
    }
  }

  
});