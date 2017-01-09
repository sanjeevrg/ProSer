'use strict';

Ext.define('ProSer.model.ServiceRequestsModel', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
    {
      name: 'sr_user',
      type: 'string'
    }, {
      name: 'sr_rating',
      type: 'string'
    }, {
      name: 'sr_status',
      type: 'string'
    },{
      name: 'sr_payment',
      type: 'string'
    }
    ]
  }
});