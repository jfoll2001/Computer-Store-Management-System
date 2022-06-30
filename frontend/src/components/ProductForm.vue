<script >

</script>

<template>
    <div>
        <form class="row mt-4 mb-5">
            <div class="col"></div>
            <div class="col">
                <div class="mb-3">
                    <label for="productName">Product Name</label>
                    <input type="text" placeholder="Product Name" id="productName" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="prodNum">Amount of Product</label>
                    <input type="number" min="1" max="999" placeholder="0" id="prodNum" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="price">Price</label>
                    <input type="text" placeholder="0.00" id="price" class="form-control" required>
                </div>
                <button class="btn btn-primary w-25">Save</button>
            </div>
            <div class="col"></div>
        </form>
    </div>
</template>