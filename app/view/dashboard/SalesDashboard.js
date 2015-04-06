
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
    		xtype: 'rsm-opp-chart',
    		title: 'Chart Panel',
    		flex: 1
    	}]
    },{
    	xtype: 'tabpanel',
    	flex: 1,
    	dockedItems: [{
    		xtype: 'toolbar',
    		dock: 'top',
    		items: [{
    			xtype: 'combo',
    			store: 'SaleCycleStore',
                queryMode: 'local',
                displayField: 'sale_cycle_name',
                valueField: 'sale_cycle_id',
                value: 5
    		},'-',{
                xtype: 'combo',
                store: 'RsmStore',
                queryMode: 'local',
                displayField: 'first_name',
                valueField: 'id'
            }]
    	}],
    	items: [{
    		xtype: 'rep-product-sales',
    		title: 'Product'
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
