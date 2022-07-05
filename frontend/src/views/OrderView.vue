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
                .then(data => this.customers = data)

            fetch(`${this.baseUrl}/customerslist`, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(data => this.customers = data)

            fetch(`${this.baseUrl}/productslist`, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(data => this.customers = data)
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
    }
}
</script>

<template>
    <OrderForm @saveOrder="saveOrderHandler" />
    <OrderTable />

    <OrderModal>

    </OrderModal>
</template>