function INCREMENT()
{
    var number=Number(document.getElementById('number').innerHTML)
    document.getElementById('number').innerHTML=number+1

}
function DECREMENT()
{
    var number=Number(document.getElementById('number').innerHTML)
    document.getElementById('number').innerHTML=number-1
}
function NEUTRAL()
{
    var number=Number(document.getElementById('number').innerHTML)
    document.getElementById('number').innerHTML=0
}