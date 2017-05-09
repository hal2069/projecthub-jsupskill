<template>
  <li class="timeline-node">
    <div class="timeline-stamp">{{ createdOn }}</div>
    <div class="timeline-name">
     <!-- <router-link :to="'/project/' + project.name">{{ project.name }}</router-link>
    -->
      <a @click="navigateToProject">{{ project.name }}</a>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['project'],
    computed: {
      createdOn () {
        if (this.project.date) {
          return new Date(this.project.date).toLocaleDateString('pl-PL')
        }
        return ''
      }
    },
    methods: {
      navigateToProject () {
        // this.$router.push('/project/' + this.project.name)
        this.$router.push({name: 'project', params: {name: this.project.name}, query: { a: 12 }})
      }
    }
  }
</script>
