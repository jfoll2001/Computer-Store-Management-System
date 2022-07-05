<script >
export default {
    props: ['products']
}
</script>

<template>

    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Amount</th>
                    <th>Price</th>
                    <th>Change Data</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, i) in products" :key="i">
                    <td>{{ product.name }}</td>
                    <td>{{ product.amount }}</td>
                    <td>{{ product.price }}</td>
                    <td>
                        <button class="btn btn-warning me-5"
                            @click="$emit('editProduct', product.productsid, i)">Edit</button>
                        <button class="btn btn-danger"
                            @click="$emit('deleteProduct', product.productsid, i)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>