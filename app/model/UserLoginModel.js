
'use strict';

Ext.define('ProSer.model.UserLoginModel', {
  extend: 'Ext.data.Model',
  config: {
    fields: [{
      name: 'Email',
      type: 'string'
    }, {
      name: 'Password',
      type: 'string'
    }, {
      name: 'Phone',
      type: 'number'
    }],
    validations: [{
      type: 'presence',
      field: 'Email',
      message: 'is required.'
    }, {
      type: 'presence',
      field: 'Password',
      message: 'is required.'
    }]
  }
});