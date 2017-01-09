
'use strict';

Ext.define('ProSer.view.user.UserRegistrationView', {
  extend: 'Ext.Container',
  alias: 'widget.user-registration',
  config: {
    id: 'user-registration',
    padding: 10,
    layout: {
      type: 'vbox'
    },
    items: [{
      xtype: 'panel',
      flex: 1
    }, {
      xtype: 'formpanel',
      flex: 2,
      items: [{
        xtype: 'emailfield',
        name: 'Email',
        placeHolder: 'Email',
        margin: 10
      }, {
        xtype: 'passwordfield',
        name: 'Password',
        placeHolder: 'Password',
        margin: 10
      }, {
        xtype: 'textfield',
        component: {
          xtype: 'input',
          type: 'tel'
        },
        name: 'Phone',
        placeHolder: 'Phone',
        margin: 10
      }, {
        xtype: 'button',
        itemId: 'register',
        text: 'Register',
        margin: 10
      }]
    }, {
      xtype: 'panel',
      flex: 1
    },{
      xtype: 'label',
      itemId: 'userLogin',
      html: 'Aleady a member? Login here!',
      flex: 1,
      padding: 10,
      styleHtmlContent: true,
      styleHtmlCls : 'login-view-registration-link underlined',
      docked: 'bottom',
    }]
  }
});