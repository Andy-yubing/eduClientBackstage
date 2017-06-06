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
                            <el-select v-model="packageData.packageType" placeholder="请选择" @change="changePackageType">
                                <el-option v-for="item in levelOpt" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="10" class="border-bottom">&nbsp;</el-col>
                    </el-row>
                    <el-row class="text-center">
                        <el-col :span="4" class="border-bottom">套餐周期</el-col>
                        <el-col :span="10" class="border-bottom">
                            <el-date-picker class="mt12" v-model="packageData.packageStartDate" type="date"
                                            placeholder="选择开始日期"
                                            :picker-options="pickerOptions0">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="5" class="border-bottom">
                            <el-date-picker class="mt12" v-model="packageData.packageEndDate" type="date"
                                            placeholder="选择结束日期"
                                            :picker-options="pickerOptions1">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="5" class="border-bottom">&nbsp;</el-col>
                    </el-row>
                    <el-row v-for="(item, index) in allItemList" class="text-center">
                        <el-col :span="4" v-if="item.leftTitle">{{item.leftTitle}}</el-col>
                        <el-col :span="4" v-else :class="{'border-bottom': index == allItemList.length - 1}">&nbsp;</el-col>
                        <el-col :span="10" :class="[{'blue': item.textColor == 'blue'}, {'border-bottom': item.borderBottom || index == allItemList.length - 1}]">{{item.label}}</el-col>
                        <el-col :span="10" v-if="item.showSwitch == true" :class="{'border-bottom': item.borderBottom || index == allItemList.length - 1}">
                            <el-switch disabled v-model="item.value"></el-switch>
                        </el-col>
                        <el-col :span="10" v-else :class="{'border-bottom': item.borderBottom}">&nbsp;</el-col>
                    </el-row>
                    <el-row class="text-center">
                        <el-col :span="4" class="border-bottom">可关注高校</el-col>
                        <el-col :span="10" class="border-bottom">
                            <el-input-number v-model="collegeNum" @change="collegeNumChange" :min="1" class="mt12" v-if="showCounter == true"></el-input-number>
                            <span v-else>{{collegeNum}}</span>
                        </el-col>
                        <el-col :span="10" class="border-bottom">
                            &nbsp;
                        </el-col>
                    </el-row>
                    <el-row class="text-center">
                        <el-col :span="4" class="border-bottom">可关注人物</el-col>
                        <el-col :span="10" class="border-bottom">
                            <el-input-number v-model="characterNum" @change="characterNumChange" :min="1" class="mt12" v-if="showCounter == true"></el-input-number>
                            <span v-else>{{characterNum}}</span>
                        </el-col>
                        <el-col :span="10" class="border-bottom">
                            &nbsp;
                        </el-col>
                    </el-row>
                    <el-row class="text-center">
                        <el-col :span="4" class="border-bottom">子账号数量</el-col>
                        <el-col :span="10" class="border-bottom">
                            <el-input-number v-model="subAccountNum" @change="subAccountNumChange" :min="1" class="mt12" v-if="showCounter == true"></el-input-number>
                            <span v-else>{{subAccountNum}}</span>
                        </el-col>
                        <el-col :span="10" class="border-bottom">
                            &nbsp;
                        </el-col>
                    </el-row>
                    <el-row class="text-center">
                        <el-col :span="4" class="border-bottom">套餐价格</el-col>
                        <el-col :span="20" class="border-bottom">
                            <span v-model="totalAmount"></span>
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
                    height: 60px;

                    .subCountNum{
                        width: 100px;
                    }
                    
                    .mt12{
                        margin-top: 12px;
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
                        {required:true, message:"请输入职位", trigger: 'blur' }
                    ],
                    userEmail:[
                        {required:true,message:"请输入邮箱",trigger: 'blur' },
                        {type: 'email', message: "请输入正确的邮箱",trigger: 'blur' }
                    ]
                },
                subCountNum: 1,
                levelOpt: [
                    {value:　'试用', label: '试用'},
                    {value:　'A套餐', label: 'A级'},
                    {value:　'B套餐', label: 'B级'},
                    {value:　'C套餐', label: 'C级'},
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
                },
                collegeNum: 1,
                characterNum: 1,
                subAccountNum: 1,
                totalAmount: 0,
                allItemList: [
                    {label: '舆情管理', textColor: 'blue', showSwitch:　false, borderBottom: true},
                    {label: '全景舆情', textColor: 'black', showSwitch:true, value: false},
                    {label: '舆情监测', textColor: 'black', showSwitch:true, value: false},
                    {label: '事件监测', textColor: 'black', showSwitch:true, value: false},
                    {label: '舆情报告', textColor: 'black', showSwitch:true, value: false, borderBottom: true},
                    {label: '情报内参', textColor: 'blue', showSwitch:　false, borderBottom: true},
                    {label: '行业动态', textColor: 'black', showSwitch:true, value: false, leftTitle: '套餐详情'},
                    {label: '人物动态', textColor: 'black', showSwitch:true, value: false},
                    {label: '两微洞察', textColor: 'black', showSwitch:true, value: false},
                    {label: '媒体声誉', textColor: 'black', showSwitch:true, value: false},
                    {label: '内参报告', textColor: 'black', showSwitch:true, value: false, borderBottom: true},
                    {label: '舆情管理', textColor: 'blue', showSwitch:　false, borderBottom: true},
                    {label: '两微监管', textColor: 'black', showSwitch:true, value: false},
                ],
                packageList: '',
                showCounter: false,
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

            getPackageList(){
                this.$http.post('/apis/userMgrt/getPackageManageList.json').then(
                    function (response) {
                        this.packageList = response.data.data;
                        console.log(this.packageList)
                    }
                )
            },

            collegeNumChange(val){
                this.collegeNum = val;
            },

            characterNumChange(val){
                this.characterNum = val;
            },

            subAccountNumChange(val){
                this.subAccountNum = val;
            },

            changePackageType(val){
                //选择套餐前重置开关
                for(let i in this.allItemList){
                    if(this.allItemList[i].showSwitch){
                        this.allItemList[i].value = false;
                    }
                }
                if(this.packageList){
                    for(let i = 0; i < this.packageList.length; i++){
                        if(this.packageList[i].name == val){
                            let itemPriceList = this.packageList[i].itemPriceList;
                            if(itemPriceList){
                                for(let j = 0; j <　itemPriceList.length; j++){
                                    for(let n = 0; n < this.allItemList.length; n++){
                                        if(itemPriceList[j] == this.allItemList[n].label){
                                            this.allItemList[n].value = true;
                                            continue ;
                                        }
                                    }
                                }
                            }
                            this.collegeNum = this.packageList[i].concernCollegeNum;
                            this.characterNum = this.packageList[i].concernPersonNum;
                            this.subAccountNum = this.packageList[i].subAccountNum;
                            break;
                        }
                    }
                }

                if(val == 'A套餐' || val == 'B套餐'){
                    this.showCounter = false;
                }else{
                    this.showCounter = true;
                }
            },

            /**
             * 向后台提交数据 先验证套餐数据 再验证会员信息
             */
            submitData(){

            }
        },
        mounted(){
            this.getPackageList();
        },
        created(){
            let data = this.$route.query.data;
            if(data){
                this.ruleForm.userAccount = data.userAccount;
                this.ruleForm.realName = data.realName;
                this.ruleForm.userDepartment = data.userDepartment;
                this.ruleForm.userPhone = data.userPhone;
                this.ruleForm.userEmail = data.userEmail;
                this.ruleForm.collegeName = data.collegeName;
                this.ruleForm.status = 'edit';

                this.levelOpt = [
                    {value:　'A套餐', label: 'A级'},
                    {value:　'B套餐', label: 'B级'},
                    {value:　'C套餐', label: 'C级'},
                ]
            }
        }
    }
</script>