/**
 * [增加一个在脚本加载时候执行的方法]
 * @param {function} func [需要插入的方法]
 */
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

/**
 * [在元素之后插入元素]
 * @param  {[Element]} [需要插入的元素]
 * @param  {[Element]} [目标元素]
 * @return {[type]}
 */
function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastNode == targetElement) {
		parent.appenChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSiling);
	}
}

/**
 * 追加新类名
 * @param {[element]} element [需要追加类名的元素]
 * @param {[string]} value   [追加的值]
 */
function addClass(element, value) {
	if (!element.className) {
		element.className = value;
	} else {
		newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
}