<template>
  <div class="container">
    <div
      class="row align-items-center justify-content-center"
      style="height: 100%"
    >
      <div class="col-8">
        <div class="row">
          <span class="PrimeiroNome">GitHub</span>
          <span class="SegundoNome">Search</span>
        </div>

        <div class="row-4">
          <div class="d-flex flew-row">
            <!-- Formulário de pesquisa -->
            <div class="pesquisar"><SearchBar /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./Home.css";
</style>

<script>
import SearchBar from "@/components/SearchBar/Searchbar.vue";

export default {
  name: "Home",
  components: {
    SearchBar: SearchBar,
  },
};
</script>

