<template>
    <div class="administratorInfo">
        <div class="info-wrap">
            <div class="title clearfix">
                <h2>管理员资料</h2>
                <div class="btn-wrap">
                    <el-button type="primary">修改资料</el-button>
                    <el-button type="primary">确认</el-button>
                </div>
            </div>
            <div class="box">
                <el-form :inline="true" label-width="100px" class="info-form">
                    <el-form-item label="姓名">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="职务">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="账号">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="手机号">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="所属部门">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="Email">
                        <el-input></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="pwd-wrap">
            <el-row>
                <el-col :span="3">输入密码</el-col>
                <el-col :span="5">
                    <el-input></el-input>
                </el-col>
                <el-col :span="5">
                    <el-input></el-input>
                </el-col>
                <el-col :span="6">
                    <el-button type="primary">确认</el-button>
                    <el-button type="primary">设为初始密码</el-button>
                </el-col>
            </el-row>
        </div>

        <div class="log-wrap">
            <div class="item">
                <div class="title"></div>
                <div class="detail">

                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .administratorInfo{
        margin: 20px;
        padding: 20px;

        .info-wrap{
            .title{
                margin-bottom: 20px;
                border-bottom: 2px solid #f0f0f0;
                height: 50px;
                line-height: 50px;

                h2{
                    float: left;
                }

                .btn-wrap{
                    float: right;
                }
            }

            .box{
                border: 1px solid #f1f1f1;

                .info-form{
                    width: 48%;
                    padding-top: 22px;
                    margin: auto;
                }
            }
        }
    }
</style>
<script>
    export default{
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>