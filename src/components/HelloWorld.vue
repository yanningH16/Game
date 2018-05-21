<template>
  <div class="wrap">
    <div>
      <noCont v-if='nocont'></noCont>
      <h2>{{text}}</h2>
      <p class="re" @click="reset">重置</p>
      <p class="sucess" @click="sucess" v-show="first">怼</p>
      <p @mouseover="sure" class="sure" ref="sure_1" v-show="two">不怼</p>
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
      text: '怼大海不？',
      first: true,
      two: true
    }
  },
  created () {
    this.x = window.screen.availWidth - 60
    this.y = window.screen.availHeight
    console.log(this.x, this.y)
  },
  methods: {
    sure () {
      // 获取元素的位置
      this.$refs.sure_1.style.marginLeft = Math.floor(Math.random() * 400) + 'px'
      this.$refs.sure_1.style.marginTop = Math.floor(Math.random() * 300) + 'px'
      console.log(this.$refs.sure_1.style.marginTop, this.$refs.sure_1.style.marginTop)
      // let i = 0
      // i++
      // if (i >= 5) {
      //   alert('怼')
      // }
    },
    sucess () {
      this.nocont = true
      this.text = '大海被怼懵逼了，哈哈哈哈'
      window.scrollTo(0, 0)
      this.first = false
      this.two = false
    },
    reset () {
      this.$refs.sure_1.style.marginLeft = 90 + 'px'
      this.$refs.sure_1.style.marginTop = 80 + 'px'
      this.nocont = false
      this.first = true
      this.two = true
      this.text = '怼大海不'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sucess {
  margin-left: 70px;
  margin-top: 20px;
  background: green;
  padding: 10px;
  width: 50px;
  height: 40 px;
  border-radius: 5px;
  border: 2px solid greenyellow;
}
.sure {
  margin-top: 80px;
  margin-left: 90px;
  background: gray;
  padding: 10px;
  width: 50px;
  height: 40 px;
  border-radius: 5px;
  border: 2px solid slateblue;
}
.re {
  text-align: center;
  padding: 3px;
  width: 40px;
  height: 20 px;
  margin-left: 48%;
  margin-top: -20px;
  background: red;
  border-radius: 3px;
  color: white;
}
</style>
