
window.onload=function(){

    var Oprev =document.getElementById('prev');
    var Onext =document.getElementById('next');
    var Oimg =document.getElementById('img');
    var Olist=document.getElementById('list');
    var OLi=Olist.getElementsByTagName('li');
    var Odiv=Olist.getElementsByTagName('div');
    var urlImg=['img/1.png','img/2.png','img/3.png','img/4.png'];
    var count=0;


    //初始化
    OLi[0].className='active';

    //图片切换函数
    function imgTab(){
      Oimg.src=urlImg[count];
      for(var i=0;i<urlImg.length;i++){
          OLi[i].className='';
      }
      OLi[count].className='active';
  };
  for(var i=0;i<urlImg.length;i++){
      OLi[i].index=i;
      OLi[i].onclick=function(){
          count=this.index;
          imgTab();
      };
      //缩略图
      OLi[i].onmouseover=function(){
          Odiv[this.index].style.display='block';
      };
      OLi[i].onmouseout=function(){
          Odiv[this.index].style.display='none';
      }
      //缩略图 end
  }
    //前一张图片
    Oprev.onclick=function(){
        count--;
        if(count == -1){
            count=urlImg.length -1;
        }
        imgTab();
    };
    //点击下一张图片
    Onext.onclick=function(){
        count ++;
        if(count == urlImg.length){
            count=0;
        }
        imgTab();
    };

};