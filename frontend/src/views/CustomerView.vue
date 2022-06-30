<script>
import CustomerForm from '@/components/CustomerForm.vue'
import CustomerTable from '@/components/CustomerTable.vue'

export default {
    name: 'CustomerView',
    components: {
        CustomerForm,
        CustomerTable
    },
    data() {
        return {
            baseUrl: 'http://localhost:3001',
            customers: [],
            form: {
                fname: '',
                lname: '',
                address: '',
                city: '',
                zipcode: '',
                country: '',
                phonenumber: ''
            }
        };
    },
    methods: {       
        saveCustomerHandler(customer) {
            fetch(`${this.baseUrl}/customers/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(customer)
            })
                .then(response => response.json())
                .then(data => {
                    data.status ? read() : alert(data.message);
                });

        }
    }
};
</script>

<template>

    <div>
        <CustomerForm @saveCustomer="saveCustomerHandler" />
        <CustomerTable />
    </div>

</template>