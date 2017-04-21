<template>
    <div class="check" id="check">
        <el-tabs v-model="activeName" @tab-click="handleTabsClick" id="check-tabs">
            <el-tab-pane label="会员审核" name="memberCheck">
                <div class="memberCheck">
                    <searchBox :searchNames="searchNames" @searchDataChange="searchDataChange" :total="total" :showKeyword="true"></searchBox>
                    <div class="content">
                        <div class="table-box">
                            <el-table :data="checkList" border style="width: 100%;">
                                <el-table-column prop="collegeName" label="所在高校" align="center" :show-overflow-tooltip="true"></el-table-column>
                                <el-table-column prop="userAccount" label="主账号" align="center" :show-overflow-tooltip="true"></el-table-column>
                                <el-table-column prop="realName" label="称呼" align="center"></el-table-column>
                                <el-table-column prop="userDepartment" label="职务" align="center" :show-overflow-tooltip="true"></el-table-column>
                                <el-table-column prop="userPhone" label="联系方式" align="center"></el-table-column>
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
            </el-tab-pane>
            <el-tab-pane label="订单审核" name="orderCheck">
                <div class="orderCheck">
                    <searchBox :searchNames="searchNames1" @searchDataChange="searchDataChange" :total="ordersTotal" :showKeyword="false"></searchBox>
                    <div class="content">
                        <el-table :data="orderList" border style="width: 100%">
                            <el-table-column prop="userAccount" label="账号" align="center"></el-table-column>
                            <el-table-column prop="packageType" label="套餐类型" align="center"></el-table-column>
                            <el-table-column prop="totalPrice" label="总金额" align="center"></el-table-column>
                            <el-table-column prop="timeLimit" label="时间期限" align="center"></el-table-column>
                            <el-table-column prop="phone" label="联系方式" align="center"></el-table-column>
                            <el-table-column prop="email" label="Email" align="center"></el-table-column>
                            <el-table-column prop="isPay" label="是否支付" align="center"></el-table-column>
                            <el-table-column prop="submitDate" label="订单时间" aligin="center" :formatter="formatSubmitDate"></el-table-column>
                            <el-table-column label="操作" align="center" width="100">
                                <template scope="scope">
                                    <el-button size="small" v-if="scope.row.isPay == '否'" @click="changeOrderStatus(scope.row)">生效</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="预到期会员" name="memberExpire">
                <searchBox :searchNames="searchNames2" @searchDataChange="searchDataChange" :total="total" :showKeyword="true"></searchBox>
                <el-table :data="userList" border style="width: 100%;">
                    <el-table-column prop="collegeName" label="高校名称" align="center" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="userAccount" label="主账号" align="center">
                    </el-table-column>
                    <el-table-column prop="subAccount" label="子账号" align="center" width="80px"></el-table-column>
                    <el-table-column prop="area" label="所在省市" align="center"></el-table-column>
                    <el-table-column prop="userPhone" label="联系方式" align="center"></el-table-column>
                    <el-table-column prop="userLevel" label="会员级别" align="center"></el-table-column>
                    <el-table-column prop="createDate" label="开通日期" align="center" :formatter="formatDate" width="108"></el-table-column>
                    <el-table-column prop="endDate" label="结束日期" align="center" :formatter="formatEndDate" width="108"></el-table-column>
                    <el-table-column prop="reviewer" label="审核人" align="center"></el-table-column>
                    <el-table-column prop="operate" label="操作" width="140px" align="center">
                        <template scope="scope">
                            <el-button size="small">编辑</el-button>
                            <el-button size="small">权限</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>



</template>
<style lang="scss" scoped>
    .check{
        margin: 20px;
    }
</style>
<script>
    import searchBox from "../../common/tools/searchBox.vue"
    export default{
        data(){
            return{
                searchNames: ['createDate'],
                searchNames1: ['packageType', 'orderStatus'],
                searchNames2: '',
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
                orderParam: {
                    pageSize: 10,
                    pageNumber: 0,
                    orders: [
                        {property: 'createDate', direction: 'DESC'}
                    ]
                },
                expireParam: {
                    pageSize: 10,
                    pageNumber: 0,
                    orders: [
                        {
                            property: 'createDate',
                            direction: 'DESC'
                        }
                    ]
                },
                total: 0,
                ordersTotal: 0,
                expireTotal: 0,
                activeName: 'memberCheck',
                orderList: [],
                userList: []
            }
        },
        components: {searchBox},
        methods: {

            searchDataChange(data){

                if(this.activeName == 'memberCheck'){
                    this.param = data;
                    this.getMemberCheckList();
                }else if(this.activeName == 'orderCheck'){
                    this.orderParam = data;
                    this.getOrderList();
                }else {
                    
                }

                
            },

            getMemberCheckList(){
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
                                this.getMemberCheckList();
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
            },

            formatEndDate(row, col){
                if(row.expireDate != null){
                    return new Date(row.expireDate).format('yyyy-MM-dd');
                }
                return '';
            },

            getExpireUserList(){
                this.expireParam.status = '即将到期';
                this.$http.post('/apis/userMgrt/getUserMgrtList.json', this.expireParam).then(
                    (response) => {
                        if(response.data.success){
                            this.userList = response.data.data.content;
                            this.expireTotal = response.data.data.totalElements;
                        }else {
                            console.error(response.data)
                        }
                    }
                );
            },

            getOrderList(){
                this.$http.post('/apis/userMgrt/getOrders.json', this.orderParam).then(function (response) {
                    if(response.data.success){
                        this.orderList = response.data.data.content;
                        this.ordersTotal =  response.data.data.totalElements;
                    }
                })
            },

            handleTabsClick(event){
                if(event.index === "0"){
                    this.getMemberCheckList();
                }else if(event.index === "1"){
                    this.getOrderList();
                }else {
                    this.getExpireUserList();
                }
            },

            changeOrderStatus(row){

                this.$http.get('/apis/userMgrt/orderEffective.json/' + row.id).then(
                    function (response) {
                        if(response.data.success){
                            this.$message({
                                message: '已生效',
                                type: 'success'
                            });
                            this.getOrderList();
                        }
                    }
                )
            },

            formatSubmitDate(row, col){
                if(row.submitDate != null){
                    return new Date(row.submitDate).format('yyyy-MM-dd');
                }
                return '';
            }
        },
        mounted(){
            this.getMemberCheckList();
        },
    }
</script>