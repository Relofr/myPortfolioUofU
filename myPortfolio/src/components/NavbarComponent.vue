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
                <!-- <li v-if="isLoggedIn">
                    <RouterLink to="/create">Create Post</RouterLink>
                </li>
                <li v-if="!isLoggedIn">
                    <RouterLink to="/login">Login</RouterLink>
                </li>
                <li>
                    <RouterLink to="/register">Register</RouterLink>
                </li>
                <li>
                    <a v-if="isLoggedIn" @click="handleSignOut" class="waves-effect waves-light">Logout</a>
                </li> -->
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

<script setup>
// import { onMounted, ref } from 'vue';
// import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import router from '../router';

// const isLoggedIn = ref(false);

// let auth;
// onMounted(() => {
//     auth = getAuth();
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             isLoggedIn.value = true;
//         } else {
//             isLoggedIn.value = false;
//         }
//     })
// });

// const handleSignOut = () => {
//     signOut(auth).then(() => {
//         router.push('/')
//     })
// }
</script>
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

<style lang='less' scoped>
.nav-wrapper {
    width: 100%;
}

nav {
    background-color: #fff;
    width: 100%;
    margin-bottom: 20px;
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