<template>
    <div class="systemMessage">
        <div class="page-wrap clearfix">
            <div class="left">
                <el-button type="primary" @click="publishMessage">发布通知</el-button>
            </div>
            <div class="right">
                <el-pagination class="manage-pagination"
                               @current-change="handleCurrentChange"
                               :page-size="pageSize"
                               layout="prev, next, jumper, total"
                               :total="total">
                </el-pagination>
            </div>
        </div>
        <div class="table-wrap">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column type="index" label="序号" width="80" align="center"></el-table-column>
                <el-table-column prop="noticeTitle" label="标题" align="center" :show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column prop="createDate" label="发布日期" align="center" width="160" :formatter="formatDate"></el-table-column>
                <el-table-column prop="operate" label="操作" width="130" align="center">
                    <template scope="scope">
                        <el-button size="small" @click="deleteMessage(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <el-dialog title="" v-model="dialogFormVisible" class="addDialog" @close="closeDialog('ruleForm')">
           <div class="content-wrap">
               <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="system-form">
                   <el-form-item label="标题" prop="noticeTitle">
                       <el-input v-model="ruleForm.noticeTitle"></el-input>
                   </el-form-item>
                   <el-form-item label="内容" prop="noticeContent">
                       <el-input type="textarea" v-model="ruleForm.noticeContent" :rows="8"></el-input>
                   </el-form-item>
               </el-form>
           </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogSubmit('ruleForm')">发 布</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<style lang="scss" scoped>
    .systemMessage{
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

        .system-form{
            padding-left: 20px;
            padding-right: 20px;
        }
    }
</style>
<script>
    export default{
        data(){
            return{
                pageNumber: 0,
                pageSize: 10,
                total: 0,
                tableData: [],
                dialogFormVisible: false,
                ruleForm: {
                    noticeTitle: '',
                    noticeContent: ''
                },
                rules: {
                    noticeTitle: [
                        { required: true, message: '请输入通知标题', trigger: 'blur'}
                    ],
                    noticeContent: [
                        { required: true, message: '请输入通知内容', trigger: 'blur'}
                    ]
                }
            }
        },
        methods:{
            handleCurrentChange(pageNumber){
                this.pageNumber = pageNumber - 1;
                this.getSysNoticeList();
            },
            publishMessage(){
                this.dialogFormVisible = true;
            },
            deleteMessage(data){
                console.log(data);
            },

            //关闭会话框时清空会话框的内容
            closeDialog(formName){
                this.$refs[formName].resetFields();
            },

            getSysNoticeList(){
                this.$http.post('/apis/userMgrt/getSysNoticeList.json', {pageNumber: this.pageNumber, pageSize: this.pageSize}).then(
                    function (response) {
                        if(response.data.success){
                            this.total = response.data.data.totalElements;
                            this.tableData = response.data.data.content;
                        }
                    }
                )
            },

            formatDate(row, col){
                return new Date(row.createDate).format('yyyy-MM-dd');
            },

            dialogSubmit(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$http.post('/apis/userMgrt/saveOrUpdateSysNotice.do', this.ruleForm).then(
                            function (response) {
                                if(response.data.success){
                                    this.$message({
                                        showClose: true,
                                        message: '发布成功',
                                        type: 'success'
                                    });
                                    this.dialogFormVisible = false;
                                    this.getSysNoticeList();
                                }else {
                                    console.error(response.data)
                                }
                            }
                        )
                    } else {
                        this.$message.error('发布失败，请稍后再试');
                        return false;
                    }
                });
            }
        },
        mounted(){
            this.getSysNoticeList();
        }
    }
</script>