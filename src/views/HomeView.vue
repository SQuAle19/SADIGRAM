<template>
  <div class="home">
    <CardView :post="post" v-for="(post, index) in posts" :key="index" />
  </div>
</template>

<script>
import Vue from "vue";
import CardView from "../components/CardView.vue";

let posts = [
  {
    authorName: "Ogurets332",
    postPictureUrl: "https://i.ytimg.com/vi/mbD2jMjkHxQ/maxresdefault.jpg",
    authoravatarUrl: "https://i.ytimg.com/vi/mbD2jMjkHxQ/maxresdefault.jpg",
    countlikes: 55,
    description: "бро ты достаточно сегодня потренировался",
  },
  {
    authorName: "bober555",
    postPictureUrl:
      "https://memasno.ru/uploads/posts/2021-09/bro-tebe-nado-trenirovatsja-mem-s-simplom-i-fejkovymi-prevju-4.jpg",
    authoravatarUrl:
      "https://memasno.ru/uploads/posts/2021-09/bro-tebe-nado-trenirovatsja-mem-s-simplom-i-fejkovymi-prevju-4.jpg",
    countlikes: 57,
    description: "бро ты хорошо сегодня тренировался",
  },
  {
    authorName: "PABLO777",
    postPictureUrl:
      "https://sun9-88.userapi.com/s/v1/if2/Ieznsd8UX6vGGNu2yNhhC7WU_UZ80X1sjyW6UeYGBH3KhXeeomC6Ee04gSUAcLO1zX5MgBiribjqEg4wfVyK1gGB.jpg?size=604x340&quality=96&type=album",
    authoravatarUrl:
      "https://sun9-88.userapi.com/s/v1/if2/Ieznsd8UX6vGGNu2yNhhC7WU_UZ80X1sjyW6UeYGBH3KhXeeomC6Ee04gSUAcLO1zX5MgBiribjqEg4wfVyK1gGB.jpg?size=604x340&quality=96&type=album",
    countlikes: 56,
    description: "Пацаны всегда отвечайите за базар",
  },
];

// @ is an alias to /src
export default Vue.extend({
  components: {
    CardView,
  },

  data() {
    return {
      posts: posts,
    };
  },
});
</script>
