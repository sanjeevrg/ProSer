Ext.define('ProSer.view.TabView', {
	extend: 'Ext.tab.Panel',
    xtype: 'tabview',

    requires: [
        'Ext.TitleBar',
        'ProSer.view.services.ServicesListView'
        // 'myapp.view.GetStarted'
    ],
    
    config: {
        
        tabBarPosition: 'bottom',
        iconCls : '',
        title : '', 

        items: [
            {
                xtype: 'ServicesListDisplay'
            },
            {                   
                xtype: 'Settings'
            }
        ]
    }
});