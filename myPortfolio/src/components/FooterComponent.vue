<template>
    <footer class="page-footer grey lighten-4">
        <!-- <div class="row">
                <div class="col l6 s12">
                    <h5 class="white-text">Footer Content</h5>
                    <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer
                        content.</p>
                </div>
                <div class="col l4 offset-l2 s12">
                    <h5 class="white-text">Links</h5>
                    <ul>
                        <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                    </ul>
                </div>
            </div> -->

        <div class="flex-container">
            <div class="socialIcons">
                <a href="https://github.com/Relofr" target="_blank"><img class="profile-picture" alt="github icon"
                        src="@/components/icons/github_icon.png" /></a>
                <a href="https://www.linkedin.com/in/kyle-hatch/" target="_blank"><img class="profile-picture"
                        alt="linkedin icon" src="@/components/icons/linkedin_icon.png" /></a>
                <a href="mailto:ky13h4tch@gmail.com" target="_blank"><img class="profile-picture" alt="email icon"
                        src="@/components/icons/email_icon.png" /></a>
            </div>
            <div class="footerNavContainer black-text">
                <div class="black-text">
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
                <!-- <div>© 2022 Portfolio - Kyle Hatch</div> -->
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container black-text">
                ©{{ new Date().getFullYear() }} Portfolio - Kyle Hatch
                <!-- <a class="grey-text text-lighten-4 right" href="#!">More Links</a> -->
            </div>
        </div>
    </footer>
</template>


<script>
</script>

<style lang="less" scoped>
body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}

main {
    flex: 1 0 auto;
}

.flex-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    // padding: 0px 0px 25px;
    gap: 30px;
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

.footer-copyright {
    align-items: center;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
}

img,
a {
    width: auto;
    height: 32px;
    color: black;

    &:hover {
        cursor: pointer;
    }
}
</style>