<script>
import CustomerForm from '@/components/CustomerForm.vue';
import CustomerTable from '@/components/CustomerTable.vue';
import CustomerModal from '@/components/CustomersModal.vue';

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
            },
            editModal: null,
            toUpdate: 0
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
        },
        editRowHandler(id, i) {
            this.form.fname = this.customers[i].fname;
            this.form.lname = this.customers[i].lname;
            this.form.address = this.customers[i].address;
            this.form.city = this.customers[i].city;
            this.form.zipcode = this.customers[i].zipcode;
            this.form.country = this.customers[i].country;
            this.form.phonenumber = this.customers[i].phonenumber;
            this.toUpdate = id;
            this.editModal.show();
        },
        updateRow() {
            fetch(`${this.baseUrl}/updatecustomers/${this.toUpdate}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.form)
            })
                .then(response => response.json())
                .then(data => {
                    data.status ? this.getAll() : alert(data.message);
                });
        },
        deleteCustomerHandler(id) {
            fetch(`${this.baseUrl}/deletecustomers/${id}`, {
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
};
</script>

<template>
    <CustomerForm @saveCustomer="saveCustomerHandler" />
    <CustomerTable :customers="customers" @edit-customer="editRowHandler" @delete-customer="deleteCustomerHandler" />

    <CustomerModal id="edit-row">
        <template #modal-form>
            <form class="mb-5" @submit.prevent="updateRow">
                <div class="mt-3 row justify-content-center">
                    <div class="col">
                        <div class="mb-3">
                            <label for="fName">First Name</label>
                            <input type="text" placeholder="First Name" id="fName" class="form-control" required
                                v-model="form.fname">
                        </div>
                        <div class="mb-3">
                            <label for="lName">Last Name</label>
                            <input type="text" placeholder="Last Name" id="lName" class="form-control" required
                                v-model="form.lname">
                        </div>
                        <div class="mb-5">
                            <label for="phoneNum">Phone Number</label>
                            <input type="text" placeholder="Phone Number" id="phoneNum" class="form-control" required
                                v-model="form.phonenumber">
                        </div>
                        <button type="submit" class="btn btn-primary mt-5 w-100">Save changes</button>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label for="address">Address</label>
                            <input type="text" placeholder="Address" id="address" class="form-control" required
                                v-model="form.address">
                        </div>
                        <div class="mb-3">
                            <label for="country">Country</label>
                            <input type="text" placeholder="Country" id="country" class="form-control" required
                                v-model="form.country">
                        </div>
                        <div class="mb-3">
                            <label for="city">City</label>
                            <input type="text" placeholder="City" id="city" class="form-control" required
                                v-model="form.city">
                        </div>
                        <div>
                            <label for="zipCode">Zip Code</label>
                            <input type="text" placeholder="Zip Code" id="zipCode" class="form-control" required
                                v-model="form.zipcode">
                        </div>
                        <button type="button" class="btn btn-secondary mt-3 w-100"
                            data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </form>
        </template>
    </CustomerModal>
</template>