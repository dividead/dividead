---
layout:     post
title:      suicidal function
date:       2014-11-27 12:08:43
summary:    in javascript
categories: javascript
---

{% highlight javascript %}
  function x(i){
    if (Math.random() > 0.5)
      return i
    else
      x = undefined
      return "ой, все"
  }
{% endhighlight %}