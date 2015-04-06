
Ext.define("SalesApp.view.dashboard.SalesDashboard",{
    extend: "Ext.panel.Panel",

    controller: "dashboard-salesdashboard",
    viewModel: {
        type: "dashboard-salesdashboard"
    },

    xtype: 'sales-dashboard',

    layout: {
    	type: 'vbox',
    	align: 'stretch'
    },

    items: [{
    	xtype: 'container',
    	flex: 1,
    	layout: {
    		type: 'hbox',
    		align: 'stretch'
    	},
    	items: [{
    		xtype: 'rsm-sales',
    		title: 'RSM Sales',
    		flex: 1
    	},{
    		xtype: 'panel',
    		title: 'Chart Panel',
    		html: 'chart goes here',
    		flex: 1
    	}]
    },{
    	xtype: 'tabpanel',
    	flex: 1,
    	dockedItems: [{
    		xtype: 'toolbar',
    		dock: 'top',
    		items: [{
    			xtype: 'button',
    			text: 'Filter components go here'
    		}]
    	}],
    	items: [{
    		xtype: 'panel',
    		title: 'Product',
    		html: 'product goes here'
    	},{
    		xtype: 'panel',
    		title: 'State',
    		html: 'state goes here'
    	},{
    		xtype: 'panel',
    		title: 'Stage',
    		html: 'stage goes here'
    	},{
    		xtype: 'panel',
    		title: 'Activity',
    		html: 'activity goes here'
    	}]
    }]
});
