function randomposts(json) {
    total_randomposts = json.feed.openSearch$totalResults.$t
}
document.write('<script type=\"text/javascript\" src=\"/feeds/posts/default?alt=json-in-script&max-results=0&callback=randomposts\"><\/script>');
function getvalue() {
    for (var i = 0; i < randomposts_number; i++) {
        var found = false;
        var rndValue = get_random();
        for (var j = 0; j < randomposts_current.length; j++) {
            if (randomposts_current[j] == rndValue) {
                found = true;
                break
            }
        };
        if (found) {
            i--
        } else {
            randomposts_current[i] = rndValue
        }
    }
};
function get_random() {
    var ranNum = 1 + Math.round(Math.random() * (total_randomposts - 1));
    return ranNum
};

function random_posts(json) {
    for (var i = 0; i < randomposts_number; i++) {
        var entry = json.feed.entry[i];
        var randompoststitle = entry.title.$t;
        if ('content' in entry) {
            var randompostsnippet = entry.content.$t
        } else {
            if ('summary' in entry) {
                var randompostsnippet = entry.summary.$t
            } else {
                var randompostsnippet = "";
            }
        };
        for (var j = 0; j < entry.link.length; j++) {
            if ('thr$total' in entry) {
                var randomposts_commentsnum = entry.thr$total.$t + ' ' + randomposts_comments
            } else {
                randomposts_commentsnum = randomposts_commentsd
            }; if (entry.link[j].rel == 'alternate') {
                var randompostsurl = entry.link[j].href;
                var randomposts_date = entry.published.$t;
                if ('media$thumbnail' in entry) {
                    var randompoststhumb = entry.media$thumbnail.url
                } else {
                    randompoststhumb = "https://2.bp.blogspot.com/-F1lTdmXTr0Y/VmpR_HBcVyI/AAAAAAAAGa8/a2_2T-p3AKM/s1600/bungfrangki_no_image_100.png"
                }
            }
        };
        document.write('<li>');
        document.write('<a href="' + randompostsurl + '" rel="nofollow"><img alt="' + randompoststitle + '" src="' + randompoststhumb + '" width="' + 52 + '" height="' + 52 + '"/></a>');
        document.write('<div><a href="' + randompostsurl + '" rel="nofollow">' + randompoststitle + '</a></div>');
        if (randomposts_details == 'yes') {
            document.write('<span><div  class="random-info">' + randomposts_date.substring(8, 10) + '.' + randomposts_date.substring(5, 7) + '.' + randomposts_date.substring(0, 4) + ' - ' + randomposts_commentsnum) + '</div></span>'
        };
        document.write('<br/><div class="random-summary">' + randomposts_snippet + '</div><div style="clear:both"></div></li>')
    }
};
getvalue();
for (var i = 0; i < randomposts_number; i++) {
    document.write('<script type=\"text/javascript\" src=\"/feeds/posts/default?alt=json-in-script&start-index=' + randomposts_current[i] + '&max-results=1&callback=random_posts\"><\/script>')
};
