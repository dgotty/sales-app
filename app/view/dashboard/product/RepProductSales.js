
Ext.define("SalesApp.view.dashboard.product.RepProductSales",{
    extend: "Ext.grid.Panel",

    controller: "dashboard-product-repproductsales",
    viewModel: {
        type: "dashboard-product-repproductsales"
    },

    xtype: 'rep-product-sales',

    store: 'RepProductSalesStore',

    columns: {
    	defaults: {
    		sortable: true
    	},
    	items: [{
    		text: 'Product',
    		dataIndex: 'product_name',
    		flex: 4
    	},{
    		text: '40%+ Opportunities',
    		defaults: {
    			width: 120
    		},
    		columns: [{
    			text: 'Budget',
    			dataIndex: 'opp_budget_amount',
    			renderer: function(val) {
    				return Ext.util.Format.usMoney(val);
    			}
    		},{
    			text: 'Actual',
    			dataIndex: 'opp_actual_amount',
    			renderer: function(val) {
    				return Ext.util.Format.usMoney(val);
    			}
    		},{
    			text: 'Var',
    			dataIndex: 'opp_var_percent',
    			renderer: function(val) {
    				return val + '%';
    			}
    		}]
    	},{
    		text: 'Sales',
    		defaults: {
    			width: 120
    		},
    		columns: [{
    			text: 'Budget',
    			dataIndex: 'sales_budget_amount',
    			renderer: function(val) {
    				return Ext.util.Format.usMoney(val);
    			}
    		},{
    			text: 'Actual',
    			dataIndex: 'sales_actual_amount',
    			renderer: function(val) {
    				return Ext.util.Format.usMoney(val);
    			}
    		},{
    			text: 'Var',
    			dataIndex: 'sales_var_percent',
    			renderer: function(val) {
    				return val + '%';
    			}
    		}]
    	}]
    }
});
