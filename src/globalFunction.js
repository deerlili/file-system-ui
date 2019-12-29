//全局函数 ，挂载到Vue实例上
exports.install = function (Vue, options) {
  /**
   * checkIsLogin(params) 页面内某些功能需要用户登录时调用,调用示例如下
   * let res = this.checkIsLogin(this.$route.fullPath);
   * if(res === true) {
   *  // 做些什么......
   * }
   * 其中，参数为当前页面的全部路由fullPath（即包括query等参数）
   */
  Vue.prototype.checkIsLogin = function (params) {
    if (this.$store.state.isLogin == false) { // 未登录时自动跳转到登录页面，并将当前页面的路由作为query传递给登陆页面
      this.$router.push({ path: '/login', query: { Rurl: params } });
    } else {
      return true
    }
  };
  /**
   * 当然，你还可以在这里封装并挂载更多的全局函数在这里，示例同上
   */
};