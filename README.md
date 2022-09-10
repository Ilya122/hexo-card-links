# hexo-card-links

Hexo plugin to add flexible cards with links to display various posts.


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