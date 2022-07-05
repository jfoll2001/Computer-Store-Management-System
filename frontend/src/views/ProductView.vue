<script >
import ProductForm from '@/components/ProductForm.vue'
import ProductTable from '@/components/ProductTable.vue'
import ProductModal from '@/components/ProductModal.vue'

export default {
    components: {
        ProductForm,
        ProductTable,
        ProductModal
    },
    data() {
        return {
            baseUrl: 'http://localhost:3001',
            products: [],
            form: {
                name: '',
                amount: '',
                price: ''
            },
            editModal: null,
            toUpdate: 0
        }
    },
    methods: {
        getAll() {
            fetch(`${this.baseUrl}/productslist`, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(data => this.products = data)
        },
        saveProductHandler(product) {
            fetch(`${this.baseUrl}/productsadd`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            })
                .then(response => response.json())
                .then(data => {
                    data.status ? this.getAll() : alert(data.message);
                });
        },
        editRowHandler(id, i) {
            this.form.name = this.products[i].name;
            this.form.amount = this.products[i].amount;
            this.form.price = this.products[i].price;
            this.toUpdate = id
            this.editModal.show();
        },
        updateRow() {
            fetch(`${this.baseUrl}/updateproducts/${this.toUpdate}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.form)
            })
                .then(response => response.json())
                .then(data => {
                    data.status ? this.getAll() : alert(data.message);
                });
        },
        deleteProductHandler(id) {
            fetch(`${this.baseUrl}/deleteproducts/${id}`, {
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

    <div>
        <ProductForm @saveProduct="saveProductHandler" />
        <ProductTable :products="products" @edit-product="editRowHandler" @delete-product="deleteProductHandler" />

        <ProductModal id="edit-row">
            <template #modal-form>
                <form class="mt-4 mb-5" @submit.prevent="updateRow">
                    <div>
                        <div class="mb-3">
                            <label for="productName">Product Name</label>
                            <input v-model="form.name" type="text" placeholder="Product Name" id="productName"
                                class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="prodNum">Amount of Product</label>
                            <input v-model="form.amount" type="number" min="1" max="999" placeholder="0" id="prodNum"
                                class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="price">Price</label>
                            <input v-model="form.price" type="text" placeholder="0.00" id="price" class="form-control"
                                required>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3 me-5 ms-5">Save changes</button>
                    <button type="button" class="btn btn-secondary mt-3 ms-5 me-0 px-5"
                        data-bs-dismiss="modal">Close</button>
                </form>
            </template>
        </ProductModal>
    </div>

</template>