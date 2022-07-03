<template>
    <div class="flex-container">
        <div class="aboutme">
            <div class="title">
                {{ title }}
            </div>
            <div class="body">
                {{ body }} {{ skills }}
                <img v-show="img" :src="'/src/assets/' + img">
            </div>
        </div>
    </div>
</template>

<!-- <AboutMeComponent v-for="(post, index) in posts" :key="index" :title="post.title" :body="post.body" :img="post.images[0].image" /> -->

<script>
export default {
    props: ['title', 'body', 'skills', 'img'],
}
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  padding: 0px;
  gap: 80px;
  width: 1000px;
  height: 100vh;
}

.aboutme {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    flex-wrap: wrap;
}


.title {
    margin-bottom: 10px;
    font-size: 32px;
    font-weight: 700;
}

img {
    height: 50px;
    width: 50px;
}
</style>