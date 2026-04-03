import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero with HOA content from Drupal', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('body')).toContainText('Maplewood Heights')
  })

  test('displays stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('body')).toContainText('342')
    await expect(page.locator('body')).toContainText('Homes')
  })
})

test.describe('Announcements', () => {
  test('listing page loads with announcements', async ({ page }) => {
    await page.goto('/announcements')
    await expect(page).toHaveTitle(/Announcements/)
    await expect(page.locator('body')).toContainText('Pool Season')
  })

  test('detail page loads', async ({ page }) => {
    await page.goto('/announcements/pool-season-2026')
    await expect(page.locator('body')).toContainText('Pool Season Opens Memorial Day Weekend')
  })
})

test.describe('Board Members', () => {
  test('listing page loads with board members', async ({ page }) => {
    await page.goto('/board')
    await expect(page).toHaveTitle(/Board Members/)
    await expect(page.locator('body')).toContainText('Janet Morrison')
  })

  test('detail page loads', async ({ page }) => {
    await page.goto('/board/janet-morrison')
    await expect(page.locator('body')).toContainText('Janet Morrison')
  })
})

test.describe('Events', () => {
  test('listing page loads with events', async ({ page }) => {
    await page.goto('/events')
    await expect(page).toHaveTitle(/Events/)
    await expect(page.locator('body')).toContainText('Summer Block Party')
  })

  test('detail page loads', async ({ page }) => {
    await page.goto('/events/summer-block-party')
    await expect(page.locator('body')).toContainText('Summer Block Party')
  })
})

test.describe('Resources', () => {
  test('listing page loads with resources', async ({ page }) => {
    await page.goto('/resources')
    await expect(page).toHaveTitle(/Resources/)
    await expect(page.locator('body')).toContainText('Architectural Guidelines')
  })

  test('detail page loads', async ({ page }) => {
    await page.goto('/resources/architectural-guidelines')
    await expect(page.locator('body')).toContainText('Architectural Guidelines')
  })
})

test.describe('Static pages', () => {
  test('about page loads via catch-all route', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('body')).toContainText('Maplewood Heights HOA')
  })
})

test.describe('Navigation', () => {
  test('header has working navigation links', async ({ page }) => {
    await page.goto('/')
    const nav = page.locator('header, nav')
    await expect(nav.first()).toBeVisible()
  })
})
