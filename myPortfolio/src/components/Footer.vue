<template>
    <div class="flex-container">
        <a href="https://github.com/Relofr" target="_blank"><img class="profile-picture" alt="github icon"
                src="@/components/icons/github_icon.png" /></a>
        <a href="https://www.linkedin.com/in/kyle-hatch/" target="_blank"><img class="profile-picture"
                alt="linkedin icon" src="@/components/icons/linkedin_icon.png" /></a>
        <a href="mailto:ky13h4tch@gmail.com" target="_blank"><img class="profile-picture" alt="email icon"
                src="@/components/icons/email_icon.png" /></a>
    </div>
</template>

<script>
</script>

<style lang="less">
.flex-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}

img {
    margin: 15px 10px;
    width: 32px;
    height: 32px;

    &:hover {
        cursor: pointer;
    }
}
</style>