Ext.define('SalesApp.view.dashboard.RsmSalesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboard-rsmsales',
    
    onPeriodToggle: function(segBtn, btn, isPressed) {
    	var fromText = this.lookupReference('fromText');
    	var startField = this.lookupReference('startPeriodField');
    	var toText = this.lookupReference('toText');
    	var endField = this.lookupReference('endPeriodField');

    	fromText.setVisible(btn.getItemId() == 'rsmSalesPeriodBtn');
    	startField.setVisible(btn.getItemId() == 'rsmSalesPeriodBtn');
    	toText.setVisible(btn.getItemId() == 'rsmSalesPeriodBtn');
    	endField.setVisible(btn.getItemId() == 'rsmSalesPeriodBtn');
    }
});
