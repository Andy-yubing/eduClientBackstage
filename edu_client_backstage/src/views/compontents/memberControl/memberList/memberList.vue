<template>
    <div class="memberList" v-loading="loading" element-loading-text="加载中……">
        <searchBox :searchNames="searchNames" @searchDataChange="searchDataChange" :total="total" :showKeyword="false"></searchBox>

        <div class="table-box">
            <el-table :data="userList" border style="width: 100%;">
                <el-table-column prop="collegeName" label="高校名称" align="center" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="userAccount" label="主账号" align="center" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="subAccount" label="子账号" align="center" width="80" :formatter="formatSubAccount"></el-table-column>
                <el-table-column prop="userLevel" label="套餐类型" align="center" width="110" :formatter="formatPackageType"></el-table-column>
                <el-table-column prop="createDate" label="套餐开通日期" align="center" :formatter="formatEffectDate"></el-table-column>
                <el-table-column prop="endDate" label="套餐结束日期" align="center" :formatter="formatEndDate"></el-table-column>
                <el-table-column prop="status" label="套餐状态" align="center"  width="110" :formatter="judgeStatus"></el-table-column>
                <el-table-column prop="operate" label="操作" width="140" align="center">
                    <template scope="scope">
                        <el-button size="small" @click="toDetailPage(scope.row, 'edit')">编辑</el-button>
                        <el-button size="small" @click="toDetailPage(scope.row, 'package')">套餐</el-button>
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

            formatEffectDate(row, col){
                if(row.effectDate){
                    return new Date(row.effectDate).format('yyyy-MM-dd');
                }
                return '';
            },

            formatEndDate(row, col){
                if(row.expireDate) {
                    return new Date(row.expireDate).format('yyyy-MM-dd');
                }
                return '';
            },

            judgeStatus(row, col){
                let endDate = row.expireDate;
                let today = new Date().format('yyyy-MM-dd 00:00:00');
                let todaySecond = new Date(today).getTime();
                if(endDate < todaySecond){
                    return '已过期';
                }else if((endDate - todaySecond) <= 24 * 3600 * 1000 * 7){
                    return '即将到期';
                }else {
                    return '未过期';
                }
            },

            formatPackageType(row, col){
                if(row.userLevel && row.userLevel.length > 1){
                    return row.userLevel.substring(0, 1) + "套餐";
                }
                return '';
            },

            formatSubAccount(row, col){
                if(!row.subAccountNum){
                    return '0个';
                }else {
                    return row.subAccountNum + '个';
                }
            },

            toDetailPage(data, source){
                //用户头像 用不上 还占url长度  所以置空
                data.userImg = '';
                this.$router.push({path: '/body/memberDetail', query: {data: data, source: source}});
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
                return '';
            },
        },
        created(){
//            this.getMemberList();
        },
        mounted(){
            this.getMemberList();
        }
    }
</script>