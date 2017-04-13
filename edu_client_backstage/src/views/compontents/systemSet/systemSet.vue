<template>
    <div class="systemSet">
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card class="control-card">
                    <div class="title" slot="header">网站LOGO</div>
                    <div class="item">
                        <div class="content-area">
                            <img :src="logoSrc" alt="网站LOGO" v-if="logoSrc != '' && logoSrc != undefined">
                            <img src="../../../assets/images/login.png" alt="网站LOGO" v-else>
                        </div>
                        <div class="btn-area">
                            <el-button type="primary file" @click="uploadLogo">修改</el-button>
                            <el-button type="primary" @click="submitLogo">确认</el-button>
                            <input type="file" class="el-upload__input" id="uploadLogo" @change="logoChange">
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="control-card">
                    <div class="title" slot="header">网站banner</div>
                    <div class="item">
                        <div class="content-area">
                            <img :src="bannerSrc" alt="网站banner" v-if="bannerSrc != '' && bannerSrc != undefined">
                            <img src="../../../assets/images/logo.png" alt="网站banner" v-else>
                        </div>
                        <div class="btn-area">
                            <el-button type="primary" @click="uploadBanner">修改</el-button>
                            <el-button type="primary" @click="submitBanner">确认</el-button>
                            <input type="file" class="el-upload__input" id="uploadBanner" @change="bannerChange">
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="control-card">
                    <div class="title" slot="header">网站底部信息</div>
                    <div class="item">
                        <div class="content-area">
                            <el-input type="textarea" :rows="8" v-model="bottomInfo">
                            </el-input>

                        </div>
                        <div class="btn-area">
                            <el-button type="primary">修改</el-button>
                            <el-button type="primary" @click="submitInfo">确认</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="control-card">
                    <div class="title" slot="header">电话</div>
                    <div class="item">
                        <div class="content-area">
                            <el-input type="textarea" :rows="8" v-model="phoneNum">
                            </el-input>
                        </div>
                        <div class="btn-area">
                            <el-button type="primary">修改</el-button>
                            <el-button type="primary" @click="submitTel">确认</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<style lang="scss" scoped>
    .systemSet{
        padding: 20px;

        .control-card{
            .item{
                .content-area{
                    height: 290px;
                    padding: 10px;

                    img{
                        max-width: 100%;
                        max-height: 100%;
                    }
                }

                .btn-area{
                    margin-top: 10px;
                }
            }
        }
    }
</style>
<script>
    export default  {
        data(){
            return{
                bottomInfo: 'COPYRIGHT 2016 huishu.com.cn ALL RIGHTS RESERVED .京ICP备 1503461 号－1',
                phoneNum: '18218182828',
                logoSrc: '',
                bannerSrc: ''
            }
        },
        methods: {
            //提交底部信息
            submitInfo(){

            },
            //提交电话
            submitTel(){

            },

            uploadLogo(){
                $('#uploadLogo').click();
            },

            logoChange(){

            },

            uploadBanner(){
                $('#uploadBanner').click();
            },

            bannerChange(){

            },

            convertImgToBase64(targetEle, callback){
                if(typeof(FileReader) == 'undefined'){
                    this.$message({
                        message: '抱歉，您的浏览器不能将图片转换成相应格式',
                        type: 'error'
                    });
                }else{
                    try {
                        let file = targetEle.files[0];
                        if(!/image\/\w+/.test(file.type)){
                            this.$message({
                                message: '请上传图片格式',
                                type: 'error'
                            });
                            return false;
                        }

                        let reader = new FileReader();
                        reader.onload = function () {
                            let result = this.result;
                            callback(result);
                        }
                        reader.readAsDataURL(file);
                    }catch (e){
                        this.$message({
                            message: '图片格式转换错误，请稍后再试',
                            type: 'error'
                        });
                        console.info(e)
                    }
                }
            },

            submitLogo(){

            },

            submitBanner(){

            }
        }
    }
</script>