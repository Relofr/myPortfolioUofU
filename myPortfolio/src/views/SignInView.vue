<template>
    <div class="container">
        <h1 class="title-text">
            Login
        </h1>
        <!-- <p><input type="text" placeholder="Email" v-model="email"></p>
        <p><input type="text" placeholder="password" v-model="password"></p>
        <p v-if="errMsg">{{ errMsg }}</p>
        <a @click="register" class="waves-effect waves-light red darken-4 btn">Login</a>
        <br> -->
        <a @click="signInWithGoogle" class="waves-effect waves-light blue btn">Sign In With Google</a>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { useRouter } from 'vue-router';
const email = ref("");
const password = ref("");
const errMsg = ref()
const router = useRouter();

const register = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Successfully signed in!");
            console.log(auth.currentUser)
            router.push('/')
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invlaid-email":
                    errMsg.value = "Inalid Email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Email or password is incorrect";
                    break;
                default:
                    errMsg.value = "Email or password was incorrect";
                    break;
            }
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