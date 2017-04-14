<template>
    <div class="memberCheck">
        <searchBox :searchNames="searchNames" :searchDataChange="searchDataChange"></searchBox>
        <div class="content">
            <div class="table-box">
                <el-table :data="tableData" border style="width: 100%;">
                    <el-table-column prop="collegeName" label="所在高校" align="center" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="mainAccount" label="主账号" align="center"></el-table-column>
                    <el-table-column prop="name" label="称呼" align="center"></el-table-column>
                    <el-table-column prop="job" label="职务" align="center"></el-table-column>
                    <el-table-column prop="province" label="所在省市" align="center"></el-table-column>
                    <el-table-column prop="address" label="详细地址" align="center" width="250px" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="applyDate" label="申请日期" align="center" width="110px"></el-table-column>
                    <el-table-column prop="operate" label="操作" width="190px" align="center">
                        <template scope="scope">
                            <el-button size="small">开通试用</el-button>
                            <el-button size="small">转为正式</el-button>
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
                searchNames: ['publishDateTime'],
                pageNumber: 10,
                total: 0,
                tableData: [
                    {
                        collegeName: '火星理工大学', mainAccount: 'MARS-101101', name: '皮卡丘',
                        job: '地球研究教授', province: '乌托邦', address: '贝克街221号', applyDate: '3219-11-11'
                    },
                    {
                        collegeName: '火星理工大学', mainAccount: 'MARS-101101', name: '皮卡丘',
                        job: '地球研究教授', province: '乌托邦', address: '贝克街221号', applyDate: '3219-11-11'
                    },
                    {
                        collegeName: '火星理工大学', mainAccount: 'MARS-101101', name: '皮卡丘',
                        job: '地球研究教授', province: '乌托邦', address: '贝克街221号-福尔摩斯华生迷之情感-尴尬-哈哈', applyDate: '3219-11-11'
                    },
                    {
                        collegeName: '火星理工大学', mainAccount: 'MARS-101101', name: '皮卡丘',
                        job: '地球研究教授', province: '乌托邦', address: '贝克街221号', applyDate: '3219-11-11'
                    },
                    {
                        collegeName: '火星理工大学', mainAccount: 'MARS-101101', name: '皮卡丘',
                        job: '地球研究教授', province: '乌托邦', address: '贝克街221号', applyDate: '3219-11-11'
                    },
                    {
                        collegeName: '火星理工大学', mainAccount: 'MARS-101101', name: '皮卡丘',
                        job: '地球研究教授', province: '乌托邦', address: '贝克街221号', applyDate: '3219-11-11'
                    },
                    {
                        collegeName: '火星理工大学', mainAccount: 'MARS-101101', name: '皮卡丘',
                        job: '地球研究教授', province: '乌托邦', address: '贝克街221号', applyDate: '3219-11-11'
                    },
                    {
                        collegeName: '火星理工大学', mainAccount: 'MARS-101101', name: '皮卡丘',
                        job: '地球研究教授', province: '乌托邦', address: '贝克街221号', applyDate: '3219-11-11'
                    },
                    {
                        collegeName: '火星理工大学', mainAccount: 'MARS-101101', name: '皮卡丘',
                        job: '地球研究教授', province: '乌托邦', address: '贝克街221号', applyDate: '3219-11-11'
                    },
                    {
                        collegeName: '火星理工大学', mainAccount: 'MARS-101101', name: '皮卡丘',
                        job: '地球研究教授', province: '乌托邦', address: '贝克街221号', applyDate: '3219-11-11'
                    },
                    {
                        collegeName: '火星理工大学', mainAccount: 'MARS-101101', name: '皮卡丘',
                        job: '地球研究教授', province: '乌托邦', address: '贝克街221号', applyDate: '3219-11-11'
                    },
                    {
                        collegeName: '火星理工大学', mainAccount: 'MARS-101101', name: '皮卡丘',
                        job: '地球研究教授', province: '乌托邦', address: '贝克街221号', applyDate: '3219-11-11'
                    },
                    {
                        collegeName: '火星理工大学', mainAccount: 'MARS-101101', name: '皮卡丘',
                        job: '地球研究教授', province: '乌托邦', address: '贝克街221号', applyDate: '3219-11-11'
                    },
                    {
                        collegeName: '火星理工大学', mainAccount: 'MARS-101101', name: '皮卡丘',
                        job: '地球研究教授', province: '乌托邦', address: '贝克街221号', applyDate: '3219-11-11'
                    },
                    {
                        collegeName: '火星理工大学', mainAccount: 'MARS-101101', name: '皮卡丘',
                        job: '地球研究教授', province: '乌托邦', address: '贝克街221号', applyDate: '3219-11-11'
                    },
                ]
            }
        },
        components: {searchBox},
        methods: {
            searchDataChange(){

            },

            handleCurrentChange(){

            }
        }
    }
</script>