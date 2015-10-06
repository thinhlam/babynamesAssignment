# Popular Names

This repository contains an API that provides popular baby names in New York City for 2011. Please consume this API and design a frontend to visualize the data.

## Criteria

- Display the data provided by the API. Be as creative as you want. You don't need to use every field.
- Don't put everything on one "screen". Use the concept of paging/tabbing/screenfuls of data.
- Your design **must** be responsive, mobile-first.
- You **must** code CSS from scratch. Do not use CSS frameworks such as Bootstrap.
- Use a front-end technology you are comfortable with, but bonus points if you use React.
- The same applies to JavaScript libraries and frameworks, but major bonus points if you code in vanilla JS instead of jQuery.
- Feel free to use a CSS preprocessor of your choice, but this is not required.
- Consider using a task runner like Gulp or Grunt as part of your development workflow. Also not required, but appreciated.
- Your development environment and code should be as elegant as the visual design of your site, including directory structure, syntax, and testing if needed.
- It wouldn't hurt to initialize this as a Git repository to keep track of your work.

### Small bonus

If you have extra time, consider charting/graphing the data with modern graphing libraries. This must not break the responsiveness of the site.

## API

The API runs on http://localhost:3000

### Endpoints

#### /female
Fetch the female names

#### /male
Fetch the male names

### Parameters

You can apply the following query parameters to the endpoints.

#### ?sort
Possible values:

- popularity
- ethnicity

### Example calls

    http://localhost:3000/female
    http://localhost:3000/male?sort=popularity

## Usage

Make sure you have node at least version 0.10.

    npm install # to install the dependencies
    npm start   # to run the API server
    ctrl-C      # to stop the server
