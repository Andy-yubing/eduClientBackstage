<template>
    <div class="memberDetail">
        <el-tabs v-model="activeName">
            <el-tab-pane label="会员资料" name="detail">
                <div class="info-wrap">
                    <el-row :gutter="20" type="flex" align="middle">
                        <el-col :span="2" class="text-right" :offset="2">所属高校</el-col>
                        <el-col :span="6">
                            <el-input v-model="memberData.collegeName" class="edu-input"></el-input>
                        </el-col>
                        <el-col :span="2" class="text-right" :offset="2">所选套餐</el-col>
                        <el-col :span="6">
                            <el-input v-model="memberData.userLevel" class="edu-input" :disabled="true"></el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" type="flex" align="middle">
                        <el-col :span="2" class="text-right" :offset="2">主账号</el-col>
                        <el-col :span="6">
                            <el-input v-model="memberData.userAccount" class="edu-input" :disabled="true"></el-input>
                        </el-col>
                        <el-col :span="2" class="text-right" :offset="2">联系人</el-col>
                        <el-col :span="6">
                            <el-input v-model="memberData.realName" class="edu-input"></el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" type="flex" align="middle">
                        <el-col :span="2" class="text-right" :offset="2">注册日期</el-col>
                        <el-col :span="6">
                            <el-input v-model="createDate" class="edu-input" :disabled="true"></el-input>
                        </el-col>
                        <el-col :span="2" class="text-right" :offset="2">手机号</el-col>
                        <el-col :span="6">
                             <el-input v-model="memberData.userPhone" class="edu-input"></el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" type="flex" align="middle">
                        <el-col :span="2" class="text-right" :offset="2">
                            套餐周期
                        </el-col>
                        <el-col :span="6">
                            <el-input :disabled="true" v-model="packageRange"></el-input>
                        </el-col>
                        <el-col :span="2" class="text-right" :offset="2">邮箱</el-col>
                        <el-col :span="6">
                            <el-input v-model="memberData.userEmail"></el-input>
                        </el-col>
                    </el-row>
                    <div class="line"></div>
                    <el-row type="flex" align="middle">
                        <el-col :span="2" :offset="11">
                            <el-button type="primary" size="large" @click="updateMemberInfo">确认修改</el-button>
                        </el-col>
                    </el-row>
                </div>
                <div class="pwd-wrap">
                    <el-row :gutter="20" type="flex">
                        <el-col :span="3" class="text-right" :offset="1">修改主账号密码</el-col>
                        <el-col :span="7">
                            <el-input type="password" placeholder="输入新密码" v-model="newPwd"></el-input>
                        </el-col>
                        <el-col :span="7">
                            <el-input type="password" placeholder="再次输入新密码" v-model="newPwd1"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <el-button type="primary" @click="verifyPwd()">确认</el-button>
                        </el-col>
                    </el-row>
                </div>
                <div class="box-wrap">
                    <div class="title">
                        <strong>子账号</strong>
                    </div>
                    <el-table :data="accountData" border style="width: 100%">
                        <el-table-column prop="userAccount" label="子账号" align="center"></el-table-column>
                        <el-table-column prop="realName" label="联系人" align="center"></el-table-column>
                        <el-table-column prop="userDepartment" label="职位" align="center"></el-table-column>
                        <el-table-column prop="userPhone" label="联系电话" align="center"></el-table-column>
                    </el-table>
                </div>
                <div class="box-wrap">
                    <div class="title">
                        <strong>套餐记录</strong>
                    </div>
                    <el-table :data="packageData" border style="width: 100%">
                        <el-table-column prop="packageType" label="购买套餐" align="center"></el-table-column>
                        <el-table-column prop="createDate" label="购买时间" align="center" :formatter="formatCreateDate"></el-table-column>
                        <el-table-column prop="expireDate" label="到期时间" align="center" :formatter="formatExpireDate"></el-table-column>
                        <el-table-column prop="totalPrice" label="套餐金额" align="center"></el-table-column>
                        <el-table-column label="套餐状态" align="center">
                            <template scope="scope">
                                <span v-if="scope.row.packageStatus == true">
                                    使用
                                    &nbsp;
                                </span>
                                <span v-else>过期 &nbsp;</span>
                                <el-switch v-model="scope.row.packageStatus" disabled on-color="#13ce66" off-color="#ff4949"></el-switch>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="box-wrap">
                    <div class="title">
                        <strong>操作日志</strong>
                    </div>
                    <el-table :data="operationData" border style="width: 100%" :resizable="false" >
                        <el-table-column label="序号" prop="rank" align="center" width="100"></el-table-column>
                        <el-table-column label="时间" prop="createDate" align="center"></el-table-column>
                        <el-table-column label="IP" prop="ip" align="center"></el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="套餐设置" name="package">
                <div class="package-wrap">
                    <el-row class="text-center" type="flex" align="middle">
                        <el-col :span="4" class="border-bottom">会员套餐</el-col>
                        <el-col :span="10" class="border-bottom">
                            <el-select v-model="memberLevel" placeholder="请选择" class="mt7">
                                <el-option v-for="item in levelOpt" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="10" class="border-bottom">
                            &nbsp;
                        </el-col>
                    </el-row>
                    <el-row class="text-center" type="flex" align="middle">
                        <el-col :span="4" class="border-bottom">套餐周期</el-col>
                        <el-col :span="10" class="border-bottom">
                            <el-date-picker
                                    class="mt7"
                                    v-model="packageStartDate"
                                    type="date"
                                    placeholder="选择开始日期"
                                    :picker-options="pickerOptions0">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="5" class="border-bottom">
                            <el-date-picker
                                    class="mt7"
                                    v-model="packageEndDate"
                                    type="date"
                                    placeholder="选择结束日期"
                                    :picker-options="pickerOptions1">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="5" class="border-bottom">&nbsp;</el-col>
                    </el-row>
                    <el-row class="text-center" type="flex" align="middle">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10" class="blue border-bottom">舆情管理</el-col>
                        <el-col :span="10" class="border-bottom">&nbsp;</el-col>
                    </el-row>
                    <el-row class="text-center" type="flex" align="middle">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10">全景舆情</el-col>
                        <el-col :span="10">
                            <el-switch></el-switch>
                        </el-col>
                    </el-row>
                    <el-row class="text-center" type="flex" align="middle">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10">舆情监测</el-col>
                        <el-col :span="10">
                            <el-switch></el-switch>
                        </el-col>
                    </el-row>
                    <el-row class="text-center" type="flex" align="middle">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10">事件监测</el-col>
                        <el-col :span="10">
                            <el-switch></el-switch>
                        </el-col>
                    </el-row>
                    <el-row class="text-center" type="flex" align="middle">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10" class="border-bottom">舆情报告</el-col>
                        <el-col :span="10" class="border-bottom">
                            <el-switch></el-switch>
                        </el-col>
                    </el-row>
                    <el-row class="text-center" type="flex" align="middle">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10" class="blue border-bottom">情报内参</el-col>
                        <el-col :span="10" class="border-bottom">&nbsp;</el-col>
                    </el-row>
                    <el-row class="text-center" type="flex" align="middle">
                        <el-col :span="4">套餐详情</el-col>
                        <el-col :span="10">行业动态</el-col>
                        <el-col :span="10">
                            <el-switch></el-switch>
                        </el-col>
                    </el-row>
                    <el-row class="text-center" type="flex" align="middle">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10">人物动态</el-col>
                        <el-col :span="10">
                            <el-switch></el-switch>
                        </el-col>
                    </el-row>
                    <el-row class="text-center" type="flex" align="middle">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10">两微洞察</el-col>
                        <el-col :span="10">
                            <el-switch></el-switch>
                        </el-col>
                    </el-row>
                    <el-row class="text-center" type="flex" align="middle">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10">媒体声誉</el-col>
                        <el-col :span="10">
                            <el-switch></el-switch>
                        </el-col>
                    </el-row>
                    <el-row class="text-center" type="flex" align="middle">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10" class="border-bottom">内参报告</el-col>
                        <el-col :span="10" class="border-bottom">
                            <el-switch></el-switch>
                        </el-col>
                    </el-row>
                    <el-row class="text-center" type="flex" align="middle">
                        <el-col :span="4">&nbsp;</el-col>
                        <el-col :span="10" class="blue border-bottom">业务工具</el-col>
                        <el-col :span="10" class="border-bottom">&nbsp;</el-col>
                    </el-row>
                    <el-row class="text-center" type="flex" align="middle">
                        <el-col :span="4" class="border-bottom">&nbsp;</el-col>
                        <el-col :span="10" class="border-bottom">两微监管</el-col>
                        <el-col :span="10" class="border-bottom">
                            <el-switch></el-switch>
                        </el-col>
                    </el-row>
                    <el-row class="text-center" type="flex" align="middle">
                        <el-col :span="4" class="border-bottom">可关注高校</el-col>
                        <el-col :span="10" class="border-bottom">
                            <el-input-number v-model="collegeNum" @change="collegeNumChange" :min="0" class="mt7"></el-input-number>
                        </el-col>
                        <el-col :span="10" class="border-bottom">
                            &nbsp;
                        </el-col>
                    </el-row>
                    <el-row class="text-center" type="flex" align="middle">
                        <el-col :span="4" class="border-bottom">可关注人物</el-col>
                        <el-col :span="10" class="border-bottom">
                            <el-input-number v-model="collegeNum" @change="collegeNumChange" :min="1" class="mt7"></el-input-number>
                        </el-col>
                        <el-col :span="10" class="border-bottom">
                            &nbsp;
                        </el-col>
                    </el-row>
                    <el-row class="text-center" type="flex" align="middle">
                        <el-col :span="4" class="border-bottom">子账号数量</el-col>
                        <el-col :span="10" class="border-bottom">
                            <el-input-number v-model="collegeNum" @change="collegeNumChange" :min="1" class="mt7"></el-input-number>
                        </el-col>
                        <el-col :span="10" class="border-bottom">
                            &nbsp;
                        </el-col>
                    </el-row>
                    <el-row class="text-center" type="flex" align="middle">
                        <el-col :span="4" class="border-bottom">套餐价格</el-col>
                        <el-col :span="20" class="border-bottom">
                           10000元
                        </el-col>
                    </el-row>

                    <div class="btn-wrap">
                        <el-button type="primary">确定</el-button>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<style lang="scss" scoped>
    .memberDetail{

        .line{
            width: 100%;
            height: 1px;
            border-top: 1px solid #dfe6ec;
            margin: 20px auto;
        }

        .el-tabs{
            .title{
                font-size: 16px;
            }

            .el-tabs__content{
                .info-wrap{
                    border: 1px solid #dfe6ec;
                    padding: 20px;
                    margin-bottom: 15px;

                    .el-row{
                        padding: 10px;
                    }
                }

                .pwd-wrap{
                    border: 1px solid #dfe6ec;
                    height: 80px;

                    .el-row{
                        line-height: 36px;
                        padding: 10px;
                    }

                    .el-col{
                        margin: 15px auto;
                    }
                }

                .box-wrap{
                    margin: 15px auto;

                    .title{
                        margin-bottom: 10px;
                    }
                }
            }
        }

        .package-wrap{
            border: 1px solid #dfe6ec;

            .el-row{
                line-height: 50px;

                .el-col-4{
                    border-right: 1px solid #d1dbe5;
                }

                .blue{
                    color: #60a3ff;
                }

                .border-bottom{
                    border-bottom: 1px solid #d1dbe5;
                }

                .mt7{
                    margin-top: 7px;
                }

                .el-col{
                    /*padding-top: 7px;*/
                    /*padding-bottom: 7px;*/
                    height: 50px;

                    .numInput{
                        width: 100px;
                    }
                }
            }

            .btn-wrap{
                padding: 10px;
                text-align: center;
            }
        }


    }
</style>
<script>

    import {regionData,CodeToText} from "element-china-area-data"
    export default{
        data(){
            return{
                activeName: 'detail',
                mainCountSwitch: true,
                subCountNum: 1,
                subCountSwitch: true,
                levelOpt: [
                    {value:　'A级', label: 'A级'},
                    {value:　'B级', label: 'B级'},
                    {value:　'C级', label: 'C级'},
                ],
                memberLevel: '',
                memberData:　'',
                createDate: '',
                newPwd: '',
                newPwd1: '',
                codeToText:　CodeToText,
                position: '',
                accountData: [],
                packageData: [],
                operationData: [],
                packageEndDate: '',
                packageStartDate: '',
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
                collegeNum: 0,
                packageRange: ''
            }
        },
        methods: {

            updateMemberInfo(){
                if(!this.memberData.collegeName){
                    this.$message.error('请填写高校名称');
                    return ;
                }
                if(!this.memberData.realName){
                    this.$message.error('请填写联系人');
                    return ;
                }
                if(!this.memberData.userPhone){
                    this.$message.error('请填写手机号');
                    return ;
                }
                if(!this.memberData.userEmail){
                    this.$message.error('请填写邮箱');
                    return ;
                }

                this.$http.post('/apis/userMgrt/updateMemberInfo.json', this.memberData).then(
                    function (response) {
                        if(response.data.success){
                            this.$message({
                                type: 'success',
                                message: '更新成功'
                            });
                        }else {
                            this.$message.error('更新失败');
                        }
                    }
                )
            },

            collegeNumChange(type){

            },

            verifyPwd(){
                if(this.newPwd == ''){
                    this.$message.error('请输入新密码');
                    return ;
                }else if(this.newPwd.length < 6 || this.newPwd.length > 16){
                    this.$message.error('密码长度在6-16个字符');
                    return ;
                }
                if(this.newPwd1 == ''){
                    this.$message.error('请再次输入密码');
                    return ;
                }
                if(this.newPwd != this.newPwd1){
                    this.$message.error('两次输入密码不一致');
                    return ;
                }

                this.$http.post('/apis/security/generateKey.do').then(
                    (response) => {
                        if (response.data.success) {
                            let exponent = response.data.data.publicKeyExponent;
                            let modulus = response.data.data.publicKeyModulus;
                            RSAUtils.setMaxDigits(200);
                            let key = new RSAUtils.getKeyPair(exponent, "", modulus);
                            //新密码
                            let password =  this.newPwd;
                            let encrypedNewPwd = RSAUtils.encryptedString(key,password);
                            let param = {
                                newPassword: encrypedNewPwd,
                                userAccount: this.memberData.userAccount
                            }

                            this.updatePwd(param);
                        } else {
                            console.error(response.data.msg);
                            return false;
                        }
                    }
                )
            },

            updatePwd(param){
                this.$http.post('/apis/userMgrt/updatePassword.json', param).then(
                    function (response) {
                        if(response.data.success){
                            this.$message({
                                type: 'success',
                                message: '密码更新成功'
                            })
                        }else{
                            this.$message({
                                type: 'error',
                                message: '密码更新失败'
                            })
                        }
                        this.newPwd = '';
                        this.newPwd1 = '';
                    }
                )
            },

            getSubAccountList(){
                let param = {
                    userId: this.memberData.id
                }

                this.$http.post('/apis/userMgrt/findAllSubAccount.json', param).then(
                    function (response) {
                        if(response.data.success){
                            if(response.data.data.content){
                                this.accountData = response.data.data.content;
                            }else {
                                this.accountData = [];
                            }
                        }else{
                            console.error('加载子账号列表失败');
                            this.accountData = [];
                        }
                    }
                )
            },

            getPackageList(){
                let param = {
                    userAccount: this.memberData.userAccount
                }
                this.$http.post('/apis/userMgrt/getPackageOrderList.json', param).then(
                    function (response) {
                        if(response.data.success){
                            let data = response.data.data.content;
                            if(data){
                                for(let i = 0; i < data.length; i++){
                                    let expireDate = data[i].expireDate;
                                    if(new Date(expireDate).getTime() > new Date().getTime()){
                                        data[i].packageStatus = true;
                                    }else {
                                        data[i].packageStatus = false;
                                    }
                                }
                            }
                            this.packageData = response.data.data.content;
                        }else{
                            console.error('加载用户订单列表失败');
                            this.packageData = [];
                        }
                    }
                )
            },

            formatCreateDate(row, col){
                if(row.signedDate){
                    return new Date(row.signedDate).format('yyyy-MM-dd');
                }
                return '';
            },

            formatExpireDate(row, col){
                return new Date(row.expireDate).format('yyyy-MM-dd');
            },

            getUserOperation(){
                let param = {
                    userAccount: this.memberData.userAccount
                }
                this.$http.post('/apis/userMgrt/getUserOperation.json', param).then(
                    function (response) {
                        if(response.data.success){
                            console.log(response.data.data.content)
                        }else{
                            console.error('加载用户日志失败');
                        }
                    }
                );
            }
        },
        created(){
            this.memberData = this.$route.query.data;

            if(this.memberData.createDate){
                this.createDate = new Date(parseInt(this.memberData.createDate)).format('yyyy-MM-dd');
            }

            if(this.memberData.expireDate && this.memberData.effectDate){
                let effectDate = new Date(this.memberData.effectDate).format('yyyy-MM-dd');
                let expireDate = new Date(this.memberData.expireDate).format('yyyy-MM-dd');
                this.packageRange = effectDate + " 至 " + expireDate;
            }

            if(this.memberData.areaCode != null){
                let area = '';
                let areaArr = this.areaCode = this.memberData.areaCode.split(',');
                for(var i = 0; i < areaArr.length; i++){
                    for (var  j in this.codeToText){
                        if(areaArr[i] == j){
                            area = area +　this.codeToText[j];
                            break;
                        }
                    }
                }
                this.position = area.substring(0);
            }
        },
        mounted(){
            this.getSubAccountList();
            this.getPackageList();
            this.getUserOperation();

            this.$nextTick(function () {
                let source = this.$route.query.source;
                if(source == 'package'){
                    this.activeName = 'package';
                };
            });
        }
    }
</script>