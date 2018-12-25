if (window.location.href.split("/")[3]=="index") {
  var app = new Vue({
    el:'#app',
    data:{
      title:"",
      pisos:[]
    },
    methods:{
      setTitle:function() {
        this.title="Index"
      },
      getpiso:function(){
        $.get('/piso', (res) => {
          this.pisos=res.pisos;
        })
      }
    },
    mounted(){
      this.setTitle()
      this.getpiso()
    }
  })
}
