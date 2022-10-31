<template>
	<div>
		<h1>DEMO</h1>
		<van-button islink @click="showPopup">显示弹出层</van-button>
		<!-- style="background-color: rgba(0,0,0,0);" -->
		<van-popup v-model="show" :safe-area-inset-bottom="true" :close-on-click-overlay="false" position="center">
			<div class="content">
				<div class="img">
					图片
					<!-- <img :src="imgUrl" alt="redPack"> -->
				</div>
				<div class="close" @click="show = false">x</div>
			</div>
		</van-popup>
	</div>
</template>

<script>
	import {
		setHtmlFontSize,
		removeHtmlFontSize
	} from "@/utils/rem.js";
	export default {
		data() {
			return {
				imgUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F07%2F71%2F5b3ccdfe0b3f1_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668824438&t=77de0d744e37ee11e6559e19bf4472d7",
				show: true,
			};
		},
		methods: {
			showPopup() {
				this.show = true;
			},
		},
		mounted() {
			setHtmlFontSize()
		},
		beforeDestroy() {
			removeHtmlFontSize();
		},
	}
</script>

<style scoped lang="less">
	.content {
		width: 600 *@unit;
		height: 800 *@unit;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: rgba(255, 255, 255, 0);
	}

	.img {
		width: 90%;
		height: 600 *@unit;
		border: 1 *@unit solid #000;

		img {
			width: 100%;
			height: 100%;
		}
	}

	.close {
		color: #000;
	}
</style>
