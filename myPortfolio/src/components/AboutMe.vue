<script setup>
defineProps({
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
})
</script>

<template>
  <div class="flex-container">
    <img class="profile-picture" alt="profile picture" src="@/assets/ProfilePicture.jpeg" />
    <div class="row">
      <div class="flex-item name">{{ name }}</div>
      <div class="flex-item job">{{ job }}</div>
      <div class="flex-item bio">{{ bio }}</div>
      <div>
        <a class="waves-effect waves-light btn"><i class="material-icons right">file_download</i>Resume</a>
      </div>
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

.row {
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0px;
gap: 15px;
width: 491px;
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
</style>
