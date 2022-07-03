<template>
    <footer class="page-footer grey lighten-4">
        <div class="container">
            <div class="row">
                <div class="col s12 center-align black-text">
                    <div class="socialIcons center-align">
                        <a href="https://github.com/Relofr" target="_blank"><img class="profile-picture"
                                alt="github icon" src="@/components/icons/github_icon.png" /></a>
                        <a href="https://www.linkedin.com/in/kyle-hatch/" target="_blank"><img class="profile-picture"
                                alt="linkedin icon" src="@/components/icons/linkedin_icon.png" /></a>
                        <a href="mailto:ky13h4tch@gmail.com" target="_blank"><img class="profile-picture"
                                alt="email icon" src="@/components/icons/email_icon.png" /></a>
                    </div>
                    <p class="">
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
                    </p>
                    <p></p>
                </div>

            </div>
        </div>
        <div class="footer-copyright center-align black-text">
            <div class="container">
                ©{{ new Date().getFullYear() }} Portfolio - Kyle Hatch
            </div>
        </div>
    </footer>
</template>


<script>
</script>

<style lang="less" scoped>
.socialIcons {
    display: flex;
    justify-content: center;
    padding: 0px;
    gap: 20px;

    img {
        gap: 20px;
        height: 32px;
        width: 32px;
        margin-bottom: 8px;
        cursor: pointer;
        transition: transform .2s;

        &:hover {
            transform: scale(1.2)
        }
    }
}

li {
    padding: 10px;
    display: inline;

    a {
        color: black;
    }
}
</style>