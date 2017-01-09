
'use strict';

Ext.define('ProSer.model.UserRegistrationModel', {
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
    }, {
      type: 'presence',
      field: 'Phone',
      message: 'is required.'
    }, {
      type: 'format',
      field: 'Phone',
      matcher: /[0-9]/
    }, {
      type: 'length',
      field: 'Email',
      min: 5,
      max: 32,
      message: 'is not in valid range.'
    }, {
      type: 'length',
      field: 'Password',
      min: 8,
      max: 16,
      message: 'is not in valid range.'
    }]
  }
});
