<script >
import OrderTable from "@/components/OrderTable.vue"
import OrderForm from "@/components/OrderForm.vue"
export default {
    name: 'OrderView',
    components: {
        OrderTable,
        OrderForm
    }
}
</script>

<template>
    <OrderForm />
    <OrderTable />
</template>