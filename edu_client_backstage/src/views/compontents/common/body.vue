<template>
	<div class="body">
		<top></top>
		<left></left>
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