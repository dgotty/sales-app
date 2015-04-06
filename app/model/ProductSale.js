Ext.define('SalesApp.model.ProductSale', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'product_id', type: 'int' },
        { name: 'product_name', type: 'auto' },
        { name: 'opp_budget_amount', type: 'int' },
        { name: 'opp_actual_amount', type: 'int' },
        { name: 'opp_var_percent', type: 'int' },
        { name: 'sales_budget_amount', type: 'int' },
        { name: 'sales_actual_amount', type: 'int' },
        { name: 'sales_var_percent', type: 'int' }

    ]
});
