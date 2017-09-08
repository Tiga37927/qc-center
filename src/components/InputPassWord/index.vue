<template>
	<div class="input_password font14">
	  <div>
	    请输入您的支付密码
	  </div>
	  <div>
	    <input type="password">
	    <a href="javascript:;">忘记密码</a>
	    <a href="javascript:;">未设置支付密码</a>
	  </div>
	</div>
</template>

<style lang="less">
	.input_password {
	  padding: 30px 5px 20px 5px;

	  a {
	    margin-left: 15px;
	    position: relative;
	    top: 6px;
	    color: #0275d8;
	    text-decoration: underline;
	  }

	  input {
	    width: 200px;
	    height: 30px;
	    border: 1px solid #ccc;
	    letter-spacing: 4px;
	    padding: 0 10px;
	    margin-right: 10px;
	  }

	  input:focus {
	    border: 1px solid #0275d8;
	  }

	  div:first-child {
	    margin-bottom: 20px;
	  }
	}
</style>