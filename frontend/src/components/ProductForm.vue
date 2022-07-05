<script >
export default {
    name: 'ProductForm',
    data() {
        return {
            product: {
                name: '',
                amount: '',
                price: ''
            }
        }
    },
    methods: {
        saveProduct() {
            this.$emit('saveProduct', this.product);
        }
    }
};
</script>

<template>
    <div>
        <form class="row mt-4 mb-5">
            <div class="col"></div>
            <div class="col">
                <div class="mb-3">
                    <label for="productName">Product Name</label>
                    <input v-model="product.name" type="text" placeholder="Product Name" id="productName"
                        class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="prodNum">Amount of Product</label>
                    <input v-model="product.amount" type="number" min="1" max="999" placeholder="0" id="prodNum"
                        class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="price">Price</label>
                    <input v-model="product.price" type="text" placeholder="0.00" id="price" class="form-control"
                        required>
                </div>
                <button @click="saveProduct" class="btn btn-primary w-100" type="button">Save</button>
            </div>
            <div class="col"></div>
        </form>
    </div>
</template>