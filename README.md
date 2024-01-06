Let's study React Routers-

So, Create React App doesn't include page routing.
React Router is the popular solution.

What is React Router?
It is a library that helps developers manage and navigate different routes in their React application.
It makes it easy to declare and render different components of each route, and also keep your application's state updated as you navigate between routes.

Main benefits of React Router:
1. It offers a simple, declarative API that makes it easy to specify routes and map them to components.
2. It is designed to work with component based architecture, hence its a natural fit fro React applications.
3. Highly configurable, and can be extended to meet the needs of any application.

What is nested Routing?
Nested Routing is when you have routes within other routes. This can be use ful for building a hierarchy of pages. For example, If you have blogs of different categories, and you want to have different pages for each category with list of blogs. To do that, you would create a route for each category, and then nest the route for the posts within that.

What are breadcrumps used for in React Router?
They are navigational aid, allowing user to keep track of their location within a website or application. Especially, helpful in large application with complex navigation.

What's difference between 'exact path' and 'path'?
'Exact Path' props tell RR that the given route should only be matched if the pathname exactly matches.
'Path' props match any path that startswith the route's path.

What is 'to' attribute?
'to' attr specify the path where the user should be redirected to when they click on a link.
This value can be string, which will be interpreted as a relative path.
Or it can be an object, which can spcify absolute path, query parameters and so on.
   
