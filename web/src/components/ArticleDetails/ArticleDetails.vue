<template>
  <main class="main">
    <div class="article-details">
      <h3 class="article-details-title">
        {{ title }}
      </h3>
    <div class="article-details-date">
      <img class="article-details-date-icon" src="../../assets/images/calendar.svg" alt="calendar">
      <span class="article-details-date-text">{{ date }}</span>
    </div>
    <p class="article-details-content" v-html="content"></p>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ArticleDetails',
  data() {
    return {
      title: "Les erreurs CORS, Cross-origin resource sharing",
      date: "20 Octobre 2020",
      content: `Suspendisse semper augue faucibus, <strong>consectetur dolor</strong> et, ultrices dui. Suspendisse maximus ipsum ac nunc sodales, in blandit lacus efficitur. Donec non laoreet justo. Nam nec lacinia nulla. Vestibulum tellus mauris, aliquam in dapibus ut, varius in odio. Praesent nec dignissim diam. Donec non laoreet justo. Nam nec <a href="#" target="_blank">lacinia</a> nulla.<br><br>In blandit lacus efficitur. Donec non laoreet justo. Vestibulum tellus mauris, aliquam in dapibus ut, varius in odio. Consectetur dolor et, ultrices dui. Suspendisse maximus ipsum ac nunc sodales, in blandit lacus. Aliquam in dapibus ut, varius in odio. Praesent nec dignissim diam. Donec non laoreet justo. Nam nec lacinia nulla. Vestibulum tellus mauris, aliquam in dapibus ut.<br><br>Nam nec lacinia nulla. Vestibulum tellus mauris, aliquam in dapibus ut, varius in odio. Praesent nec dignissim diam. Donec non laoreet justo. Nam nec lacinia nulla. In blandit lacus efficitur. Donec non laoreet justo. Vestibulum tellus mauris, aliquam in dapibus ut, varius in odio.<br><br>In blandit lacus efficitur. Donec non laoreet justo. Vestibulum tellus mauris, aliquam in dapibus ut, varius in odio. Consectetur dolor et, ultrices dui. Suspendisse maximus ipsum ac nunc sodales, in blandit lacus.<br><br><pre><code>&lt;div&gt;<br>&emsp;&lt;div&gt;<br>&emsp;&emsp;Test<br>&emsp;&lt;/div&gt;<br>&lt;/div&gt;</code></pre>`,
    };
  },
}
</script>

<style lang="scss" src="./articleDetails.scss"></style>
