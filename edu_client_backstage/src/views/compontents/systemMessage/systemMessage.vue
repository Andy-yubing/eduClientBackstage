<template>
    <div class="systemMessage">
        <div class="page-wrap clearfix">
            <div class="left">
                <el-button type="primary" @click="publishMessage">发布通知</el-button>
            </div>
            <div class="right">
                <el-pagination class="manage-pagination"
                               @current-change="handleCurrentChange"
                               :current-page="pageNumber"
                               :page-size="5"
                               layout="prev, next, jumper, total"
                               :total="total">
                </el-pagination>
            </div>
        </div>
        <div class="table-wrap">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column type="index" label="序号" width="80" align="center"></el-table-column>
                <el-table-column prop="detail" label="详情" align="center" :show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column prop="beginDate" label="开通日期" align="center" width="160"></el-table-column>
                <el-table-column prop="operate" label="操作" width="130" align="center">
                    <template scope="scope">
                        <el-button size="small" @click="deleteMessage(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <el-dialog title="" v-model="dialogFormVisible" class="addDialog" @close="closeDialog">
           <div class="content-wrap">
               <el-input type="textarea" :rows="8" placeholder="请输入内容" v-model="publishContent">
               </el-input>
           </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogSubmit('publishForm')">发 布</el-button>
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
    }
</style>
<script>
    export default{
        data(){
            return{
                pageNumber: 15,
                total: 22,
                tableData: [
                    {id: 0, detail: '尊敬的平台会员，系统将于2017年3月16日晚8：00进行全面升级，届时给您带来的不变，敬请谅解！', beginDate: '2017-11-11'},
                    {id: 1, detail: '尊敬的平台会员，系统将于2017年3月16日晚8：00进行全面升级，届时给您带来的不变，敬请谅解！', beginDate: '2017-11-11'},
                    {id: 2, detail: '尊敬的平台会员，系统将于2017年3月16日晚8：00进行全面升级，届时给您带来的不变，敬请谅解！', beginDate: '2017-11-11'},
                    {id: 3, detail: '尊敬的平台会员，系统将于2017年3月16日晚8：00进行全面升级，届时给您带来的不变，敬请谅解！', beginDate: '2017-11-11'},
                    {id: 4, detail: '尊敬的平台会员，系统将于2017年3月16日晚8：00进行全面升级，届时给您带来的不变，敬请谅解！', beginDate: '2017-11-11'},
                ],
                dialogFormVisible: false,
                publishContent: '',
            }
        },
        methods:{
            handleCurrentChange(){

            },
            publishMessage(){
                this.dialogFormVisible = true;
            },
            deleteMessage(data){
                console.log(data);
            },

            //关闭会话框时清空会话框的内容
            closeDialog(){
                this.publishContent = '';
            }
        }
    }
</script>