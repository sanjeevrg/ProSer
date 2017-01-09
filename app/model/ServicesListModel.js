
'use strict';

Ext.define('ProSer.model.ServicesListModel', {
  extend: 'Ext.data.Model',
  config: {
    fields: [{
      name: 'serviceName',
      type: 'string'
    }, {
      name: 'serviceDesc',
      type: 'string'
    }]
  }
});