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