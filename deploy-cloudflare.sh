#!/bin/bash

echo "🚀 Deploying to Cloudflare Workers..."

# Install Wrangler if not exists
if ! command -v wrangler &> /dev/null; then
    echo "📦 Installing Wrangler..."
    npm install -g wrangler
fi

# Backup original next.config.js
echo "💾 Backing up Next.js config..."
cp next.config.js next.config.backup.js

# Use Cloudflare-specific config
echo "⚙️ Using Cloudflare config..."
cp next.config.cloudflare.js next.config.js

# Build the Next.js app for Cloudflare
echo "🏗️ Building Next.js app for Cloudflare..."
npm run build

# Restore original config
echo "🔄 Restoring original config..."
cp next.config.backup.js next.config.js
rm next.config.backup.js

# Check if out directory exists (Next.js export creates 'out' directory)
if [ -d "out" ]; then
    echo "📁 Using 'out' directory for static assets"
    # Update wrangler.toml to use 'out' directory
    sed -i.bak 's|directory = "./out"|directory = "./out"|g' wrangler.toml
fi

# Deploy to Cloudflare Workers
echo "☁️ Deploying to Cloudflare..."
wrangler deploy

echo "✅ Deployment completed!"
echo "🌐 Your app should be available on your Cloudflare Workers domain"
