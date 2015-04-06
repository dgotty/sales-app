
Ext.define("SalesApp.view.dashboard.RsmSales",{
    extend: "Ext.grid.Panel",

    controller: "dashboard-rsmsales",
    viewModel: {
        type: "dashboard-rsmsales"
    },

    xtype: 'rsm-sales',

    store: 'RsmStore',

    columns: [{
    	text: 'First Name',
    	dataIndex: 'first_name',
    	flex: 1
    },{
    	text: 'Last Name',
    	dataIndex: 'last_name',
    	flex: 1
    },{
    	text: 'Email',
    	dataIndex: 'email',
    	flex: 1
    },{
    	text: 'Phone',
    	dataIndex: 'phone_number',
    	flex: 1
    }],

    dockedItems: [{
        xtype: 'toolbar',
        docked: 'top',
        items: [{
            xtype: 'segmentedbutton',
            listeners: {
                toggle: 'onPeriodToggle'
            },
            items: [{
                text: 'Month',
                pressed: true,
                itemId: 'rsmSalesMonthBtn'
            },{
                text: 'Quarter',
                itemId: 'rsmSalesQuarterBtn'
            },{
                text: 'Year',
                itemId: 'rsmSalesYearBtn'
            },{
                text: 'Period',
                itemId: 'rsmSalesPeriodBtn'
            }]
        },'->',{
            xtype: 'tbtext',
            html: 'From:',
            hidden: true,
            reference: 'fromText'
        },{
            xtype: 'datefield',
            hidden: true,
            width: 100,
            reference: 'startPeriodField'
        },{
            xtype: 'tbtext',
            html: 'To:',
            hidden: true,
            reference: 'toText'
        },{
            xtype: 'datefield',
            hidden: true,
            width: 100,
            reference: 'endPeriodField'
        }]
    }]
});

