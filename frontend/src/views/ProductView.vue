<script >
import ProductForm from '@/components/ProductForm.vue'
import ProductTable from '@/components/ProductTable.vue'

export default {
    name: 'ProductView',
    components: {
        ProductForm,
        ProductTable
    }
}
</script>

<template>

    <div>
        <ProductForm />
        <ProductTable />
    </div>

</template>