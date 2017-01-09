
'use strict';

Ext.define('ProSer.model.UserAccountLocalStorageModel', {
  extend: 'Ext.data.Model',
  config: {
    fields: ['_id', 'email', 'phone', 'address'],
    identifier: {
      type: 'uuid'
    }
  }
});