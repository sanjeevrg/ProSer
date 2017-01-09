
'use strict';

Ext.define('ProSer.store.services.ServicesListStore', {
  extend: 'Ext.data.Store',
  // config: {
    model: 'ProSer.model.ServicesListModel',
    autoLoad: true,
    // autoSync: true,
    proxy: {
      type: 'rest',
      url: '/resources/data/serviceslist.json',
      reader: {
          type:'json',
          rootProperty:'data'
      }
    }
  // }
});