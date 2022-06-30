<script >

</script>

<template>

    <div>
        <div class="row">
            <div class="col text-center">
                <form>
                    <label for="searchProduct">Search Product</label>
                    <input type="text" placeholder="Enter Product Name" id="searchProduct"
                        class="form-control w-50 mb-3 mx-auto">
                    <button class="btn btn-primary w-25 mb-5">Search</button>
                </form>
            </div>
        </div>
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Amount</th>
                        <th>Price</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>

</template>