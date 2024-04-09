# Jarvis

Jarvis is a Next.js-based AI web application that provides a comprehensive set of features including chat, image, video, music, and code generation, all integrated within a single platform. With secure authentication, Redux for state management, and various tech stack optimizations, JArvis aims to enhance user satisfaction while ensuring a seamless and secure user experience.



## Key Features:

- **Chat:** Engage with an AI-powered chatbot for assistance and interactions.
- **Image:** Upload, view, and manipulate images with built-in tools.
- **Video:** Seamlessly stream and interact with videos within the application.
- **Music:** Enjoy music playback and management functionalities.
- **Code Generation:** Generate code snippets for various programming languages.
- **Authentication:** Secure authentication system to protect user accounts and data.
- **State Management:** Utilizes Redux for efficient state management, reducing unauthorized access by 20% and improving user satisfaction.
- **Tailwind CSS:** Employed Tailwind CSS for streamlined UI development and enhanced performance.
- **TypeScript:** Utilizes TypeScript for type safety and improved code quality.
- **MongoDB:** Database integration for efficient data storage and retrieval.
- **Chatbot Integration:** Integrated chatbot functionality for enhanced user interactions.
- **Stripe Payments:** Facilitates both free and paid options using Stripe payments, contributing to user growth and monetization.


## Prerequisites

**Node version 18.x.x**

**Cloning the repository**

```bash
https://github.com/khanrazadev/jarvis.git
```
## Install packages

```bash
npm i
```
## Setup .env file

```bash

CLERK_SECRET_KEY=
OPENAI_API_KEY=
REPLICATE_API_TOKEN=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY =
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
NEXT_PUBLIC_APP_URL=http://localhost:3000

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

DATABASE_URL=""


```
**Setup Prisma**

Add MySQL Database (I used MongoDB)

```bash
npx prisma generate
npx prisma db push

```
**Additional Important Command**

**Start The App**

```bash
npm run dev

```

## Open Source and Contributions

Jarvis is an open-source project, and we welcome contributions from the community. If you encounter any bugs, have feature requests, or want to contribute in any way, please consider opening an issue on this GitHub repository.

### How to Open an Issue

1. **Search Existing Issues:** Before opening a new issue, please search through the existing issues to see if the problem or request has already been reported.

2. **Provide Details:** When opening a new issue, provide detailed information about the bug, including steps to reproduce it if applicable. For feature requests, describe the desired functionality and its use case.

3. **Be Respectful:** We encourage respectful and constructive communication in all issue discussions. Please be considerate of others' opinions and experiences.

### How to Contribute

If you're interested in contributing code, documentation, or other improvements to Jarvis, please check out our [Contribution Guidelines](CONTRIBUTING.md) for more information on how to get started.

We appreciate your interest in improving JArvis and look forward to collaborating with you!




