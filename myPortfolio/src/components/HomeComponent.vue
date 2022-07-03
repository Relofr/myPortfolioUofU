<template>
  <div class="container center-align">
    <div class="flex-container">
      <img class="circle" alt="profile picture" src="@/assets/ProfilePicture.jpeg" />
      <div class="about-me left-align">
        <h3>{{ name }}</h3>
        <h6>{{ job }}</h6>
        <h6>{{ bio }}</h6>
        <a @click="downloadResume()" class="waves-effect waves-light red darken-4 btn"><i
            class="material-icons right">file_download</i>Resume</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    job: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      required: true
    }
  },
  methods: {
    downloadResume() {
      window.open("https://drive.google.com/file/d/1r8OXqJwIf0fBbCHYqIz0P9WEDIuXsjRt/view?usp=sharing")
    }
  }
}
</script>

<style lang="less" scoped>
.flex-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

@media(max-width: 1000px) {
  .flex-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>