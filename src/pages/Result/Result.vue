<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="titulo"><h1>Github Search</h1></div>
      </div>
      <div class="col">
        <div class="pesquisar"><SearchBar /></div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="row-4">
          <img :src="user.avatar_url" class="img-fluid" />
        </div>
        <div class="row-8">
          <div class="nomeMaiusculo">
            <h1 class="display">{{ user.name }}</h1>
          </div>
          <div class="nomeMinusculo">
            <h2 class="display">{{ username }}</h2>
          </div>
          <div class="todosIcones">
            <div>
              <OrganizationIcon />
              <div>
                <LocationIcon />
                <div>
                  <StarIcon />
                  <div>
                    <RepositoryIcon />
                    <div><FollowersIcon /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-8">
        <ul class="conteudoRepositorio">
          <li v-for="repository in repositories" :key="repository.id">
            <h5>{{ repository.name }}</h5>
            <p>{{ repository.description }}</p>
            <StarIcon /> {{ repository.stargazers_count }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar/Searchbar.vue";
import StarIcon from "@/components/icons/StarIcon.vue";
import OrganizationIcon from "@/components/icons/OrganizationIcon.vue";
import LocationIcon from "@/components/icons/LocationIcon.vue";
import RepositoryIcon from "@/components/icons/RepositoryIcon";
import FollowersIcon from "@/components/icons/FollowersIcon.vue";
import { Octokit } from "@octokit/rest";

export default {
  name: "Result",
  components: {
    SearchBar: SearchBar,
    StarIcon: StarIcon,
    OrganizationIcon: OrganizationIcon,
    LocationIcon: LocationIcon,
    RepositoryIcon: RepositoryIcon,
    FollowersIcon: FollowersIcon,
  },
  created: function() {
    var octokit = new Octokit();
    var repositoriesRequest = octokit.repos.listForUser({
      username: this.username,
    });
    repositoriesRequest
      .then((response) => {
        console.log(response.data);
        this.repositories = response.data;
      })
      .catch(() => {
        this.$router.push({ name: "not-found" });
      });

    var userRequest = octokit.users.getByUsername({ username: this.username });
    userRequest
      .then((response) => {
        this.user = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  data: function() {
    return {
      user: null,
      repositories: [],
    };
  },
  props: {
    username: String,
  },
};
</script>

<style scoped>
@import "./Result.css";
</style>

