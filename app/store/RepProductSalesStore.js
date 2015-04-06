/**
 * @class SalesApp.store.RepProductSalesStore
 * @extends Ext.data.JsonStore
 * Description
 */
Ext.define('SalesApp.store.RepProductSalesStore', {
    extend: 'Ext.data.JsonStore',
    model: 'SalesApp.model.ProductSale',
    storeId: 'RepProductSalesStore',
    data: [{
        product_id: 1,
        product_name: 'Lesson Planner',
        opp_budget_amount: 1271363,
        opp_actual_amount: 1202142,
        opp_var_percent: 97,
        sales_budget_amount: 316818,
        sales_actual_amount: 307313,
        sales_var_percent: 93
    },{
        product_id: 2,
        product_name: 'Curriculum Builder',
        opp_budget_amount: 1491959,
        opp_actual_amount: 1142777,
        opp_var_percent: 100,
        sales_budget_amount: 230407,
        sales_actual_amount: 373658,
        sales_var_percent: 105
    },{
        product_id: 3,
        product_name: 'Gradebook',
        opp_budget_amount: 1364578,
        opp_actual_amount: 1752914,
        opp_var_percent: 60,
        sales_budget_amount: 152269,
        sales_actual_amount: 389779,
        sales_var_percent: 81
    },{
        product_id: 4,
        product_name: 'Discipline Tracker',
        opp_budget_amount: 1078720,
        opp_actual_amount: 1020262,
        opp_var_percent: 105,
        sales_budget_amount: 340040,
        sales_actual_amount: 303971,
        sales_var_percent: 87
    },{
        product_id: 5,
        product_name: 'Student Information System',
        opp_budget_amount: 1233753,
        opp_actual_amount: 1888067,
        opp_var_percent: 70,
        sales_budget_amount: 132482,
        sales_actual_amount: 412530,
        sales_var_percent: 68
    },{
        product_id: 6,
        product_name: 'Student Stats',
        opp_budget_amount: 1783302,
        opp_actual_amount: 1116290,
        opp_var_percent: 77,
        sales_budget_amount: 174097,
        sales_actual_amount: 333114,
        sales_var_percent: 95
    },{
        product_id: 7,
        product_name: 'Evaluate',
        opp_budget_amount: 1549481,
        opp_actual_amount: 1309820,
        opp_var_percent: 97,
        sales_budget_amount: 363652,
        sales_actual_amount: 448607,
        sales_var_percent: 93
    },{
        product_id: 8,
        product_name: 'Student Growth Objective',
        opp_budget_amount: 1465842,
        opp_actual_amount: 1629594,
        opp_var_percent: 74,
        sales_budget_amount: 385304,
        sales_actual_amount: 114772,
        sales_var_percent: 83
    },{
        product_id: 9,
        product_name: 'Special Education & IEP Suite',
        opp_budget_amount: 1563379,
        opp_actual_amount: 1016936,
        opp_var_percent: 76,
        sales_budget_amount: 443768,
        sales_actual_amount: 119143,
        sales_var_percent: 84
    },{
        product_id: 10,
        product_name: 'Training',
        opp_budget_amount: 1140335,
        opp_actual_amount: 1072555,
        opp_var_percent: 70,
        sales_budget_amount: 146584,
        sales_actual_amount: 413637,
        sales_var_percent: 89
    },{
        product_id: 11,
        product_name: 'Implementation',
        opp_budget_amount: 1295959,
        opp_actual_amount: 1114873,
        opp_var_percent: 85,
        sales_budget_amount: 466640,
        sales_actual_amount: 414533,
        sales_var_percent: 70
    }]
});