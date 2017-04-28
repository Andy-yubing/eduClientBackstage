<template>
    <div class="administrator" v-loading="loading" element-loading-text="加载中……">
        <div class="page-wrap clearfix">
            <div class="left">
                <el-button type="primary" @click="addAdministrator" v-show="showAddBtn">添加管理员</el-button>
            </div>
            <div class="right">
                <el-pagination class="manage-pagination"
                               @current-change="handleCurrentChange"
                               :current-page="param.pageNumber + 1"
                               :page-size="10"
                               layout="prev, next, jumper, total"
                               :total="total">
                </el-pagination>
            </div>
        </div>
        <div class="table-wrap">
            <el-table :data="adminList" border style="width: 100%">
                <el-table-column prop="name" label="管理员" align="center">
                    <template scope="scope">
                        <span @click="toDetailPage(scope.row)" class="pointer">{{scope.row.name}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="account" label="账号" align="center">
                </el-table-column>
                <el-table-column prop="dep" label="所属部门" align="center">
                </el-table-column>
                <el-table-column prop="phoneNumber" label="手机号" align="center"></el-table-column>
                <el-table-column prop="createDate" label="开通日期" align="center" :formatter="formatDate"></el-table-column>
                <el-table-column prop="operate" label="操作" width="210" align="center">
                    <template scope="scope">
                        <el-button size="small" @click="editData(scope.row)">编辑</el-button>
                        <el-button size="small" @click="deleteData(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <el-dialog :title="dialogTitle" v-model="dialogFormVisible" class="addDialog" @close="resetFormData('addFormData')">
            <el-form :model="addFormData" ref="addFormData" label-width="100px" class="manage-form" :rules="rules">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="addFormData.name"></el-input>
                </el-form-item>
                <el-form-item label="账号" prop="account">
                    <el-input v-model="addFormData.account"></el-input>
                </el-form-item>
                <el-form-item label="所属部门" prop="dep">
                    <el-input v-model="addFormData.dep"></el-input>
                </el-form-item>
                <el-form-item label="职务" prop="job">
                    <el-input v-model="addFormData.job"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="phoneNumber">
                    <el-input v-model="addFormData.phoneNumber"></el-input>
                </el-form-item>
                <el-form-item label="E-mail" prop="email">
                    <el-input v-model="addFormData.email"></el-input>
                </el-form-item>
                <el-form-item label="初始密码" prop="password">
                    <el-input v-model="addFormData.password" placeholder="系统默认初始密码为联系人手机号" type="password" :disabled="pwdFlag"></el-input>
                </el-form-item>
                <el-form-item label="设置权限" prop="permissions">
                    <el-select v-model="addFormData.permissions" multiple placeholder="请选择权限">
                        <el-option v-for="item in permissionOpt" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogSubmit('addFormData')" :loading="btnLoading">{{btnText}}</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<style lang="scss" scoped>
    .administrator{
        margin: 20px;

        .page-wrap{
            margin-bottom: 10px;

            .left{
                float: left;
            }

            .right{
                float:  right;
            }
        }
    }
</style>
<script>
    export default{
        data(){
            var validPhone = (rule, value, callback) => {
                let phoneReg =  /^1(3|4|5|7|8)\d{9}$/;
                if(!phoneReg.test(value)){
                    callback(new Error('请输入正确的手机号码'));
                }else {
                    callback();
                }
            };
            return{
                total: 0,
                dialogFormVisible: false,
                addFormData: {
                    name: '', account: '', dep: '', job: '', phoneNumber: '', password: '',
                    permissions: '', createDate: '', email: '', id: '', salt: '', type: ''
                },
                adminList: [],
                rules: {
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' }
                    ],
                    account: [
                        { required: true, message: '请输入账号', trigger: 'blur' }
                    ],
                    dep: [
                        { required: true, message: '请输入所属部门', trigger: 'blur' }
                    ],
                    job: [
                        { required: true, message: '请输入职务', trigger: 'blur' }
                    ],
                    phoneNumber: [
                        { required: true, message: '请输入手机号', trigger: 'blur' },
                        { validator: validPhone, trigger: 'blur'}
                    ],
                    email: [
                        { required: true, message: '请输入邮箱', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
                    ],
                },
                btnText: '确 定',
                btnLoading: false,
                param: {
                    pageNumber: 0,
                    pageSize: 10
                },
                loading: true,
                dialogTitle: '添加管理员',
                pwdFlag: false,
                permissionOpt: [
                    {
                        value: 23,
                        label: '会员管理'
                    }, {
                        value: 24,
                        label: '添加会员'
                    }, {
                        value: 25,
                        label: '会员审核'
                    }, {
                        value: 26,
                        label: '会员权限设置'
                    }, {
                        value: 27,
                        label: '查看会员详情'
                    }, {
                        value: 28,
                        label: '管理员功能'
                    }, {
                        value: 11,
                        label: '套餐管理'
                    }, {
                        value: 6,
                        label: '管理员权限'
                    }, {
                        value: 7,
                        label: '添加管理'
                    }, {
                        value: 8,
                        label: '系统设置'
                    }
                ],
                showAddBtn: false,
                loginName: ''
            }
        },
        methods: {
            addAdministrator(){
                this.dialogTitle = '添加管理员';
                this.pwdFlag = false;
                this.dialogFormVisible = true;
            },

            handleCurrentChange(pageNum){
                this.param.pageNumber = pageNum - 1;
                this.getAdminList();
            },

            resetFormData(formName){
                this.$refs[formName].resetFields();
                this.addFormData.id = '';
                this.addFormData.salt = '';
                this.addFormData.type = '';
                this.addFormData.createDate = '';
                this.pwdFlag = false;
            },

            editData(data){
                this.dialogTitle = '编辑管理员';
                this.pwdFlag = true;
                this.addFormData = jQuery.extend({}, data);
                this.dialogFormVisible = true;
            },

            deleteData(data){
                //后台请求删除该条数据后刷新表格
                this.$confirm('是否删除该管理员', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$http.delete('/apis/userMgrt/deleteAdminById.do/' + data.id).then((response) => {
                            if (response.data.success) {
                                this.$message({
                                    message: '删除成功',
                                    type: 'success'
                                });
                                this.getAdminList();
                            } else {
                                console.error(response.data.message);
                                return false;
                            }
                        }, (response) => {
                            console.error(response);
                            return false;
                        }
                    );
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },

            toDetailPage(data){
                this.$router.push({path: '/body/administratorInfo', query: data});
            },

            getAdminList(){
                this.$http.post('/apis/userMgrt/getAdminList.json', this.param).then(
                    function (response) {
                        this.loading = false;
                        if(response.data.success){
                            this.adminList = response.data.data.content;
                            this.total = response.data.data.totalElements;
                        }else{
                            console.error(response.data.message)
                        }
                    }
                )
            },

            formatDate(row, col){
                return new Date(row.createDate).format('yyyy-MM-dd');
            },

            dialogSubmit(formName){

                let $this = this;
                this.$refs[formName].validate(
                    function(valid){
                        if(valid){
                            //先禁用保存按钮
                            $this.btnText = '保存中';
                            $this.btnLoading = true;

                            //密码加密  仅在添加管理员时才有校验
                            let password = $this.addFormData.password;
                            if(password != '' && $this.pwdFlag === false){
                                $this.$http.post("/apis/security/generateKey.do").then(
                                    function (response) {
                                        if(response.data.success){
                                            let exponent = response.data.data.publicKeyExponent;
                                            let modulus = response.data.data.publicKeyModulus;
                                            RSAUtils.setMaxDigits(200);
                                            let key = new RSAUtils.getKeyPair(exponent, "", modulus);
                                            let encrypedPwd = RSAUtils.encryptedString(key,password);
                                            this.addFormData.password = encrypedPwd;
                                            this.saveAdmin();
                                        }else {
                                            console.error(response.data.message)
                                        }
                                    }
                                )
                            }else{
                                $this.saveAdmin();
                            }
                        }
                    }
                )
            },

            saveAdmin(){

                this.$http.post('/apis/userMgrt/saveOrUpdateAdmin.do', this.addFormData).then(
                    function (response) {
                        this.btnText = '确 定';
                        this.btnLoading = false;
                        if(response.data.success){
                            this.dialogFormVisible = false;
                            this.getAdminList();
                        }
                    }
                )
            },
        },
        created(){
            this.getAdminList();
        },
        mounted(){
            let arr = this.$parent.$parent.$children;
            for(var i = 0; i <　arr.length; i++){
                if(arr[i].numlist && typeof arr[i].numlist == 'object'){
                    if(arr[i].numlist.indexOf(7) >= 0){
                        this.showAddBtn = true;
                    }
                }
            }
        }
    }
</script>