## AngularJS Market App
### from [Codecademy](https://www.codecademy.com/learn/learn-angularjs)

When the app runs, AngularJS walks through each HTML element looking for directives.
When it finds one, AngularJS triggers that behavior - like attaching a scope or looping through an array.

At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element (e.g. via event listeners), or even to transform the DOM element and its children.

Much like you create controllers and services, you can create your own directives for AngularJS to use.
When AngularJS bootstraps your application, the HTML compiler traverses the DOM matching directives against the DOM elements.

### Why is creating your own directives useful?

**Readability.** Directives let you write expressive HTML. Looking at index.html you can understand the app’s behavior just by reading the HTML.

**Reusability.** Directives let you create self-contained units of functionality. We could easily plug in this directive into another AngularJS app and avoid writing a lot of repetitive HTML.
