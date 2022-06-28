<script>
export default {
    methods: {
        triggerNav() {
            document.addEventListener('DOMContentLoaded', function () {
                var elems = document.querySelectorAll('.sidenav');
                var instances = M.Sidenav.init(elems, options);
            });
            console.log('Hi')
        }
    }
}
</script>

<template>
    <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <a @click="triggerNav()" href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about">About</RouterLink>
                </li>
            </ul>
        </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
        <li>
            <RouterLink to="/about">Home</RouterLink>
        </li>
        <li>
            <RouterLink to="/about">About</RouterLink>
        </li>
    </ul>

</template>

<style lang='less' scoped>
.nav-wrapper {
    width: 100%;
}

nav {
    background-color: #fff;

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
</style>