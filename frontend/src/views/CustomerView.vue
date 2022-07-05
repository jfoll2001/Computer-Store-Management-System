<script>
import CustomerForm from '@/components/CustomerForm.vue';
import CustomerTable from '@/components/CustomerTable.vue';
import CustomerModal from '@/components/CustomerModal.vue';

export default {
    components: {
        CustomerForm,
        CustomerTable,
        CustomerModal
    },
    data() {
        return {
            baseUrl: 'http://localhost:3001',
            customers: [],
            form: {
                fname: '',
                lname: '',
                address: '',
                city: '',
                zipcode: '',
                country: '',
                phonenumber: ''
            }
        };
    },
    methods: {
        getAll() {
            fetch(`${this.baseUrl}/customerslist`, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(data => this.customers = data)
        },
        saveCustomerHandler(customer) {
            fetch(`${this.baseUrl}/customersadd`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(customer)
            })
                .then(response => response.json())
                .then(data => {
                    data.status ? this.getAll() : alert(data.message);
                });
        }
    },
    mounted() {
        this.getAll();
    }
};
</script>

<template>
    <CustomerForm @saveCustomer="saveCustomerHandler" />

    <CustomerTable :customers="customers" />

    <CustomerModal id="edit-row">
        <template #modal-form>
            <form class="mb-5" @submit.prevent="updateRow">
                <div class="mt-3 row justify-content-center">
                    <div class="col-5">
                        <div class="mb-3">
                            <label for="fName">First Name</label>
                            <input type="text" placeholder="First Name" id="fName" class="form-control w-50" required
                                v-model="form.fname">
                        </div>
                        <div class="mb-3">
                            <label for="lName">Last Name</label>
                            <input type="text" placeholder="Last Name" id="lName" class="form-control w-50" required
                                v-model="form.lname">
                        </div>
                        <div class="mb-5">
                            <label for="phoneNum">Phone Number</label>
                            <input type="text" placeholder="Phone Number" id="phoneNum" class="form-control w-50"
                                required v-model="form.phonenumber">
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="mb-3">
                            <label for="address">Address</label>
                            <input type="text" placeholder="Address" id="address" class="form-control w-50" required
                                v-model="form.address">
                        </div>
                        <div class="mb-3">
                            <label for="country">Country</label>
                            <input type="text" placeholder="Country" id="country" class="form-control w-50" required
                                v-model="form.country">
                        </div>
                        <div class="mb-3">
                            <label for="city">City</label>
                            <input type="text" placeholder="City" id="city" class="form-control w-50" required
                                v-model="form.city">
                        </div>
                        <div>
                            <label for="zipCode">Zip Code</label>
                            <input type="text" placeholder="Zip Code" id="zipCode" class="form-control w-50" required
                                v-model="form.zipcode">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
            </form>
        </template>
    </CustomerModal>
</template>