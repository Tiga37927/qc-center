<template>
  <div>
    <form ref="form" method="post" id="myForm" :action="url" enctype="multipart/form-data">
      <input type="file" @change="up()">
    </form>
  </div>
</template>
<script>
  import urls from '../../api/urls'

  export default {
    data: function () {
      return {
        url: urls.upload.dataUrl
      }
    },
    methods: {
      up () {
        this.$ref('form').submit()
      }
    }
  }
</script>
