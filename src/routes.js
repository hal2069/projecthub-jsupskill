import Home from './pages/Home.vue'
import AllProjects from './pages/AllProjects.vue'
import NewItem from './pages/NewItem.vue'
import Project from './pages/Project.vue'
import NewProject from './pages/NewProject.vue'
import Header from './shared/Header.vue'
import Page from './vuex/Page.vue'

export const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/projects', name: 'projects', components: {
    default: AllProjects,
    second: Header
  } },
  { path: '/project/new', name: 'new-project', component: NewProject, beforeEnter: (to, from, next) => {
    console.log('from routes')
    next()
  } },
  { path: '/project/:name', name: 'project', component: Project },
  { path: '/project/:name/new', name: 'new-event', component: NewItem },
  { path: '/vuex', component: Page },
  { path: '/aha', redirect: {name: 'home'} },
  { path: '*', redirect: '/projects' }
]
