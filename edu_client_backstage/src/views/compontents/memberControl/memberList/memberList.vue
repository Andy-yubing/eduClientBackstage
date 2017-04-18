<template>
    <div class="memberManage">
        <searchBox :searchNames="searchNames" :searchDataChange="searchDataChange"></searchBox>

        <div class="table-box">
            <el-table :data="tableData" border style="width: 100%;">
                <el-table-column prop="collegeName" label="高校名称" align="center" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="mainAccount" label="主账号" align="center"></el-table-column>
                <el-table-column prop="subAccount" label="子账号" align="center" width="100px"></el-table-column>
                <el-table-column prop="address" label="所在省市" align="center"></el-table-column>
                <el-table-column prop="memberLevel" label="会员级别" align="center"></el-table-column>
                <el-table-column prop="beginDate" label="开通日期" align="center" width="110px"></el-table-column>
                <el-table-column prop="endDate" label="结束日期" align="center" width="110px"></el-table-column>
                <el-table-column prop="status" label="状态" align="center"  width="100px"></el-table-column>
                <el-table-column prop="verifier" label="审核人" align="center"></el-table-column>
                <el-table-column prop="operate" label="操作" width="160px" align="center">
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
    .memberManage{
        margin: 20px;
    }
</style>

<script>

    import searchBox from  '../../../compontents/common/tools/searchBox.vue';

    export default{
        data(){
            return{
                searchNames: ['region', 'memberLevel', 'newMember', 'memberStatus'],
                tableData: [
                    {
                        collegeName: '北京大学', mainAccount: 'HDB11010', subAccount: '8个',
                        address: '火星', memberLevel: 'A级', beginDate: '2016-05-10', endDate: '2017-05-09',
                        status: '即将到期', verifier: 'phoebe'
                    },
                    {
                        collegeName: '北京大学', mainAccount: 'HDB11010', subAccount: '8个',
                        address: '火星', memberLevel: 'A级', beginDate: '2016-05-10', endDate: '2017-05-09',
                        status: '即将到期', verifier: 'phoebe'
                    },
                    {
                        collegeName: '北京大学', mainAccount: 'HDB11010', subAccount: '8个',
                        address: '火星', memberLevel: 'A级', beginDate: '2016-05-10', endDate: '2017-05-09',
                        status: '即将到期', verifier: 'phoebe'
                    },
                    {
                        collegeName: '北京大学', mainAccount: 'HDB11010', subAccount: '8个',
                        address: '火星', memberLevel: 'A级', beginDate: '2016-05-10', endDate: '2017-05-09',
                        status: '即将到期', verifier: 'phoebe'
                    },
                    {
                        collegeName: '北京大学', mainAccount: 'HDB11010', subAccount: '8个',
                        address: '火星', memberLevel: 'A级', beginDate: '2016-05-10', endDate: '2017-05-09',
                        status: '即将到期', verifier: 'phoebe'
                    },
                    {
                        collegeName: '北京大学', mainAccount: 'HDB11010', subAccount: '8个',
                        address: '火星', memberLevel: 'A级', beginDate: '2016-05-10', endDate: '2017-05-09',
                        status: '即将到期', verifier: 'phoebe'
                    },
                    {
                        collegeName: '北京大学', mainAccount: 'HDB11010', subAccount: '8个',
                        address: '火星', memberLevel: 'A级', beginDate: '2016-05-10', endDate: '2017-05-09',
                        status: '即将到期', verifier: 'phoebe'
                    },
                    {
                        collegeName: '北京大学', mainAccount: 'HDB11010', subAccount: '8个',
                        address: '火星', memberLevel: 'A级', beginDate: '2016-05-10', endDate: '2017-05-09',
                        status: '即将到期', verifier: 'phoebe'
                    },
                    {
                        collegeName: '北京大学', mainAccount: 'HDB11010', subAccount: '8个',
                        address: '火星', memberLevel: 'A级', beginDate: '2016-05-10', endDate: '2017-05-09',
                        status: '即将到期', verifier: 'phoebe'
                    },
                    {
                        collegeName: '北京大学', mainAccount: 'HDB11010', subAccount: '8个',
                        address: '火星', memberLevel: 'A级', beginDate: '2016-05-10', endDate: '2017-05-09',
                        status: '即将到期', verifier: 'phoebe'
                    }
                ]
            }
        },
        components: {searchBox},
        methods: {
            searchDataChange(){

            },

            getMemberList(){
                this.$http.post('/apis/userMgrt/getUserList.json').then(
                    (response) => {
                        console.log(response.data)
                    }
                );
            }
        },
        created(){
            this.getMemberList()
        },
        mounted(){

        }
    }
</script>