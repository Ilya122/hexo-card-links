# hexo-card-links

Hexo plugin to add flexible cards with links to display various posts.


```markdown
{% cardgroup "Number of cards per row" %}

{% cardlink header page_name %}

{% endcardgroup %}
```

The main group is ``cardgroup`` and it should be closed with ``endcardgroup``.  

It renders everything inside as regular so you can add anything - but be aware not to mess up the flex properties.  

Each card is marked with ``cardlink``.  
It gets 2 properties:  
1. Header
2. Page name like your file name.  

Using the ``post_link`` capabilities of ``hexo`` it generates a full link path.  
If you write your header with spaces add ``""`` around it.  

Example: 
![image](https://user-images.githubusercontent.com/4838211/189499723-342932c1-830b-4be9-818c-75af2885bae3.png)



# How to extend? 

Recommended to reuse the classes it provides to enable specific behaviors you want,
For example - to demonstrate my python card links I added:

```css
#python-content-cards {
    .content-card:nth-child(odd) {
        background-color: #876d33;
    }

    .content-card:nth-child(even) {
        background-color: #446785;
    }
}
```

Then in the page we write:  
```markdown
<div id="python-content-cards">

{% cardgroup 3 %}

{% cardlink ההתחלה python_1_how_to_begin_he %}

{% cardlink משתנים python_2_variables_he %}

{% cardlink "תנאים" python_3_if_switch_he %}

{% endcardgroup %}

</div>
```