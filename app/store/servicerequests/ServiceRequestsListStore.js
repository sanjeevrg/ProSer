
'use strict';

Ext.define('ProSer.store.services.ServiceRequestsListStore', {
  extend: 'Ext.data.Store',
  // config: {
    model: 'ProSer.model.ServiceRequestsModel',
    autoLoad: true,
    // autoSync: true,
    proxy: {
      type: 'rest',
      url: '/resources/data/servicerequestlist_vismay.json',
      reader: {
          type:'json',
          rootProperty:'data'
      }
    }
  // }
});