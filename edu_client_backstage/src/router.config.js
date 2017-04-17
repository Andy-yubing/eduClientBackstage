import login from "./views/login/login.vue";
import body from "./views/compontents/common/body.vue";
import globalControl from './views/compontents/globalControl/globalControl.vue';
import memberManage from './views/compontents/memberControl/memberManage.vue';
import memberCheck from "./views/compontents/memberControl/memberCheck/memberCheck.vue";
import memberAdd from "./views/compontents/memberControl/memberAdd/memberAdd.vue";
import packageManage from "./views/compontents/packageManagement/packageManage.vue";
import systemSet from './views/compontents/systemSet/systemSet.vue';
import administrator from './views/compontents/administrator/administrator.vue';
import administratorList from './views/compontents/administrator/list/administratorList.vue';
import administratorInfo from './views/compontents/administrator/detail/administratorInfo.vue';
import systemMessage from './views/compontents/systemMessage/systemMessage.vue';

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
					path: 'packageManage',
					component: packageManage
				},
				{
					name: 'administrator',
					path: 'administrator',
					component: administrator,
					children: [
						{
							path: '',
							component: administratorList
						}
					]
				},
				{
					path: 'administratorInfo',
					component: administrator,
					children: [
						{
							path: '',
							component: administratorInfo
                        }
					]
				},
				{
					name: 'systemSet',
					path: 'systemSet',
					component: systemSet
				},
				{
					name: 'systemMessage',
					path: 'systemMessage',
					component: systemMessage
				}
			]
		},
	] 
}
