<template>
    <div class="memberList" v-loading="loading" element-loading-text="加载中……">
        <searchBox :searchNames="searchNames" @searchDataChange="searchDataChange" :total="total" :showKeyword="false"></searchBox>

        <div class="table-box">
            <el-table :data="userList" border style="width: 100%;">
                <el-table-column prop="collegeName" label="高校名称" align="center" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="userAccount" label="主账号" align="center" :show-overflow-tooltip="true">
                    <template scope="scope">
                        <span class="pointer" @click="toDetailPage(scope.row)">
                            {{scope.row.userAccount}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column prop="subAccount" label="子账号" align="center" width="80px" :formatter="formatSubAccount"></el-table-column>
                <el-table-column prop="areaCode" label="所在地" align="center" :formatter="formatAddress" :show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column prop="userPhone" label="联系方式" align="center"></el-table-column>
                <el-table-column prop="userLevel" label="会员级别" align="center" width="110"></el-table-column>
                <el-table-column prop="createDate" label="开通日期" align="center" :formatter="formatStartDate" width="108"></el-table-column>
                <el-table-column prop="endDate" label="结束日期" align="center" :formatter="formatEndDate" width="108"></el-table-column>
                <el-table-column prop="status" label="状态" align="center"  width="90px" :formatter="judgeStatus"></el-table-column>
                <el-table-column prop="reviewer" label="审核人" align="center"></el-table-column>
                <el-table-column prop="operate" label="操作" width="140px" align="center">
                    <template scope="scope">
                        <el-button size="small">编辑</el-button>
                        <el-button size="small">权限</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>

    import searchBox from  '../../../compontents/common/tools/searchBox.vue';
    import {regionData,CodeToText} from "element-china-area-data"

    export default{
        data(){
            return{
                searchNames: ['area', 'level', 'newMember', 'memberStatus'],
                userList: [],
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
                total: 0,
                loading: false,
                options: regionData,
                areaCode: [],
                codeToText:　CodeToText
            }
        },
        components: {searchBox},
        methods: {
            searchDataChange(data){
                this.param = data;
                this.getMemberList();
            },

            getMemberList(){
                this.$http.post('/apis/userMgrt/getUserMgrtList.json', this.param).then(
                    (response) => {
//                        console.log(response.data.data)
                        if(response.data.success){
                            this.loading = false;
                            this.userList = response.data.data.content;
                            this.total = response.data.data.totalElements;
                        }else {
                            console.error(response.data)
                        }
                    }
                );
            },

            formatStartDate(row, col){
                return new Date(row.createDate).format('yyyy-MM-dd');
            },

            formatEndDate(row, col){
                if(row.expireDate) {
                    return new Date(row.expireDate).format('yyyy-MM-dd');
                }
                return '';
            },

            judgeStatus(row, col){
//                console.log(row.)
                let endDate = row.expireDate;
                let today = new Date().format('yyyy-MM-dd 00:00:00');
                let todaySecond = new Date(today).getTime();
                if(endDate < todaySecond){
                    return '已过期';
                }else if((endDate - todaySecond) <= 24 * 3600 * 1000 * 5){
                    return '即将到期';
                }else {
                    return '未过期';
                }
            },

            formatSubAccount(row, col){
                if(row.subAccountNum == '' || row.subAccountNum == null || row.subAccountNum == undefined){
                    return '0个';
                }else {
                    return row.subAccountNum + '个';
                }
            },

            toDetailPage(data){
                this.$router.push({path: '/body/memberDetail', query: data});
            },

            formatAddress(row, col){
                if(row.areaCode != null){
                    let area = '';
                    let areaArr = this.areaCode = row.areaCode.split(',');
                    for(var i = 0; i < areaArr.length; i++){
                        for (var  j in this.codeToText){
                            if(areaArr[i] == j){
                                area = area +　this.codeToText[j];
                                break;
                            }
                        }
                    }
                    return area.substring(0);
                }
//                console.log(row.areaCode)
                return '';
            },

            handleChange(val){
                console.log(val)
            }
        },
        created(){
//            this.getMemberList();
        },
        mounted(){
            this.getMemberList();
        }
    }
</script>