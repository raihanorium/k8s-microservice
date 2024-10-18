#!/bin/sh

# Loop through environment variables that start with VITE_
for i in $(printenv | grep '^VITE_')
do
    key=$(echo "$i" | cut -d '=' -f 1)
    value=$(echo "$i" | cut -d '=' -f 2-)

    # Log the replacement for debugging purposes
    echo "Replacing \$${key} with ${value} in all html and js files"

    # Find and replace the placeholder $VITE_ variables in .html and .js files
    find /usr/share/nginx/html -type f \( -name "*.html" -o -name "*.js" \) \
    -exec sed -i "s|\$${key}|${value}|g" '{}' +

done

# Start Nginx
nginx -g "daemon off;"
