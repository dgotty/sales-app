/**
 * @class SalesApp.store.SaleCycleStore
 * @extends Ext.data.JsonStore
 * Description
 */
Ext.define('SalesApp.store.SaleCycleStore', {
    extend: 'Ext.data.JsonStore',
    model: 'SalesApp.model.SaleCycle',
    storeId: 'SaleCycleStore',
    data: [{
        sale_cycle_id: 1,
        sale_cycle_name: '2010-2011'
    },{
        sale_cycle_id: 2,
        sale_cycle_name: '2011-2012'
    },{
        sale_cycle_id: 3,
        sale_cycle_name: '2012-2013'
    },{
        sale_cycle_id: 4,
        sale_cycle_name: '2013-2014'
    },{
        sale_cycle_id: 5,
        sale_cycle_name: '2014-2015'
    }]
});