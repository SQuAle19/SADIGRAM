<template>
  <div class="wrap">
    <div class="container">
      <div
        class="square"
        :style="{
          background: 'url(' + post.authoravatarUrl + ')',
          'background-size': 'cover',
        }"
      ></div>
      <div>{{ post.authorName }}</div>
    </div>
    <img :src="post.postPictureUrl" width="1000px" />
    <br />
    <img src="pablo.svg" height="30px" />
    <img src="comment.svg" height="30px" />
    <img src="repost.svg" height="30px" />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: ["post"],
});
</script>

<style>
.square {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-bottom: 10px;
  margin-right: 10px;
}
.container {
  display: flex;
  align-items: center;
  font-size: 26px;
}
</style>
