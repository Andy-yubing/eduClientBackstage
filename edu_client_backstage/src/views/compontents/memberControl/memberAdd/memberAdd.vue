<template>
    <div class="memberAdd">
        <el-tabs v-model="activeName">
            <el-tab-pane label="添加会员" name="add">
                <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="addMemberForm" :inline="true">
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

            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<style lang="scss" scoped>
    .memberAdd{
        margin: 20px;

        .addMemberForm{
            width: 800px;
            margin: auto;

            .el-form-item{
                width: 390px;

                .el-form-item__content{
                    width: 250px;
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
                }
            }
        }
    }
</script>