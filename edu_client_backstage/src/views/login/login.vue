<template>
	<div id="login">
		<el-row type="flex"  justify="center" class="login_top">
			<el-col :span="6" class="text-center"><img src="../../assets/images/logo.png" height="37" width="151" alt=""></el-col>
			<el-col :span="10"></el-col>
			<el-col :span="6" class="text-center"><h3>教育行业大数据应用服务平台</h3></el-col>
		</el-row>
		<div class="login_body">
			<h2 class="text-center">慧数教育后台</h2>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="ruleForm" action="/apis/login.do" method="post">
				<el-form-item  prop="user">
					<el-input v-model="ruleForm.user" placeholder="请输入名称" name="username"></el-input>
				</el-form-item>
				<el-form-item  prop="pass">
					<el-input type="password" v-model="ruleForm.pass" name="password" auto-complete="off" placeholder="请输入密码"></el-input>
				</el-form-item>
				<el-form-item class="btn-box">
					<el-button type="primary" @click="submitForm('ruleForm')">立即提交</el-button>
				</el-form-item>
				<input type="hidden" name="type" value="admin">
			</el-form>
			<!--  <el-button type="primary" @click="submitForm()">立即提交</el-button> -->
		</div>
	</div>
</template>
<script>
    import "./js/security.js";
    export default{
        data(){
            return {
                ruleForm:{
                    user:"",
                    pass:"",
                },
                rules:{
                    user:[
                        { required: true, message: '请输入账号', trigger: 'blur' },
                        { min: 5, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                    ],
                    pass:[
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            submitForm(formName){
                this.$refs[formName].validate((valid)=>{
                    if(valid){
                        this.$http.post("/apis/security/generateKey.do").then(
                            function (response) {
//								console.log(response)
                                if(response.data.success){
                                    let exponent = response.data.data.publicKeyExponent;
                                    let modulus = response.data.data.publicKeyModulus;
                                    RSAUtils.setMaxDigits(200);
                                    let key = new RSAUtils.getKeyPair(exponent, "", modulus);
                                    var password =  $('input[type=password]').val();
                                    let encrypedPwd = RSAUtils.encryptedString(key,password);
                                    $('input[name=password]').val(encrypedPwd);
                                    $(".ruleForm").submit();
                                }else {
                                    console.error(response.data.message)
                                }
                            }
                        )
                    }
                })
            },
        }
    }
</script>
<style lang="scss" scope>
	#login{
		height: 100%;
		background: url("../../assets/images/login.png");
		-webkit-background-size: 100% 100%;
		-o-background-size: 100% 100%;
		background-size: 100% 100%;
		position: relative;
	.login_top{
		padding-top: 10px;
	h3{
		line-height: 37px;
		font-size: 18px;
	}
	}
	.login_body{
		position: absolute;
		left: 50%;
		top: 25%;
		margin-left: -25%;
		width: 50%;
		height: 50%;
		padding: 30px;
		-webkit-border-radius: 10px;
		border-radius: 10px;
		background-color: rgba(250,250,250,.5);
	>h2{
		 font-size: 20px;
		 line-height:80px
	 }
	>.el-form{
		 width: 70%;
		 margin: 0 auto;

	 }
	.el-button{
		display: block;
		width: 70%;
		margin: 0 auto;
	}
	}
	}
</style>