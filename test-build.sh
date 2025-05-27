#!/bin/bash

echo "🔧 Building and testing the application..."

# Install dependencies
echo "📦 Installing dependencies..."
bun install

# Build the application
echo "🏗️ Building application..."
bun run build

# Start the application
echo "🚀 Starting application..."
bun run start &

# Wait for server to start
sleep 5

# Test if server is running
echo "🧪 Testing server..."
curl -I http://localhost:3000 || echo "❌ Server not responding"

echo "✅ Build and test completed!"
echo "🌐 Application should be running at http://localhost:3000"
