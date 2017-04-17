/**
* Created by lifei on 2017/4/14.
*/
<template>
    <div class="search-box">
        <el-row v-for="(data, index) in searchData" v-if="searchNames.indexOf(data.name) != -1"
                :key="data.id" class="search-row">
            <el-col :span="2" class="transition">
                {{data.title}}
            </el-col>
            <el-col :span="22" class="transition">
                <ul :class="{'more-info-ul': data.hasMore}">
                    <li v-for="(item, index1) in data.searchList" class="search-list" :key="item.id"
                        @click="searchLiClick(item, index1, data)" :class="{'search-selected': item.selected}" v-if="item.text != ''">
                        {{item.text}}
                    </li>
                    <li class="search-list date-span" v-show="show" v-for="item in data.searchList" v-if="item.dateBox == 'show'">
                        <el-date-picker v-model="publishDate" type="daterange" placeholder="选择日期范围" @change="publishDateChange" range-separator=" 至 ">
                        </el-date-picker>
                    </li>
                    <li class="search-list date-span" v-for="item in data.searchList" v-else-if="item.dateBox == 'exact'">
                        <el-date-picker type="date" placeholder="选择日期" v-model="exactDate" @change="exactDateChange">
                        </el-date-picker>
                    </li>
                    <li class="search-list icon-list" v-if="data.hasMore == true" v-show="showFold">
                        <i class="el-icon-arrow-down pointer" v-on:click="foldMoreInfoClick"></i>
                    </li>
                </ul>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4">
                <el-button @click="sortByDate" type="primary">按日期排序 <i class="el-icon-arrow-down el-icon--right"></i></el-button>
            </el-col>
            <el-col :span="16">
                <div class="page-bar">
                    <el-pagination class="manage-pagination"
                                   @current-change="handleCurrentChange"
                                   :current-page="pageNumber"
                                   :page-size="5"
                                   layout="prev, next, jumper, total"
                                   :total="total">
                    </el-pagination>
                </div>
            </el-col>
            <el-col :span="4">
                <el-input placeholder="输入高校关键字/手机号" icon="search" @blur="keywordSearch"></el-input>
            </el-col>
        </el-row>
    </div>
</template>
<style lang="scss" scoped>
    .search-box {
        margin-bottom: 10px;
        color: #666;
        font-size: 14px;
        background: #fff;
        border-top: 1px solid #d6d6d6;

        .el-row {
            .el-col {
                height: 50px;
                border-bottom: 1px solid #d6d6d6;
                line-height: 50px;
                overflow: hidden;

            }

            &.search-row{
                .el-col{
                    .search-list {
                        display: inline-block;
                        text-align: center;
                        padding-left: 15px;
                        padding-right: 15px;
                        cursor: pointer;
                    }
                    &:first-child {
                         background: #e6e6e6;
                         padding-left: 20px;
                     }
                }
                .more-info-ul {
                    position: relative;

                    .icon-list{
                        position: absolute;
                        right: 0px;
                        top: 0px;
                    }
                }
            }

            &.el-row:last-child{
                 .el-col{
                     height: 70px;
                     line-height: 70px;
                 }
             }

            .page-bar{
                padding-top: 19px;
                padding-bottom: 19px;
            }
        }
        .search-selected {
            color: #60a3ff;
        }
        .transition{
            transition: 0.5s;
            -moz-transition: 0.5s; /* Firefox 4 */
            -webkit-transition: 0.5s; /* Safari 和 Chrome */
            -o-transition: 0.5s; /* Opera */
        }
    }
</style>
<script>
    export default {
        data() {
            return {
                showFold: false,
                searchData:[
                    {
                        'id': 0,
                        'name': 'region',
                        'title' :  '地区:',
                        'searchList': [
                            {id: 0, text: '全部', selected: true},
                            {id: 1, text: '安徽', selected: false},
                            {id: 2, text: '北京', selected: false},
                            {id: 3, text: '河北', selected: false},
                            {id: 4, text: '山西', selected: false},
                            {id: 5, text: '内蒙古', selected: false},
                            {id: 6, text: '辽宁', selected: false},
                            {id: 7, text: '吉林', selected: false},
                            {id: 8, text: '黑龙江', selected: false},
                            {id: 9, text: '上海', selected: false},
                            {id: 10, text: '江苏', selected: false},
                            {id: 11, text: '浙江', selected: false},
                            {id: 12, text: '深圳', selected: false},
                            {id: 13, text: '苏州', selected: false},
                            {id: 14, text: '杭州', selected: false},
                            {id: 15, text: '天津', selected: false},
                            {id: 16, text: '青岛', selected: false},
                            {id: 17, text: '广州', selected: false},
                            {id: 18, text: '济南', selected: false},
                            {id: 19, text: '宁波', selected: false},
                            {id: 20, text: '厦门', selected: false},
                            {id: 21, text: '成都', selected: false},
                            {id: 22, text: '武汉', selected: false},
                        ],
                        'hasMore': true
                    },
                    {
                        'id': 1,
                        'name': 'memberLevel',
                        'title': '会员级别:',
                        'searchList': [
                            {id: 0, text: '全部', selected: true, showCharacter: false},
                            {id: 1, text: '试用会员', selected: false, showCharacter: false},
                            {id: 2, text: 'A级会员', selected: false, showCharacter: false},
                            {id: 3, text: 'B级会员', selected: false, showCharacter: false},
                            {id: 4, text: 'C级会员', selected: false, showCharacter: false}
                        ]
                    },
                    {
                        'id': 2,
                        'name': 'newMember',
                        'title': '新增会员:',
                        'searchList': [
                            {id: 0, text: '全部', selected: true},
                            {id: 1, text: '今日新增', selected: false},
                            {id: 2, text: '昨日新增', selected: false},
                            {id: 3, text: '近7天新增', selected: false},
//                            {id: 4, text: '自定义', selected: false, dateBox: 'show'}
                        ],
//                        'hasDateBox': true
                    },
                    {
                        'id': 3,
                        'name': 'memberStatus',
                        'title': '状态:',
                        'searchList': [
                            {id: 0, text: '全部', selected: true},
                            {id: 1, text: '已到期', selected: false},
                            {id: 2, text: '未到期', selected: false},
                            {id: 3, text: '即将到期', selected: false},
                            {id: 4, text: '自定义', selected: false, dateBox: 'show'}
                        ],
                        'hasDateBox': true
                    },
                    {
                        'id': 4,
                        'name': 'publishDateTime',
                        'title': '时间:',
                        'searchList': [
                            {id: 0, text: '全部', selected: true},
                            {id: 1, text: '今天', selected: false},
                            {id: 2, text: '昨天', selected: false},
                            {id: 3, text: '近7天', selected: false},
                        ],
                        'hasDateBox': false
                    }
                ],
                show: false,
                publishDate: [],
                foldRegion: false,
                exactDate: '',
                pageNumber: 20,
                total: 100,
                defaultDateSort: 'DESC'
            }
        },
        components: {},
        methods: {
            showFoldIcon() {
                let vm = this;
                this.$nextTick(function () {
                    if($('.more-info-ul').height() > 50){
                        this.showFold = true;
                    }
                });
            },

            foldMoreInfoClick(){
                if ($('.more-info-ul .el-icon-arrow-down').hasClass('el-icon-arrow-up')) {
                    $('.el-icon-arrow-down').removeClass('el-icon-arrow-up');
                    $('.more-info-ul').closest('div.el-row').children().each(function (index) {
                        $(this).height(50);
                    });
                } else {
                    $('.more-info-ul .el-icon-arrow-down').addClass('el-icon-arrow-up');
                    var height = $('.more-info-ul').height();
                    $('.more-info-ul').closest('div.el-row').children().each(function (index) {
                        $(this).height(height);
                    });
                }
            },

            searchLiClick (item, index1, data) {
                for (var i  in data.searchList) {
                    data.searchList[i].selected = false;
                }
                item.selected = true;

                if (data.hasDateBox == true && !item.dateBox) {
                    this.show = false;
                }

                if (item.dateBox == 'show') {
                    this.show = true;
                }

                if (data.name === 'publishDateTime') {
                    if (item.text === '自定义时间') {
                        //如果是自定义时间，触发回调放在控件的change中
                        return;
                    } else {
                        this.publishDate = [];
                    }
                }

                // searchDataChange回调
                this.$emit('searchDataChange', this.buildParam());
            },

            foldRegionClick() {
                if ($('.search-list .el-icon-arrow-down').hasClass('el-icon-arrow-up')) {
                    $('.el-icon-arrow-down').removeClass('el-icon-arrow-up');
                    $('.search-list').closest('div.el-row').children().each(function (index) {
                        $(this).height(50);
                    });
                } else {
                    $('.search-list .el-icon-arrow-down').addClass('el-icon-arrow-up');
                    var height = $('.search-list').height();
                    $('.search-list').closest('div.el-row').children().each(function (index) {
                        $(this).height(height);
                    });
                }
            },

            /**日历控件改变*/
            publishDateChange() {
                if (this.publishDate.length > 0) {
                    this.$emit('searchDataChange', this.buildParam());
                }
            },

            /**构建参数对象*/
            buildParam() {
                let result = {};
                let searchData = this.searchData;
                let searchNames = this.searchNames;

                loop: for (var i = 0; i < searchNames.length; i++) {
                    var name = searchNames[i];
                    for (var j = 0; j < searchData.length; j++) {
                        if (searchData[j].name === name) {
                            var searchList = searchData[j].searchList;
                            for (var k = 0; k < searchList.length; k++) {
                                if (searchList[k].selected) {
                                    var text = searchList[k].text;
                                    if (name === 'university') {
                                        var univs = [];
                                        if (text != '全部') {
                                            univs.push(text);
                                        }
                                        result[name] = univs;
                                        break;
                                    }
                                    if (text === '不限') {
                                        break;
                                    }

                                    if (name === 'publishDateTime') {

                                        var publishDateTime = {};
                                        var startSuffix = " 00:00:00";
                                        var endSuffix = " 23:59:59";
                                        var format = 'yyyy-MM-dd';

                                        if (text === '自定义时间') {
                                            publishDateTime.startDate = this.publishDate[0].format(format) + startSuffix;
                                            publishDateTime.endDate = this.publishDate[1].format(format) + endSuffix;
                                        } else {
                                            var now = new Date();
                                            var nowDate = now.format(format);
                                            var oneDayMills = 1000 * 60 * 60 * 24;
                                            if (text === '今天') {
                                                publishDateTime.startDate = nowDate + startSuffix;
                                                publishDateTime.endDate = nowDate + endSuffix;
                                            }
                                            if (text === '昨天') {
                                                var date = new Date(now.getTime() - oneDayMills).format(format);
                                                publishDateTime.startDate = date + startSuffix;
                                                publishDateTime.endDate = date + endSuffix;
                                            }
                                            if (text === '近7天') {
                                                var date = new Date(now.getTime() - oneDayMills * 7).format(format);
                                                publishDateTime.startDate = date + startSuffix;
                                                publishDateTime.endDate = nowDate + endSuffix;
                                            }
                                            if (text === '近一个月') {
                                                var date = new Date(now.getTime() - oneDayMills * 30).format(format);
                                                publishDateTime.startDate = date + startSuffix;
                                                publishDateTime.endDate = nowDate + endSuffix;
                                            }

                                        }
                                        result['startDate'] = publishDateTime.startDate;
                                        result['endDate'] = publishDateTime.endDate;
                                        break;
                                    }
                                    result[name] = text;
                                    break;
                                }

                                if(this.exactDate != '' && this.exactDate != undefined && searchList[k].dateBox == 'exact'){
                                    var startSuffix = " 00:00:00";
                                    var endSuffix = " 23:59:59";
                                    var format = 'yyyy-MM-dd';
                                    result.startDate = this.exactDate.format(format) + startSuffix;
                                    result.endDate = this.exactDate.format(format) + endSuffix;
                                }
                            }
                            continue loop;
                        }
                    }
                }
                return result;
            },
            /**
             * 精确搜索某天的日期控件改变
             */
            exactDateChange(){
                this.$emit('searchDataChange', this.buildParam());
            },

            handleCurrentChange(pageNumber){
                console.log(pageNumber)
            },

            sortByDate(event){
                //判断升序还是降序  然后传参给父级组件进行排序
                if(this.defaultDateSort == 'DESC'){
                    this.defaultDateSort = 'ASC';
                    let $target = $(event.target);
                    $target.find('i').removeClass('el-icon-arrow-down').addClass('el-icon-arrow-up');
                }else {
                    this.defaultDateSort = 'DESC';
                    let $target = $(event.target);
                    $target.find('i').removeClass('el-icon-arrow-up').addClass('el-icon-arrow-down');
                }
            },

            keywordSearch(event){
                console.info(event)
            }
        },
        mounted() {
            this.showFoldIcon();
        },
        props: ["searchNames"],
    }
</script>