<template>
	<div class="content">
		<h1>监听滚动</h1>
		<div class="show-font">
			距离顶部:{{currOffset}}
		</div>
		<div style="height: 1900px;"></div>
		<div @click="ctroScroll" :class="['gg',isScroll ? toRight : '']">
			奖品
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				currOffset: 0,
				toRight: 'to-right',
				isScroll: false
			}
		},
		mounted() {
			window.addEventListener('scroll', this.delay_f(this.getOffset, 2000))
		},
		methods: {

			// 获取到当前滚动的距离顶部的高度
			getOffset() {
				var scrollTop =
					document.documentElement.scrollTop || document.body.scrollTop;
				this.currOffset = scrollTop
				// 隐藏礼物
				this.isScroll = true
				// 页面停止滚动 回复广告位
				// setTimeout(() => {
				// 	this.isScroll = false
				// }, 1000)
				console.log("2000====>")
			},
			// 节流函数
			delay_f(func, delay) {
				let timer
				return function() {
					let that = this
					let arg = arguments
					if (timer) {
						return
					}
					timer = setTimeout(function() {
						func.call(that, arg)
						timer = null
					}, delay)
				}
			},
			ctroScroll() {
				this.isScroll = false
			},
		}
	}
</script>

<style scoped lang="less">
	.content {
		.gg {
			width: 100px;
			height: 100px;
			position: fixed;
			top: 300px;
			right: 0;
			border: 1px solid #f40;
			transition: 0.5s;
		}

		.to-right {
			transition: 0.5s;
			right: -36px;
			opacity: 0.4;
		}
	}

	.show-font {
		position: fixed;
		margin: auto;
	}
</style>
