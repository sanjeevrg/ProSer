

'use strict';

Ext.define('ProSer.view.services.ServicesListView', {
  extend: 'ProSer.view.Main',
  // extend:'Ext.Container',
  alias: 'widget.item-grid-view',
  id: 'ServicesListView',
  xtype: 'ServicesListDisplay',
  title: 'Services',
  config: {
      id: 'services-list-view',
      barTitle: 'Services',
      itemId: 'mainView',
      storeId: null,
      layout: {
        type: 'vbox'
      },
      items: [{
        xtype: 'list',
        store:'ProSer.store.services.ServicesListStore',
        itemId: 'services-list',
        id:'services-list',
        itemTpl: '<h1>{serviceName}</h1>-{serviceDesc}',
        data    : [
                    { serviceName : 'Electrician', serviceDesc:'Fixes electrical issues' },
                    { serviceName : 'Plumber', serviceDesc:'Fixes plumbing issues' },
                    { serviceName : 'Carpenter', serviceDesc:'Fixes wooden objects' },
                    { serviceName : 'Painting', serviceDesc:'Paints building' }
                ],
        height: '100%',
        width: '100%',
        listeners : {
        itemtap: function(dataview, index, item, e) {
            // Ext.Msg.alert("Validate", "You are clicked on Item");
            this.fireEvent('serviceItemSelected',dataview,index,item,e);
          }
        }


        // columns: [{
        //     text: 'Service',
        //     flex: 80,
        //     dataIndex: 'serviceName'
        // },{
        //     text: 'Description',
        //     flex: 35,
        //     dataIndex: 'serviceDescription'
        // }],
        // cls: ['dataview-list'],
        // defaultType: 'servicesListDataView',
        
        
        // useComponents: true,
     
      }]
    }


  //   initialize: function() {
  //   var me = this;
  //   me.callParent();
    
  // }
});

// Ext.define('ProSer.view.services.ServicesListView', {
//   extend: 'ProSer.view.Main',
//   xtype:'tableView',
//     requires: [
//          'ProSer.store.services.ServicesListStore',
//   ],
//   config: {
//       id: 'services-list-view',
//       barTitle: 'Services',
//       layout: 'vbox',
//       items:[
//         {
//           id: 'services-list',
//           xtype: 'dataview',
//           scrollable: false,
//           // store:'ProSer.store.services.ServicesListStore',
//            cls: ['dataview-list'],
//            itemTpl : ['<h1>{serviceName}</h1> - {serviceDesc}'],
//            data: [
//             {serviceName: 'CNN', serviceDesc: 'News from around the world' },
//             {serviceName: 'Yahoo', serviceDesc: 'Search engine' },
//             {serviceName: 'MSA', serviceDesc: 'Mustard Seed Academy' },
//             {serviceName: 'Google', serviceDesc: 'Another big search engine' }
//          ]
//         }
//       ]
//   }
//   });



// Ext.define('ServicesListDataView', {
//   extend: 'Ext.dataview.component.DataItem',
//   alias: 'widget.servicesListDataView',
//   config: {
//     padding: 5,
//     layout: {
//       type: 'hbox',
//       align: 'center'
//     },
//     defaults: {
//       margin: 5
//     },
//     items: [{
//       xtype: 'label',
//       itemId: 'serviceName',
//       flex: 2
//     }, {
//       xtype: 'label',
//       itemId: 'serviceDesc',
//       flex: 1
//     }, {
//       xtype: 'button',
//       itemId: 'serviceSelectButton',
//       iconCls: 'add',
//       flex: 1
//     }]
//   },
//   initialize: function() {
//     var me = this;
//     me.callParent();
//     me.on('painted', function() {


//       me.down('#serviceSelectButton').on('tap', function(obj, e, eOpts) {
//         //handle service select button
//       }, me);
//     }, me);
//   }
// });

//   config: {
//     id: 'services-list',
//     barTitle: 'Services',
//     layout: {
//       type: 'vbox'
//     },
//     items: [{
//       xtype: 'label',
//       itemId: 'name'
//     }, {
//       xtype: 'label',
//       itemId: 'description'
//     }
//     ]
//   }
// });

