# Next.js router.push() Asynchronous Navigation Issue

This repository demonstrates a common issue encountered when using the `router.push()` method in Next.js.  The problem arises because `router.push()` is asynchronous; it doesn't block execution and the code following it will run immediately, potentially before the navigation is complete. This can lead to unexpected behavior if the subsequent code relies on the navigation being finished.

## Problem

The provided example shows a button that navigates to a new page using `router.push()`.  A `console.log()` statement is placed after the navigation attempt. Ideally, the message "Navigation complete" should appear *after* the page has changed.  However, because of the asynchronous nature of `router.push()`, the message appears *before* the navigation completes.

## Solution

The solution involves using `router.push()`'s promise or using an event listener to detect the route change.