<template>
	<div class="dh">
		<ul>
			<li @click="goPage('popup')">
				<van-button>中心弹框</van-button>
			</li>
			<li @click="goPage('anchorpoint')">
				<van-button>锚点定位</van-button>
			</li>
			<li @click="goPage('watchscroll')">
				<van-button>监听滚动</van-button>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goPage(u) {
				this.$router.push(u)
			}
		}
	}
</script>

<style scoped lang="less">
	.dh {
		ul>li {
			margin-top: 10px;
		}

		padding: 30px;
	}
</style>
