<template>
	<div class="left">
		<el-menu :default-active="activeMenu"  :router=true class="" theme="dark">
			<el-menu-item index="globalControl"><i class="nav-icon nav-icon1"></i>全局管理</el-menu-item>
			<el-submenu index="memberManage">
				<template slot="title"><i class="nav-icon nav-icon2"></i>会员管理</template>
				<el-menu-item-group>
					<el-menu-item index="memberManage">会员列表</el-menu-item>
					<el-menu-item index="memberCheck">会员审核</el-menu-item>
					<el-menu-item index="memberAdd">添加会员</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-menu-item index="administrator"><i class="nav-icon nav-icon3"></i>管理员</el-menu-item>
			<el-menu-item index="systemMessage"><i class="nav-icon nav-icon4"></i>系统通知</el-menu-item>
			<el-menu-item index="packageManage"><i class="nav-icon nav-icon5"></i>套餐管理</el-menu-item>
			<el-menu-item index="systemSet"><i class="nav-icon nav-icon6"></i>系统设置</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	 export default{
	     data(){
	        return{
                activeMenu: 'globalControl',
			}
		 },
		 methods: {

		 },
		 watch: {
			 /*
			  * 监测路由地址，当地址变化时，对应不同的菜单。
			  * */
             '$route.path': {
                 immediate: true,
                 handler(val) {
                     if(val){
                         let url=val.split('/')[2],nowNav=null;

                         if(url.indexOf("globalControl")!= -1) nowNav="globalControl";
                         if(url.indexOf("memberManage")!= -1) nowNav="memberManage";
                         if(url.indexOf("memberCheck") != -1) nowNav="memberCheck";
                         if(url.indexOf("memberAdd") != -1) nowNav="memberAdd";
                         if(url.indexOf("package") != -1) nowNav="packageManage";
                         if(url.indexOf("administrator") != -1) nowNav="administrator";
                         if(url.indexOf("systemSet") != -1) nowNav="systemSet";
                         if(url.indexOf("systemMessage") != -1) nowNav="systemMessage";

                         if(nowNav){
                             this.activeMenu=nowNav;
						 } else{
                             this.activeMenu=url;
						 }
                     }
                 }
             }
		 }

	}
</script>