<script>
export default {
    props: ['orders']
}
</script>

<template>

    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>Order Number</th>
                    <th>Customer Name</th>
                    <th>Product Name</th>
                    <th>Order Date</th>
                    <th>Change Data</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(order, i) in orders" :key="i">
                    <td>{{ order.ordersid }}</td>
                    <td>{{ order.custname }}</td>
                    <td>{{ order.prodname }}</td>
                    <td>{{ order.date }}</td>
                    <td>
                        <button class="btn btn-warning me-5"
                            @click="$emit('editOrder', order.ordersid, i)">Edit</button>
                        <button class="btn btn-danger"
                            @click="$emit('deleteOrder', order.ordersid, i)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>