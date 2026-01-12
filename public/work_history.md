### Lattice Goals:

1. React 19 APIs
2. Tailwind 4
3. React ecosystem libraries - shad/cn

### Engagements

- Ogletree 01/01/25 - 01/10/25, 4/7/25 - 10/22/25
- Spark OmniOne 01/01/25 - 01/30/25
- RP AI Search 01/28/25 - 4/23/25
- CVS - BD CVSH 2025 UI / UX Transformation RFP 5/20/25 - 6/6/25
- Ops Scanner 5/30/25 -
- Outfront 08/04/25 - 9/19/25
- HDS - Omnichannel Transformation (White Cap) 10/29/25 -

### Certifications

- Contentstack - 09/25/25

### Presentations

- 2/19/25 - Changes in Tailwind 4
  - https://youtu.be/MB9UYNMbkso
- 3/19/25 - What's new in React 19
  - https://youtu.be/X-D0pYz3m84
  - https://github.com/alexmkio/prisma-react-19

## January 2025

- Ogletree
  - Add expand/collapse all to Accordion component
- Spark OmniOne
  - Refined mobile styling for /Home
  - Use isLoading state for in progress dots
  - Fetch weather info from weather.gov api
  - Fetch stock info from polygon.io api
  - Implement ability for a user to order their quick actions
  - Refine margins on /home
  - Style my-saved-pins
  - Update the result cards styling
  - Update saved prompt styling

## February

## March

- RP AI Search
  - Style landing page
  - Create loading animation
  - Style results page
    - Style filters panel

## April

- Ogletree
  - Deprecate all.all category
    - Go to compliance hub pages (jurisdiction, task, topic) and find that an article that is not associated with that page but associated with All.All category should not show up in Documents & Tools
  - Refactor ModalGenericTrigger to render icon from CMS instead of children
  - Side nav links should be one line if they fit
    - Change from width: min-content ("the intrinsic minimum width") to width: auto ("the browser will calculate and select a width for the specified element")

## May

- Ogletree
  - Create Tool Card component, Storybook story, and test suite
  - Add automated tests for Critical Regression

## June

- Ogletree
  - Product Geo assignment UI fine tuning
  - OD Admin User assignments UI tweaks
  - updates to footer css to allow footer links to wrap. previously cutoff on tablet resolutions.
  - Make ClientProductGeos table sortable
  - Add Client Product Geo assignment to new user modal
    - Create search disable variant of SearchableMultiselect component
  - Create ToolButton component, Storybook story, and test suite
  - Refactored base class gradientButton to properly align with designs
- CVS
  - Create demo with login page, menu, transactions page, create claim modal, claims page, tools menu, keyboard shortcuts menu
- OpsScanner
  - Allow multi-select for Practice Search
  - Use NPM instead of Yarn v1
  - Add caching to pipeline
  - Add continuous integration

## July

- Ogletree
  - Align styling of products geos switcher with designs
  - Align styling of law-summary slug and generic page with designs
  - Create a small variant of CategoryPill and utilize it on Law Summary and Page Generic
  - Combine middle content into alternating array to fix content order
  - Add a product/geo selector to the preferences component in user settings (not "my settings") for OD Admins and PPCs to manage other users preferences
  - Fix order of categories in PageTitle of Law Summary and Generic Pages
    - Sort jurisdictions independently and last

## August

- Ogletree
  - Create GenericButton component, Storybook story, and test suite
  - Alphabetically sort ProductGeos by name
  - Support There Is No Law Summary in Law Summary Build a Table
  - Support Key Takeaways in Law Summary Build a Table
  - Add analytics to tools hub & internal tool page
- Outfront Media
  - Migration Scripts (PowerShell):
    - Footer Contact
    - Case Studies Scroll
    - Tiles
    - Footer
    - Market Overview
    - Market Search
    - Header
    - Blog
    - Available Media Cards
    - Cookie
    - Quotes
    - Privacy Contact Form
    - Text And Media
    - Content Carousel
    - Verify Newsletter
    - Video Carousel
    - Rich Text Title and Desc
    - Captivating Market
    - Leadership
  - Sitemap
  - Redirects
  - 400 & 500 pages
  - Conditionally render image in Quote component
  - Optimize visual builder edibility

## September

- Ogletree
  - Add download full summaries to Build A Table
  - Support select/deselect all of a group in SearchableMultiselect component
  - Remove payment status from subscription tables
- Outfront Media
  - Improve documentation
  - Insight styling issue
  - Add Google Analytics
  - Add language attribute
  - Align Reaching Market default card logic w/ Sitecore
  - Align email sign-up messages with Sitecore implementation
  - Fix scroll to location

## October

- Ogletree
  - Remove last payment from subscription tables
  - Update Add A User modal UI with checkboxes for prod geo options
    - create Checkbox component and stories
    - create Checkboxes component and stories - this houses logic for select/deselect all
  - Add Pagination component for PPC users table
  - Support Law Summary Scope
    - style scope component based off CMS values
    - add optional collapsible functionality to TitlePanel component

## November

- White Cap
  - Component Library
    - Add To Cart molecule
    - Carousel atom
    - Banner molecule
  - Improve documentation
  - PLP shell page
  - PDP shell page

## December

- White Cap
  - Component Library
    - Utility Card molecule
    - Product Card molecule
    - Add whole numbers variant of Number Input atom
    - Tooltip atom
    - Quantity Input atom
    - Add To Cart molecule rework
  - Home page components
    - Secondary Marketing Banner
    - Marketing Carousel
    - Category Drawer
    - Highlighted Services
    - Highlighted Products
    - Trades We Serve
  - Address security vulnerabilities

## January 2026

- White Cap
  - Refactor Sheet animation
  - Secondary Marketing Banner CMS Integration

## Outfront Media

### Migration from Sitecore to Contentstack

- Migration Scripts
  - Created Sitecore export scripts in PowerShell
  - Created coresponding upload scripts for Contentstack
- Sitemap
  - Create a function that queries all Pages from Contentstack
  - Generate a sorted and heirchical [localized Sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap#generate-a-localized-sitemap)
- Redirects
  - Created a PowerShell script to export existing redirects from Sitecore
  - Created [redirect Middleware](https://nextjs.org/docs/pages/guides/redirecting#nextresponseredirect-in-middleware) that splits source strings into a Set (for O(1) lookups) and RegEx rules into an array (for O(k) where k is the number of regex rules)
  - Created comprehensive test suite
- 400 & 500 pages
  - Adds a [not-found page in App router](https://nextjs.org/docs/app/api-reference/file-conventions/not-found) for 400s
  - Updated 500 page in Page router
    - Could not implement 500 page in App router because behind the scenes [the app router error file](https://nextjs.org/docs/app/api-reference/file-conventions/error) uses React Error Boundary to wrap a route segment and its nested children, but most of our server errors are thrown within Pages router outside of the context of App router and it's segments
- Optimize visual builder edibility

## Ogletree

- AI Enablement study (Windsurf + Threatrix)
- Refactor "Build A Table" in case of "no law summary"
  - Major styling updates
- Refactor "Build A Table" to include Key Takeaways
  - Change View types to be a multiselect component
  - Add clear all selections functionality
  - Add Key Takeaways (Detail) to table
  - Create fallbacks for no snapshot, key takeaway, or update
  - Add expand/collapse functionality
- Led demo with client over previous sprint's work around: GenericPage, Tools Hub, Tool Information Page, Tool Page, StandardButton, single jurisdiction behavior (no jurisdiction dropdowns, automatic jurisdiction selection, etc)
