<template>
    <div class="memberCheck">
        <searchBox :searchNames="searchNames" @searchDataChange="searchDataChange" :total="total"></searchBox>
        <div class="content">
            <div class="table-box">
                <el-table :data="checkList" border style="width: 100%;">
                    <el-table-column prop="collegeName" label="所在高校" align="center" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="userAccount" label="主账号" align="center" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="realName" label="称呼" align="center"></el-table-column>
                    <el-table-column prop="userDepartment" label="职务" align="center" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="area" label="所在省市" align="center"></el-table-column>
                    <el-table-column prop="userPosition" label="详细地址" align="center" width="250px" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="createDate" label="申请日期" align="center" width="110px" :formatter="formatDate"></el-table-column>
                    <el-table-column prop="operate" label="操作" width="190px" align="center">
                        <template scope="scope">
                            <el-button v-if="scope.row.accountType == '未开通'" size="small" @click="openTrialEvent(scope.row)">开通试用</el-button>
                            <el-button size="small" @click="openFormalEvent(scope.row)">转为正式</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .memberCheck{
        margin: 20px;
    }
</style>
<script>
    import searchBox from "../../common/tools/searchBox.vue"
    export default{
        data(){
            return{
                searchNames: ['createDate'],
                checkList: [],
                param: {
                    pageSize: 10,
                    pageNumber: 0,
                    orders: [
                        {
                            property: 'createDate',
                            direction: 'DESC'
                        }
                    ]
                },
                total: 0
            }
        },
        components: {searchBox},
        methods: {

            searchDataChange(data){
                this.param = data;
                this.getList();
            },

            getList(){
                console.log(this.param)
                this.$http.post("/apis/userMgrt/getUserReviewList.json", this.param).then(
                    function (response) {
                        if(response.data.success){
                            this.checkList = response.data.data.content;
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

            openTrialEvent(data){
                this.$http.get('/apis/userMgrt/openTrial.do/' + data.id).then(function (response) {
                    if(response.data.success){
                        this.$message({
                            message: '开通成功',
                            type:　'success'
                        });

                        data.accountType = '试用';
                    }
                })
            },

            openFormalEvent(data){
                this.$confirm('确定转为正式', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$http.get('/apis/userMgrt/openFormal.do/' + data.id).then(
                        (response) => {
                            if (response.data.success) {
                                this.$message({
                                    message: '开通成功',
                                    type: 'success'
                                });
                                this.getList();
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
                        message: '已取消'
                    });
                });
            }
        },
        mounted(){
            this.getList();
        },
    }
</script>