'use strict';

Ext.define('ProSer.view.Settings', {
  extend: 'ProSer.view.Main',
  // extend:'Ext.Container',
  alias: 'widget.item-grid-view',
  id: 'Settings',
  xtype: 'Settings',
  title: 'Settings',
  config: {
      id: 'settings-view',
      barTitle: 'Settings',
      itemId: 'settingsView',
      storeId: null,
      layout: {
        type: 'vbox'
      },
      items: [{
        xtype:'button',
      itemId:'logoutBtn',
      id:'logoutBtn',
      text: 'Logout',
      hidden:false,
      disabled: false,
      width:'100%',
      handler: function() {
                      this.fireEvent('logoutButtonClick');
                      // Ext.Msg.alert("Validate", "Your service provider will contact you soon");
                    }
      }]
    }

});