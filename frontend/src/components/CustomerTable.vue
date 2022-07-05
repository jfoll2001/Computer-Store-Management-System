<script>
export default {
    props: ['customers']
}
</script>

<template>

    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Change Data</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(customer, i) in customers" :key="i">
                    <td>{{ customer.fname }} {{ customer.lname }}</td>
                    <td>{{ customer.phonenumber }}</td>
                    <td>{{ customer.address }}</td>
                    <td>{{ customer.city }}</td>
                    <td>
                        <button class="btn btn-warning me-5"
                            @click="$emit('editCustomer', customer.customersid, i)">Edit</button>
                        <button class="btn btn-danger"
                            @click="$emit('deleteCustomer', customer.customersid, i)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>