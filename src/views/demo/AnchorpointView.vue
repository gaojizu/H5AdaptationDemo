<template>
	<div class="content">
		<h1>锚点定位</h1>
		<div class="anchor-point">
			<b @click="goToAnchor('#one')">定位到1</b>
			<b @click="goToAnchor('#two')">定位到2</b>
			<b @click="goToAnchor('#three')">定位到3</b>
			<b @click="goToAnchor('#four')">定位到4</b>
			<b @click="goToAnchor('#five')">定位到5</b>
		</div>

		<div>
			<div class="item" id="one">ONE</div>
			<div class="item" id="two">TWO</div>
			<div class="item" id="three">THREE</div>
			<div class="item" id="four">FOUR</div>
			<div class="item" id="five">FIVE</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				currOffset: 0
			}
		},
		methods: {
			goToAnchor(selector) {
				let goTo = this.$el.querySelector(selector);
				if (goTo !== undefined && goTo !== null) {
					goTo.scrollIntoView({
						behavior: "smooth", // 平滑过渡
						block: "start", // 上边框与视窗顶部平齐
					});
					this.$nextTick(() => {
						//dom更新
					});
				}
			},
		}
	}
</script>

<style scoped lang="less">
	.content {
		.anchor-point {
			position: fixed;
			top: 10px;
		}

		.item {
			border: 1px solid #000;
			margin-top: 10px;
			width: 100%;
			height: 500px;
			box-sizing: border-box;
		}
	}
</style>
