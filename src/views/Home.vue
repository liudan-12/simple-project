<template>
  <div class="home">
    <home-carousel class="carousel"></home-carousel>
    <div class="img-list">
      <div v-for="(item, index) in ImgList" :key="index" class="imgs">
        <image-list :imgList="item"></image-list>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCarousel from "../component/HomeCarousel .vue";
import ImageList from "../component/ImageList.vue";
import img1 from "../assets/homes/img-list/1.jpeg";
import img2 from "../assets/homes/img-list/2.jpeg";
import img3 from "../assets/homes/img-list/3.jpeg";
import img4 from "../assets/homes/img-list/4.jpeg";
import img5 from "../assets/homes/img-list/5.jpg";
import img6 from "../assets/homes/img-list/6.jpeg";
import img7 from "../assets/homes/img-list/7.jpeg";
import img8 from "../assets/homes/img-list/8.jpeg";
export default {
  components: { HomeCarousel, ImageList },
  name: "Home",
  data() {
    return {
      ImgList: [
        {
          img: img1,
          imgInfo: "好吃的糖醋里脊",
          imgText:
            "糖醋里脊是中国经典传统名菜之一，该菜品以猪里脊肉为主材，配以面粉、淀粉、醋等佐料，酸甜可口，让人食欲大开。"
        },
        { img: img2, 
        imgInfo: "美味的灌汤包",
        imgText:"灌汤包，是一种汉族特色小吃。制作原料主要有面粉、温水、猪五花肉等。早在北宋市场上已有售卖，当时称灌浆馒头或灌汤包子。著名产地开封。"
        },
        { img: img3, 
        imgInfo: "好吃的红烧鱼" ,
        imgText:"红烧鱼是用鲳鱼制作的一道闽菜菜品。鱼不仅味道鲜美，而且营养价值极高。"},
        { img: img4, 
        imgInfo: "好吃的皮皮虾", 
        imgText:"皮皮虾全为海生。掠虾类起源于中生代的侏罗纪，绝大多数种类生活于热带和亚热带海域，少数见于温带海域。"},
        { img: img5,
         imgInfo: "好吃的家常菜" ,
         imgText:"家常菜，是指家庭日常制作食用的菜肴。家常菜是中国菜的源头，也是地方风味菜系的组成基础。家庭利用现有的调味品也可以炒制出来的菜肴。"},
        { img: img6,
         imgInfo: "好吃的青椒炒肉" ,
         imgText:"青椒炒肉是一道以青椒、猪肉为主要食材烹制而成的京菜，口味辣。具备烹饪简单，味道可口，营养丰富，补充人体需要维生素的特色。"},
        { img: img7, 
        imgInfo: "好吃的佛跳墙" ,
        imgText:"佛跳墙又名福寿全，是福建省福州市的一道特色名菜，属闽菜系。相传，该菜品是在清道光年间由福州聚春园菜馆老板郑春发研制出来的，又据费孝通先生记，发明此菜者乃一帮要饭的乞丐。"},
        { img: img8,
         imgInfo: "好吃的荔枝肉" ,
         imgText:"荔枝肉是福建省福州市，莆田市等地的一道特色传统名菜，属于闽菜系；该菜品已有二三百年历史。"},
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.home {
  overflow: hidden;
  background: rgb(155, 152, 149);
}
.carousel {
  margin-bottom: 50px;
}
.imgs {
  margin: 6px;
  border: 3px solid orange;
}
.img-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>