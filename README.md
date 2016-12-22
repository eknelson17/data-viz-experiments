# data-viz-experiments
Learning and experimenting with a few data visualization libraries

This mini-project was the result of a research spike done for my job, so the "us" and "we" uses below refer to my team at Vista Higher Learning.

## Comparison Notes

### C3

#### Pros
* Based on D3
  * We already have D3 in our stack
  * Have the power to fall back to vanilla D3 if we need to build something beyond what C3 gives us
* Includes all the graph types we are currently wanting to include
* Good JSON data support
  * Can define objects in reasonable ways
    * (e.g. `{ 'x-axis-key': 'x-axis-value', 'data-category': 'y-axis-value' }`)
  * Simple pattern to follow to get JSON to work with each chart type
* Can add custom CSS classes to almost anything in the configs
  * Allows for easy overrides for style changes
* SVG
  * Scales well
* Easy to customize basic graphs with added info and context
* Good documentation
  * Editable examples allow you to build a version of your graph on the site rapidly
  * Detailed docs make sense and are easy to grep once you breach the initial learning curve
* Learning curve isn't too bad
* Free & Open Source
* Great walkthrough on Getting Started
  * Gave a very simple example and walked you through the main points of manipulating the way data is displayed

#### Cons
* Had trouble getting it set-up
  * Mostly dumb mistakes, but the "Getting Started" docs skipped steps assuming you know things
  * Some problems were a side effects of my dev env on my laptop and things being super out-of-date
* Google searches often return D3 answers
* Community seems to be mixed with the D3 one, making it a bit difficult to find articles

#### Thoughts
* Felt like I had a good grasp of how it works after about a day
* Loved the ability to mess with the configs right in their examples vs. downloading them or using JSFiddle
  * It's just more seemless
* Getting JSON working wasn't particularly simple, but once I figured it out, I found the pattern that works like 98% of the time if you just follow it.
* Love that it can take a variety of formats for the JSON data with a few tweaks or additions to other configurations
  * You just need to figure out what needs to change to accommodate your data format
  * Let me use data formated in a way that is familiar to me from other parts of our software and makes sense for the data we have...not to mention being WAY more readable than the rows or columns options.

### HighCharts

#### Pros
* Includes all the graph types we are currently wanting to include
* SVG
  * Scales well
* Can add custom CSS classes to some elements to over styles
* Good examples
  * Get you 90% of the way there
* Documentation is pretty extensive, but difficult to grep at times
* Community support is there, but not to the same level as D3 and it's popular wrappers

#### Cons
* Not free
* JSON support is lacking...or at least unintuitive
  * Couldn't figure out how to get it accept JSON similar to what I wrote for C3
  * Separate array for X-axis values seems to be required if you don't want them to just be numbers
  * Could map data set name to values, but not values to x-axis category
    * I don't want to do any data transformation on the front-end
    * If the chart could take the data in a what that makes sense for both the front- and back-ends, that'd be ideal
* Docs aren't always easy to grep
* Can't add custom CSS classes to all elements, only a few
* Can't easily control the order of SVG elements
  * This resulted with the label for my "Passing Grade" line rendering behind one of the column and thus unreadable
    * I fixed it by pulling the label to the right of the graph, but I dislike not having the option of putting it on the chart if there's any chance it'll be overlapped

#### Thoughts
* Felt like it was mostly copy-pasta, followed by a fight with the docs to get the example code to do the things I wanted it to
* The examples are pretty extensive and detailed, which made creating the graphs pretty quick
* I don't feel like I learned anything about creating a chart from scratch for myself

### D3

#### Pros
* Already in our stack
* Super powerful and customizable
* SVG
* Great community - widely used
* FOSS
* Seems to have reasonable docs for once you know what you're doing
* Good examples, including those from the community

#### Cons
* Have to build every piece of the chart from scratch
  * Seems excessive for this use case of needing standard chart types
  * Makes it more bug-prone
* Steeper learning curve
* Their site doesn't include good "Getting Started" docs
  * I'm sure I could find a few blog posts covering the initial learning curve, but a library's docs should really include that sort of thing

#### Thoughts
* Didn't actually have time to build anything using strictly D3
  * Prioritized the other two as they seemed to fit our use case better
* From previous experience fixing D3 bugs in our app:
  * It's very hard to digest the code and picture what it'll look like
  * Tricky to style using CSS
  
  
## Final Thoughts
* D3 would be total overkill and more work than it's worth for the types of data visualizations we want to do.
* HighCharts doesn't seem to be significantly better than C3, so I'd say it is not worth the cost to use it commerically.
* HighCharts is more limited in the data formats it accepts.
  * You have to fight with it until it finally finds something it can parse.
* C3 does what I need it to in a way that makes sense to me, especially when it comes to JSON and CSS support.

C3 has my vote.
