<!--申请页面-->
<template>
  <div class="open-form">
    <fieldset class="">
      <legend>企业资质信息</legend>
      <label class="t-label">
        <div class="txt">
          <em class="t-red">*</em>
          公司全称：
        </div>
        <input class="t-input" type="text" v-model="companyName" readonly>
      </label>
      <label class="t-label">
        <div class="txt">
          <em class="t-red">*</em>
          公司所在区域：
        </div>
        <input class="t-input" type="text" v-model="area" readonly>
      </label>
      <label class="t-label">
        <div class="txt">
          <em class="t-red">*</em>
          公司详细地址：
        </div>
        <input class="t-input" type="text" v-model="address" readonly>
      </label>
      <label class="t-label">
        <div class="txt">
          企业人数：
        </div>
        <input class="t-input" type="text" v-model="enterprisePerNum">
      </label>
      <label class="t-label">
        <div class="txt">
          公司性质：
        </div>
        <input class="t-input" type="text" v-model="enterpriseNature">
      </label>
      <label class="t-label">
        <div class="txt">
          <em class="t-red">*</em>
          法人姓名：
        </div>
        <input class="t-input" type="text" v-model="legalPerson">
      </label>
      <label class="t-label">
        <div class="txt">
          <em class="t-red">*</em>
          身份证号：
        </div>
        <input class="t-input" type="text" v-model="legalPersonId">
      </label>
    </fieldset>
    <fieldset>
      <legend>授信及安全</legend>
      <label class="t-label">
        <div class="txt">
          授信额度：
        </div>
        <input class="t-input" type="text" v-model="applyAmout">
      </label>
      <label class="t-label">
        <div class="txt">
          账期日：
        </div>
        <input class="t-input" type="text" v-model="billDay">
      </label>
    </fieldset>
    <fieldset>
      <legend>上传资质文件</legend>
      <span class="warn">
(上传文件均需加盖公章，支持bmp/gif/jpg/png/jpeg/pdf格式文件,务必上传清晰且小于10M。)</span>
      <div class="t-label">
        <div class="txt">
          <em class="t-red">*</em>
          营业执照副本：
        </div>
        <q-up-load class="f-input"></q-up-load>
        <span class="q-icon" tips="营业执照（副本）复印件需加盖公司公章并注明“仅供齐采网开白条月结使用”"></span>
      </div>
      <div class="t-label">
        <div class="txt">
          <em class="t-red">*</em>
          经办人省份证明：
        </div>
        <input class="f-input" type="file">
        <span class="q-icon" tips="营业执照（副本）复印件需加盖公司公章并注明“仅供齐采网开白条月结使用”"></span>
      </div>
      <div class="t-label">
        <div class="txt">
          <em class="t-red">*</em>
          齐采白条申请书：
        </div>
        <input class="f-input" type="file">
        <span class="q-icon" tips="营业执照（副本）复印件需加盖公司公章并注明“仅供齐采网开白条月结使用”"></span>
        <a class="t-blue" target="_blank" href="http://www.17cai.com/images/template/iou_agreement_file.docx">下载白条申请书模板</a>
      </div>
    </fieldset>
    <button class="btn btn-sub">立即申请</button>
  </div>
</template>
<script>
  import urls from '../api/urls'
  import http from '../api/http'
  import {QUpLoad} from '../components'
  export default {
    components: {
      QUpLoad
    },
    data: function () {
      return {
        companyName: '',
        area: '',
        address: '',
        enterprisePerNum: '',
        enterpriseNature: '',
        legalPersonId: '',
        legalPerson: '',
        applyAmout: 1000,
        billDay: '',
        businessLicenseActualFileName: '',
        businessLicenseOriginalFileName: '',
        iouAgreementActualFileName: '',
        iouAgreementOriginalFileName: '',
        idCardActualFileName: '',
        idCardOriginalFileName: ''
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        let _this = this
        let opt = {
          method: 'get',
          url: urls.personInfo.dataUrl,
          isLoading: false,
          success: function (data) {
            _this.companyName = data.companyName
            _this.area = data.area
            _this.address = data.address
          }
        }
        http(opt)
      }
    }
  }
</script>
<style lang="less">
  .open-form {
    padding-top: 30px;
    padding-left: 100px;
    color: #666666;
    width: 700px;
    fieldset {
      position: relative;
      width: inherit;
      padding-top: 30px;
      padding-bottom: 30px;
      legend {
        font-size: 16px;
      }
      .t-label {
        display: block;
        width: inherit;
        font-size: 12px;
        padding-bottom: 10px;
        .txt {
          display: inline-block;
          text-align: right;
          width: 30%;
        }
        .t-input {
          width: 300px;
          height: 32px;
          border: 1px solid #d6d6d6;
          padding-left: 4px;
        }
        .f-input {
          display: inline-block;
          width: 253px;
        }
        .q-icon {
          display: inline-block;
          margin-left: 15px;
          width: 20px;
          height: 20px;
          cursor: pointer;
          vertical-align: -5px;
          background: url("../assets/images/question.png") no-repeat center center;
        }
      }
    }
    .btn-sub {
      margin-left: 200px;
    }
    .warn {
      position: absolute;
      top: 28px;
    }
  }
</style>
