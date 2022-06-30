<script>
import CustomerForm from '@/components/CustomerForm.vue'
import CustomerTable from '@/components/CustomerTable.vue'
import axios from 'axios';

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
        getAll() {
            fetch(`${this.baseUrl}/customerslist`, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(response => {
                    this.customers = response.data;
                });
        },
        saveCustomerHandler(customer) {
            fetch(`${this.baseUrl}/customersadd`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(customer)
            })
                .then(response => response.json())
                .then(data => {
                    data.status ? read() : alert(data.message);
                });
        }
    },
    mounted() {
        this.getAll();
    }
};
</script>

<template>

    <div>
        <CustomerForm @saveCustomer="saveCustomerHandler" />
        <CustomerTable />
    </div>

</template>