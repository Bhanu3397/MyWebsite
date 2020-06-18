Please Download to view the exact content and view in VSCode
Introduction to Semantic HTML
When building web pages, we use a combination of non-semantic HTML and Semantic HTML. The word semantic means “relating to meaning,” so semantic elements provide information about the content between the opening and closing tags.

By using Semantic HTML, we select HTML elements based on their meaning, not on how they are presented. Elements such as <div> and <span> are not semantic elements since they provide no context as to what is inside of those tags.

For example, instead of using a <div> element to contain our header information, we could use a <header> element, which is used as a heading section. By using a <header> tag instead of a <div>, we provide context as to what information is inside of the opening and closing tag.

Why use Semantic HTML?

Accessibility: Semantic HTML makes webpages accessible for mobile devices and for people with disabilities as well. This is because screen readers and browsers are able to interpret the code better.

SEO: It improves the website SEO, or Search Engine Optimization, which is the process of increasing the number of people that visit your webpage. With better SEO, search engines are better able to identify the content of your website and weight the most important content appropriately.

Easy to Understand: Semantic HTML also makes the website’s source code easier to read for other web developers.

To better understand this, you can think of comparing non-semantic HTML to going into a store with no signs on the aisles. Since the aisles aren’t labeled, you don’t know what products are in those aisles. However, stores that do have signs for each aisle make it a lot easier to find the items you need, just like Semantic HTML.


Figure and Figcaption:-
<figure> is an element used to encapsulate media such as an image, illustration, diagram, code snippet, etc, which is referenced in the main flow of the document.
<figcaption> is an element used to describe the media in the <figure> tag. Usually, <figcaption> will go inside <figure>. 

Audio and Attributes:-
The <audio> element is used to embed audio content into a document. Like <video>, <audio> uses src to link the audio source.
      <audio>
        <source controls src="https://content.codecademy.com/courses/SemanticHTML/dogBarking.mp3" type="audio/mp3">
    </audio>
Video and Embed:- By using a <video> element, we can add videos to our website. The <video> element makes it clear that a developer is attempting to display a video to the user.
<video src="coding.mp4" controls>Video not supported</video>
In the code above, a video file named coding.mp4 is being played. The “Video not supported” will only show up if the browser is unable to display the video.
Another tag that can be used to incorporate media content into a page is the <embed> tag, which can embed any media content including videos, audio files, and gifs from an external source. This means that websites that have an embed button have some form of media content that can be added to other websites. The <embed> tag is a self-closing tag, unlike the <video> element.
     <video src="https://content.codecademy.com/courses/SemanticHTML/dog-video.mp4" controls>
      <embed src= "https://content.codecademy.com/courses/SemanticHTML/dog-on-beach.gif">
      </video>

Let’s review some of the topics we covered throughout the lesson:

Semantic HTML introduces meaning to a page through specific elements that provide context as to what is in between the tags.
Semantic HTML is a modern standard and makes a website accessible for people who use screen readers to translate the webpage and improves your website’s SEO.
<header>, <nav> , <main> and <footer> create the basic structure of the webpage.
<section> defines elements in a document, such as chapters, headings, or any other area of the document with the same theme.
<article> holds content that makes sense on its own such as articles, blogs, comments, etc.
<aside> contains information that is related to the main content, but not required in order to understand the dominant information.
<figure> encapsulates all types of media.
<figcaption> is used to describe the media in <figure>.
<video>, <embed>, and <audio> elements are used for media files.
