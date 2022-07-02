<template>
  <main>
    <div class="flex-container">
      <div class="aboutme">
        <div v-for="(post, index) in posts" :key="index">
          <div v-if="post.title" class="title">{{ post.title }}</div>
          <div v-if="post.body" class="body">{{ post.body }}</div>
          <div class="skills-container">
            <div class="skills-images" v-for="(image, index) in post.images" :key="index">
              <img v-if="image" :src="'/src/assets/' + image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import AboutMeComponent from '../components/AboutMeComponent.vue';
export default {
  data() {
    return {
      posts: [
        {
          id: 0, title: 'About Me', body: `My journey to UX/UI started at a young age when I would create designs in Microsoft Paint and write simple HTML/CSS on my parent's computer. Since then, I have studied Computer Science and have been working as a software engineer. I plan to transition full-time to UX/UI after I finish the program at The University of Utah. 
          I am a strong believer in dynamic and scalable design. Anytime you can reuse components in different ways, it not only speeds up workflow but also keeps consistency throughout the project, which is great for user experience. As an engineer, I have experience collaborating closely with design teams to make sure we keep that in mind.` },
        { id: 1, title: 'Skills', images: ['figma.png', 'photoshop.png', 'ai.png'] },
        { id: 2, title: 'Hobbies', body: 'Hobbies' },
      ]
    }
  },
  components: {
    AboutMeComponent
  }
}
</script>

<style lang="less" scoped>
.flex-container {
  display: flex;
  justify-content: center;
}

.aboutme {
  width: 1000px;
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

.body {
  margin-bottom: 20px;
}

.skills-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

img {
  height: 50px;
  width: 50px;
}
</style>
