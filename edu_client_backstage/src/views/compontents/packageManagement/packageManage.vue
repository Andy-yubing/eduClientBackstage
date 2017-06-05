<template>
    <div class="packageManage">
        <el-card class="control-card no-padding">
            <div class="title" slot="header">套餐管理</div>
            <div class="content">
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="4">试用会员</el-col>
                    <el-col :span="4">A套餐</el-col>
                    <el-col :span="4">B套餐</el-col>
                    <el-col :span="4">C套餐</el-col>
                    <el-col :span="3">
                        单品价格
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3"> &nbsp;</el-col>
                    <el-col :span="2" class="blue">舆情管理</el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4" class="no-border-right">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="3">
                        <el-input></el-input>
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">全景舆情</el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="3">
                        <el-input></el-input>
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">舆情监测</el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="3">
                        <el-input></el-input>
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">舆情预警</el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="3">
                        <el-input></el-input>
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">事件监测</el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="3">
                        <el-input></el-input>
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">舆情报告</el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="3">
                        <el-input></el-input>
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3"> 权限</el-col>
                    <el-col :span="2" class="blue">情报内参</el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="3">
                        <el-input></el-input>
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">行业动态</el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="3">
                        <el-input></el-input>
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">人物动态</el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="3">
                        <el-input></el-input>
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">两微洞察</el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="3">
                        <el-input></el-input>
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">媒体声量</el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="3">
                        <el-input></el-input>
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">内参报告</el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="3">
                        <el-input></el-input>
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2" class="blue">业务平台</el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="3">
                        <el-input></el-input>
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">两微监管</el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="3">
                        <el-input></el-input>
                    </el-col>
                </el-row>

                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">可关注高校</el-col>
                    <el-col :span="4">
                        不限
                    </el-col>
                    <el-col :span="4">
                        <el-input-number v-model="collegeNum" @change="collegeNumChange" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="4">
                        <el-input-number v-model="collegeNum" @change="collegeNumChange" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="4">
                        <el-input-number v-model="collegeNum" @change="collegeNumChange" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="3">
                        <el-input>
                            <template slot="append">元/所</template>
                        </el-input>
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">可关注人物</el-col>
                    <el-col :span="4">
                        不限
                    </el-col>
                    <el-col :span="4">
                        <el-input-number v-model="collegeNum" @change="collegeNumChange" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="4">
                        <el-input-number v-model="collegeNum" @change="collegeNumChange" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="4">
                        <el-input-number v-model="collegeNum" @change="collegeNumChange" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="3">
                        <el-input>
                            <template slot="append">元/人</template>
                        </el-input>
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">期限</el-col>
                    <el-col :span="4"><el-input></el-input></el-col>
                    <el-col :span="4">&nbsp;</el-col>
                    <el-col :span="4">&nbsp;</el-col>
                    <el-col :span="7">&nbsp;</el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">可添加子账号</el-col>
                    <el-col :span="4">
                        <el-input-number v-model="collegeNum" @change="collegeNumChange" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="4">
                        <el-input-number v-model="collegeNum" @change="collegeNumChange" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="4">
                        <el-input-number v-model="collegeNum" @change="collegeNumChange" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="7">
                        <el-input-number v-model="collegeNum" @change="collegeNumChange" :min="1" class="mt7"></el-input-number>
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">价格</el-col>
                    <el-col :span="4">无</el-col>
                    <el-col :span="4">6000 元/半年  &nbsp;&nbsp; 8000 元/年</el-col>
                    <el-col :span="4">6000 元/半年  &nbsp;&nbsp; 8000 元/年</el-col>
                    <el-col :span="7"></el-col>
                </el-row>
            </div>
        </el-card>
        <div class="btn-wrap">
            <el-button type="primary" size="large" @click="submitPackage">确定</el-button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .packageManage{
        margin: 20px;

        .el-row{
            line-height: 60px;

            &.el-row:not(:first-child){
                .el-col{
                     border-right: 1px solid #d1dbe5;
                 }
             }

            &.el-row:first-child{
                .el-col:first-child{
                    border-right:1px solid #d1dbe5;
                    border-bottom:1px solid #d1dbe5;
                }
             }

            .el-col{
                height: 60px;

                &.el-col:not(:first-child){
                     border-bottom: 1px solid #d1dbe5;
                 }

                .el-input{
                    width: 60%;
                }

                .subCountNum{
                    width: 100px;
                }

                .mt7{
                    margin-top: 12px;
                }
            }
    
            .blue{
                color: #60a3ff;
            }
        }

        .btn-wrap{
            text-align: center;
            margin: 20px;
        }
    }
</style>
<script>
    export default{
        data(){
            return {
                levelOpt: [
                    {value:　'试用', label: '试用'},
                    {value:　'A级', label: 'A级'},
                    {value:　'B级', label: 'B级'},
                    {value:　'C级', label: 'C级'},
                ],
                memberLevel: 'C套餐',
                subCountNum: 6,
                subCountSwitch: false,
                collegeNum: 0
            }
        },
        methods: {
            collegeNumChange(type){

            },

            initPackageItem(){

            },

            submitPackage(){

            }
        }
    }
</script>