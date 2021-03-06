---
title : BLOG SCRIPTS & TIPS
footer: This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
---
<H1 align="center"> BLOG SCRIPTS & TIPS </H1>



<PostItem 
  v-for="post in posts()"
  :key="post.title"
  v-bind:title="post.title"
  v-bind:to="post.path"
  v-bind:date="post.date"
  v-bind:description="post.frontmatter.description"
/>

<script>
export default {
    methods: {
        posts_with_tag(tag) {
            return this.$site.pages
                .filter((page) => page.frontmatter.tags)
                .filter((page) => page.frontmatter.tags.includes(tag))
                .map((page) => ({...page, date: new Date(page.frontmatter.date)}))
                .sort((a, b) => b.date - a.date);
        },
        posts() {
            return this.$site.pages
                .filter((page) => page.path.startsWith("/blog/"))
                .filter((page) => !page.frontmatter['indexPage'])
                .map((page) => ({...page, date: new Date(page.frontmatter.date)}))
                .sort((a, b) => b.date - a.date);
        }
    },
}
</script>
