Please Download to view the exact content and view in VSCode
https://www.youtube.com/watch?time_continue=334&v=uxmB8MlO3m8&feature=emb_logo :- Structure
https://www.youtube.com/watch?time_continue=208&v=B4tCt6elrU0&feature=emb_title :- Doc standards
If you want to display text in HTML, you can use a paragraph or span:
Paragraphs (<p>) contain a block of plain text.
<span> contains short pieces of text or other HTML. They are used to separate small pieces of content that are on the same line as other content.

Styling Text
You can also style text using HTML tags. The <em> tag emphasizes text, while the <strong> tag highlights important text.

Later, when you begin to style websites, you will decide how you want browsers to display content within <em> and <strong> tags. Browsers, however, have built-in style sheets that will generally style these tags in the following ways:

The <em> tag will generally render as italic emphasis.
The <strong> will generally render as bold emphasis.
Exampple: -
<p><strong>The Nile River</strong> is the <em>longest</em> river in the world, measuring over 6,850 kilometers long (approximately 4,260 miles).</p>

Line Breaks:-
The spacing between code in an HTML file doesn’t affect the positioning of elements in the browser. If you are interested in modifying the spacing in the browser, you can use HTML’s line break element: <br>.

Example:- 
<p>The Nile River is the longest river <br> in the world, measuring over 6,850 <br> kilometers long (approximately 4,260 <br> miles).</p>

Unordered Lists: -
Example:-
<ul>
  <li>Limes</li>
  <li>Tortillas</li>
  <li>Chicken</li>
</ul>

Ordered Lists:-
<ol>
  <li>Preheat the oven to 350 degrees.</li>
  <li>Mix whole wheat flour, baking soda, and salt.</li>
  <li>Cream the butter, sugar in separate bowl.</li>
  <li>Add eggs and vanilla extract to bowl.</li>
</ol>

Image:- Example:- <img src="image-location.jpg" />

Image Alts:- <img src="#" alt="A field of yellow sunflowers" />

Video:- 
Example:-
<video src="myVideo.mp4" width="320" height="240" controls>
  Video not supported
</video>
In this example, the video source (src) is myVideo.mp4 The source can be a video file that is hosted alongside your webpage, or a URL that points to a video file hosted on another webpage.

After the src attribute, the width and height attributes are used to set the size of the video displayed in the browser. The controls attribute instructs the browser to include basic video controls: pause, play and skip.

The text, “Video not supported”, between the opening and closing video tags will only be displayed if the browser is unable to load the video.

The <head> element contains the metadata for a web page. Metadata is information about the page that isn’t displayed directly on the web page.
Example:-
  <head>
    <title>Brown Bears</title>
    </head>

Linking Pages:-
<a href="https://www.wikipedia.org/">This Is A Link To Wikipedia</a>

Opening Links in a New Window:-
<a href="https://en.wikipedia.org/wiki/Brown_bear" target="_blank">The Brown Bear</a>

Linking to Relative Page:-
You’ve probably visited websites where not all links were made up of text. Maybe the links you clicked on were images or some other form of content.
Example:-
<a href="https://en.wikipedia.org/wiki/Opuntia" target="_blank">
<img src="https://www.Prickly_Pear_Closeup.jpg" alt="A red prickly pear fruit"/></a>

Linking to Same Page:-
In order to link to a target on the same page, we must give the target an id, like this:
<p id="top">This is the top of the page!</p>
<h1 id="bottom">This is the bottom! </h1>
An id should be descriptive to make it easier to remember the purpose of a link. The target link is a string containing the # character and the target element’s id.
An id is especially helpful for organizing content belonging to a div!
you assign Id's to div tags

Comments:- <!-- This is a comment that the browser will not display. -->

Table Rows:-The first step in entering data into the table is to add rows using the table row element: <tr>.
<table>
  <tr>
  </tr>
  <tr>
  </tr>
</table>
Table Data:-
Rows aren’t sufficient to add data to a table. Each cell element must also be defined. In HTML, you can add data using the table data element: <td>.
<table>
  <tr>
    <td>73</td>
    <td>81</td>
  </tr>
</table>

Table Headings:-
<table>
  <tr>
    <th></th>
    <th scope="col">Saturday</th>
    <th scope="col">Sunday</th>
  </tr>
  <tr>
    <th scope="row">Temperature</th>
    <td>73</td>
    <td>81</td>
  </tr>
</table>
What happened in the code above?

First, a new row was added to hold the three headings: a blank heading, a Saturday heading, and a Sunday heading. The blank heading creates the extra table cell necessary to align the table headings correctly over the data they correspond to.

In the second row, one table heading was added as a row title: Temperature.

Note, also, the use of the scope attribute, which can take one of two values:

row - this value makes it clear that the heading is for a row.
col - this value makes it clear that the heading is for a column.
HTML code for tables may look a little strange at first, but analyzing it piece by piece helps make the code more understandable.

Table Borders:- Deprecated version is <table border="1">
You can achieve the same table border effect using CSS.
table, td {
  border: 1px solid black;
}
The code in the example above uses CSS instead of HTML to show table borders.

Spanning Columns:-
<table>
  <tr>
    <th>Monday</th>
    <th>Tuesday</th>
    <th>Wednesday</th>
  </tr>
  <tr>
    <td colspan="2">Out of Town</td>
    <td>Back in Town</td>
  </tr>
</table>

Forms:-
The <form> element is a great tool for collecting information, but then we need to send that information somewhere else for processing. We need to supply the <form> element with both the location of where the <form>‘s information goes and what HTTP request to make. Take a look at the sample <form> below:

<form action="/example.html" method="POST">
</form>
In the above example, we’ve created the skeleton for a <form> that will send information to example.html as a POST request:
The action attribute determines where the information is sent.
The method attribute is assigned a HTTP verb that is included in the HTTP request.
Example:-<form action="/practice.html" method="POST"><h1>Burgers</h1><p>Welcome to burgers orders</p></form>

Textarea element:-
<section class="extra-info">
  <label for="extra">Anything else you want to add?</label>
  <br>
  <!--Add your code below-->
<textarea id="extra" name="extra" rows="3" cols="40">No plastic utensils please!</textarea>

HTML FORMS (Review):-
Nice work interacting with the extremely common and useful <form> element!

The purpose of a <form> is to allow users to input information and send it.
The <form>‘s action attribute determines where the form’s information goes.
The <form>‘s method attribute determines how the information is sent and processed.
To add fields for users to input information we use the <input> element and set the type attribute to a field of our choosing:
Setting type to "text" creates a single row field for text input.
Setting type to "password" creates a single row field that censors text input.
Setting type to "number" creates a single row field for number input.
Setting type to "range" creates a slider to select from a range of numbers.
Setting type to "checkbox" creates a single checkbox which can be paired with other checkboxes.
Setting type to "radio" creates a radio button that can be paired with other radio buttons.
Setting type to "list" will pair the <input> with a <datalist> element if the id of both are the same.
Setting type to "submit" creates a submit button.
A <select> element is populated with <option> elements and renders a dropdown list selection.
A <datalist> element is populated with <option> elements and works with an <input> to search through choices.
A <textarea> element is a text input field that has a customizable area.
When a <form> is submitted, the name of the fields that accept input and the value of those fields are sent as name=value pairs.
Using the <form> element in conjunction with the other elements listed above allows us to create sites that take into consideration the wants and needs of our users. Take the opportunity to take what you’ve learned, and apply it!

FORM VALIDATION:-
Requiring an Input
Sometimes we have fields in our <form>s which are not optional, i.e. there must be information provided before we can submit it. To enforce this rule, we can add the required attribute to an <input> element.
Example:-
<form action="/example.html" method="POST">
  <label for="allergies">Do you have any dietary restrictions?</label>
  <br>
  <input id="allergies" name="allergies" type="text" required>
  <br>
  <input type="submit" value="Submit">
</form>
Set a Minimum and Maximum:-
<form action="/example.html" method="POST">
  <label for="guests">Enter # of guests:</label>
  <input id="guests" name="guests" type="number" min="1" max="4">
  <input type="submit" value="Submit">
</form>
Checking Text Length:-
<form action="/example.html" method="POST">
  <label for="summary">Summarize your feelings in less than 250 characters</label>
  <input id="summary" name="summary" type="text" minlength="5" maxlength="250" required>
  <input type="submit" value="Submit">
</form>
Matching a Pattern:- For cases when we want user input to follow specific guidelines, we use the pattern attribute and assign it a regular expression, or regex. Regular expressions are a sequence of characters that make up a search pattern. If the input matches the regex, the form can be submitted.
<form action="/example.html" method="POST">
  <label for="payment">Credit Card Number (no spaces):</label>
  <br>
  <input id="payment" name="payment" type="text" required pattern="[0-9]{14,16}">
  <input type="submit" value="Submit">
</form>

Question:-
What is rendered on the web page as a result of the code provided?
<form action="/processing.html" method="GET">
  <label for="mystery">What gets rendered?</label>
  <input type="range" id="mystery" name="mystery" min="0" max="100" step="10">
</form>
Ans:- A form containing a slider that has a maximum value of 100, a minimum of 0 and moves in steps of 10.
Why does the code provided not create a working <datalist> element?\
<form action="/quiz.html" method="POST">
  <label for="choice">What's wrong with this code?</label>
  <input id="choice" type="text" name="find-the-answer">
  <datalist id="menu-options">
      <option value="one"></option>
      <option value="two"></option>
      <option value="three"></option>
  </datalist>
</form>
Ans:- The <input> doesn’t have a list attribute to associate itself with the <datalist>.

Based on the code provided, why will the information from the first <input> element NOT be sent to /processing.html when the form is submitted?
<form action="/processing.html" method="GET">
  <input type="text" id="username">
  <input type="submit" value="submit"> 
</form>
Ans:- The first <input> element is missing the name attribute which omits the <input>‘s information.