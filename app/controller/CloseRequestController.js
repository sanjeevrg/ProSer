'use strict';

Ext.define('ProSer.controller.CloseRequestController', {
  extend: 'ProSer.controller.MainController',

  config: {
    userName: null,
    routes: {
      'closeRequest': '_closerequest'
    },
    refs: {
      closerequestview: '#close-request',
      closeRequestButton: '#close-request #closeRequestBtn'
      // userRegistrationButton: '#user-login #userRegistration',
      // userForgotPasswordButton: '#user-login #userForgotPassword'
    },
    control: {
      closeRequestButton: {
        tap: '_onCloseRequestButtonClick'
      }
    }
  },

  _closerequest: function() {
    var me = this;
    console.log('In Login view');
    var view = Ext.create('ProSer.view.CloseRequestView');
    Ext.Viewport.setActiveItem(view);
  },

  _onCloseRequestButtonClick: function(button, e, eOpts) {
    console.log("_onCloseRequestButtonClick ");
    var me = this;
    Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    this.redirectTo('servicerequestslist');
  }

  
});