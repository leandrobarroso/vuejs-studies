<template>
  <div class="hello">
    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">Default</h2>
      <md-button class="md-icon-button">
        <md-icon>favorite</md-icon>
      </md-button>
    </md-toolbar>
    <md-tabs md-centered>
      <md-tab md-label="Movies" md-icon="ondemand_video">
        <div class="md-layout-item">
          <md-field>
            <label for="movie">Movie</label>
            <md-select name="movie" id="movie">
              <md-option value="fight-club">Fight Club</md-option>
              <md-option value="godfather">Godfather</md-option>
              <md-option value="godfather-ii">Godfather II</md-option>
              <md-option value="godfather-iii">Godfather III</md-option>
              <md-option value="godfellas">Godfellas</md-option>
              <md-option value="pulp-fiction">Pulp Fiction</md-option>
              <md-option value="scarface">Scarface</md-option>
            </md-select>
          </md-field>
        </div>
          <md-card>
            <md-card-header>
              <md-avatar>
                <img src="https://kitt.lewagon.com/placeholder/users/leandrobarroso" alt="Avatar">
              </md-avatar>

              <div class="md-title">Leandro Barroso</div>
              <div class="md-subhead">Belo Horizonte, Brazil</div>
            </md-card-header>

            <md-card-media>
              <img src="/assets/examples/card-image-1.jpg" alt="People">
            </md-card-media>

            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
            </md-card-content>

            <md-card-actions>
              <md-button>Follow Me</md-button>
            </md-card-actions>
          </md-card>
      </md-tab>
      <md-tab md-label="Music" md-icon="music_note">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
      </md-tab>
      <md-tab md-label="Books" md-icon="books">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
      </md-tab>
      <md-tab md-label="Pictures" md-icon="photo">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
      </md-tab>
    </md-tabs>
    <router-link tag="md-button" class="md-raised md-primary" to="/about">
      <md-icon>navigate_next</md-icon> Go to About Me
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
