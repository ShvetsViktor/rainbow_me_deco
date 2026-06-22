# Rainbow Me Decor Studio – Interactive Front End Website

![Mockup image](assets/mockups/example.png)

**Live Website:** https://shvetsviktor.github.io/rainbow_me_deco/

## Overview

Rainbow Me Decor Studio is an interactive front-end website for a small event decoration business specialising in balloon arches, balloon garlands, balloon number stacks, sequin backdrops, table centrepieces, seasonal business decorations, party supplies, and custom event styling.

The project has two connected purposes. For the business, it presents decoration services, previous work, guide price information, and a simple enquiry route for potential customers. For the assessment, it demonstrates a dynamic and user-centred front-end web application with meaningful JavaScript interactivity, clear UX design, accessibility considerations, responsive layout, testing evidence, and professional documentation.

The website is designed to allow visitors to explore services, use service cards as shortcuts to matching portfolio examples, filter work by decoration type, move through portfolio items using a View More control and visible item counter, view images in a modal gallery, build a guide estimate using selected services, review the estimate before sending an enquiry, understand the booking process, interact with scroll-triggered animations, and submit a validated enquiry form.

The main project focus is front-end development. The Enquiry Form includes JavaScript validation and simulated submission, with the option to extend it in the future using server-side or serverless form processing.

---

## Table of Contents

1. [Project Goals](#project-goals)
2. [Target Audience](#target-audience)
3. [User Stories](#user-stories)
4. [Success Criteria](#success-criteria)
5. [Five Planes of UX](#five-planes-of-ux)
   - [Strategy](#strategy)
   - [Scope](#scope)
   - [Structure](#structure)
   - [Skeleton / Wireframes](#skeleton--wireframes)
   - [Surface](#surface)
6. [Development Process](#development-process)
7. [Features](#features)
8. [JavaScript Functionality](#javascript-functionality)
9. [Technologies Used](#technologies-used)
10. [Testing](#testing)
11. [Bugs](#bugs)
12. [Deployment](#deployment)
13. [Attribution, Credits and Acknowledgements](#attribution-credits-and-acknowledgements)
14. [Assessment Checklist](#assessment-checklist-pass--merit--distinction)
15. [Repo Structure](#repo-structure)
16. [Future Improvements](#future-improvements)

## Project Goals

### User Goals

- Find decoration inspiration for a wedding, birthday, corporate event, or special celebration.
- Understand what types of balloon and event decoration services are available.
- See examples of previous decoration work before making an enquiry.
- Decide whether the service matches their event style, budget, and needs.
- Contact the decorator with minimal friction when they are ready to enquire.

### Site Owner Goals

- Present balloon decoration and event styling services in a professional and attractive way.
- Showcase previous work clearly through a visual portfolio.
- Build trust with potential customers through clear service information, images, and testimonials.
- Encourage suitable visitors to make an enquiry.
- Reduce repeated questions by showing service categories, example work, and guide price information.

---

## Target Audience

The target audience includes:

- Couples planning weddings or engagement celebrations.
- Parents organising children’s birthday parties or themed events.
- People planning baby showers, private parties, or family celebrations.
- Small businesses organising corporate events, launches, or seasonal displays.
- Event planners looking for a reliable balloon and event decoration supplier.

---

## User Stories

### Primary Visitor

#### US1 — Understand the Business

As a visitor, I want to understand what the business offers quickly so that I know whether it is relevant to my event.

**Acceptance Criteria:**

- The hero section clearly explains the service.
- The main call to action is visible above the fold.
- The services section is easy to find.

#### US2 — Browse Services

As a visitor, I want to browse the available decoration services so that I can decide whether the business offers what I need.

**Acceptance Criteria:**

- Services are displayed in clear cards.
- Each service has a short description.
- The layout remains readable on mobile and desktop.
- Selecting a service card takes the user to matching portfolio examples.

#### US3 — Browse Portfolio Examples

As a visitor, I want to view selected examples of previous work so that I can judge the style and quality of the decoration before making an enquiry.

**Acceptance Criteria:**

- The portfolio section shows a selected set of previous work.
- Portfolio items are displayed in a clear responsive grid.
- Each item includes an image and relevant category information.
- The initial number of visible items is limited to avoid overloading the page.
- Portfolio images remain readable and visually consistent across screen sizes.

#### US4 — Filter and View More Portfolio Examples

As a visitor, I want to filter portfolio examples by decoration type and move through more examples in small groups so that I can browse relevant work without being overwhelmed by too many images at once.

**Acceptance Criteria:**

- Portfolio filter buttons are visible above the portfolio grid.
- Clicking a decoration category shows only relevant portfolio items.
- The active filter is visually highlighted.
- Only a limited number of matching items are shown at one time.
- A View More button replaces the current visible group with the next group of matching items.
- A visible counter shows which items are currently displayed, for example “Showing 1–6 of 18”.
- The counter updates when the user changes filter category or clicks View More.
- The portfolio resets to the first group when a new filter category is selected.
- When the final matching group is reached, the button changes to “View First”.
- Clicking “View First” returns the portfolio to the first matching group and resets the counter.

#### US5 — View Images Clearly

As a visitor, I want to open portfolio images in a larger view so that I can see decoration details more clearly.

**Acceptance Criteria:**

- Clicking an image opens a modal.
- The modal shows a larger image.
- The modal can be closed by a close button.
- The modal can be closed using the Escape key.
- No console errors occur.

#### US6 — Build a Guide Estimate

As a visitor, I want to add decoration services and extras to a guide estimate so that I can understand the approximate cost before sending an enquiry.

**Acceptance Criteria:**

- The user can add a service to the estimate from a service card or portfolio card.
- The user can view the current estimate total while browsing the page.
- The user can open the estimate panel to review selected items.
- The user can remove selected items from the estimate.
- The estimated total updates when selected items change.
- The estimate is clearly presented as a guide price rather than a final quote.
- The user can continue to the enquiry form to request a final quote.

#### US7 — Understand the Booking Process

As a visitor, I want to understand how the booking and setup process works so that I know what to expect before sending an enquiry.

**Acceptance Criteria:**

- The How It Works section is easy to find.
- The booking process is shown in clear steps.
- Each step has a short explanation.
- Visual numbers or icons help users follow the process.
- The section explains the journey from enquiry to event setup.

#### US8 — Send an Enquiry

As a visitor, I want to submit an enquiry form so that I can contact the decoration provider.

**Acceptance Criteria:**

- Required fields are validated.
- Empty input is rejected.
- Invalid email format is rejected.
- The user sees clear error messages.
- A success message appears after valid submission.

#### US9 — Recover from a Wrong Page

As a visitor, I want to return to the main page if I open a non-existent page so that I do not feel stuck.

**Acceptance Criteria:**

- A custom 404 page is provided.
- The page explains that the requested page was not found.
- A clear button returns the user to the home page.

### Site Owner

#### US10 — Present Work Professionally

As the site owner, I want to present previous work clearly so that potential clients trust the quality of the service.

**Acceptance Criteria:**

- Portfolio examples are organised by category.
- Images are clear and consistent.
- Text is specific and relevant.
- The visual design matches the business purpose.

#### US11 — Maintain the Website

As the site owner, I want the code and assets to be organised clearly so that the website can be maintained and updated.

**Acceptance Criteria:**

- Files are grouped by type.
- File names are lowercase and descriptive.
- HTML, CSS, and JavaScript are separated.
- JavaScript functions use meaningful names.
- External code and assets are attributed.

---

## Success Criteria

This project is successful when:

- The website purpose is immediately clear to a first-time visitor.
- Navigation is simple, consistent, and intuitive.
- The site uses site-specific content and images instead of placeholder content.
- JavaScript provides meaningful responses to user actions.
- The portfolio section displays selected examples of previous work without overloading the single-page layout.
- Portfolio filtering, View More / View First behaviour, and the visible item counter work correctly.
- Portfolio images are optimised and lazy-loaded where appropriate.
- Users can open portfolio images in a larger modal view and close the modal without page errors or console errors.
- The estimate builder allows users to add and remove services, view an updated guide price, and continue to the enquiry form.
- Form validation handles empty or invalid input and gives clear feedback.
- Scroll-triggered balloon animations enhance the experience without distracting the user.
- The website is fully responsive on mobile, tablet, and desktop screens.
- HTML and CSS pass validation.
- JavaScript passes through a linter with no major issues.
- The final deployed version has no broken internal links and no commented-out code.
- The deployed version matches the development version.
- Code and assets are organised clearly, with HTML, CSS, and JavaScript separated into appropriate files and folders.
- External code, libraries, images, fonts, and icons are clearly attributed.
- Testing, bugs, deployment, UX design, and development process are documented.

---

## Five Planes of UX

The UX design decisions below are based on the project goals, target audience, and success criteria defined above.

The Five Planes of UX are used in this project to organise the design thinking from the broad purpose of the website through to the final visual presentation.

- **Strategy** explains why the website is needed and what user/business problems it supports.
- **Scope** defines which features and content are included in the project.
- **Structure** explains how the content, sections, navigation, and user flow are organised.
- **Skeleton** shows how the page layout is planned through wireframes and placement of key elements.
- **Surface** describes the visual design, styling, colours, imagery, and overall look and feel.

This structure helps separate project purpose, functionality, layout, and visual design so that each design decision is documented clearly.

## Strategy

The strategy for this project is to connect the needs of potential customers with the goals of a small balloon decoration business.

Potential customers need to understand whether the service is suitable for their event, style, and budget before they make contact. The business needs to present its services clearly, build confidence through visual examples, and encourage suitable visitors to send an enquiry.

The website is built around three priorities:

- **Clarity:** Hero, Main Navigation, Services, How It Works, and Call-to-Action Buttons help users understand the website quickly.
- **Confidence:** visitors can review visual examples, service information, testimonials, and guide price information before making contact.
- **Action:** visitors have clear routes to browse previous work, build a guide estimate, and send an enquiry without unnecessary friction.

---

## Scope

### Key Features

The project includes the following user-facing features:

- **Hero:** helps visitors quickly understand what the business does and what action they can take next.
- **Call-to-Action Buttons:** guide users towards viewing the portfolio, estimating a guide price, or sending an enquiry.
- **Main Navigation:** allows users to move between the main sections of the page.
- **Services:** explains the six main decoration categories and allows users to jump to matching portfolio examples.
- **Portfolio Section:** presents a selected set of previous work in a responsive image grid.
- **Portfolio Filtering and View More:** allows users to filter work by decoration type and move through matching portfolio items in small groups without expanding the page length.
- **Image Modal Gallery:** allows users to view portfolio images in a larger overlay.
- **Interactive Estimate Builder:** allows users to add services to a guide estimate, view a running total while browsing, review selected items, and continue to the enquiry form to request a final quote.
- **How It Works:** explains the booking and setup process from enquiry through completion.
- **Testimonials:** supports trust through short customer-style comments.
- **Scroll Balloon Animation:** adds decorative movement when selected sections enter the viewport.
- **Enquiry Form & Validation:** checks required user input before submission and shows clear error or success feedback.
- **Custom 404 Page:** helps users return to the main page if they open a non-existent route.

The selected features support the three strategy priorities:

- **Clarity:** Hero, Main Navigation, Services, How It Works, and Call-to-Action Buttons help users understand the website quickly.
- **Confidence:** Portfolio Section, Portfolio Filtering and View More, Image Modal Gallery, Interactive Estimate Builder, and Testimonials help users evaluate the service before making contact.
- **Action:** Call-to-Action Buttons, Interactive Estimate Builder, Enquiry Form & Validation, and the Custom 404 Page help users move towards enquiry and complete tasks without unnecessary friction.

### Feature Prioritisation Method

Features were prioritised by balancing user value, business value, assessment requirements, and realistic implementation scope.

**Score = Importance (1–5) × Feasibility (1–5)**

| Feature                           | Importance | Feasibility | Score |
| --------------------------------- | ---------: | ----------: | ----: |
| Hero                              |          5 |           5 |    25 |
| Main Navigation                   |          5 |           5 |    25 |
| Services Section                  |          5 |           5 |    25 |
| Portfolio Section                 |          4 |           5 |    20 |
| Portfolio Filtering and View More |          5 |           4 |    20 |
| How It Works                      |          4 |           5 |    20 |
| Enquiry Form & Validation         |          5 |           4 |    20 |
| Image Modal Gallery               |          4 |           4 |    16 |
| Interactive Estimate Builder      |          4 |           4 |    16 |
| Custom 404 Page                   |          4 |           4 |    16 |
| Testimonials                      |          3 |           5 |    15 |
| Call-to-Action Buttons            |          3 |           5 |    15 |
| Scroll Balloon Animation          |          4 |           3 |    12 |

---

## Structure

### Information Architecture

The website uses a single-page structure with sections arranged to support a typical customer journey from initial interest to enquiry:

1. **Hero** — introduces the business and gives users clear first actions.
2. **Services** — explains what types of decoration are available.
3. **Portfolio** — presents selected examples of previous work in a responsive image grid.
4. **Interactive Estimate Builder** — allows users to build and review a guide estimate before sending an enquiry.
5. **How It Works** — explains the booking and setup process from enquiry through completion.
6. **Testimonials** — provides trust signals through customer-style feedback.
7. **Enquiry Form** — allows users to submit event details and contact information after reviewing their selected estimate. If no estimate has been created, users can still choose a service manually using a dropdown.
8. **Footer** — repeats key links and contact information.

### Navigation and Interaction Model

The navigation and interaction model supports the user journey by helping visitors move between key sections, control interactive elements, and recover from invalid routes.

- The main navigation uses anchor links to key page sections.
- Hero buttons link directly to Portfolio, the Estimate Builder, and the Enquiry Form.
- Service cards act as shortcuts to matching portfolio categories.
- The portfolio section displays selected work, while filter buttons, a View More control, and a visible item counter let users browse relevant examples in small groups without expanding the page length.
- The image modal can be opened and closed by the user.
- The estimate builder responds when users add or remove services and updates the guide total dynamically.
- A sticky estimate widget keeps the current estimate visible while users browse, but is hidden in the enquiry section to avoid duplicated estimate information.
- The Enquiry Form provides feedback after validation.
- Footer links repeat important routes for convenience.
- External links open in a new tab where appropriate.
- A custom 404 page provides a route back to the main page.

### Semantic Markup

The project uses semantic HTML to give the page a clear and meaningful structure:

- `header` contains the main navigation and hero area.
- `main` contains the primary page content.
- `section` elements divide the page into clear content areas such as services, portfolio, estimate builder, How It Works, testimonials, and enquiry form.
- `article` elements are used for self-contained content blocks such as service cards, portfolio cards, process steps, and testimonials.
- `form` is used for the enquiry form.
- `footer` contains repeated navigation links and contact information.

---

## Skeleton / Wireframes

Wireframes were created to plan the page layout, content hierarchy, and responsive structure before development.

| Mobile           | Desktop           |
| ---------------- | ----------------- |
| Mobile wireframe | Desktop wireframe |

The wireframes show the planned placement of key sections, including the hero area, services, portfolio grid, portfolio filter controls, View More button, visible item counter, estimate builder, sticky estimate widget, How It Works, testimonials, and Enquiry Form.

---

## Surface

### Visual Design

The visual design is intended to feel:

- Clean
- Soft
- Friendly
- Elegant
- Celebratory
- Professional

### Planned Style

- Light background for readability.
- Soft pastel accent colours.
- Clear buttons for calls to action.
- Consistent spacing between sections.
- High contrast between text and background.
- Images with consistent sizing and aspect ratio.

---

## Development Process

The project was developed incrementally so that each stage produced a usable improvement before the next stage was started. A test-driven development approach was used where possible by defining expected behaviours before implementing key interactive features.

### Stage 1 — Project Setup and File Structure

**Goal:** Create the project foundation and organise the files before building the website.

**Outcome:** The project folder structure was created, with separate areas for HTML, CSS, JavaScript, images, wireframes, mockups, and testing assets.

### Stage 2 — Responsive Page Structure and Core Content

**Goal:** Build the main page sections and create a responsive structure from the start.

**Outcome:** The hero, call-to-action buttons, main navigation, services, portfolio content, estimate builder layout, How It Works, testimonials, Enquiry Form layout, and footer were added. Responsive layout decisions were considered while building these sections.

### Stage 3 — JavaScript Interactivity and User Feedback

**Goal:** Add meaningful user-controlled JavaScript functionality.

**Outcome:** Portfolio filtering, View More behaviour, visible item counter, image modal gallery, estimate builder logic, Enquiry Form & Validation, success feedback, and scroll-triggered animation were implemented.

### Stage 4 — Error Recovery, Refinement and Accessibility Checks

**Goal:** Improve the user experience and check that the interface remained clear, usable, and accessible.

**Outcome:** The custom 404 page was added, and the layout, spacing, image presentation, buttons, form feedback, keyboard controls, and visual consistency were reviewed and refined.

### Stage 5 — Testing, Deployment and Documentation

**Goal:** Prepare the project for final submission and deployment.

**Outcome:** Manual testing, responsiveness testing, accessibility checks, validation, bug documentation, deployment to GitHub Pages, attribution, and README documentation were completed.

---

## Features

The following features are planned for the final website.

### Hero

The hero section gives visitors an immediate understanding of what the business does, what type of events it supports, and what action they can take next.

### Call-to-Action Buttons

Call-to-action buttons help visitors move quickly to the most important parts of the website, such as the portfolio, estimate builder, and enquiry form.

They support the user journey by giving visitors clear next steps after they understand what the business offers.

### Main Navigation

The navigation menu allows users to move between sections of the page.

### Services

The services section explains the main decoration categories offered by the business. On smaller screens, the service cards are displayed in a Swiper carousel so visitors can browse services without the page becoming too long. On larger screens, multiple service cards are visible at once.

Each service card includes an image, a short description, and an “Add to estimate” button.

The section includes six service cards:

- Balloon Arches
- Number Stacks
- Backdrops
- Table Decor
- Business Decor
- Custom Setups

Each service card includes a short description and acts as a shortcut to matching portfolio examples. When a user selects a service card, the page scrolls to the portfolio section and applies the matching portfolio filter.

### Portfolio

The portfolio section presents a selected set of previous work in a responsive image grid. It helps visitors review the style, quality, and range of decoration work before making an enquiry.

Each portfolio card includes a guide starting price and an “Add to estimate” button. Portfolio images are clickable and can be opened in a larger modal view so users can inspect decoration details more clearly.

To avoid overloading the single-page layout, the portfolio does not need to show every completed project at once. Instead, it displays a limited number of representative items first, with fewer items shown on smaller screens and more items shown on larger screens.

### Portfolio Filtering and View More

The portfolio filtering controls are placed above the portfolio grid. They allow users to browse previous work by decoration type before viewing the images.

Users can filter portfolio examples by:

- All
- Balloon Arches
- Number Stacks
- Backdrops
- Table Decor
- Business Decor
- Custom Setups

When a filter is selected, JavaScript first finds the matching portfolio items and displays only the first limited group. A View More button replaces the current visible group with the next group of matching items instead of continuously adding more cards to the page.

A visible item counter shows the current range of displayed items, for example “Showing 1–6 of 18”. The counter updates when the user selects a new filter or clicks the View More button.

When the final matching group is reached, the button text changes from “View More” to “View First”. This allows the user to return to the first group of matching portfolio items without changing the selected filter.

This approach keeps the single-page layout compact, prevents large layout shifts, avoids overwhelming visitors with too many images at once, and still allows users to explore more examples when they choose to.

### Image Modal Gallery

The image modal gallery allows users to click a portfolio image and view it in a larger overlay without leaving the page. The modal can be closed using the close button, by clicking outside the image, or by pressing the Escape key.

This feature improves the user experience because visitors can inspect decoration details more clearly before making an enquiry.

JavaScript is used to:

- Detect which portfolio image was clicked.
- Update the modal image source and alt text dynamically.
- Open and close the modal.
- Handle keyboard interaction with the Escape key.
- Prevent errors if an image element or modal element is missing.

### Scroll Balloon Animation

When the user scrolls to selected sections, balloon graphics animate into view. This feature uses JavaScript to detect when a section enters the viewport.

### Interactive Estimate Builder

The interactive estimate builder allows users to build an approximate decoration quote while browsing the website. Users can add services to the estimate from service cards or portfolio cards, review selected items, remove items, and see the estimated guide price update dynamically.

A small sticky estimate widget remains visible while the user browses services and portfolio examples. On desktop and tablet screens, this appears as a compact floating widget. On mobile screens, it appears as a sticky bottom bar.

When users click “View estimate”, they can review the selected services in a larger estimate panel, modal, or bottom sheet depending on screen size. From there, users can continue to the enquiry form to request a final quote.

The estimate is clearly presented as a guide price only. Final pricing may depend on event date, location, setup requirements, and custom decoration details.

### How It Works

The How It Works section explains the booking and setup process from enquiry through completion. It uses simple steps, visual icons, or numbers to show how the customer moves from first contact to final event setup.

This section helps reduce uncertainty by showing visitors what to expect before they send an enquiry.

### Testimonials

The testimonials section shows short customer-style comments to support trust.

### Enquiry Form & Validation

The enquiry form checks required fields and email format before submission. It provides clear error messages for invalid input and a success message after valid submission.

The enquiry form works as the final step after the estimate builder. If users have selected services in the estimate builder, a compact “Your selected estimate” summary is shown above the form and the service dropdown is hidden to avoid duplicate choices.

If no estimate has been created, the form displays a “Service interested in” dropdown so users can still send an enquiry without using the estimate builder.

### Custom 404 Page

A custom 404 page gives users a clear route back to the main site without relying on browser navigation buttons.

---

## JavaScript Functionality

The project includes custom JavaScript to demonstrate significant interactive functionality.

### Services Carousel

The services section uses Swiper.js to provide a responsive carousel for service cards. A CSS-only horizontal scroll layout was considered first, but it did not provide reliable one-card movement on mobile swipe. Swiper was used to improve touch behaviour and keep the services section compact on smaller screens.

The custom project JavaScript checks that the services carousel element and Swiper library are available before initialising the carousel. This prevents console errors if the element or external library is unavailable.

**JavaScript concepts demonstrated:**

- DOM selection
- Defensive checks before running code
- External library initialisation
- Object configuration
- Responsive breakpoints
- Touch-friendly user interaction
- Error prevention

### Portfolio Filtering and View More

The portfolio section combines category filtering, grouped item display, a View More control, and a visible item counter. Users can filter portfolio items by decoration type, and only a limited number of matching items are displayed at one time. The View More button replaces the current visible group with the next group of matching items. When the final matching group is reached, the button changes to “View First”, allowing the user to return to the first group. The counter communicates the current range, such as “Showing 1–6 of 18”.

**JavaScript concepts demonstrated:**

- DOM selection
- Event listeners
- Conditional logic
- Class manipulation
- Dataset attributes
- Service-card-to-portfolio linking
- Counting matching items
- Calculating visible item ranges
- Updating text content dynamically
- Button state control
- Dynamic button text update
- User-controlled content reveal
- Responsive behaviour consideration
- User feedback

### Image Modal Gallery

The image modal lets users open and close larger portfolio images.

**JavaScript concepts demonstrated:**

- Click events
- Modal state control
- Keyboard events
- Dynamic image source update
- Accessibility consideration for user control

### Interactive Estimate Builder

The estimate builder allows users to add services to a running guide estimate. JavaScript stores the selected estimate items, updates the visible total, allows users to remove items, and controls the sticky estimate widget and estimate panel.

**JavaScript concepts demonstrated:**

- DOM selection
- Event listeners
- Arrays or objects for selected estimate items
- Add and remove item logic
- Conditional logic
- Number calculations
- Dynamic total updates
- Updating text content dynamically
- Class toggling for the estimate panel
- Empty-state handling
- User feedback

### Enquiry Form and Estimate Summary

The enquiry form is connected to the estimate builder. When users have selected estimate items, a compact summary is displayed above the form. The sticky estimate widget is hidden in the enquiry section to avoid duplicated information.

If the estimate is empty, the selected estimate summary is hidden and a “Service interested in” dropdown is displayed instead.

**JavaScript concepts demonstrated:**

- Conditional rendering
- DOM selection
- Class toggling
- Checking whether estimate items exist
- Showing and hiding form sections
- Updating the enquiry form based on selected estimate items
- Form validation

### Scroll-Triggered Balloon Animation

The scroll animation starts when a relevant section enters the viewport.

**JavaScript concepts demonstrated:**

- Intersection Observer API
- Class toggling
- Timing control
- User experience enhancement

---

## Technologies Used

### Main Technologies

- HTML5
- CSS3
- JavaScript

### Optional / Supporting Technologies

- Swiper.js — used to create the responsive services carousel with reliable touch/swipe behaviour on mobile devices.
- Google Fonts
- Git
- GitHub
- GitHub Pages

### Tools

- Visual Studio Code
- Chrome DevTools
- W3C HTML Validator
- W3C CSS Validator / Jigsaw
- JSLint or ESLint
- Lighthouse
- Figma
- TinyPNG or Squoosh for image optimisation

---

## Testing

Testing is planned and carried out during development, implementation, and after deployment.

The project follows a test-driven development approach where possible. Before implementing key interactive features, expected behaviours are identified and used to guide development. These expected behaviours are then checked through manual tests, validation tools, browser testing, and console checks.

The purpose of testing is to confirm that:

- Features work as expected.
- User actions produce relevant responses.
- Invalid input is handled properly.
- The site is responsive.
- The deployed version matches the local version.
- No console errors are caused by user actions.
- Internal links are not broken.

### Manual vs Automated Testing Explanation

#### Manual Testing

Manual testing is used to check the website from a real user’s perspective.

This includes:

- Clicking navigation links.
- Testing form validation.
- Opening and closing the modal gallery.
- Using the interactive estimate builder.
- Testing the portfolio filter, View More control, and visible item counter.
- Checking responsive layout in DevTools.
- Checking the deployed version against the local version.

Manual testing is useful when checking usability, layout, visual design, and real interaction flow.

#### Automated Testing

Automated testing is used where tools can quickly check code quality and technical standards.

This includes:

- W3C HTML validation.
- Jigsaw CSS validation.
- JavaScript linting.
- Lighthouse testing.
- Browser console checks.

### Manual Testing Checklist

| Feature                | Test                                                  | Expected Result                                                                              | Actual Result  | Status  |
| ---------------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------- | ------- |
| Navigation             | Click each navigation link                            | Correct section is shown                                                                     | Not tested yet | Pending |
| Hero CTA               | Click “View Portfolio”                                | Portfolio section is shown                                                                   | Not tested yet | Pending |
| Hero CTA               | Click “Request a Quote”                               | Contact section is shown                                                                     | Not tested yet | Pending |
| Services               | View services section                                 | Six service cards are displayed with image, heading, description, and Add to estimate button | Not tested yet | Pending |
| Services Carousel      | Swipe services carousel on mobile                     | Carousel moves through service cards one at a time                                           | Not tested yet | Pending |
| Services Carousel      | Click carousel navigation buttons                     | Previous or next service card is shown                                                       | Not tested yet | Pending |
| Services Carousel      | Click pagination bullet                               | Matching service slide is shown                                                              | Not tested yet | Pending |
| Services Carousel      | View services carousel on tablet and desktop          | Correct number of service cards is visible                                                   | Not tested yet | Pending |
| Services               | Click Add to estimate on a service card               | Service is added to the guide estimate                                                       | Not tested yet | Pending |
| Portfolio Section      | View initial portfolio grid                           | A limited number of portfolio items is displayed                                             | Not tested yet | Pending |
| Portfolio Filter       | Click “Balloon Arches”                                | Only balloon arch items are shown                                                            | Not tested yet | Pending |
| Portfolio Filter       | Click “Number Stacks”                                 | Only number stack items are shown                                                            | Not tested yet | Pending |
| Portfolio Filter       | Click “Backdrops”                                     | Only backdrop items are shown                                                                | Not tested yet | Pending |
| Portfolio Filter       | Click “All”                                           | First limited group of all portfolio items is shown                                          | Not tested yet | Pending |
| Portfolio Filter       | Select a new category                                 | Initial limited number of matching items is shown and counter resets                         | Not tested yet | Pending |
| Portfolio View More    | Click “View More”                                     | Current portfolio group is replaced with the next matching group                             | Not tested yet | Pending |
| Portfolio View More    | Reach the last matching group                         | Button text changes from “View More” to “View First”                                         | Not tested yet | Pending |
| Portfolio View More    | Click “View First”                                    | First matching portfolio group is shown and counter resets                                   | Not tested yet | Pending |
| Portfolio Counter      | View initial portfolio grid                           | Counter shows the current item range, for example “Showing 1–6 of 18”                        | Not tested yet | Pending |
| Portfolio Counter      | Click “View More”                                     | Counter updates to the next visible range                                                    | Not tested yet | Pending |
| Image Modal            | Click portfolio image                                 | Larger image opens                                                                           | Not tested yet | Pending |
| Image Modal            | Click close button                                    | Modal closes                                                                                 | Not tested yet | Pending |
| Image Modal            | Press Escape key                                      | Modal closes                                                                                 | Not tested yet | Pending |
| Estimate Builder       | Click “Add to estimate” on a service card             | Service is added to the estimate and total updates                                           | Not tested yet | Pending |
| Estimate Builder       | Click “Add to estimate” on a portfolio card           | Portfolio service is added to the estimate and total updates                                 | Not tested yet | Pending |
| Estimate Builder       | Open estimate panel                                   | Selected services and current total are shown                                                | Not tested yet | Pending |
| Estimate Builder       | Remove selected item                                  | Item is removed and total updates                                                            | Not tested yet | Pending |
| Estimate Builder       | Clear estimate                                        | Selected items are removed and total resets                                                  | Not tested yet | Pending |
| Sticky Estimate Widget | Add item and scroll page                              | Current estimate total remains visible while browsing                                        | Not tested yet | Pending |
| How It Works           | Review process steps                                  | Booking and setup process is clear and easy to follow                                        | Not tested yet | Pending |
| Enquiry Form           | Submit empty form                                     | Error messages are shown                                                                     | Not tested yet | Pending |
| Enquiry Form           | Submit invalid email                                  | Email error is shown                                                                         | Not tested yet | Pending |
| Enquiry Form           | Submit valid data                                     | Success message is shown                                                                     | Not tested yet | Pending |
| Enquiry Form           | Open form after adding estimate items                 | Selected estimate summary is shown and service dropdown is hidden                            | Not tested yet | Pending |
| Enquiry Form           | Open form without adding estimate items               | Selected estimate summary is hidden and service dropdown is shown                            | Not tested yet | Pending |
| Enquiry Form           | Scroll to enquiry section with estimate widget active | Sticky estimate widget is hidden to avoid duplicate estimate information                     | Not tested yet | Pending |
| Scroll Animation       | Scroll to animation section                           | Balloons animate into view                                                                   | Not tested yet | Pending |
| Responsive Layout      | Test mobile screen                                    | Layout remains readable                                                                      | Not tested yet | Pending |
| Responsive Layout      | Test tablet screen                                    | Layout remains readable                                                                      | Not tested yet | Pending |
| Responsive Layout      | Test desktop screen                                   | Layout remains readable                                                                      | Not tested yet | Pending |
| 404 Page               | Open non-existent URL                                 | Custom 404 page appears                                                                      | Not tested yet | Pending |
| 404 Page               | Click return button                                   | User returns to main page                                                                    | Not tested yet | Pending |
| Console                | Perform all user actions                              | No console errors                                                                            | Not tested yet | Pending |
| Internal Links         | Check all internal links                              | No broken links                                                                              | Not tested yet | Pending |
| External Links         | Click external links                                  | Opens in new tab                                                                             | Not tested yet | Pending |

### Responsiveness Testing

| Device / Width | Expected Result                        | Status  |
| -------------- | -------------------------------------- | ------- |
| 320px mobile   | Content fits without horizontal scroll | Pending |
| 375px mobile   | Navigation and sections remain usable  | Pending |
| 768px tablet   | Layout adapts correctly                | Pending |
| 1024px laptop  | Content spacing is balanced            | Pending |
| 1440px desktop | Full layout displays professionally    | Pending |

### Accessibility Testing

| Area     | Test                             | Expected Result               | Status  |
| -------- | -------------------------------- | ----------------------------- | ------- |
| Headings | Check heading order              | Logical structure             | Pending |
| Images   | Check alt text                   | Meaningful alt text provided  | Pending |
| Keyboard | Tab through page                 | Focus is visible              | Pending |
| Forms    | Check labels                     | Inputs have associated labels | Pending |
| Colour   | Check contrast                   | Text remains readable         | Pending |
| Modal    | Close control available          | User can close modal easily   | Pending |
| Motion   | Animation does not block content | Animation is decorative only  | Pending |

### Validation

#### HTML Validation

HTML will be tested using the official W3C validator.

![HTML validation screenshot](assets/testing/html-validation.webp)

**Result:** Pending.

#### CSS Validation

CSS will be tested using the official Jigsaw CSS validator.

![CSS validation screenshot](assets/testing/css-validation.webp)

**Result:** Pending.

#### JavaScript Linting

JavaScript will be tested using a linter.

![JavaScript linter screenshot](assets/testing/javascript-linter.webp)

**Result:** Pending.

#### Lighthouse Testing

The deployed website will be tested using Lighthouse in Chrome DevTools.

![Lighthouse report](assets/testing/lighthouse.webp)

### Planned Lighthouse Targets

| Category       | Target |
| -------------- | -----: |
| Performance    |    80+ |
| Accessibility  |    90+ |
| Best Practices |    90+ |
| SEO            |    90+ |

### Screenshots Aligned to User Stories

#### US1 — Understand the Business

![Hero section screenshot](assets/testing/us1-hero.webp)

#### US3 — Browse Portfolio Examples

![Portfolio section screenshot](assets/testing/us3-portfolio.webp)

#### US4 — Filter and View More Portfolio Examples

![Portfolio filter, View More and counter screenshot](assets/testing/us4-portfolio-filter-view-more.webp)

#### US5 — View Images Clearly

![Image modal screenshot](assets/testing/us5-image-modal.webp)

#### US6 — Build a Guide Estimate

![Estimate builder screenshot](assets/testing/us6-estimate-builder.webp)

#### US7 — Understand the Booking Process

![How It Works screenshot](assets/testing/us7-how-it-works.webp)

#### US8 — Send an Enquiry

![Enquiry Form screenshot](assets/testing/us8-contact-form.webp)

#### US9 — Recover from a Wrong Page

![Custom 404 page screenshot](assets/testing/us9-404-page.webp)

---

## Bugs

| Bug                                                  | Cause                                        | Fix                                                          | Status   |
| ---------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------ | -------- |
| Portfolio cards did not return after selecting “All” | Incorrect condition in filter function       | Updated logic to check for `all` category                    | ✅ Fixed |
| Modal image remained open after clicking outside     | Missing event listener on overlay            | Added click listener to close modal when overlay is selected | ✅ Fixed |
| Estimate total returned `NaN`                        | Selected price values were stored as strings | Used `Number()` before calculation                           | ✅ Fixed |
| Form accepted empty name field                       | Missing presence check                       | Added validation for required fields                         | ✅ Fixed |
| Balloon animation repeated too often                 | Observer did not unobserve section           | Added `observer.unobserve()` after first animation           | ✅ Fixed |
| Mobile cards had uneven spacing                      | CSS gap not applied consistently             | Standardised card grid spacing                               | ✅ Fixed |

### Known Bugs

At the time of final deployment, there are no known unfixed bugs.

---

## Deployment

The project was deployed to **GitHub Pages**.

### Deployment Steps

1. Create a GitHub repository.
2. Push the project files to GitHub.
3. Open the repository on GitHub.
4. Go to **Settings**.
5. Select **Pages**.
6. Under **Build and deployment**, choose:
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/root`
7. Save the settings.
8. Wait for GitHub Pages to build the site.
9. Open the live URL.
10. Test the deployed version against the local version.

### Local Development

To run the project locally:

```bash
python3 -m http.server
```

Then open:

```text
http://localhost:8000
```

### Custom 404 Page

A `404.html` file is included in the project root. GitHub Pages automatically serves this page when a user opens a non-existent route.

The 404 page includes a clear message and a button that returns the user to the main page.

---

## Attribution, Credits and Acknowledgements

### Attribution

- **Swiper.js:** Used for the responsive services carousel to provide reliable mobile swipe behaviour, pagination, navigation controls, and responsive slide layout. Swiper was loaded from CDN and configured with custom JavaScript for this project.
- **Google Fonts:** Used for typography.
- **Font Awesome / Bootstrap Icons:** Used for decorative and interface icons.
- **Unsplash / Pexels / Own Images:** Used for event decoration images.
- **MDN Web Docs:** Used as a reference for JavaScript, DOM methods, forms, and Intersection Observer.
- **W3C Validator:** Used for HTML validation.
- **Jigsaw CSS Validator:** Used for CSS validation.
- **Chrome DevTools Lighthouse:** Used for performance and accessibility checks.
- **ChatGPT:** Used for planning support, wording assistance, README structure, and debugging explanations. All generated content was reviewed, edited, and implemented by me.

### Code Attribution

All custom HTML, CSS, and JavaScript code was written by me.

Any external code, libraries, or tutorials used in the project are clearly attributed in comments above the relevant code and documented in this README.

---

## Assessment Checklist: Pass / Merit / Distinction

This checklist tracks how the project addresses the Unit 2 requirements.

### Learning Outcome 1 — Design, Develop and Implement a Dynamic Front End Web Application

- [x] **1.1** Designed a web application that meets accessibility guidelines, follows UX principles, uses structured layout and navigation, and meets its purpose.
- [x] **1.2** Designed interactivity that lets the user initiate and control actions and receive feedback.
- [ ] **1.3** Wrote custom JavaScript, HTML, and CSS to create a responsive front-end web application with significant interactive functionality.
- [ ] **1.4** Wrote JavaScript code to produce relevant responses to user actions.
- [ ] **1.5** Implemented images and graphics with usable resolution, legible text, consistent styling, and non-distracting foregrounds.
- [x] **M(i)** Designed the web application using UX principles so information and resources are easy to find intuitively.

### Learning Outcome 2 — Front End Interactivity

- [ ] **2.1** JavaScript passes through a linter with no major issues; HTML and CSS are validated.
- [ ] **2.2** JavaScript functions use compound statements such as if statements and loops.
- [ ] **2.3** Empty or invalid input data is handled intelligently.
- [ ] **2.4** Working functionality is implemented for all project requirements.
- [ ] **2.5** JavaScript is organised in external files linked at the bottom of the body; CSS is in external files linked in the head.
- [ ] **2.6** Code meets readability standards with comments, indentation, and meaningful naming.
- [ ] **2.7** Files are named consistently and descriptively without spaces or capitalisation.
- [ ] **2.8** User actions do not generate internal errors or console errors.
- [ ] **2.9** Code and assets are organised in directories by file type.
- [ ] **M(iv)** A custom 404 page gives users a clear route back to the main page without needing browser navigation buttons.

### Learning Outcome 3 — Testing

- [x] **3.1** Explained the principles of automated and manual testing.
- [ ] **3.2** Designed and implemented testing procedures to assess functionality, usability, and responsiveness.
- [ ] **3.3** Inserted screenshots of the finished project aligned to relevant user stories.
- [ ] **3.4** Applied test procedures during development and after deployment.
- [ ] **3.5** Fully documented testing results.

### Learning Outcome 4 — Deployment

- [ ] **4.1** Deployed the final version to GitHub Pages.
- [ ] **4.2** Ensured the deployed application is free of commented-out code and broken internal links.
- [ ] **4.3** Used Git and GitHub for version control.

### Learning Outcome 5 — Version Control and Documentation

- [x] **5.1** Documented the full development cycle through commits and README.
- [x] **5.2** Wrote a README explaining the project purpose and value to users.
- [x] **5.3** Clearly separated custom code from external sources and attributed external code.
- [x] **5.4** Used consistent and effective markdown formatting.
- [ ] **M(v)** Committed often, with small and well-defined commits.
- [x] **M(vi)** Presented a clear rationale for the project and target audience.
- [x] **M(vii)** Documented UX design work, wireframes, mockups, and reasoning.
- [ ] **M(viii)** Documented testing fully, including bugs found and fixes.
- [ ] **M(ix)** Fully documented the deployment procedure.

---

## Repo Structure

```text
assets/
  css/
    style.css
  js/
    script.js
  images/
    hero/
    portfolio/
    services/
  icons/
  mockups/
  testing/
  wireframes/
404.html
index.html
README.md
```

---

## Future Improvements

Possible future improvements include:

- Real backend form submission.
- Dedicated portfolio page for a larger archive of completed projects.
- Admin panel for uploading new portfolio images.
- Booking calendar integration.
- Customer review submission.
- Multi-language support.
- Advanced animation controls.
- Real product/package database.
- Save estimate choices between visits using local storage.
- Payment or deposit functionality.
