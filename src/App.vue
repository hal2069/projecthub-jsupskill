<template>
  <div class="wrapper">
    <app-header></app-header>
    <router-view></router-view>
    <router-view name="second"></router-view>
  </div>
</template>

<script>
  import Header from './shared/Header.vue'
  import Home from './pages/Home.vue'
  import Project from './pages/Project.vue'
  import NewProject from './pages/NewProject.vue'
  import AllProjects from './pages/AllProjects.vue'
  import NewItem from './pages/NewItem.vue'

  export default {
    name: 'app',
    components: {
      appHeader: Header,
      appHome: Home,
      appProject: Project,
      appNewProject: NewProject,
      appAllProjects: AllProjects,
      appNewItem: NewItem
    }
  }
</script>

<style>
  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box; }

  html, body, div, object, iframe, fieldset {
    margin: 0;
    padding: 0;
    border: 0; }

  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0; }

  header, footer, nav, section, article, hgroup, figure {
    display: block; }

  body {
    background: #fff;
    color: #222222;
    font: 120%/1.4 "HelveticaNeue", "Helvetica", "Arial", sans-serif;
    -webkit-text-size-adjust: 100%; }
  @media all and (min-width: 40em) {
    .timeline-container {
      padding-left: 3rem; } }

  .timeline-container {
    padding: 2rem;
  }

  a {
    color: gray;
    text-decoration: none; }

  a:hover, a:focus {
    color: #222222;
    text-decoration: underline; }

  p {
    margin: 0 0 1em; }

  img, object, video {
    max-width: 100%;
    border: 0; }

  a img {
    border: 0;
    outline: 0; }

  h1 {
    font-size: 2em;
    line-height: 1;
    letter-spacing: -0.02em;
    margin-bottom: 0.8em; }

  h2 {
    text-transform: lowercase;
    font-size: 3em;
    line-height: 1.1;
    margin: 0 0 0.4em; }

  h3 {
    font-size: 1.8em;
    line-height: 1.1;
    margin: 0 0 0.2em;
    text-transform: lowercase;
  }

  .timeline {
    border-left: 5px solid #dddddd;
    padding-bottom: 3em;
    position: relative;
  }
  .timeline:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: -1.47em;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background: #dddddd;
    border: 5px solid #dddddd; }

  .timeline-node {
    padding-left: 1em;
    margin-bottom: 3em;
    position: relative; }
  .timeline-node a {
    display: block; }
  .timeline-node:before {
    content: "";
    position: absolute;
    top: 0;
    left: -0.95em;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background: #fff;
    border: 5px solid #dddddd;
    box-sizing: content-box;
  }

  .timeline-stamp {
    font-size: 0.7em;
    color: gray; }
  .timeline-content {
    font-size: 0.8em;
  }
</style>
