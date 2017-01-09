
'use strict';

Ext.define('ProSer.store.user.UserAccountLocalStorageStore', {
  extend: 'Ext.data.Store',
  requires: [
    'Ext.data.proxy.LocalStorage'
  ],
  config: {
    model: 'ProSer.model.UserAccountLocalStorageModel',
    autoLoad: true,
    // loginlocalstorage will be auto sync when this store is updated
    autoSync: true,
    proxy: {
      type: 'localstorage',
      id: 'useraccountlocalstorage'
    }
  }
});