<template>
  <div id="app">
    <el-container>
        <el-aside style="width:200px;">
          <el-row>
          <el-col :span="24">
          <h5 style="color: white;">CRM后台管理</h5>
            <!-- <router-link to="/home">Home</router-link> -->
            

          <el-menu
            default-active="4"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-user"></i>
                <span>人员管理</span>
              </template>
              <el-menu-item-group>
                <a href="http://www.baiud.com"></a>
                <el-menu-item index="1-1" @click="jump('/department')" >部门管理</el-menu-item>
                <el-menu-item index="1-2" @click="jump('/home')">人员信息</el-menu-item>
              </el-menu-item-group>
        
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>

        </el-aside>
      <el-container>
          <el-header>
            <el-row>
              <el-col :span="2" :offset="21" style="padding-right: 10px;">
               {{name }}
              </el-col>
              <el-col :span="1" >
                <el-avatar :size="50" :src="circleUrl"></el-avatar>
              </el-col>
            </el-row>

          </el-header>
          <el-main>
            <!-- 路由展示的内容 -->
            <router-view></router-view>


          </el-main>
          <el-footer style="height: 30px;color: #999;font-size: 14px;">
            power by neusoft 
          </el-footer>
      </el-container>
  </el-container>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
  data(){
   return{ 
    name:'张三',
    message:'hello world',
    circleUrl:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
  }
  },
  methods:{
    jump(url){
      console.log(this.$route.path);
      
      if(this.$route.path!=url)
      this.$router.push({path:url})
    }
  }
}
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


  .el-header {
    background-color: #545c64;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .el-footer{
    background-color: #545c64;
    color: #fff;
    text-align: center;
    height: 30px;
    line-height: 30px;
  }
  
  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    height: 100vh;
  }
  
  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
    
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  


</style>
