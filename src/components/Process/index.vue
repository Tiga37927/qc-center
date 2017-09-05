<template>
  <div>
    {{percentage}}%
  </div>
</template>
<script>
  export default {
    props: {
      status: {
        type: String
      },
      percentage: {
        type: Number,
        default: 0,
        required: true,
        validator: val => val >= 0 && val <= 100
      },
      width: {
        type: Number,
        default: 126
      },
    }
  }
</script>
