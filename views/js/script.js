var app = new Vue({
  el:'#app',
  data:{
    message:'Hello Vue!'
  },
  methods:{
    cambiarMessage:function(event) {
      this.message=$("#email").val()
    }
  }
})
