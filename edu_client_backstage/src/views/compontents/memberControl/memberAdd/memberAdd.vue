<template>
    <div class="memberAdd">
        <el-tabs v-model="activeName">
            <el-tab-pane label="添加会员" name="add">
                <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="addMemberForm manage-form" :inline="true">
                    <el-form-item label="主账号用户名" prop="name">
                        <el-input v-model="ruleForm.name" placeholder="高校首字母缩写+注册日期"></el-input>
                    </el-form-item>
                    <el-form-item label="职位" prop="region">
                       <el-input v-model="ruleForm.job"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人">
                        <el-input v-model="ruleForm.relatePerson"></el-input>
                    </el-form-item>
                    <el-form-item label="Email">
                        <el-input v-model="ruleForm.email"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号">
                        <el-input v-model="ruleForm.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="高校所在地">
                        <el-input placeholder="省/市" v-model="ruleForm.address"></el-input>
                    </el-form-item>
                    <el-form-item label="所属高校">
                        <el-input v-model="ruleForm.college" placeholder="请输入全称"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="ruleForm.pwd" type="password" placeholder="系统默认初始密码为联系人手机号"></el-input>
                    </el-form-item>
                    <el-form-item label="审核人">
                        <el-input v-model="ruleForm.verifyName"></el-input>
                    </el-form-item>
                    <el-form-item label="所属部门">
                        <el-input v-model="ruleForm.department"></el-input>
                    </el-form-item>
                    <el-form-item label="电话">
                        <el-input v-model="ruleForm.verifyPhone"></el-input>
                    </el-form-item>
                    <el-form-item label="Email">
                        <el-input v-model="ruleForm.verifyEmail"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即开通</el-button>
                    </el-form-item>
                </el-form>
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
    .memberAdd{
        margin: 20px;

        .addMemberForm{
            border: 1px solid #f0f0f0;
            font-size: 0;

            .el-form-item{
                width: calc(50% - 10px);
            }

            .el-form-item:last-child{
                width: 100%;
                text-align: center;
                margin-top: 22px;
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
                activeName: 'add',
                ruleForm: {
                    name: '',
                    job: '',
                    relatePerson: '',
                    email: '',
                    phone: '',
                    address: '',
                    college: '',
                    pwd: '',
                    verifyName: '',
                    department: '',
                    verifyPhone: '',
                    verifyEmail: ''
                },
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
                timeLimit: ''

            }
        },
        methods: {
            submitForm(){

            },

            subCountNumChange(type){
                let num = this.subCountNum;
                if('minus' == type && num > 0){
                    this.subCountNum = num - 1;
                }else if('minus' == type && num == 0){
                    return ;
                } else {
                    this.subCountNum = num +　1;
                }
            }
        }
    }
</script>