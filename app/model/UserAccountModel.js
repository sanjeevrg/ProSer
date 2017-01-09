

'use strict';

Ext.define('Proser.model.UserAccountModel', {
  extend: 'Ext.data.Model',
  config: {
    fields: ['_id', 'email', 'phone', 'address'],
    identifier: {
      type: 'uuid'
    },
    proxy: {
      type: 'ajax'
    }
  }
});