# Running instructions
- clone repo
- navigate into vegaScavangerSite
- `yarn install`
- `yarn start`
# Considerations
- used CSS grid to create top level layout
- since the design given had elements flowing into gutters, regular grid alignment would not work
- noticed that the design actually can be broken down into 8 sections of equal length (plus the length of one gutter)
- breaking it down this way reveals that the article section takes up exacty 5/8 of the sections, empty margin on the right takes 2/8 and sidebar on the left takes 1/8 + the length of one gutter
- used the Fr units in CSS to break it down and align all top level elements 1-5-2
- added a margin the length of one gutter on the left side 
- doing this created a perfect alignment between design and website (horizontally)
- gutter size had to be guesstimated, chose 32px for desktop and 16px otherwise
- the rest of the design was a matter of trial and error trying to visually align all elements with the image and between themselves using both flexbox and css grid
# What I struggled with
- getting absoluely perfect allignment of the content to the background image was tricky, the end result isnt pixel perfect but its quite close and can probably be fixed with some fine tuning
- In order to scale the image correctly I had to allow a varying amount of it's top part flow off screen (not sure if this is the intended way to acomplish this)
- I wasn't able to figure out how to get the big quote in the article to overflow/ be alligned outside of the article div that it resides in. And had the same problem with the underline of the sidebar
- I think both of these could've been solved with changes to the layout but I did not leave myself enough time to experiment
