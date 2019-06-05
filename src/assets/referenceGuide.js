export default [{
  nav: 'Headers',
  example: `    # H1
    ## H2
    ### H3
    #### H4
    ##### H5
    ###### H6
    Alt-H1
    ======
    Alt-H2
    ------
  
---
# H1
## H2
### H3
#### H4
##### H5
###### H6
Alt-H1
======
Alt-H2
------`
}, {
  nav: 'Emphasis',
  example: `
    Emphasis, aka italics, with *asterisks* or _underscores_.

    Strong emphasis, aka bold, with **asterisks** or __underscores__.

    Combined emphasis with **asterisks and _underscores_**.

    Strikethrough uses two tildes. ~~Scratch this.~~

---
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.
    
Combined emphasis with **asterisks and _underscores_**.
    
Strikethrough uses two tildes. ~~Scratch this.~~
`
}, {
  nav: 'Lists',
  example: `
    Spaces represented by ⋅
    1. First ordered list item
    2. Another item
    ⋅⋅⋅⋅* Unordered sub-list. 
    1. Actual numbers don't matter, just that it's a number
    ⋅⋅⋅⋅1. Ordered sub-list
    4. And another item.
  
    * Unordered list can use asterisks
    - Or minuses
    + Or pluses

---
1. First ordered list item
2. Another item
    * Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
    1. Ordered sub-list
4. And another item.
* Unordered list can use asterisks
- Or minuses
+ Or pluses`
}, {
  nav: 'Links',
  example: `
    [I'm an inline-style link](https://www.google.com)
    
    [I'm an inline-style link with title](https://www.google.com "Google's Homepage")
    
    [I'm a reference-style link][Arbitrary case-insensitive reference text]
    
    [I'm a relative reference to a repository file](../blob/master/LICENSE)
    
    [You can use numbers for reference-style link definitions][1]
    Or leave it empty and use the [link text itself].
    URLs and URLs in angle brackets will automatically get turned into links. http://www.example.com or <http://www.example.com> and sometimes example.com (but not on Github, for example).
    
    [arbitrary case-insensitive reference text]: https://www.mozilla.org
    
    [1]: http://slashdot.org

---
    
[link text itself]: http://www.reddit.com
    
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")
    
[I'm a reference-style link][Arbitrary case-insensitive reference text]
    
[I'm a relative reference to a repository file](../blob/master/LICENSE)
    
[You can use numbers for reference-style link definitions][1]
    
Or leave it empty and use the[link text itself].
    
URLs and URLs in angle brackets will automatically get turned into links.http://www.example.com or<http://www.example.com>
    
[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com`
}, {
  nav: 'Images',
  example: `
    Here's our logo (hover to see the title text):

    Inline-style: 
    ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
  
    Reference-style: 
    ![alt text][logo]
  
    [logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"
---

Here's our logo (hover to see the title text):

Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"`
}, {
  nav: 'Code',
  example: `
    *Note Syntax Highlighting is not available

    \`\`\`
    var s = "JavaScript syntax highlighting";
    alert(s);
    \`\`\`

    \`\`\`
    s = "Python syntax highlighting"
    print s
    \`\`\`
---

    var s = "JavaScript syntax highlighting";
    alert(s);

    s = "Python syntax highlighting"
    print s
`
}, {
  nav: 'Tables',
  example: `
    *Note Table lines, alignment, and backgrounds are not rendered
    
    Colons can be used to align columns.

    | Tables        | Are           | Cool  |
    | ------------- |:-------------:| -----:|
    | col 3 is      | right-aligned | $1600 |
    | col 2 is      | centered      |   $12 |
    | zebra stripes | are neat      |    $1 |
  
    There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.
  
    Markdown | Less | Pretty
    --- | --- | ---
    *Still* | \`\`\`renders\`\`\` | **nicely**
    1 | 2 | 3

---
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | renders | **nicely**
1 | 2 | 3`
}, {
  nav: 'Blockquotes',
  example: `
    > Blockquotes are very handy in email to emulate reply text.
    > This line is part of the same quote.
  
    Quote break.
  
    > This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 
---
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 
`
}, {
  nav: 'Inline HTML',
  example: `
    Sorry, Inline HTML is not currently supported.
`
}, {
  nav: 'Horizontal Rule',
  example: `
    Three or more...

    ---
  
    Hyphens
  
    ***
  
    Asterisks
  
    ___

    Underscores

---

Three or more...

---

Hyphens

***

Asterisks

___

Underscores
`
}, {
  nav: 'Line Breaks',
  example: `
    Here's a line for us to start with.

    This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

    This line is also a separate paragraph, but...
    This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

---
Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

`
}]