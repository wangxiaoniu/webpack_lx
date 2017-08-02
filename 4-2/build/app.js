/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {


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

/***/ })
/******/ ]);