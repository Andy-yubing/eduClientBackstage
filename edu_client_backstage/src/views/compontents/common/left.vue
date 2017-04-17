<template>
	<div class="left">
		<el-menu :default-active="activeMenu"  :router=true class="" @open="handleOpen" @close="handleClose"  theme="dark">
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
             handleOpen(key, keyPath){
                 console.log(key, keyPath);
			 },

             handleClose(key, keyPath){
                 console.log(key, keyPath);
			 }
		 }

	}
</script>