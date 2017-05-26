function creatGSCanvans(img) {
	var canvas = document.createElement("canvas");
	canvas.width = img.width;
	canvas.height = img.height;
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0);
	//注意：getImageData只能操作与脚本位于同一个域中的图片
	var c = ctx.getImageData(0, 0, img.width, img.height)
	for (var i = 0; i < c.height; i++) {
		for (var j = 0; j < c.width; j++) {
			var x = (i * 4) * c.height + (j * 4);
			var r = c.data[x];
			var g = c.data[x + 1];
			var b = c.data[x + 2];
			c.data[x] = c.data[x + 1] = c.data[x + 2] = (r + g + b) / 3;
		}
	}
	ctx.putImageData(c, 0, 0, 0, 0, c.width, c.height);
}

function converToGS(img) {
	//如果浏览器不支持canvas
	if (!Modernizr.canvas) return false;
	//储存原始的彩色版
	img.color = img.src;
	//创建灰度版
	img.grayscale = creatGSCanvans(img);

	img.onmouseover = function() {
		this.src = this.color;
	}
	img.onmouserout = function() {
		this.color = this.grayscale;
	}
	img.onmouserout();
}

window.onload = function() {
	converToGS(document.getElementById("avatar"));
}