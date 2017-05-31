<template>
    <div class="memberAdd">
        <el-tabs v-model="activeName">
            <el-tab-pane label="添加会员" name="add">
                <el-form :model="ruleForm" ref="ruleForm" label-width="90px" class="addMemberForm" :rules="rules">
                    <el-form-item label="主账号" prop="userAccount">
                        <el-input v-model="ruleForm.userAccount" placeholder="请输入账号, 3-20位英文数字组合"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人" prop="realName">
                        <el-input v-model="ruleForm.realName"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号" prop="userPhone">
                        <el-input v-model="ruleForm.userPhone"></el-input>
                    </el-form-item>
                    <el-form-item label="所属高校" prop="collegeName">
                        <el-select filterable v-model="ruleForm.collegeName" placeholder="请选择大学名称">
                            <el-option-group
                                    v-for="group in options"
                                    :key="group.label"
                                    :label="group.label">
                                <el-option
                                        v-for="item in group.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-option-group>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="职位" prop="userDepartment">
                        <el-input v-model="ruleForm.userDepartment"></el-input>
                    </el-form-item>
                    <el-form-item label="Email" prop="userEmail">
                        <el-input v-model="ruleForm.userEmail"></el-input>
                    </el-form-item>
                </el-form>
                <div class="btn-wrap">
                    <el-button type="primary" @click="toPackagePage('ruleForm')">立即开通并设置套餐</el-button>
                </div>
            </el-tab-pane>
            <el-tab-pane label="套餐设置" name="package">
                <el-card class="control-card no-padding">
                    <el-row class="text-center">
                        <el-col :span="4" class="border-bottom">会员套餐</el-col>
                        <el-col :span="10" class="border-bottom">
                            <el-select v-model="packageData.packageType" placeholder="请选择">
                                <el-option v-for="item in levelOpt" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="10" class="border-bottom">&nbsp;</el-col>
                    </el-row>
                    <el-row class="text-center">
                        <el-col :span="4" class="border-bottom">套餐周期</el-col>
                        <el-col :span="10" class="border-bottom">
                            <el-date-picker class="mt7" v-model="packageData.packageStartDate" type="date"
                                            placeholder="选择开始日期"
                                            :picker-options="pickerOptions0">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="5" class="border-bottom">
                            <el-date-picker class="mt7" v-model="packageData.packageEndDate" type="date"
                                            placeholder="选择结束日期"
                                            :picker-options="pickerOptions1">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="5" class="border-bottom">&nbsp;</el-col>
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
                        <el-col :span="4">套餐详情</el-col>
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
                    <el-row class="text-center">
                        <el-col :span="24">
                            <el-button type="primary" @click="submitData()">确定</el-button>
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
            padding: 30px;
            width: 60%;
            margin: auto;

            .el-form-item:last-child{
                width: 100%;
                text-align: center;
                margin-top: 22px;
            }
        }

        .btn-wrap{
            margin-top: 20px;
            text-align: center;
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
    import schools from "../../../../school.json";
    export default{
        data(){
            let userPhone = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入手机号'));
                } else {
                    let reg = /^1(3|4|5|7|8)\d{9}$/;
                    if (!reg.test(value)) {
                        callback(new Error('请输入正确的手机号'));
                    }
                    callback();
                }
            };
            let userAccount = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入主账号'));
                } else {
                    let reg = /^[a-zA-Z\d]{3,20}$/;
                    if (!reg.test(value)) {
                        callback(new Error('请输入3-20位英文数字组合'));
                    }
                    callback();
                }
            };
            return{
                activeName: 'add',
                ruleForm: {
                    userAccount: '',
                    realName: '',
                    userDepartment: '',
                    userEmail: '',
                    userPhone: '',
                    collegeName: '',
                },
                rules: {
                    userAccount: [
                        {required:true, message:"请输入主账号", trigger: 'blur' },
                        {validator: userAccount,trigger: 'blur' },
                    ],
                    realName:[
                        {required:true, message:"请输入联系人", trigger: 'blur' }
                    ],
                    userPhone:[
                        {required:true, message:"请输入手机号", trigger: 'blur' },
                        {validator: userPhone,trigger: 'blur' },
                    ],
                    collegeName:[
                        {required:true, message:"请输入高校全称", trigger: 'change' },
                    ],
                    userDepartment:[
                        {required:true, message:"请输入职称", trigger: 'blur' },
                        {min:2,max:10,message: "长度在 2 到 10 个字符",trigger: 'blur' },
                    ],
                    userEmail:[
                        {required:true,message:"请输入邮箱",trigger: 'blur' },
                        {type: 'email', message: "请输入正确的邮箱",trigger: 'blur' }
                    ]
                },
                subCountNum: 1,
                levelOpt: [
                    {value:　'试用', label: '试用'},
                    {value:　'A级', label: 'A级'},
                    {value:　'B级', label: 'B级'},
                    {value:　'C级', label: 'C级'},
                ],
                options: schools,
                packageData: {
                    packageType: '',
                    packageStartDate: '',
                    packageEndDate: ''
                },
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                },
                pickerOptions1: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                }
            }
        },
        methods: {
            toPackagePage(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.activeName = 'package';
                    } else {
                        console.error('form error valid');
                        return false;
                    }
                });
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
            },

            /**
             * 向后台提交数据 先验证套餐数据 再验证会员信息
             */
            submitData(){

            }
        }
    }
</script>