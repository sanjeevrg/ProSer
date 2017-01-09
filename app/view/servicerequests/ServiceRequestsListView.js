Ext.define('ProSer.view.servicerequests.ServiceRequestsListView', {
  extend: 'ProSer.view.Main',
  // extend:'Ext.Container',
  alias: 'widget.item-grid-view',
  id: 'ServiceRequestsView',

  config: {
      id: 'service-requests-view',
      barTitle: 'Service Requests',
      itemId: 'ServiceRequestsView',
      storeId: null,
      layout: {
        type: 'vbox'
      },
      items: [{
        xtype: 'list',
        store:'ProSer.store.servicerequests.ServiceRequestsListStore',
        itemId: 'servicerequests-list',
        id:'servicerequests-list',
        itemTpl: '<h1>User:{sr_user}</h1><h1>Status:{sr_status}</h1><h1>Rating:{sr_rating}</h1><h1>Payment:{sr_payment}</h1>',
        data    : [
                    { sr_user : 'User1', sr_status:'Open',sr_rating:'',sr_payment:'' },
                    { sr_user : 'User2', sr_status:'Open',sr_rating:'',sr_payment:'' },
                    { sr_user : 'User3', sr_status:'Closed',sr_rating:'****',sr_payment:'By Cash' },
                    { sr_user : 'User4', sr_status:'Closed',sr_rating:'**',sr_payment:'By Cash' }
                ],
        height: '100%',
        width: '100%',
        flex: 1,
        listeners : {
        itemtap: function(dataview, index, item, e) {
            // Ext.Msg.alert("Validate", "You are clicked on Item");
            this.fireEvent('serviceRequestSelected',dataview,index,item,e);
          }
        }

      },
      {
      xtype:'button',
      itemId:'closeRequestBtn',
      id:'closeRequestBtn',
      text: 'Close Request',
      hidden:false,
      disabled: true,
      width:'100%',
      handler: function() {
                      this.fireEvent('closeRequestButtonClick');
                      // Ext.Msg.alert("Validate", "Your service provider will contact you soon");
                    }
      }
      ]
    }

});