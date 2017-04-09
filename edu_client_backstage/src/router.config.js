import login from "./views/login/index.vue";
import body from "./views/compontents/common/body.vue";
export default{
	 mode: 'history',
	 base:__dirname,
	 routes : [ 
		{path:"/",component:login},
		{path:"/body",component:body},
	] 
}
