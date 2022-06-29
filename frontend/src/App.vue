<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="container-fluid">
    <header>
      <Navigation />
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="sticky-top text-center p-1">
      <Footer />
    </footer>
  </div>

</template>