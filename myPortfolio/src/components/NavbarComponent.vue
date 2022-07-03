<script>
export default {
    methods: {
        triggerNav() {
            document.addEventListener('DOMContentLoaded', function () {
                var elems = document.querySelectorAll('.sidenav');
                var instances = M.Sidenav.init(elems, options);
            });
        }
    }
}
</script>

<template>
    <nav>
        <div class="nav-wrapper">
            <a><img class="brand-logo" src="@/assets/logo.png"></a>
            <a @click="triggerNav()" href="#" data-target="mobile-demo" class="sidenav-trigger"><i
                    class="material-icons">menu</i></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
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
    </nav>

    <ul class="sidenav" id="mobile-demo">
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

</template>

<style lang='less' scoped>
.nav-wrapper {
    width: 100%;
}

nav {
    background-color: #fff;
    width: 100%;
    // line-height: 60px;

    a {
        color: black;
    }

    li a {
        color: black;
        transition: background-color .3s;
        font-size: 1rem;
        display: block;
        padding: 0 15px;
        cursor: pointer;
    }
}
.brand-logo {
    width: 65px;
    padding: 10px;
    vertical-align: middle;
}
</style>