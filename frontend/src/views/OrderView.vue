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
        saveOrderHandler(order) {
            fetch(`${this.baseUrl}/ordersadd`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(response => response.json())
                .then(data => {
                    data.status ? this.getAll() : alert(data.message);
                });
        },
        editRowHandler(id, i) {
            this.form.date = this.orders[i].date;
            this.form.shipper = this.orders[i].shipper;
            this.form.custname = this.orders[i].custname;
            this.form.prodname = this.orders[i].prodname;
            this.toUpdate = id;
            this.editModal.show();
        },
        updateRow() {
            fetch(`${this.baseUrl}/updateorders/${this.toUpdate}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.form)
            })
                .then(response => response.json())
                .then(data => {
                    data.status ? this.getAll() : alert(data.message);
                });
        },
        deleteOrderHandler(id) {
            fetch(`${this.baseUrl}/deleteorders/${id}`, {
                method: 'DELETE'
            })
                .then(response => response.json())
            this.getAll()
        }
    },
    mounted() {
        this.getAll();
        this.editModal = new bootstrap.Modal(document.querySelector('#edit-row'));
    }
}
</script>

<template>
    <OrderForm @saveOrder="saveOrderHandler" :customers="customers" :products="products" />
    <OrderTable :orders="orders" @edit-order="editRowHandler" @delete-order="deleteOrderHandler" />

    <OrderModal id="edit-row">
        <template #modal-form>
            <form class="mt-4 mb-5" @submit.prevent="updateRow">
                <div>
                    <div class="mb-3">
                        <label for="custName">Customer Name</label>
                        <select v-model="form.custname" id="custName" required class="form-control">
                            <option v-for="customer in customers">{{ customer.fname }} {{ customer.lname }}</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="productName">Product Name</label>
                        <select v-model="form.prodname" id="productName" required class="form-control">
                            <option v-for="product in products">{{ product.name }}</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="shipper">Shipper</label>
                        <input v-model="form.shipper" type="text" placeholder="Shipper" required class="form-control"
                            id="shipper">
                    </div>
                    <div class="mb-3">
                        <label for="orderDate">Order Date</label>
                        <input v-model="form.date" type="date" required class="form-control" id="orderDate">
                    </div>
                </div>
                <button type="submit" class="btn btn-primary mt-3 me-5 ms-5">Save changes</button>
                <button type="button" class="btn btn-secondary mt-3 ms-5 me-0 px-5"
                    data-bs-dismiss="modal">Close</button>
            </form>
        </template>
    </OrderModal>
</template>