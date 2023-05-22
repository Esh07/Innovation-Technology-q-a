# Innovation Technology Module

All of the practise questions from the module session are collected in this repository and are available in searchable form. 

These practise questions were created by Module Convenor using a Google Form (currently unavailable). 

Be aware that the answers to the questions are completely determined by the convenor. As a result, if you google or something similar, you might find another option as an answer but it hasn't been verified by me yet (to be updated once I receive the result and response). So the repository currently relies entirely on the response from the Google Form. 

## How to Contribute

This readme only visible into the new pr which i am about to create a pull request to main. It only for testing whether the ci/cd sccir[t prevent by checking if questions.json file modifieid. let's try second attem[pt

Now added th escript to check very like 
name: Check Pull Request

on:
  pull_request:
    branches:
      - main

jobs:
  check-pr:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          fetch-depth: 0

      - name: Fetch latest changes from base branch
        run: git fetch origin ${{ github.base_ref }}

      - name: Check if only question.json was modified
        run: |
          # Get the list of modified files
          MODIFIED_FILES=$(git diff --name-only origin/${{ github.base_ref }} ${{ github.event.pull_request.head.sha }})
          
          # Check if any file other than question.json was modified
          for file in $MODIFIED_FILES; do
            if [ "$file" != "question.json" ]; then
              # Close the pull request and leave a comment
              curl \
                -X POST \
                -H "Accept: application/vnd.github+json" \
                -H "Authorization: token ${{ secrets.GITHUB_TOKEN }}" \
                https://api.github.com/repos/${{ github.repository }}/issues/${{ github.event.number }}/comments \
                -d '{"body":"Only changes to `question.json` are allowed. Please update your pull request."}'
              
              curl \
                -X PATCH \
                -H "Accept: application/vnd.github+json" \
                -H "Authorization: token ${{ secrets.GITHUB_TOKEN }}" \
                https://api.github.com/repos/${{ github.repository }}/pulls/${{ github.event.number }} \
                -d '{"state":"closed"}'
              
              exit 1
            fi
          done

