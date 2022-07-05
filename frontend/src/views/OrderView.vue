<script >
import OrderTable from "@/components/OrderTable.vue"
import OrderForm from "@/components/OrderForm.vue"
import OrderModal from "@/components/OrderModal.vue"

export default {
    components: {
        OrderTable,
        OrderForm,
        OrderModal
    },
    data() {
        return {
            baseUrl: 'http://localhost:3001',
            orders: [],
            customers: [],
            products: [],
            form: {
                date: '',
                shipper: '',
                custname: '',
                prodname: ''
            },
            editModal: null,
            toUpdate: 0
        }
    },
    methods: {
        getAll() {
            fetch(`${this.baseUrl}/listorders`, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(data => this.orders = data)

            fetch(`${this.baseUrl}/customerslist`, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(data => this.customers = data)

            fetch(`${this.baseUrl}/productslist`, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(data => this.products = data)
        },
        saveOrderHandler() {
            fetch(`${this.baseUrl}/ordersadd`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(customer)
            })
                .then(response => response.json())
                .then(data => {
                    data.status ? this.getAll() : alert(data.message);
                });
        }
    },
    mounted() {
        this.getAll();
    }
}
</script>

<template>
    <OrderForm @saveOrder="saveOrderHandler" :customers="customers" :products="products" />
    <OrderTable />

    <OrderModal>

    </OrderModal>
</template>