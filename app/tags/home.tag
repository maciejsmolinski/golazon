<home>
  <div class="home__wrapper block wrapped">
    <loading></loading>
    <div each={ item in grouped_matches }>
      <h2>
        <a href="#!/c/{ item.competition.id }" onclick={ go_to_competition }>
          { item.competition.name } ({ item.competition.area_name })
          <virtual if={ teamtype != 'default' }>{ teamtype }</virtual>
        </a>
      </h2>
      <matches matches={ item.matches }></matches>
    </div>
    <p if={ grouped_matches.length == 0 }><em>No live matches at the moment.</em></p>
    <ul class="home__competitions" if={ suggested_competitions.length > 0 }>
      <li each={ suggested_competitions }><a href="/#!/c/{ id }">{ name } ({ area_name })</a></ul>
    </ul>
  </div>

  <script type="coffee">
    util = require 'util'
    history = require 'history'

    util.title 'Live'

    timeout = null

    refresh_data = () =>
      util.request @, '/matches/live', (matches) =>
        competition_matches = {}

        for match in matches
          key = match['competition_id']

          competition_matches[key] ||= {
            competition: {
              id: match['competition_id'],
              name: match['competition_name'],
              area_name: match['area_name'],
            },
            matches: []
          }

          competition_matches[key]['matches'].push match

        grouped_matches = []
        grouped_matches.push item for key, item of competition_matches

        grouped_matches.sort (a, b) ->
          ha = history.get('competition', a.competition.id)
          hb = history.get('competition', b.competition.id)
          ha = { '_score': {'count': 0} } if !ha
          hb = { '_score': {'count': 0} } if !hb
          hb['_score']['count'] - ha['_score']['count']

        @grouped_matches = grouped_matches
        @suggested_competitions = history.getAll(20) unless @grouped_matches && @grouped_matches.length > 0

        @update()

        timeout = setTimeout(refresh_data, 30 * 1000)

    @on 'mount', () =>
      refresh_data()

    @on 'unmount', () =>
      clearTimeout(timeout) if timeout

    @go_to_competition = (e) ->
      competition_id = e.item.item.competition.id
      history_item = history.get('competition', competition_id)
      history.update(history_item) if history_item
      riot.route '/c/' + competition_id

  </script>

  <style type="scss">
    @import 'app/support.scss';

    .home {
      &__competitions {
        li a {
          line-height: 2em;
        }
      }
    }

  </style>
</home>
