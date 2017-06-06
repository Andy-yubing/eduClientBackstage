<template>
    <div class="packageManage">
        <el-card class="control-card no-padding">
            <div class="title" slot="header">套餐管理</div>
            <div class="content">
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="4">试用会员</el-col>
                    <el-col :span="4">A套餐</el-col>
                    <el-col :span="4">B套餐</el-col>
                    <el-col :span="4">C套餐</el-col>
                    <el-col :span="3">
                        单品价格
                    </el-col>
                </el-row>

                <el-row class="text-center" type="flex" align="middle" v-for="item in allItemList">
                    <el-col :span="3" v-if="item.leftTitle">{{item.leftTitle}}</el-col>
                    <el-col :span="3" v-else>&nbsp;</el-col>
                    <el-col :span="2" :class="{blue: item.textColor == 'blue'}">{{item.label}}</el-col>
                    <el-col :span="19" v-if="!item.packageType"></el-col>
                    <el-col :span="4" v-if="item.packageType" v-for="type in item.packageType">
                        <el-switch v-model="type.value"></el-switch>
                    </el-col>
                    <el-col :span="3" v-if="item.packageType"><el-input v-model="item.itemPrice"></el-input></el-col>
                </el-row>

                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">可关注高校</el-col>
                    <el-col :span="4">
                        <el-input-number v-model="collegeNumTrial" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="4">
                        <el-input-number v-model="collegeNumA" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="4">
                        <el-input-number v-model="collegeNumB" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="4">
                        <el-input-number v-model="collegeNumC" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="3">
                        <el-input>
                            <template slot="append">元/所</template>
                        </el-input>
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">可关注人物</el-col>
                    <el-col :span="4">
                        <el-input-number v-model="characterNumTrial" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="4">
                        <el-input-number v-model="characterNumA" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="4">
                        <el-input-number v-model="characterNumA" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="4">
                        <el-input-number v-model="characterNumA" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="3">
                        <el-input>
                            <template slot="append">元/人</template>
                        </el-input>
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">可添加子账号</el-col>
                    <el-col :span="4">
                        <el-input-number v-model="subAccountNumTrial" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="4">
                        <el-input-number v-model="subAccountNumA" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="4">
                        <el-input-number v-model="subAccountNumB" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="7">
                        <el-input-number v-model="subAccountNumC" :min="1" class="mt7"></el-input-number>
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="3">&nbsp;</el-col>
                    <el-col :span="2">价格</el-col>
                    <el-col :span="4">无</el-col>
                    <el-col :span="4">6000 元/半年  &nbsp;&nbsp; 8000 元/年</el-col>
                    <el-col :span="4">6000 元/半年  &nbsp;&nbsp; 8000 元/年</el-col>
                    <el-col :span="7">根据功能单价定</el-col>
                </el-row>
            </div>
        </el-card>
        <div class="btn-wrap">
            <el-button type="primary" size="large" @click="submitPackage">确定</el-button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .packageManage{
        margin: 20px;

        .el-row{
            line-height: 60px;

            &.el-row:not(:first-child){
                .el-col{
                     border-right: 1px solid #d1dbe5;
                 }
             }

            .el-col{
                height: 60px;

                &.el-col:not(:first-child){
                     border-bottom: 1px solid #d1dbe5;
                 }

                .el-input{
                    width: 60%;
                }

                .mt7{
                    margin-top: 12px;
                }

                .manage-select{
                    width: 180px;
                }
            }
    
            .blue{
                color: #60a3ff;
            }
        }

        .btn-wrap{
            text-align: center;
            margin: 20px;
        }
    }
</style>
<script>
    export default{
        data(){
            return {
                collegeNumTrial: 1,
                characterNumTrial: 1,
                subAccountNumTrial: 1,
                collegeNumA: 1,
                characterNumA: 1,
                subAccountNumA: 1,
                collegeNumB: 1,
                characterNumB: 1,
                subAccountNumB: 1,
                collegeNumC: 1,
                characterNumC: 1,
                subAccountNumC: 1,
                packageList: '',
                allItemList: [
                    {label: '舆情管理', textColor: 'blue'},
                    {
                        label: '全景舆情',
                        textColor: 'black',
                        packageType: [{type: 'trial', value: false}, {type: 'A', value: false}, {type: 'B', value: false}, {type: 'C', value: false}],
                        itemPrice: 0,
                        id: 11
                    },
                    {
                        label: '舆情监测',
                        textColor: 'black',
                        packageType: [{type: 'trial', value: false}, {type: 'A', value: false}, {type: 'B', value: false}, {type: 'C', value: false}],
                        itemPrice: 0,
                        id: 7
                    },
                    {
                        label: '舆情预警',
                        textColor: 'black',
                        packageType: [{type: 'trial', value: false}, {type: 'A', value: false}, {type: 'B', value: false}, {type: 'C', value: false}],
                        itemPrice: 0,
                        id: 10
                    },
                    {
                        label: '事件监测',
                        textColor: 'black',
                        packageType: [{type: 'trial', value: false}, {type: 'A', value: false}, {type: 'B', value: false}, {type: 'C', value: false}],
                        itemPrice: 0,
                        id: 8
                    },
                    {
                        label: '舆情报告',
                        textColor: 'black',
                        packageType: [{type: 'trial', value: false}, {type: 'A', value: false}, {type: 'B', value: false}, {type: 'C', value: false}],
                        itemPrice: 0,
                        id: 4
                    },
                    {label: '情报内参', textColor: 'blue'},
                    {
                        label: '行业动态',
                        textColor: 'black',
                        packageType: [{type: 'trial', value: false}, {type: 'A', value: false}, {type: 'B', value: false}, {type: 'C', value: false}],
                        itemPrice: 0,
                        id: 1,
                        leftTitle: '套餐详情'
                    },
                    {
                        label: '人物动态',
                        textColor: 'black',
                        packageType: [{type: 'trial', value: false}, {type: 'A', value: false}, {type: 'B', value: false}, {type: 'C', value: false}],
                        itemPrice: 0,
                        id: 9
                    },
                    {
                        label: '两微洞察',
                        textColor: 'black',
                        packageType: [{type: 'trial', value: false}, {type: 'A', value: false}, {type: 'B', value: false}, {type: 'C', value: false}],
                        itemPrice: 0,
                        id: 2
                    },
                    {
                        label: '媒体声誉',
                        textColor: 'black',
                        packageType: [{type: 'trial', value: false}, {type: 'A', value: false}, {type: 'B', value: false}, {type: 'C', value: false}],
                        itemPrice: 0,
                        id: 5
                    },
                    {
                        label: '内参报告',
                        textColor: 'black',
                        packageType: [{type: 'trial', value: false}, {type: 'A', value: false}, {type: 'B', value: false}, {type: 'C', value: false}],
                        itemPrice: 0,
                        id: 3
                    },
                    {label: '业务平台', textColor: 'blue'},
                    {
                        label: '两微监管',
                        textColor: 'black',
                        packageType: [{type: 'trial', value: false}, {type: 'A', value: false}, {type: 'B', value: false}, {type: 'C', value: false}],
                        itemPrice: 0,
                        id: 6
                    },
                ],
            }
        },
        methods: {
            collegeNumAChange(val){
                console.log(val)
                console.log($(this))
            },

            characterNumAChange(val){

            },

            initPackageItem(){

            },

            submitPackage(){
                //所有计数器的数目都都加一
            },

            getPackageList(){
                this.$http.post('/apis/userMgrt/getPackageManageList.json').then(
                    function (response) {
                        this.packageList = response.data.data;
                        console.log(this.packageList)
                    }
                )
            },
        },
        mounted(){
            this.getPackageList();
        }
    }
</script>