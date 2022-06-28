<script>
</script>

<template>
    <nav>
        <div class="nav-wrapper">
            <!-- <a href="#" class="brand-logo">Logo</a> -->
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
</template>

<style lang='less' scoped>
nav {
    background-color: #fff;

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