<script>
export default {
  props: {
    github: {
      type: String,
      required: true
    },
    linkedin: {
      type: String,
      required: true
    },
    email: {
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

<template>
  <div class="flex-container">
    <!-- <img class="profile-picture" alt="profile picture" src="@/assets/ProfilePicture.jpeg" /> -->
    <div class="inner-container row">
      <div class="flex-item name">{{ github }}</div>
      <div class="flex-item job">{{ linkedin }}</div>
      <div class="flex-item bio">{{ email }}</div>
      <!-- <div>
        <a @click="downloadResume()" class="waves-effect waves-light btn"><i
            class="material-icons right">file_download</i>Resume</a>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.profile-picture {
  width: 335px;
  height: 335px;
  border-radius: 50%;
}

.flex-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  padding: 0px;
  gap: 80px;
  width: 1000px;
  height: calc(100vh - 64px);
}

.inner-container {
  width: 100%;
}

.row {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 15px;
  width: 500px;
  height: calc(100vh - 64px);
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
}

.name {
  font-size: 36px;
  font-weight: 700;
}

.job {
  font-size: 20px;
}

.bio {
  font-size: 16px;
}

@media(max-width: 1000px) {
  .flex-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: calc(0px + 64px);
    padding: 15px;
    gap: 25px;
    width: 100%;
  }

  .row {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  padding: 0px;
  gap: 15px;
  width: auto;
  height: calc(100vh - 64px);
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
  }
}
</style>
