<template>
    <div class="container">
        <div class="col-md-5">
            <h3 class="text-center">Add Post</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" class="form-control" v-model="post.title" required>
                </div>
                <div class="form-group">
                    <label>Body</label>
                    <input type="text" class="form-control" v-model="post.email" required>
                </div>
                <div class="form-group">
                    <label>Image</label>
                    <input type="text" class="form-control" v-model="post.image" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block">Add Post</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: '',
                image: ''
            }
        }
    },
    methods: {
        onFormSubmit(event) {
            event.preventDefault()
            db.collection('posts').add(this.post).then(() => {
                alert("Post successfully created!");
                this.post.title = ''
                this.post.body = ''
                this.post.image = ''
            }).catch((error) => {
                console.log(error);
            });
        }
    }

}
</script>