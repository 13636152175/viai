<template>
	<div class="wrap">
	 <!--头部-->
			<div class="video-hander">
				<!--滑动轮播-->
				<div class="video-navleft">
				  <div class="swiper-wrapper">
					  <div class="swiper-slide">推荐</div>
					  <div class="swiper-slide">音乐</div>
					  <div class="swiper-slide">搞笑</div>
					  <div class="swiper-slide">社会</div>
					  <div class="swiper-slide">小品</div>
					  <div class="swiper-slide">东北</div>
					  <div class="swiper-slide">视频</div>
					  <div class="swiper-slide">热门</div>
					  <div class="swiper-slide">话题</div>
					  <div class="swiper-slide">书单</div>
				  </div>
				</div>
				<!--search-->
				<div class="video-navright">
					<i class="iconfont icon-search"></i>
				</div>
			</div>
			<!--内容-->
			<div class="video-main">
				<!--内容1-->
				<div class="video-content">
					<div class="video-maintop">
						<video  controls="controls" poster="../../static/images/3.jpg">
						 	<source src="../../static/video/play.mp4" type="video/mp4" />
						</video>
					</div>
					<div class="video-mainbottom">
						<img src="../../static/images/dd.gif" alt="" />
						<span>说说那些事儿</span>
						<span class="myic iconfont icon-new">关注</span>
						<span class="myic iconfont icon-mark">20</span>
						<span>...</span>
					</div>
				</div>
				<!--内容2-->
				<div class="video-content">
					<div class="video-maintop">
						<video  controls="controls" poster="../../static/images/5.jpg">
						 	<source src="../../static/video/play.mp4" type="video/mp4" />
						</video>
					</div>
					<div class="video-mainbottom">
						<img src="../../static/images/dd.gif" alt="" />
						<span>说说那些事儿</span>
						<span class="myic iconfont icon-new">关注</span>
						<span class="myic iconfont icon-mark">20</span>
						<span>...</span>
					</div>
				</div>
				<!--内容3-->
				<div class="video-content">
					<div class="video-maintop">
						<video  controls="controls" poster="../../static/images/3.jpg">
						 	<source src="../../static/video/play.mp4" type="video/mp4" />
						</video>
					</div>
					<div class="video-mainbottom">
						<img src="../../static/images/dd.gif" alt="" />
						<span>说说那些事儿</span>
						<span class="myic iconfont icon-new">关注</span>
						<span class="myic iconfont icon-mark">20</span>
						<span>...</span>
					</div>
				</div>	
				<!--内容4-->
				<div class="video-content">
					<div class="video-maintop">
						<video  controls="controls" poster="../../static/images/5.jpg">
						 	<source src="../../static/video/play.mp4" type="video/mp4" />
						</video>
					</div>
					<div class="video-mainbottom">
						<img src="../../static/images/dd.gif" alt="" />
						<span>说说那些事儿</span>
						<span class="myic iconfont icon-new">关注</span>
						<span class="myic iconfont icon-mark">20</span>
						<span>...</span>
					</div>
				</div>	
				<!--内容5-->
				<div class="video-content">
					<div class="video-maintop">
						<video  controls="controls" poster="../../static/images/3.jpg">
						 	<source src="../../static/video/play.mp4" type="video/mp4" />
						</video>
					</div>
					<div class="video-mainbottom">
						<img src="../../static/images/dd.gif" alt="" />
						<span>说说那些事儿</span>
						<span class="myic iconfont icon-new">关注</span>
						<span class="myic iconfont icon-mark">20</span>
						<span>...</span>
					</div>
				</div>	
				<!--内容6-->
				<div class="video-content">
					<div class="video-maintop">
						<video  controls="controls" poster="../../static/images/5.jpg">
						 	<source src="../../static/video/play.mp4" type="video/mp4" />
						</video>
					</div>
					<div class="video-mainbottom">
						<img src="../../static/images/dd.gif" alt="" />
						<span>说说那些事儿</span>
						<span class="myic iconfont icon-new">关注</span>
						<span class="myic iconfont icon-mark">20</span>
						<span>...</span>
					</div>
				</div>	
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
		var mySwiper = new Swiper('.video-navleft',{
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