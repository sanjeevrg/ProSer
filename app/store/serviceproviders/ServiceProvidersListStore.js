
'use strict';

Ext.define('ProSer.store.services.ServiceProvidersListStore', {
  extend: 'Ext.data.Store',
  // config: {
    model: 'ProSer.model.ServiceProvidersModel',
    autoLoad: true,
    // autoSync: true,
    proxy: {
      type: 'rest',
      url: '/resources/data/serviceprovider_elec.json',
      reader: {
          type:'json',
          rootProperty:'data'
      }
    }
  // }
});