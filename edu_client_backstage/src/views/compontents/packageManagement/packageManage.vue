<template>
    <div class="packageManage">
        <el-card class="control-card no-padding">
            <div class="title" slot="header">套餐管理</div>
            <div class="content">
                <el-row class="text-center">
                    <el-col :span="3">子账户数量</el-col>
                    <el-col :span="4">
                        <el-select v-model="memberLevel" placeholder="请选择">
                            <el-option v-for="item in levelOpt" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="5">
                        <el-button type="primary" icon="minus" @click="subCountNumChange('minus')"></el-button>
                        <el-input v-model="subCountNum" class="subCountNum"></el-input>
                        <el-button type="primary" icon="plus" @click="subCountNumChange('plus')"></el-button>
                    </el-col>
                    <el-col :span="3">
                        <el-switch v-model="subCountSwitch">
                        </el-switch>
                    </el-col>
                    <el-col :span="9">&nbsp;</el-col>
                </el-row>
                <el-row class="text-center">
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
                <el-row class="text-center">
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
                    <el-col :span="4">
                        <el-switch></el-switch>
                    </el-col>
                    <el-col :span="3">
                        <el-input></el-input>
                    </el-col>
                </el-row>
                <el-row class="text-center">
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
                <el-row class="text-center">
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
                <el-row class="text-center">
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
                <el-row class="text-center">
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
                <el-row class="text-center">
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
                <el-row class="text-center">
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
                <el-row class="text-center">
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
                <el-row class="text-center">
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
                <el-row class="text-center">
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
                <el-row class="text-center">
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
                <el-row class="text-center">
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
                <el-row class="text-center">
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
                <el-row class="text-center">
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
                <el-row class="text-center">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">微信监测</el-col>
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
                <el-row class="text-center">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">可关注高校</el-col>
                    <el-col :span="4">
                        不限
                    </el-col>
                    <el-col :span="4">
                        <el-button icon="plus" type="primary" size="small"></el-button>
                        <el-input class="number"></el-input>
                        <el-button icon="minus" type="primary" size="small"></el-button>
                    </el-col>
                    <el-col :span="4">
                        <el-button icon="plus" type="primary" size="small"></el-button>
                        <el-input class="number"></el-input>
                        <el-button icon="minus" type="primary" size="small"></el-button>
                    </el-col>
                    <el-col :span="4">
                        <el-button icon="plus" type="primary" size="small"></el-button>
                        <el-input class="number"></el-input>
                        <el-button icon="minus" type="primary" size="small"></el-button>
                    </el-col>
                    <el-col :span="3">
                        <el-input>
                            <template slot="append">元/所</template>
                        </el-input>
                    </el-col>
                </el-row>
                <el-row class="text-center">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">可关注人物</el-col>
                    <el-col :span="4">
                        不限
                    </el-col>
                    <el-col :span="4">
                        <el-button icon="plus" type="primary" size="small"></el-button>
                        <el-input class="number"></el-input>
                        <el-button icon="minus" type="primary" size="small"></el-button>
                    </el-col>
                    <el-col :span="4">
                        <el-button icon="plus" type="primary" size="small"></el-button>
                        <el-input class="number"></el-input>
                        <el-button icon="minus" type="primary" size="small"></el-button>
                    </el-col>
                    <el-col :span="4">
                        <el-button icon="plus" type="primary" size="small"></el-button>
                        <el-input class="number"></el-input>
                        <el-button icon="minus" type="primary" size="small"></el-button>
                    </el-col>
                    <el-col :span="3">
                        <el-input>
                            <template slot="append">元/人</template>
                        </el-input>
                    </el-col>
                </el-row>
                <el-row class="text-center">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">期限</el-col>
                    <el-col :span="4"><el-input></el-input></el-col>
                    <el-col :span="4">&nbsp;</el-col>
                    <el-col :span="4">&nbsp;</el-col>
                    <el-col :span="4">&nbsp;</el-col>
                    <el-col :span="3">&nbsp;</el-col>
                </el-row>
                <el-row class="text-center">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">价格</el-col>
                    <el-col :span="4">6个月</el-col>
                    <el-col :span="4"><el-input></el-input></el-col>
                    <el-col :span="4"><el-input></el-input></el-col>
                    <el-col :span="7">全单</el-col>
                </el-row>
                <el-row class="text-center">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="4">一年</el-col>
                    <el-col :span="4"><el-input></el-input></el-col>
                    <el-col :span="4"><el-input></el-input></el-col>
                    <el-col :span="7">9.8折</el-col>
                </el-row>
                <el-row class="text-center">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="4">两年</el-col>
                    <el-col :span="4"><el-input></el-input></el-col>
                    <el-col :span="4"><el-input></el-input></el-col>
                    <el-col :span="7">9折</el-col>
                </el-row>
                <el-row class="text-center">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="4">三年</el-col>
                    <el-col :span="4"><el-input></el-input></el-col>
                    <el-col :span="4"><el-input></el-input></el-col>
                    <el-col :span="7">8.5折</el-col>
                </el-row>
            </div>
        </el-card>
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
                    width: 40%;
                }

                .subCountNum{
                    width: 100px;
                }
            }
    
            .blue{
                color: #60a3ff;
            }
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
                subCountSwitch: false
            }
        },
        methods: {
            subCountNumChange(type){

            }
        }
    }
</script>