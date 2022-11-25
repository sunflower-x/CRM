/* 
    实现二级菜单
    1.点击向下的图表切换到向上
    2.内容慢慢展开
    3.再次点击相反
*/

let statisticChart = document.querySelector('.container .sideBar .secondMenu .statisticChart');
let secondMenu = document.querySelector('.container .sideBar .secondMenu');
let icon=document.querySelector('.container .sideBar .secondMenu dt .icon');
statisticChart.addEventListener('click',()=>{
    if(secondMenu.offsetHeight==45){
        secondMenu.style.height="185px";
        icon.innerHTML="<i class='fa-solid fa-chevron-up'></i>"
    }else{
        secondMenu.style.height="45px";
        icon.innerHTML="<i class='fa-solid fa-chevron-down'></i>"
    }
})
