<template>
    <div class="memberDetail">
        <el-tabs v-model="activeName">
            <el-tab-pane label="会员资料" name="detail">
                <div class="info-wrap">
                    <div class="title">{{memberData.collegeName}}</div>
                    <el-row :gutter="20">
                        <el-col :span="4" class="text-right">所属高校/单位</el-col>
                        <el-col :span="6">
                            <el-input v-model="memberData.collegeName"></el-input>
                        </el-col>
                        <el-col :span="4" class="text-right" :offset="2">会员级别</el-col>
                        <el-col :span="6">
                            <el-input v-model="memberData.userLevel"></el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="4" class="text-right">注册日期</el-col>
                        <el-col :span="6">
                            <el-input v-model="createDate"></el-input>
                        </el-col>
                        <el-col :span="4" class="text-right" :offset="2">联系人</el-col>
                        <el-col :span="6">
                             <el-input v-model="memberData.realName"></el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="4" class="text-right">结束日期</el-col>
                        <el-col :span="6">
                            <el-input v-model="endDate"></el-input></el-col>
                        <el-col :span="4" class="text-right" :offset="2">邮箱</el-col>
                        <el-col :span="6">
                            <el-input v-model="memberData.userEmail"></el-input></el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="4" class="text-right">主账号</el-col>
                        <el-col :span="6">
                            <el-input v-model="memberData.userAccount"></el-input></el-col>
                        <el-col :span="4" class="text-right" :offset="2">所在省市</el-col>
                        <el-col :span="6">
                            <el-input v-model="memberData.userPosition"></el-input></el-col>
                    </el-row>
                    <div class="line"></div>
                    <el-row :gutter="20">
                        <el-col :span="4" class="text-right">修改主账号密码</el-col>
                        <el-col :span="6">
                            <el-input v-model="memberData.wd" type="password"></el-input>
                        </el-col>
                    </el-row>
                </div>
                <div class="box-wrap">
                    <el-table></el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="权限设置" name="limit">
                <el-card class="control-card no-padding">
                    <div class="title" slot="header">
                        清华大学
                    </div>
                    <el-row class="text-center">
                        <el-col :span="4" class="border-bottom">主账号</el-col>
                        <el-col :span="10" class="border-bottom">QH101101</el-col>
                        <el-col :span="10" class="border-bottom">
                            <el-switch v-model="mainCountSwitch">
                            </el-switch>
                        </el-col>
                    </el-row>
                    <el-row class="text-center">
                        <el-col :span="4" class="border-bottom">子账户数量</el-col>
                        <el-col :span="10" class="border-bottom">
                            <!--<el-input-number v-model="subCountNum" :min="1" :max="20"></el-input-number>-->
                            <el-button type="primary" icon="minus" @click="subCountNumChange('minus')"></el-button>
                            <el-input v-model="subCountNum" class="subCountNum"></el-input>
                            <el-button type="primary" icon="plus" @click="subCountNumChange('plus')"></el-button>
                        </el-col>
                        <el-col :span="10" class="border-bottom">
                            <el-switch v-model="subCountSwitch"></el-switch>
                        </el-col>
                    </el-row>
                    <el-row class="text-center">
                        <el-col :span="4" class="border-bottom">会员级别</el-col>
                        <el-col :span="10" class="border-bottom">
                            <el-select v-model="memberLevel" placeholder="请选择">
                                <el-option v-for="item in levelOpt" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="10" class="border-bottom">&nbsp;</el-col>
                    </el-row>
                    <el-row class="text-center">
                        <el-col :span="4" class="border-bottom">期限</el-col>
                        <el-col :span="10" class="border-bottom">
                            <el-date-picker v-model="timeLimit" type="daterange" placeholder="选择日期范围" range-separator=" 至 ">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="10" class="border-bottom">&nbsp;</el-col>
                    </el-row>
                    <el-row class="text-center">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10" class="blue border-bottom">舆情管理</el-col>
                        <el-col :span="10" class="border-bottom">&nbsp;</el-col>
                    </el-row>
                    <el-row class="text-center">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10">全景舆情</el-col>
                        <el-col :span="10">
                            <el-switch></el-switch>
                        </el-col>
                    </el-row>
                    <el-row class="text-center">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10">舆情监测</el-col>
                        <el-col :span="10">
                            <el-switch></el-switch>
                        </el-col>
                    </el-row>
                    <el-row class="text-center">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10">事件监测</el-col>
                        <el-col :span="10">
                            <el-switch></el-switch>
                        </el-col>
                    </el-row>
                    <el-row class="text-center">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10" class="border-bottom">舆情报告</el-col>
                        <el-col :span="10" class="border-bottom">
                            <el-switch></el-switch>
                        </el-col>
                    </el-row>
                    <el-row class="text-center">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10" class="blue border-bottom">情报内参</el-col>
                        <el-col :span="10" class="border-bottom">&nbsp;</el-col>
                    </el-row>
                    <el-row class="text-center">
                        <el-col :span="4">权限</el-col>
                        <el-col :span="10">行业动态</el-col>
                        <el-col :span="10">
                            <el-switch></el-switch>
                        </el-col>
                    </el-row>
                    <el-row class="text-center">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10">人物动态</el-col>
                        <el-col :span="10">
                            <el-switch></el-switch>
                        </el-col>
                    </el-row>
                    <el-row class="text-center">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10">两微洞察</el-col>
                        <el-col :span="10">
                            <el-switch></el-switch>
                        </el-col>
                    </el-row>
                    <el-row class="text-center">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10">媒体声誉</el-col>
                        <el-col :span="10">
                            <el-switch></el-switch>
                        </el-col>
                    </el-row>
                    <el-row class="text-center">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10" class="border-bottom">内参报告</el-col>
                        <el-col :span="10" class="border-bottom">
                            <el-switch></el-switch>
                        </el-col>
                    </el-row>
                    <el-row class="text-center">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10" class="blue border-bottom">业务工具</el-col>
                        <el-col :span="10" class="border-bottom">&nbsp;</el-col>
                    </el-row>
                    <el-row class="text-center">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10">两微监管</el-col>
                        <el-col :span="10">
                            <el-switch></el-switch>
                        </el-col>
                    </el-row>
                </el-card>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<style lang="scss" scoped>
    .memberDetail{

        .el-row{
            height: 50px;
            line-height: 50px;
        }

        .line{
            width: 80%;
            height: 1px;
            border-top: 1px solid #dfe6ec;
            margin: 20px auto;
        }

        .pwd-box{
            height: 80px;
            line-height: 80px;
            margin-top: 20px;
            border-top: 1px solid #dfe6ec;
        }

        .el-tabs{
            .title{
                font-size: 16px;
            }

            .el-tabs__content{
                .info-wrap{
                    border: 1px solid #dfe6ec;
                    padding: 20px;
                    margin-bottom: 15px;
                }
            }
        }

        .el-card.control-card{

            .el-row{
                line-height: 60px;

                .el-col-4{
                    border-right: 1px solid #d1dbe5;
                }

                .blue{
                    color: #60a3ff;
                }

                .border-bottom{
                    border-bottom: 1px solid #d1dbe5;
                }

                .el-col{
                    .subCountNum{
                        width: 100px;
                    }
                }
            }
        }
    }
</style>
<script>
    export default{
        data(){
            return{
                activeName: 'detail',
                mainCountSwitch: true,
                subCountNum: 1,
                subCountSwitch: true,
                levelOpt: [
                    {value:　'试用', label: '试用'},
                    {value:　'A级', label: 'A级'},
                    {value:　'B级', label: 'B级'},
                    {value:　'C级', label: 'C级'},
                ],
                memberLevel: '',
                timeLimit: '',
                memberData:　'',
                createDate: '',
                endDate: ''
            }
        },
        methods: {

        },
        created(){
            this.memberData = this.$route.query;
            if(this.memberData.createDate != null && this.memberData.createDate != ''){
                this.createDate = new Date(this.memberData.createDate).format('yyyy-MM-dd');
            }
            if(this.memberData.endDate != null && this.memberData.endDate != ''){
                this.endDate = new Date(this.memberData.endDate).format('yyyy-MM-dd');
            }
        }
    }
</script>