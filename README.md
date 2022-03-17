# Codetask - SeenThis 🌱

## Instructions to run the project

run _npm i_ in both backend & frontend folder.
cd into frontend folder and run _npm start_

## Summary

This was a fun task! I think it was great that it was broad.
In this task I focused a little bit more on the frontend-part.

## Design decisions

I interpreted your instructions that the media should have been rendered/played below both lists.
But since this did not make since to me from a user perspective I choosed to render the media below each list-item. (Perhaps this was what you meant all along?)

## Shortcuts

- Loadtime: I do realise that it takes way to long time to load in all media from a remote source for the end user when first accessing the webpage.
  This is a problem I probably could bypass with NextJS image-optimiziation.
  https://nextjs.org/docs/basic-features/image-optimization#remote-images

- Scalability: Now in retrospect I am realising that I should have written my CSS in a more scalable approach so its easy for others to tweak the design.
  I should have extracted the tailwind-classes to separate files and have one css file for each component + using BEM naming convention.

- Video thumbnails: I would have liked to implement video thumbnails, but as a shortcut I used placeholders.

## In retrospect

- I should have used BEM naming convention and add separated css files by components.
- I should have built this project with NextJS for image-optimization.

## Thanks for reviewing my task!
