<template>
    <div class="check" id="check" v-loading="loading" element-loading-text="加载中……">
        <el-tabs v-model="activeName" @tab-click="handleTabsClick" id="check-tabs">
            <el-tab-pane label="试用会员" name="memberCheck">
                <div class="memberCheck">
                    <searchBox :searchNames="searchNames" @searchDataChange="searchDataChange" :total="total" :showKeyword="true"></searchBox>
                    <div class="content">
                        <div class="table-box">
                            <el-table :data="checkList" border style="width: 100%;">
                                <el-table-column prop="collegeName" label="所在高校" align="center" :show-overflow-tooltip="true"></el-table-column>
                                <el-table-column prop="userAccount" label="主账号" align="center" :show-overflow-tooltip="true"></el-table-column>
                                <el-table-column prop="userPhone" label="手机号" align="center"></el-table-column>
                                <el-table-column prop="userEmail" label="邮箱" align="center" width="250px" :show-overflow-tooltip="true"></el-table-column>
                                <el-table-column prop="createDate" label="申请日期" align="center" width="110px" :formatter="formatDate"></el-table-column>
                                <el-table-column label="状态" align="center" :formatter="formatStatus"></el-table-column>
                                <el-table-column prop="operate" label="操作" width="140px" align="center">
                                    <template scope="scope">
                                        <el-button size="small" @click="openTrialEvent(scope.row)" v-if="scope.row.accountType != '试用'">开通试用</el-button>
                                        <el-button size="small" @click="toAddMemberPage(scope.row)" v-else>开通正式</el-button>
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
                            <el-table-column prop="collegeName" label="所在高校" align="center" :show-overflow-tooltip="true"></el-table-column>
                            <el-table-column prop="userAccount" label="账号" align="center" :show-overflow-tooltip="true"></el-table-column>
                            <el-table-column prop="phone" label="手机号" align="center"></el-table-column>
                            <el-table-column prop="email" label="Email" align="center" :show-overflow-tooltip="true"></el-table-column>
                            <el-table-column prop="submitDate" label="申请日期" :formatter="formatSubmitDate" align="center" width="120"></el-table-column>
                            <el-table-column prop="packageType" label="套餐类型" align="center" width="120"></el-table-column>
                            <el-table-column prop="totalPrice" label="套餐金额" align="center" width="120"></el-table-column>
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
                <searchBox :searchNames="searchNames2" @searchDataChange="searchDataChange" :total="expireTotal" :showKeyword="true"></searchBox>
                <el-table :data="userList" border style="width: 100%;">
                    <el-table-column prop="collegeName" label="高校名称" align="center" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="userAccount" label="主账号" align="center">
                    </el-table-column>
                    <el-table-column prop="subAccount" label="子账号" align="center" width="80px" :formatter="formatSubAccount"></el-table-column>
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
                userList: [],
                loading: true
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
                    this.expireParam = data;
                    this.getExpireUserList();
                }
            },

            getMemberCheckList(){
                this.$http.post("/apis/userMgrt/getUserReviewList.json", this.param).then(
                    function (response) {
                        this.loading = false;
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
                        this.getMemberCheckList();
                    }
                })
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
                        this.loading = false;
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
                    this.loading = false;
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
                                message: '生效成功',
                                type: 'success'
                            });
                            this.getOrderList();
                        }else{
                            this.$message({
                                showClose: true,
                                message: '订单生效失败，请联系管理员',
                                type: 'error'
                            })
                        }
                    }
                )
            },

            formatSubmitDate(row, col){
                if(row.submitDate != null){
                    return new Date(row.submitDate).format('yyyy-MM-dd');
                }
                return '';
            },

            formatSubAccount(row, col){
                if(row.subAccountNum == '' || row.subAccountNum == null || row.subAccountNum == undefined){
                    return '0个';
                }else {
                    return row.subAccountNum + '个';
                }
            },

            formatStatus(row, col){
                let expireDate = row.expireDate;
                let now = new Date().getTime();
                if(expireDate < now){
                    return '已到期';
                }
                if(row.accountType == '试用'){
                    return '已开通'
                };
                return '未开通';
            },

            toAddMemberPage(data){
                this.$router.push({path:"/body/memberAdd", query: {data: data}});
            }
        },
        mounted(){
            this.getMemberCheckList();
        },
    }
</script>