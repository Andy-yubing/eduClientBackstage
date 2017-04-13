<template>
	<div class="body">
		<div class="page-top">
			<top></top>
		</div>
		<div class="page-left">
			<left></left>
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
		components:{top,left}
	}
</script>