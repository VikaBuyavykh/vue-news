<script>
import Comments from '@/components/UI/Comments.vue'
import AppButton from '@/components/UI/Button.vue'
export default {
  components: {
    Comments,
    AppButton
  },
  data() {
    return {
      comments: [
        {
          name: 'Ryan Hall',
          avatar: '/authors/man-in-glasses.png',
          date: 'July 17, 6:38 pm',
          text: 'In the event, "in places like Iraq and Jordan, leaders of the new sovereign states were brought in from the outside, tailored to suit colonial interests and commitments',
          estimate: '+10'
        },
        {
          name: 'Lora Morrow',
          avatar: '/authors/coacher.png',
          date: 'July 17, 6:41 pm',
          text: 'Likewise, most states in the Persian Gulf were handed over to those who could protect and safeguard imperial interests in the post-withdrawal phase',
          estimate: '0',
          reply: true
        },
        {
          name: 'Tara Stark',
          avatar: '/authors/girl-curly-hair.png',
          date: 'July 17, 6:53 pm',
          text: 'French Indochina was divided into five subdivisions: Tonkin, Annam, Cochinchina, Cambodia and Laos. Cochinchina was the first territory under French Control. Saigon was conquired in 1859. Then, in 1887, the Indochinese Union was established.',
          estimate: '-3'
        },
        {
          name: 'Kris Robertson',
          avatar: '/authors/man-with-mustache.png',
          date: 'July 17, 7:12 pm',
          text: 'Indian Marxist scholar Vivek Chibber has critiqued some foundational logics of Postcolonial Theory in his book Postcolonial Theory and the Specter of Capital',
          estimate: '0'
        }
      ]
    }
  }
}
</script>

<template>
  <section class="comments-block">
    <ul class="comments-block__content">
      <li class="comments-block__header">
        <h3 class="comments-block__title">Comments</h3>
        <p class="comments-block__amount">19</p>
        <button class="comments-block__add-btn">
          <img src="/add.svg" alt="Icon of adding a comment" />
          Add comment
        </button>
      </li>
      <li
        v-for="(item, index) in comments"
        :key="item.date"
        class="comments-block__item"
        :class="{ 'comments-block__item_last': index === comments.length - 1 }"
      >
        <div
          class="comments-block__item-content"
          :class="{ 'comments-block__item-content_reply': item.reply }"
        >
          <img class="comments-block__avatar" :src="item.avatar" alt="Author's avatar" />
          <div class="comments-block__main">
            <div class="comments-block__info">
              <p class="comments-block__name">{{ item.name }}</p>
              <p class="comments-block__date">{{ item.date }}</p>
            </div>
            <p class="comments-block__text">{{ item.text }}</p>
            <div class="comments-block__btns">
              <comments type="comments" content="Reply"></comments>
              <comments type="estimate" :content="item.estimate"></comments>
            </div>
          </div>
        </div>
      </li>
      <li class="comments-block__more-btn">
        <img src="/loading.svg" alt="Icon of more-button" />Load more
      </li>
      <li class="comments-block__comment">
        <img class="comments-block__comment-avatar" src="/authors/girl-in-hat.png" alt="Avatar" />
        <form name="comment" id="comment" class="comments-block__comment-form">
          <label for="comment-text" class="comments-block__question">What do you think?</label>
          <div class="comments-block__textarea">
            <img src="/shape.png" alt="Textarea border" />
            <textarea name="comment-text" id="comment-text"></textarea>
          </div>
          <!-- <textarea name="comment-text" id="comment-text"> </textarea
            ><img src="/shape.svg" alt="Textarea border" /> -->
          <app-button class="comments-block__sbmt-btn">
            Submit<img src="/arrow.svg" alt="Icon of submit" />
          </app-button>
        </form>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.comments-block {
  @include size(100%, auto);
  max-width: 946px;
  margin: 60px auto 30px;

  &__content {
    @include size(79.3%, auto);
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(min-content, max-content));
    list-style-type: none;

    .comments-block__header {
      @include size(100%, auto);
      padding-bottom: 30px;
      @include flex(row, start, center, 10px);
      border-bottom: $border;

      .comments-block__title {
        @extend %roboto-slab-bold;
        @include text(2.5rem, 3.125rem, $color-dark, left);
      }

      .comments-block__amount {
        @extend %lato-regular;
        @include text(2.5rem, 3.125rem, $font-color-light, left);
      }

      .comments-block__add-btn {
        margin-left: auto;
        border-radius: 20px;
        background-color: transparent;
        outline: none;
        border: $border;
        padding: 10px 25px 10px 20px;
        @include flex(row, start, center, 10px);
        @extend %lato-bold;
        @include text(0.875rem, 1.25rem, $color-dark, left);
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 2px 2px 5px rgba(black, 0.3);
        }

        img {
          @include size(18px, 18px);
        }
      }
    }

    .comments-block__item {
      @include size(100%, auto);
      padding-block: 20px 30px;
      border-bottom: $border;

      &_last {
        border: none;
      }

      &-content {
        @include size(88%, auto);
        display: grid;
        grid-template-columns: 75px auto;
        column-gap: 15px;

        &_reply {
          margin-left: auto;
        }

        .comments-block__avatar {
          @include size(100%, 75px);
          border-radius: 50%;
          object-fit: cover;
          object-position: center;
        }

        .comments-block__main {
          @include size(100%, auto);
          @include flex(column, start, start, 10px);

          .comments-block__info {
            @include flex(row, start, center, 10px);

            .comments-block__name {
              @extend %roboto-slab-bold;
              @include text(1rem, 1.5625rem, $color-dark, left);
            }

            .comments-block__date {
              @extend %lato-regular;
              @include text(0.75rem, 0.9375rem, $font-color-light, left);
            }
          }

          .comments-block__text {
            margin-bottom: 5px;
            @extend %lato-regular;
            @include text(1.125rem, 1.875rem, $font-color-medium, left);
          }

          .comments-block__btns {
            @include flex(row, start, center, 15px);
          }
        }
      }
    }

    .comments-block__more-btn {
      @include size(100%, 50px);
      border: $border;
      border-radius: 30px;
      @include flex(row, center, center, 7px);
      @extend %lato-bold;
      @include text(0.875rem, 1.25rem, $color-dark, left);
      cursor: pointer;
      transition: all 0.2s ease;
      margin-bottom: 60px;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 2px 2px 5px rgba(black, 0.3);
      }

      img {
        @include size(15px, 15px);
      }
    }

    .comments-block__comment {
      @include size(100%, auto);
      background-color: #f5f5f5;
      border-radius: 10px;
      padding: 30px 40px 35px 30px;
      display: grid;
      grid-template-columns: 75px auto;
      column-gap: 10px;

      &-avatar {
        margin-top: 40px;
        @include size(100%, 75px);
        border-radius: 50%;
      }

      &-form {
        @include size(100%, auto);
        @include flex(column, start, start, 15px);

        .comments-block__question {
          margin-left: 10px;
          @extend %roboto-slab-bold;
          @include text(1.25rem, 1.5625rem, $color-dark, left);
        }

        .comments-block__textarea {
          @include size(100%, 130px);
          position: relative;
          @include flex(row, center, center, 0px);

          img {
            position: absolute;
            width: 100%;
            height: 130px;
          }

          textarea {
            @include size(90%, 85%);
            position: relative;
            z-index: 2;
            background-color: transparent;
            resize: none;
            outline: none;
            border: none;
          }
        }

        .comments-block__sbmt-btn {
          margin-left: 10px;
          margin-top: 0;
          @include flex(row, center, center, 8px);
        }
      }
    }
  }
}
</style>
