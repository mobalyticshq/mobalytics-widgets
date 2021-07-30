#!/usr/bin/env bash

# Check jq is installed
if ! command -v jq &> /dev/null
then
    echo "jq is not found, please install it manually"
    exit
fi

# Check gsutil is installed
if ! command -v gsutil &> /dev/null
then
    echo "gsutil is not found, please install it manually"
    exit
fi

# get current version from package.json
VERSION=$(jq -r .version package.json)
echo Uploading build to cdn.mobalytics.gg by version "$VERSION"

read -p "Confirm (y/n)? " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    # upload by version
    gsutil -m cp -r build/*.js gs://cdn.mobalytics.gg/mobalytics-widget/latest/
    gsutil -m cp -r build/*.js.map gs://cdn.mobalytics.gg/mobalytics-widget/latest/

    # upload by latest
    gsutil -m cp -r build/*.js gs://cdn.mobalytics.gg/mobalytics-widget/"$VERSION"/
    gsutil -m cp -r build/*.js.map gs://cdn.mobalytics.gg/mobalytics-widget/"$VERSION"/

    echo "Upload complete"
    echo https://cdn.mobalytics.gg/mobalytics-widget/"$VERSION"/mobalytics-widgets.js
    echo https://cdn.mobalytics.gg/mobalytics-widget/latest/mobalytics-widgets.js
fi


