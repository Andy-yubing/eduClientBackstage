<template>
    <div class="administrator">
        <div class="page-wrap clearfix">
            <div class="left">
                <el-button type="primary" @click="addAdministrator">添加管理员</el-button>
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
                <el-table-column prop="name" label="管理员" align="center">
                    <template scope="scope">
                        <span @click="toDetailPage(scope.row)" class="pointer">{{scope.row.name}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="account" label="账号" align="center">
                </el-table-column>
                <el-table-column prop="department" label="所属部门" align="center">
                </el-table-column>
                <el-table-column prop="phone" label="手机号" align="center"></el-table-column>
                <el-table-column prop="beginDate" label="开通日期" align="center"></el-table-column>
                <el-table-column prop="operate" label="操作" width="260" align="center">
                    <template scope="scope">
                        <el-popover ref="popover" placement="left" trigger="click" width="500">
                            <el-form title="设置权限">
                                <el-form-item>
                                    <el-checkbox-group v-model="addFormData.checkList">
                                        <el-checkbox label="会员管理"></el-checkbox>
                                        <el-checkbox label="添加会员"></el-checkbox>
                                        <el-checkbox label="会员审核"></el-checkbox>
                                        <el-checkbox label="会员权限设置"></el-checkbox>
                                        <el-checkbox label="查看会员详情"></el-checkbox>
                                        <el-checkbox label="管理员功能"></el-checkbox>
                                        <el-checkbox label="套餐管理"></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                            </el-form>
                        </el-popover>
                        <el-button type="primary" size="small" v-popover:popover>权限设置</el-button>

                        <el-button size="small">编辑</el-button>
                        <el-button size="small" @click="deleteData(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <el-dialog title="添加管理员" v-model="dialogFormVisible" class="addDialog" @close="resetFormData">
            <el-form :model="addFormData" ref="addFormData" label-width="100px">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="addFormData.name"></el-input>
                </el-form-item>
                <el-form-item label="账号" prop="account">
                    <el-input v-model="addFormData.account"></el-input>
                </el-form-item>
                <el-form-item label="所属部门" prop="department">
                    <el-input v-model="addFormData.department"></el-input>
                </el-form-item>
                <el-form-item label="职务" prop="job">
                    <el-input v-model="addFormData.job"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="phone">
                    <el-input v-model="addFormData.phone"></el-input>
                </el-form-item>
                <el-form-item label="E-mail" prop="email">
                    <el-input v-model="addFormData.email"></el-input>
                </el-form-item>
                <el-form-item label="初始密码" prop="originalPwd">
                    <el-input v-model="addFormData.originalPwd"></el-input>
                </el-form-item>
                <el-form-item label="设置权限" prop="limit">
                    <el-checkbox-group v-model="addFormData.checkList">
                        <el-checkbox label="会员管理"></el-checkbox>
                        <el-checkbox label="添加会员"></el-checkbox>
                        <el-checkbox label="会员审核"></el-checkbox>
                        <el-checkbox label="会员权限设置"></el-checkbox>
                        <el-checkbox label="查看会员详情"></el-checkbox>
                        <el-checkbox label="管理员功能"></el-checkbox>
                        <el-checkbox label="套餐管理"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogSubmit('addFormData')">确 定</el-button>
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
            return{
                pageNumber:　1,
                total: 5,
                tableData: [
                    {id: 0, name: '李四', account: 'HD-1011H', department: '医美事业部', phone: '13011112222', beginDate: '2016-01-01'},
                    {id: 1, name: '李四', account: 'HD-1011H', department: '医美事业部', phone: '13011112222', beginDate: '2016-01-01'},
                    {id: 2, name: '李四', account: 'HD-1011H', department: '医美事业部', phone: '13011112222', beginDate: '2016-01-01'},
                    {id: 3, name: '李四', account: 'HD-1011H', department: '医美事业部', phone: '13011112222', beginDate: '2016-01-01'},
                    {id: 4, name: '李四', account: 'HD-1011H', department: '医美事业部', phone: '13011112222', beginDate: '2016-01-01'}
                ],
                dialogFormVisible: false,
                addFormData: {
                    name: '', account: '', department: '', job: '', phone: '', originalPwd: '', checkList: []
                }
            }
        },
        methods: {
            addAdministrator(){
                this.dialogFormVisible = true;
            },

            handleCurrentChange(pageNum){
                console.log(pageNum)
            },

            resetFormData(){
                this.addFormData = {
                    name: '', account: '', department: '', job: '', phone: '', originalPwd: '', checkList: []
                }
            },

            deleteData(data){
                //后台请求删除该条数据后刷新表格
            },

            toDetailPage(data){
                console.log(data);
                this.$router.push({path: '/body/administratorInfo', query: data});
            }
        }
    }
</script>