<template>
	<div class="wrap">
    	<router-view></router-view>
    	<!--尾部-->
			<div class="footer">
				<div class="footer-nav">
					<ul>
						<router-link  to="/" tag="li">
							<i class="iconfont icon-home" :class="$route.path=='/'?'Red':''"></i>
							<p :class="$route.path=='/'?'Red':''">首页</p>
						</router-link>
						<router-link to="/video"  tag="li">
							<i class="iconfont icon-recordlight" :class="$route.path=='/video'?'Red':''"></i>
							<p :class="$route.path=='/video'?'Red':''">视频</p>
						</router-link>
						<router-link  to="/vhander" tag="li">
							<i class="iconfont icon-mark" :class="$route.path=='/vhander'?'Red':''"></i>
							<p :class="$route.path=='/vhander'?'Red':''">微头条</p>
						</router-link>
						<router-link to="/my"  tag="li">
							<i class="iconfont icon-profile" :class="$route.path=='/my'?'Red':''"></i>
							<p :class="$route.path=='/my'?'Red':''">我的</p>
						</router-link>
					</ul>
				</div>
			</div>
	</div>			
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped lang="scss">
	@import "./assets/style.scss"; 
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
