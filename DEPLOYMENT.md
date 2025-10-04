# 🚀 Cloudflare Deployment Guide

## Prerequisites
1. Install Wrangler CLI: `npm install -D wrangler`
2. Login to Cloudflare: `npx wrangler login`
3. Set up your Cloudflare account and get your account ID

## Deployment Commands

### Option 1: Static Site (Frontend Only)
```bash
npm run deploy:pages
```
This deploys only the React frontend to Cloudflare Pages.

### Option 2: Full-Stack with Workers
```bash
npm run deploy
```
This deploys your full-stack application to Cloudflare Workers.

### Option 3: Staging Environment
```bash
npm run deploy:staging
```
This deploys to a staging environment.

## Configuration Files

### wrangler.toml
- Main configuration file for Cloudflare Workers
- Defines build and deployment settings
- Environment-specific configurations

### Environment Variables
Set these in your Cloudflare dashboard or via Wrangler:
```bash
npx wrangler secret put FACEBOOK_ACCESS_TOKEN
npx wrangler secret put DATABASE_URL
```

## Build Process
1. `vite build` - Builds the React frontend
2. `esbuild server/index.ts` - Bundles the Express server
3. Output goes to `dist/` directory

## Troubleshooting
- Make sure all environment variables are set
- Check that your database is accessible from Cloudflare
- Verify that all dependencies are included in the build
