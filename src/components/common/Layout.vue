<template>
    <div class="container-scroller">
        <slot name="head"></slot>
        <!-- partial:partials/_navbar.html -->
        <Header/>
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
            <!-- partial:partials/_sidebar.html -->
            <slot name="body"></slot>
        </div>
        <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
</template>

<script>
    import HeaderNav from './HeaderNav';
    import Route from '../router';

    export default {
        name: "Layout",
        components: { HeaderNav},
    }
</script>

<style scoped>

</style>