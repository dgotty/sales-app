
Ext.define("SalesApp.view.dashboard.RsmSales",{
    extend: "Ext.grid.Panel",

    // controller: "dashboard-rsmsales",
    // viewModel: {
    //     type: "dashboard-rsmsales"
    // },
    requires: ['SalesApp.model.RsmModel', 'SalesApp.store.RsmStore'],

    xtype: 'rsm-sales',

    store: Ext.create('SalesApp.store.RsmStore'),

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
    }]

    // plugins: 'rowediting',
    // store    : {
    //             fields : [ 'name', 'age', 'votes', 'credits' ],
    //             data   : [
    //                 [ 'Bill', 35, 10, 427 ],
    //                 [ 'Fred', 22, 4, 42 ]
    //             ]
    //         },
    //         columns: {
    //             defaults: {
    //                 editor : 'numberfield',
    //                 width  : 120
    //             },
    //             items: [
    //                 { text: 'Name', dataIndex: 'name', flex: 1, editor: 'textfield' },
    //                 { text: 'Age', dataIndex: 'age' },
    //                 { text: 'Votes', dataIndex: 'votes' },
    //                 { text: 'Credits', dataIndex: 'credits' }
    //             ]
    //         }
});

