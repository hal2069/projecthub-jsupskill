<template>
  <div class="timeline-container" style="margin-top: 50px;">
    <form @submit.prevent="submit">
      <div class="row">
        <div class="input-field col s12 m6">
          <input  id="project_name" type="text" class="validate" v-model="newProject.name">
          <label for="project_name">Nazwa</label>
        </div>
        </div>
      <button class="btn light-blue darken-3" type="submit">Dodaj</button>
    </form>
    <button class="btn light-blue darken-3 add-new-btn" href="/projects">Wróć</button>
    <div style="height: 1000px"></div>
    <p id="here">tutaj</p>
  </div>
</template>

<script>
  import mock from '../data/mock'
  import _ from 'lodash'
  import toastr from 'toastr'

  export default {
    data () {
      return {
        newProject: {
          name: '',
          date: new Date()
        }
      }
    },
    methods: {
      submit () {
        this.$http.post('/projects', this.newProject)
          .then((res) => {
            console.log(res)
            this.newProject.name = ''
            this.newProject.name = ''
            // this.$router.push(/'projects')
            toastr.success('Udało się')
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
</script>
