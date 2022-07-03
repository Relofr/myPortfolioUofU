<template>
  <div class="container">
    <h3>About Me</h3>
    <div class="flex-container">
      <div v-for="(post, index) in posts" :key="index">
        <div v-if="post.title" class="title">{{ post.title }}</div>
        <div v-if="post.body" class="body">{{ post.body }}</div>

        <div v-if="post.body2" class="body">{{ post.body2 }}</div>
        <div class="skills-container">
          <div class="skills-images" v-for="(key, value) in post.images" :key="index">
            <Tooltip :text="value">
              <img v-if="key" :src="'/src/assets/skills/' + key">
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutMeComponent from '../components/AboutMeComponent.vue';
import Tooltip from '../components/Tooltip.vue';

export default {
  data() {
    return {
      hover: false,
      posts: [
        {
          id: 0,
          title: "",
          body: `My journey to UX/UI started at a young age when I would create designs in Microsoft Paint and write simple HTML/CSS on my parent's computer. Since then, I have studied Computer Science and have been working as a software engineer. I plan to transition full-time to UX/UI after I finish the program at The University of Utah.`, body2: `I am a strong believer in dynamic and scalable design. Anytime you can reuse components in different ways, it not only speeds up workflow but also keeps consistency throughout the project, which is great for user experience. As an engineer, I have experience collaborating closely with design teams to make sure we keep that in mind.`
        },
        { id: 1, title: "My Design Process", body: `Body` },
        { id: 2, title: "my skillset", images: { "Figma": "figma.png", "Wireframing": "wireframe.png", "Photoshop": "photoshop.png", "Adobe Illustrator": "ai.png", "Vue.js": "vue.png", "Github": "github.png" } },
        { id: 3, title: "Hobbies", body: ["Photography", "Video games"].join(", ") },
      ]
    };
  },
  components: { AboutMeComponent, Tooltip }
}
</script>

<style lang="less" scoped>
.flex-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.title {
  margin-top: 40px;
  font-size: 32px;
  font-weight: 400;
  letter-spacing: .1em;
  text-transform: uppercase;
}

.body {
  margin-bottom: 15px;
}

.skills-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
}

img {
  height: 50px;
  width: 50px;
  cursor: pointer;
  transition: transform .2s;

  &:hover {
    transform: scale(1.2)
  }
}
</style>
