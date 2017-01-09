
'use strict';

Ext.define('ProSer.model.ServiceProvidersModel', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
    {
      name: 'serviceprovider_name',
      type: 'string'
    }, {
      name: 'serviceprovider_addr',
      type: 'string'
    }, {
      name: 'serviceprovider_rating',
      type: 'number'
    }
    ]
  }
});