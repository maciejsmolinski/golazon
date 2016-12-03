!function(){"use strict";var t="undefined"==typeof window?global:window;if("function"!=typeof t.require){var e={},a={},n={},i={}.hasOwnProperty,r=/^\.\.?(\/|$)/,o=function(t,e){for(var a,n=[],i=(r.test(e)?t+"/"+e:e).split("/"),o=0,s=i.length;o<s;o++)a=i[o],".."===a?n.pop():"."!==a&&""!==a&&n.push(a);return n.join("/")},s=function(t){return t.split("/").slice(0,-1).join("/")},c=function(e){return function(a){var n=o(s(e),a);return t.require(n,e)}},l=function(t,e){var n=null;n=f&&f.createHot(t);var i={id:t,exports:{},hot:n};return a[t]=i,e(i.exports,c(t),i),i.exports},u=function(t){return n[t]?u(n[t]):t},d=function(t,e){return u(o(s(t),e))},m=function(t,n){null==n&&(n="/");var r=u(t);if(i.call(a,r))return a[r].exports;if(i.call(e,r))return l(r,e[r]);throw new Error("Cannot find module '"+t+"' from '"+n+"'")};m.alias=function(t,e){n[e]=t};var h=/\.[^.\/]+$/,p=/\/index(\.[^\/]+)?$/,_=function(t){if(h.test(t)){var e=t.replace(h,"");i.call(n,e)&&n[e].replace(h,"")!==e+"/index"||(n[e]=t)}if(p.test(t)){var a=t.replace(p,"");i.call(n,a)||(n[a]=t)}};m.register=m.define=function(t,n){if("object"==typeof t)for(var r in t)i.call(t,r)&&m.register(r,t[r]);else e[t]=n,delete a[t],_(t)},m.list=function(){var t=[];for(var a in e)i.call(e,a)&&t.push(a);return t};var f=t._hmr&&new t._hmr(d,m,e,a);m._cache=a,m.hmr=f&&f.wrap,m.brunch=!0,t.require=m}}(),function(){var t;window;t=require("riot"),require.register("history",function(t,e,a){var n,i,r,o,s,c,l;return i=e("history_data"),r=100,o=7,l="search_history",c=localStorage.getItem(l),c?n=JSON.parse(c):(localStorage.clear(),n=i.get_initial_history_list()),s=function(t){var e,a,n;for(a=e=0,n=t.length-1;0<=n?e<=n:e>=n;a=0<=n?++e:--e)t[a].key=a;return t=t.sort(function(t,e){var a;return a=e._score.count-t._score.count,0===a&&(a=e._score.last_visit-t._score.last_visit),0===a&&(a=t.key-e.key),a})},t.update=function(t){var e;return e=n.find(function(e){return t.type===e.type&&t.id===e.id}),e?(e._score||(e._score={count:0,last_visit:null}),e._score.count<o&&(e._score.count+=1),e._score.last_visit=new Date):(t._score={count:1,last_visit:new Date},t.active=!1,n.unshift(t),n.length>r&&n.pop()),n=s(n),localStorage.setItem(l,JSON.stringify(n))},t.get=function(t,e){return n.find(function(a){return a.type===t&&a.id===e})},t.getAll=function(t){var e,a;return a=0,e=t-1,n.slice(a,+e+1||9e9)},t.search=function(t){return n.filter(function(e){return 0===e.name.toLowerCase().indexOf(t.toLowerCase())||0===e.area_name.toLowerCase().indexOf(t.toLowerCase())})}}),require.register("history_data",function(t,e,a){return t.get_initial_history_list=function(){var t,e,a,n;for(e=[{area_name:"England",id:"04",name:"Premier League",teamtype:"default",type:"competition"},{area_name:"Spain",id:"80",name:"Primera División",teamtype:"default",type:"competition"},{area_name:"Germany",id:"1y",name:"Bundesliga",teamtype:"default",type:"competition"},{area_name:"Italy",id:"rw",name:"Serie A",teamtype:"default",type:"competition"},{area_name:"France",id:"3w",name:"Ligue 1",teamtype:"default",type:"competition"},{area_name:"Netherlands",id:"4e",name:"Eredivisie",teamtype:"default",type:"competition"},{area_name:"Argentina",id:"97m",name:"Primera División",teamtype:"default",type:"competition"},{area_name:"Mexico",id:"873",name:"Liga MX",teamtype:"default",type:"competition"},{area_name:"Europe",id:"5d",name:"UEFA Champions League",teamtype:"default",type:"competition"},{area_name:"South America",id:"4nn",name:"WC Qualification South America",teamtype:"default",type:"competition"},{area_name:"USA",id:"1xy",name:"MLS",teamtype:"default",type:"competition"},{area_name:"Poland",id:"2e0",name:"Ekstraklasa",teamtype:"default",type:"competition"}],t=0,n=e.length;t<n;t++)a=e[t],a._score={count:1,last_visit:new Date};return e}}),t.tag2("app",'<search></search> <div id="main"></div> <p class="block nav"> <a href="" click="{go_back}">back</a> &#183; <a href="/">live</a> </p> <p class="disclaimer block"> Football data mnmlist way. Open source prototype.<br> (<a href="https://github.com/sobstel/golazon#readme">click here to learn more</a>) </p>',".nav { margin-top: 1em; margin-bottom: 2em; text-align: center; } .nav a { color: #c66; } .disclaimer { margin-top: 1em; margin-bottom: 2em; font-style: italic; padding: 0 10px; font-size: 12px; text-align: center; } .disclaimer a { border-bottom: 1px dotted #666; text-decoration: none; }","",function(e){t.route.base("#!"),t.route("/",function(e){return function(){return t.mount("#main","home")}}(this)),t.route("/c/*",function(e){return function(e){return t.mount("#main","competition",{competition_id:e})}}(this)),t.route("/m/*",function(e){return function(e){return t.mount("#main","match",{match_id:e})}}(this)),t.route(function(e){return function(){return t.mount("#main","error404")}}(this)),t.route.start(!0),this.go_back=function(t){return history.back()}}),t.tag2("competition",'<h1 class="competition__title"> <loading></loading> {title} </h1> <div class="competition__container" if="{competition}"> <competition-past-matches></competition-past-matches> <competition-future-matches></competition-future-matches> <competition-standings></competition-standings> </div>',".competition__container { overflow: auto; font-size: 13px; }",'class="competition"',function(t){var e;e=require("util"),this.on("mount",function(a){return function(){return a.update(),e.request(a,"/competitions/"+t.competition_id,function(t){return a.competition=t,a.title=t.name+" "+t.season.name+" ("+t.area_name+")",a.update(),e.title(a.title)})}}(this))}),t.tag2("competition-future-matches",'<div class="block wrapped" if="{matches.length > 0}"> <loading></loading> <matches matches="{matches}"></matches> </div>',"","",function(t){var e;e=require("util"),this.on("mount",function(t){return function(){var a;return a=t.parent.competition.season.season_id,e.request(t,"/season/"+a+"/matches/future/10",function(e){return t.matches=e,t.update()})}}(this))}),t.tag2("competition-past-matches",'<div class="block wrapped" if="{matches.length > 0}"> <loading></loading> <matches matches="{matches}"></matches> </div>',"","",function(t){var e;e=require("util"),this.on("mount",function(t){return function(){var a;return a=t.parent.competition.season.season_id,e.request(t,"/season/"+a+"/matches/past/10",function(e){return t.matches=e,t.update()})}}(this))}),t.tag2("competition-standings",'<div class="standings__container block wrapped"> <loading></loading> <div each="{rounds}" class="standings"> <h2>{name}</h2> <table class="standings-table"> <thead> <tr> <th class="rank">&nbsp;</th> <th class="team">Team</th> <th class="mp"><acronym title="Matches Played">MP</acronym></th> <th class="gd"><acronym title="Goals For / Goals Against">GF&#8209;GA</acronym></th> <th class="pts"><acronym title="Points">Pts</acronym></th> </tr> </thead> <tbody> <tr each="{standings}"> <td class="rank {zone_class(zone)}"><span>{rank}</span></td> <td class="team" title="{team_name}">{team_name}</td> <td class="mp">{matches}</td> <td class="gd">{goals_for}&nbsp;-&nbsp;{goals_against}</td> <td class="pts">{points}</td> </tr> </tbody> </table> </div> </div>',".standings table { margin: 10px 0; width: 100%; table-layout: fixed; } .standings tbody tr { border-top: 1px solid #ddd; } .standings th, .standings td { text-align: center; padding: 10px 7px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .standings th { text-align: center; color: #888; font-weight: normal; } .standings .rank { color: #888; width: 40px; } .standings .team { text-align: left; font-weight: 500; } .standings .mp { width: 45px; } .standings .gd { width: 65px; } .standings .pts { font-weight: 700; width: 45px; } .standings .zone span { display: inline-block; width: 24px; height: 24px; line-height: 24px; border-radius: 12px; color: #fff; } .standings .zone-1 span { background-color: #388E3C; } .standings .zone-2 span { background-color: #00796B; } .standings .zone-3 span { background-color: #0097A7; } .standings .zone-4 span { background-color: #1976D2; } .standings .zone-5 span { background-color: #303F9F; } .standings .zone-11 span { background-color: #FFA000; } .standings .zone-12 span { background-color: #F57C00; } .standings .zone-13 span { background-color: #E64A19; } .standings .zone-14 span { background-color: #5D4037; } .standings .zone-15 span { background-color: #455A64; }","",function(t){var e;e=require("util"),this.on("mount",function(t){return function(){var a;return a=t.parent.competition.season.season_id,e.request(t,"/season/"+a+"/standings",function(e){return t.rounds=e,t.update()})}}(this)),this.zone_class=function(t){return function(t){return t?"zone zone-"+t:""}}(this)}),t.tag2("error404",'<div class="block error404__wrapper"> <p>Page not found. <a href="/">Go home</a> or use search above.</p> </div>',".error404__wrapper p { margin: 3em 0 5em; padding: 0 0.5em; font-weight: 500; }","",function(t){}),t.tag2("home",'<div class="home__wrapper block wrapped"> <loading></loading> <div each="{item in grouped_matches}"> <h2><a href="#!/c/{item.competition.id}" onclick="{go_to_competition}">{item.competition.name} ({item.competition.area_name})</a></h2> <matches matches="{item.matches}"></matches> </div> <p if="{grouped_matches.length == 0}"><em>No live matches at the moment.</em></p> <ul class="home__competitions" if="{suggested_competitions.length > 0}"> <li each="{suggested_competitions}"><a href="/#!/c/{id}">{name} ({area_name})</a></ul> </ul> </div>',".home__competitions li a { line-height: 2em; }","",function(e){var a,n;n=require("util"),a=require("history"),this.on("mount",function(t){return function(){return n.request(t,"/matches/live",function(e){var n,i,r,o,s,c,l;for(n={},r=0,c=e.length;r<c;r++)l=e[r],s=l.competition_id,n[s]||(n[s]={competition:{id:l.competition_id,name:l.competition_name,area_name:l.area_name},matches:[]}),n[s].matches.push(l);i=[];for(s in n)o=n[s],i.push(o);return i.sort(function(t,e){var n,i;return n=a.get("competition",t.competition.id),i=a.get("competition",e.competition.id),n||(n={_score:{count:0}}),i||(i={_score:{count:0}}),i._score.count-n._score.count}),t.grouped_matches=i,t.grouped_matches&&t.grouped_matches.length>0||(t.suggested_competitions=a.getAll(20)),t.update()})}}(this)),this.go_to_competition=function(e){var n,i;return n=e.item.item.competition.id,i=a.get("competition",n),i&&a.update(i),t.route("/c/"+n)}}),t.tag2("loading",'<div class="loading__container"> <p class="loading__loader loader" if="{parent.loading}">loading</p> <p class="loading__error" if="{parent.error}">ERROR ({parent.name}): {parent.error} (<a href="" onclick="{reload_page}">reload</a>)</p> </div>',".loading__container { font-size: 13px; } .loading__loader { font-weight: 400; } .loading__error { display: inline-block; color: #c33; font-weight: 400; }","",function(t){this.reload_page=function(){return location.reload()}}),t.tag2("match",'<h1 class="match__title"> <loading></loading> <virtual if="{match}">{match.home_name} - {match.away_name} <score match="{match}"></score></virtual> </h1> <div class="match__container block wrapped" if="{match}"> <p class="first"> <a href="/#!/c/{match.competition_id}">{match.competition_name} ({match.area_name})</a> - {format_date(match.date, match.time)}, {format_time(match.date, match.time)} </p> <div class="match__goals" if="{match.goals.length > 0}"> <h2 class="first">Goals</h2> <p><span each="{match.goals}">{name} {min}\' <virtual if="{code != \'G\'}">[{code}]</virtual> (<strong>{score[0]}:{score[1]}</strong>)</span></p> </div> <div class="match__penalty-shootout" if="{match.penalty_shootout.length > 0}"> <h2 class="first">Penalty shootout</h2> <p><span each="{match.penalty_shootout}">{name} <virtual if="{code == \'M\'}">(X)</virtual><virtual if="{code == \'G\'}">({score[0]}:{score[1]})</virtual></span></p> </div> <div class="match__players" if="{match.home_players.length > 0}"> <h2>{match.home_name} line-up ({match.home_coach.name})</h2> <p><span each="{match.home_players}" class="{in: this.in}"><virtual if="{this.in}">{this.in}\'</virtual> {name}</span></p> </div> <div class="match__players" if="{match.away_players.length > 0}"> <h2>{match.away_name} line-up ({match.away_coach.name})</h2> <p><span each="{match.away_players}" class="{in: this.in}"><virtual if="{this.in}">{this.in}\'</virtual> {name}</span></p> </div> <div class="match__cards" if="{match.cards.length > 0}"> <h2>Cards</h2> <p><span each="{match.cards}">{name} {min}\' ({code})</span></p> </div> </div> </div>',".match__container p { margin: 1em 0; } .match__container .first { margin-top: 0; } .match__goals span:after, .match__cards span:after, .match__penalty-shootout span:after { content: ', '; } .match__goals span:last-child:after, .match__cards span:last-child:after, .match__penalty-shootout span:last-child:after { content: none; } .match__players span:first-child:before { content: none; } .match__players span:before { content: ', '; } .match__players span.in:before { content: ' ('; } .match__players span.in:after { content: ')'; }","",function(t){var e;e=require("util"),this.format_date=e.format_date,this.format_time=e.format_time,this.on("mount",function(a){return function(){return a.update(),e.request(a,"/matches/"+t.match_id,function(t){return a.match=t,a.title=t.home_name+" - "+t.away_name+" "+t.ft[0]+" - "+t.ft[1],a.update(),e.title(a.title)})}}(this))}),t.tag2("search",'<header class="search__container block" role="banner"> <div class="search__input-container"> <input type="text" role="search" class="search__input" accesskey="s" name="q" placeholder="Search Golazon" onkeyup="{search}" onfocus="{search}"> <button class="search__clear-button" onclick="{search_clear_click}" if="{clear_button_visible}"> </button> </div> <div class="search__extras-container"> <p class="search__hint" if="{results.length == 0 && (hint || loading)}"> <span if="{loading}" class="loader">loading</span> {hint} </p> <ul class="search__results" if="{results.length > 0}"> <li each="{results}"> <a href="/#!/c/{id}" class="{active: active}" onclick="{search_result_click}" onmouseover="{search_result_mouseover}"> {name} ({area_name}) <span if="{teamtype != \'default\'}">{teamtype}</span> </a> </li> <li class="search__results-hint" if="{results_hint}"> {results_hint} </li> <li class="search__loader loader" if="{loading}"> loading more </li> </ul> </div> </header>','.search__input-container { display: flex; } .search__input { font-size: 16px; border: 1px solid #ddd; border-radius: 0; color: #666; padding: 8px 8px; width: 100%; } .search__input:focus { outline: none; } @media screen and (-webkit-min-device-pixel-ratio: 0) and (max-device-width: 480px) { .search__input { font-size: 16px; -webkit-appearance: none; } } .search__clear-button { width: 30px; margin-left: -30px; border: 0; padding: 0; background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTIgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PC9kZWZzPjxnIGlkPSJPY3RpY29ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgaWQ9IngiIGZpbGw9IiMwMDAwMDAiPjxwb2x5Z29uIGlkPSJTaGFwZSIgcG9pbnRzPSI3LjQ4IDggMTEuMjMgMTEuNzUgOS43NSAxMy4yMyA2IDkuNDggMi4yNSAxMy4yMyAwLjc3IDExLjc1IDQuNTIgOCAwLjc3IDQuMjUgMi4yNSAyLjc3IDYgNi41MiA5Ljc1IDIuNzcgMTEuMjMgNC4yNSI+PC9wb2x5Z29uPjwvZz48L2c+PC9zdmc+") center center no-repeat; outline: none; } .search__extras-container { position: relative; } .search__hint { padding-top: 3px; padding-left: 10px; margin-bottom: -4px; font-size: 11px; } .search__results { position: absolute; top: 0; left: 0; right: 0; z-index: 1; border: 1px solid #ddd; border-width: 0 1px; background: #fcfcfc; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); min-width: 300px; } .search__results a { display: block; padding: 5px 8px; border: none; font-size: 15px; } .search__results a.active { background: #f6f6f6; } .search__results a:hover { text-decoration: none; } @media screen and (min-width: 480px) { .search__results a { font-size: 14px; } } .search__results-hint, .search__loader { padding: 5px 8px; font-style: italic; font-size: 13px; }',"",function(e){var a,n,i,r,o,s,c,l;l=require("util"),o=require("history"),n=-1,s=i=null,this.results=[],this.clear_button_visible=!1,a=function(t){return function(e){var a,i,r,o;for(e>=t.results.length&&(e=0),e<0&&(e=Math.max(t.results.length-1,0)),r=t.results,a=0,i=r.length;a<i;a++)o=r[a],o.active=!1;return t.results[e].active=!0,n=e,t.update()}}(this),c=function(t){return function(){return n=-1,t.results=[],t.loading=!1,t.clear_button_visible=!1,t.update()}}(this),r=function(t){return function(){return c(),t.hint=!1,t.update()}}(this),this.search=function(e){return function(c){var u;return u=c.target.value,e.hint=!1,e.clear_button_visible=!0,40===c.keyCode&&e.results.length>0?a(n+1):38===c.keyCode&&e.results.length>0?a(n-1):27===c.keyCode?e.search_clear_click():13===c.keyCode?(n>=0&&t.route("/c/"+e.results[n].id),r()):(i&&l.terminate_delay(i),s&&s.abort(),e.results_hint=!1,0===u.length?(e.loading=!1,e.results=o.getAll(10),a(0),void e.update()):(e.results=o.search(u),u.length<4?(e.results_hint="type 4 letters or more to search full database...",void e.update()):(e.loading=!0,e.update(),i=l.delay(.2,function(){return s=l.request(e,"/search?q="+u,function(t){return e.results=e.results.concat(t.filter(function(t){return 0===e.results.filter(function(e){return e.type===t.type&&e.id===t.id}).length})),0===e.results.length&&(e.hint="no results found"),e.update()})}))))}}(this),this.search_result_mouseover=function(t){return function(e){var n;return a(function(){var t,e,a,i;for(a=this.results,i=[],t=0,e=a.length;t<e;t++)n=a[t],i.push(n.id);return i}.call(t).indexOf(e.item.id))}}(this),this.search_result_click=function(t){return function(e){return n>=0&&o.update(t.results[n]),r(),!0}}(this),this.search_clear_click=function(t){return function(e){return t.q.value="",t.update(),r()}}(this),this.go_back=function(t){return function(){return c(),window.history.go(-1)}}(this),this.go_home=function(e){return function(e){return c(),t.route("/")}}(this)}),t.tag2("matches",'<div class="matches__wrapper" if="{matches}"> <table class="matches__container"> <tbody> <tr each="{matches}" onclick="{go_to_match}"> <td class="min" if="{min && period != \'HT\'}">{min}\'</td> <td class="period" if="{period == \'HT\'}">{period}</td> <td class="date" if="{!min && period != \'HT\'}">{format_date(date, time)}</td> <td class="host">{home_name}</td> <td class="status"><score match="{this}"></score></td> <td class="away">{away_name}</td> </tr> </tbody> </table> </div>',".matches__container { width: 100%; table-layout: fixed; } .matches__container tbody tr { cursor: pointer; border-top: 1px solid #ddd; } .matches__container tbody tr:first-child { border-top: none; } .matches__container tbody tr:hover { background: #f6f6f6; } .matches__container td { padding: 8px 5px; white-space: nowrap; overflow: hidden; text-overflow: clip; } .matches__container .min, .matches__container .period, .matches__container .date { font-weight: 600; width: 60px; } .matches__container .date { font-weight: 600; } .matches__container .host { text-align: right; } .matches__container .status { text-align: center; font-weight: 600; width: 60px; white-space: normal; } .matches__container .live { color: #c33; animation: blinker 1s linear infinite; } @keyframes blinker { 50% { opacity: 0.5; } }","",function(e){var a;a=require("util"),this.format_date=a.format_date,this.format_time=a.format_time,this.format_score=a.format_score,this.go_to_match=function(e){return t.route("/m/"+e.item.match_id)},this.on("mount",function(t){return function(){return t.matches=t.opts.matches,t.update()}}(this))}),t.tag2("score",'<span if="{match.fixture}">{format_time(match.date, match.time)}</span> <span if="{match.live | match.ended}" class="{live: match.live}"> <virtual if="{!match.et || match.ps}">{match.ft[0]}&nbsp;-&nbsp;{match.ft[1]}</virtual> <virtual if="{match.et && !match.ps}">{match.et[0]}&nbsp;-&nbsp;{match.et[1]} aet</virtual> <virtual if="{match.ps}">p.{match.ps[0]}-{match.ps[1]}</virtual> </span>',"","",function(t){var e;e=require("util"),this.format_time=e.format_time,this.format_score=e.format_score,this.on("mount",function(t){return function(){return t.match=t.opts.match,t.update()}}(this))}),require.register("util",function(t,e,a){var n,i,r,o;return r=e("superagent"),o=e("riot"),n="http://toller.xyz",t.title=function(t){if(document.title=t+" - Golazon","Golazon"===t)return document.title="Golazon"},t.request=function(t,e,a){return t.loading=!0,t.update(),r.get(n+e).timeout(7e3).end(function(e,n){return t.loading=!1,t.update(),e?(t.error=e.message,t.update()):a(n.body)})},t.delay=function(t,e){return setTimeout(e,1e3*t)},t.terminate_delay=function(t){return clearTimeout(t)},t.beholder=o.observable(),i=function(t,e){var a,n,i,r,o;return o=t.slice(0,4),i=t.slice(5,7)-1,a=t.slice(8,10),n=e.slice(0,2),r=e.slice(3,5),new Date(Date.UTC(o,i,a,n,r,0))},t.format_date=function(t,e){var a,n,r,o,s;return a=i(t,e),s=new Date,o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=o[a.getMonth()],n=("0"+a.getDate()).slice(-2),a.toDateString()===s.toDateString()?"Today":r+" "+n},t.format_time=function(t,e){var a,n,r;return a=i(t,e),n=("0"+a.getHours()).slice(-2),r=("0"+a.getMinutes()).slice(-2),n+":"+r}}),require.register("___globals___",function(t,e,a){})}(),require("___globals___");