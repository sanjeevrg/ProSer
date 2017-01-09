Ext.define('ProSer.view.Main', {
  extend: 'Ext.Container',
  xtype: 'mainPanel',
  requires: [
    'Ext.Panel'
  ],
  config: {
    href: null,
    barTitle: null,
    layout: 'vbox',
    items: []
  },
  applyItems: function(newItems, oldItems) {
    newItems.push({
      xtype: 'titlebar',
      itemId: 'main-title-bar',
      cls: 'main-title-bar',
      docked: 'top',
      title: this.getBarTitle(),
      layout: 'hbox',
      items: [{
        itemId: 'menu-button',
        iconCls: 'menu',
        align: 'left'
      },{
        itemId:'myrequests-button',
        id:'myrequests-button',
        // iconCls:'menu',
        text:'MyRequests',
        height: '30px',
        // width:'80px',
        align:'right'
      },{
        itemId:'logout-button',
        // iconCls:'menu',
        text:'Logout',
        height: '30px',
        // width:'80px',
        align:'right'
      }]
    }//,
    // {
    //   xtype:'tabview',
    //   config: {
        
    //     tabBarPosition: 'bottom',
    //     iconCls : '',
    //     title : '', 

    //     items: [
    //         {
    //             xtype: 'ServicesListDisplay'
    //         },
    //         {                   
    //             xtype: 'Settings'
    //         }
    //     ]
    //   }
    // }
    );
    return this.callParent([newItems, oldItems]);
  },

  initialize: function() {
    this.callParent();
    var me = this;
    me.down('#menu-button').on({
      tap: function(e, t) {
        Ext.Viewport.toggleMenu('left');
      }
    });
    me.down('#logout-button').on({
      tap: function(e, t) {
        this.fireEvent('serviceItemSelected');
        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        Ext.Viewport.add(Ext.create('ProSer.view.user.UserLoginView'));
      }
    });
    me.down('#myrequests-button').on({
      tap: function(e, t) {
        this.fireEvent('myRequestsSelected');
        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        Ext.Viewport.add(Ext.create('ProSer.view.user.UserRequestsListView'));
      }
    });
  },

  addTitleBarButton: function(id, iconCls, align, text, onClick) {
    var me = this;
    var bar = me.down('#main-title-bar');

    bar.add({
      itemId: id,
      iconCls: iconCls,
      align: align || 'riht',
      badgeText: (text == 0 ? null : text),
      listeners: {
        tap: onClick
      }
    });
  },

  showTitleBarButton: function(id) {
    var me = this;
    var bar = me.down('#main-title-bar');
    var button = bar.down('#id');
    if (button) {
      button.show(true);
    }
  },

  hideTitleBarButton: function(id) {
    var me = this;
    var bar = me.down('#main-title-bar');
    var button = bar.down('#id');
    if (button) {
      button.hide(true);
    }
  },

  updateButtonbadge: function(id, text) {
    var bar = this.down('#main-title-bar');
    var button = bar.down('#' + id);
    if (button) {
      button.setBadgeText((text == 0 ? null : text));
    }
  },

  addSearchField: function() {
    var me = this;
    var bar = me.down('#main-title-bar');
    bar.add({
      xtype: 'searchfield',
      itemId: 'itemSearch',
      autoComplete: true,
      docked: 'right',
      flex: 1,
      placeHolder: 'Search'
    });
  }
});


// Ext.define('ProSer.view.Main', {
//     extend: 'Ext.tab.Panel',
//     xtype: 'main',
//     requires: [
//         'Ext.TitleBar',
//         'Ext.Video'
//     ],
//     config: {
//         tabBarPosition: 'bottom',

//         items: [
//             {
//                 title: 'Welcome',
//                 iconCls: 'home',

//                 styleHtmlContent: true,
//                 scrollable: true,

//                 items: {
//                     docked: 'top',
//                     xtype: 'titlebar',
//                     title: 'Welcome to Sencha Touch 2'
//                 },

//                 html: [
//                     "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
//                     "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
//                     "and refresh to change what's rendered here."
//                 ].join("")
//             },
//             {
//                 title: 'Get Started',
//                 iconCls: 'action',

//                 items: [
//                     {
//                         docked: 'top',
//                         xtype: 'titlebar',
//                         title: 'Getting Started'
//                     },
//                     {
//                         xtype: 'video',
//                         url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
//                         posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
//                     }
//                 ]
//             }
//         ]
//     }
// });
