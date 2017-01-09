
'use strict';

Ext.define('ProSer.view.CloseRequestView', {
  extend: 'ProSer.view.Main',
  alias: 'widget.user-Login',
  config: {
    id: 'close-request',
    //fullscreen: true,
    padding: 10,
    layout: {
      type: 'vbox'
    },
    items: [{
      xtype: 'panel',
      flex: 1
    }, {
      xtype: 'formpanel',
      flex: 1,
      scrollable: false,
      items: [{
        xtype: 'textfield',
        name: 'RequestId',
        fieldLabel: 'RequestId',
        allowBlank: false 
      }, {
        xtype: 'textfield',
        name: 'Rating',
        fieldLabel: 'Rating',
        margin: 10
      },{
        xtype: 'textfield',
        name: 'Payment Type',
        fieldLabel: 'PaymentType',
        margin: 10
      }, {
        xtype: 'button',
        itemId: 'closeRequestBtn',
        text: 'Close Request',
        // cls: ['md-button', 'md-raised'] ,
        margin: 10
      }]
    }]
  }
});