Ext.define('SalesApp.model.RsmModel', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'first_name', type: 'auto' },
        { name: 'last_name', type: 'auto' },
        { name: 'email', type: 'auto' },
        { name: 'phone_number', type: 'auto' }

    ]
});
