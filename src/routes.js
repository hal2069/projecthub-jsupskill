import Home from './pages/Home.vue'
import AllProjects from './pages/AllProjects.vue'
import NewItem from './pages/NewItem.vue'
import Project from './pages/Project.vue'
import NewProject from './pages/NewProject.vue'

export const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/projects', name: 'projects', component: AllProjects },
  { path: '/project/new', name: 'new-project', component: NewProject },
  { path: '/project/:name', name: 'project', component: Project },
  { path: '/project/:name/new', name: 'new-event', component: NewItem },
  { path: '/aha', redirect: {name: 'home'} },
  { path: '*', redirect: '/projects' }
]
