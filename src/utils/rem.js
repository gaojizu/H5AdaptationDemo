const documentNode = document.documentElement
const Resize = () => {
	documentNode.style.fontSize = documentNode.clientWidth / 10 + 'px'
}
// 根据屏幕宽度设置根元素字号大小
export const setHtmlFontSize = () => {
	// dom加载后执行
	documentNode.addEventListener('DOMContentLoaded', Resize)
	// 屏幕变化后执行
	window.addEventListener('resize', Resize)
	Resize()
}

// 移除根元素字号
export const removeHtmlFontSize = () => {
	documentNode.style.fontSize = ''
  documentNode.removeEventListener('DOMContentLoaded', Resize)
	window.removeEventListener('resize', Resize)
}