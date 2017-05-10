import Vue from 'vue';
import Router from 'vue-router';
import IndexMain from './IndexMain.vue';
import ProjectMain from './ProjectMain.vue';
import InterfaceMain from './InterfaceMain.vue';

Vue.use(Router);

export default new Router({
  routes: [
      {path: '/', name: 'index', component: IndexMain},
      {path: '/project', name: 'project', component: ProjectMain},
      {path: '/interface', name: 'interface', component: InterfaceMain}
  ]
});
