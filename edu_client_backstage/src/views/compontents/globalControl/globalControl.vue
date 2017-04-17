<template>
	<div class="globalControl">
		<div class="top">
			<div class="item">
				<div class="icon-div">
					<img src="../../../assets/images/global-icon-temp.png" alt="">
				</div>
				<div class="text">
					<div class="text-top">20</div>
					<div class="text-bottom">今日待审核会员</div>
				</div>
			</div>
			<div class="item">
				<div class="icon-div">
					<img src="../../../assets/images/global-icon-temp.png" alt="">
				</div>
				<div class="text">
					<div class="text-top">20</div>
					<div class="text-bottom">今日待签约会员</div>
				</div>
			</div>
			<div class="item">
				<div class="icon-div">
					<img src="../../../assets/images/global-icon-temp.png" alt="">
				</div>
				<div class="text">
					<div class="text-top">20</div>
					<div class="text-bottom">会员总量</div>
				</div>
			</div>
			<div class="item">
				<div class="icon-div">
					<img src="../../../assets/images/global-icon-temp.png" alt="">
				</div>
				<div class="text">
					<div class="text-top">20</div>
					<div class="text-bottom">即将到期会员</div>
				</div>
			</div>
		</div>
		<div class="middle">
			<el-row :gutter="10">
				<el-col :span="12">
					<el-card class="control-card graph-card">
						<div slot="header" class="title">
							周签约会员统计
						</div>
						<div id="signedMemberGraph"></div>
					</el-card>
				</el-col>
				<el-col :span="12">
					<el-card class="control-card graph-card">
						<div slot="header" class="title">
							全国会员分布
						</div>
						<div id="globalMemberGraph"></div>
					</el-card>
				</el-col>
				<el-col :span="12">
					<el-card class="control-card graph-card">
						<div slot="header" class="title">
							会员雷达热图
						</div>
						<div id="memberRadarGraph"></div>
					</el-card>
				</el-col>
				<el-col :span="12">
					<el-card class="control-card graph-card">
						<div class="title" slot="header">
							会员类型占比
						</div>
						<div id="memberTypeGraph"></div>
					</el-card>
				</el-col>
			</el-row>
		</div>
		<div class="bottom">
			<el-row :gutter="10">
				<el-col :span="24">
					<el-card class="control-card graph-card tabs-card">
						<div class="title" slot="header">会员量统计</div>
						<el-tabs v-model="activeName" @tab-click="tabsClick" class="tabs tabs-right control-tabs">
							<el-tab-pane label="月统计" name="month">
								<div id="monthGraph"></div>
							</el-tab-pane>
							<el-tab-pane label="周统计" name="week">
								<div id="weekGraph"></div>
							</el-tab-pane>
						</el-tabs>
					</el-card>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<style lang="scss" scope>
	.globalControl{
		.top{
			margin-top: 20px;
			margin-bottom: 20px;
			height: 129px;
			border-bottom: 1px solid #f0f0f0;
			/*去除inline-block的间距*/
			font-size: 0;

			.item{
				display: inline-block;
				width: calc(100% / 4);
				font-size: 0;
				margin-top: 29px;
				margin-bottom: 29px;

				.icon-div{
					width: 50%;
					height: 66px;
					display: inline-block;
					text-align: right;
					vertical-align: middle;

					img{
						width: 66px;
						height: 66px;
						margin-right: 26px;
					}
				}

				.text{
					width: calc((50% - 1px));
					display:  inline-block;
					color: #333;
					border-right: 1px solid #f0f0f0;
					vertical-align: middle;

					.text-top{
						font-size: 30px;
					}
					.text-bottom{
						font-size: 18px;
					}
				}
			}
		}

		.middle{
			margin: 10px;
		}

		.bottom{
			margin: 10px 10px 50px;
		}
	}
</style>
<script>

	import echarts from "echarts"

	export default{
		data(){
		    return{
                activeName:　'month'
			}
		},
		methods: {
            tabsClick(event){
                console.log(event)
			}
		}
	}
</script>