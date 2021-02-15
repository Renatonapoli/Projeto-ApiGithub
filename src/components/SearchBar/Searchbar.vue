<template>
<div class="d-flex flew-row">
  <!-- Formulário de pesquisa -->
  <input class="form-control" v-on:keyup="onUsernameInput" :value="this.username">
  <button class="searchbar--button" v-on:click="onSubmit()">
    <SearchIcon />
  </button>
</div>    
</template>

<style scoped>
@import './SearchBar.css';
</style>

<script>
import SearchIcon from '@/components/icons/SearchIcon.vue';

export default {
  name: 'SearchBar',
  components: {
    'SearchIcon': SearchIcon,
  },
  data: function () {
    return {
      username: '',
    }
  },
  methods: {
    onUsernameInput: function(e) {
      this.username = e.target.value;
    },
    onSubmit: function() {
      this.$router.push({
        name: 'result',
        params: {
          username: this.username
        }
      });
    }
  }
}
</script>