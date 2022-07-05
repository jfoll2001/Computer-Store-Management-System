<script>
export default {
    name: 'OrderForm',
    data() {
        return {
            order: {
                date: '',
                shipper: '',
                custname: '',
                prodname: ''
            }
        }
    },
    props: ['customers, products'],
    methods: {
        saveOrder() {
            this.$emit('saveOrder', this.order)
        }
    }
}
</script>

<template>

    <div>
        <form class="row mt-4 mb-5">
            <div class="col"></div>
            <div class="col">
                <div class="mb-3">
                    <label for="custName">Customer Name</label>
                    <select id="custName" required class="form-control">
                        <option v-for="customer in customers">{{ customer.fname }}</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="productName">Product Name</label>
                    <select name="" id="productName" required class="form-control"></select>
                </div>
                <div class="mb-3">
                    <label for="shipper">Shipper</label>
                    <input type="text" placeholder="Shipper" required class="form-control" id="shipper">
                </div>
                <div class="mb-3">
                    <label for="orderDate">Order Date</label>
                    <input type="date" required class="form-control" id="orderDate">
                </div>
                <button @click="saveOrder" class="btn btn-primary w-100">Place Order</button>
            </div>
            <div class="col"></div>
        </form>
    </div>

</template>