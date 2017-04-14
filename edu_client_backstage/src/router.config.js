import login from "./views/login/login.vue";
import body from "./views/compontents/common/body.vue";
import globalControl from './views/compontents/globalControl/globalControl.vue';
import memberManage from './views/compontents/memberControl/memberManage.vue';
import memberCheck from "./views/compontents/memberControl/memberCheck/memberCheck.vue";
import memberAdd from "./views/compontents/memberControl/memberAdd/memberAdd.vue";
import systemSet from './views/compontents/systemSet/systemSet.vue';

export default{
	 mode: 'history',
	 base:__dirname,
	 routes : [ 
		{path:"/",component:login},
		{
			path:"/body",
			component:body,
			redirect: '/body/globalControl',
			children: [
				{
					name: 'globalControl',
					path: 'globalControl',
					component: globalControl
				},
				{
					name: 'memberManage',
					path: 'memberManage',
					component: memberManage
				},
				{
					path: 'memberCheck',
					component: memberCheck
				},
				{
					path: 'memberAdd',
					component: memberAdd
				},
				{
					name: 'systemSet',
					path: 'systemSet',
					component: systemSet
				}
			]
		},
	] 
}
