<template>
  <div class="flex-container">
    <div class="home-container">
      <img class="profile-picture" alt="profile picture" src="@/assets/ProfilePicture.jpeg" />
      <div class="inner-container row">
        <div class="flex-item name">{{ name }}</div>
        <div class="flex-item job">{{ job }}</div>
        <div class="flex-item bio">{{ bio }}</div>
        <div>
          <a @click="downloadResume()" class="waves-effect waves-light red darken-4 btn"><i
              class="material-icons right">file_download</i>Resume</a>
        </div>
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

<style scoped>
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.home-container {
  display: flex;
  align-items: center;
  gap: 80px;
  height: calc(100vh - 64px);
}

.profile-picture {
  max-width: 335px;
  height: 100%;
  max-height: 335px;
  border-radius: 50%;
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
    padding: 15px;
    gap: 25px;
    width: 100%;
    height: 100%;
  }

  .home-container {
    display: flex;
    align-items: center;
    gap: 80px;
    height: calc(100vh - 64px);
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    padding: 0px;
    gap: 15px;
    width: auto;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 1;
  }
}
</style>