<app-header>
  <div class="header__wrapper">
    <header class="header__container block sticky hpadding">
      <form role="search" class="header__search" onsubmit={ search_submit }>
        <input type="text"
          class="header__search__input"
          accesskey="s"
          name="q"
          placeholder="Search Golazon"
          onkeyup={ search }
          onfocus={ search }>
        <button
          class="header__search__clear-button"
          onclick={ search_clear_click }
          if={ clear_button_visible }>
        </button>
      </form>

      <p class="header__hint" if={ hint }>
        <strong>Hint:</strong> { hint }
      </p>

      <ul class="header__search-results" if={ results.length > 0 }>
        <li each={ results } if={ results.length > 0 }>
          <a href="/#!/c/{ id }" class={ active: active } onclick={ search_result_click } onmouseover={ search_result_mouseover }>
            { name } ({ area_name }) <span if={ teamtype != 'default' }>{ teamtype }</span>
          </a>
        </li>
      </ul>
    </header>
  </div>

  <script type="coffee">
    util = require 'util'
    active_result_index = -1
    req = delay = previous_text = null

    @clear_button_visible = false

    active_result = (index) =>
      index = 0 if index >= @results.length
      index = @results.length - 1 if index < 0

      @results[active_result_index].active = false if active_result_index >= 0

      @results[index].active = true
      active_result_index = index

      @update()

    exit_search = () =>
      @results = []
      @update()

    @exit_search = () =>
      exit_search()
      true

    @search_submit = (e) =>
      false

    @search = (e) =>
      text = e.target.value
      @hint = false

      @clear_button_visible = (text.length > 0 ? true : false)

      if e.keyCode == 40 # down arrow
        active_result(active_result_index + 1)

      else if e.keyCode == 38 # up arrow
        active_result(active_result_index - 1)

      else if e.keyCode == 27 # esc
        exit_search()

      else if e.keyCode == 13 # enter
        # SMELL: hardcoded url to competition
        riot.route '/c/' + @results[active_result_index].id if active_result_index >= 0
        exit_search()

      else
        util.clear_delay(delay) if delay
        #req.abort() if req

        if text.length < 4
          # TODO: popular only
          @hint = 'type min 4 chars to see search results'
          exit_search()
          return

        delay = util.delay 0.2, =>
          # read again after delay
          text = e.target.value

          return if text == previous_text
            return

          previous_text = text

          req = util.request '/search?q=' + text, (results) =>
            @results = results
            @hint = 'nothing appears if there are no matching results'
            @update()

    @search_result_mouseover = (e) =>
      active_result((result.id for result in @results).indexOf(e.item.id))

    @search_result_click = (e) =>
      exit_search()
      true

    @search_clear_click = (e) =>
      exit_search()
      # SMELL: any way to do it more react way? (or using observer?)
      document.querySelector('.header__search__input').value = ''
      @clear_button_visible = false
      @update()
  </script>

  <style type="scss">
    @import 'app/support.scss';

    $logo-size: 26px;
    $search-horizontal-padding: 8px;
    $active-color: #f6f6f6;

    .header {
      &__wrapper {
        background-color: $header-bg-color;
        border-bottom: 1px solid $header-border-color;
      }

      &__container {
        position: relative;
        padding-top: 10px;
        padding-bottom: 10px;
      }

      &__search {
        display: flex;

        &__input {
          border: 1px solid $search-border-color;
          border-radius: 0;
          color: $input-text-color;
          padding: 6px $search-horizontal-padding;
          width: 100%;
          max-width: ($big-screen-width - 20px);

          background: #fff url($logo-svg) no-repeat 5px center;
          background-size: $logo-size;
          padding-left: $logo-size + 11px;

          &:focus {
            outline: none;
            border-color: $search-border-focus-color;
          }

          // experimental: prevent special behaviour for iphone (auto-zoom on focus and inner box shadow)
          @media screen and (-webkit-min-device-pixel-ratio: 0) and (max-device-width: 480px) {
            font-size: 16px;
            -webkit-appearance: none;
          }
        }

        &__clear-button {
          margin-left: -30px;
          width: 30px;
          border: 0;
          padding: 0;
          background: url($cross-svg) center 10px no-repeat;
          outline: none;
        }
      }

      &__hint {
        margin: 3px 0 -4px 38px;
        font-size: 11px;
      }

      &__search-results {
        position: absolute;
        left: $horizontal-padding;
        right: $horizontal-padding;

        border: 1px solid $search-border-color;
        border-width: 0 1px;
        background: #fff;

        min-width: $min-width - (2 * $horizontal-padding);
        max-width: ($big-screen-width - 20px);

        li {
          border-bottom: 1px solid $search-border-color;
        }
        a {
          display: block;
          padding: 7px $search-horizontal-padding;

          &.active {
            background: $active-color;
          }
          &:hover {
            text-decoration: none;
          }
        }

        @media screen and (min-width: ($max-width + 2 * $horizontal-padding)) {
          left: 0;
          right: 0;
        }
      }
    }
  </style>
</app-header>