
'use strict';

Ext.define('ProSer.view.serviceproviders.ServiceProvidersListView', {
  extend: 'ProSer.view.Main',
  alias: 'widget.item-grid-view',

  config: {
    id: 'service-provider-details',
    barTitle: 'Service Providers',
    layout: {
      type: 'vbox'
    },
    items: [
    {
      xtype: 'list',
      itemId: 'grid',
      id:'serviceproviders-list',
      inline: true,
      itemCls: 'item-grid',
      itemTpl: '<h1>{serviceProviderName}</h1><h1>{serviceProviderAddr}</h1>{serviceProviderRating}',
        data    : [
                    { serviceProviderName : 'Vismay Electrician', serviceProviderAddr:'Jaynagar',serviceProviderRating: '***' },
                    { serviceProviderName : 'Chinmay Electrician', serviceProviderAddr:'Marathalli',serviceProviderRating: '**'},
                    { serviceProviderName : 'Chiddu Electrician', serviceProviderAddr:'MG Road' ,serviceProviderRating:'****'},
                    { serviceProviderName : 'Satish Electrician', serviceProviderAddr:'Jaynagar' ,serviceProviderRating:'*'}
                ],
        height: '100%',
        width: '100%',
      // itemTpl: Customer.view.Templates.getItemGridTpl(),
      hidden: false,
      flex: 1,
      listeners : {
        itemtap: function(dataview, index, item, e) {
            // Ext.Msg.alert("Validate", "You clicked on Item");
            this.fireEvent('serviceProviderSelected',dataview,index,item,e);
          }
        }
    },
    // {
    //   xtype:'label',
    //   itemId: 'no-data',
    //   hidden: true,
    //   flex: 1,
    //   html: 'No items found'
    // },
    {
      xtype:'button',
      itemId:'requestServiceBtn',
      id:'requestServiceBtn',
      text: 'Request Service',
      hidden:false,
      disabled: true,
      width:'100%',
      handler: function() {
                      this.fireEvent('requestServiceButtonClick');
                      Ext.Msg.alert("Validate", "Your service provider will contact you soon");
                    }
    }
    // {
    //   xtype:'button',
    //   itemId:'rateService',
    //   text: 'Rate Service',
    //   hidden:false,
    //   width:'80%'
    // },{
    //   xtype:'button',
    //   itemId:'navigateBack',
    //   text:'NavigateBack',
    //   hidden:false,
    //   width:'80%'
    // }
    ]
  }
});

// Ext.define('ProSer.view.serviceproviders.ServiceProvidersListView', {
//   extend: 'Ext.Container',
//   alias: 'widget.services-list',
//   config: {
//     id: 'service-details',
//     barTitle: 'Services',
//     layout: {
//       type: 'vbox'
//     },
//     items: [{
//       xtype: 'carousel',
//       itemId: 'item-images',
//       flex: 1
//     }, {
//       xtype: 'label',
//       itemId: 'name'
//     }, {
//       xtype: 'label',
//       itemId: 'description'
//     }]
//   }
// });