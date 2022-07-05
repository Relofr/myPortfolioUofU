<template>
    <div class="container">
        <h1 class="title-text">
            Create Account
        </h1>
        <p><input type="text" placeholder="Email" v-model="email"></p>
        <p><input type="text" placeholder="password" v-model="password"></p>
        <a @click="register" class="waves-effect waves-light red darken-4 btn">Create account</a>
        <br>
        <a @click="signInWithGoogle" class="waves-effect waves-light blue btn">Sign In With Google</a>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { useRouter } from 'vue-router';
const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Successfully registered");
            console.log(auth.currentUser)
            router.push('/')
        })
        .catch((error) => {
            console.log(error.code);
        });
}

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user);
            router.push("/")
        })
        .catch((error) => {
            console.log(error.code)
        })
}
</script>