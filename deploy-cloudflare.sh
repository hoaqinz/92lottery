#!/bin/bash

echo "🚀 Deploying to Cloudflare Workers..."

# Install Wrangler if not exists
if ! command -v wrangler &> /dev/null; then
    echo "📦 Installing Wrangler..."
    npm install -g wrangler
fi

# Build the Next.js app
echo "🏗️ Building Next.js app..."
bun run build

# Check if out directory exists (Next.js export creates 'out' directory)
if [ -d "out" ]; then
    echo "📁 Using 'out' directory for static assets"
    # Update wrangler.toml to use 'out' directory
    sed -i.bak 's|directory = "./.next/static"|directory = "./out"|g' wrangler.toml
fi

# Deploy to Cloudflare Workers
echo "☁️ Deploying to Cloudflare..."
wrangler deploy

echo "✅ Deployment completed!"
echo "🌐 Your app should be available on your Cloudflare Workers domain"
