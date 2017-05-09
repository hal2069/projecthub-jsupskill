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
        let id = Math.floor(Math.random() * 10000000)
        const project = _.clone(this.newProject)
        project['_id'] = id
        mock.push(project)
        this.newProject.name = ''
        console.log('redirect to /projects')
      }
    }
  }
</script>
