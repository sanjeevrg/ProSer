Ext.define('ProSer.view.user.UserRequestsListView', {
  extend: 'ProSer.view.Main',
  // extend:'Ext.Container',
  alias: 'widget.item-grid-view',
  id: 'UserRequestsView',

  config: {
      id: 'user-requests-view',
      barTitle: 'My Requests',
      itemId: 'UserRequestsView',
      storeId: null,
      layout: {
        type: 'vbox'
      },
      items: [{
        xtype: 'list',
        // store:'ProSer.store.userrequests.UserRequestsListStore',
        itemId: 'userrequests-list',
        id:'userrequests-list',
        itemTpl: '<h1>RequestId :{request_id}</h1><h1>Request Owner: {requestOwner}</h1><h1>Status: {requestStatus}</h1>',
        data    : [
                    { request_id : '242', requestOwner:'Chinmay Electrician', requestStatus:'Open' },
                    { request_id : '248', requestOwner:'Satish Electrician', requestStatus:'Closed' },
                    { request_id : '313', requestOwner:'Chiddu Plumber', requestStatus:'Open'  },
                    { request_id : '282', requestOwner:'Ramshankar Mason', requestStatus:'Closed'  }
                ],
        height: '100%',
        width: '100%',
        flex: 1,
        listeners : {
        itemtap: function(dataview, index, item, e) {
            // Ext.Msg.alert("Validate", "You are clicked on Item");
            this.fireEvent('userRequestSelected',dataview,index,item,e);
          }
        }

      },
      {
      xtype:'button',
      itemId:'closeUserRequestBtn',
      id:'closeUserRequestBtn',
      text: 'Close Request',
      hidden:false,
      disabled: true,
      width:'100%',
      handler: function() {
                      this.fireEvent('closeUserRequestButtonClick');
                      // Ext.Msg.alert("Validate", "Your service provider will contact you soon");
                    }
      }
      ]
    }

});