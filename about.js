function change(){
    var d = new Date()
    return d.getHours()+" : "+d.getMinutes()+" : "+d.getSeconds()
}
function update(){
    document.querySelector('#time').innerHTML = change()
    window.setTimeout('update()', 1)
}
update()