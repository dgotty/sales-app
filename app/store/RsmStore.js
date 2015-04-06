/**
 * @class SalesApp.store.Rsm
 * @extends Ext.data.JsonStore
 * Description
 */
Ext.define('SalesApp.store.RsmStore', {
    extend: 'Ext.data.JsonStore',
    requires: ['SalesApp.model.RsmModel'],
    model: 'SalesApp.model.RsmModel',
    storeId: 'RsmStore',
    data: [{
    	id: 1,
    	first_name: 'John',
    	last_name: 'Burd',
    	email: 'jburd@oncoursesystems.com',
    	phone_number: '215-123-4567'
    },{
    	id: 2,
    	first_name: 'William',
    	last_name: 'Jones',
    	email: 'wjones@oncoursesystems.com',
    	phone_number: '215-987-6543'
    },{
    	id: 3,
    	first_name: 'Jane',
    	last_name: 'Doe',
    	email: 'jdoe@oncoursesystems.com',
    	phone_number: '215-789-1234'
    },{
    	id: 4,
    	first_name: 'Juan',
    	last_name: 'Valdez',
    	email: 'jvaldez@oncoursesystems.com',
    	phone_number: '215-456-7896'
    },{
    	id: 5,
    	first_name: 'Angelina',
    	last_name: 'Jolie',
    	email: 'ajolie@oncoursesystems.com',
    	phone_number: '215-159-7532'
    }]
});