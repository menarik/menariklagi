  (function() {
    var dr = document.createElement('script');
    dr.type = 'text/javascript'; dr.async = true;
    dr.src = '//share.donreach.com/buttons.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dr);
  })();

(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://cdn.statically.io/gh/menarik/menariklagi/3ae09fd7/related_post_dteHan.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();

function resizeThumb(e,t){for(var s=document.getElementById(e),r=s.getElementsByTagName("img"),c=0;c<r.length;c++)r[c].src=r[c].src.replace(/\/s512\-c/,"/s"+t),r[c].width=t,r[c].height=t}resizeThumb("authorphoto",36);

var jump=function(o){if(o)var t=jQuery(this).attr("href").replace("/","");else var t=location.hash;jQuery("html,body").animate({scrollTop:jQuery(t).offset().top-80},4e3,function(){})};jQuery(document).ready(function(o){o(document).on("click","a[href*=#]",jump),location.hash?setTimeout(function(){o("html, body").scrollTop(0).show(),jump()},0):o("html, body").show()});