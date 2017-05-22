<template>
    <div class="memberAdd">
        <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="addMemberForm manage-form" :rules="rules" :inline="true">
            <el-form-item label="主账号用户名" prop="userAccount">
                <el-input v-model="ruleForm.userAccount" placeholder="高校首字母缩写+注册日期"></el-input>
            </el-form-item>
            <el-form-item label="联系人" prop="realName">
                <el-input v-model="ruleForm.realName"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="userPhone">
                <el-input v-model="ruleForm.userPhone"></el-input>
            </el-form-item>
            <el-form-item label="所属高校" prop="collegeName">
                <el-input v-model="ruleForm.collegeName" placeholder="请输入全称"></el-input>
            </el-form-item>
            <el-form-item label="职称" prop="userDepartment">
                <el-input v-model="ruleForm.userDepartment"></el-input>
            </el-form-item>
            <el-form-item label="email" prop="userEmail">
                <el-input v-model="ruleForm.userEmail"></el-input>
            </el-form-item>
            <el-form-item label="高校所在地" prop="position">
                <el-cascader size="large" :options="options" v-model="ruleForm.position" @change="handleChange" class="edu-cascader">
                </el-cascader>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password" type="password" placeholder="系统默认初始密码为联系人手机号"></el-input>
            </el-form-item>

            <div class="line"></div>

            <el-form-item label="审核人" prop="verifyName">
                <el-input v-model="ruleForm.verifyName"></el-input>
            </el-form-item>
            <el-form-item label="所属部门" prop="verifyDepartment">
                <el-input v-model="ruleForm.verifyDepartment"></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="verifyPhone">
                <el-input v-model="ruleForm.verifyPhone"></el-input>
            </el-form-item>
            <el-form-item label="Email" prop="verifyEmail">
                <el-input v-model="ruleForm.verifyEmail"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即开通</el-button>
            </el-form-item>
        </el-form>
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
                margin-top: 20px;
            }

            .line{
                width: 100%;
                height: 1px;
                margin: 30px auto;
                background: #f0f0f0;
            }
        }
    }
</style>
<script>
    import {regionData,CodeToText} from "element-china-area-data"
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
            return{
                ruleForm: {
                    userAccount: '',
                    userDepartment: '',
                    realName: '',
                    userEmail: '',
                    userPhone: '',
                    position: [],
                    college_name: '',
                    password: '',
                    verifyName: '',
                    verifyDepartment: '',
                    verifyPhone: '',
                    verifyEmail: '',
                    areaCode: '',
                    area: ''
                },
                rules: {
                    realName:[
                        {required:true, message:"请输入联系人", trigger: 'blur' },
                        {min:2,max:10,message: "长度在 2 到 10 个字符",trigger: 'blur' },
                    ],
                    collegeName:[
                        {required:true, message:"请输入高校全称", trigger: 'blur' },
                        {min:4,max:20,message: "长度在 4 到 20 个字符",trigger: 'blur' },
                    ],
                    userDepartment:[
                        {required:true, message:"请输入职称", trigger: 'blur' },
                        {min:2,max:10,message: "长度在 2 到 10 个字符",trigger: 'blur' },
                    ],
                    userPhone:[
                        {required:true, message:"请输入手机号", trigger: 'blur' },
                        {validator: userPhone,trigger: 'blur' },
                    ],
                    userEmail:[
                        {required:true,message:"请输入邮箱",trigger: 'blur' },
                        {type: 'email', message: "请输入正确的邮箱",trigger: 'blur' }
                    ]
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
                timeLimit: '',
                options: regionData,
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
            },

            handleChange(val){
                let str = "";
                for (var i = 0; i < val.length; i++) {
                    if(i == val.length-1){
                        str += val[i];
                    }else{
                        str += val[i] + ","
                    }
                }
                this.ruleForm.areaCode = str;
                this.ruleForm.area = CodeToText[this.ruleForm.position[0]].replace("省", "").replace("市", "");
            }
        }
    }
</script>