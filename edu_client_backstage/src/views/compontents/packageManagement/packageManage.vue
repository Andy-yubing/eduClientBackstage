<template>
    <div class="packageManage">
        <el-card class="control-card no-padding">
            <div class="title" slot="header">套餐管理</div>
            <div class="content">
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="4">试用会员</el-col>
                    <el-col :span="5">A套餐</el-col>
                    <el-col :span="5">B套餐</el-col>
                    <el-col :span="3" class="no-border-right">C套餐</el-col>
                    <el-col :span="3" class="no-border-right">
                        单品价格
                    </el-col>
                </el-row>

                <el-row class="text-center" type="flex" align="middle" v-for="item in allItemList">
                    <el-col :span="2" v-if="item.leftTitle">{{item.leftTitle}}</el-col>
                    <el-col :span="2" v-else>&nbsp;</el-col>
                    <el-col :span="2" :class="{blue: item.textColor == 'blue'}">{{item.label}}</el-col>
                    <el-col :span="20" v-if="item.textColor == 'blue'" class="no-border-right"></el-col>
                    <el-col :span="4" v-if="item.textColor == 'black'">
                        <el-switch v-model="item.packageTrial"></el-switch>
                    </el-col>
                    <el-col :span="5" v-if="item.textColor == 'black'">
                        <el-switch v-model="item.packageA"></el-switch>
                    </el-col>
                    <el-col :span="5" v-if="item.textColor == 'black'">
                        <el-switch v-model="item.packageB"></el-switch>
                    </el-col>
                    <el-col :span="3" v-if="item.textColor == 'black'" class="no-border-right">
                        <el-switch v-model="item.packageC" @change="packageCItemChange(item)"></el-switch>
                    </el-col>
                    <el-col :span="3" v-if="item.textColor == 'black'" class="no-border-right">
                        <el-input v-model="item.itemPrice"></el-input>
                    </el-col>
                </el-row>

                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="2">可关注高校</el-col>
                    <el-col :span="4">
                        <el-input-number v-model="collegeNumTrial" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="5">
                        <el-input-number v-model="collegeNumA" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="5">
                        <el-input-number v-model="collegeNumB" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="3" class="no-border-right">
                        <el-input-number v-model="collegeNumC" :min="1" class="mt7" @change="packageCItemChange"></el-input-number>
                    </el-col>
                    <el-col :span="3" class="no-border-right">
                        <el-input v-model="collegePrice" @change="packageCItemChange">
                            <template slot="append">元/所</template>
                        </el-input>
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="2">可关注人物</el-col>
                    <el-col :span="4">
                        <el-input-number v-model="characterNumTrial" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="5">
                        <el-input-number v-model="characterNumA" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="5">
                        <el-input-number v-model="characterNumB" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="3" class="no-border-right">
                        <el-input-number v-model="characterNumC" :min="1" class="mt7" @change="packageCItemChange"></el-input-number>
                    </el-col>
                    <el-col :span="3" class="no-border-right">
                        <el-input v-model="characterPrice" @change="packageCItemChange">
                            <template slot="append">元/人</template>
                        </el-input>
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="2">可添加子账号</el-col>
                    <el-col :span="4">
                        <el-input-number v-model="subAccountNumTrial" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="5">
                        <el-input-number v-model="subAccountNumA" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="5">
                        <el-input-number v-model="subAccountNumB" :min="1" class="mt7"></el-input-number>
                    </el-col>
                    <el-col :span="6" class="no-border-right">
                        <el-input-number v-model="subAccountNumC" :min="1" class="mt7"></el-input-number>
                    </el-col>
                </el-row>
                <el-row class="text-center" type="flex" align="middle">
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="2">价格</el-col>
                    <el-col :span="4">无</el-col>
                    <el-col :span="5">
                        <el-row>
                            <el-col :span="12">
                                <el-input v-model="halfYearPriceA">
                                    <template slot="append">元/半年</template>
                                </el-input>
                            </el-col>
                            <el-col :span="12" class="no-border-right">
                                <el-input v-model="oneYearPriceA">
                                    <template slot="append">元/年</template>
                                </el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5">
                        <el-row>
                            <el-col :span="12">
                                <el-input v-model="halfYearPriceB">
                                    <template slot="append">元/半年</template>
                                </el-input>
                            </el-col>
                            <el-col :span="12" class="no-border-right">
                                <el-input v-model="oneYearPriceB">
                                    <template slot="append">元/年</template>
                                </el-input>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="6" class="no-border-right">
                        {{packageCTotal}} 元/半年 &nbsp;
                    </el-col>
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

            &.el-row{
                .el-col{
                     border-right: 1px solid #d1dbe5;
                 }

                .no-border-right{
                    border-right: none;
                }
             }

            .el-col{
                height: 60px;

                &.el-col:not(:first-child){
                     border-bottom: 1px solid #d1dbe5;
                 }

                .el-input, .el-input-number{
                    width: 80%;

                    .el-input-group__append, .el-input-group__prepend{
                        padding: 0px 2px;
                    }
                }

                .mt7{
                    margin-top: 12px;
                }
            }

            &.el-row:last-child{
                .el-col{
                    border-bottom:none;
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
                halfYearPriceA: 0,
                oneYearPriceA: 0,
                collegeNumB: 1,
                characterNumB: 1,
                subAccountNumB: 1,
                halfYearPriceB: 0,
                oneYearPriceB: 0,
                collegeNumC: 1,
                characterNumC: 1,
                subAccountNumC: 1,
                packageList: '',
                allItemList: [
                    {label: '舆情管理', textColor: 'blue'},
                    {
                        label: '全景舆情',
                        textColor: 'black',
                        packageA: false,
                        packageB: false,
                        packageC: false,
                        packageTrial: false,
                        itemPrice: 0,
                        itemPriceId: 11
                    },
                    {
                        label: '舆情监测',
                        textColor: 'black',
                        packageA: false,
                        packageB: false,
                        packageC: false,
                        packageTrial: false,
                        itemPrice: 0,
                        itemPriceId: 7
                    },
                    {
                        label: '舆情预警',
                        textColor: 'black',
                        packageA: false,
                        packageB: false,
                        packageC: false,
                        packageTrial: false,
                        itemPrice: 0,
                        itemPriceId: 10
                    },
                    {
                        label: '事件监测',
                        textColor: 'black',
                        packageA: false,
                        packageB: false,
                        packageC: false,
                        packageTrial: false,
                        itemPrice: 0,
                        itemPriceId: 8
                    },
                    {
                        label: '舆情报告',
                        textColor: 'black',
                        packageA: false,
                        packageB: false,
                        packageC: false,
                        packageTrial: false,
                        itemPrice: 0,
                        itemPriceId: 4
                    },
                    {label: '情报内参', textColor: 'blue'},
                    {
                        label: '行业动态',
                        textColor: 'black',
                        packageA: false,
                        packageB: false,
                        packageC: false,
                        packageTrial: false,
                        itemPrice: 0,
                        itemPriceId: 1,
                        leftTitle: '套餐详情'
                    },
                    {
                        label: '人物动态',
                        textColor: 'black',
                        packageA: false,
                        packageB: false,
                        packageC: false,
                        packageTrial: false,
                        itemPrice: 0,
                        itemPriceId: 9
                    },
                    {
                        label: '两微洞察',
                        textColor: 'black',
                        packageA: false,
                        packageB: false,
                        packageC: false,
                        packageTrial: false,
                        itemPrice: 0,
                        itemPriceId: 2
                    },
                    {
                        label: '媒体声誉',
                        textColor: 'black',
                        packageA: false,
                        packageB: false,
                        packageC: false,
                        packageTrial: false,
                        itemPrice: 0,
                        itemPriceId: 5
                    },
                    {
                        label: '内参报告',
                        textColor: 'black',
                        packageA: false,
                        packageB: false,
                        packageC: false,
                        packageTrial: false,
                        itemPrice: 0,
                        itemPriceId: 3
                    },
                    {label: '业务平台', textColor: 'blue'},
                    {
                        label: '两微监管',
                        textColor: 'black',
                        packageA: false,
                        packageB: false,
                        packageC: false,
                        packageTrial: false,
                        itemPrice: 0,
                        itemPriceId: 6
                    },
                ],
                characterPrice: 0,
                collegePrice: 0,
                packageCTotal: 0
            }
        },
        methods: {
            collegeNumAChange(val){

            },

            characterNumAChange(val){

            },

            packageCItemChange(val){
                let total =  0;
                //重新计算C套餐价格前重置价格
                this.packageCTotal = 0;
                for(let i = 0; i < this.allItemList.length; i++){
                    if(this.allItemList[i].itemPriceId){
                        if(this.allItemList[i].packageC){
                            total = parseFloat(total) + parseFloat(this.allItemList[i].itemPrice);
                        }
                    }
                }

                this.packageCTotal = parseFloat(total) + this.collegeNumC * this.collegePrice + this.characterNumC * this.characterPrice;
            },

            submitPackage(){
                let packageA = {
                        name: 'A套餐',
                        concernCollegeNum: this.collegeNumA,
                        concernPersonNum:　this.characterNumA,
                        subAccountNum: this.subAccountNumA,
                        perCollegePrice: 0,
                        perCharacterPrice: 0,
                        packageItem: '',
                        total: 6000
                    },
                    packageB = {
                        name: 'B套餐',
                        concernCollegeNum: this.collegeNumB,
                        concernPersonNum:　this.characterNumB,
                        subAccountNum: this.subAccountNumB,
                        perCollegePrice: 0,
                        perCharacterPrice: 0,
                        packageItem: '',
                        total: 6000
                    },
                    packageC = {
                        name: 'C套餐',
                        concernCollegeNum: this.collegeNumC,
                        concernPersonNum:　this.characterNumC,
                        subAccountNum: this.subAccountNumC,
                        perCollegePrice: this.collegePrice,
                        perCharacterPrice:　this.characterPrice,
                        packageItem: '',
                        total: this.packageCTotal
                    },
                    packageTrial = {
                        name: '试用会员',
                        concernCollegeNum: this.collegeNumTrial,
                        concernPersonNum:　this.characterNumTrial,
                        subAccountNum: this.subAccountNumTrial,
                        perCollegePrice: 0,
                        perCharacterPrice: 0,
                        packageItem: '',
                        total: 0
                    };

                for(let i = 0; i <　this.allItemList.length; i++){
                    if(this.allItemList[i].itemPriceId){
                        if(this.allItemList[i].packageA){
                            let packageItemA = packageA.packageItem;
                            if(packageItemA.length > 0){
                                packageA.packageItem = packageItemA + "," + this.allItemList[i].itemPriceId;
                            }else {
                                packageA.packageItem = this.allItemList[i].itemPriceId + '';
                            }
                        }
                        if(this.allItemList[i].packageB){
                            let packageItemB = packageB.packageItem;
                            if(packageItemB.length > 0){
                                packageB.packageItem = packageItemB + "," + this.allItemList[i].itemPriceId;
                            }else {
                                packageB.packageItem = this.allItemList[i].itemPriceId + '';
                            }
                        }
                        if(this.allItemList[i].packageC){
                            let packageItemC = packageC.packageItem;
                            if(packageItemC.length > 0){
                                packageC.packageItem = packageItemC + "," + this.allItemList[i].itemPriceId;
                            }else {
                                packageC.packageItem = this.allItemList[i].itemPriceId + '';
                            }
                        }
                        if(this.allItemList[i].packageTrial){
                            let packageItemT = packageTrial.packageItem;
                            if(packageItemT.length > 0){
                                packageTrial.packageItem = packageItemT + "," + this.allItemList[i].itemPriceId;
                            }else {
                                packageTrial.packageItem = this.allItemList[i].itemPriceId + '';
                            }
                        }
                    }
                }

                let packageItemList = [];
                for(let i = 0; i < this.allItemList.length; i++){
                    if(this.allItemList[i].itemPriceId){
                        let param = {
                            id: this.allItemList[i].itemPriceId,
                            itemPrice: this.allItemList[i].itemPrice
                        }
                        packageItemList.push(param);
                    }
                }

                let packageDetail = [packageTrial,packageA, packageB, packageC];
                let data = {
                    packageDetails: packageDetail,
                    packageItemPrices: packageItemList
                }

                this.$http.post('/apis/userMgrt/updatePackageManage.json', data).then(
                    function (response) {
                        if(response.data.success){
                            this.$message({
                                type: 'success',
                                message: '更新成功'
                            })
                        }
                    }
                )
            },

            getPackageList(){
                this.$http.post('/apis/userMgrt/getPackageManageList.json').then(
                    function (response) {
                        this.packageList = response.data.data;
                        let total = 0;
                        for(let i = 0; i < this.packageList.length; i++){
                            let itemList = this.packageList[i].itemList;
                            if(!itemList){
                                continue ;
                            }
                            for(let p = 0; p < itemList.length; p++){
                                for(let a = 0; a < this.allItemList.length; a++){
                                    if(itemList[p].name == this.allItemList[a].label){
                                        if(this.packageList[i].name == 'A套餐'){
                                            this.allItemList[a].packageA = true;
                                        }else if(this.packageList[i].name == 'B套餐'){
                                            this.allItemList[a].packageB = true;
                                        }else if(this.packageList[i].name == 'C套餐'){
                                            this.allItemList[a].packageC = true;
                                            total = total + itemList[p].itemPrice;
                                        }else{
                                            this.allItemList[a].packageTrial = true;
                                        }
                                        this.allItemList[a].itemPrice = itemList[p].itemPrice;
                                        break;
                                    }
                                }
                            }

                            //子账号 可关注人物 可关注高校数量
                            if(this.packageList[i].name == 'A套餐'){
                                this.collegeNumA = this.packageList[i].concernCollegeNum;
                                this.characterNumA = this.packageList[i].concernPersonNum;
                                this.subAccountNumA = this.packageList[i].subAccountNum;
                                if(this.packageList[i].halfYearPrice){
                                    this.halfYearPriceA = this.packageList[i].halfYearPrice;
                                }
                                if(this.packageList[i].yearPrice){
                                    this.oneYearPriceA = this.packageList[i].yearPrice;
                                }
                            }else if(this.packageList[i].name == 'B套餐'){
                                this.collegeNumB = this.packageList[i].concernCollegeNum;
                                this.characterNumB = this.packageList[i].concernPersonNum;
                                this.subAccountNumB = this.packageList[i].subAccountNum;
                                if(this.packageList[i].halfYearPrice){
                                    this.halfYearPriceB = this.packageList[i].halfYearPrice;
                                }
                                if(this.packageList[i].yearPrice){
                                    this.oneYearPriceB = this.packageList[i].yearPrice;
                                }
                            }else if(this.packageList[i].name == 'C套餐'){
                                this.collegeNumC = this.packageList[i].concernCollegeNum;
                                this.characterNumC = this.packageList[i].concernPersonNum;
                                this.subAccountNumC = this.packageList[i].subAccountNum;
                                this.collegePrice = this.packageList[i].perCollegePrice;
                                this.characterPrice = this.packageList[i].perCharacterPrice;
                                total =  total + this.packageList[i].concernCollegeNum * this.packageList[i].perCollegePrice
                                        + this.packageList[i].concernPersonNum * this.packageList[i].perCharacterPrice;
                            }else{
                                this.collegeNumTrial = this.packageList[i].concernCollegeNum;
                                this.characterNumTrial = this.packageList[i].concernPersonNum;
                                this.subAccountNumTrial = this.packageList[i].subAccountNum;
                            }
                        }
                        this.packageCTotal = parseFloat(total);
                    }
                )
            },
        },
        mounted(){
            this.getPackageList();
        }
    }
</script>