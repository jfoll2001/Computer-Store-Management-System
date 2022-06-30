<script>
import CustomerForm from '@/components/CustomerForm.vue'
import CustomerTable from '@/components/CustomerTable.vue'

export default {
    name: 'CustomerView',
    components: {
        CustomerForm,
        CustomerTable
    }
}
</script>

<template>

    <div>
        <CustomerForm />
        <CustomerTable />
    </div>

</template>