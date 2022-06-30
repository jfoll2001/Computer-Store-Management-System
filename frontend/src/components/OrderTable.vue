<script>

</script>

<template>

    <div>
        <div class="row">
            <div class="col text-center">
                <form>
                    <label for="searchCustomer">Search Orders</label>
                    <input type="text" placeholder="Enter Order Name" id="searchOrders"
                        class="form-control w-50 mb-3 mx-auto">
                    <button class="btn btn-primary w-25 mb-5">Search</button>
                </form>
            </div>
        </div>
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Order Number</th>
                        <th>Customer Name</th>
                        <th>Product Name</th>
                        <th>Order Date</th>                        
                    </tr>
                </thead>
            </table>
        </div>
    </div>

</template>