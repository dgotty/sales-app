
Ext.define("SalesApp.view.dashboard.RsmSales",{
    extend: "Ext.grid.Panel",

    controller: "dashboard-rsmsales",
    viewModel: {
        type: "dashboard-rsmsales"
    },

    xtype: 'rsm-sales',
    plugins: 'rowediting',
    store    : {
                fields : [ 'name', 'age', 'votes', 'credits' ],
                data   : [
                    [ 'Bill', 35, 10, 427 ],
                    [ 'Fred', 22, 4, 42 ]
                ]
            },
            columns: {
                defaults: {
                    editor : 'numberfield',
                    width  : 120
                },
                items: [
                    { text: 'Name', dataIndex: 'name', flex: 1, editor: 'textfield' },
                    { text: 'Age', dataIndex: 'age' },
                    { text: 'Votes', dataIndex: 'votes' },
                    { text: 'Credits', dataIndex: 'credits' }
                ]
            }
});
