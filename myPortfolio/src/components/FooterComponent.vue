<template>
    <div class="flex-container">
        <div class="socialIcons">
            <a href="https://github.com/Relofr" target="_blank"><img class="profile-picture" alt="github icon"
                    src="@/components/icons/github_icon.png" /></a>
            <a href="https://www.linkedin.com/in/kyle-hatch/" target="_blank"><img class="profile-picture"
                    alt="linkedin icon" src="@/components/icons/linkedin_icon.png" /></a>
            <a href="mailto:ky13h4tch@gmail.com" target="_blank"><img class="profile-picture" alt="email icon"
                    src="@/components/icons/email_icon.png" /></a>
        </div>
        <div class="footerNavContainer">
            <div>
                <ul>
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/work">Work</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact">Contact</RouterLink>
                    </li>
                </ul>
            </div>
            <div>© 2022 Portfolio - Kyle Hatch</div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="less" scoped>
.flex-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 0px 25px;
    gap: 35px;
}

.socialIcons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;
}

.footerNavContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    ul {
        display: flex;
        column-gap: 20px;
    }
}

img,
a {
    width: auto;
    height: 32px;

    &:hover {
        cursor: pointer;
    }
}
</style>