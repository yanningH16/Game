<template>
  <div class="wrap">
    <div>
      <noCont v-if='nocont'></noCont>
      <h1>{{text}}</h1>
      <p class="sucess" @click="sucess">怼</p>
      <p @click="sure" class="sure" ref="sure_1">不怼</p>

    </div>
  </div>
</template>

<script>
import noCont from '../assets/lottInde'
export default {
  name: 'HelloWorld',
  components: {
    noCont
  },
  data () {
    return {
      x: 0,
      y: 0,
      nocont: false,
      text: '怼大海不？'
    }
  },
  created () {
    this.x = window.screen.availWidth - 100
    this.y = window.screen.availHeight
    console.log(this.x, this.y)
  },
  mounted () {
  },
  methods: {
    sure () {
      // 获取元素的位置
      this.$refs.sure_1.style.marginLeft = Math.floor(Math.random() * this.x) + 'px'
      this.$refs.sure_1.style.marginTop = Math.floor(Math.random() * this.y) + 'px'
      console.log(this.offsetX, this.offsety)
    },
    sucess () {
      alert('怼的好！！！！')
      this.nocont = true
      this.text = '大海被怼懵逼了，哈哈哈哈'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sucess {
  margin-top: 150px;
  margin-left: 70px;
  background: green;
  padding: 10px;
  width: 50px;
  height: 40 px;
}
.sure {
  margin-top: 80px;
  margin-left: 90px;
  background: gray;
  padding: 10px;
  width: 50px;
  height: 40 px;
}
</style>
