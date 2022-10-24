<template>

  <nav-component />

  <main>
    <router-view />
  </main>

  <footer-component/>

</template>

<script>
import NavComponent from './components/shared/NavComponent.vue'
import FooterComponent from './components/shared/FooterComponent.vue'

export default {
  name: 'app',
  components: {
    NavComponent,
    FooterComponent,
  }

}

</script>

<style>
/* MAIN ALWAYS COVERS (MIN) THE HEIGHT OF PAGE */
main{
  min-height: 100vh;
  background: #f1f1f1;
  display: flex;
  justify-content: center;
}
</style>
