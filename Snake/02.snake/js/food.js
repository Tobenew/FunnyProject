//食物对象的属性: 宽度, 高度,颜色,x轴坐标,y轴坐标
//食物对象的方法: render() 创建div并初始化效果,添加到页面上
function Food(options) {
    options = options || {};
    this.x = options.x || 0;
    this.y = options.y || 0;

    this.width = options.width || 20;
    this.height = options.height || 20;

    this.color = options.color || 'green';
}

//设置小盒子为绝对定位
var position = 'absolute';

//渲染
Food.prototype.render = function (map) {
    // 动态创建div 页面上显示的食物
    var div = document.createElement('div');
    map.appendChild(div);
  }