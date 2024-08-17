# Azure Regions

This repository hosts a website on GitHub Pages that provides a list of Azure regions in JSON format.

## Website

The website is available at [https://azureregions.com/locations.json](https://azureregions.com/locations.json).

## How It Works

The JSON file containing the Azure regions is generated by a GitHub Action. The action runs daily and on demand, using the Azure CLI to retrieve the list of Azure regions. The command used is:

```bash
az account list-locations --query '[].{name: name, displayName: displayName}'
```

The result is a JSON file (`locations.json`) that is automatically deployed to the GitHub Pages site, making it accessible at the URL above.

### Default Redirect

The root URL of the site, [https://azureregions.com](https://azureregions.com), automatically redirects to the `locations.json` file. This means that when visiting the root of the website, you will be directly shown the JSON data.

## GitHub Action

The GitHub Action is configured to:

- Log in to Azure using the provided credentials.
- Retrieve the list of Azure regions using the Azure CLI.
- Save the regions data to a `locations.json` file.
- Deploy the `locations.json` file to GitHub Pages.
- Redirect the root URL to the `locations.json` file.

## Usage

You can access the JSON data directly from [https://azureregions.com/locations.json](https://azureregions.com/locations.json) and use it in your applications or scripts as needed.
