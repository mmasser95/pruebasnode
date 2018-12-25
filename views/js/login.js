if (window.location.href.split("/")[3]=="login") {
    $("#enviar").click(function() {
        data={
            email:$("#email").val(),
            pass:$("#pass").val()
        }
        $.post('/signIn', data,(res) => {
            alert(JSON.stringify(res))
        })
    })
        
}