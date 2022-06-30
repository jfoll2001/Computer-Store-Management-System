<script>
export default {
    name: 'CustomerForm',
    data() {
        return {
            customer: {
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
        saveCustomer() {
            this.$emit('saveCustomer', this.customer);
        }
    }
};
</script>

<template>
    <div>
        <form class="mb-5">
            <div class="mt-3 row justify-content-center">
                <div class="col-5">
                    <div class="mb-3">
                        <label for="fName">First Name</label>
                        <input type="text" placeholder="First Name" id="fName" class="form-control w-50" required
                            v-model="customer.fname">
                    </div>
                    <div class="mb-3">
                        <label for="lName">Last Name</label>
                        <input type="text" placeholder="Last Name" id="lName" class="form-control w-50" required
                            v-model="customer.lname">
                    </div>
                    <div class="mb-5">
                        <label for="phoneNum">Phone Number</label>
                        <input type="text" placeholder="Phone Number" id="phoneNum" class="form-control w-50" required
                            v-model="customer.phonenumber">
                    </div>
                    <button class="btn btn-primary w-25" @click="saveCustomer">Save</button>
                </div>
                <div class="col-5">
                    <div class="mb-3">
                        <label for="address">Address</label>
                        <input type="text" placeholder="Address" id="address" class="form-control w-50" required
                            v-model="customer.address">
                    </div>
                    <div class="mb-3">
                        <label for="country">Country</label>
                        <input type="text" placeholder="Country" id="country" class="form-control w-50" required
                            v-model="country">
                    </div>
                    <div class="mb-3">
                        <label for="city">City</label>
                        <input type="text" placeholder="City" id="city" class="form-control w-50" required
                            v-model="city">
                    </div>
                    <div>
                        <label for="zipCode">Zip Code</label>
                        <input type="text" placeholder="Zip Code" id="zipCode" class="form-control w-50" required
                            v-model="zipcode">
                    </div>
                </div>
            </div>
        </form>
    </div>

</template>