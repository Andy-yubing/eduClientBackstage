<template>
	<div class="body">
		<div class="page-top">
			<top></top>
		</div>
		<div class="page-left">
			<left ref="left"></left>
		</div>
		<div class="page-right">
			<div class="content-wrap">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scope>
	.body{
		width: 100%;
		height: 100%; 
	}
</style>
<script>
	import top from "../common/top.vue";
	import left from "../common/left.vue";
	export default{
		data() {
            return {
                msg:"",
                user: {},
            }
        },
		methods:{
			getLimitslist(){
				this.$http.post("/apis/userMgrt/getUserPermission.json",{type: 'admin'}).then((res)=>{
					if(res.data.success){
						let arr = res.data.data.permissions;
                        let left = this.$refs.left;
                        left.onloadLimits(arr)
					} 
				},(err)=>{
					console.log(err);
				})
			},
		},
		mounted(){ 
			this.getLimitslist();
		},
		components:{top,left},
	}
</script>