#!/bin/bash

# Define variables for easy updates later
USER="leila"
HOST="files.leila.dev"
DEST="code/leila.dev"
PROCESS="leila.dev"

echo "🚀 Starting deployment to $HOST..."

rsync -avz \
  --exclude 'node_modules' \
  --exclude '.git' \
  --exclude '.env' \
  --exclude 'dist' \
  ./ $USER@$HOST:$DEST

echo "✅ Transfer complete!"

# Optional: Restart the app via PM2 after transfer
echo "🔄 Restarting Node process..."
ssh $USER@$HOST "cd $DEST && pm2 restart $PROCESS "

echo "🎉 Done!"