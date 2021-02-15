<template>
  <div class="container">
    <div class="row align-items-center justify-content-center"  style="height: 100%">
      <div class="col-8">
        <div class="row">
          <span class="PrimeiroNome">GitHub</span>
          <span class="SegundoNome">Search</span>
        </div>

        <div class="row">
          <div class="d-flex flew-row">
            <!-- Formulário de pesquisa -->
            <div class="pesquisar"><SearchBar />
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    <!-- <div class="textoGithub">
      <p>Github</p>
    </div>

    <div class="subtituloGithub">
      <p>Search</p>
    </div>

    <div>
      <input
        @keyup="getUSer"
        id="search"
        type="text"
        class="form-control"
        required
      />
    </div>
    <div>
      <button>
        TODO: Transformar este svg num componente separado
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4174 9.70871C17.4174 13.9661 13.9661 17.4174 9.70868 17.4174C5.4513 17.4174 2 13.9661 2 9.70871C2 5.4513 5.4513 2 9.70868 2C13.9661 2 17.4174 5.4513 17.4174 9.70871ZM15.8304 17.2446C14.1601 18.6031 12.0295 19.4174 9.70868 19.4174C4.34672 19.4174 0 15.0707 0 9.70871C0 4.34674 4.34672 0 9.70868 0C15.0706 0 19.4174 4.34674 19.4174 9.70871C19.4174 12.0295 18.6031 14.1601 17.2446 15.8304L23.8586 22.4444L22.4444 23.8586L15.8304 17.2446Z" fill="black"/>
        </svg>
      </button>

       <input @keyup="getUSer" id="lupa" type="button" class="button" required />
    </div> -->
</template>

<style scoped>
@import "./Home.css";
</style>

<script>
import SearchBar from '@/components/SearchBar/Searchbar.vue';

export default {
  name: 'Home',
  components: {
    'SearchBar': SearchBar
  }
}
</script>
