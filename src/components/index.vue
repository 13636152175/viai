<template>
	<div class="wrap">
	<!--头部-->
			<div class="hander">
				<!--页眉部分-->
				<div class="hander-top">
					<!--logo部分-->
					<div class="logo iconfont icon-jinritoutiao">
					</div>
					<!--搜索框-->
					<div class="hander-search">
						<label for="search" class="iconfont icon-search
"></label>
						<input type="text" placeholder="各种姿势 | 北京蓝蓝 | 中国 ..."  id="search"/>
					</div>
				</div>
				<!--滑动轮播-->
				<div class="hander-bottom">
				  <div class="swiper-wrapper">
					  <div class="swiper-slide">推荐</div>
					  <div class="swiper-slide">视频</div>
					  <div class="swiper-slide">热点</div>
					  <div class="swiper-slide">社会</div>
					  <div class="swiper-slide">娱乐</div>
					  <div class="swiper-slide">军事</div>
					  <div class="swiper-slide">科技</div>
					  <div class="swiper-slide">汽车</div>
					  <div class="swiper-slide">体育</div>
					  <div class="swiper-slide">财经</div>
					  <div class="swiper-slide">国际</div>
					  <div class="swiper-slide">时尚</div>
				  </div>
				  <div class="swip-ico">
				  		<i class="iconfont icon-add_light"></i>
				  </div>
				</div>
			</div>
			<!--内容部分-->
			<div class="main">
				<!--内容部分1-->
				<div class="main-content">
					<div class="content-title">
						一龙的金钟罩是假的?
					</div>
					<div class="content-picture">
						<img src="../../static/images/1.png" alt="" />
						<img src="../../static/images/2.png" alt="" />
						<img src="../../static/images/3.png" alt="" />
					</div>
					<div class="content-main">
						<span>悟空问答</span>
						<span>554回答</span>
						<span>刚刚</span>
					</div>
				</div>
				<hr />
				<!--内容部分2-->
				<div class="main-content">
					<div class="content-title">
						天下第一杯:高78米,重3万吨,挪不动站不起来,施工一半成烂尾工程
					</div>
					<div class="content-picture">
						<img src="../../static/images/4.png" alt="" />
						<img src="../../static/images/5.png" alt="" />
						<img src="../../static/images/6.png" alt="" />
					</div>
					<div class="content-main">
						<span>古今中外奇谭</span>
						<span>24回答</span>
						<span>刚刚</span>
					</div>
				</div>
				<hr />
				<!--内容部分3-->
				<div class="main-content">
					<div class="content-title">
						印度阻挠中方修路,包藏吞并不丹的祸心
					</div>
					<div class="content-picture">
						<img src="../../static/images/7.png" alt="" />
						<img src="../../static/images/8.png" alt="" />
						<img src="../../static/images/9.png" alt="" />
					</div>
					<div class="content-main">
						<span>海外探客</span>
						<span>324回答</span>
						<span>刚刚</span>
					</div>
				</div>
				<hr />
				<!--内容部分4-->
				<div class="main-content">
					<div class="content-title">
						史上最大的演唱会,2000人死亡,5万人受伤
					</div>
					<div class="content-picture">
						<img src="../../static/images/10.png" alt="" />
						<img src="../../static/images/11.png" alt="" />
						<img src="../../static/images/12.png" alt="" />
					</div>
					<div class="content-main">
						<span>永恒视觉</span>
						<span>20回答</span>
						<span>刚刚</span>
					</div>
				</div>
				<hr />
			</div>
	</div>		
</template>
<script>
export default {
	name: 'index',
	data () {
	    return {
	//    msg: 'Welcome to Your Vue.js App'
	    }
	},
	mounted(){
		var mySwiper = new Swiper('.hander-bottom',{
			slidesPerView: 7,
			watchSlidesProgress : true,
			watchSlidesVisibility : true,
		})
	}
}
	
</script>
<style scoped lang="scss" >
  	@import '../assets/style.scss';
</style>
