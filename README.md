# Balloon Decor Studio – Interactive Front End Website

![Mockup image](assets/mockups/mockup.webp)

**Live Website:** https://your-github-username.github.io/balloon-decor-studio/

## Overview

Balloon Decor Studio is an interactive front-end website for a small event decoration business specialising in balloon compositions, wedding stage decoration, birthday decorations, photo zones, and custom event styling.

The project has two connected purposes. For the business, it presents decoration services, previous work, guide price information, and a simple enquiry route for potential customers. For the assessment, it demonstrates a dynamic and user-centred front-end web application with meaningful JavaScript interactivity, clear UX design, accessibility considerations, responsive layout, testing evidence, and professional documentation.

The website is designed to allow visitors to explore services, filter portfolio examples, view images in a modal gallery, estimate decoration costs, interact with scroll-triggered animations, and submit a validated enquiry form.

The main project focus is front-end development. The contact form includes JavaScript validation and simulated submission, with the option to extend it in the future using server-side or serverless form processing.

---

## Table of Contents

1. [Project Goals](#project-goals)
2. [Target Audience](#target-audience)
3. [Success Criteria](#success-criteria)
4. [Five Planes of UX](#five-planes-of-ux)
   - [Strategy](#strategy)
   - [Scope](#scope)
   - [Structure](#structure)
   - [Skeleton / Wireframes](#skeleton--wireframes)
   - [Surface](#surface)
5. [Development Plan](#development-plan)
6. [User Stories](#user-stories)
7. [Features](#features)
8. [JavaScript Functionality](#javascript-functionality)
9. [Technologies Used](#technologies-used)
10. [Testing](#testing)
11. [Bugs](#bugs)
12. [Deployment](#deployment)
13. [Attribution, Credits and Acknowledgements](#attribution-credits-and-acknowledgements)
14. [Assessment Checklist](#assessment-checklist-pass--merit--distinction)
16. [Repo Structure](#repo-structure)
17. [Commit Message Examples](#commit-message-examples)
18. [Future Improvements](#future-improvements)

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

## Success Criteria

This project is successful when:

- The website purpose is immediately clear to a first-time visitor.
- Navigation is simple, consistent, and intuitive.
- The site uses site-specific content and images instead of placeholder content.
- JavaScript provides meaningful responses to user actions.
- Portfolio filtering works correctly.
- Users can open portfolio images in a larger modal view and close the modal without page errors or console errors.
- The price estimator calculates and displays a relevant estimate.
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

- **Clarity:** visitors can quickly understand what decoration services are available and which event types are supported.
- **Confidence:** visitors can review visual examples, service information, testimonials, and guide price information before making contact.
- **Action:** visitors have clear routes to browse previous work, estimate a guide price, and send an enquiry without unnecessary friction.

---

## Scope

### Key Features

The project includes the following user-facing features:

- **Hero:** introduces the business and explains the main service offer.
- **Call-to-Action Buttons:** guide users towards viewing the portfolio, estimating a guide price, or sending an enquiry.
- **Main Navigation:** allows users to move between the main sections of the page.
- **Services:** explains the main decoration services available.
- **Portfolio Filter:** allows users to browse previous work by event type.
- **Image Modal Gallery:** allows users to view portfolio images in a larger overlay.
- **Scroll Balloon Animation:** adds decorative movement when selected sections enter the viewport.
- **Price Estimator:** gives users an approximate guide price based on selected options.
- **Testimonials:** supports trust through short customer-style comments.
- **Contact Form Validation:** checks required user input before submission.
- **Success Message:** confirms when a valid enquiry has been submitted.
- **Custom 404 Page:** helps users return to the main page if they open a non-existent route.

The selected features support the three strategy priorities:

- **Clarity:** Hero, Main Navigation, Services, and Call-to-Action Buttons help users understand the website quickly.
- **Confidence:** Portfolio Filter, Image Modal Gallery, Price Estimator, and Testimonials help users evaluate the service before making contact.
- **Action:** Call-to-Action Buttons, Price Estimator, Contact Form Validation, Success Message, and the Custom 404 Page help users move towards enquiry and complete tasks without unnecessary friction.

### Feature Prioritisation Method

Features were prioritised by balancing user value, business value, assessment requirements, and realistic implementation scope.

**Score = Importance (1–5) × Feasibility (1–5)**

| Feature | Importance | Feasibility | Score |
|---|---:|---:|---:|
| Hero | 5 | 5 | 25 |
| Main Navigation | 5 | 5 | 25 |
| Services Section | 5 | 5 | 25 |
| Portfolio Filter | 5 | 4 | 20 |
| Contact Form Validation | 5 | 4 | 20 |
| Image Modal Gallery | 4 | 4 | 16 |
| Price Estimator | 4 | 4 | 16 |
| Custom 404 Page | 4 | 4 | 16 |
| Testimonials | 3 | 5 | 15 |
| Call-to-Action Buttons | 3 | 5 | 15 |
| Scroll Balloon Animation | 4 | 3 | 12 |

---

## Structure

### Information Architecture

The website uses a single-page structure with sections arranged to support a typical customer journey from initial interest to enquiry:

1. **Hero** — introduces the business and gives users clear first actions.
2. **Services** — explains what types of decoration are available.
3. **Portfolio** — shows previous work and allows users to filter examples by event type.
4. **How It Works** — explains the basic enquiry and decoration process.
5. **Price Estimator** — gives users a guide price before making contact.
6. **Testimonials** — provides trust signals through customer-style feedback.
7. **Contact Form** — allows users to send an enquiry.
8. **Footer** — repeats key links and contact information.

### Navigation and Interaction Model

The navigation and interaction model supports the user journey by helping visitors move between key sections, control interactive elements, and recover from invalid routes.

- The main navigation uses anchor links to key page sections.
- Hero buttons link directly to Portfolio, Price Estimator, and Contact Form.
- Portfolio filter buttons allow users to control which examples are displayed.
- The image modal can be opened and closed by the user.
- The price estimator responds to user selections.
- The contact form provides feedback after validation.
- Footer links repeat important routes for convenience.
- External links open in a new tab where appropriate.
- A custom 404 page provides a route back to the main page.

### Semantic Markup

The project uses semantic HTML to give the page a clear and meaningful structure:

- `header` contains the main navigation and hero area.
- `main` contains the primary page content.
- `section` elements divide the page into clear content areas such as services, portfolio, price estimator, testimonials, and contact.
- `article` elements are used for self-contained content blocks such as service cards, portfolio items, and testimonials.
- `form` is used for the enquiry form.
- `footer` contains repeated navigation links and contact information.

---

## Skeleton / Wireframes

Wireframes were created to plan the page layout, content hierarchy, and responsive structure before development.

| Mobile | Desktop |
|---|---|
| Mobile wireframe | Desktop wireframe |

The wireframes show the planned placement of key sections, including the hero area, services, portfolio filter, price estimator, testimonials, and contact form.

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

The project was developed incrementally so that each stage produced a usable improvement before the next stage was started.

### Stage 1 — Project Setup and File Structure

**Goal:** Create the project foundation and organise the files before building the website.

**Outcome:** The project folder structure was created, with separate areas for HTML, CSS, JavaScript, images, wireframes, mockups, and testing assets.

### Stage 2 — Responsive Page Structure and Core Content

**Goal:** Build the main page sections and create a responsive structure from the start.

**Outcome:** The hero, call-to-action buttons, main navigation, services, How It Works, portfolio content, testimonials, contact form layout, and footer were added. Responsive layout decisions were considered while building these sections.

### Stage 3 — JavaScript Interactivity and User Feedback

**Goal:** Add meaningful user-controlled JavaScript functionality.

**Outcome:** Portfolio filtering, image modal gallery, price estimator logic, contact form validation, success feedback, and scroll-triggered animation were implemented.

### Stage 4 — Error Recovery, Refinement and Accessibility Checks

**Goal:** Improve the user experience and check that the interface remained clear, usable, and accessible.

**Outcome:** The custom 404 page was added, and the layout, spacing, image presentation, buttons, form feedback, keyboard controls, and visual consistency were reviewed and refined.

### Stage 5 — Testing, Deployment and Documentation

**Goal:** Prepare the project for final submission and deployment.

**Outcome:** Manual testing, responsiveness testing, accessibility checks, validation, bug documentation, deployment to GitHub Pages, attribution, and README documentation were completed.

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

As a visitor, I want to see the types of decoration available so that I can decide whether the business offers what I need.

**Acceptance Criteria:**

- Services are displayed in clear cards.
- Each service has a short description.
- The layout remains readable on mobile and desktop.

#### US3 — Filter Portfolio Examples

As a visitor, I want to filter the portfolio by event type so that I can quickly find examples relevant to my event.

**Acceptance Criteria:**

- Portfolio filter buttons are visible.
- Clicking a category shows only relevant items.
- The active filter is visually highlighted.
- The user receives visual feedback after selecting a filter.

#### US4 — View Images Clearly

As a visitor, I want to open portfolio images in a larger view so that I can see decoration details more clearly.

**Acceptance Criteria:**

- Clicking an image opens a modal.
- The modal shows a larger image.
- The modal can be closed by a close button.
- The modal can be closed using the Escape key.
- No console errors occur.

#### US5 — Estimate Price

As a visitor, I want to estimate the approximate cost of decoration so that I can understand whether the service may fit my budget.

**Acceptance Criteria:**

- The user can select event type, package size, and optional extras.
- The estimated price updates after user choices.
- Empty or invalid selections are handled.
- The result is clearly displayed.

#### US6 — Send an Enquiry

As a visitor, I want to submit an enquiry so that I can contact the decoration provider.

**Acceptance Criteria:**

- Required fields are validated.
- Empty input is rejected.
- Invalid email format is rejected.
- The user sees clear error messages.
- A success message appears after valid submission.

#### US7 — Recover from a Wrong Page

As a visitor, I want to return to the main page if I open a non-existent page so that I do not feel stuck.

**Acceptance Criteria:**

- A custom 404 page is provided.
- The page explains that the requested page was not found.
- A clear button returns the user to the home page.

### Site Owner

#### US8 — Present Work Professionally

As the site owner, I want to present previous work clearly so that potential clients trust the quality of the service.

**Acceptance Criteria:**

- Portfolio examples are organised by category.
- Images are clear and consistent.
- Text is specific and relevant.
- The visual design matches the business purpose.

#### US9 — Maintain the Website

As the site owner, I want the code and assets to be organised clearly so that the website can be maintained and updated.

**Acceptance Criteria:**

- Files are grouped by type.
- File names are lowercase and descriptive.
- HTML, CSS, and JavaScript are separated.
- JavaScript functions use meaningful names.
- External code and assets are attributed.

---

## Features

The following features are planned for the final website.

### Hero

The hero section gives visitors an immediate understanding of what the business does, what type of events it supports, and what action they can take next.

### Call-to-Action Buttons

Call-to-action buttons help visitors move quickly to the most important parts of the website, such as the portfolio, price estimator, and contact form.

They support the user journey by giving visitors clear next steps after they understand what the business offers.

### Main Navigation

The navigation menu allows users to move between sections of the page.

### Services

The services section explains the main decoration services offered by the business. It helps visitors understand what can be provided before they view detailed examples in the portfolio.

The section includes short service descriptions for:

- Balloon garlands and arches
- Wedding and ceremony decoration
- Birthday party decoration
- Baby shower decoration
- Corporate event decoration
- Photo zones, backdrops, and stage styling
- Custom event decoration

### Portfolio Filter

The portfolio filter allows users to browse previous work by event type. This helps visitors quickly find examples that match the kind of event they are planning.

Users can filter portfolio examples by:

- All
- Weddings
- Birthdays
- Baby Showers
- Corporate Events
- Stage Decor

JavaScript is used to show and hide portfolio cards based on the selected category. The active filter button gives visual feedback so the user can see which category is currently selected.

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

### Price Estimator

Users can select event options and receive an approximate decoration price.

### Contact Form Validation

The contact form checks required fields and email format before submission. It provides clear error messages for invalid input and a success message after valid submission.

### Testimonials

The testimonials section shows short customer-style comments to support trust.

### Custom 404 Page

A custom 404 page gives users a clear route back to the main site without relying on browser navigation buttons.

---

## JavaScript Functionality

The project includes custom JavaScript to demonstrate significant interactive functionality.

### Portfolio Filtering

The portfolio filter allows users to control which category of work is displayed.

**JavaScript concepts demonstrated:**

- DOM selection
- Event listeners
- Conditional logic
- Class manipulation
- Dataset attributes
- User feedback

### Image Modal Gallery

The image modal lets users open and close larger portfolio images.

**JavaScript concepts demonstrated:**

- Click events
- Modal state control
- Keyboard events
- Dynamic image source update
- Accessibility consideration for user control

### Price Estimator

Users can select event options, package size, and optional extras to receive an approximate decoration price. The estimate is intended as a guide price rather than a final quote.

**JavaScript concepts demonstrated:**

- Form input reading
- Compound statements
- If statements
- Number calculations
- Validation
- Dynamic text output

### Contact Form Validation

The contact form validates user input before showing a success message.

**JavaScript concepts demonstrated:**

- Presence checks
- Email format checks
- Error messages
- Preventing default form submission
- Defensive programming
- User feedback

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

- Bootstrap 5.3
- Google Fonts
- Font Awesome or Bootstrap Icons
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

Testing was carried out during development, implementation, and after deployment.

The purpose of testing was to confirm that:

- Features work as expected.
- User actions produce relevant responses.
- Invalid input is handled properly.
- The site is responsive.
- The deployed version matches the local version.
- No console errors are caused by user actions.
- Internal links are not broken.

### Manual vs Automated Testing Explanation

#### Manual Testing

Manual testing was used to check the website from a real user’s perspective.

This included:

- Clicking navigation links.
- Testing form validation.
- Opening and closing the modal gallery.
- Using the price estimator.
- Testing the portfolio filter.
- Checking responsive layout in DevTools.
- Checking the deployed version against the local version.

Manual testing is useful when checking usability, layout, visual design, and real interaction flow.

#### Automated Testing

Automated testing was used where tools could quickly check code quality and technical standards.

This included:

- W3C HTML validation.
- Jigsaw CSS validation.
- JavaScript linting.
- Lighthouse testing.
- Browser console checks.

### Manual Testing Checklist

| Feature | Test | Expected Result | Actual Result | Status |
|---|---|---|---|---|
| Navigation | Click each navigation link | Correct section is shown | Works as expected | ✅ Pass |
| Hero CTA | Click “View Portfolio” | Portfolio section is shown | Works as expected | ✅ Pass |
| Hero CTA | Click “Request a Quote” | Contact section is shown | Works as expected | ✅ Pass |
| Portfolio Filter | Click “Weddings” | Only wedding items are shown | Works as expected | ✅ Pass |
| Portfolio Filter | Click “Birthdays” | Only birthday items are shown | Works as expected | ✅ Pass |
| Portfolio Filter | Click “All” | All portfolio items are shown | Works as expected | ✅ Pass |
| Image Modal | Click portfolio image | Larger image opens | Works as expected | ✅ Pass |
| Image Modal | Click close button | Modal closes | Works as expected | ✅ Pass |
| Image Modal | Press Escape key | Modal closes | Works as expected | ✅ Pass |
| Price Estimator | Select valid options | Estimated price is displayed | Works as expected | ✅ Pass |
| Price Estimator | Leave fields empty | Error or guidance is shown | Works as expected | ✅ Pass |
| Contact Form | Submit empty form | Error messages are shown | Works as expected | ✅ Pass |
| Contact Form | Submit invalid email | Email error is shown | Works as expected | ✅ Pass |
| Contact Form | Submit valid data | Success message is shown | Works as expected | ✅ Pass |
| Scroll Animation | Scroll to animation section | Balloons animate into view | Works as expected | ✅ Pass |
| Responsive Layout | Test mobile screen | Layout remains readable | Works as expected | ✅ Pass |
| Responsive Layout | Test tablet screen | Layout remains readable | Works as expected | ✅ Pass |
| Responsive Layout | Test desktop screen | Layout remains readable | Works as expected | ✅ Pass |
| 404 Page | Open non-existent URL | Custom 404 page appears | Works as expected | ✅ Pass |
| 404 Page | Click return button | User returns to main page | Works as expected | ✅ Pass |
| Console | Perform all user actions | No console errors | Works as expected | ✅ Pass |
| Internal Links | Check all internal links | No broken links | Works as expected | ✅ Pass |
| External Links | Click external links | Opens in new tab | Works as expected | ✅ Pass |

### Responsiveness Testing

| Device / Width | Expected Result | Status |
|---|---|---|
| 320px mobile | Content fits without horizontal scroll | ✅ Pass |
| 375px mobile | Navigation and sections remain usable | ✅ Pass |
| 768px tablet | Layout adapts correctly | ✅ Pass |
| 1024px laptop | Content spacing is balanced | ✅ Pass |
| 1440px desktop | Full layout displays professionally | ✅ Pass |

### Accessibility Testing

| Area | Test | Expected Result | Status |
|---|---|---|---|
| Headings | Check heading order | Logical structure | ✅ Pass |
| Images | Check alt text | Meaningful alt text provided | ✅ Pass |
| Keyboard | Tab through page | Focus is visible | ✅ Pass |
| Forms | Check labels | Inputs have associated labels | ✅ Pass |
| Colour | Check contrast | Text remains readable | ✅ Pass |
| Modal | Close control available | User can close modal easily | ✅ Pass |
| Motion | Animation does not block content | Animation is decorative only | ✅ Pass |

### Validation

#### HTML Validation

HTML was tested using the official W3C validator.

![HTML validation screenshot](assets/testing/html-validation.webp)

**Result:** No major issues found.

#### CSS Validation

CSS was tested using the official Jigsaw CSS validator.

![CSS validation screenshot](assets/testing/css-validation.webp)

**Result:** No major issues found.

#### JavaScript Linting

JavaScript was tested using a linter.

![JavaScript linter screenshot](assets/testing/javascript-linter.webp)

**Result:** No major issues found.

#### Lighthouse Testing

The deployed website was tested using Lighthouse in Chrome DevTools.

![Lighthouse report](assets/testing/lighthouse.webp)

### Planned Lighthouse Targets

| Category | Target |
|---|---:|
| Performance | 80+ |
| Accessibility | 90+ |
| Best Practices | 90+ |
| SEO | 90+ |

### Screenshots Aligned to User Stories

#### US1 — Understand the Business

![Hero section screenshot](assets/testing/us1-hero.webp)

#### US3 — Filter Portfolio Examples

![Portfolio filter screenshot](assets/testing/us3-portfolio-filter.webp)

#### US4 — View Images Clearly

![Image modal screenshot](assets/testing/us4-image-modal.webp)

#### US5 — Estimate Price

![Price estimator screenshot](assets/testing/us5-price-estimator.webp)

#### US6 — Send an Enquiry

![Contact form screenshot](assets/testing/us6-contact-form.webp)

#### US7 — Responsive Experience

![Responsive screenshot](assets/testing/us7-responsive.webp)

---

## Bugs

| Bug | Cause | Fix | Status |
|---|---|---|---|
| Portfolio cards did not return after selecting “All” | Incorrect condition in filter function | Updated logic to check for `all` category | ✅ Fixed |
| Modal image remained open after clicking outside | Missing event listener on overlay | Added click listener to close modal when overlay is selected | ✅ Fixed |
| Price estimator returned `NaN` | String values were not converted to numbers | Used `Number()` before calculation | ✅ Fixed |
| Form accepted empty name field | Missing presence check | Added validation for required fields | ✅ Fixed |
| Balloon animation repeated too often | Observer did not unobserve section | Added `observer.unobserve()` after first animation | ✅ Fixed |
| Mobile cards had uneven spacing | CSS gap not applied consistently | Standardised card grid spacing | ✅ Fixed |

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

- **Bootstrap 5.3:** Used for responsive grid and layout utilities.
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

This checklist confirms how the project addresses the Unit 2 requirements.

### Learning Outcome 1 — Design, Develop and Implement a Dynamic Front End Web Application

- [x] **1.1** Designed a web application that meets accessibility guidelines, follows UX principles, uses structured layout and navigation, and meets its purpose.
- [x] **1.2** Designed interactivity that lets the user initiate and control actions and receive feedback.
- [x] **1.3** Wrote custom JavaScript, HTML, and CSS to create a responsive front-end web application with significant interactive functionality.
- [x] **1.4** Wrote JavaScript code to produce relevant responses to user actions.
- [x] **1.5** Implemented images and graphics with usable resolution, legible text, consistent styling, and non-distracting foregrounds.
- [x] **M(i)** Designed the web application using UX principles so information and resources are easy to find intuitively.

### Learning Outcome 2 — Front End Interactivity

- [x] **2.1** JavaScript passes through a linter with no major issues; HTML and CSS are validated.
- [x] **2.2** JavaScript functions use compound statements such as if statements and loops.
- [x] **2.3** Empty or invalid input data is handled intelligently.
- [x] **2.4** Working functionality is implemented for all project requirements.
- [x] **2.5** JavaScript is organised in external files linked at the bottom of the body; CSS is in external files linked in the head.
- [x] **2.6** Code meets readability standards with comments, indentation, and meaningful naming.
- [x] **2.7** Files are named consistently and descriptively without spaces or capitalisation.
- [x] **2.8** User actions do not generate internal errors or console errors.
- [x] **2.9** Code and assets are organised in directories by file type.
- [x] **M(iv)** A custom 404 page redirects users back to the main page without needing browser navigation buttons.

### Learning Outcome 3 — Testing

- [x] **3.1** Explained the principles of automated and manual testing.
- [x] **3.2** Designed and implemented testing procedures to assess functionality, usability, and responsiveness.
- [x] **3.3** Inserted screenshots of the finished project aligned to relevant user stories.
- [x] **3.4** Applied test procedures during development and after deployment.
- [x] **3.5** Fully documented testing results.

### Learning Outcome 4 — Deployment

- [x] **4.1** Deployed the final version to GitHub Pages.
- [x] **4.2** Ensured the deployed application is free of commented-out code and broken internal links.
- [x] **4.3** Used Git and GitHub for version control.

### Learning Outcome 5 — Version Control and Documentation

- [x] **5.1** Documented the full development cycle through commits and README.
- [x] **5.2** Wrote a README explaining the project purpose and value to users.
- [x] **5.3** Clearly separated custom code from external sources and attributed external code.
- [x] **5.4** Used consistent and effective markdown formatting.
- [x] **M(v)** Committed often, with small and well-defined commits.
- [x] **M(vi)** Presented a clear rationale for the project and target audience.
- [x] **M(vii)** Documented UX design work, wireframes, mockups, and reasoning.
- [x] **M(viii)** Documented testing fully, including bugs found and fixes.
- [x] **M(ix)** Fully documented the deployment procedure.

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

## Commit Message Examples

Examples of small, clear commits used during development:

```text
Initial project setup with folder structure
Add hero section and main navigation
Add services section layout
Add portfolio cards and category data
Implement portfolio filter functionality
Add image modal gallery
Add price estimator form
Add contact form validation
Add scroll-triggered balloon animation
Improve responsive layout for mobile screens
Add custom 404 page
Fix portfolio filter reset bug
Add manual testing documentation
Add deployment instructions to README
Update attribution section
Final cleanup before deployment
```

---

## Future Improvements

Possible future improvements include:

- Real backend form submission.
- Admin panel for uploading new portfolio images.
- Booking calendar integration.
- Customer review submission.
- Multi-language support.
- Advanced animation controls.
- Real product/package database.
- Payment or deposit functionality.